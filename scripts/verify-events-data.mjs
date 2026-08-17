/**
 * Parses shipped src/pages/Events.tsx event arrays.
 * Asserts the upcoming listing is the Supply Chain Conference, the
 * placeholder is gone, Biotech stays in pastEvents, and upcoming body
 * copy is complete German sentences without hyphen or em dash.
 */
import { readFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const pageFile = path.join(root, "src", "pages", "Events.tsx");
const publicRoot = path.join(root, "public");

const BIOTECH_TITLE = "Herausforderungen & Innovation in Biotech & Medtech";
const BIOTECH_ID = "biotech-medtech-panel-2026";
const PLACEHOLDER_ID = "upcoming-placeholder";
const PLACEHOLDER_TITLE = "Nächstes Event folgt in Kürze";
const PRIOR_PAST_IDS = [
  "ai-2026",
  "teg-talk-24-04-2026",
  "charging-ahead-2026",
  "frontier-tech-conference-2025",
  "enterprise-sales-2025",
  "teg-talk-24-10-2025",
  "fireside-chat-2025",
];

const failures = [];

function fail(message) {
  failures.push(message);
}

function sliceConstArray(source, constName, nextConstName) {
  const startToken = `const ${constName}`;
  const endToken = `const ${nextConstName}`;
  const start = source.indexOf(startToken);
  const end = source.indexOf(endToken);
  if (start < 0 || end < 0 || end <= start) {
    fail(`Could not locate ${constName} array in ${pageFile}`);
    return "";
  }
  return source.slice(start, end);
}

function extractTopLevelObjects(arraySource) {
  const bracket = arraySource.indexOf("[");
  if (bracket < 0) return [];
  const objects = [];
  let depth = 0;
  let start = -1;
  for (let i = bracket + 1; i < arraySource.length; i += 1) {
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

function fieldString(objectSource, field) {
  const block = new RegExp(`${field}:\\s*\`([\\s\\S]*?)\``);
  const quoted = new RegExp(`${field}:\\s*"((?:\\\\.|[^"\\\\])*)"`);
  const single = new RegExp(`${field}:\\s*'((?:\\\\.|[^'\\\\])*)'`);
  const ident = new RegExp(`${field}:\\s*([A-Za-z_][A-Za-z0-9_]*)`);
  const blockMatch = objectSource.match(block);
  if (blockMatch) return blockMatch[1].replace(/\s+/g, " ").trim();
  const quotedMatch = objectSource.match(quoted);
  if (quotedMatch) return quotedMatch[1];
  const singleMatch = objectSource.match(single);
  if (singleMatch) return singleMatch[1];
  const identMatch = objectSource.match(ident);
  if (identMatch) return identMatch[1];
  return "";
}

async function imageExists(imagePath) {
  if (!imagePath.startsWith("/")) return false;
  try {
    await access(path.join(publicRoot, imagePath.replace(/^\//, "")));
    return true;
  } catch {
    return false;
  }
}

function isGermanSentenceText(value) {
  return /[.?]/.test(value) && value.trim().length > 0;
}

function hasForbiddenDash(value) {
  return /[—–-]/.test(value);
}

const source = await readFile(pageFile, "utf8");
const upcomingSource = sliceConstArray(source, "upcomingEvents", "pastEvents");
const pastSource = sliceConstArray(source, "pastEvents", "variants");
const upcomingObjects = extractTopLevelObjects(upcomingSource);
const pastObjects = extractTopLevelObjects(pastSource);

const pastAfterToken = source.indexOf("const pastEvents");
const biotechInFile = source.indexOf(BIOTECH_TITLE);
if (biotechInFile < 0) {
  fail("Biotech title is missing from Events.tsx");
} else if (pastAfterToken < 0 || biotechInFile < pastAfterToken) {
  fail("Biotech title does not appear after const pastEvents");
}

const upcomingIds = upcomingObjects.map((obj) => fieldString(obj, "id"));
const pastIds = pastObjects.map((obj) => fieldString(obj, "id"));
const upcomingTitles = upcomingObjects.map((obj) => fieldString(obj, "title"));

if (upcomingTitles.includes(BIOTECH_TITLE)) {
  fail("Biotech title is still the upcoming listing identity");
}
if (upcomingIds.includes(BIOTECH_ID)) {
  fail("biotech-medtech-panel-2026 is still an upcomingEvents id");
}
if (upcomingIds.includes(PLACEHOLDER_ID)) {
  fail("upcoming-placeholder is still an upcomingEvents id");
}
if (upcomingTitles.includes(PLACEHOLDER_TITLE)) {
  fail("placeholder title is still the upcoming listing identity");
}

if (upcomingObjects.length < 1) {
  fail("upcomingEvents has no records");
} else {
  const first = upcomingObjects[0];
  const title = fieldString(first, "title");
  const date = fieldString(first, "date");
  const location = fieldString(first, "location");
  const description = fieldString(first, "description");
  const longText = fieldString(first, "longText");
  const image = fieldString(first, "image");
  const topic = fieldString(first, "topic");
  const category = fieldString(first, "category");

  if (!title) fail("upcoming title is empty");
  if (!/Supply Chain/i.test(title) || !/Conference/i.test(title)) {
    fail("upcoming title must contain Supply Chain and Conference");
  }
  if (title === PLACEHOLDER_TITLE) {
    fail("upcoming title is still the placeholder");
  }
  if (title === BIOTECH_TITLE) {
    fail("upcoming title is the Biotech title");
  }
  if (date !== "8.12.2026" && date !== "8. Dezember 2026") {
    fail(`upcoming date is not 8.12.2026 or 8. Dezember 2026: ${date}`);
  }
  if (!location.includes("München")) {
    fail(`upcoming location does not contain München: ${location}`);
  }
  if (!description) fail("upcoming description is empty");
  if (!longText) fail("upcoming longText is empty");
  if (!image) fail("upcoming image is empty");
  if (!(await imageExists(image))) {
    fail(`upcoming image is not an existing public asset: ${image}`);
  }
  if (!isGermanSentenceText(description)) {
    fail("upcoming description is not complete German sentence text");
  }
  if (!isGermanSentenceText(longText)) {
    fail("upcoming longText is not complete German sentence text");
  }
  if (hasForbiddenDash(description)) {
    fail("upcoming description contains a hyphen or em dash");
  }
  if (hasForbiddenDash(longText)) {
    fail("upcoming longText contains a hyphen or em dash");
  }

  const headlineFields = { title, topic, category };
  for (const [name, value] of Object.entries(headlineFields)) {
    if (
      hasForbiddenDash(value) &&
      name !== "title" &&
      name !== "topic" &&
      name !== "category"
    ) {
      fail(`${name} is not allowed to contain a hyphen`);
    }
  }
}

if (!pastIds.includes(BIOTECH_ID)) {
  fail("Biotech id is not a member of pastEvents");
}
if (!pastObjects.some((obj) => fieldString(obj, "title") === BIOTECH_TITLE)) {
  fail("Biotech title is not a member of pastEvents");
}

for (const priorId of PRIOR_PAST_IDS) {
  if (!pastIds.includes(priorId)) {
    fail(`Prior past event ${priorId} is missing from pastEvents`);
  }
}

const expectedPastCount = PRIOR_PAST_IDS.length + 1;
if (pastObjects.length !== expectedPastCount) {
  fail(
    `pastEvents length is ${pastObjects.length}, expected previous count plus one (${expectedPastCount})`,
  );
}

const collapsed = source.replace(/\s+/g, " ");
const jsxMarkers = [
  "Upcoming Highlights",
  "Past Events",
  "Details ansehen",
  "Gegründet 1986",
  "Events & Netzwerk.",
];
for (const marker of jsxMarkers) {
  if (!collapsed.includes(marker)) {
    fail(`Page markup marker missing: ${marker}`);
  }
}

if (failures.length > 0) {
  console.error("verify-events-data FAILED");
  for (const message of failures) {
    console.error(`- ${message}`);
  }
  process.exit(1);
}

const first = upcomingObjects[0];
console.log("verify-events-data OK");
console.log(`upcomingEvents count: ${upcomingObjects.length}`);
console.log(`upcoming first id: ${upcomingIds[0]}`);
console.log(`upcoming first title: ${upcomingTitles[0]}`);
console.log(`upcoming date: ${fieldString(first, "date")}`);
console.log(`upcoming location: ${fieldString(first, "location")}`);
console.log(`upcoming image: ${fieldString(first, "image")}`);
console.log(`pastEvents count: ${pastObjects.length}`);
console.log(`past first id: ${pastIds[0]}`);
console.log(`biotech in pastEvents: yes`);
console.log(`biotech in upcomingEvents: no`);
console.log(`placeholder in upcomingEvents: no`);
console.log(`description has dash: no`);
console.log(`longText has dash: no`);
