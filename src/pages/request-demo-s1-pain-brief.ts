/**
 * S1 Pain Brief — Location-Host LP (/request-demo)
 * Wave-0 content lock for implementers (t4+). Not rendered on the page.
 *
 * Scope: ONLY pains a TEG Location-Host day can address via positive
 * Öffentlichkeit + curated talent access. No TEG package/offer language here
 * (that belongs in S2–S5). No invented statistics on the live LP.
 *
 * Industry framing (qualitative; do not paste raw % into UI without review):
 * - Wirtschaftsmacher / CBS HR-Umfrage (LOGISTIK HEUTE, Okt 2023): Image der
 *   Branche, mangelnde Sichtbarkeit vs. andere Branchen, steigende Personal-
 *   und Recruitingkosten als Folgen dünner Pipelines; Employer Branding als
 *   genannte Gegenmaßnahme. Fahrer/gewerblich = ops-Kern — OUT OF SCOPE.
 * - BVL / Branchenkommunikation: anhaltender Fachkräftemangel; Digitalisierung
 *   erschwert Suche nach digital-affinem SC-Nachwuchs — OUT: Automation-ROI.
 * - Bestehende LP-These (Der blinde Fleck): Kosten/Lärm/Verkehr-Image →
 *   schwache positive PR → teureres Recruiting / Vergütungsdruck.
 */

/** Three solvable pains — use all three as one S1 thesis chain, not three CTAs. */
export const S1_SOLVABLE_PAINS = [
  {
    id: "a_image",
    label: "Schwache positive Öffentlichkeit / Image-Stigma",
    claim:
      "Viele Logistikstandorte erscheinen in der Öffentlichkeit vor allem als Kosten-, Lärm- und Verkehrsthema — selten als Ort für ambitionierte Karrieren und moderne Supply-Chain-Arbeit.",
    howTegDayHelps:
      "Ein benannter Konferenz-Gastgebertag schafft sichtbare, positive Bühne vor kuratiertem Nachwuchs und Netzwerk — ohne Massen-PR-Kampagne.",
  },
  {
    id: "b_talent_access",
    label: "Schwerer Zugang zu kuratiertem jungem SC-nahem Talent",
    claim:
      "Young Professionals und digital-affine Supply-Chain-Profile konkurrieren stark mit Beratung, Tech und Industrie-HQ; Logistikstandorte erreichen diese Zielgruppe oft nur über teure, streuende Kanäle.",
    howTegDayHelps:
      "TEG bringt an einem Tag ausgewählte Nachwuchsführungskräfte an den Standort (Auswahl, kein Massenverkauf) — reiner Zugang, keine Garantie für Einstellungen.",
  },
  {
    id: "c_hiring_pressure",
    label: "Höherer Hiring- und Vergütungsdruck bei dünner Pipeline",
    claim:
      "Wo passende Bewerber rar sind, steigen Personal- und Recruitingaufwand und der Druck auf Vergütung — nicht als Tarifversprechen, sondern als Marktfolge schwacher Sichtbarkeit und dünner Pipelines.",
    howTegDayHelps:
      "Mehr geeignete Kontakte und ein stärkeres Arbeitgeberbild entlasten die Pipeline-Seite; S1 benennt nur den Druck, Lösung ohne Zahlen/ROI in S2.",
  },
] as const;

/** Explicit reject list — never claim TEG Location-Host solves these. */
export const S1_REJECT_PAINS = [
  "Fahrermangel / Berufskraftfahrer-Ops und Schichtbesetzung",
  "Lager-Automatisierung, Robotik, WMS-ROI, Digitalisierung als Technikprojekt",
  "Visa, Zuwanderung, internationales Recruiting-Prozess-Design",
  "Tarifpolitik, Mindestlohn, Gehaltsbänder als TEG-Zusage",
  "Flotten-/Routenoptimierung, Maut, politische Rahmenbedingungen",
  "Demografie „lösen“, Fluktuation-HR-Systeme, Work-Life-Balance-Programme",
  "Cyber-Sicherheit der Supply Chain",
  "Quereinstiegsprogramme oder Ausbildungssysteme betreiben",
  "Operative Kosten (Lärm, Verkehr, Immobilien) physisch reduzieren",
] as const;

/**
 * Section thesis boundary (non-intercept with later sections):
 * S1 = Problem only. No Gastgeber-To-dos, no ca. 125, no Agenda, no 1986 trust.
 */
export const S1_SECTION_RULES = {
  language: "de-only",
  noTegPackageLanguage: true,
  noHeadcountOrDate: true,
  noHostChecklist: true,
  noRoiPromises: true,
  tone: "serious, logistics-decision-maker, no needy CTA mid-section",
} as const;

/** German copy seeds for S1 — pick/refine in t4; keep one vertical section. */
export const S1_COPY_SEEDS = {
  kicker: "Der blinde Fleck",
  titleOptions: [
    "Schwache PR macht Recruiting teurer",
    "Wenn Logistik nur Kosten, Lärm und Verkehr heißt",
    "Zu wenig positive Öffentlichkeit — zu wenig passende Bewerber",
  ],
  /** Prefer a short lead + 3 bullets matching a/b/c; avoid TEG product nouns. */
  leadOptions: [
    "Viele Logistikunternehmen haben wenig positive Öffentlichkeit. Das Image aus Kosten, Lärm und Verkehr prägt, wie Nachwuchs und digitale Supply-Chain-Talente den Standort sehen — lange bevor ein Inserat wirkt.",
    "In der öffentlichen Wahrnehmung bleibt Logistik oft hinter Beratung und Tech zurück. Wenig positive Bühne heißt: schwierigerer Zugang zu jungen, qualifizierten Menschen und mehr Druck, wenn die Pipeline dünn ist.",
  ],
  bullets: [
    "Image-Stigma: Kosten, Lärm, Verkehr statt Arbeitgebermarke und Karriereort.",
    "Talentzugang: kuratierte Young Professionals und SC-nahe Profile sind umkämpft und selten am Standort greifbar.",
    "Pipeline-Druck: dünne Bewerberlage treibt Hiring-Aufwand und Vergütungsdruck — nicht aus Prinzip, sondern aus Mangel an Sichtbarkeit und Zugang.",
  ],
  /** Optional closing line — still pain-only, no CTA, no offer facts. */
  closeOptions: [
    "Gute Sichtbarkeit ist kein Selbstzweck: Sie entscheidet mit, wer sich überhaupt bewirbt.",
    "Wer in der Öffentlichkeit unsichtbar bleibt, zahlt später im Recruiting.",
  ],
  /** Forbidden in S1 body */
  banInS1: [
    "ca. 125",
    "8. Dezember",
    "Gastgeber",
    "Agenda",
    "TEG wählt",
    "Gespräch anfragen",
    "seit 1986",
    "Netlight",
    "München" /* venue sell belongs later */,
  ],
} as const;

/** One-paragraph implementer summary (DE). */
export const S1_IMPLEMENTER_SUMMARY_DE = `
S1 erzählt nur den lösbaren Schmerz der Location-Host-Zielgruppe:
(1) schwache positive Öffentlichkeit / Image aus Kosten-Lärm-Verkehr,
(2) schwerer Zugang zu kuratiertem jungem Supply-Chain-nahem Talent,
(3) daraus folgender Hiring- und Vergütungsdruck bei dünner Pipeline.
Alles Operative (Fahrer, Automation, Visa, Tarif, Flotte) ist abgelehnt.
Keine TEG-Paket-Sprache, keine Teilnehmerzahl, kein Host-To-do, kein Trust-Block.
Branche: Image und Sichtbarkeit gelten in HR-/Wirtschaftsmacher-Framing als Treiber
des Fachkräftemangels und steigender Recruitingkosten — qualitativ, ohne erfundene
LP-Statistiken. Lösung und Format folgen erst ab S2.
`.trim();
