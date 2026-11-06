/**
 * Event listings for /events, split into conferences and evening events.
 * Newest first. scripts/verify-events-data.mjs checks this file.
 *
 * Copy that differs between the German and the English edition is a
 * `{ de, en }` pair; a plain string (proper names, English titles) reads the
 * same in both. Resolve with `localize(text, lang)`.
 */
import type { PageLang } from "../i18n/pageLang";

export type Localized = Record<PageLang, string>;
export type Text = string | Localized;

export const localize = (text: Text, lang: PageLang): string =>
  typeof text === "string" ? text : text[lang];

export interface EventGuest {
  name: string;
  position?: Text;
  company?: Text;
}

export interface UpcomingConference {
  id: string;
  title: Text;
  date: Text;
  location?: Text;
  /** One line on what the day is about; omitted until the programme stands. */
  theme?: Text;
  /** Short facts after the theme, e.g. place, length, audience. */
  details?: Text[];
  /** Internal sub-page; the row's only link. */
  page: string;
}

export interface PastConference {
  id: string;
  title: Text;
  date: Text;
  location: Text;
  note: Text;
  photos: { src: string; alt: Text }[];
}

export interface EveningEvent {
  id: string;
  /** Omitted for the TEG Management Talk, whose title names the format. */
  format?: Text;
  title: Text;
  topic?: Text;
  date: Text;
  location?: Text;
  description?: Text;
  image?: string;
  imageAlt?: Text;
  link?: string;
  /** Internal sub-page; on /events the whole row links there. */
  page?: string;
  guests?: EventGuest[];
}

export const upcomingConferences: UpcomingConference[] = [
  {
    id: "supplychainconference2026",
    title: "Supply Chain Management Conference",
    date: {
      de: "8. Dezember 2026",
      en: "8 December 2026",
    },
    theme: {
      de: "Automatisierung und Geopolitik in der Lieferkette",
      en: "Automation and geopolitics in the supply chain",
    },
    location: {
      de: "München",
      en: "Munich",
    },
    details: [
      { de: "9–18 Uhr", en: "9 am – 6 pm" },
      {
        de: "100 Teilnehmer, davon 70 Führungskräfte",
        en: "100 participants, 70 of them executives",
      },
    ],
    page: "/conferences/supplychain-management-conference",
  },
  {
    id: "aviation-management-conference-2027",
    title: "Aviation Management Conference",
    date: {
      de: "3. Juni 2027",
      en: "3 June 2027",
    },
    location: {
      de: "München",
      en: "Munich",
    },
    page: "/conferences/aviation-management-conference",
  },
];

export const pastConferences: PastConference[] = [
  {
    id: "ai-2026",
    title: "AI Consulting Conference",
    date: {
      de: "10. Juni 2026",
      en: "10 June 2026",
    },
    location: {
      de: "Netlight, München",
      en: "Netlight, Munich",
    },
    note: {
      de: "Mit BCG, Roland Berger, IBM, PwC und Munich Re.",
      en: "With BCG, Roland Berger, IBM, PwC and Munich Re.",
    },
    photos: [
      {
        src: "/events/supply-chain/past/ai-consulting-1.webp",
        alt: {
          de: "Publikum der AI Consulting Conference 2026",
          en: "Audience at the AI Consulting Conference 2026",
        },
      },
      {
        src: "/events/supply-chain/past/ai-consulting-2.webp",
        alt: {
          de: "Podiumsdiskussion auf der AI Consulting Conference 2026",
          en: "Panel discussion at the AI Consulting Conference 2026",
        },
      },
    ],
  },
  {
    id: "frontier-tech-conference-2025",
    title: "Frontier Tech Conference",
    date: {
      de: "10. Dezember 2025",
      en: "10 December 2025",
    },
    location: {
      de: "MaibornWolff, München",
      en: "MaibornWolff, Munich",
    },
    note: {
      de: "Mit Microsoft, Google, MaibornWolff, NVIDIA und UnternehmerTUM.",
      en: "With Microsoft, Google, MaibornWolff, NVIDIA and UnternehmerTUM.",
    },
    photos: [
      {
        src: "/events/supply-chain/past/frontier-tech-1.webp",
        alt: {
          de: "Publikum der Frontier Tech Conference 2025",
          en: "Audience at the Frontier Tech Conference 2025",
        },
      },
      {
        src: "/events/supply-chain/past/frontier-tech-2.webp",
        alt: {
          de: "Panel auf der Frontier Tech Conference 2025",
          en: "Panel at the Frontier Tech Conference 2025",
        },
      },
    ],
  },
];

/** When this is empty, the page points to the Luma calendar instead. */
export const upcomingEveningEvents: EveningEvent[] = [
  {
    id: "enterprise-sales-summit-2027",
    title: "Enterprise Sales Summit",
    date: {
      de: "19. Januar 2027",
      en: "19 January 2027",
    },
    location: {
      de: "München",
      en: "Munich",
    },
    topic: {
      de: "Rethinking the Sales Funnel: was heute wirklich Kunden bringt",
      en: "Rethinking the Sales Funnel: what truly wins customers today",
    },
    page: "/conferences/enterprise-sales-summit",
  },
];

export const pastEveningEvents: EveningEvent[] = [
  {
    id: "teg-talk-22-10-2026",
    title: {
      de: "TEG Management Talk Oktober 2026",
      en: "TEG Management Talk October 2026",
    },
    date: {
      de: "22. Oktober 2026",
      en: "22 October 2026",
    },
    location: {
      de: "München",
      en: "Munich",
    },
    description: {
      de: "Wie gelingt der Weg in eine Führungsposition? Vier Speaker über Leadership, Karriere und unternehmerisches Wachstum.",
      en: "What does it take to reach a leadership position? Four speakers on leadership, careers and entrepreneurial growth.",
    },
    image: "/events/teg-talk-leadership-2026.webp",
    imageAlt: {
      de: "Ein Speaker beim TEG Management Talk April 2026",
      en: "A speaker at the TEG Management Talk April 2026",
    },
    guests: [
      {
        name: "Heiner Thorborg",
        position: {
          de: "Executive Search für C-Level-Positionen",
          en: "Executive search for C-level positions",
        },
      },
      {
        name: "Florian Bogenschütz",
        position: "Managing Director",
        company: "Wayra",
      },
      {
        name: "Jan Hiesserich",
        position: "Group Chief Strategy Officer",
        company: {
          de: "GFT Technologies (zuvor Palantir)",
          en: "GFT Technologies (formerly Palantir)",
        },
      },
      {
        name: "Daniel Smeds",
        position: {
          de: "Mehrfacher Gründer, Managing Director und Investor",
          en: "Serial founder, Managing Director and investor",
        },
      },
    ],
  },
  {
    id: "biotech-medtech-panel-2026",
    format: "Industry Panel",
    title: {
      de: "Herausforderungen & Innovation in Biotech & Medtech",
      en: "Challenges & Innovation in Biotech & Medtech",
    },
    date: {
      de: "3. Juli 2026",
      en: "3 July 2026",
    },
    location: "IZB Faculty Club, Martinsried",
    description: {
      de: "Forschung und Wirtschaft über Hürden, Innovationen und die Zukunft des Life-Sciences-Standorts München.",
      en: "Research and industry on the obstacles, the innovations and the future of Munich as a life sciences hub.",
    },
    image: "/events/converted/biotech-medtech-panel-2026-photo.webp",
    imageAlt: {
      de: "Panel zu Biotech und Medtech im IZB Faculty Club",
      en: "Panel on biotech and medtech at the IZB Faculty Club",
    },
    guests: [
      {
        name: "Dr. Thilo Kaltenbach",
        position: "Senior Partner, Global Pharma & Healthcare",
        company: "Roland Berger",
      },
      {
        name: "Dr. Dominik Schumacher",
        position: "Founder & Managing Director",
        company: "Tubulis",
      },
      {
        name: "Prof. Andreas Ladurner",
        position: {
          de: "CSO und Managing Director",
          en: "CSO and Managing Director",
        },
        company: {
          de: "Eisbach Bio / LMU München",
          en: "Eisbach Bio / LMU Munich",
        },
      },
      {
        name: "Prof. med. Ralf Huss",
        position: {
          de: "Geschäftsführer",
          en: "Managing Director",
        },
        company: "BioM Biotech Cluster Development",
      },
    ],
  },
  {
    id: "teg-talk-24-04-2026",
    title: "TEG Management Talk April 2026",
    date: {
      de: "24. April 2026",
      en: "24 April 2026",
    },
    location: {
      de: "O2 Tower / Wayra Germany, München",
      en: "O2 Tower / Wayra Germany, Munich",
    },
    description: {
      de: "Wie unternehmerisches Denken in großen Organisationen Wirkung entfaltet, von Software-defined Mobility bis Healthtech.",
      en: "How entrepreneurial thinking makes its mark in large organisations, from software-defined mobility to healthtech.",
    },
    image: "/events/converted/teg-talk-24-04-2026.webp",
    imageAlt: {
      de: "TEG Management Talk April 2026 im O2 Tower",
      en: "TEG Management Talk April 2026 at the O2 Tower",
    },
    guests: [
      {
        name: "Georg Doll",
        position: "CTO Automotive & Mobility",
        company: "Microsoft",
      },
      {
        name: "Dr. Tobias Süß",
        position: "Director Political Affairs",
        company: "HENSOLDT",
      },
      {
        name: "Dr. Hartwig Rüll",
        position: "Director Strategy",
        company: "Siemens",
      },
      {
        name: "Dr. Irene Lejeune",
        position: "Co-Founder",
        company: "CE Consumer Electronics",
      },
    ],
  },
  {
    id: "charging-ahead-2026",
    format: "Industry Panel",
    title: {
      de: "Charging Ahead: Deutschland vs. China",
      en: "Charging Ahead: Germany vs. China",
    },
    date: {
      de: "20. Januar 2026",
      en: "20 January 2026",
    },
    location: {
      de: "smartvillage Bogenhausen, München",
      en: "smartvillage Bogenhausen, Munich",
    },
    description: {
      de: "Wo deutsche OEMs im globalen Wettlauf um E-Mobility stehen: Software, Entwicklungsgeschwindigkeit, Regulierung und Antriebe.",
      en: "Where German OEMs stand in the global race for e-mobility: software, development speed, regulation and powertrains.",
    },
    image: "/events/converted/charging-ahead-2026-alt.webp",
    imageAlt: {
      de: "Panel Charging Ahead im smartvillage Bogenhausen",
      en: "The Charging Ahead panel at smartvillage Bogenhausen",
    },
    guests: [
      {
        name: "Jennifer Treiber-Ruckenbrod",
        position: "Global CMO",
        company: "MINI",
      },
      {
        name: "Janik Juelch",
        position: "Customer Experience & Sponsoring Manager",
        company: "XPENG Deutschland",
      },
      {
        name: "Prof. Dr. Johannes Betz",
        position: {
          de: "Professor für Autonomes Fahren",
          en: "Professor of Autonomous Driving",
        },
        company: {
          de: "TU München",
          en: "TU Munich",
        },
      },
      {
        name: "Prof. Dr. Malte Jaensch",
        position: {
          de: "Professor für nachhaltige mobile Antriebssysteme",
          en: "Professor of Sustainable Mobile Drivetrains",
        },
        company: {
          de: "TU München",
          en: "TU Munich",
        },
      },
    ],
  },
  {
    id: "enterprise-sales-2025",
    format: "Business Event",
    title: "Enterprise Sales: B2B",
    date: {
      de: "20. November 2025",
      en: "20 November 2025",
    },
    location: {
      de: "München",
      en: "Munich",
    },
    description: {
      de: "Wie man komplexe B2B-Vertriebsprozesse strukturiert und Entscheider in großen Unternehmen auf Augenhöhe erreicht.",
      en: "How to structure complex B2B sales processes and meet decision-makers in large enterprises on equal terms.",
    },
    image: "/events/converted/enterprise-sales-2025.webp",
    imageAlt: {
      de: "Event Enterprise Sales in München",
      en: "The Enterprise Sales event in Munich",
    },
    guests: [
      {
        name: "Georg Schwienbacher",
        position: "Managing Director",
        company: "Georg Schwienbacher Consulting",
      },
      {
        name: "Christopher Stützel",
        position: "Large Enterprise Account Executive",
        company: "Staffbase",
      },
      {
        name: "Heinz-Georg Geissler",
        position: {
          de: "Leiter der Geschäftsstelle",
          en: "Head of the Executive Office",
        },
        company: "Bundesverband der Vertriebsmanager",
      },
      { name: "Achim A.", position: "Founder", company: "Sinalis AI" },
    ],
  },
  {
    id: "teg-talk-24-10-2025",
    title: {
      de: "TEG Management Talk Oktober 2025",
      en: "TEG Management Talk October 2025",
    },
    date: {
      de: "24. Oktober 2025",
      en: "24 October 2025",
    },
    location: {
      de: "Microsoft, München",
      en: "Microsoft, Munich",
    },
    description: {
      de: "Gründungserfahrung, Corporate Leadership und verantwortungsvolles Unternehmertum, darunter der Weg von NanoTemper vom Labor-Spin-off zum weltweit tätigen Unternehmen.",
      en: "Founding experience, corporate leadership and responsible entrepreneurship, among them NanoTemper’s path from laboratory spin-off to global company.",
    },
    image: "/shared/images/tegtalk-group-WS26.avif",
    imageAlt: {
      de: "Gruppenfoto beim TEG Management Talk Oktober 2025 bei Microsoft München",
      en: "Group photo at the TEG Management Talk October 2025 at Microsoft Munich",
    },
    guests: [
      {
        name: "Philipp Baaske",
        position: "Executive Chairman",
        company: "NanoTemper Technologies",
      },
      {
        name: "Osman Agirbas",
        position: "Managing Director",
        company: "Interhyp Group",
      },
      {
        name: "Ulrich Beck",
        position: "Former VP Finance",
        company: "Airbus Group",
      },
      { name: "Rene Pajta", company: "Microsoft" },
    ],
  },
  {
    id: "fireside-chat-2025",
    format: "Fireside Chat",
    title: {
      de: "Wie Top-Positionen besetzt werden",
      en: "How Top Positions Are Filled",
    },
    date: {
      de: "7. Oktober 2025",
      en: "7 October 2025",
    },
    location: {
      de: "Atreus, München",
      en: "Atreus, Munich",
    },
    description: {
      de: "Auswahlkriterien für Führungskräfte, Wege ins Top-Management und die Rolle von Interim Management und Executive Search.",
      en: "Selection criteria for executives, routes into top management and the role of interim management and executive search.",
    },
    image: "/events/converted/fireside-chat-2025.webp",
    imageAlt: {
      de: "Fireside Chat bei Atreus",
      en: "Fireside chat at Atreus",
    },
    guests: [
      {
        name: "Petra Becker",
        position: {
          de: "Direktorin & Executive Interim Managerin",
          en: "Director & Executive Interim Manager",
        },
        company: "Atreus",
      },
      {
        name: "Laray Mbendjamen",
        position: "Engagement Manager",
        company: "Heidrick & Struggles",
      },
    ],
  },
];

export const LUMA_CALENDAR_URL =
  "https://luma.com/calendar/cal-wx7ERCipEGjooAr";
