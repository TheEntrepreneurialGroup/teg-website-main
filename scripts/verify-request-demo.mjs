/**
 * Structural + conversion verification for /request-demo location-host LP.
 * Immersive Gardens vertical journey (post-hero) — no 2×2 product grid freeze.
 * Drives the real shipped source and public assets — no mocked values.
 */
import { readFile, stat, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PRERENDER_ROUTES } from "../src/seo/prerenderRoutes.mjs";
import { routeSeoEntries } from "../src/seo/routeSeoEntries.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const publicRoot = path.join(root, "public");
const pageFile = path.join(root, "src", "pages", "RequestDemo.tsx");
const cssFile = path.join(root, "src", "pages", "request-demo.css");
const appFile = path.join(root, "src", "App.tsx");

/** Conversion phrases locked for Location-Host LP (ca. 125 headcount). */
const REQUIRED_COPY = [
  "Persönliches Gespräch",
  "Supply Chain",
  "Gastgeber",
  "ca. 125",
  "München",
  "2026",
  "Gespräch buchen",
  "TEG e. V.",
  "German Supply Chain Conference",
  "Privacy Optin",
  "Gespräch anfragen",
  "Politics X Supply Chain Conference",
];

const BANNED_COPY = [
  "Make every experience count",
  "Qualtrics Experience Management",
  "Request demo",
  "XM for Customer Experience",
  "Shake Shack",
  "Capterra",
];

/**
 * Primary journey assets (hero freeze + CV-bound section media).
 * Paths relative to public/. Stock card-* quartet deliberately omitted.
 */
const REQUIRED_ASSETS = [
  "request-demo/teg-logo-white.svg",
  "request-demo/hero-bg.jpg",
  "request-demo/hero-zoom.mp4",
  "request-demo/format-scrub.mp4",
  "request-demo/ai-consulting-2026/slide-01.webp",
  "request-demo/ai-consulting-2026/slide-08.webp",
  "events/converted/frontier-tech-conference-2025.webp",
];

/** Source path fragments that must appear in RequestDemo.tsx. */
const REQUIRED_ASSET_REFS = [
  "hero-bg.jpg",
  "hero-zoom.mp4",
  "format-scrub.mp4",
  "teg-logo-white.svg",
  "ai-consulting-2026/slide-01.webp",
  "ai-consulting-2026/slide-08.webp",
  "/events/converted/frontier-tech-conference-2025.webp",
  "ai-consulting-slideshow",
  "2500",
];

/**
 * Layout shell classes for Immersive Gardens vertical journey.
 * Dropped: rd-products, rd-product-card, rd-reviews, rd-testimonial,
 * rd-stats, rd-integrations (old 2×2 / bento freezes).
 */
const SHELL_CLASSES = [
  "rd-page",
  "rd-header",
  "rd-hero",
  "rd-brands", // archived component still in source for restore
  "rd-format",
  "rd-journey",
  "rd-garden",
  "rd-proof-strip",
  "rd-past-conferences",
  "rd-past-conference",
  "rd-footer",
];

/** Garden modifiers / section hooks that mark pure vertical journey. */
const JOURNEY_MARKERS = [
  "rd-garden--pain",
  "rd-past-conferences",
  "rd-past-conference",
];

/** Exactly two cherry-picked past conferences (not a 6-tile bento). */
const CONFERENCE_TITLES = [
  "AI Consulting Conference 2026",
  "Frontier Tech Conference 2025",
];

/** Old shell classes that must NOT be required as primary journey. */
const DROPPED_SHELL_CLASSES = [
  "rd-products",
  "rd-product-card",
  "rd-reviews",
  "rd-testimonial",
  "rd-stats",
];

let failed = false;
function fail(msg) {
  console.error(`FAIL: ${msg}`);
  failed = true;
}
function ok(msg) {
  console.log(`OK   ${msg}`);
}

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

// ——— 1. Route registration (production /supplychain + legacy /request-demo) ———
if (!PRERENDER_ROUTES.includes("/supplychain")) {
  fail("PRERENDER_ROUTES missing /supplychain (production path)");
} else {
  ok("PRERENDER_ROUTES includes /supplychain");
}
if (!PRERENDER_ROUTES.includes("/request-demo")) {
  fail("PRERENDER_ROUTES missing /request-demo");
} else {
  ok("PRERENDER_ROUTES includes /request-demo");
}

const seoSupply = routeSeoEntries.find((e) => e.path === "/supplychain");
const seo = routeSeoEntries.find((e) => e.path === "/request-demo");
if (!seoSupply) {
  fail("routeSeoEntries missing /supplychain");
} else {
  ok(`SEO /supplychain titleMessageId=${seoSupply.titleMessageId}`);
  if (seoSupply.openGraphImagePath !== "/request-demo/hero-bg.jpg") {
    fail(
      `supplychain openGraphImagePath must be /request-demo/hero-bg.jpg, got ${seoSupply.openGraphImagePath}`,
    );
  } else {
    ok("openGraphImagePath points at hero-bg.jpg (offer visual)");
  }
}
if (!seo) {
  fail("routeSeoEntries missing /request-demo");
} else {
  ok(`SEO /request-demo titleMessageId=${seo.titleMessageId}`);
}

const appSrc = await readFile(appFile, "utf8");
if (
  !appSrc.includes('path="/supplychain"') ||
  !appSrc.includes('path="/request-demo"') ||
  !appSrc.includes("RequestDemo")
) {
  fail("App.tsx must register RequestDemo at /supplychain and /request-demo");
} else {
  ok("App.tsx wires /supplychain + /request-demo → RequestDemo");
}

// ——— 1b. eruda mobile console is DEV-only (REMOVE_BEFORE_PRODUCTION) ———
const bootstrapFile = path.join(root, "src", "bootstrap.tsx");
const bootstrapSrc = await readFile(bootstrapFile, "utf8");
const pkg = JSON.parse(
  await readFile(path.join(root, "package.json"), "utf8"),
);
const erudaInDeps = Boolean(pkg.dependencies?.eruda);
const erudaInDevDeps = Boolean(pkg.devDependencies?.eruda);
if (erudaInDeps) {
  fail("eruda must be devDependency only — never production dependencies");
} else if (bootstrapSrc.includes("eruda") && !bootstrapSrc.includes("import.meta.env.DEV")) {
  fail("eruda usage must be gated by import.meta.env.DEV");
} else if (
  bootstrapSrc.includes("eruda") &&
  !/if\s*\(\s*import\.meta\.env\.DEV\s*\)[\s\S]*?import\(\s*["']eruda["']\s*\)/.test(
    bootstrapSrc,
  )
) {
  fail("eruda dynamic import must live inside import.meta.env.DEV block");
} else if (bootstrapSrc.includes("eruda") && !erudaInDevDeps) {
  fail("eruda referenced in bootstrap but missing from devDependencies");
} else if (bootstrapSrc.includes("eruda")) {
  ok("eruda is DEV-only (devDependency + import.meta.env.DEV gate)");
} else {
  ok("eruda not present (already removed for production)");
}

// ——— 2. Required conversion copy ———
const pageSrc = await readFile(pageFile, "utf8");
for (const phrase of REQUIRED_COPY) {
  if (!pageSrc.includes(phrase)) {
    fail(`page source missing copy: ${JSON.stringify(phrase)}`);
  }
}
if (pageSrc.includes("ca. 150") && !pageSrc.includes("ca. 125")) {
  fail("headcount still ca. 150 without ca. 125 — offer fact must be ca. 125");
}
// Hero/body offer fact: ca. 125 must appear; residual comments may mention 150→125
if ((pageSrc.match(/ca\. 125/g) || []).length < 1) {
  fail("ca. 125 headcount missing from page source");
}
if (!failed) ok(`all ${REQUIRED_COPY.length} required location-host phrases present (ca. 125)`);

// ——— 3. Banned Qualtrics product framing (user-facing source only) ———
// Strip the LOCATION_LP_BANNED_PHRASES export (test constant) so banned strings
// listed there for negative checks do not fail this scan.
const pageSrcFacing = pageSrc.replace(
  /export const LOCATION_LP_BANNED_PHRASES[\s\S]*?as const;?/,
  "",
);
for (const phrase of BANNED_COPY) {
  if (pageSrcFacing.includes(phrase)) {
    fail(`banned Qualtrics/product framing still present: ${JSON.stringify(phrase)}`);
  }
}
if (!failed) ok(`all ${BANNED_COPY.length} banned Qualtrics phrases absent from user-facing source`);

// ——— 4. Immersive Gardens shell (vertical journey) ———
const cssSrc = await readFile(cssFile, "utf8");
for (const cls of SHELL_CLASSES) {
  if (!pageSrc.includes(cls) || !cssSrc.includes(`.${cls}`)) {
    fail(`journey shell class missing from page or CSS: .${cls}`);
  }
}
for (const cls of JOURNEY_MARKERS) {
  if (!pageSrc.includes(cls)) {
    fail(`journey section marker missing from page: .${cls}`);
  }
}
if (!cssSrc.includes("Immersive Gardens")) {
  fail("Immersive Gardens vertical-journey CSS marker missing");
}
// Guard: old 2×2 product grid must not be the required primary structure
for (const cls of DROPPED_SHELL_CLASSES) {
  if (pageSrc.includes(cls)) {
    fail(`old 2×2 / mid-page shell still in page source: .${cls}`);
  }
}
if (!failed) {
  ok(
    `layout shell: ${SHELL_CLASSES.length} journey classes + ${JOURNEY_MARKERS.length} garden markers; old 2×2 freezes absent`,
  );
}

// ——— 5. Local assets / no Qualtrics CDN hotlinks for content UI ———
const hotlinkRe =
  /(?:src|href)=["'`]https?:\/\/(?:www\.)?qualtrics\.com[^"'`]*\.(?:png|jpe?g|webp|svg|gif)/gi;
const hotlinks = pageSrc.match(hotlinkRe) || [];
if (hotlinks.length) {
  fail(`page hotlinks Qualtrics content images: ${hotlinks.join(", ")}`);
} else {
  ok("no qualtrics.com content image hotlinks");
}

for (const ref of REQUIRED_ASSET_REFS) {
  if (!pageSrc.includes(ref)) {
    fail(`journey asset not referenced in page: ${ref}`);
  }
}
// Primary journey must not require stock card quartet
const cardPrimaries = ["card-pain.jpg", "card-benefit.jpg", "card-host.jpg", "card-why-teg.jpg"];
const reqAssetsExport = pageSrc.match(
  /export const REQUEST_DEMO_LOCAL_ASSETS[\s\S]*?as const;?/,
);
if (reqAssetsExport) {
  for (const card of cardPrimaries) {
    if (reqAssetsExport[0].includes(card)) {
      fail(`REQUEST_DEMO_LOCAL_ASSETS still lists demoted card primary: ${card}`);
    }
  }
}
if (!failed) ok("journey media paths referenced; stock card-* not primary required assets");

// ——— 6. Form local-only + modal thank-you visible ———
if (!pageSrc.includes("preventDefault")) {
  fail("form does not call preventDefault");
} else {
  ok("form submit calls preventDefault");
}
// Calendar free-slot booking journey (layout preserved: rd-form-grid + selects)
const bookingMarkers = [
  'data-booking-journey="date-time-details-receipt"',
  "/api/booking/free-dates",
  "/api/booking/free-times",
  "/api/booking/book",
  'name="meetingDate"',
  'name="meetingTime"',
  'className="rd-form-grid"',
];
for (const m of bookingMarkers) {
  if (!pageSrc.includes(m)) {
    fail(`booking journey marker missing: ${m}`);
  }
}
if (!failed) {
  ok("booking journey: free date/time selects + /api/booking/* + rd-form-grid layout");
}
// Modal must not unmount success immediately (closeModal must be delayed)
if (/onLocalSubmit=\{closeModal\}/.test(pageSrc) && !pageSrc.includes("setTimeout")) {
  fail("modal form closes immediately on submit — thank-you cannot render");
} else if (
  pageSrc.includes("setTimeout") &&
  pageSrc.includes("onLocalSubmit") &&
  pageSrc.includes("Vielen Dank")
) {
  ok("modal success path defers onLocalSubmit so thank-you can render");
} else if (!pageSrc.includes("onLocalSubmit={closeModal}")) {
  ok("modal form does not immediately close on submit");
} else {
  fail("modal conversion path may unmount thank-you before render");
}
if (/action=["']https?:\/\/[^"']*qualtrics/i.test(pageSrc)) {
  fail("form action points at Qualtrics");
} else {
  ok("form action is not a Qualtrics URL");
}
const codeNoComments = pageSrc
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/\/\/[^\n]*/g, "");
if (
  /www-api\.qualtrics|munchkin|mktoForms|forms2\.min\.js|\/api\/lead/i.test(
    codeNoComments,
  )
) {
  fail("page references Qualtrics/Marketo lead APIs in executable code");
} else {
  ok("no Qualtrics/Marketo lead API endpoints in executable code");
}

// Privacy opt-in still bound
if (
  !pageSrc.includes('aria-label="Privacy Optin"') ||
  !pageSrc.includes('type="checkbox"') ||
  !pageSrc.includes("checked={form.privacy}")
) {
  fail("Privacy Optin checkbox not bound to FormState.privacy");
} else {
  ok("Privacy Optin checkbox bound to form.privacy");
}

// ——— 6a. Pain garden shell retained (content may be empty) + clean talent lead ———
if (
  !pageSrc.includes("rd-garden--pain") ||
  !pageSrc.includes('data-section="pain"')
) {
  fail("S1 pain garden shell (rd-garden--pain / data-section=pain) missing from page");
} else {
  ok("S1 pain garden section shell present (rd-garden--pain)");
}
// Sticky glass header when scrolled past hero
if (
  !pageSrc.includes("rd-header--scrolled") ||
  !cssSrc.includes("position: sticky") ||
  !cssSrc.includes("backdrop-filter")
) {
  fail("header must be sticky with glassmorphic scrolled state (rd-header--scrolled)");
} else {
  ok("sticky glassmorphic header (rd-header--scrolled + backdrop-filter)");
}
// Glass timing: only after hero scrub finished (shipped headerGlassEligible), not early scrollY
if (
  !pageSrc.includes("headerGlassEligible") ||
  !pageSrc.includes("setHeaderScrolled(glassOn)")
) {
  fail(
    "header glass must use headerGlassEligible → setHeaderScrolled(glassOn) after scrub finish",
  );
} else if (
  /setHeaderScrolled\(\s*(?:window\.)?scrollY\s*[><=]/.test(pageSrc)
) {
  fail("header glass must not use independent scrollY threshold mid-pin");
} else {
  ok("header glass gated on hero scrub finished (headerGlassEligible)");
}
if (pageSrc.includes("Hosten Sie die Konferenz. Gewinnen Sie Talente.")) {
  fail("removed hero H1 tagline still present");
} else if (
  /className="rd-hero-conference"/.test(pageSrc) ||
  /className=\{?["']rd-hero-conference["']\}?/.test(pageSrc)
) {
  fail("hero conference H1 title should be removed from hero UI");
} else {
  ok("hero UI title removed (conference name on video board only)");
}
if (
  pageSrc.includes(
    "Ihr Standort. Ein Tag mit ca. 125 ausgewählten Young",
  )
) {
  fail("removed hero copy still present");
} else {
  ok("legacy hero location-copy paragraph removed");
}
// Talent / host gardens removed — past conferences are heading-only full screens
if (
  pageSrc.includes("Recruiting-Zugang") ||
  pageSrc.includes("Ihre Rolle als Gastgeber") ||
  pageSrc.includes("rd-garden--talent") ||
  pageSrc.includes("rd-garden--host")
) {
  fail("talent/host garden sections must be removed from journey");
} else if (
  pageSrc.includes("rd-past-conference-meta") ||
  pageSrc.includes("Beitrag auf LinkedIn")
) {
  fail("past conference sections must be heading-only (no meta/link copy)");
} else {
  ok("talent/host removed; past conferences are heading-only full screens");
}

// ——— 6b. Bottom conversion: Calendly embed + host photo (right) ———
if (
  !pageSrc.includes("calendly-inline-widget") ||
  !pageSrc.includes("assets.calendly.com") ||
  !/calendly\.com\/corbinian-massinger-teg-ev\/30min/.test(pageSrc)
) {
  fail("bottom band must embed Calendly corbinian-massinger-teg-ev/30min widget");
} else if (
  !pageSrc.includes("bottom-conversion-form") ||
  !pageSrc.includes("rd-calendly-layout") ||
  !pageSrc.includes("leo-corbi.webp")
) {
  fail("Calendly layout + host photo (leo-corbi) must be present");
} else if (
  !cssSrc.includes(".rd-calendly-layout") ||
  !cssSrc.includes(".rd-calendly-aside")
) {
  fail("request-demo.css missing Calendly layout rules");
} else {
  ok("bottom conversion uses Calendly embed + host photo layout");
}
if (
  !pageSrc.includes("Corbinian Massinger") ||
  !pageSrc.includes("Leonard Beckmann")
) {
  fail("both hosts Corbinian Massinger & Leonard Beckmann must appear near booking");
} else {
  ok("booking section names both hosts");
}
// Shared responsive grid: 2-col default, 1-col at max-width 640px
if (
  !cssSrc.includes(".rd-form-grid") ||
  !/@media\s*\(\s*max-width:\s*640px\s*\)\s*\{[^}]*\.rd-form-grid[^}]*grid-template-columns:\s*1fr/s.test(
    cssSrc,
  )
) {
  fail("shared .rd-form-grid must collapse to 1 column at max-width 640px");
} else {
  ok("shared form grid responsive rule (2-col → 1-col @640px) present");
}

// ——— 7. CSS: hero/form shell + purple CTA retained ———
if (!cssSrc.includes("rd-page") || !cssSrc.includes("95, 26, 229")) {
  fail("request-demo.css shell/purple CTA missing — layout may have been rewritten");
} else {
  ok("request-demo.css layout shell + CTA purple retained");
}

// ——— 7b. Full-viewport sticky hero + scroll-scrub zoom video + logo banner ———
const heroBlockMatch = cssSrc.match(/\.rd-hero\s*\{[^}]+\}/s);
const heroBlock = heroBlockMatch ? heroBlockMatch[0] : "";
const heroUsesViewport =
  /(?:min-)?height:\s*100vh/.test(heroBlock) ||
  /(?:min-)?height:\s*100dvh/.test(heroBlock) ||
  (/100vh/.test(cssSrc) && /100dvh/.test(cssSrc) && cssSrc.includes(".rd-hero"));
// Must not rely solely on fixed 672px as the only height rule for .rd-hero
const heroOnlyFixed672 =
  /min-height:\s*672px/.test(heroBlock) &&
  !/100(vh|dvh)/.test(heroBlock);
if (!heroUsesViewport || heroOnlyFixed672) {
  fail(
    "hero must use viewport height (100vh/100dvh), not only fixed min-height: 672px",
  );
} else {
  ok("hero first-screen uses viewport height (100vh/100dvh)");
}
// Sticky pin + continuous scroll-scrubbed video (no autoplay default)
if (
  !cssSrc.includes(".rd-hero-scroll") ||
  !/position:\s*sticky/.test(heroBlock) ||
  !pageSrc.includes("hero-zoom.mp4") ||
  !pageSrc.includes("heroVideoRef") ||
  !pageSrc.includes("currentTime") ||
  !pageSrc.includes("requestAnimationFrame") ||
  !pageSrc.includes('data-testid="hero-zoom-video"')
) {
  fail(
    "hero must pin (.rd-hero-scroll sticky) and rAF-scrub hero-zoom.mp4 without default autoplay",
  );
} else if (
  pageSrc.includes("autoPlay") &&
  !pageSrc.includes("autoPlay={false}") &&
  !pageSrc.includes("autoPlay={ false }")
) {
  fail("hero video must not autoplay by default");
} else {
  ok("sticky continuous rAF scroll-scrub hero video (no default autoplay)");
}
const rdPageBlock = (cssSrc.match(/\.rd-page\s*\{[^}]+\}/s)?.[0] || "").replace(
  /\/\*[\s\S]*?\*\//g,
  "",
);
if (/overflow-x:\s*hidden/.test(rdPageBlock)) {
  fail(".rd-page overflow-x:hidden breaks sticky hero pin");
} else {
  ok(".rd-page overflow-x does not break sticky");
}
// Header band / logo scaled ~10% from 84px / 64px
const hasHeaderVar =
  /--rd-header-h:\s*92(\.4)?px/.test(cssSrc) ||
  /\.rd-header\s*\{[^}]*height:\s*92(\.4)?px/s.test(cssSrc);
const hasLogoVar =
  /--rd-logo-h:\s*70(\.4)?px/.test(cssSrc) ||
  /\.rd-logo\s*\{[^}]*height:\s*70(\.4)?px/s.test(cssSrc);
const stillOldBaseline =
  /\.rd-header\s*\{[^}]*height:\s*84px/s.test(cssSrc) &&
  /\.rd-logo\s*\{[^}]*height:\s*64px/s.test(cssSrc) &&
  !hasHeaderVar;
if (!hasHeaderVar || !hasLogoVar || stillOldBaseline) {
  fail(
    "logo banner must be ~10% larger than 84px/64px baseline (expect ~92.4px band / ~70.4px logo)",
  );
} else {
  ok("logo banner vertical size ~10% above 84/64 baseline (92.4 / 70.4)");
}
// Header/hero offset stay coupled via CSS variable or matching values
if (
  !cssSrc.includes("--rd-header-h") ||
  (!cssSrc.includes("var(--rd-header-h)") &&
    !/margin-top:\s*-92/.test(cssSrc))
) {
  fail("hero header offset must stay coupled to logo banner height");
} else {
  ok("hero header offset coupled to banner height variable");
}
// Responsive: hero stacks at mid breakpoint
if (
  !/@media\s*\(\s*max-width:\s*1100px\s*\)\s*\{[\s\S]*?\.rd-hero-inner[\s\S]*?grid-template-columns:\s*1fr/s.test(
    cssSrc,
  )
) {
  fail("hero-inner must stack to 1 column at max-width 1100px");
} else {
  ok("hero-inner responsive stack @1100px present");
}
// Brands must not pull up into the full-viewport first screen via large negative margin
if (/\.rd-brands\s*\{[^}]*margin:\s*-\d+px/s.test(cssSrc)) {
  fail("rd-brands negative margin would peek brand strip into full-viewport hero");
} else {
  ok("rd-brands does not negative-margin into full-viewport hero");
}

// ——— 8. Required image files on disk ———
for (const rel of REQUIRED_ASSETS) {
  const full = path.join(publicRoot, rel);
  if (!(await exists(full))) {
    fail(`missing asset public/${rel}`);
    continue;
  }
  const st = await stat(full);
  if (st.size < 100) {
    fail(`asset too small public/${rel} (${st.size} bytes)`);
  }
}
if (!failed) ok(`all ${REQUIRED_ASSETS.length} journey assets present under public/`);

// Exported constants for tests
if (!pageSrc.includes("LOCATION_LP_REQUIRED_PHRASES")) {
  fail("LOCATION_LP_REQUIRED_PHRASES export missing");
} else if (!pageSrc.includes('"ca. 125"')) {
  fail('LOCATION_LP_REQUIRED_PHRASES must include "ca. 125"');
} else {
  ok("LOCATION_LP_REQUIRED_PHRASES export present with ca. 125");
}

if (!pageSrc.includes("REQUEST_DEMO_LOCAL_ASSETS")) {
  fail("REQUEST_DEMO_LOCAL_ASSETS export missing");
} else {
  ok("REQUEST_DEMO_LOCAL_ASSETS export present");
}

// ——— 9. LP polish: no mid/bottom gradient banners, no blue proof badges ———
const POLISH_BANNED = [
  "Passt Ihr Standort zur Konferenz?",
  "Unverbindliches Gespräch vereinbaren",
];
for (const phrase of POLISH_BANNED) {
  if (pageSrc.includes(phrase)) {
    fail(`gradient CTA banner copy still present: ${JSON.stringify(phrase)}`);
  }
}
if (pageSrc.includes("rd-proof-badge") || pageSrc.includes('badge: "150"')) {
  fail("blue proof badges still present in markup");
} else if (!failed) {
  ok("no mid/bottom gradient banners and no blue proof badges");
}

// ——— 10. Exactly two past conferences + vertical gardens markers ———
for (const t of CONFERENCE_TITLES) {
  if (!pageSrc.includes(t)) fail(`missing past-conference title: ${t}`);
}
// Must not reintroduce the old 6-tile past-formats list as primary
const DROPPED_EVENT_TITLES = [
  "Biotech & Medtech Panel",
  "Enterprise Sales Format",
  "Fireside Chat",
  "Charging Ahead",
];
for (const t of DROPPED_EVENT_TITLES) {
  if (pageSrc.includes(t)) {
    fail(`old multi-tile past-event title still present: ${t}`);
  }
}
if (!failed) {
  ok(
    `exactly two conference titles required (${CONFERENCE_TITLES.join("; ")}); multi-tile titles absent`,
  );
}

// Soft LinkedIn deep-links optional but if present must be valid post/update URLs
const linkedinHrefs = [
  ...pageSrc.matchAll(/href:\s*"(https:\/\/(?:www\.)?linkedin\.com\/[^"]+)"/g),
].map((m) => m[1]);
if (linkedinHrefs.length > 0) {
  const allLinkedIn = linkedinHrefs.every((h) =>
    /linkedin\.com\/(feed\/update|posts)\//.test(h),
  );
  if (!allLinkedIn) {
    fail("one or more conference hrefs are not linkedin.com post/update URLs");
  } else if (linkedinHrefs.length !== 2) {
    fail(
      `expected exactly 2 LinkedIn soft-links for the two conferences, found ${linkedinHrefs.length}`,
    );
  } else {
    ok(`${linkedinHrefs.length} LinkedIn soft-links on PAST_CONFERENCES (not embeds)`);
  }
} else {
  ok("no LinkedIn hrefs required (soft links optional); titles enforced above");
}
if (pageSrc.includes("PAST_CONFERENCES") && pageSrc.includes('target="_blank"')) {
  if (!pageSrc.includes("noopener")) {
    fail("conference links missing rel=noopener");
  } else {
    ok("conference links open in new tab with noopener when present");
  }
}

// Vertical stack markers (no dual horizontal text product grid)
if (!cssSrc.includes("min-height: 100vh") && !cssSrc.includes("min-height: 100dvh")) {
  fail("garden sections missing ~viewport min-height immersive marker");
} else {
  ok("garden sections use immersive ~viewport min-height");
}

if (failed) {
  console.error("\nverify-request-demo: FAILED");
  process.exit(1);
}

console.log("\nverify-request-demo: all checks passed");
