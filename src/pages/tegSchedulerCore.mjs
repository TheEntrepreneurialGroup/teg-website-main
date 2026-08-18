/**
 * Pure helpers for the in-house Calendly-like scheduler (testable without DOM).
 */

export const TEG_SCHEDULER_HOSTS = [
  "Corbinian Massinger",
  "Leonard Beckmann",
];

export const TEG_SCHEDULER_EVENT = {
  title: "Persönliches Gespräch",
  durationMin: 30,
  locationBlurb: "Webconferencing-Details nach Bestätigung.",
};

/** @param {string} ymd YYYY-MM-DD */
export function parseYmd(ymd) {
  const [y, m, d] = ymd.split("-").map(Number);
  return { y, m, d };
}

export function formatYmd(y, m, d) {
  return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

/** Monday-first week index 0..6 for JS Date.getDay() (0=Sun). */
export function mondayFirstDow(jsDow) {
  return (jsDow + 6) % 7;
}

/**
 * Build month grid cells (Mon-first). Each cell: { ymd, day, inMonth, available }.
 * @param {number} year
 * @param {number} month 1-12
 * @param {Set<string>|string[]} freeDates
 */
export function buildMonthGrid(year, month, freeDates) {
  const free =
    freeDates instanceof Set ? freeDates : new Set(freeDates || []);
  const first = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const startPad = mondayFirstDow(first.getDay());
  const cells = [];
  for (let i = 0; i < startPad; i++) {
    cells.push({ ymd: null, day: null, inMonth: false, available: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const ymd = formatYmd(year, month, d);
    cells.push({
      ymd,
      day: d,
      inMonth: true,
      available: free.has(ymd),
    });
  }
  while (cells.length % 7 !== 0) {
    cells.push({ ymd: null, day: null, inMonth: false, available: false });
  }
  return cells;
}

export function shiftMonth(year, month, delta) {
  const d = new Date(year, month - 1 + delta, 1);
  return { year: d.getFullYear(), month: d.getMonth() + 1 };
}

/**
 * @param {string} name
 * @param {string} email
 */
export function inviteeDetailsValid(name, email) {
  const n = (name || "").trim();
  const e = (email || "").trim();
  if (n.length < 2) return false;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return false;
  return true;
}

/**
 * Step machine: datetime → details → success
 * @param {'datetime'|'details'|'success'} step
 * @param {'select-day'|'select-time'|'next'|'back'|'submit-ok'} action
 */
export function nextSchedulerStep(step, action) {
  if (action === "back") {
    if (step === "details") return "datetime";
    if (step === "success") return "datetime";
    return step;
  }
  if (step === "datetime" && action === "next") return "details";
  if (step === "details" && action === "submit-ok") return "success";
  return step;
}

export function canGoNextFromDatetime(selectedDate, selectedStart) {
  return Boolean(selectedDate && selectedStart);
}

/** Display date DE long */
export function formatDateLongDe(ymd) {
  if (!ymd) return "";
  const { y, m, d } = parseYmd(ymd);
  return new Date(y, m - 1, d).toLocaleDateString("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function monthTitleDe(year, month) {
  return new Date(year, month - 1, 1).toLocaleDateString("de-DE", {
    month: "long",
    year: "numeric",
  });
}

/** Booking UI horizon: weekdays across many months (not only current month). */
export const FREE_DATE_HORIZON_DAYS = 180;

/**
 * Normalize free date tokens to YYYY-MM-DD (API may send ISO datetimes).
 * @param {string} raw
 */
export function toYmd(raw) {
  if (!raw || typeof raw !== "string") return "";
  const m = raw.trim().match(/^(\d{4}-\d{2}-\d{2})/);
  return m ? m[1] : "";
}

/**
 * Generate free weekday YMD strings from a start date across horizonDays.
 * @param {{ from?: Date, horizonDays?: number }} [opts]
 * @returns {string[]}
 */
export function generateFreeWeekdays(opts = {}) {
  const horizonDays = opts.horizonDays ?? FREE_DATE_HORIZON_DAYS;
  const from = opts.from ? new Date(opts.from) : new Date();
  from.setHours(12, 0, 0, 0);
  const end = new Date(from.getTime() + horizonDays * 86400000);
  const out = [];
  const d = new Date(from);
  d.setDate(d.getDate() + 1); // start tomorrow
  while (d <= end) {
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) {
      out.push(
        formatYmd(d.getFullYear(), d.getMonth() + 1, d.getDate()),
      );
    }
    d.setDate(d.getDate() + 1);
  }
  return out;
}

/**
 * Union API free dates with multi-month weekday fallback so next/prev months
 * still show selectable days when the API horizon is short.
 * @param {string[]} apiDates
 * @param {{ from?: Date, horizonDays?: number }} [opts]
 */
export function expandFreeDates(apiDates, opts = {}) {
  const fallback = generateFreeWeekdays(opts);
  const set = new Set();
  for (const raw of apiDates || []) {
    const y = toYmd(raw);
    if (y) set.add(y);
  }
  // If API is empty, use full fallback. If API is short, still union fallback
  // so multi-month navigation stays usable (slot fetch may still use fallback times).
  for (const y of fallback) set.add(y);
  return [...set].sort();
}

/**
 * Count available in-month cells for a grid.
 * @param {ReturnType<typeof buildMonthGrid>} grid
 */
export function countAvailableInGrid(grid) {
  return grid.filter((c) => c.inMonth && c.available).length;
}
