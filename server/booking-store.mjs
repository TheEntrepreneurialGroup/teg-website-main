/**
 * In-process booking store + free-slot math for /api/booking/*
 * Optional Google Calendar freeBusy + events.insert when GOOGLE_ACCESS_TOKEN is set.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dataDir = path.join(root, "server", "data");
const busyFile = path.join(dataDir, "busy.json");
const bookingsFile = path.join(dataDir, "bookings.json");

export const CALENDAR = {
  id:
    process.env.MEETING_CALENDAR_ID ||
    "c_05864dfeecbe9ca93aee08ea1cb75f91eeabcda37f624396a4060f7066914e2d@group.calendar.google.com",
  name: "TEG Meeting Bookings",
  timezone: "Europe/Berlin",
  slotMinutes: 30,
  /** Match in-house scheduler multi-month navigation (~6 months). */
  horizonDays: 180,
  owners: [
    "corbinian.massinger@teg-ev.de",
    "leonard.beckmann@teg-ev.de",
    "leonnard.beckmann@teg-ev.de",
  ],
  businessHours: {
    0: ["09:00", "17:00"],
    1: ["09:00", "17:00"],
    2: ["09:00", "17:00"],
    3: ["09:00", "17:00"],
    4: ["09:00", "17:00"],
  },
};

function ensureData() {
  if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });
  if (!existsSync(busyFile)) writeFileSync(busyFile, "[]", "utf8");
  if (!existsSync(bookingsFile)) writeFileSync(bookingsFile, "[]", "utf8");
}

function loadBusy() {
  ensureData();
  const raw = JSON.parse(readFileSync(busyFile, "utf8"));
  return raw.map((b) => ({
    start: new Date(b.start),
    end: new Date(b.end),
  }));
}

function saveBusy(busy) {
  ensureData();
  writeFileSync(
    busyFile,
    JSON.stringify(
      busy.map((b) => ({ start: b.start.toISOString(), end: b.end.toISOString() })),
      null,
      2,
    ),
    "utf8",
  );
}

function loadBookings() {
  ensureData();
  return JSON.parse(readFileSync(bookingsFile, "utf8"));
}

function saveBookings(list) {
  ensureData();
  writeFileSync(bookingsFile, JSON.stringify(list, null, 2), "utf8");
}

// —— free slot math (mirrors src/lib/meetingSlots.ts) ——

function mergeBusy(busy) {
  if (!busy.length) return [];
  const ordered = [...busy].sort((a, b) => a.start - b.start);
  const merged = [{ start: ordered[0].start, end: ordered[0].end }];
  for (let i = 1; i < ordered.length; i++) {
    const cur = ordered[i];
    const last = merged[merged.length - 1];
    if (cur.start <= last.end) {
      last.end = new Date(Math.max(last.end.getTime(), cur.end.getTime()));
    } else merged.push({ start: cur.start, end: cur.end });
  }
  return merged;
}

function overlaps(a, b) {
  return a.start < b.end && b.start < a.end;
}

function subtractBusy(window, busy) {
  let free = [{ ...window }];
  for (const b of mergeBusy(busy)) {
    const next = [];
    for (const f of free) {
      if (!overlaps(f, b)) {
        next.push(f);
        continue;
      }
      if (f.start < b.start)
        next.push({ start: f.start, end: new Date(Math.min(f.end, b.start)) });
      if (b.end < f.end)
        next.push({ start: new Date(Math.max(f.start, b.end)), end: f.end });
    }
    free = next.filter((x) => x.end > x.start);
  }
  return free;
}

function zonedLocalDate(y, mo, day, hh, mm, timeZone) {
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
    const get = (t) => Number(parts.find((p) => p.type === t)?.value ?? "0");
    const got = Date.UTC(get("year"), get("month") - 1, get("day"), get("hour"), get("minute"), 0);
    const want = Date.UTC(y, mo - 1, day, hh, mm, 0);
    guess += want - got;
  }
  return new Date(guess);
}

function ymdInTz(d, timeZone) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}

function weekdayMon0InTz(d, timeZone) {
  const wd = new Intl.DateTimeFormat("en-US", { timeZone, weekday: "short" }).format(d);
  return { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 }[wd] ?? 0;
}

export function freeSlotsFromBusy({
  busy,
  rangeStart,
  rangeEnd,
  slotMinutes = 30,
  businessHours = CALENDAR.businessHours,
  timeZone = CALENDAR.timezone,
}) {
  const durationMs = slotMinutes * 60_000;
  const stepMs = durationMs;
  const slots = [];
  let cursor = new Date(rangeStart);
  const endMs = rangeEnd.getTime();
  const seen = new Set();
  while (cursor.getTime() < endMs + 86400000) {
    const ymd = ymdInTz(cursor, timeZone);
    if (seen.has(ymd)) {
      cursor = new Date(cursor.getTime() + 12 * 3600000);
      continue;
    }
    seen.add(ymd);
    const [ys, mos, ds] = ymd.split("-").map(Number);
    const wd = weekdayMon0InTz(zonedLocalDate(ys, mos, ds, 12, 0, timeZone), timeZone);
    const bh = businessHours[wd];
    if (!bh) {
      cursor = new Date(cursor.getTime() + 86400000);
      continue;
    }
    const [sh, sm] = bh[0].split(":").map(Number);
    const [eh, em] = bh[1].split(":").map(Number);
    let dayStart = zonedLocalDate(ys, mos, ds, sh, sm, timeZone);
    let dayEnd = zonedLocalDate(ys, mos, ds, eh, em, timeZone);
    dayStart = new Date(Math.max(dayStart.getTime(), rangeStart.getTime()));
    dayEnd = new Date(Math.min(dayEnd.getTime(), rangeEnd.getTime()));
    if (dayEnd <= dayStart) {
      cursor = new Date(cursor.getTime() + 86400000);
      continue;
    }
    for (const fre of subtractBusy({ start: dayStart, end: dayEnd }, busy)) {
      let t = fre.start.getTime();
      const rem = t % stepMs;
      if (rem) t += stepMs - rem;
      while (t + durationMs <= fre.end.getTime()) {
        slots.push({ start: new Date(t), end: new Date(t + durationMs) });
        t += stepMs;
      }
    }
    cursor = new Date(cursor.getTime() + 86400000);
  }
  return slots;
}

function formatTime(d, tz = CALENDAR.timezone) {
  return new Intl.DateTimeFormat("de-DE", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(d);
}

function slotDto(iv) {
  return {
    start: iv.start.toISOString(),
    end: iv.end.toISOString(),
    date: ymdInTz(iv.start, CALENDAR.timezone),
    time_label: formatTime(iv.start),
    end_time_label: formatTime(iv.end),
  };
}

async function googleFreeBusy(timeMin, timeMax) {
  const token = process.env.GOOGLE_ACCESS_TOKEN;
  if (!token) return null;
  const body = {
    timeMin: timeMin.toISOString(),
    timeMax: timeMax.toISOString(),
    items: [{ id: CALENDAR.id }],
    timeZone: "UTC",
  };
  const r = await fetch("https://www.googleapis.com/calendar/v3/freeBusy", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!r.ok) throw new Error(`freeBusy ${r.status}: ${await r.text()}`);
  const data = await r.json();
  const busy = data.calendars?.[CALENDAR.id]?.busy || [];
  return busy.map((b) => ({ start: new Date(b.start), end: new Date(b.end) }));
}

async function googleCreateEvent(req) {
  const token = process.env.GOOGLE_ACCESS_TOKEN;
  if (!token) return null;
  const attendees = [
    { email: req.email },
    ...CALENDAR.owners
      .filter((o) => o.toLowerCase() !== req.email.toLowerCase())
      .map((email) => ({ email })),
  ];
  const event = {
    summary: `[TEG Meeting] ${req.name}`,
    description: `Visitor: ${req.name}\nEmail: ${req.email}\nCompany: ${req.company || ""}\nPhone: ${req.phone || ""}\n\n${req.notes || ""}`,
    start: { dateTime: req.start, timeZone: CALENDAR.timezone },
    end: { dateTime: req.end, timeZone: CALENDAR.timezone },
    attendees,
  };
  const url = new URL(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR.id)}/events`,
  );
  url.searchParams.set("sendUpdates", "all");
  const r = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });
  if (!r.ok) throw new Error(`create event ${r.status}: ${await r.text()}`);
  return r.json();
}

function rangeBounds() {
  const now = new Date();
  const start = new Date(now.getTime() + 60 * 60_000);
  start.setMinutes(0, 0, 0);
  const end = new Date(now.getTime() + CALENDAR.horizonDays * 86400000);
  end.setHours(23, 59, 59, 0);
  return { start, end };
}

export async function getFreeSlots() {
  const { start, end } = rangeBounds();
  let busy = loadBusy();
  try {
    const g = await googleFreeBusy(start, end);
    if (g) busy = g;
  } catch (e) {
    console.warn("[booking] google freeBusy failed, using local busy:", e.message);
  }
  // merge local bookings into busy
  for (const b of loadBookings()) {
    busy.push({ start: new Date(b.start), end: new Date(b.end) });
  }
  return freeSlotsFromBusy({
    busy,
    rangeStart: start,
    rangeEnd: end,
    slotMinutes: CALENDAR.slotMinutes,
  });
}

export async function listFreeDates() {
  const slots = await getFreeSlots();
  const dates = [...new Set(slots.map((s) => ymdInTz(s.start, CALENDAR.timezone)))].sort();
  return {
    timezone: CALENDAR.timezone,
    slot_minutes: CALENDAR.slotMinutes,
    calendar_id: CALENDAR.id,
    calendar_name: CALENDAR.name,
    dates,
    count_slots: slots.length,
  };
}

export async function listFreeTimes(date) {
  const slots = (await getFreeSlots()).filter(
    (s) => ymdInTz(s.start, CALENDAR.timezone) === date,
  );
  return {
    date,
    timezone: CALENDAR.timezone,
    times: slots.map(slotDto),
  };
}

export async function bookSlot(payload) {
  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim().toLowerCase();
  const start = new Date(payload.start);
  const end = new Date(payload.end);
  if (name.length < 2) throw Object.assign(new Error("name required"), { status: 400 });
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
    throw Object.assign(new Error("email invalid"), { status: 400 });
  if (!(end > start)) throw Object.assign(new Error("invalid slot"), { status: 400 });

  const slots = await getFreeSlots();
  const ok = slots.some(
    (s) => s.start.toISOString() === start.toISOString() && s.end.toISOString() === end.toISOString(),
  );
  if (!ok) throw Object.assign(new Error("slot_not_offered"), { status: 400 });

  // local busy mark
  const busy = loadBusy();
  if (busy.some((b) => overlaps(b, { start, end }))) {
    throw Object.assign(new Error("slot_no_longer_free"), { status: 409 });
  }
  busy.push({ start, end });
  saveBusy(busy);

  let googleEvent = null;
  try {
    googleEvent = await googleCreateEvent({
      name,
      email,
      start: start.toISOString(),
      end: end.toISOString(),
      company: payload.company,
      phone: payload.phone,
      notes: payload.notes,
    });
  } catch (e) {
    console.warn("[booking] google create failed:", e.message);
  }

  const booking = {
    id: googleEvent?.id || `local-${Date.now()}`,
    name,
    email,
    company: payload.company || "",
    phone: payload.phone || "",
    start: start.toISOString(),
    end: end.toISOString(),
    calendar_id: CALENDAR.id,
    htmlLink: googleEvent?.htmlLink || null,
    receipt_channel: googleEvent
      ? "calendar_invite_sendUpdates_all"
      : "local_store_pending_google_token",
    owners: CALENDAR.owners,
    created_at: new Date().toISOString(),
  };
  const list = loadBookings();
  list.push(booking);
  saveBookings(list);

  return {
    ok: true,
    event_id: booking.id,
    html_link: booking.htmlLink,
    receipt: {
      channel: booking.receipt_channel,
      to: email,
      subject: `TEG Terminbestätigung — ${formatTime(start)}`,
      body: `Hallo ${name},\n\nIhr Gespräch mit TEG e.V. ist reserviert.\nBeginn: ${start.toISOString()}\nEnde: ${end.toISOString()}\n\nKalender: ${CALENDAR.name}\n\nMit freundlichen Grüßen\nTEG e.V.\n`,
      owners_notified: CALENDAR.owners,
    },
    message:
      "Termin gebucht. Bestätigung und Kalendereinladung gehen an Ihre E-Mail-Adresse.",
  };
}

export function handleBookingApi(req, res, urlPath, searchParams) {
  const send = (code, obj) => {
    res.statusCode = code;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");
    res.end(JSON.stringify(obj));
  };

  if (req.method === "GET" && urlPath === "/api/booking/health") {
    return send(200, {
      ok: true,
      calendar_id: CALENDAR.id,
      calendar_name: CALENDAR.name,
      google_token: Boolean(process.env.GOOGLE_ACCESS_TOKEN),
      owners: CALENDAR.owners,
    });
  }
  if (req.method === "GET" && urlPath === "/api/booking/free-dates") {
    return listFreeDates()
      .then((d) => send(200, d))
      .catch((e) => send(500, { error: String(e.message || e) }));
  }
  if (req.method === "GET" && urlPath === "/api/booking/free-times") {
    const date = searchParams.get("date");
    if (!date) return send(400, { error: "date required" });
    return listFreeTimes(date)
      .then((d) => send(200, d))
      .catch((e) => send(500, { error: String(e.message || e) }));
  }
  if (req.method === "POST" && urlPath === "/api/booking/book") {
    let raw = "";
    req.on("data", (c) => {
      raw += c;
    });
    req.on("end", () => {
      try {
        const payload = JSON.parse(raw || "{}");
        bookSlot(payload)
          .then((d) => send(201, d))
          .catch((e) => send(e.status || 500, { error: String(e.message || e) }));
      } catch {
        send(400, { error: "invalid json" });
      }
    });
    return;
  }
  send(404, { error: "not found" });
}
