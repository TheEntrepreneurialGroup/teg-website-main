/**
 * Unit tests for shipped tegSchedulerCore.mjs + structural no-Calendly checks.
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  FREE_DATE_HORIZON_DAYS,
  TEG_SCHEDULER_HOSTS,
  buildMonthGrid,
  canGoNextFromDatetime,
  countAvailableInGrid,
  expandFreeDates,
  inviteeDetailsValid,
  nextSchedulerStep,
  shiftMonth,
  toYmd,
} from "../src/pages/tegSchedulerCore.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
let failed = false;
function fail(msg) {
  console.error(`FAIL: ${msg}`);
  failed = true;
}
function ok(msg) {
  console.log(`OK   ${msg}`);
}

// Hosts
if (
  !TEG_SCHEDULER_HOSTS.includes("Corbinian Massinger") ||
  !TEG_SCHEDULER_HOSTS.includes("Leonard Beckmann")
) {
  fail("TEG_SCHEDULER_HOSTS must include both hosts");
} else {
  ok("dual hosts exported");
}

// Month grid
const free = new Set(["2026-08-04", "2026-08-05"]);
const grid = buildMonthGrid(2026, 8, free);
const day4 = grid.find((c) => c.ymd === "2026-08-04");
const day1 = grid.find((c) => c.ymd === "2026-08-01");
if (!day4?.available || day1?.available) {
  fail("buildMonthGrid available flags wrong");
} else if (grid.length % 7 !== 0) {
  fail("grid must be full weeks");
} else {
  ok("buildMonthGrid availability");
}

// Steps
if (nextSchedulerStep("datetime", "next") !== "details") {
  fail("datetime+next → details");
}
if (nextSchedulerStep("details", "back") !== "datetime") {
  fail("details+back → datetime");
}
if (nextSchedulerStep("details", "submit-ok") !== "success") {
  fail("details+submit-ok → success");
}
if (!canGoNextFromDatetime("2026-08-04", "iso") || canGoNextFromDatetime("", "")) {
  fail("canGoNextFromDatetime");
} else {
  ok("step machine");
}

// Invitee
if (!inviteeDetailsValid("Ada Lovelace", "ada@example.com")) fail("valid invitee");
if (inviteeDetailsValid("A", "x") || inviteeDetailsValid("", "a@b.c")) {
  fail("invalid invitee should fail");
} else {
  ok("inviteeDetailsValid");
}

const sm = shiftMonth(2026, 12, 1);
if (sm.year !== 2027 || sm.month !== 1) fail("shiftMonth wrap");
else ok("shiftMonth");

// Multi-month free dates (bug: only current month lit)
const fixedFrom = new Date(2026, 7, 4, 12, 0, 0, 0); // 4 Aug 2026
const expanded = expandFreeDates([], {
  from: fixedFrom,
  horizonDays: FREE_DATE_HORIZON_DAYS,
});
const months = new Set(expanded.map((y) => y.slice(0, 7)));
if (expanded.length < 60) fail(`expected long free list, got ${expanded.length}`);
if (!months.has("2026-08") || !months.has("2026-09") || !months.has("2026-10")) {
  fail(
    `free weekdays must span multiple months from Aug 2026, got ${[...months].join(",")}`,
  );
} else {
  ok("generate/expand free weekdays spans Aug+Sep+Oct 2026");
}
const sepGrid = buildMonthGrid(2026, 9, expanded);
const octGrid = buildMonthGrid(2026, 10, expanded);
if (countAvailableInGrid(sepGrid) < 1 || countAvailableInGrid(octGrid) < 1) {
  fail("Sep/Oct grids must have available days with expanded free list");
} else {
  ok(
    `multi-month grids: Sep available=${countAvailableInGrid(sepGrid)}, Oct=${countAvailableInGrid(octGrid)}`,
  );
}
if (toYmd("2026-09-15T10:00:00.000Z") !== "2026-09-15") {
  fail("toYmd must normalize ISO timestamps");
} else {
  ok("toYmd normalizes API date tokens");
}

// RequestDemo books via Calendly embed (replaces custom in-house UI)
const pageSrc = await readFile(
  path.join(root, "src/pages/RequestDemo.tsx"),
  "utf8",
);
if (
  !pageSrc.includes("calendly-inline-widget") ||
  !pageSrc.includes("assets.calendly.com") ||
  !pageSrc.includes("corbinian-massinger-teg-ev/30min")
) {
  fail("RequestDemo must embed Calendly 30min widget");
} else {
  ok("RequestDemo embeds Calendly 30min widget");
}
if (!pageSrc.includes("leo-corbi.webp") || !pageSrc.includes("rd-calendly-aside")) {
  fail("host photo must sit beside Calendly (rd-calendly-aside + leo-corbi)");
} else {
  ok("host photo layout markers present beside Calendly");
}

// Booking CTAs scroll to bottom scheduler
if (!pageSrc.includes("scrollToBooking")) {
  fail("scrollToBooking helper missing");
} else if (!pageSrc.includes('id={BOOKING_SECTION_ID}') && !pageSrc.includes('id="termin-buchen"')) {
  fail("bottom section id termin-buchen missing");
} else if ((pageSrc.match(/data-booking-cta="scroll-to-termin-buchen"/g) || []).length < 2) {
  fail("expected ≥2 booking CTAs with data-booking-cta scroll marker");
} else {
  ok("booking CTAs marked to scroll to #termin-buchen");
}

if (failed) {
  console.error("\nverify-inhouse-scheduler: FAILED");
  process.exit(1);
}
console.log("\nverify-inhouse-scheduler: all checks passed");
