import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { trackButtonClick, trackOutboundClick } from "../utils/analytics";
import "./cases.css";

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

/** Calendly inline widget; initializes explicitly because the overlay mounts
    after the external script has already scanned the DOM. */
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
      className="calendly-inline-widget cases-calendly"
      data-url={CALENDLY_EMBED_URL}
      style={{ minWidth: 320, height: 700 }}
    />
  );
};

type PanelId = "hr" | "marketing" | "sales" | "workshops" | "proof" | "contact";

type CaseId = Exclude<PanelId, "contact">;

type Chapter =
  | {
      id: string;
      title: string;
      kind: "list";
      items: { text: string; paket?: boolean }[];
    }
  | {
      id: string;
      title: string;
      kind: "text";
      paragraphs: React.ReactNode[];
    }
  | {
      id: string;
      title: string;
      kind: "speakers";
      intro: string;
      speakers: { name: string; org: string; role: string }[];
      more: string;
    };

interface CasePanel {
  id: CaseId;
  index: string;
  kicker: string;
  tileTitle: string;
  overlayTitle: string;
  lead: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  chapters: Chapter[];
}

const CASE_ORDER: CaseId[] = ["hr", "marketing", "sales", "workshops", "proof"];

const HASH_TO_PANEL: Record<string, PanelId> = {
  hr: "hr",
  marketing: "marketing",
  sales: "sales",
  workshops: "workshops",
  proof: "proof",
  contact: "contact",
};

const gardenParticles = Array.from({ length: 18 }, (_, i) => {
  let state = i + 1;
  const random = () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
  return {
    id: i,
    x: random() * 100,
    delay: random() * 6,
    duration: 7 + random() * 8,
    size: 3 + random() * 5,
    opacity: 0.16 + random() * 0.26,
    driftY: 240 + random() * 200,
    driftX: (random() - 0.5) * 40,
  };
});

const vines = [
  "M -40 90 C 140 20, 320 160, 520 70 S 860 20, 1100 110",
  "M -40 240 C 180 310, 380 180, 620 260 S 920 340, 1100 220",
  "M -40 430 C 160 380, 400 500, 680 410 S 940 330, 1100 420",
];

const PackageMark: React.FC = () => (
  <span className="cases-package">Paketleistung</span>
);

const CASES: CasePanel[] = [
  {
    id: "hr",
    index: "01",
    kicker: "Human Resources",
    tileTitle: "Recruiting-Zugang",
    overlayTitle: "Recruiting-Zugang zu einem vorselektierten Teilnehmerkreis",
    lead: "Sie treffen am Konferenztag ausgewählte Studierende, Young Professionals und erfahrene Führungskräfte in einem Fachumfeld statt auf einer Karrieremesse.",
    image: "/request-demo/ai-consulting-2026/slide-03.webp",
    imageAlt: "AI Consulting Conference 2026",
    chapters: [
      {
        id: "happens",
        title: "Was konkret stattfindet",
        kind: "list",
        items: [
          {
            text: "In den Networking-Blöcken führen Sie persönliche Gespräche mit den Teilnehmern.",
          },
          {
            text: "Sie erhalten einen eigenen HR-Stand am Konferenztag.",
            paket: true,
          },
          {
            text: "Sie erhalten das CV-Book der Teilnehmer bereits vor dem Event.",
            paket: true,
          },
          {
            text: "Workshops ermöglichen längere und substanziellere Gespräche als der Stand.",
          },
        ],
      },
      {
        id: "selection",
        title: "So läuft die Auswahl",
        kind: "text",
        paragraphs: [
          "Alle Plätze werden über ein Bewerbungsverfahren mit CV-Screening und Motivationsfragen vergeben. Zur AI Consulting Conference 2026 gingen 219 Bewerbungen auf rund 150 Plätze ein. Der Zielmix des Formats besteht zur Hälfte aus ausgewählten Studierenden der TUM und LMU, ergänzt um Young Professionals, erfahrene Manager und Corporate Innovation Leaders.",
        ],
      },
      {
        id: "seen",
        title: "Was Teilnehmer von Ihnen sehen",
        kind: "text",
        paragraphs: [
          <>
            Die Teilnehmer erleben Ihren Standort und Ihre Mitarbeiter im
            direkten Austausch. <PackageMark /> Bühne, Branding sowie Foto- und
            Videomaterial kommen hinzu, soweit im Paket vereinbart. Employer
            Branding und Recruiting finden so an einem Tag statt: Die Keynote
            schafft Sichtbarkeit, Workshop und Stand schaffen das Gespräch.
          </>,
        ],
      },
      {
        id: "proof",
        title: "Beleg aus dem Format",
        kind: "text",
        paragraphs: [
          "Auf der AI Consulting Conference 2026 lagen die Recruiting-Booths in der Mittagspause. Die Workshops von Accenture und Netlight waren auf je 20 Plätze begrenzt und ausschließlich über Bewerbung zugänglich.",
        ],
      },
    ],
  },
  {
    id: "marketing",
    index: "02",
    kicker: "Marketing und Kommunikation",
    tileTitle: "Event-Branding",
    overlayTitle: "Marke, Angebot und Unternehmen in einem Konferenzrahmen",
    lead: "Ihr Auftritt wirkt auf drei Ebenen: als Marke in der Außenkommunikation, als Angebot im Fachprogramm und als Unternehmen vor Ort.",
    image: "/events/converted/frontier-tech-conference-2025.webp",
    imageAlt: "Frontier Tech Conference 2025",
    chapters: [
      {
        id: "layers",
        title: "Drei Ebenen der Sichtbarkeit",
        kind: "list",
        items: [
          {
            text: "Ihre Marke wird in der gesamten Außenkommunikation als Host oder Partner geführt.",
          },
          {
            text: "Ihr Angebot steht im Fachprogramm des Tages und nicht in einem Werbeumfeld.",
          },
          {
            text: "Ihr Unternehmen zeigt sich mit Standort und Mitarbeitern im direkten Kontakt.",
          },
        ],
      },
      {
        id: "happens",
        title: "Was konkret stattfindet",
        kind: "list",
        items: [
          {
            text: "TEG nennt Sie auf Website, Tickets, Newsletter und Social Media.",
          },
          { text: "Sie erhalten Brandingflächen vor Ort.", paket: true },
          {
            text: "Sie erhalten einen eigenen Vortragsslot im Programm.",
            paket: true,
          },
          {
            text: "Foto- und Videomaterial des Tages steht Ihnen für die eigene Kommunikation zur Verfügung.",
          },
        ],
      },
      {
        id: "reach",
        title: "Reichweite als Referenz",
        kind: "text",
        paragraphs: [
          "Die Frontier Tech Conference 2025 erzielte innerhalb von sieben Tagen über 50.000 Impressionen auf LinkedIn. Dieser Wert ist eine Referenz aus einem früheren Event und keine Garantie.",
        ],
      },
      {
        id: "proof",
        title: "Beleg aus dem Format",
        kind: "text",
        paragraphs: [
          "Als Host der AI Consulting Conference 2026 stand Netlight einen Tag lang im selben Programm wie Senior Partner von McKinsey und Roland Berger sowie Führungskräfte von BCG, Capgemini Invent und Accenture. Die Fallstudie beschreibt diese Peer-Assoziation vor kuratiertem Publikum als den eigentlichen Mehrwert.",
        ],
      },
    ],
  },
  {
    id: "sales",
    index: "03",
    kicker: "Sales und Business Development",
    tileTitle: "Showcasing",
    overlayTitle: "Ihr Angebot im Fachgespräch mit Entscheidern",
    lead: "Sie zeigen Ihr Angebot einem Publikum, das für das Branchenthema des Tages ausgewählt wurde. Der Kontakt entsteht auf dem Event und geht anschließend in Ihren Vertriebskanal über.",
    image: "/events/converted/enterprise-sales-2025.webp",
    imageAlt: "Enterprise Sales Event 2025",
    chapters: [
      {
        id: "happens",
        title: "Was konkret stattfindet",
        kind: "list",
        items: [
          {
            text: "Am eigenen Stand zeigen Sie Ihr Angebot in Demo und Fachgespräch.",
            paket: true,
          },
          {
            text: "Im Workshop wenden die Teilnehmer Ihr Produkt oder Ihren Service selbst an.",
          },
          {
            text: "In den Networking-Pausen führen Sie qualifizierte Gespräche mit einem kuratierten Publikum.",
          },
        ],
      },
      {
        id: "audience",
        title: "Warum das Publikum passt",
        kind: "text",
        paragraphs: [
          "Jede TEG-Konferenz ist auf eine Branche zugeschnitten. Die Supply Chain Conference 2026 behandelt Automatisierung, KI, geopolitische Risiken und Compliance in der Lieferkette. Die AI Consulting Conference überträgt dasselbe Format auf die Beratungsbranche, die Frontier Tech Conference auf Zukunftstechnologien.",
        ],
      },
      {
        id: "limits",
        title: "Was TEG nicht leistet",
        kind: "text",
        paragraphs: [
          "TEG gibt keine Lead-Garantie und übergibt keine Kontakte ohne Abstimmung. Das Event schafft den fachlichen Anlass und den Zugang. Der Vertrieb bleibt bei Ihnen.",
        ],
      },
      {
        id: "proof",
        title: "Beleg aus dem Format",
        kind: "text",
        paragraphs: [
          "Auf der AI Consulting Conference 2026 präsentierten sich 16 Unternehmen vor über 150 kuratierten Teilnehmern. Accenture nutzte dafür einen eigenen Stand und einen eigenen Workshop.",
        ],
      },
    ],
  },
  {
    id: "workshops",
    index: "04",
    kicker: "Exklusiv im Konferenzformat",
    tileTitle: "Eigene Workshops",
    overlayTitle: "Ihr Workshop im offiziellen Tagesprogramm",
    lead: "Als Host oder Sponsor gestalten Sie einen eigenen Workshop innerhalb der Konferenz. Sie bestimmen den Inhalt. TEG verantwortet Rahmen, Teilnehmerauswahl und den restlichen Konferenztag.",
    image: "/request-demo/ai-consulting-2026/slide-01.webp",
    imageAlt: "AI Consulting Conference 2026",
    chapters: [
      {
        id: "format",
        title: "Das Format",
        kind: "list",
        items: [
          {
            text: "Jeder Workshop ist eine Kleingruppe mit maximal 20 Plätzen.",
          },
          {
            text: "Der Zugang erfolgt ausschließlich über Bewerbung.",
          },
          {
            text: "Den Inhalt stellen Sie: eigener Case, eigenes Tool, eigene Methode.",
          },
          {
            text: "Der Workshop ist Teil des offiziellen Programms und kein Rahmenformat.",
          },
        ],
      },
      {
        id: "2026",
        title: "Beleg aus 2026",
        kind: "text",
        paragraphs: [
          "Auf der AI Consulting Conference 2026 führte Accenture den Workshop „AI in Action“ durch. Die Teilnehmer bauten eigene AI-Tools und entwickelten erste Agenten-Workflows.",
          "Netlight stellte eine Build-Challenge zu einer konkreten KI-Aufgabe. Beide Formate waren auf je 20 Plätze begrenzt. Parallel liefen Industry Briefings und Recruiting-Booths.",
        ],
      },
      {
        id: "roles",
        title: "Wirkung in den drei Cases",
        kind: "list",
        items: [
          {
            text: "HR: Sie erleben Kandidaten 90 Minuten in der Zusammenarbeit statt wenige Minuten am Stand.",
          },
          {
            text: "Marketing: Ihr Unternehmen überzeugt durch Inhalt und nicht allein durch das Logo.",
          },
          {
            text: "Sales: Die Teilnehmer nutzen Ihr Produkt, bevor das Vertriebsgespräch beginnt.",
          },
        ],
      },
      {
        id: "paket",
        title: "Paketlogik",
        kind: "text",
        paragraphs: [
          "Ob ein Workshop enthalten ist, regelt das jeweilige Paket. Zur Orientierung dient die Frontier Tech Conference: Gold umfasste Keynote, Workshop und Stand. Silber enthielt den Stand sowie wahlweise Keynote oder Workshop. Bronze enthielt eine dieser drei Leistungen.",
        ],
      },
    ],
  },
  {
    id: "proof",
    index: "05",
    kicker: "Beleg",
    tileTitle: "Netlight ACC 2026",
    overlayTitle: "Ein dokumentierter Host-Tag",
    lead: "Die AI Consulting Conference 2026 fand am 10. Juni 2026 in den Netlight Offices München statt. Auf rund 150 Plätze gingen 219 Bewerbungen ein. Am Konferenztag kamen über 150 kuratierte Teilnehmer, 24 Speaker und 16 Unternehmen zusammen. Die Teilnehmer bewerteten die Konferenz mit 4,8 von 5.",
    image: "/events/converted/ai-consulting-conference-2026.webp",
    imageAlt: "AI Consulting Conference 2026",
    imageFit: "contain",
    chapters: [
      {
        id: "host",
        title: "Beitrag des Hosts",
        kind: "text",
        paragraphs: [
          "Netlight stellte rund 800 Quadratmeter über mehrere Räume sowie etwa fünf Mitarbeiter für die Dauer des Tages. Weitere administrative oder finanzielle Verpflichtungen entstanden dem Host laut Fallstudie nicht.",
        ],
      },
      {
        id: "teg",
        title: "Beitrag von TEG",
        kind: "text",
        paragraphs: [
          "TEG verantwortete Catering, Werbung, Speaker, Programm, Teilnehmerauswahl, Workshops und die verbleibenden Kosten. Das Konferenzformat ist ein ganztägiges, branchenbezogenes Summit und findet zweimal im Jahr statt. TEG e.V. besteht seit 1986 in München und zählt über 300 Alumni, darunter 41 Führungskräfte in Konzernen.",
        ],
      },
      {
        id: "speakers",
        title: "Das Umfeld an diesem Tag",
        kind: "speakers",
        intro: "Eine Auswahl der Speaker dieses Tages.",
        speakers: [
          {
            name: "Florian Bauer",
            org: "McKinsey",
            role: "Senior Partner, Technology & AI Leader DACH",
          },
          {
            name: "Marcus Hartmann",
            org: "Roland Berger",
            role: "Senior Partner",
          },
          {
            name: "Andrea Martin",
            org: "IBM",
            role: "CTO DACH",
          },
          {
            name: "Dr. Andreas Liebl",
            org: "appliedAI Initiative",
            role: "CEO",
          },
        ],
        more: "Weitere Speaker kamen von BCG, Capgemini Invent, Accenture, PwC und Munich Re.",
      },
    ],
  },
];

const DEPARTMENT_TILES = CASES.filter(
  (item) => item.id === "hr" || item.id === "marketing" || item.id === "sales",
);

const WORKSHOP_TILE = CASES.find((item) => item.id === "workshops")!;

function caseById(id: CaseId): CasePanel {
  return CASES.find((item) => item.id === id) ?? CASES[0];
}

function neighborId(id: CaseId, dir: -1 | 1): CaseId {
  const index = CASE_ORDER.indexOf(id);
  return CASE_ORDER[(index + dir + CASE_ORDER.length) % CASE_ORDER.length];
}

const GardenAtmosphere: React.FC<{ reduce: boolean }> = ({ reduce }) => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(48% 42% at 18% 22%, rgba(183,134,11,0.10) 0%, rgba(246,243,236,0) 70%), radial-gradient(40% 38% at 82% 58%, rgba(34,120,64,0.08) 0%, rgba(246,243,236,0) 72%), radial-gradient(36% 32% at 50% 100%, rgba(6,45,24,0.12) 0%, rgba(246,243,236,0) 70%)",
      }}
    />
    <svg
      viewBox="0 0 1024 720"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full opacity-80"
    >
      {vines.map((d) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="#B7860B"
          strokeOpacity="0.22"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      ))}
    </svg>
    {!reduce &&
      gardenParticles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            bottom: "-6px",
            background: `rgba(34,90,52,${p.opacity})`,
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -p.driftY],
            opacity: [0, p.opacity, p.opacity * 0.55, 0],
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
);

const ChapterBody: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  if (chapter.kind === "list") {
    return (
      <ul>
        {chapter.items.map((item) => (
          <li key={item.text}>
            {item.paket ? <PackageMark /> : null}
            {item.text}
          </li>
        ))}
      </ul>
    );
  }
  if (chapter.kind === "speakers") {
    return (
      <>
        <p>{chapter.intro}</p>
        {chapter.speakers.map((speaker) => (
          <div className="cases-speaker" key={speaker.name}>
            <strong>{speaker.name}</strong>
            <span>
              {speaker.org}, {speaker.role}
            </span>
          </div>
        ))}
        <p>{chapter.more}</p>
      </>
    );
  }
  return (
    <>
      {chapter.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  );
};

const Cases: React.FC = () => {
  const reduce = useReducedMotion() ?? false;
  const [selected, setSelected] = useState<PanelId | null>(null);
  const [hovered, setHovered] = useState<CaseId | null>(null);
  const [openChapter, setOpenChapter] = useState<string | null>(null);

  const selectedCase = useMemo(
    () => (selected && selected !== "contact" ? caseById(selected) : null),
    [selected],
  );

  const preview = hovered ? caseById(hovered) : null;

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const fromHash = HASH_TO_PANEL[hash];
    if (fromHash) {
      setSelected(fromHash);
    }
  }, []);

  useEffect(() => {
    if (!selected) {
      setOpenChapter(null);
      if (window.location.hash) {
        window.history.replaceState(null, "", "/cases");
      }
      return;
    }
    window.history.replaceState(null, "", `/cases#${selected}`);
    setOpenChapter(null);
  }, [selected]);

  useEffect(() => {
    if (!selected) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
      if (!selectedCase) {
        return;
      }
      if (event.key === "ArrowRight") {
        setSelected(neighborId(selectedCase.id, 1));
      }
      if (event.key === "ArrowLeft") {
        setSelected(neighborId(selectedCase.id, -1));
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, selectedCase]);

  const openPanel = (id: PanelId, label: string) => {
    trackButtonClick(label, "Cases Stage");
    setSelected(id);
  };

  const closePanel = () => setSelected(null);

  return (
    <div className="cases-page">
      <section className="cases-stage">
        <GardenAtmosphere reduce={reduce} />

        <div className={`cases-preview ${preview && !reduce ? "is-on" : ""}`}>
          {preview ? <img src={preview.image} alt="" /> : null}
        </div>

        <div className="cases-stage-inner">
          <p className="cases-kicker">Für Hosts und Sponsoren</p>
          <h1 className="cases-title">
            <span className="cases-title-line cases-title-line--primary">
              Drei Cases
            </span>
            <span className="cases-title-line cases-title-line--secondary">
              für TEG-Events
            </span>
          </h1>

          <div className="cases-tiles">
            <p className="cases-group-label">Cases nach Unternehmensbereich</p>
            {DEPARTMENT_TILES.map((item) => (
              <button
                key={item.id}
                type="button"
                className="cases-tile"
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(item.id)}
                onBlur={() => setHovered(null)}
                onClick={() => openPanel(item.id, item.tileTitle)}
              >
                <span className="cases-tile-index">{item.index}</span>
                <span className="cases-tile-title">{item.tileTitle}</span>
                <span className="cases-tile-kicker">{item.kicker}</span>
              </button>
            ))}
          </div>

          <div className="cases-workshop">
            <button
              type="button"
              className="cases-workshop-tile"
              onMouseEnter={() => setHovered(WORKSHOP_TILE.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(WORKSHOP_TILE.id)}
              onBlur={() => setHovered(null)}
              onClick={() =>
                openPanel(WORKSHOP_TILE.id, WORKSHOP_TILE.tileTitle)
              }
            >
              <span className="cases-tile-index">{WORKSHOP_TILE.index}</span>
              <span className="cases-tile-title">
                {WORKSHOP_TILE.tileTitle}
              </span>
              <span className="cases-tile-kicker">{WORKSHOP_TILE.kicker}</span>
            </button>
          </div>

          <div className="cases-rail">
            <button
              type="button"
              className="cases-rail-btn"
              onClick={() => openPanel("proof", "Netlight ACC 2026")}
            >
              Beleg · Netlight ACC 2026
            </button>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link
                to="/events"
                className="cases-rail-link"
                onClick={() =>
                  trackButtonClick("Konferenzformat", "Cases Stage")
                }
              >
                Konferenzformat
              </Link>
              <Link
                to="/supplychain"
                className="cases-rail-link"
                onClick={() =>
                  trackButtonClick("Supply Chain Conference", "Cases Stage")
                }
              >
                Supply Chain
              </Link>
              <button
                type="button"
                className="cases-rail-btn cases-rail-cta"
                onClick={() => openPanel("contact", "Gespräch vereinbaren")}
              >
                Gespräch vereinbaren
              </button>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {selected && selectedCase ? (
          <motion.div
            key={`case-${selectedCase.id}`}
            className="cases-overlay-root"
            onClick={closePanel}
            role="presentation"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="cases-overlay-title"
              className="cases-overlay"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="cases-overlay-close"
                onClick={closePanel}
                aria-label="Case schließen"
              >
                <X size={16} />
              </button>
              <div
                className={`cases-overlay-media ${
                  selectedCase.imageFit === "contain" ? "is-contain" : ""
                }`}
              >
                <img src={selectedCase.image} alt={selectedCase.imageAlt} />
              </div>
              <div className="cases-overlay-body">
                <div className="cases-overlay-scroll">
                  <p className="cases-overlay-kicker">
                    {selectedCase.index} · {selectedCase.kicker}
                  </p>
                  <h2 id="cases-overlay-title" className="cases-overlay-title">
                    {selectedCase.overlayTitle}
                  </h2>
                  <p className="cases-overlay-lead">{selectedCase.lead}</p>
                  {selectedCase.chapters.map((chapter) => {
                    const isOpen = openChapter === chapter.id;
                    return (
                      <div key={chapter.id}>
                        <button
                          type="button"
                          className="cases-chapter"
                          aria-expanded={isOpen}
                          onClick={() =>
                            setOpenChapter(isOpen ? null : chapter.id)
                          }
                        >
                          <span className="cases-chapter-row">
                            <span className="cases-chapter-title">
                              {chapter.title}
                            </span>
                            <span className="cases-chapter-mark" aria-hidden>
                              {isOpen ? "–" : "+"}
                            </span>
                          </span>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen ? (
                            <motion.div
                              key={chapter.id}
                              className="cases-chapter-body"
                              initial={
                                reduce ? false : { height: 0, opacity: 0 }
                              }
                              animate={{ height: "auto", opacity: 1 }}
                              exit={
                                reduce
                                  ? { opacity: 0 }
                                  : { height: 0, opacity: 0 }
                              }
                              transition={{
                                duration: 0.28,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                            >
                              <ChapterBody chapter={chapter} />
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
                <div className="cases-overlay-nav">
                  <button
                    type="button"
                    onClick={() => setSelected(neighborId(selectedCase.id, -1))}
                  >
                    Vorheriger Case
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelected(neighborId(selectedCase.id, 1))}
                  >
                    Nächster Case
                  </button>
                  {selectedCase.id === "proof" ? (
                    <a
                      href={NETLIGHT_CASE_STUDY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackOutboundClick(
                          NETLIGHT_CASE_STUDY_URL,
                          "Cases Proof",
                        )
                      }
                    >
                      Fallstudie Netlight
                    </a>
                  ) : null}
                  <Link to="/events">Events</Link>
                  <Link to="/supplychain">Supply Chain Conference</Link>
                  <button
                    type="button"
                    className="is-gold"
                    onClick={() => setSelected("contact")}
                  >
                    Gespräch
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}

        {selected === "contact" ? (
          <motion.div
            key="contact"
            className="cases-overlay-root"
            onClick={closePanel}
            role="presentation"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="cases-contact-title"
              className="cases-overlay"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="cases-overlay-close"
                onClick={closePanel}
                aria-label="Gespräch schließen"
              >
                <X size={16} />
              </button>
              <div className="cases-overlay-media">
                <img
                  src="/request-demo/leo-corbi.webp"
                  alt="Leonard Beckmann und Corbinian Massinger"
                />
              </div>
              <div className="cases-overlay-body">
                <div className="cases-overlay-scroll">
                  <h2 id="cases-contact-title" className="cases-overlay-title">
                    Lassen Sie uns die Ausgestaltung persönlich besprechen
                  </h2>
                  <p className="cases-overlay-lead">
                    Ihre Ansprechpartner sind die Heads of Conferences Corbinian
                    Massinger und Leonard Beckmann.
                  </p>
                  <CalendlyInline />
                  <p className="cases-footnote">
                    Die genannten Zahlen stammen aus der AI Consulting
                    Conference 2026 und der Frontier Tech Conference 2025. Der
                    Teilnehmermix beschreibt den Zielstand des Formats. Stand,
                    Vortragsslot, Brandingflächen, CV-Book und Workshop gelten
                    in dem Umfang, in dem sie im jeweiligen Vertrag vereinbart
                    sind.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Cases;
