/**
 * Unit tests for shipped createSessionId (iOS / non-secure HTTP path).
 * Imports the real helper from src/utils/analytics.ts via Vite-free .ts
 * is not runnable as-is — use dynamic import of the TS source through
 * a thin re-export pattern: we load the compiled logic by evaluating
 * the exported function from a sibling .mjs reimplementation that mirrors
 * the shipped algorithm... NO: plan requires same shipped function.
 *
 * analytics.ts is TypeScript; Node can import via experimental strip or we
 * extract the pure helper to analyticsSessionId.mjs. Prefer re-export .mjs
 * that analytics.ts also imports — keep single source.
 *
 * For this repo, createSessionId is in analytics.ts. Test via:
 * node --experimental-strip-types if available, else duplicate-free path:
 * load with tsx/esbuild. Simplest reliable: put pure helper in .mjs and
 * re-export from analytics.ts.
 */
import { createSessionId } from "../src/utils/sessionId.mjs";

let failed = false;
function fail(msg) {
  console.error(`FAIL: ${msg}`);
  failed = true;
}
function ok(msg) {
  console.log(`OK   ${msg}`);
}

// (a) working randomUUID
const withUuid = {
  randomUUID: () => "11111111-2222-4333-8444-555555555555",
  getRandomValues: (arr) => {
    for (let i = 0; i < arr.length; i++) arr[i] = i;
    return arr;
  },
};
const idA = createSessionId(withUuid);
if (idA !== "11111111-2222-4333-8444-555555555555") {
  fail(`expected stub randomUUID id, got ${idA}`);
} else {
  ok("prefers crypto.randomUUID when available");
}

// (b) randomUUID missing — getRandomValues fallback
const noUuid = {
  getRandomValues: (arr) => {
    for (let i = 0; i < arr.length; i++) arr[i] = (i * 17 + 3) & 0xff;
    return arr;
  },
};
let threw = false;
let idB;
try {
  idB = createSessionId(noUuid);
} catch (e) {
  threw = true;
  fail(`getRandomValues path threw: ${e}`);
}
if (!threw) {
  if (!idB || typeof idB !== "string" || idB.length < 8) {
    fail(`fallback id empty/short: ${idB}`);
  } else if (!/^[0-9a-f-]{36}$/i.test(idB)) {
    fail(`fallback id not UUID-shaped: ${idB}`);
  } else {
    ok(`getRandomValues fallback: ${idB}`);
  }
}

// (c) no crypto at all
let idC;
try {
  idC = createSessionId(undefined);
} catch (e) {
  fail(`undefined crypto threw: ${e}`);
}
if (idC && idC.startsWith("teg-") && idC.length > 8) {
  ok(`last-resort id: ${idC}`);
} else if (idC && idC.length > 8) {
  ok(`last-resort/nonempty id without crypto: ${idC}`);
} else {
  fail(`last-resort failed: ${idC}`);
}

// (d) randomUUID throws (broken impl)
const broken = {
  randomUUID: () => {
    throw new Error("secure context required");
  },
  getRandomValues: (arr) => {
    arr.fill(9);
    return arr;
  },
};
let idD;
try {
  idD = createSessionId(broken);
} catch (e) {
  fail(`broken randomUUID path threw: ${e}`);
}
if (idD && idD.length > 8) {
  ok(`survives randomUUID throw → fallback: ${idD}`);
} else {
  fail(`broken randomUUID path empty: ${idD}`);
}

if (failed) {
  console.error("\ntest-session-id: FAILED");
  process.exit(1);
}
console.log("\ntest-session-id: all checks passed");
