/**
 * Parses src/pages/eventsData.ts and asserts the /events split:
 * conferences and evening events are separate lists, the Supply Chain
 * Conference is upcoming, every upcoming conference links to a routed and
 * prerendered sub-page (its only link on /events),
 * Biotech stays a past evening event, no prior event got lost, every
 * referenced image exists, and copy uses no em or en dash as a separator.
 */
import { readFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PRERENDER_ROUTES } from "../src/seo/prerenderRoutes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dataFile = path.join(root, "src", "pages", "eventsData.ts");
const appFile = path.join(root, "src", "App.tsx");
const publicRoot = path.join(root, "public");

const SUPPLY_CHAIN_ID = "supplychainconference2026";
const SUPPLY_CHAIN_PAGE = "/events/supply-chain";
const BIOTECH_ID = "biotech-medtech-panel-2026";
const CONFERENCE_IDS = ["ai-2026", "frontier-tech-conference-2025"];
const EVENING_IDS = [
  "teg-talk-22-10-2026",
  BIOTECH_ID,
  "teg-talk-24-04-2026",
  "charging-ahead-2026",
  "enterprise-sales-2025",
  "teg-talk-24-10-2025",
  "fireside-chat-2025",
];

const failures = [];
const fail = (message) => failures.push(message);

function sliceArray(source, constName) {
  const start = source.indexOf(`export const ${constName}`);
  if (start < 0) {
    fail(`Could not locate ${constName} in ${dataFile}`);
    return "";
  }
  const bracket = source.indexOf("[", source.indexOf("=", start));
  let depth = 0;
  for (let i = bracket; i < source.length; i += 1) {
    if (source[i] === "[") depth += 1;
    else if (source[i] === "]") {
      depth -= 1;
      if (depth === 0) return source.slice(bracket, i + 1);
    }
  }
  return "";
}

function topLevelObjects(arraySource) {
  const objects = [];
  let depth = 0;
  let start = -1;
  for (let i = 1; i < arraySource.length; i += 1) {
    const ch = arraySource[i];
    if (ch === "{") {
      if (depth === 0) start = i;
      depth += 1;
    } else if (ch === "}") {
      depth -= 1;
      if (depth === 0 && start >= 0) {
        objects.push(arraySource.slice(start, i + 1));
        start = -1;
      }
    }
  }
  return objects;
}

const field = (obj, name) =>
  obj.match(new RegExp(`\\b${name}:\\s*"((?:\\\\.|[^"\\\\])*)"`))?.[1] ?? "";

async function exists(publicPath) {
  try {
    await access(path.join(publicRoot, publicPath.replace(/^\//, "")));
    return true;
  } catch {
    return false;
  }
}

const source = await readFile(dataFile, "utf8");
const lists = Object.fromEntries(
  [
    "upcomingConferences",
    "pastConferences",
    "upcomingEveningEvents",
    "pastEveningEvents",
  ].map((name) => [name, topLevelObjects(sliceArray(source, name))]),
);
const ids = Object.fromEntries(
  Object.entries(lists).map(([name, objs]) => [
    name,
    objs.map((o) => field(o, "id")),
  ]),
);

const supply = lists.upcomingConferences.find(
  (o) => field(o, "id") === SUPPLY_CHAIN_ID,
);
if (!supply) {
  fail("Supply Chain Conference must be an upcoming conference");
} else if (field(supply, "page") !== SUPPLY_CHAIN_PAGE) {
  fail(`Supply Chain Conference must link to ${SUPPLY_CHAIN_PAGE}`);
}

const appSource = await readFile(appFile, "utf8");
for (const conf of lists.upcomingConferences) {
  const id = field(conf, "id");
  const page = field(conf, "page");
  if (!page.startsWith("/events/")) {
    fail(`${id}: page must be a sub-page of /events, got "${page}"`);
    continue;
  }
  if (!appSource.includes(`path="${page.slice(1)}"`)) {
    fail(`${id}: App.tsx does not register ${page}`);
  }
  if (!PRERENDER_ROUTES.includes(page)) {
    fail(`${id}: PRERENDER_ROUTES is missing ${page}`);
  }
}

if (!ids.pastEveningEvents.includes(BIOTECH_ID)) {
  fail("Biotech panel must be a past evening event");
}
for (const id of CONFERENCE_IDS) {
  if (!ids.pastConferences.includes(id)) {
    fail(`Past conference ${id} is missing`);
  }
}
for (const id of EVENING_IDS) {
  if (!ids.pastEveningEvents.includes(id)) {
    fail(`Past evening event ${id} is missing`);
  }
}

const conferenceIds = [...ids.upcomingConferences, ...ids.pastConferences];
const eveningIds = [...ids.upcomingEveningEvents, ...ids.pastEveningEvents];
for (const id of conferenceIds) {
  if (eveningIds.includes(id))
    fail(`${id} is listed as conference and evening`);
}
const allIds = [...conferenceIds, ...eveningIds];
if (new Set(allIds).size !== allIds.length) fail("Duplicate event ids");

for (const [name, objs] of Object.entries(lists)) {
  for (const obj of objs) {
    const id = field(obj, "id");
    if (!field(obj, "title")) fail(`${name}/${id}: title is empty`);
    if (!field(obj, "date")) fail(`${name}/${id}: date is empty`);
    for (const [, img] of obj.matchAll(/\b(?:image|src):\s*"([^"]+)"/g)) {
      if (!(await exists(img))) fail(`${name}/${id}: missing asset ${img}`);
    }
    for (const key of ["description", "lede", "note"]) {
      if (/[—–]/.test(field(obj, key))) {
        fail(`${name}/${id}: ${key} contains an em or en dash`);
      }
    }
  }
}

if (failures.length > 0) {
  console.error("verify-events-data FAILED");
  for (const message of failures) console.error(`- ${message}`);
  process.exit(1);
}

console.log("verify-events-data OK");
for (const [name, list] of Object.entries(ids)) {
  console.log(`${name}: ${list.length} (${list.join(", ") || "none"})`);
}
