export interface EventSpeaker {
  name: string;
  company: string;
  position: string;
}

export interface EventData {
  id: string;
  title: string;
  date: string;
  location: string;
  category?: string;
  topic?: string;
  description: string;
  longText: string;
  image: string;
  cardImage?: string;
  imageFit?: "cover" | "contain";
  externalLink?: string;
  speakers?: EventSpeaker[];
}

const biotechLumaLink = "https://luma.com/teg-qdjm";

export const upcomingEvents: EventData[] = [
  {
    id: "biotech-medtech-panel-2026",
    title: "Herausforderungen & Innovation in Biotech & Medtech",
    date: "03.07.2026",
    location: "IZB Faculty Club, Martinsried",
    category: "Upcoming Highlight",
    topic: "Zukunft der Münchner Biotech- und Medtech-Szene",
    description:
      "Ein interaktiver Panel Talk zur Zukunft der Life-Sciences, Biotech- und Medtech-Industrie in München.",
    longText:
      "Founder, C-Level und Senior Professionals teilen ihre Sichtweisen und Prognosen dazu, wie sich Münchens Life-Sciences-, Biotech- und Medtech-Standort entwickeln wird. Forschung und Wirtschaft treffen aufeinander, um über Hürden, Innovationen und kommende Challenges zu diskutieren. Im Mittelpunkt stehen keine abstrakten Theorien, sondern Fakten, Erfahrungen und ein offener Austausch für alle, die Naturwissenschaften und Wirtschaft zusammen denken.",
    image: "/events/converted/biotech-medtech-panel-2026.webp",
    imageFit: "contain",
    externalLink: biotechLumaLink,
    speakers: [
      {
        name: "Dr. Thilo Kaltenbach",
        company: "Roland Berger",
        position: "Senior Partner, Global Pharma & Healthcare",
      },
      {
        name: "Dr. Dominik Schumacher",
        company: "Tubulis GmbH",
        position: "CEO & Founder",
      },
      {
        name: "Prof. Andreas Ladurner",
        company: "Eisbach Bio GmbH / LMU Munich",
        position:
          "CSO, Founder and Managing Director; Chair of Physiological Chemistry",
      },
      {
        name: "Prof. med. Ralf Huss",
        company: "BioM Biotech Cluster Development",
        position: "Geschäftsführer",
      },
    ],
  },
];

export const pastEvents: EventData[] = [
  {
    id: "ai-2026",
    title: "AI Consulting Conference 2026",
    date: "10.06.2026",
    location: "Netlight, München",
    category: "Conference",
    topic: "Beyond Hype. Into Business.",
    description:
      "Ein kuratierter Konferenztag darüber, wie KI Consulting, Geschäftsmodelle und Karrieren konkret verändert.",
    longText:
      "Die AI Consulting Conference brachte Perspektiven aus Strategieberatung, Tech-Consulting, Industrie, angewandter KI, Forschung und Recht zusammen. Im Fokus standen reale KI-Use-Cases, AI-Assets in Beratungsarbeit, Industry Briefings, Applied-AI-Workshops, Governance, Haftung und die Zukunft der Beraterkarriere.",
    image: "/events/converted/ai-consulting-conference-2026.webp",
    imageFit: "contain",
    externalLink: "https://luma.com/71152vc3?utm_source=tg_ws",
    speakers: [
      {
        name: "Florian Bauer",
        company: "McKinsey & Company",
        position: "Senior Partner, Technology & AI Leader DACH",
      },
      {
        name: "Marcus Hartmann",
        company: "Roland Berger",
        position: "Senior Partner",
      },
      {
        name: "Andrea Martin",
        company: "IBM",
        position: "CTO DACH",
      },
      {
        name: "Dr. Andreas Liebl",
        company: "appliedAI Initiative",
        position: "CEO",
      },
    ],
  },
  {
    id: "teg-talk-24-04-2026",
    title: "TEG Talk: Corporate Entrepreneurship",
    date: "24.04.2026",
    location: "O2 Tower / Wayra Germany, München",
    category: "TEG Talk",
    topic: "Leiten. Verantworten. Gründen.",
    description:
      "Wie unternehmerisches Denken in großen Organisationen Wirkung entfaltet.",
    longText:
      "Ein Abend über Corporate Entrepreneurship, technologische Verantwortung und Innovation in etablierten Strukturen. Im Fokus standen Software-defined Mobility, politische Verantwortung, Healthtech, KI und die Frage, wie aus Strategie konkrete Umsetzung wird.",
    image: "/events/converted/teg-talk-24-04-2026.webp",
    externalLink: "https://luma.com/fuk94geg",
    speakers: [
      {
        name: "Georg Doll",
        company: "Microsoft",
        position: "CTO Automotive & Mobility",
      },
      {
        name: "Dr. Tobias Süß",
        company: "HENSOLDT",
        position: "Director Political Affairs",
      },
      {
        name: "Dr. Hartwig Rüll",
        company: "Siemens / Semiconductor & Communication",
        position: "Strategy and technology leader",
      },
      {
        name: "Dr. Irene Lejeune",
        company: "CE Consumer Electronics",
        position: "Co-Founder",
      },
    ],
  },
  {
    id: "charging-ahead-2026",
    title: "Charging Ahead: Deutschland vs. China",
    date: "20.01.2026",
    location: "smartvillage Bogenhausen, München",
    category: "Industry Panel",
    topic: "E-Mobility, Automotive Strategy and China Competition",
    description:
      "Ein Panel zur Frage, wo deutsche OEMs im globalen E-Mobility-Wettlauf stehen.",
    longText:
      "Gemeinsam mit Expertinnen und Experten aus Industrie und Wissenschaft diskutierte TEG Software, User Experience, Entwicklungsgeschwindigkeit, Markenidentität, autonome Systeme, Regulierung und nachhaltige Antriebstechnologien. Das Format verband strategische Industrieperspektiven mit akademischer Tiefe und offenem Networking.",
    image: "/events/converted/charging-ahead-2026-alt.webp",
    speakers: [
      {
        name: "Jennifer Treiber-Ruckenbrod",
        company: "MINI",
        position: "Global CMO",
      },
      {
        name: "Janik Juelch",
        company: "XPENG Deutschland",
        position: "Customer Experience & Sponsoring Manager",
      },
      {
        name: "Prof. Dr. Johannes Betz",
        company: "Technical University of Munich",
        position: "Professor für Autonomes Fahren",
      },
      {
        name: "Prof. Dr. Malte Jaensch",
        company: "Technical University of Munich",
        position: "Professor für nachhaltige mobile Antriebssysteme",
      },
    ],
  },
  {
    id: "frontier-tech-conference-2025",
    title: "Frontier Tech Conference 2025",
    date: "10.12.2025",
    location: "MaibornWolff, München",
    category: "Conference",
    topic: "The unsexy skills to turn research into companies",
    description:
      "Tech Meets Reality, Ideas Meet Execution: Deep-Tech-Gründung jenseits der Theorie.",
    longText:
      "TEG und PushQuantum brachten STEM-Studierende, Forschende, Founder und Professionals zusammen, um die operative Seite von Deep-Tech-Unternehmen zu verstehen: Team Execution, Finanzierung, Skalierung, Markteintritt und reale Use Cases von Quantum bis Aerospace, Automotive und Robotics.",
    image: "/events/converted/frontier-tech-conference-2025.webp",
    externalLink: "https://luma.com/cyr1ctl9",
    speakers: [
      {
        name: "Jan Goetz",
        company: "IQM Quantum Computers",
        position: "CEO & Co-Founder",
      },
      {
        name: "Thomas Luschmann",
        company: "Peak Quantum",
        position: "Co-Founder & Managing Director",
      },
      {
        name: "Stephen DiAdamo",
        company: "Qoro Quantum",
        position: "Co-Founder & CTO",
      },
      {
        name: "Tobias Kalkowsky",
        company: "UnternehmerTUM / Digital Product School",
        position: "Agile Coach & Lecturer",
      },
    ],
  },
  {
    id: "enterprise-sales-2025",
    title: "Enterprise Sales: B2B",
    date: "20.11.2025",
    location: "München Innenstadt",
    category: "Business Event",
    topic: "Wie verkaufe ich an große Unternehmen?",
    description: "Sales als Brücke zwischen Produkt, Vertrauen und Wirkung.",
    longText:
      "Das Event zeigte, wie Gründerinnen, Gründer und Young Professionals komplexe B2B-Sales-Prozesse strukturieren, Entscheider auf Augenhöhe erreichen und Vertrauen als Wachstumsfaktor nutzen. Neben Praxisvorträgen ging es um mentale Blockaden, Enterprise-Methodik, technische Exzellenz und AI-gestützte Sales Execution.",
    image: "/events/converted/enterprise-sales-2025.webp",
    externalLink: "https://luma.com/x3umz079",
    speakers: [
      {
        name: "Georg Schwienbacher",
        company: "Georg Schwienbacher Consulting",
        position: "CEO",
      },
      {
        name: "Christopher Stützel",
        company: "Staffbase",
        position: "Large Enterprise Account Executive",
      },
      {
        name: "Heinz-Georg Geissler",
        company: "Bundesverband der Vertriebsmanager e.V.",
        position: "Leiter der Geschäftsstelle",
      },
      {
        name: "Achim A.",
        company: "Sinalis AI",
        position: "Founder",
      },
    ],
  },
  {
    id: "teg-talk-24-10-2025",
    title: "TEG Talk: Leadership Insights",
    date: "24.10.2025",
    location: "Microsoft Office, München",
    category: "TEG Talk",
    topic: "Leadership, Entrepreneurship and responsible company building",
    description: "Vier Perspektiven auf Führung, Unternehmertum und Wirkung.",
    longText:
      "Bei Microsoft München verband der TEG Talk Gründungserfahrung, Corporate Leadership und verantwortungsvolles Unternehmertum. Besonders im Fokus stand die Geschichte von Philipp Baaske: vom Physiker und Labor-Spin-off zum weltweit erfolgreichen Life-Science-Unternehmen.",
    image: "/shared/images/tegtalk-group-WS26.avif",
    externalLink: "https://luma.com/by6x0unh",
    speakers: [
      {
        name: "Philipp Baaske",
        company: "NanoTemper Technologies / LMU München",
        position: "Executive Chairman; Vice President Entrepreneurship",
      },
      {
        name: "Osman Agirbas",
        company: "Interhyp Group",
        position: "Managing Director",
      },
      {
        name: "Ulrich Beck",
        company: "Airbus Group / TEG Alumnus",
        position: "Former VP Finance",
      },
      {
        name: "Rene Pajta",
        company: "Microsoft",
        position: "Speaker",
      },
    ],
  },
  {
    id: "fireside-chat-2025",
    title: "From Student to Manager",
    date: "07.10.2025",
    location: "Atreus, München",
    category: "Fireside Chat",
    topic: "Karrierewege in die Führung",
    description:
      "Ein Abend über Leadership, Executive Search und frühe Weichenstellungen.",
    longText:
      "Der Fireside Chat zeigte, wie Studierende und Young Professionals früh Verantwortung entwickeln können. Diskutiert wurden Auswahlkriterien für Führungskräfte, Top-Management-Pfade, Transformation, Interim Management, Leadership Placement und die Rolle von Vision, Anpassungsfähigkeit und Kommunikation.",
    image: "/events/converted/fireside-chat-2025.webp",
    externalLink: "https://luma.com/jsc8kfna",
    speakers: [
      {
        name: "Petra Becker",
        company: "Atreus",
        position: "Direktorin & Executive Interim Managerin",
      },
      {
        name: "Laray Mbendjamen",
        company: "Heidrick & Struggles",
        position: "Engagement Manager",
      },
    ],
  },
];

/** Converts DD.MM.YYYY display dates to ISO 8601 (YYYY-MM-DD). */
export function parseGermanDateToIso(date: string): string {
  const [day, month, year] = date.split(".");
  return `${year}-${month}-${day}`;
}
