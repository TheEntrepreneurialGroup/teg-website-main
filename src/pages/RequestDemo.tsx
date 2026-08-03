/**
 * TEG Supply Chain Conference 2026 — Location-Host landing page.
 * Hero shell frozen (form, hero-bg, CTAs). Post-hero: vertical Immersive
 * Gardens journey (one thesis per full-width section, no 2×2 text grids).
 * Forms are presentational only — no third-party lead API POST.
 */
import React, { FormEvent, useId, useState } from "react";
import "./request-demo.css";

const ASSET = "/request-demo";

type FormState = {
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  email: string;
  phone: string;
  privacy: boolean;
};

const emptyForm = (): FormState => ({
  firstName: "",
  lastName: "",
  company: "",
  jobTitle: "",
  email: "",
  phone: "",
  privacy: true,
});

/** Presentational form — local thank-you only, no Qualtrics/Marketo POST. */
export function DemoRequestForm({
  idPrefix,
  onLocalSubmit,
}: {
  idPrefix: string;
  onLocalSubmit?: () => void;
}) {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const reactId = useId();
  const pid = `${idPrefix}-${reactId}`;

  const set =
    (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setForm((prev) => ({ ...prev, [key]: value }));
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Show thank-you first. Do NOT call onLocalSubmit synchronously — that
    // would unmount modal forms (closeModal) before success is visible.
    setSubmitted(true);
    if (onLocalSubmit) {
      window.setTimeout(() => onLocalSubmit(), 2800);
    }
  };

  if (submitted) {
    return (
      <div className="rd-form-success" data-testid={`${idPrefix}-success`}>
        <h4>Vielen Dank.</h4>
        <p style={{ fontSize: 16, marginTop: 8 }}>
          Wir haben Ihr Interesse an einem persönlichen Gespräch notiert. Das
          Organisationsteam von TEG meldet sich unverbindlich bei Ihnen, ohne
          Paket-Verkaufsdruck.
        </p>
      </div>
    );
  }

  return (
    <form
      className="rd-form-grid"
      onSubmit={handleSubmit}
      data-testid={`${idPrefix}-form`}
      noValidate
      action="#"
      method="dialog"
    >
      <div className="rd-field">
        <input
          id={`${pid}-first`}
          name="firstName"
          type="text"
          placeholder=" "
          value={form.firstName}
          onChange={set("firstName")}
          aria-label="Vorname*"
          autoComplete="given-name"
        />
        <label htmlFor={`${pid}-first`}>Vorname*</label>
      </div>
      <div className="rd-field">
        <input
          id={`${pid}-last`}
          name="lastName"
          type="text"
          placeholder=" "
          value={form.lastName}
          onChange={set("lastName")}
          aria-label="Nachname*"
          autoComplete="family-name"
        />
        <label htmlFor={`${pid}-last`}>Nachname*</label>
      </div>
      <div className="rd-field">
        <input
          id={`${pid}-company`}
          name="company"
          type="text"
          placeholder=" "
          value={form.company}
          onChange={set("company")}
          aria-label="Unternehmen*"
          autoComplete="organization"
        />
        <label htmlFor={`${pid}-company`}>Unternehmen*</label>
      </div>
      <div className="rd-field">
        <input
          id={`${pid}-job`}
          name="jobTitle"
          type="text"
          placeholder=" "
          value={form.jobTitle}
          onChange={set("jobTitle")}
          aria-label="Position*"
          autoComplete="organization-title"
        />
        <label htmlFor={`${pid}-job`}>Position*</label>
      </div>
      <div className="rd-field">
        <input
          id={`${pid}-email`}
          name="email"
          type="email"
          placeholder=" "
          value={form.email}
          onChange={set("email")}
          aria-label="E-Mail*"
          autoComplete="email"
        />
        <label htmlFor={`${pid}-email`}>E-Mail*</label>
      </div>
      <div className="rd-field">
        <input
          id={`${pid}-phone`}
          name="phone"
          type="tel"
          placeholder=" "
          value={form.phone}
          onChange={set("phone")}
          aria-label="Telefon*"
          autoComplete="tel"
        />
        <label htmlFor={`${pid}-phone`}>Telefon*</label>
      </div>
      <div className="rd-privacy-row">
        <input
          id={`${pid}-privacy`}
          name="privacyOptin"
          type="checkbox"
          className="rd-privacy-checkbox"
          checked={form.privacy}
          onChange={set("privacy")}
          aria-label="Privacy Optin"
          data-testid={`${idPrefix}-privacy-optin`}
        />
        <label htmlFor={`${pid}-privacy`} className="rd-privacy">
          Mit dem Absenden erklären Sie sich einverstanden, dass TEG e. V. Ihre
          Angaben zur Kontaktaufnahme verarbeitet. Details in der{" "}
          <a
            href="/privacy-policy"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Datenschutzerklärung
          </a>
          .
        </label>
      </div>
      <button
        type="submit"
        className="rd-submit"
        data-testid={`${idPrefix}-submit`}
      >
        Gespräch anfragen
      </button>
    </form>
  );
}

/**
 * Partner / network logos — SVG wordmarks only with invert on dark bar.
 * Photo/AVIF marks (bmw.avif, mckinsey.avif) invert into white blobs; excluded.
 */
const BRAND_LOGOS = [
  { src: "/shared/logos/siemens.svg", alt: "Siemens", invert: true },
  { src: "/shared/logos/airbus.svg", alt: "Airbus", invert: true },
  {
    src: "/shared/logos/roland-berger.svg",
    alt: "Roland Berger",
    invert: true,
  },
  {
    src: "/shared/logos/hypovereinsbank.svg",
    alt: "HypoVereinsbank",
    invert: true,
  },
];

/** Single proof-strip facts (merged PROOF_CARDS + STATS + testimonial). */
const PROOF_FACTS = [
  {
    metric: "ca. 125",
    label: "Teilnehmer",
    meta: "Auswahl statt offener Massenverkauf",
  },
  {
    metric: "1 Tag",
    label: "Konferenzformat",
    meta: "Vorträge, Panels und Workshops",
  },
  {
    metric: "8.12.2026",
    label: "München",
    meta: "Location-Host noch offen",
  },
] as const;

/**
 * Final CV-approved journey media (t3 + t6 LI rebind).
 * S1 text-led; S5 fact strip only; card-*.jpg demoted (not primary heroes).
 * Local TEG photography preferred over scraped LinkedIn recap graphics.
 */
const JOURNEY_MEDIA = {
  hero: {
    src: `${ASSET}/hero-bg.jpg`,
    alt: "German Supply Chain Conference, Konferenzlocation",
    width: 1280,
    height: 720,
  },
  /** S2 Talent — densest reserved-seat conference floor */
  talent: {
    src: "/for-companies/acc-bild.jpeg",
    alt: "Dicht besetzte TEG-Konferenz: Publikum mit Namensschildern, reservierte Plätze und Bühnenprogramm",
    width: 1092,
    height: 692,
  },
  /** S3 Host — smartvillage Location-Host panel (pure photo, not LI collage) */
  host: {
    src: "/for-companies/cooles-bild.jpeg",
    alt: "TEG Industry Panel im smartvillage: Gastgeber-Branding, Corporate-Entrepreneurship-Banner und gemischtes Publikum unter Kronleuchtern",
    width: 1170,
    height: 758,
  },
  /** S4 Trust — founding press 1986 */
  trust: {
    src: "/about/heritage/zeitungsartikel.webp",
    alt: "Historischer Zeitungsartikel: Elf Unternehmen gründen die Studentenvereinigung TEG e. V.",
    width: 1200,
    height: 900,
  },
} as const;

/**
 * Exactly two stacked past conferences (Immersive Gardens vertical blocks).
 * Soft LinkedIn deep-links only — never embed LinkedIn UI 1:1.
 * S6 media: photographic Frontier Tech hall; AI Consulting Netlight host poster
 * (LI video frame too blurry; LI recap carousels keep chrome — rejected t6 CV).
 */
const PAST_CONFERENCES = [
  {
    src: "/events/converted/ai-consulting-conference-2026.webp",
    title: "AI Consulting Conference 2026",
    meta: "10. Juni 2026 · Netlight Offices · München · Gastgeber Netlight",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7481229528170704896",
    alt: "Plakat AI Consulting Conference 2026: 10. Juni 2026, Netlight Offices München, Gastgeber Netlight",
    width: 1200,
    height: 1200,
  },
  {
    src: "/events/converted/frontier-tech-conference-2025.webp",
    title: "Frontier Tech Conference 2025",
    meta: "10. Dezember 2025 · MaibornWolff · mit PushQuantum",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7408770978320896000",
    alt: "Frontier Tech Conference 2025: volles Publikum und Vortrag in industriellem Veranstaltungsraum",
    width: 1600,
    height: 1067,
  },
] as const;

const RequestDemo: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="rd-page" data-testid="request-demo-page">
      <header className="rd-header" role="banner">
        <div className="rd-header-inner">
          <a href="https://teg-ev.de/" aria-label="TEG e.V. Startseite">
            <img
              className="rd-logo"
              src={`${ASSET}/teg-logo-white.svg`}
              alt="TEG e.V., The Entrepreneurial Group"
              width={224}
              height={64}
            />
          </a>
          <div className="rd-header-actions">
            <a className="rd-link-login" href="https://teg-ev.de/">
              TEG e.V.
            </a>
            <button
              type="button"
              className="rd-btn-header-demo"
              onClick={openModal}
            >
              Gespräch buchen
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero — frozen structure; only headcount ca. 150 → ca. 125 */}
        <section className="rd-hero" aria-label="Hero">
          <img
            className="rd-hero-bg"
            src={JOURNEY_MEDIA.hero.src}
            alt={JOURNEY_MEDIA.hero.alt}
            width={JOURNEY_MEDIA.hero.width}
            height={JOURNEY_MEDIA.hero.height}
          />
          <div className="rd-hero-overlay" aria-hidden="true" />
          <div className="rd-hero-inner">
            <div>
              <h4 className="rd-eyebrow">
                German Supply Chain Conference 2026
              </h4>
              <h1 className="rd-h1">
                Hosten Sie die Konferenz. Gewinnen Sie Talente.
              </h1>
              <p className="rd-hero-copy">
                Ihr Standort. Ein Tag mit ca. 125 ausgewählten Young
                Professionals aus Supply Chain und angrenzenden Bereichen:
                positive PR und direkter Recruiting-Zugang in einem etablierten
                TEG-Format. 8. Dezember 2026, München.
              </p>
            </div>
            <div className="rd-form-card">
              <h3 className="rd-form-title">Persönliches Gespräch</h3>
              <DemoRequestForm idPrefix="hero" />
            </div>
          </div>
        </section>

        {/* Slim network strip — not a content thesis */}
        <section className="rd-brands" aria-label="TEG Netzwerk">
          <div className="rd-brands-inner">
            <div className="rd-brands-label">
              Formate &amp; Partner im TEG-Netzwerk
            </div>
            <div className="rd-brands-logos">
              {BRAND_LOGOS.map((logo) => (
                <img
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  height={28}
                  className={logo.invert ? "rd-logo-invert" : undefined}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ——— Vertical Immersive Gardens journey (one thesis per section) ——— */}
        <div className="rd-journey" data-testid="rd-journey">
          {/* S1 Pain — solvable employer-brand + talent-access only; no TEG package */}
          <section
            className="rd-garden rd-garden--pain"
            aria-label="Der blinde Fleck"
            data-section="pain"
          >
            <div className="rd-garden-text">
              <p className="rd-garden-kicker">Der blinde Fleck</p>
              <h2 className="rd-garden-title">
                Wenn Logistik nur Kosten, Lärm und Verkehr heißt
              </h2>
              <p className="rd-garden-lead">
                Viele Logistikunternehmen haben wenig positive Öffentlichkeit.
                Das Image aus Kosten, Lärm und Verkehr prägt, wie Nachwuchs und
                digital-affine Supply-Chain-Talente den Standort sehen — lange
                bevor ein Inserat wirkt.
              </p>
              <ul className="rd-garden-list">
                <li>
                  Image-Stigma: Kosten, Lärm, Verkehr statt Arbeitgebermarke und
                  Karriereort.
                </li>
                <li>
                  Talentzugang: kuratierte Young Professionals und SC-nahe
                  Profile sind umkämpft und selten am Standort greifbar.
                </li>
                <li>
                  Pipeline-Druck: dünne Bewerberlage treibt Hiring-Aufwand und
                  Vergütungsdruck — aus Mangel an Sichtbarkeit und Zugang.
                </li>
              </ul>
              <p className="rd-garden-close">
                Wer in der Öffentlichkeit unsichtbar bleibt, zahlt später im
                Recruiting.
              </p>
            </div>
          </section>

          {/* S2 Talent — ca. 125 curated YPs, recruiting access only */}
          <section
            className="rd-garden rd-garden--talent"
            aria-label="Recruiting-Zugang"
            data-section="talent"
          >
            <div className="rd-garden-media">
              <img
                src={JOURNEY_MEDIA.talent.src}
                alt={JOURNEY_MEDIA.talent.alt}
                width={JOURNEY_MEDIA.talent.width}
                height={JOURNEY_MEDIA.talent.height}
                loading="lazy"
              />
            </div>
            <div className="rd-garden-text">
              <p className="rd-garden-kicker">Recruiting-Zugang</p>
              <h2 className="rd-garden-title">
                Ca. 125 Young Professionals — ein Tag bei Ihnen
              </h2>
              <p className="rd-garden-lead">
                Ausgewählte Masterstudierende und junge Erwachsene kurz vor der
                ersten Fach- oder Führungsrolle, mit Bezug zu Supply Chain und
                angrenzenden Funktionen, verbringen einen Konferenztag an Ihrem
                Standort. Zugang durch Bewerbung und Auswahl — kein offener
                Massenverkauf.
              </p>
              <p className="rd-garden-body">
                Für Ihren Recruiting-Trichter zählt der persönliche Kontakt vor
                Ort: Gespräche, Einblicke, Namen und Gesichter — ohne dass die
                Konferenz selbst zum Assessment-Center wird.
              </p>
            </div>
          </section>

          {/* S3 Host mechanics — venue / branding / TEG supplies program */}
          <section
            className="rd-garden rd-garden--host"
            aria-label="Ihre Rolle als Gastgeber"
            data-section="host"
          >
            <div className="rd-garden-media">
              <img
                src={JOURNEY_MEDIA.host.src}
                alt={JOURNEY_MEDIA.host.alt}
                width={JOURNEY_MEDIA.host.width}
                height={JOURNEY_MEDIA.host.height}
                loading="lazy"
              />
            </div>
            <div className="rd-garden-text">
              <p className="rd-garden-kicker">Ihre Rolle als Gastgeber</p>
              <h2 className="rd-garden-title">
                Raum und Präsenz. Format und Publikum bringt TEG
              </h2>
              <p className="rd-garden-lead">
                Sie stellen einen geeigneten Konferenzort in oder um München für
                den Veranstaltungstag. Ihr Unternehmen wird als Location-Host
                wahrgenommen — mit Branding und Begrüßung im Format.
              </p>
              <p className="rd-garden-body">
                Optional: Einblicke in Betrieb und Kultur, ohne Verkaufsdruck.
                TEG liefert Auswahl, Agenda und das kuratierte Publikum.
              </p>
            </div>
          </section>

          {/* S4 Trust — since 1986, selection, educational craft */}
          <section
            className="rd-garden rd-garden--trust"
            aria-label="Warum TEG"
            data-section="trust"
          >
            <div className="rd-garden-media rd-garden-media--doc">
              <img
                src={JOURNEY_MEDIA.trust.src}
                alt={JOURNEY_MEDIA.trust.alt}
                width={JOURNEY_MEDIA.trust.width}
                height={JOURNEY_MEDIA.trust.height}
                loading="lazy"
              />
            </div>
            <div className="rd-garden-text">
              <p className="rd-garden-kicker">Warum TEG</p>
              <h2 className="rd-garden-title">
                Gemeinnützig. Seit 1986. Auswahl statt Massenverkauf
              </h2>
              <p className="rd-garden-lead">
                TEG e. V. ist ein gemeinnütziger Münchner Verein für
                Erwachsenenbildung und Führungskräftenachwuchs — kein ad-hoc
                Eventanbieter. Qualität im Raum entsteht durch Bewerbung und
                Auswahl, nicht durch Ticketvolumen.
              </p>
              <p className="rd-garden-body">
                Das Konferenzformat verbindet Vorträge, Panels und Workshops mit
                bildendem Anspruch: ein Tag, der Inhalt und Begegnung trägt —
                handwerklich geführt, nicht als Messe umetikettiert.
              </p>
            </div>
          </section>

          {/* S5 Single proof strip — facts + organisers */}
          <section
            className="rd-proof-strip"
            aria-label="Konferenz auf einen Blick"
            data-section="proof"
          >
            <div className="rd-proof-strip-inner">
              <p className="rd-proof-kicker">
                German Supply Chain Conference 2026
              </p>
              <h2 className="rd-proof-title">
                Fakten. Offen. Ansprechpartner.
              </h2>
              <ul className="rd-proof-metrics">
                {PROOF_FACTS.map((f) => (
                  <li key={f.metric} className="rd-proof-metric">
                    <span className="rd-proof-number">{f.metric}</span>
                    <span className="rd-proof-label">{f.label}</span>
                    <span className="rd-proof-meta">{f.meta}</span>
                  </li>
                ))}
              </ul>
              <div className="rd-proof-people">
                <p>
                  <strong>Conference Team Leads:</strong> Corbinian Massinger
                  &amp; Leonard Beckmann
                </p>
                <p>
                  <strong>Head of Strategie &amp; Partners:</strong> Jonathan
                  Babelotzky
                </p>
              </div>
            </div>
          </section>

          {/* S6 Two stacked past conferences — not a 6-tile bento */}
          <section
            className="rd-past-conferences"
            aria-label="Bisherige TEG-Konferenzen"
            data-section="past-conferences"
          >
            <div className="rd-past-conferences-intro">
              <p className="rd-garden-kicker">Konferenzformat</p>
              <h2 className="rd-garden-title">
                Das Konferenzformat ist eines der größten TEG-Eventformate
              </h2>
              <p className="rd-garden-lead">
                Hier die beiden letzten Konferenzen — als Beleg für den
                Gastgeber-Tag bei Unternehmen vor Ort.
              </p>
            </div>

            {PAST_CONFERENCES.map((conf) => (
              <article
                key={conf.title}
                className="rd-past-conference"
                data-conference={conf.title}
              >
                <div className="rd-garden-media">
                  <img
                    src={conf.src}
                    alt={conf.alt}
                    width={conf.width}
                    height={conf.height}
                    loading="lazy"
                  />
                </div>
                <div className="rd-garden-text">
                  <h3 className="rd-past-conference-title">{conf.title}</h3>
                  <p className="rd-past-conference-meta">{conf.meta}</p>
                  <a
                    className="rd-past-conference-link"
                    href={conf.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Beitrag auf LinkedIn
                  </a>
                </div>
              </article>
            ))}
          </section>
        </div>

        {/* Bottom conversion form — sparse CTAs: header + hero + bottom + modal only */}
        <section className="rd-cta-band-wrap" aria-label="Gesprächsformular">
          <div
            className="rd-form-card"
            style={{ maxWidth: 720, margin: "0 auto" }}
          >
            <h3 className="rd-form-title">Unverbindliches Gespräch</h3>
            <DemoRequestForm idPrefix="bottom" />
          </div>
        </section>
      </main>

      <footer className="rd-footer">
        <span>© 2026 TEG e. V. · The Entrepreneurial Group</span>
        <a href="/privacy-policy">Datenschutz</a>
        <a href="/imprint">Impressum</a>
        <a href="https://teg-ev.de/">teg-ev.de</a>
      </footer>

      {modalOpen ? (
        <div
          className="rd-modal-backdrop"
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            className="rd-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Persönliches Gespräch"
          >
            <button
              type="button"
              className="rd-modal-close"
              onClick={closeModal}
              aria-label="Schließen"
            >
              ×
            </button>
            <h3 className="rd-form-title">Persönliches Gespräch</h3>
            <DemoRequestForm idPrefix="modal" onLocalSubmit={closeModal} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default RequestDemo;

/**
 * Required primary section assets (journey + frozen hero).
 * Stock card-pain/benefit/host/why-teg deliberately omitted — CV-demoted.
 */
export const REQUEST_DEMO_LOCAL_ASSETS = [
  `${ASSET}/teg-logo-white.svg`,
  JOURNEY_MEDIA.hero.src,
  JOURNEY_MEDIA.talent.src,
  JOURNEY_MEDIA.host.src,
  JOURNEY_MEDIA.trust.src,
  PAST_CONFERENCES[0].src,
  PAST_CONFERENCES[1].src,
] as const;

/** Demoted stock cards — not journey primary heroes (t3/t6 multi-pass CV). */
export const REQUEST_DEMO_DEMOTED_CARD_ASSETS = [
  `${ASSET}/card-pain.jpg`,
  `${ASSET}/card-benefit.jpg`,
  `${ASSET}/card-host.jpg`,
  `${ASSET}/card-why-teg.jpg`,
] as const;

/** Locked conversion phrases — keep in sync with scripts/verify-request-demo.mjs REQUIRED_COPY. */
export const LOCATION_LP_REQUIRED_PHRASES = [
  "Hosten Sie die Konferenz",
  "Persönliches Gespräch",
  "Supply Chain",
  "Gastgeber",
  "ca. 125",
  "München",
  "2026",
  "Gespräch buchen",
  "TEG e. V.",
  "Unverbindliches Gespräch",
  "German Supply Chain Conference",
  "Privacy Optin",
  "Gespräch anfragen",
] as const;

export const LOCATION_LP_BANNED_PHRASES = [
  "Make every experience count",
  "Qualtrics Experience Management",
  "Request demo",
  "XM for Customer Experience",
  "Shake Shack",
  "Capterra",
] as const;
