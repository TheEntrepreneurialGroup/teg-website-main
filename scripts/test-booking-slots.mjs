/**
 * Unit test: freeSlotsFromBusy excludes busy intervals (real shipped function).
 */
import { freeSlotsFromBusy, CALENDAR } from "../server/booking-store.mjs";

const busy = [
  {
    start: new Date("2026-08-05T10:00:00+02:00"),
    end: new Date("2026-08-05T11:00:00+02:00"),
  },
];
const slots = freeSlotsFromBusy({
  busy,
  rangeStart: new Date("2026-08-05T00:00:00+02:00"),
  rangeEnd: new Date("2026-08-05T23:59:00+02:00"),
  slotMinutes: 30,
});
const starts = new Set(slots.map((s) => s.start.toISOString()));
const t = (iso) => new Date(iso).toISOString();

const checks = [
  ["blocks 10:00", !starts.has(t("2026-08-05T10:00:00+02:00"))],
  ["blocks 10:30", !starts.has(t("2026-08-05T10:30:00+02:00"))],
  ["allows 09:30", starts.has(t("2026-08-05T09:30:00+02:00"))],
  ["allows 11:00", starts.has(t("2026-08-05T11:00:00+02:00"))],
  ["calendar id set", Boolean(CALENDAR.id?.includes("@group.calendar.google.com"))],
];

let failed = false;
for (const [name, ok] of checks) {
  if (!ok) {
    console.error("FAIL", name);
    failed = true;
  } else {
    console.log("OK  ", name);
  }
}
if (failed) process.exit(1);
console.log(`OK   freeSlotsFromBusy count=${slots.length}`);
