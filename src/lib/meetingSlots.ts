/**
 * Pure free-slot computation from busy intervals.
 * Busy → bookable free slots within business hours. No I/O.
 */

export type Interval = { start: Date; end: Date };

export type BusinessHours = Record<number, [string, string]>; // weekday 0=Mon → ["HH:MM","HH:MM"]

export const DEFAULT_BUSINESS_HOURS: BusinessHours = {
  0: ["09:00", "17:00"],
  1: ["09:00", "17:00"],
  2: ["09:00", "17:00"],
  3: ["09:00", "17:00"],
  4: ["09:00", "17:00"],
};

export const MEETING_CALENDAR = {
  id: "c_05864dfeecbe9ca93aee08ea1cb75f91eeabcda37f624396a4060f7066914e2d@group.calendar.google.com",
  name: "TEG Meeting Bookings",
  timezone: "Europe/Berlin",
  slotMinutes: 30,
  horizonDays: 21,
  owners: [
    "corbinian.massinger@teg-ev.de",
    "leonard.beckmann@teg-ev.de",
    "leonnard.beckmann@teg-ev.de",
  ],
} as const;

function parseHm(hm: string): { h: number; m: number } {
  const [h, m] = hm.split(":").map(Number);
  return { h, m };
}

/** Local wall-time helpers for Europe/Berlin via Intl (no extra deps). */
function ymdInTz(d: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}

function weekdayMon0InTz(d: Date, timeZone: string): number {
  const wd = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
  }).format(d);
  const map: Record<string, number> = {
    Mon: 0,
    Tue: 1,
    Wed: 2,
    Thu: 3,
    Fri: 4,
    Sat: 5,
    Sun: 6,
  };
  return map[wd] ?? 0;
}

/** Build a Date for local Y-M-D HH:MM in the given IANA zone (approximate via offset probe). */
function zonedLocalDate(
  y: number,
  mo: number,
  day: number,
  hh: number,
  mm: number,
  timeZone: string,
): Date {
  // Iteratively find UTC instant whose wall time in zone matches
  let guess = Date.UTC(y, mo - 1, day, hh, mm, 0);
  for (let i = 0; i < 3; i++) {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    }).formatToParts(new Date(guess));
    const get = (t: string) =>
      Number(parts.find((p) => p.type === t)?.value ?? "0");
    const got = Date.UTC(
      get("year"),
      get("month") - 1,
      get("day"),
      get("hour"),
      get("minute"),
      0,
    );
    const want = Date.UTC(y, mo - 1, day, hh, mm, 0);
    guess += want - got;
  }
  return new Date(guess);
}

export function mergeBusy(busy: Interval[]): Interval[] {
  if (!busy.length) return [];
  const ordered = [...busy].sort(
    (a, b) => a.start.getTime() - b.start.getTime(),
  );
  const merged: Interval[] = [{ ...ordered[0] }];
  for (let i = 1; i < ordered.length; i++) {
    const cur = ordered[i];
    const last = merged[merged.length - 1];
    if (cur.start.getTime() <= last.end.getTime()) {
      last.end = new Date(Math.max(last.end.getTime(), cur.end.getTime()));
    } else {
      merged.push({ start: cur.start, end: cur.end });
    }
  }
  return merged;
}

export function overlaps(a: Interval, b: Interval): boolean {
  return a.start < b.end && b.start < a.end;
}

export function subtractBusy(window: Interval, busy: Interval[]): Interval[] {
  let free: Interval[] = [{ ...window }];
  for (const b of mergeBusy(busy)) {
    const next: Interval[] = [];
    for (const f of free) {
      if (!overlaps(f, b)) {
        next.push(f);
        continue;
      }
      if (f.start < b.start) {
        next.push({
          start: f.start,
          end: new Date(Math.min(f.end.getTime(), b.start.getTime())),
        });
      }
      if (b.end < f.end) {
        next.push({
          start: new Date(Math.max(f.start.getTime(), b.end.getTime())),
          end: f.end,
        });
      }
    }
    free = next.filter((x) => x.end > x.start);
  }
  return free;
}

export function freeSlotsFromBusy(opts: {
  busy: Interval[];
  rangeStart: Date;
  rangeEnd: Date;
  slotMinutes?: number;
  businessHours?: BusinessHours;
  timeZone?: string;
}): Interval[] {
  const slotMinutes = opts.slotMinutes ?? 30;
  const hours = opts.businessHours ?? DEFAULT_BUSINESS_HOURS;
  const tz = opts.timeZone ?? "Europe/Berlin";
  const durationMs = slotMinutes * 60_000;
  const stepMs = durationMs;
  const slots: Interval[] = [];

  // Iterate each calendar day in range
  let cursor = new Date(opts.rangeStart);
  // Start at midnight-ish of first day in zone
  const endMs = opts.rangeEnd.getTime();
  const seenDays = new Set<string>();

  while (cursor.getTime() < endMs + 86400000) {
    const ymd = ymdInTz(cursor, tz);
    if (seenDays.has(ymd)) {
      cursor = new Date(cursor.getTime() + 12 * 3600_000);
      continue;
    }
    seenDays.add(ymd);
    const [ys, mos, ds] = ymd.split("-").map(Number);
    const wd = weekdayMon0InTz(zonedLocalDate(ys, mos, ds, 12, 0, tz), tz);
    const bh = hours[wd];
    if (!bh) {
      cursor = new Date(cursor.getTime() + 24 * 3600_000);
      continue;
    }
    const startHm = parseHm(bh[0]);
    const endHm = parseHm(bh[1]);
    let dayStart = zonedLocalDate(ys, mos, ds, startHm.h, startHm.m, tz);
    let dayEnd = zonedLocalDate(ys, mos, ds, endHm.h, endHm.m, tz);
    dayStart = new Date(
      Math.max(dayStart.getTime(), opts.rangeStart.getTime()),
    );
    dayEnd = new Date(Math.min(dayEnd.getTime(), opts.rangeEnd.getTime()));
    if (dayEnd <= dayStart) {
      cursor = new Date(cursor.getTime() + 24 * 3600_000);
      continue;
    }
    const freeParts = subtractBusy({ start: dayStart, end: dayEnd }, opts.busy);
    for (const fre of freeParts) {
      let t = fre.start.getTime();
      // align to slot grid
      const rem = t % stepMs;
      if (rem) t += stepMs - rem;
      while (t + durationMs <= fre.end.getTime()) {
        slots.push({ start: new Date(t), end: new Date(t + durationMs) });
        t += stepMs;
      }
    }
    cursor = new Date(cursor.getTime() + 24 * 3600_000);
  }
  return slots;
}

export function freeDates(
  slots: Interval[],
  timeZone = "Europe/Berlin",
): string[] {
  const s = new Set(slots.map((x) => ymdInTz(x.start, timeZone)));
  return [...s].sort();
}

export function slotsForDate(
  slots: Interval[],
  day: string,
  timeZone = "Europe/Berlin",
): Interval[] {
  return slots.filter((x) => ymdInTz(x.start, timeZone) === day);
}

export function formatTimeLabel(d: Date, timeZone = "Europe/Berlin"): string {
  return new Intl.DateTimeFormat("de-DE", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(d);
}

export function slotToDto(iv: Interval, timeZone = "Europe/Berlin") {
  return {
    start: iv.start.toISOString(),
    end: iv.end.toISOString(),
    date: ymdInTz(iv.start, timeZone),
    time_label: formatTimeLabel(iv.start, timeZone),
    end_time_label: formatTimeLabel(iv.end, timeZone),
  };
}
