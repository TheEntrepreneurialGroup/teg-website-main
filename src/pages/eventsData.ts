/**
 * Event listings for /events, split into conferences and evening events.
 * Newest first. scripts/verify-events-data.mjs checks this file.
 */

export interface EventGuest {
  name: string;
  position?: string;
  company?: string;
}

export interface UpcomingConference {
  id: string;
  title: string;
  date: string;
  location?: string;
  /** One line on what the day is about; omitted until the programme stands. */
  theme?: string;
  /** Short facts after the theme, e.g. place, length, audience. */
  details?: string[];
  /** Internal sub-page; the row's only link. */
  page: string;
}

export interface PastConference {
  id: string;
  title: string;
  date: string;
  location: string;
  note: string;
  photos: { src: string; alt: string }[];
}

export interface EveningEvent {
  id: string;
  /** Omitted for the TEG Management Series, whose title names the format. */
  format?: string;
  title: string;
  topic?: string;
  date: string;
  location?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  link?: string;
  guests?: EventGuest[];
}

export const upcomingConferences: UpcomingConference[] = [
  {
    id: "supplychainconference2026",
    title: "Supply Chain Management Conference",
    date: "8. Dezember 2026",
    theme: "Automatisierung und Geopolitik in der Lieferkette",
    location: "München",
    details: ["ganztägig", "125 Teilnehmer, davon 100 Führungskräfte"],
    page: "/events/supply-chain",
  },
  {
    id: "aviation-management-conference-2027",
    title: "Aviation Management Conference",
    date: "19. Mai 2027",
    page: "/events/aviation",
  },
];

export const pastConferences: PastConference[] = [
  {
    id: "ai-2026",
    title: "AI Consulting Conference",
    date: "10. Juni 2026",
    location: "Netlight, München",
    note: "Mit BCG, Roland Berger, IBM, PwC und Munich Re.",
    photos: [
      {
        src: "/events/supply-chain/past/ai-consulting-1.webp",
        alt: "Publikum der AI Consulting Conference 2026",
      },
      {
        src: "/events/supply-chain/past/ai-consulting-2.webp",
        alt: "Podiumsdiskussion auf der AI Consulting Conference 2026",
      },
    ],
  },
  {
    id: "frontier-tech-conference-2025",
    title: "Frontier Tech Conference",
    date: "10. Dezember 2025",
    location: "MaibornWolff, München",
    note: "Mit Microsoft, Google, MaibornWolff, NVIDIA und UnternehmerTUM.",
    photos: [
      {
        src: "/events/supply-chain/past/frontier-tech-1.webp",
        alt: "Publikum der Frontier Tech Conference 2025",
      },
      {
        src: "/events/supply-chain/past/frontier-tech-2.webp",
        alt: "Panel auf der Frontier Tech Conference 2025",
      },
    ],
  },
];

/** When this is empty, the page points to the Luma calendar instead. */
export const upcomingEveningEvents: EveningEvent[] = [
  {
    id: "enterprise-sales-summit-2027",
    title: "Enterprise Sales Summit",
    date: "19. Januar 2027",
  },
];

export const pastEveningEvents: EveningEvent[] = [
  {
    id: "teg-talk-22-10-2026",
    title: "TEG Management Series Oktober 2026",
    date: "22. Oktober 2026",
    location: "München",
    description:
      "Wie gelingt der Weg in eine Führungsposition? Vier Speaker über Leadership, Karriere und unternehmerisches Wachstum.",
    image: "/events/teg-talk-leadership-2026.webp",
    imageAlt: "Ein Speaker bei der TEG Management Series April 2026",
    guests: [
      {
        name: "Heiner Thorborg",
        position: "Executive Search für C-Level-Positionen",
      },
      {
        name: "Florian Bogenschütz",
        position: "Managing Director",
        company: "Wayra",
      },
      {
        name: "Jan Hiesserich",
        position: "Group Chief Strategy Officer",
        company: "GFT Technologies (zuvor Palantir)",
      },
      {
        name: "Daniel Smeds",
        position: "Mehrfacher Gründer, Managing Director und Investor",
      },
    ],
  },
  {
    id: "biotech-medtech-panel-2026",
    format: "Industry Panel",
    title: "Herausforderungen & Innovation in Biotech & Medtech",
    date: "3. Juli 2026",
    location: "IZB Faculty Club, Martinsried",
    description:
      "Forschung und Wirtschaft über Hürden, Innovationen und die Zukunft des Life-Sciences-Standorts München.",
    image: "/events/converted/biotech-medtech-panel-2026-photo.webp",
    imageAlt: "Panel zu Biotech und Medtech im IZB Faculty Club",
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
        position: "CSO und Managing Director",
        company: "Eisbach Bio / LMU München",
      },
      {
        name: "Prof. med. Ralf Huss",
        position: "Geschäftsführer",
        company: "BioM Biotech Cluster Development",
      },
    ],
  },
  {
    id: "teg-talk-24-04-2026",
    title: "TEG Management Series April 2026",
    date: "24. April 2026",
    location: "O2 Tower / Wayra Germany, München",
    description:
      "Wie unternehmerisches Denken in großen Organisationen Wirkung entfaltet, von Software-defined Mobility bis Healthtech.",
    image: "/events/converted/teg-talk-24-04-2026.webp",
    imageAlt: "TEG Management Series April 2026 im O2 Tower",
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
    title: "Charging Ahead: Deutschland vs. China",
    date: "20. Januar 2026",
    location: "smartvillage Bogenhausen, München",
    description:
      "Wo deutsche OEMs im globalen Wettlauf um E-Mobility stehen: Software, Entwicklungsgeschwindigkeit, Regulierung und Antriebe.",
    image: "/events/converted/charging-ahead-2026-alt.webp",
    imageAlt: "Panel Charging Ahead im smartvillage Bogenhausen",
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
        position: "Professor für Autonomes Fahren",
        company: "TU München",
      },
      {
        name: "Prof. Dr. Malte Jaensch",
        position: "Professor für nachhaltige mobile Antriebssysteme",
        company: "TU München",
      },
    ],
  },
  {
    id: "enterprise-sales-2025",
    format: "Business Event",
    title: "Enterprise Sales: B2B",
    date: "20. November 2025",
    location: "München",
    description:
      "Wie man komplexe B2B-Vertriebsprozesse strukturiert und Entscheider in großen Unternehmen auf Augenhöhe erreicht.",
    image: "/events/converted/enterprise-sales-2025.webp",
    imageAlt: "Event Enterprise Sales in München",
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
        position: "Leiter der Geschäftsstelle",
        company: "Bundesverband der Vertriebsmanager",
      },
      { name: "Achim A.", position: "Founder", company: "Sinalis AI" },
    ],
  },
  {
    id: "teg-talk-24-10-2025",
    title: "TEG Management Series Oktober 2025",
    date: "24. Oktober 2025",
    location: "Microsoft, München",
    description:
      "Gründungserfahrung, Corporate Leadership und verantwortungsvolles Unternehmertum, darunter der Weg von NanoTemper vom Labor-Spin-off zum weltweit tätigen Unternehmen.",
    image: "/shared/images/tegtalk-group-WS26.avif",
    imageAlt:
      "Gruppenfoto bei der TEG Management Series Oktober 2025 bei Microsoft München",
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
    title: "Wie Top-Positionen besetzt werden",
    date: "7. Oktober 2025",
    location: "Atreus, München",
    description:
      "Auswahlkriterien für Führungskräfte, Wege ins Top-Management und die Rolle von Interim Management und Executive Search.",
    image: "/events/converted/fireside-chat-2025.webp",
    imageAlt: "Fireside Chat bei Atreus",
    guests: [
      {
        name: "Petra Becker",
        position: "Direktorin & Executive Interim Managerin",
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
