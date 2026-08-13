/**
 * Unit tests for shipped hero scroll → video time math (real module).
 * Also structural gates for continuous rAF scrub + sticky pin.
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  heroPinProgress,
  progressToVideoTime,
  heroStillPinned,
  headerGlassEligible,
  heroOverlayOpacity,
  heroFormOpacity,
  HERO_OVERLAY_FADE_END,
  headerBottomCrossedTop,
  formatVideoPhase,
  formatVideoScrubActive,
  formatVideoShouldLoad,
  documentPinProgress,
} from "../src/pages/heroScrollScrub.mjs";

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

// ——— Pure math (shipped functions) ———
const cases = [
  { top: 0, h: 3000, vh: 800, expect: 0 },
  { top: -1100, h: 3000, vh: 800, expect: 0.5 },
  { top: -2200, h: 3000, vh: 800, expect: 1 },
  { top: 100, h: 3000, vh: 800, expect: 0 },
  { top: -5000, h: 3000, vh: 800, expect: 1 },
];
for (const c of cases) {
  const p = heroPinProgress(c.top, c.h, c.vh);
  if (Math.abs(p - c.expect) > 1e-9) {
    fail(`heroPinProgress(${c.top},${c.h},${c.vh})=${p}, expected ${c.expect}`);
  }
}
if (!failed) ok(`heroPinProgress maps pin scroll (${cases.length} cases)`);

if (progressToVideoTime(0, 10) !== 0) fail("progress 0 → time 0");
if (progressToVideoTime(1, 10) !== 10) fail("progress 1 → duration");
if (Math.abs(progressToVideoTime(0.25, 10) - 2.5) > 1e-9) {
  fail("progress 0.25 → 2.5s");
}
if (progressToVideoTime(0.5, NaN) !== 0) fail("invalid duration → 0");
if (heroStillPinned(0.99) !== true || heroStillPinned(1) !== false) {
  fail("heroStillPinned boundary");
}
if (!failed) ok("progressToVideoTime + heroStillPinned");

// Header glass: off while scrub unfinished; on immediately at finished (progress ≥ 1)
const glassCases = [
  { p: 0, expect: false },
  { p: 0.5, expect: false },
  { p: 0.99, expect: false },
  { p: 1, expect: true },
  { p: 1.0, expect: true },
  { p: 1.5, expect: true }, // clamped callers still report finished
  { p: NaN, expect: false },
];
for (const c of glassCases) {
  const got = headerGlassEligible(c.p);
  if (got !== c.expect) {
    fail(`headerGlassEligible(${c.p})=${got}, expected ${c.expect}`);
  }
}
// Inverse of heroStillPinned for finite 0..1 samples
for (const p of [0, 0.25, 0.5, 0.99, 1]) {
  if (headerGlassEligible(p) !== !heroStillPinned(p)) {
    fail(`headerGlassEligible(${p}) must equal !heroStillPinned(${p})`);
  }
}
if (!failed) {
  ok(
    "headerGlassEligible: mid-scrub off (0/0.5/0.99), finished on (≥1)",
  );
}

// Overlay: full at 0, gone at 50%
if (Math.abs(heroOverlayOpacity(0) - 1) > 1e-9) fail("overlay at 0 must be 1");
if (Math.abs(heroOverlayOpacity(0.25) - 0.5) > 1e-9) {
  fail("overlay at 25% must be 0.5");
}
if (heroOverlayOpacity(0.5) !== 0 || heroOverlayOpacity(0.9) !== 0) {
  fail("overlay at ≥50% must be 0");
}
// Overlay UI: solid at rest, gone after the first two video keyframes
if (heroFormOpacity(0) !== 1) {
  fail("form at rest (progress 0) must be 1");
}
if (Math.abs(heroFormOpacity(HERO_OVERLAY_FADE_END / 2) - 0.5) > 1e-9) {
  fail("form at one keyframe must be 0.5");
}
if (heroFormOpacity(HERO_OVERLAY_FADE_END) !== 0) {
  fail("form at two keyframes must be 0");
}
if (heroFormOpacity(0.01) !== 0 || heroFormOpacity(0.4) !== 0) {
  fail("form must stay 0 after the two-keyframe fade");
}
if (!failed) ok("hero overlay fades out across the first two video keyframes");

// Mid-range monotonic under continuous “scroll” samples
let prev = -1;
for (let i = 0; i <= 40; i++) {
  const top = -(i / 40) * (3000 - 800);
  const p = heroPinProgress(top, 3000, 800);
  const t = progressToVideoTime(p, 10);
  if (t < prev - 1e-9) fail(`non-monotonic time at step ${i}: ${t} < ${prev}`);
  prev = t;
}
if (!failed) ok("continuous mid-range progress is strictly non-decreasing");

// Format video: header-edge gates (heading load → static → scrub)
const hb = 92;
if (headerBottomCrossedTop(hb, 200)) fail("200 > header bottom should not cross");
if (!headerBottomCrossedTop(hb, 92)) fail("equal tops should count as crossed");
if (!headerBottomCrossedTop(hb, 50)) fail("50 < header bottom should cross");
if (formatVideoPhase(hb, 200, 400) !== "idle") fail("phase idle expected");
if (formatVideoPhase(hb, 80, 200) !== "loaded-static") {
  fail("phase loaded-static expected after heading cross");
}
if (formatVideoPhase(hb, 40, 50) !== "scrub") fail("phase scrub expected");
if (formatVideoShouldLoad("idle")) fail("should not load in idle");
if (!formatVideoShouldLoad("loaded-static") || !formatVideoShouldLoad("scrub")) {
  fail("should load in static/scrub");
}
if (formatVideoScrubActive("loaded-static") || !formatVideoScrubActive("scrub")) {
  fail("scrub only active in scrub phase");
}
if (!failed) ok("formatVideoPhase header-edge gates (load / static / scrub)");

// documentPinProgress for sticky format pin
if (documentPinProgress(1000, 1000, 3000, 800) !== 0) {
  fail("documentPin at pin top → 0");
}
if (Math.abs(documentPinProgress(1000 + 1100, 1000, 3000, 800) - 0.5) > 1e-9) {
  fail("documentPin mid runway → 0.5");
}
if (documentPinProgress(1000 + 2200, 1000, 3000, 800) !== 1) {
  fail("documentPin end runway → 1");
}
if (!failed) ok("documentPinProgress maps scrollY through sticky pin");

// ——— Structural: RequestDemo uses rAF scrub, not scroll-end only ———
const pageSrc = await readFile(
  path.join(root, "src/pages/RequestDemo.tsx"),
  "utf8",
);
const cssSrc = await readFile(
  path.join(root, "src/pages/request-demo.css"),
  "utf8",
);

if (!pageSrc.includes("requestAnimationFrame") || !pageSrc.includes("tick")) {
  fail("RequestDemo must scrub on requestAnimationFrame (continuous path)");
} else {
  ok("RequestDemo uses requestAnimationFrame scrub loop");
}
if (
  !pageSrc.includes("format-scrub.mp4") ||
  !pageSrc.includes("format-video-pin") ||
  !pageSrc.includes("formatVideoPhase") ||
  !pageSrc.includes("Das TEG Konferenz Format")
) {
  fail("format sticky scrub section + heading gate missing from RequestDemo");
} else if (
  !cssSrc.includes(".rd-format-video-scroll") ||
  !cssSrc.includes(".rd-format-video-media")
) {
  fail("format video sticky pin CSS missing");
} else {
  ok("format video pin + heading markers present (no free-run autoplay path)");
}
if (!pageSrc.includes("heroScrollScrub") && !pageSrc.includes("heroPinProgress")) {
  fail("RequestDemo must import shipped heroPinProgress mapping");
} else {
  ok("RequestDemo imports heroScrollScrub mapping");
}
// Glass header timing: scrub-finished gate, not early scrollY mid-pin
if (!pageSrc.includes("headerGlassEligible")) {
  fail("RequestDemo must drive glass via shipped headerGlassEligible");
} else if (!pageSrc.includes("setHeaderScrolled(glassOn)")) {
  fail("RequestDemo must setHeaderScrolled from headerGlassEligible result");
} else if (
  /setHeaderScrolled\(\s*(?:window\.)?scrollY\s*[><=]/.test(pageSrc) ||
  /setHeaderScrolled\(\s*(?:window\.)?pageYOffset/.test(pageSrc)
) {
  fail("header glass must not use independent scrollY threshold");
} else if (
  // Throttle block must not be the only path that sets glass (finished edge skip risk)
  /if\s*\(\s*Math\.abs\(\s*progress\s*-\s*lastUi\s*\)\s*>=\s*0\.01\s*\)\s*\{[^}]*setHeaderScrolled/s.test(
    pageSrc,
  ) &&
  !pageSrc.includes("glassOn !== lastGlass")
) {
  fail(
    "header glass must update immediately on finished edge, not only inside 0.01 UI throttle",
  );
} else {
  ok(
    "header glass wired to headerGlassEligible + immediate finished-edge update (not scrollY)",
  );
}
if (!pageSrc.includes("wheel") || !pageSrc.includes("touchmove")) {
  fail("scrub kick must listen to wheel + touchmove (not only scroll settle)");
} else {
  ok("wheel + touchmove kick continuous scrub");
}
if (!pageSrc.includes("seeked")) {
  fail("seeked handler required for continuous seek queue");
} else {
  ok("seeked handler present for seek queue");
}
// Must not hide video during seeks (opacity 0 while seeking = bursty UX)
if (
  /videoSynced\s*\?\s*["']1["']\s*:\s*["']0["']/.test(pageSrc) ||
  /opacity\s*=\s*videoSynced\s*\?/.test(pageSrc) ||
  (/video\.style\.opacity\s*=\s*.*seeking/.test(pageSrc) &&
    pageSrc.includes('opacity = videoSynced'))
) {
  fail("hero video must stay visible during seeks (no opacity-0 while seeking)");
} else if (
  !pageSrc.includes('video.style.opacity = videoReadyRef.current ? "1" : "0"') &&
  !pageSrc.includes("video.style.opacity = videoReadyRef.current ? '1' : '0'")
) {
  // Accept any path that sets opacity 1 once ready without seeking gate
  if (
    !/video\.style\.opacity\s*=\s*videoReadyRef\.current\s*\?\s*["']1["']/.test(
      pageSrc,
    )
  ) {
    fail(
      "hero video opacity must be 1 once ready (not gated on seeking/synced)",
    );
  } else {
    ok("hero video stays opacity 1 once ready (not hidden while seeking)");
  }
} else {
  ok("hero video stays opacity 1 once ready (not hidden while seeking)");
}
if (
  !cssSrc.includes(".rd-hero-scroll") ||
  !/\.rd-hero\s*\{[^}]*position:\s*sticky/s.test(cssSrc)
) {
  fail("sticky hero pin CSS missing");
} else {
  ok("sticky .rd-hero inside .rd-hero-scroll");
}
// overflow-x:hidden property on .rd-page breaks sticky (ignore comments)
const pageBlock = (cssSrc.match(/\.rd-page\s*\{[^}]+\}/s)?.[0] || "").replace(
  /\/\*[\s\S]*?\*\//g,
  "",
);
if (/overflow-x:\s*hidden/.test(pageBlock)) {
  fail(".rd-page overflow-x:hidden would break position:sticky hero");
} else {
  ok(".rd-page does not use overflow-x:hidden (sticky-safe)");
}

if (failed) {
  console.error("\nverify-hero-scrub: FAILED");
  process.exit(1);
}
console.log("\nverify-hero-scrub: all checks passed");
