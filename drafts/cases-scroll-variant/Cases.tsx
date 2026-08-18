/*
  /cases replica of Immersive Garden (https://immersive-g.com/).

  Studied pages (17):
  1. https://immersive-g.com/
  2. https://immersive-g.com/projects/
  3. https://immersive-g.com/the-studio/the-studio
  4. https://immersive-g.com/the-studio/clients
  5. https://immersive-g.com/the-studio/awards
  6. https://immersive-g.com/the-studio/contact-us
  7. https://immersive-g.com/the-studio/our-approach
  8. https://immersive-g.com/projects/louis-vuitton-1/
  9. https://immersive-g.com/projects/Carolina-Herrera/
  10. https://immersive-g.com/projects/cartier-in-time/
  11. https://immersive-g.com/projects/cartier-watches-and-wonders-24/
  12. https://immersive-g.com/projects/longines-zulu-time/
  13. https://immersive-g.com/projects/chartogne-taillet-1/
  14. https://immersive-g.com/projects/citrix-new-mobile-workforce-experience/
  15. https://immersive-g.com/projects/cartier-end-of-year-23/
  16. https://immersive-g.com/projects/cartier-end-of-year-22/
  17. https://www.awwwards.com/case-study-immersive-gardens-new-website.html

  Cloned page: Citrix New Mobile Workforce Experience
  https://immersive-g.com/projects/citrix-new-mobile-workforce-experience/
  Why: partnership case-study (Red Bull + Citrix), not a work index or
  homepage reel. Skeleton holds a centered serif hero, 12-col media mosaic,
  left/right text blocks, dual-layer copy, dark hasBackground panels, and a
  two-screen footer CTA. That maps to 3 department cases + workshops +
  Netlight proof + Calendly without a corporate brochure layout.
*/

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { trackButtonClick, trackOutboundClick } from "../utils/analytics";
import styles from "./Cases.module.css";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

const CALENDLY_EMBED_URL =
  "https://calendly.com/corbinian-massinger-teg-ev/30min?hide_event_type_details=1&hide_gdpr_banner=1";
const CALENDLY_SCRIPT_SRC =
  "https://assets.calendly.com/assets/external/widget.js";
const NETLIGHT_CASE_STUDY_URL =
  "https://drive.google.com/file/d/1hIHNN-sECH9W7dezsjbvzuX-8ri100Do/view";

const IMG = {
  acc: "/events/converted/ai-consulting-conference-2026.webp",
  slide1: "/request-demo/ai-consulting-2026/slide-01.webp",
  slide2: "/request-demo/ai-consulting-2026/slide-02.webp",
  slide3: "/request-demo/ai-consulting-2026/slide-03.webp",
  slide4: "/request-demo/ai-consulting-2026/slide-04.webp",
  slide5: "/request-demo/ai-consulting-2026/slide-05.webp",
  slide6: "/request-demo/ai-consulting-2026/slide-06.webp",
  slide7: "/request-demo/ai-consulting-2026/slide-07.webp",
  slide8: "/request-demo/ai-consulting-2026/slide-08.webp",
  frontier: "/events/converted/frontier-tech-conference-2025.webp",
  sales: "/events/converted/enterprise-sales-2025.webp",
  biotech: "/events/converted/biotech-medtech-panel-2026.webp",
  tegtalk: "/events/converted/teg-talk-24-04-2026.webp",
  charging: "/events/converted/charging-ahead-2026-alt.webp",
  fireside: "/events/converted/fireside-chat-2025.webp",
  hosts: "/request-demo/leo-corbi.webp",
  group: "/shared/images/tegtalk-group-WS26.avif",
} as const;

const HASH_IDS = [
  "hr",
  "marketing",
  "sales",
  "workshops",
  "proof",
  "contact",
] as const;

const gardenParticles = Array.from({ length: 14 }, (_, i) => {
  let state = i + 11;
  const random = () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
  return {
    id: i,
    x: random() * 100,
    delay: random() * 7,
    duration: 9 + random() * 10,
    size: 2 + random() * 4,
    opacity: 0.1 + random() * 0.18,
    driftY: 280 + random() * 220,
    driftX: (random() - 0.5) * 36,
  };
});

const PackageMark: React.FC = () => (
  <span className={styles.paket}>Paketleistung</span>
);

const CalendlyInline: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    const init = () => {
      if (cancelled || !window.Calendly || !el.isConnected) return;
      el.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: CALENDLY_EMBED_URL,
        parentElement: el,
      });
    };
    if (window.Calendly) {
      init();
      return () => {
        cancelled = true;
      };
    }
    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`,
    );
    if (!script) {
      script = document.createElement("script");
      script.src = CALENDLY_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", init);
    return () => {
      cancelled = true;
      script?.removeEventListener("load", init);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="calendly-inline-widget"
      data-url={CALENDLY_EMBED_URL}
      style={{ minWidth: 320, height: 700 }}
    />
  );
};

const MediaImage: React.FC<{
  src: string;
  alt: string;
  className: string;
}> = ({ src, alt, className }) => {
  const ref = useRef<HTMLImageElement>(null);
  const reduce = useReducedMotion() ?? false;
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={`${styles.image} ${className} ${
        reduce || inView ? styles.isOn : ""
      }`}
    />
  );
};

const Cases: React.FC = () => {
  const reduce = useReducedMotion() ?? false;
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!HASH_IDS.includes(id as (typeof HASH_IDS)[number])) {
      return;
    }
    if (id === "contact") {
      setBookingOpen(true);
    }
    const el = document.getElementById(id);
    if (!el) {
      return;
    }
    const timer = window.setTimeout(() => {
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [reduce]);

  const openBooking = (label: string) => {
    trackButtonClick(label, "Cases");
    setBookingOpen(true);
    document.getElementById("contact")?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <div className={styles.page}>
      <div className={styles.atmosphere} aria-hidden="true">
        <div className={styles.atmosphereWash} />
        <div className={styles.atmosphereGrain} />
        {!reduce &&
          gardenParticles.map((p) => (
            <motion.span
              key={p.id}
              className={styles.particle}
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                bottom: "-8px",
                opacity: p.opacity,
              }}
              animate={{
                y: [0, -p.driftY],
                opacity: [0, p.opacity, p.opacity * 0.4, 0],
                x: [0, p.driftX],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
      </div>
      <div className={styles.navWash} aria-hidden="true" />

      <div className={styles.backstageWrap}>
        <a
          className={styles.backstage}
          href="#proof"
          onClick={() => trackButtonClick("Beleg", "Cases")}
        >
          See backstage
        </a>
      </div>

      <div className={styles.stage}>
        <section className={styles.hero}>
          <div className={`${styles.grid} ${styles.heroGrid}`}>
            <h1 className={styles.heroTitle}>Drei Cases für TEG-Events</h1>
            <a
              className={styles.heroCta}
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                openBooking("Gespräch vereinbaren");
              }}
            >
              Gespräch vereinbaren
              <span className={styles.line} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className={styles.media}>
          <div className={styles.grid}>
            <MediaImage
              src={IMG.acc}
              alt="AI Consulting Conference 2026"
              className={`${styles.landscape} ${styles.w10} ${styles.p2} ${styles.offsetYCenter}`}
            />
          </div>
        </section>

        <section
          className={`${styles.grid} ${styles.text} ${styles.alignLeftRight}`}
        >
          <div className={`${styles.copy} ${styles.one}`}>
            <span className={styles.kicker}>Hosts und Sponsoren</span>
            Location-Hosts und Sponsoren nutzen dasselbe Konferenzformat über
            Recruiting-Zugang, Event-Branding und Showcasing im Sales Channel.
            Auf Konferenzen kann der Partner zusätzlich einen eigenen Workshop
            stellen.
          </div>
          <div className={`${styles.copy} ${styles.copySmall} ${styles.two}`}>
            <p>
              TEG e.V. ist seit 1986 in München. TEG organisiert. Der Host
              stellt Location und Personal für einen Tag.
            </p>
            <ul>
              <li>Seit 1986</li>
              <li>
                300+ Alumni: 41 Konzern-Führungskräfte, 40
                Mittelstands-Executives, 15 Gründer
              </li>
              <li>Rund 150 Teilnehmende, Planwert</li>
              <li>10-20 Speaker, Planwert</li>
              <li>Zweimal im Jahr</li>
            </ul>
          </div>
        </section>

        <section className={styles.media}>
          <div className={styles.grid}>
            <MediaImage
              src={IMG.frontier}
              alt="Frontier Tech Conference 2025"
              className={`${styles.landscape} ${styles.w10} ${styles.p2} ${styles.offsetYCenter}`}
            />
          </div>
        </section>

        <section className={styles.media}>
          <div className={styles.grid}>
            <MediaImage
              src={IMG.slide1}
              alt="AI Consulting Conference 2026"
              className={`${styles.landscape} ${styles.w8} ${styles.p3} ${styles.offsetYCenter}`}
            />
          </div>
        </section>

        <section className={styles.media}>
          <div className={styles.grid}>
            <MediaImage
              src={IMG.sales}
              alt="Enterprise Sales Event 2025"
              className={`${styles.landscape} ${styles.w5} ${styles.p8} ${styles.offsetYCenter} ${styles.offsetXRight}`}
            />
          </div>
        </section>

        <section className={styles.media}>
          <div className={styles.grid}>
            <MediaImage
              src={IMG.slide3}
              alt="AI Consulting Conference 2026"
              className={`${styles.landscape} ${styles.w8} ${styles.p3} ${styles.offsetYCenter}`}
            />
          </div>
        </section>

        <section className={styles.media}>
          <div className={`${styles.grid} ${styles.split}`}>
            <MediaImage
              src={IMG.slide2}
              alt="AI Consulting Conference 2026"
              className={`${styles.portrait} ${styles.w4} ${styles.p3} ${styles.offsetYCenter}`}
            />
            <MediaImage
              src={IMG.biotech}
              alt="Biotech Medtech Panel 2026"
              className={`${styles.portrait} ${styles.w4} ${styles.p7} ${styles.offsetYCenter}`}
            />
          </div>
        </section>

        <section
          className={`${styles.media} ${styles.hasBackground} ${styles.hasBackgroundDark}`}
        >
          <div className={`${styles.grid} ${styles.split}`}>
            <MediaImage
              src={IMG.slide5}
              alt="AI Consulting Conference 2026"
              className={`${styles.phone} ${styles.w2} ${styles.p4} ${styles.offsetYCenterNeg}`}
            />
            <MediaImage
              src={IMG.slide6}
              alt="AI Consulting Conference 2026"
              className={`${styles.phone} ${styles.w2} ${styles.p8} ${styles.offsetYCenterPos}`}
            />
          </div>
        </section>

        <section className={styles.media}>
          <div className={styles.grid}>
            <MediaImage
              src={IMG.charging}
              alt="Charging Ahead 2026"
              className={`${styles.landscape} ${styles.w10} ${styles.p2} ${styles.offsetYCenter}`}
            />
          </div>
        </section>

        <section
          className={`${styles.grid} ${styles.text} ${styles.alignCenter}`}
        >
          <div className={`${styles.copy} ${styles.copyLarge}`}>
            HR, Marketing und Sales sitzen im selben Konferenztag. Der Workshop
            ist ein Konferenzformat, keine Abendveranstaltung.
          </div>
        </section>

        <section className={styles.media}>
          <div className={styles.grid}>
            <MediaImage
              src={IMG.tegtalk}
              alt="TEG Talk 2026"
              className={`${styles.landscape} ${styles.w5} ${styles.p1} ${styles.offsetYCenter} ${styles.offsetXLeft}`}
            />
          </div>
        </section>

        <section className={styles.media}>
          <div className={styles.grid}>
            <MediaImage
              src={IMG.slide4}
              alt="AI Consulting Conference 2026"
              className={`${styles.landscape} ${styles.w8} ${styles.p3} ${styles.offsetYCenter}`}
            />
          </div>
        </section>

        <section className={styles.media}>
          <div className={`${styles.grid} ${styles.split}`}>
            <MediaImage
              src={IMG.slide7}
              alt="AI Consulting Conference 2026"
              className={`${styles.portrait} ${styles.w4} ${styles.p3} ${styles.offsetYCenter}`}
            />
            <MediaImage
              src={IMG.fireside}
              alt="Fireside Chat 2025"
              className={`${styles.portrait} ${styles.w4} ${styles.p7} ${styles.offsetYCenter}`}
            />
          </div>
        </section>

        <section
          className={`${styles.media} ${styles.hasBackground} ${styles.hasBackgroundDarker}`}
          id="proof"
        >
          <div className={styles.grid}>
            <MediaImage
              src={IMG.group}
              alt="TEG Talk Gruppe"
              className={`${styles.landscape} ${styles.w8} ${styles.p3} ${styles.offsetYCenter}`}
            />
          </div>
        </section>

        <section
          className={`${styles.grid} ${styles.text} ${styles.alignRightLeft}`}
        >
          <div className={`${styles.copy} ${styles.one}`} id="hr">
            <span className={styles.kicker}>01 Human Resources</span>
            Recruiting-Zugang zu einer vorselektierten Mischung. Das Unternehmen
            trifft am Konferenztag Studierende, Young Professionals und
            erfahrene Fach- und Führungskräfte in einem Fachumfeld, nicht auf
            einer Karrieremesse.
          </div>
          <div
            className={`${styles.copy} ${styles.copySmall} ${styles.two}`}
            id="marketing"
          >
            <span className={styles.kicker}>
              02 Marketing und Communications
            </span>
            Marke, Angebot und Unternehmen im selben Konferenzrahmen. Drei
            Awareness-Ebenen tragen dasselbe Branding: Marke, Produkt oder
            Service, und das Unternehmen vor Ort.
          </div>
        </section>

        <section className={styles.media}>
          <div className={styles.grid}>
            <MediaImage
              src={IMG.slide8}
              alt="AI Consulting Conference 2026"
              className={`${styles.landscape} ${styles.w10} ${styles.p2} ${styles.offsetYCenter}`}
            />
          </div>
        </section>

        <section className={styles.media}>
          <div className={styles.grid}>
            <MediaImage
              src={IMG.frontier}
              alt="Frontier Tech Conference 2025"
              className={`${styles.landscape} ${styles.w8} ${styles.p3} ${styles.offsetYCenter}`}
            />
          </div>
        </section>

        <section className={styles.media}>
          <div className={`${styles.grid} ${styles.split}`}>
            <MediaImage
              src={IMG.sales}
              alt="Enterprise Sales Event 2025"
              className={`${styles.portrait} ${styles.w3} ${styles.p3} ${styles.offsetYCenterNeg}`}
            />
            <MediaImage
              src={IMG.slide3}
              alt="AI Consulting Conference 2026"
              className={`${styles.portrait} ${styles.w3} ${styles.p8} ${styles.offsetYCenterPos}`}
            />
          </div>
        </section>

        <section
          className={`${styles.grid} ${styles.text} ${styles.alignLeftRight}`}
        >
          <div
            className={`${styles.copy} ${styles.copySmall} ${styles.oneSmall}`}
          >
            <span className={styles.kicker}>01 Human Resources</span>
            <p>
              Bewerbung mit Motivationsschreiben und CV-Screening. Das aktuelle
              SCC-Konzept plant 50 % ausgewählte Studierende (Informatik und
              Wirtschaftsinformatik, TUM und LMU), 25 % Young Professionals, 15
              % erfahrene Manager, 10 % Corporate Innovation Leaders. Das ist
              der Zielstand dieses Konzepts, kein Ist-Wert vergangener Events.
            </p>
            <ul>
              <li>Persönliche Gespräche in den Networking-Blöcken des Tages</li>
              <li>
                <PackageMark /> HR-Stand im jeweiligen Host- oder Sponsorenpaket
              </li>
              <li>
                <PackageMark /> CV-Matching bzw. CV-Unterlagen, soweit im Paket
                enthalten
              </li>
              <li>
                Workshops als Recruiting-Format: kleine Gruppen, längere
                Interaktion als am Stand
              </li>
            </ul>
            <p>
              Was Teilnehmende vom Arbeitgeber sehen: den Standort, die Leute
              vor Ort, und <PackageMark /> Bühne, Branding und
              Foto-/Videomaterial, soweit im Paket. Employer Branding und
              Recruiting laufen parallel.
            </p>
            <p>
              Auf der AI Consulting Conference 2026 lagen Recruiting-Booths im
              Lunch. Workshops mit Accenture und Netlight waren auf je 20 Plätze
              begrenzt und nur über Bewerbung zugänglich.
            </p>
            <span className={styles.kicker}>
              02 Marketing und Communications
            </span>
            <ul>
              <li>
                Marke: der Host oder Sponsor wird als Location Partner bzw.
                Partner in der Außenkommunikation geführt.
              </li>
              <li>
                Produkt oder Service: das Angebot sitzt im fachlichen Rahmen des
                Tages, nicht als isolierte Anzeige.
              </li>
              <li>
                Unternehmen: Standort, Mitarbeitende und Programm erzeugen
                denselben Eindruck vor Ort und in der Nachbereitung.
              </li>
              <li>
                Nennung als Location Partner oder Sponsor auf Website, Tickets,
                Newsletter und Social-Media-Kommunikation
              </li>
              <li>
                <PackageMark /> Brandingflächen vor Ort
              </li>
              <li>
                <PackageMark /> Vortragsslot, im SCC-Konzept 15 Minuten, nur
                wenn im Paket
              </li>
              <li>
                Foto- und Videomaterial des Tages zur Weiterverwendung in der
                Unternehmenskommunikation, soweit vertraglich vorgesehen
              </li>
            </ul>
            <p>
              Als Reichweitenreferenz nennt das Konferenzkonzept für die
              Frontier Tech Conference innerhalb von sieben Tagen bis zu 50.000
              LinkedIn-Impressionen. Das ist ein Benchmark eines früheren
              Events, keine Reichweitengarantie.
            </p>
            <p>
              Als Host der AI Consulting Conference 2026 war Netlight im selben
              Konferenzumfeld sichtbar wie Vertreter von McKinsey, BCG,
              Capgemini Invent, Accenture und Roland Berger. Die Fallstudie
              beschreibt das als Peer-Assoziation bei einem kuratierten
              Publikum, nicht als Logoplatzierung allein.
            </p>
          </div>
          <div
            className={`${styles.copy} ${styles.copySmall} ${styles.twoSmall}`}
          >
            <span className={styles.kicker} id="sales">
              03 Sales und Business Development
            </span>
            <p>
              Produkt und Service im Fachgespräch, danach der Vertriebsweg. Die
              Location bzw. der Sponsor-Stand ist der Ort, an dem das Angebot
              vor Fach- und Führungsverantwortlichen gezeigt wird. Das Gespräch
              beginnt auf dem Event und kann in den eigenen Sales Channel
              übergehen.
            </p>
            <ul>
              <li>
                <PackageMark /> Showcasing: eigener Stand, Demo, Expertenfragen
                am Objekt oder am Prozess
              </li>
              <li>
                Workshop als vertieftes Showcasing: das Angebot wird angewendet,
                nicht nur beschrieben
              </li>
              <li>
                Qualifizierte Gespräche in den Networking-Pausen mit Personen,
                die zum Branchenthema des Tages ausgewählt wurden
              </li>
            </ul>
            <p>
              Die Konferenz ist industriebezogen. Beim Supply-Chain-Termin 2026
              adressiert das Programm Automatisierung, KI, geopolitische
              Risiken, Compliance sowie Effizienz und Zuverlässigkeit von
              Lieferketten. Andere TEG-Konferenzen setzen dasselbe Muster auf
              ein anderes Industrieumfeld (Consulting/KI, Frontier Tech, Life
              Sciences).
            </p>
            <p>
              Keine Lead-Garantie, keine Übergabe in das CRM des Partners ohne
              Abstimmung. Der Sales Channel bleibt der des Unternehmens. Das
              Event erzeugt den Kontakt und den fachlichen Anlass.
            </p>
            <span className={styles.kicker} id="workshops">
              Nur Konferenzformat
            </span>
            <p>
              Auf TEG-Konferenzen kann der Location-Host oder ein Sponsor einen
              eigenen Workshop stellen. Kleingruppe, bei der AI Consulting
              Conference 2026 je maximal 20 Plätze. Zugang über Bewerbung.
              Inhalt vom Partner. TEG stellt Rahmen, Selektion und den
              restlichen Konferenztag.
            </p>
            <p>
              Accenture: Workshop „AI in Action: From Fundamentals to Hands-on
              Experience“. Netlight: Build-Challenge an einer konkreten
              KI-Aufgabe, ebenfalls auf 20 Plätze begrenzt.
            </p>
            <p>
              Frontier-Tech-Referenz, nicht Preisangebot: Gold umfasste Keynote
              und Workshop und Booth. Silber Keynote oder Workshop plus Booth.
              Bronze eines von Keynote, Workshop oder Booth. Ob ein Workshop im
              konkreten Hosting enthalten ist, steht im jeweiligen Paket.
            </p>
          </div>
        </section>

        <section className={styles.media}>
          <div className={`${styles.grid} ${styles.split}`}>
            <MediaImage
              src={IMG.hosts}
              alt="Leonard Beckmann und Corbinian Massinger"
              className={`${styles.portrait} ${styles.w4} ${styles.p3} ${styles.offsetYCenter}`}
            />
            <MediaImage
              src={IMG.acc}
              alt="AI Consulting Conference 2026"
              className={`${styles.portrait} ${styles.w4} ${styles.p7} ${styles.offsetYCenter}`}
            />
          </div>
        </section>

        <section
          className={`${styles.grid} ${styles.text} ${styles.alignLeftRight}`}
        >
          <div
            className={`${styles.copy} ${styles.copySmall} ${styles.oneSmall}`}
          >
            Ein dokumentierter Host-Tag: AI Consulting Conference 2026, 10. Juni
            2026, Netlight Offices München, Prannerstraße. Ca. 800 m² über
            mehrere Räume, ca. 5 Mitarbeitende für den Tag, Delegation von
            Bestuhlung und Bühnentechnik, Aufsicht der zugewiesenen Büroeinheit.
            Keine weiteren administrativen oder finanziellen Verpflichtungen
            laut Fallstudie.
            <br />
            <br />
            TEG: Catering, Werbung, Speaker, Ablauf, kuratierte Gästeselektion,
            Workshops im Programm, restliche Kosten. Sichtbares Umfeld an diesem
            Tag: Florian Bauer, McKinsey; Marcus Hartmann, Roland Berger; Andrea
            Martin, IBM; Dr. Andreas Liebl, appliedAI Initiative. Dazu BCG,
            Capgemini Invent, Accenture, PwC.
            <br />
            <br />
            <a
              href={NETLIGHT_CASE_STUDY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackOutboundClick(NETLIGHT_CASE_STUDY_URL, "Cases Proof")
              }
            >
              Fallstudie Netlight
            </a>
            <br />
            Planwerte (150 Teilnehmende, 10-20 Speaker, SCC-Mix 50/25/15/10)
            sind der aktuelle Zielstand. Die 50.000 LinkedIn-Impressionen sind
            ein Referenzwert der Frontier Tech Conference. Stand, Vortragsslot,
            Brandingflächen, CV-Matching und Workshop-Slot nur, soweit sie im
            jeweiligen Vertrag stehen.
          </div>
        </section>

        <footer className={`${styles.grid} ${styles.foot}`}>
          <div className={styles.footWebgl}>
            <div className={styles.footProjects}>
              <div className={styles.footProjectsCtaWrap}>
                <Link
                  to="/events"
                  className={styles.nextCta}
                  onClick={() =>
                    trackButtonClick("Konferenzformat", "Cases Footer")
                  }
                >
                  See next project
                  <span className={styles.line} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className={styles.footContacts} id="contact">
              {bookingOpen ? (
                <>
                  <button
                    type="button"
                    className={styles.bookingClose}
                    onClick={() => setBookingOpen(false)}
                  >
                    Schließen
                  </button>
                  <div className={styles.booking}>
                    <CalendlyInline />
                  </div>
                </>
              ) : (
                <div className={styles.footEmail}>
                  <button
                    type="button"
                    onClick={() => openBooking("Gespräch vereinbaren")}
                  >
                    Gespräch vereinbaren
                  </button>
                </div>
              )}
              <div className={styles.footAddress}>
                <p>
                  Corbinian Massinger
                  <br />
                  Leonard Beckmann
                  <br />
                  TEG e.V. München
                </p>
              </div>
              <div className={styles.footOpen}>
                <a
                  className={styles.basic}
                  href={NETLIGHT_CASE_STUDY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackOutboundClick(NETLIGHT_CASE_STUDY_URL, "Cases Footer")
                  }
                >
                  Fallstudie
                </a>
              </div>
              <nav className={styles.footNetworks} aria-label="Weiterlesen">
                <Link
                  to="/events"
                  onClick={() => trackButtonClick("Events", "Cases Footer")}
                >
                  Events
                </Link>
                <Link
                  to="/supplychain"
                  onClick={() =>
                    trackButtonClick("Supply Chain", "Cases Footer")
                  }
                >
                  Supply Chain
                </Link>
                <Link
                  to="/for-companies"
                  onClick={() =>
                    trackButtonClick("Für Unternehmen", "Cases Footer")
                  }
                >
                  Für Unternehmen
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Cases;
