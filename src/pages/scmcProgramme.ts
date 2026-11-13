/**
 * Programme of the Supply Chain Management Conference, 8 December 2026,
 * from "SCM Conf. Agenda" (PDF, Nov 2026). Sessions carry speakers and an
 * abstract; logistics items (check-in, breaks, lunch) stay one quiet line.
 */
import type { PageLang } from "../i18n/pageLang";

type L = Record<PageLang, string>;

export type ProgrammeSpeaker = { name: string; role: L };

export type ProgrammeItem = {
  time: string;
  kind: L;
  title: L;
  /** Logistics rows render compact and muted. */
  quiet?: boolean;
  speakers?: ProgrammeSpeaker[];
  host?: L;
  abstract?: L;
  /** Short industry talks grouped in one block; slots without a speaker
   *  are still open. */
  briefings?: (Briefing | null)[];
};

/** A briefing names its speaker, or only the company while the speaker is
 *  not yet known. With neither, the industry is set and the slot is open. */
export type Briefing = {
  industry: L;
  speaker?: ProgrammeSpeaker;
  company?: string;
};

const same = (text: string): L => ({ de: text, en: text });

const KEYNOTE = same("Keynote");
const PANEL: L = { de: "Podium", en: "Panel" };
const BREAK: L = { de: "Pause", en: "Break" };
const TEAM: L = { de: "Conference Team der TEG", en: "TEG conference team" };

const kirner: ProgrammeSpeaker = {
  name: "Manuela Kirner",
  role: {
    de: "CFO, C4C Consulting for Cleanrooms; Senior Director Customs, Infineon (bis 2025)",
    en: "CFO, C4C Consulting for Cleanrooms; Senior Director Customs, Infineon (until 2025)",
  },
};

const briegel: ProgrammeSpeaker = {
  name: "Hansjörg Briegel",
  role: same("VP ER&D, Intel"),
};

const popp: ProgrammeSpeaker = {
  name: "Dr. Julian Popp",
  role: {
    de: "VP Körber Supply Chain Consulting; Partner MHP (2017–2026)",
    en: "VP Körber Supply Chain Consulting; Partner MHP (2017–2026)",
  },
};

const schneider: ProgrammeSpeaker = {
  name: "Oskar Schneider",
  role: same("Senior AI Expert, Data Science, Horváth"),
};

const lustig: ProgrammeSpeaker = {
  name: "Dr. Stefan Lustig",
  role: {
    de: "Founder Brewery2030+; ehem. Geschäftsführer Supply Chain, Paulaner",
    en: "Founder Brewery2030+; former Managing Director Supply Chain, Paulaner",
  },
};

export const programme: ProgrammeItem[] = [
  {
    time: "9:00–9:30",
    kind: same("Check-in"),
    title: {
      de: "Ankommen, Registrierung, Kaffee",
      en: "Arrival, registration, coffee",
    },
    quiet: true,
  },
  {
    time: "9:30–9:45",
    kind: { de: "Begrüßung", en: "Welcome" },
    title: {
      de: "Eröffnung der Supply Chain Management Conference",
      en: "Opening of the Supply Chain Management Conference",
    },
    host: TEAM,
  },
  {
    time: "9:45–10:00",
    kind: { de: "Begrüßung", en: "Welcome" },
    title: {
      de: "Begrüßung durch den Gastgeber",
      en: "Welcome from our host",
    },
    host: same("MaibornWolff"),
  },
  {
    time: "10:05–10:35",
    kind: KEYNOTE,
    title: {
      de: "Globale Umbrüche und die Zukunftsfähigkeit von Infineon: Geopolitik, Lieferketten und Nachhaltigkeit in der Halbleiterindustrie",
      en: "Global upheaval and Infineon's future viability: geopolitics, supply chains and sustainability in the semiconductor industry",
    },
    speakers: [
      {
        name: "Peter Dressler",
        role: same("VP Supply Chain, Infineon (1999–2024)"),
      },
    ],
    abstract: {
      de: "Wie Geopolitik, die Rückholpolitik der USA, Förderprogramme außerhalb Europas und Logistikstörungen die Halbleiter-Wertschöpfungskette unter Druck setzen – am Beispiel von Infineons weltweitem Netz aus 14 Front- und Backend-Standorten.",
      en: "How geopolitics, US reshoring policy, subsidy programmes outside Europe and logistics disruptions put the semiconductor value chain under pressure – illustrated by Infineon's global network of 14 front-end and back-end sites.",
    },
  },
  {
    time: "10:40–11:10",
    kind: KEYNOTE,
    title: {
      de: "Digital Twin in der Fabrikplanung: Was nach dem Pilotprojekt wirklich übrig bleibt",
      en: "Digital twins in factory planning: what really remains after the pilot",
    },
    speakers: [
      {
        name: "Jochen Kröber",
        role: {
          de: "Partner, Horváth – Head of SCM & Production",
          en: "Partner, Horváth – Head of SCM & Production",
        },
      },
    ],
    abstract: {
      de: "Layoutänderungen, neue Produktvarianten oder zusätzlicher Schichtbetrieb werden in der Produktion oft noch in Excel und Workshops vorbereitet. Wann lohnt sich ein Digital Twin, wo reicht ein einfacheres Modell, und wie bleibt der Twin im Alltag tatsächlich in Benutzung?",
      en: "Layout changes, new product variants or an extra shift are often still prepared in Excel and workshops. When does a digital twin pay off, where does a simpler model suffice, and how does the twin actually stay in use day to day?",
    },
  },
  {
    time: "11:10–11:30",
    kind: BREAK,
    title: {
      de: "Vormittagssnack und Kaffee",
      en: "Morning snack and coffee",
    },
    quiet: true,
  },
  {
    time: "11:30–12:15",
    kind: PANEL,
    title: {
      de: "Automatisierung entlastet – aber wen? Neue Verantwortungsrollen in der KI-gestützten Supply Chain",
      en: "Automation brings relief – but to whom? New roles of responsibility in the AI-driven supply chain",
    },
    speakers: [
      briegel,
      {
        name: "Anke Schnitzer",
        role: {
          de: "Leitung IT, CompuSafe Data Systems",
          en: "Head of IT, CompuSafe Data Systems",
        },
      },
      { name: "Dr. Stefan Kluge", role: same("VP Operations, ams Osram") },
    ],
    abstract: {
      de: "Von der Ausführung zur Steuerung: Wie Automatisierung Rollen verändert und Constraint Ownership, Governance und klare Accountability zur Grundlage resilienter Supply Chains macht.",
      en: "From execution to control: how automation changes roles and makes constraint ownership, governance and clear accountability the foundation of resilient supply chains.",
    },
  },
  {
    time: "12:15–13:30",
    kind: { de: "Mittagessen", en: "Lunch" },
    title: {
      de: "Lunch und Networking",
      en: "Lunch and networking",
    },
    quiet: true,
  },
  {
    time: "13:30–14:20",
    kind: { de: "Kurz-Impulse", en: "Short talks" },
    title: same("Industry Briefings"),
    abstract: {
      de: "Kurz-Impulse von sieben bis zehn Minuten: ein Rundblick über verschiedene Industrien.",
      en: "Short talks of seven to ten minutes: a tour of different industries.",
    },
    briefings: [
      {
        industry: same("Automotive"),
        speaker: popp,
      },
      { industry: { de: "Brauindustrie", en: "Brewing" }, speaker: lustig },
      {
        industry: { de: "Halbleiter", en: "Semiconductors" },
        speaker: briegel,
      },
      // Swiss Re expected, not yet confirmed.
      { industry: { de: "Versicherung", en: "Insurance" } },
      // GFT Technologies expected, not yet confirmed.
      null,
    ],
  },
  {
    time: "14:25–14:45",
    kind: KEYNOTE,
    title: {
      de: "Autonom, intelligent, vernetzt: Wie KI, Roboter und autonome Systeme die Supply Chain neu organisieren",
      en: "Autonomous, intelligent, connected: how AI, robots and autonomous systems reorganise the supply chain",
    },
    speakers: [popp],
    abstract: {
      de: "Von der Pilotanwendung zur skalierbaren Intralogistik: Was es braucht, damit Daten, Integration und Steuerung autonome Lieferketten tragen.",
      en: "From pilot application to scalable intralogistics: what it takes for data, integration and control to carry autonomous supply chains.",
    },
  },
  {
    time: "14:50–15:20",
    kind: KEYNOTE,
    title: {
      de: "Vom Bauchgefühl zum Digital Twin: Supply-Chain-Netzwerke kontinuierlich verbessern",
      en: "From gut feeling to digital twin: continuously improving supply chain networks",
    },
    speakers: [schneider],
    abstract: {
      de: "Digital Twins als datenbasiertes Zukunftsbild des Supply-Chain-Netzwerks, mit dem sich Szenarien schnell simulieren und deren Auswirkungen auf Kosten, Kapazität, Service und Resilienz bewerten lassen.",
      en: "Digital twins as a data-based picture of the future supply chain network, in which scenarios can be simulated quickly and their effects on cost, capacity, service and resilience assessed.",
    },
  },
  {
    time: "15:25–15:45",
    kind: KEYNOTE,
    title: {
      de: "Tradition & Transformation – Die Supply Chain als strategischer Hebel für die Zukunft der Brauindustrie",
      en: "Tradition & transformation – the supply chain as a strategic lever for the future of the brewing industry",
    },
    speakers: [lustig],
    abstract: {
      de: "Klimawandel, Versorgungsrisiken, Kostendruck, Digitalisierung und veränderte Konsumentenwünsche fordern die Branche stark heraus. Innovationen in Rohstoffversorgung, Produktion und Nachhaltigkeit sowie die Erweiterung der Brauerei zur flexiblen Bioprozessplattform machen die Supply Chain zum entscheidenden Erfolgsfaktor.",
      en: "Climate change, supply risks, cost pressure, digitalisation and shifting consumer preferences challenge the industry hard. Innovation in raw-material supply, production and sustainability, and turning the brewery into a flexible bioprocess platform, make the supply chain the decisive factor for success.",
    },
  },
  {
    time: "15:50–16:20",
    kind: KEYNOTE,
    title: {
      de: "Resilienz statt Verlagerung: Wie Zoll- und Handelsabkommen Lieferketten im US-China-Konflikt krisenfest machen",
      en: "Resilience instead of relocation: how customs and trade agreements make supply chains crisis-proof in the US–China conflict",
    },
    speakers: [kirner],
    abstract: {
      de: "Ob „China+1“, Vietnam oder Indien: Wie wird das resilient?",
      en: "Whether “China+1”, Vietnam or India: how does it become resilient?",
    },
  },
  {
    time: "16:20–16:35",
    kind: BREAK,
    title: {
      de: "Nachmittagssnack und Kaffee",
      en: "Afternoon snack and coffee",
    },
    quiet: true,
  },
  {
    time: "16:35–17:20",
    kind: PANEL,
    title: {
      de: "Lizenz statt Lieferung? Chinas Exportkontrollen, Rare-Earth-Abhängigkeit und die Frage nach dem richtigen Zulieferer",
      en: "Licence instead of delivery? China's export controls, rare-earth dependence and the question of the right supplier",
    },
    speakers: [
      {
        name: "Rainer Baumann",
        role: same("VP Global Supply Chain, Infineon (2008–2025)"),
      },
      kirner,
      {
        name: "Klaus Buchwald",
        role: same(
          "COO Siltronic; Executive VP Operations, Infineon (1998–2024)",
        ),
      },
    ],
    abstract: {
      de: "Zwischen Abhängigkeit und teurem Second Sourcing: Wie Supply Chains bei Dual-Use-Listen und Sub-Tier-Blindheit entscheidungsfähig bleiben.",
      en: "Between dependence and costly second sourcing: how supply chains stay able to decide despite dual-use lists and sub-tier blindness.",
    },
  },
  {
    time: "17:20–17:30",
    kind: { de: "Abschluss", en: "Closing" },
    title: {
      de: "Schlussworte und Ausblick",
      en: "Closing remarks and outlook",
    },
    host: TEAM,
  },
  {
    time: "17:30–18:00",
    kind: same("Networking"),
    title: { de: "Offenes Networking", en: "Open networking" },
    quiet: true,
  },
];
