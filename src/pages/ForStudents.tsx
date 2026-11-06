import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Linkedin,
  MousePointer2,
  ChevronRight,
  Target,
  CheckCircle2,
  Calendar,
  Clock,
  Info,
  TrendingUp,
  Code2,
  FlaskConical,
  Scale,
  Rocket,
  X,
  MessageCircle,
  Video,
  Mic,
} from "lucide-react";
import Counter from "../components/blocks/Counter";
import StudentFaq from "../components/sections/StudentFaq";
import LanguageNotice from "../components/LanguageNotice";
import { PageLang, useLocalizePath, usePageLang } from "../i18n/pageLang";

const scrollingLogos = [
  { name: "BMW", src: "/shared/logos/bmw-image.webp" },
  { name: "BCG", src: "/shared/logos/bcg.avif" },
  { name: "Siemens", src: "/shared/logos/siemens.svg" },
  { name: "HVB", src: "/shared/logos/hypovereinsbank.svg" },
  { name: "Roland Berger", src: "/shared/logos/roland-berger.svg" },
  { name: "Ruhrgas", src: "/shared/logos/ruhrgas.avif" },
];

const speakers = [
  {
    name: "Dr. Michael Moser",
    role: {
      de: "Vorstand, Fresenius SE & Co. KGaA",
      en: "Management Board, Fresenius SE & Co. KGaA",
    },
    photo: "/for-students/referenten/moser.webp",
  },
  {
    name: "Volker Maiborn",
    role: {
      de: "Aufsichtsrat, MaibornWolff GmbH",
      en: "Supervisory Board, MaibornWolff GmbH",
    },
    photo: "/for-students/referenten/maiborn.webp",
  },
  {
    name: "Hansjörg Briegel",
    role: {
      de: "Vice President ER&D Ecosystem Development, Intel",
      en: "Vice President ER&D Ecosystem Development, Intel",
    },
    photo: "/for-students/referenten/briegel.webp",
  },
  {
    name: "Thomas Uchtmann",
    role: {
      de: "Geschäftsführer Vertrieb, Horbach",
      en: "Managing Director Sales, Horbach",
    },
    photo: "/for-students/referenten/uchtmann.webp",
  },
  {
    name: "Uli Beck",
    role: {
      de: "ehem. Vice President Finance Airbus, Aufsichtsrat Rovsing",
      en: "Former Vice President Finance, Airbus; Supervisory Board, Rovsing",
    },
    photo: "/for-students/referenten/beck.webp",
  },
  {
    name: "Marko Miosic",
    role: {
      de: "Partner, Senator Executive Search",
      en: "Partner, Senator Executive Search",
    },
    photo: "/for-students/referenten/miosic.webp",
  },
  {
    name: "Georg Sonner",
    role: {
      de: "Senior Manager Solution Advisory EMEA, Basware",
      en: "Senior Manager Solution Advisory EMEA, Basware",
    },
    photo: "/for-students/referenten/sonner.webp",
  },
  {
    name: "Błażej Wilkoławski",
    role: {
      de: "Director University Relations Poland, JetBrains",
      en: "Director University Relations Poland, JetBrains",
    },
    photo: "/for-students/referenten/wilkolawski.webp",
  },
  {
    name: "Julian Fink",
    role: {
      de: "Stv. Bereichsleiter Vertrieb, Bayern-Genetik",
      en: "Deputy Head of Sales, Bayern-Genetik",
    },
    photo: "/for-students/referenten/fink.webp",
  },
  {
    name: "Alexej Utz",
    role: {
      de: "Teamleiter Software-Entwicklung, itestra",
      en: "Team Lead Software Development, itestra",
    },
    photo: "/for-students/referenten/utz.webp",
  },
];

const officeHourLinks = [
  "https://luma.com/ob8f4f61",
  "https://luma.com/vk3famb0",
];

const copy = {
  de: {
    hero: {
      alt: "Gruppenfoto der TEG aus den Gründungsjahren mit Dr. Hellmuth Buddenberg, Ulrich Beck und Volker Maiborn",
      annotations: {
        beck: "Ulrich Beck, als Student: TEG, danach: Global Vice President Finance Airbus Group und CFO Airbus Joint Ventures (2011–2023), Aufsichtsrat Rovsing",
        buddenberg:
          "Dr. Hellmuth Buddenberg, Vorstandsvorsitzender der Deutschen BP (heute Aral und Castrol), Mentor, Initiator und Gründungsvorsitzender des TEG Kuratoriums",
        maiborn:
          "Volker Maiborn, als Student: TEG, danach: Aufsichtsrat MaibornWolff, CEO Ojemba",
      },
      title: (
        <>
          Gestalte die <br />
          <span className="text-[#B7860B]">Wirtschaft</span> <br />
          von morgen.
        </>
      ),
      lede: "Die Schmiede zukünftiger Führungskräfte. Gegründet 1986.",
    },
    intro: {
      title: "TEG: Eine Gemeinschaft, die Maßstäbe setzt",
      text: (
        <>
          Seit 1986 entwickeln wir mit großem Erfolg ambitionierte Studierende
          und Berufseinsteiger zu Führungskräften und Geschäftsführern. Wir
          richten uns an <strong>alle Fachrichtungen und Studiengänge</strong>.
        </>
      ),
      application: (
        <>
          Bewerbung zur kommenden YBLA offen bis{" "}
          <strong className="text-[#0F2B57]">24. Oktober</strong>
        </>
      ),
      applicationLink: "Zur Bewerbung",
      series: (
        <>
          Lerne uns kennen beim{" "}
          <strong className="text-[#0F2B57]">
            TEG Management Talk Oktober 2026
          </strong>{" "}
          am 22. Oktober mit Jan Hiesserich, leitet als Group Chief Strategy
          Officer einen Konzern mit 35 Tochterunternehmen, Heiner Thorborg,
          besetzt als Headhunter C-Level-Positionen bei Konzernen wie Amazon,
          BMW oder Microsoft, + 2 weitere.
        </>
      ),
      seriesLink: "Zum Event",
      whatsapp: "WhatsApp-Gruppe mit regelmäßigen Infos für Studierende",
      whatsappLink: "Zur WhatsApp-Gruppe",
      officeHours: "Online-Sprechstunden zur Bewerbung",
      officeHourSlots: [
        "Mo., 19. Oktober, 20–21 Uhr",
        "Fr., 23. Oktober, 20–21 Uhr (Last Minute)",
      ],
      eventsText:
        "Du möchtest wissen, was die Unternehmensführungen deutscher Firmen heute bewegt? Bewirb dich für die Teilnahme bei einem unserer Events.",
      eventsLink: "Zum Event-Kalender",
    },
    ybla: {
      label: "Unser Flaggschiff-Programm",
      question: "Was ist die YBLA?",
      text: (
        <>
          Die <strong>YBLA</strong> ist ein exklusives Ausbildungsangebot
          innerhalb von TEG, das darauf ausgerichtet ist, dich auf die
          Herausforderungen moderner Führung vorzubereiten. Du lernst Führung
          direkt von Menschen, die selbst seit Jahren Teams, Abteilungen und
          Unternehmen leiten. Wir richten uns an alle Studiengänge, jedoch
          kommen die meisten Teilnehmer aus: den{" "}
          <strong>Naturwissenschaften</strong>, der <strong>Technik</strong>,
          der <strong>Wirtschaft</strong>, den{" "}
          <strong>Rechtswissenschaften (Jura)</strong> sowie der{" "}
          <strong>Mathematik</strong>
        </>
      ),
      benefits: [
        {
          title: "Lerne von den Besten:",
          text: "Workshops mit Team-, Abteilungs- und Bereichsleitern sowie Top-Managern und Kontakte zur Spitze der deutschen Wirtschaft.",
        },
        {
          title: "Vorsprung:",
          text: "Erlerne entscheidende Fähigkeiten in Bereichen wie Teamführung, Risikomanagement und Strategie, die man in keinem Hörsaal lernt.",
        },
        {
          title: "Praxis:",
          text: "Als Praxisprojekt organisierst du eine Industrie-Konferenz mit Top-Managern, als Abschlussarbeit führst du Interviews mit Führungskräften.",
        },
        {
          title: "Community:",
          text: "Werde Teil einer selektierten Gemeinschaft mit der zukünftigen Generation deutscher Führungskräfte, Gründer und Top-Manager.",
        },
      ],
      graduation:
        "Nach erfolgreichem Absolvieren der 3 Semester YBLA erhältst du ein Abschlusszeugnis, welches deine Leistungen und Führungsreife bestätigt. Weiterhin wirst du nach YBLA-Abschluss TEGler auf Lebenszeit.",
    },
    speakers: {
      label: "Unsere Referenten",
      more: "und weitere …",
      note: "Einige Führungskräfte, die bei uns referieren, waren in ihrer Studienzeit selbst bei TEG engagiert und haben an Workshops im Rahmen unserer Ausbildungsformate teilgenommen. Heute geben sie ihr Wissen und ihre Lebenserfahrung in 4- bis 8-stündigen intensiven Workshops an die nächste Generation TEGler weiter.",
    },
    careers: {
      title: "Zukunftschancen",
      text: "Unsere YBLA bereitet dich auf die anspruchsvollsten Pfade der Wirtschaft vor. YBLA Absolventen sind heute führende Köpfe in globalen Konzernen. Ganze 30% davon in der Unternehmensleitung",
      stats: [
        { label: "Absolventen", val: "300+" },
        { label: "Top-Level Führungskräfte in Konzernen", val: "41" },
        { label: "Top-Level Führungskräfte im Mittelstand", val: "40" },
        { label: "Unternehmens-gründer", val: "15" },
      ],
    },
    roadmap: {
      title: (
        <>
          Termine & <span className="text-[#B7860B]">Roadmap</span>
        </>
      ),
      earlyTitle: "Vorab-Bewerbung",
      earlyText:
        "Du kannst dich jederzeit vorab bewerben. Am 01.10. erhältst du eine Mail zur Bestätigung der Gültigkeit.",
      earlyBadge: "Jetzt möglich",
      mainBadge: "01. - 24. Oktober",
      mainTitle: "Haupt-Bewerbungsphase",
      mainText:
        "Unser offizielles Zeitfenster zur Bewerbung für neue Talente. Am 25. & 26.10. findet die Auswahl statt.",
      interviewsTitle: "Interviews",
      interviewsText:
        "Auswahlinterviews in unserem eigenen TEG Office sowie eine Eignungsdiagnostik (Persönlichkeits- und Logiktest), ob du dich für Personalverantwortung eignest.",
      interviewsBadge: "28.10. - 03.11.",
      kickoffBadge: "Kick-Off Event",
      kickoffTitle: "Start des Programms",
      kickoffText:
        "06.11. (Abends) & 07.11. (Ganztags). Die Teilnahme ist verpflichtend für alle neuen Member.",
    },
    cta: {
      title: "Bewirb dich jetzt, und werde Teil von TEG!",
      button: "Jetzt Bewerben",
    },
    logosTitle: "Unsere Gründer-Firmen",
    contact: {
      quote: "“Wenn du Fragen hast, schreib mir gerne eine Nachricht!”",
      role: "Leitung People & Operations",
    },
    program: {
      title: "YBLA Programm-Aufbau",
      facts: [
        { val: "3", label: "Semester parallel zum Studium" },
        { val: "8", label: "Module bis zum Abschluss" },
        { val: "10–18 h", label: "pro Woche, abends & samstags" },
        { val: "8–15", label: "Plätze pro Semester" },
      ],
      steps: [
        {
          label: "1. Semester",
          title: "Einstieg",
          subtitle: "Management Workshops 1 · Praxis-Modul 1",
          modules: [
            {
              name: "Management Workshops 1",
              desc: "Workshops mit Führungskräften zu Karriere, Führungsebenen und Verantwortung.",
            },
            {
              name: "Praxis-Modul 1",
              points: [
                "Mitarbeit in einem Fachteam von TEG, z. B. im Sales.",
                "Onboarding in jeweiliges Team.",
                "Mentoring durch Teamlead.",
              ],
            },
          ],
        },
        {
          label: "2. Semester",
          title: "Verantwortung",
          subtitle: "Management Workshops 2 · Praxis-Modul 2 · Projektleitung",
          modules: [
            {
              name: "Management Workshops 2",
              desc: "Weitere Workshops mit Führungskräften aus der Wirtschaft.",
            },
            {
              name: "Praxis-Modul 2",
              points: [
                "Mehr Verantwortung im eigenen Aufgabenbereich.",
                "Weiterentwicklung von Prozessen und Abläufen im Fachteam.",
                "Gewinnung eines Mentors aus der Industrie zu deiner Fachrolle.",
              ],
            },
            {
              name: "Projektleitungs-Modul",
              desc: "Du leitest ein eigenes Projekt, z. B. eine Industrie-Konferenz mit Top-Managern.",
            },
          ],
        },
        {
          label: "3. Semester",
          title: "Führung",
          subtitle: "Management Workshops 3 · Praxis-Modul 3 · Abschlussarbeit",
          modules: [
            {
              name: "Management Workshops 3",
              desc: "Schwerpunkt Management und Führung.",
            },
            {
              name: "Praxis-Modul 3",
              desc: "Abschluss der Mitarbeit im Fachteam.",
            },
            {
              name: "Abschlussarbeit",
              desc: "Eigene Arbeit auf Basis von Interviews mit Führungskräften.",
            },
          ],
        },
      ],
      completionLabel: "Abschluss",
      completionText:
        "Abschlusszeugnis über deine Leistungen und Führungsreife und TEGler auf Lebenszeit.",
    },
    careerPaths: {
      vertrieb: {
        title: "Vertrieb & Markt",
        desc: "Du öffnest Märkte, in die das Unternehmen vorher nicht hineinkam, und führst die Teams, die die Abschlüsse holen. Wenn ein ganzes Quartal an einem einzigen Deal hängt, sitzt du am Tisch und verhandelst ihn.",
        steps: [
          "Teamleitung Vertrieb",
          "Head of Sales",
          "Vice President Sales",
          "Chief Commercial Officer",
        ],
      },
      engineering: {
        title: "Engineering & Software",
        desc: "Code schreiben können viele – du entscheidest, was gebaut wird, und führst das Team, das es baut. Vom Tech Lead bis zum CTO verantwortest du Architektur, Tempo und die Produkte des Unternehmens.",
        steps: [
          "Engineering Lead",
          "Head of Engineering",
          "Vice President Engineering",
          "CTO",
        ],
      },
      strategie: {
        title: "Unternehmensstrategie",
        desc: "Jeder große Konzern leistet sich eine eigene Strategieabteilung – die Einheit, die entscheidet, wohin sich das Unternehmen als Nächstes bewegt. Du analysierst Märkte und Wettbewerber, bewertest Übernahmen und entscheidest, wo das Unternehmen angreift und wo nicht. Als Chief Strategy Officer legst du dem Vorstand den Kurs vor, auf den sich das ganze Haus ausrichtet.",
        steps: [
          "Teamleitung Strategie",
          "Director Strategy",
          "Chief Strategy Officer",
        ],
      },
      forschung: {
        title: "Forschung & Entwicklung",
        desc: "Ob du ein Labor leitest oder die Entwicklung eines ganzen Geschäftsbereichs verantwortest: Du setzt die Richtung, an der geforscht wird, und bringst die Ergebnisse dahin, wo sie zu Produkten werden.",
        steps: ["Laborleitung", "Head of R&D", "Vice President R&D"],
      },
      recht: {
        title: "Recht & Compliance",
        desc: "Andere Juristen schreiben Gutachten. Du sitzt am Tisch, wenn entschieden wird – als General Counsel verantwortest du Recht und Compliance, verhandelst die großen Verträge und entscheidest mit, wohin das Unternehmen geht.",
        steps: [
          "Teamleitung Legal",
          "Head of Legal & Compliance",
          "General Counsel",
          "Kaufm.-jur. Geschäftsführung",
        ],
      },
      gruendung: {
        title: "Eigenes Unternehmen",
        desc: "Nach der YBLA kennst du die Konzern-Welt auswendig – du weißt, was die C-Levels der DAX-Konzerne nachts wachhält, und sprichst ihre Sprache. Du baust ein B2B-Unternehmen, das genau diese Probleme löst, und verhandelst deine Deals dort, wo sie fallen: im obersten Stockwerk.",
        steps: ["Erste Konzern-Erfahrung", "B2B-Gründung", "Geschäftsführung"],
      },
    },
    careerFields: [
      { name: "Strategy", short: "Unternehmensstrategie" },
      { name: "Recht & Compliance", short: "Recht & Compliance" },
      { name: "Forschung & Entwicklung", short: "Forschung & Entwicklung" },
      { name: "Vertrieb & Markt", short: "Vertrieb & Markt" },
      { name: "Engineering & Software", short: "Engineering & Software" },
      { name: "B2B Gründertum", short: "B2B Gründertum" },
    ],
    careerPathLabel: "Karriereweg",
    careerPathsLabel: "Karrierewege",
    close: "Schließen",
  },
  en: {
    hero: {
      alt: "TEG group photo from the founding years with Dr Hellmuth Buddenberg, Ulrich Beck and Volker Maiborn",
      annotations: {
        beck: "Ulrich Beck, as a student: TEG, then: Global Vice President Finance, Airbus Group, and CFO of Airbus joint ventures (2011–2023), supervisory board, Rovsing",
        buddenberg:
          "Dr Hellmuth Buddenberg, Chairman of Deutsche BP (today Aral and Castrol), mentor, initiator and founding chairman of the TEG Kuratorium",
        maiborn:
          "Volker Maiborn, as a student: TEG, then: supervisory board, MaibornWolff, CEO Ojemba",
      },
      title: (
        <>
          Shape the <br />
          <span className="text-[#B7860B]">economy</span> <br />
          of tomorrow.
        </>
      ),
      lede: "Where future leaders are formed. Founded in 1986.",
    },
    intro: {
      title: "TEG: A community that sets the standard",
      text: (
        <>
          Since 1986 we have been developing ambitious students and young
          professionals into executives and managing directors, with
          considerable success. We welcome{" "}
          <strong>all disciplines and degree programmes</strong>.
        </>
      ),
      application: (
        <>
          Applications for the next YBLA are open until{" "}
          <strong className="text-[#0F2B57]">24 October</strong>
        </>
      ),
      applicationLink: "Apply",
      series: (
        <>
          Meet us at the{" "}
          <strong className="text-[#0F2B57]">
            TEG Management Talk October 2026
          </strong>{" "}
          on 22 October with Jan Hiesserich, who as Group Chief Strategy Officer
          leads a group of 35 subsidiaries, Heiner Thorborg, who as a headhunter
          fills C-level positions at companies such as Amazon, BMW and
          Microsoft, and two further speakers.
        </>
      ),
      seriesLink: "View event",
      whatsapp: "WhatsApp group with regular updates for students",
      whatsappLink: "Join the WhatsApp group",
      officeHours: "Online office hours on the application",
      officeHourSlots: [
        "Mon, 19 October, 8–9 pm",
        "Fri, 23 October, 8–9 pm (last minute)",
      ],
      eventsText:
        "Would you like to know what occupies the leadership of German companies today? Apply to attend one of our events.",
      eventsLink: "View the event calendar",
    },
    ybla: {
      label: "Our flagship programme",
      question: "What is the YBLA?",
      text: (
        <>
          The <strong>YBLA</strong> is an exclusive programme within TEG,
          designed to prepare you for the demands of modern leadership. You
          learn leadership directly from people who have led teams, departments
          and companies for many years. We welcome students of every subject,
          though most participants come from{" "}
          <strong>the natural sciences</strong>, <strong>engineering</strong>,{" "}
          <strong>business and economics</strong>, <strong>law</strong> and{" "}
          <strong>mathematics</strong>.
        </>
      ),
      benefits: [
        {
          title: "Learn from the best:",
          text: "Workshops with team, department and division heads as well as top managers, and contacts at the very top of German business.",
        },
        {
          title: "A head start:",
          text: "Acquire decisive skills in areas such as team leadership, risk management and strategy that no lecture hall teaches.",
        },
        {
          title: "Practice:",
          text: "As your practical project you organise an industry conference with top managers; for your final thesis you interview executives.",
        },
        {
          title: "Community:",
          text: "Join a selective community with the coming generation of German executives, founders and top managers.",
        },
      ],
      graduation:
        "On successfully completing the three semesters of the YBLA, you receive a certificate attesting to your achievements and your readiness to lead. With your YBLA graduation you also become a TEGler for life.",
    },
    speakers: {
      label: "Our speakers",
      more: "and others …",
      note: "Several of the executives who teach with us were themselves active at TEG as students and attended workshops in our programmes. Today they pass on their knowledge and experience of life to the next generation of TEGlers in intensive workshops of four to eight hours.",
    },
    careers: {
      title: "Prospects",
      text: "Our YBLA prepares you for the most demanding paths in business. YBLA graduates are today leading figures in global corporations, a full 30% of them in top management.",
      stats: [
        { label: "Graduates", val: "300+" },
        { label: "Top-level executives in corporations", val: "41" },
        { label: "Top-level executives in mid-sized companies", val: "40" },
        { label: "Company founders", val: "15" },
      ],
    },
    roadmap: {
      title: (
        <>
          Dates & <span className="text-[#B7860B]">Roadmap</span>
        </>
      ),
      earlyTitle: "Early application",
      earlyText:
        "You may apply early at any time. On 1 October you will receive an email confirming that your application stands.",
      earlyBadge: "Open now",
      mainBadge: "1–24 October",
      mainTitle: "Main application period",
      mainText:
        "Our official window for new applicants. Selection takes place on 25 and 26 October.",
      interviewsTitle: "Interviews",
      interviewsText:
        "Selection interviews at our own TEG office, together with an aptitude assessment (personality and logic test) of whether you are suited to leading people.",
      interviewsBadge: "28 Oct – 3 Nov",
      kickoffBadge: "Kick-off event",
      kickoffTitle: "Programme start",
      kickoffText:
        "6 November (evening) & 7 November (full day). Attendance is mandatory for all new members.",
    },
    cta: {
      title: "Apply now and become part of TEG.",
      button: "Apply now",
    },
    logosTitle: "Our founding companies",
    contact: {
      quote: "“If you have any questions, do send me a message.”",
      role: "Head of People & Operations",
    },
    program: {
      title: "YBLA Programme Structure",
      facts: [
        { val: "3", label: "Semesters alongside your studies" },
        { val: "8", label: "Modules to graduation" },
        { val: "10–18 h", label: "per week, evenings & Saturdays" },
        { val: "8–15", label: "Places per semester" },
      ],
      steps: [
        {
          label: "1st semester",
          title: "Foundations",
          subtitle: "Management Workshops 1 · Practical Module 1",
          modules: [
            {
              name: "Management Workshops 1",
              desc: "Workshops with executives on careers, levels of management and responsibility.",
            },
            {
              name: "Practical Module 1",
              points: [
                "Work in one of TEG's specialist teams, e.g. sales.",
                "Onboarding into your team.",
                "Mentoring by your team lead.",
              ],
            },
          ],
        },
        {
          label: "2nd semester",
          title: "Responsibility",
          subtitle:
            "Management Workshops 2 · Practical Module 2 · Project Leadership",
          modules: [
            {
              name: "Management Workshops 2",
              desc: "Further workshops with executives from business.",
            },
            {
              name: "Practical Module 2",
              points: [
                "Greater responsibility in your own area.",
                "Developing your team's processes and workflows.",
                "Recruiting a mentor from industry for your role.",
              ],
            },
            {
              name: "Project Leadership Module",
              desc: "You lead a project of your own, e.g. an industry conference with top managers.",
            },
          ],
        },
        {
          label: "3rd semester",
          title: "Leadership",
          subtitle:
            "Management Workshops 3 · Practical Module 3 · Final Thesis",
          modules: [
            {
              name: "Management Workshops 3",
              desc: "With a focus on management and leadership.",
            },
            {
              name: "Practical Module 3",
              desc: "Concluding your work in the specialist team.",
            },
            {
              name: "Final Thesis",
              desc: "A paper of your own, based on interviews with executives.",
            },
          ],
        },
      ],
      completionLabel: "Graduation",
      completionText:
        "A certificate of your achievements and readiness to lead, and TEGler for life.",
    },
    careerPaths: {
      vertrieb: {
        title: "Sales & Markets",
        desc: "You open markets the company could not enter before, and lead the teams that close the deals. When an entire quarter hangs on a single deal, you are at the table negotiating it.",
        steps: [
          "Sales Team Lead",
          "Head of Sales",
          "Vice President Sales",
          "Chief Commercial Officer",
        ],
      },
      engineering: {
        title: "Engineering & Software",
        desc: "Many people can write code – you decide what gets built and lead the team that builds it. From tech lead to CTO, you are responsible for the architecture, the pace and the products of the company.",
        steps: [
          "Engineering Lead",
          "Head of Engineering",
          "Vice President Engineering",
          "CTO",
        ],
      },
      strategie: {
        title: "Corporate Strategy",
        desc: "Every large corporation maintains its own strategy department – the unit that decides where the company moves next. You analyse markets and competitors, assess acquisitions and decide where the company competes and where it does not. As Chief Strategy Officer you put before the board the course on which the whole organisation aligns.",
        steps: [
          "Strategy Team Lead",
          "Director Strategy",
          "Chief Strategy Officer",
        ],
      },
      forschung: {
        title: "Research & Development",
        desc: "Whether you run a laboratory or are responsible for development across an entire business unit: you set the direction of research and carry its results to where they become products.",
        steps: ["Head of Laboratory", "Head of R&D", "Vice President R&D"],
      },
      recht: {
        title: "Legal & Compliance",
        desc: "Other lawyers write opinions. You are at the table when decisions are made – as General Counsel you are responsible for legal and compliance, negotiate the major contracts and have a say in where the company goes.",
        steps: [
          "Legal Team Lead",
          "Head of Legal & Compliance",
          "General Counsel",
          "Managing Director, Commercial & Legal",
        ],
      },
      gruendung: {
        title: "Your own company",
        desc: "After the YBLA you know the corporate world inside out – you know what keeps the C-level of DAX corporations awake at night, and you speak their language. You build a B2B company that solves precisely these problems, and negotiate your deals where they are decided: on the top floor.",
        steps: [
          "First corporate experience",
          "Founding a B2B company",
          "Managing Director",
        ],
      },
    },
    careerFields: [
      { name: "Strategy", short: "Corporate Strategy" },
      { name: "Legal & Compliance", short: "Legal & Compliance" },
      { name: "Research & Development", short: "Research & Development" },
      { name: "Sales & Markets", short: "Sales & Markets" },
      { name: "Engineering & Software", short: "Engineering & Software" },
      { name: "B2B Entrepreneurship", short: "B2B Entrepreneurship" },
    ],
    careerPathLabel: "Career path",
    careerPathsLabel: "Career paths",
    close: "Close",
  },
} satisfies Record<PageLang, unknown>;

const ForStudents: React.FC = () => {
  const lang = usePageLang();
  const localize = useLocalizePath();
  const t = copy[lang];

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans [overflow-x:clip] text-left">
      {/* SEKTION 1: HERO */}
      <section className="relative min-h-[100vh] w-full overflow-hidden bg-slate-900 flex flex-col text-left">
        {/* Nur in der englischen Fassung: Hinweis unter der Navbar. Das Foto
            liegt darunter, ab 1280 px aber so weit nach oben versetzt, dass
            die Gesichter fast wie in der deutschen Fassung sitzen und Becks
            Beschriftung gerade unter dem Hinweis bleibt (Navbar 72 px +
            Hinweis 74 px + 6 px Luft − Beschriftung bei 62/1080 der Breite). */}
        <LanguageNotice
          kind="academy"
          className="relative z-20 mt-[var(--site-nav-h)] [--notice-bg:#0F2B57]"
        />

        <div className="relative flex flex-1 flex-col justify-end">
          <div
            className={`absolute inset-x-0 bottom-0 top-0 ${
              lang === "en" ? "xl:top-[calc(max(0px,152px-5.74vw)-146px)]" : ""
            }`}
          >
            <img
              src="/for-students/commitment/ancient-group.avif"
              alt={t.hero.alt}
              className="absolute inset-0 h-full w-full object-cover object-top opacity-60"
            />
            <HeroAnnotations />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />

          <div className="relative z-10 container-custom pb-20">
            <h1 className="text-4xl sm:text-5xl md:text-[min(6.25rem,11vh)] font-black uppercase tracking-tighter leading-[0.92] sm:leading-[0.92] text-white -ml-1">
              {t.hero.title}
            </h1>
            <p className="text-white/80 mt-8 text-lg md:text-xl font-medium max-w-2xl">
              {t.hero.lede}
            </p>
          </div>
        </div>
      </section>

      {/* SEKTION: INTRO */}
      <section className="py-24">
        <div className="container-custom text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
            <div className="md:col-span-6 flex flex-col justify-start">
              <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter mb-6 leading-[1.1] text-[#0F2B57]">
                {t.intro.title}
              </h2>
              <p className="text-slate-500 text-base leading-relaxed">
                {t.intro.text}
              </p>
              <ul className="mt-8 md:mt-auto md:pt-8 space-y-4 text-base text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="h-7 flex items-center shrink-0">
                    <Calendar size={20} className="text-[#B7860B]" />
                  </span>
                  <span>
                    {t.intro.application}
                    <a
                      href="https://application.myteg-ev.de/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex items-center gap-1 text-[#B7860B] hover:text-[#0F2B57] text-xs font-bold uppercase tracking-[0.2em] transition-colors"
                    >
                      {t.intro.applicationLink} <ChevronRight size={14} />
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-7 flex items-center shrink-0">
                    <Mic size={20} className="text-[#B7860B]" />
                  </span>
                  <div>
                    {t.intro.series}
                    <a
                      href="https://luma.com/uecrvr40"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex items-center gap-1 text-[#B7860B] hover:text-[#0F2B57] text-xs font-bold uppercase tracking-[0.2em] transition-colors"
                    >
                      {t.intro.seriesLink} <ChevronRight size={14} />
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-7 flex items-center shrink-0">
                    <MessageCircle size={20} className="text-[#B7860B]" />
                  </span>
                  <span>
                    {t.intro.whatsapp}
                    <a
                      href="https://chat.whatsapp.com/J5hQYkeq14hCOkJsJ74w5x"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex items-center gap-1 text-[#B7860B] hover:text-[#0F2B57] text-xs font-bold uppercase tracking-[0.2em] transition-colors"
                    >
                      {t.intro.whatsappLink} <ChevronRight size={14} />
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-7 flex items-center shrink-0">
                    <Video size={20} className="text-[#B7860B]" />
                  </span>
                  <span>
                    {t.intro.officeHours}
                    <span className="mt-1 flex flex-col gap-1">
                      {officeHourLinks.map((href, i) => (
                        <a
                          key={href}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[#B7860B] hover:text-[#0F2B57] text-xs font-bold uppercase tracking-[0.2em] transition-colors"
                        >
                          {t.intro.officeHourSlots[i]}{" "}
                          <ChevronRight size={14} />
                        </a>
                      ))}
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-6 flex md:self-center">
              <a
                href={localize("/events")}
                className="w-full min-h-[280px] md:min-h-0 md:aspect-[8/7] relative overflow-hidden bg-[#0A1628] border border-white/10 hover:border-[#B7860B] transition-colors duration-500 group flex flex-col justify-end text-left"
              >
                <img
                  src="/events/converted/charging-ahead-2026-alt.webp"
                  alt=""
                  loading="lazy"
                  className="absolute inset-y-0 right-0 w-full md:w-3/4 h-full object-cover object-[center_60%] opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] from-30% via-[#0A1628]/75 via-55% to-[#0A1628]/10" />
                <div className="relative p-8 md:p-10">
                  <p className="text-white text-base md:text-lg leading-snug font-medium max-w-md">
                    {t.intro.eventsText}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[#B7860B] text-xs font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                    {t.intro.eventsLink}
                    <ChevronRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEKTION 2: FLAGGSCHIFF-PROGRAMM */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container-custom text-left">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 shrink-0 bg-[#B7860B]" />
              <span className="text-[#B7860B] font-bold uppercase tracking-widest text-sm">
                {t.ybla.label}
              </span>
              <div className="h-1 w-12 shrink-0 bg-[#B7860B] hidden md:block" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#0F2B57] uppercase tracking-tighter leading-tight">
              Young Business Leadership Academy
            </h2>
          </div>

          {/* The workshop photo carries the section: full column, framed as
              before, cropped to the scene (speaker, slide, participants). */}
          <div className="aspect-[4/3] md:aspect-[2/1] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white mb-12 md:mb-16">
            <img
              src="/shared/ybla-meeting.jpeg"
              alt="YBLA"
              className="w-full h-full object-cover object-[center_55%]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 text-left">
            <div className="md:col-span-6">
              <h3 className="text-2xl font-bold text-[#0F2B57] mb-6 uppercase tracking-tight">
                {t.ybla.question}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                {t.ybla.text}
              </p>
              <p className="mt-8 text-base leading-relaxed font-bold text-[#0F2B57]">
                {t.ybla.graduation}
              </p>
            </div>
            <div className="md:col-span-6 text-base text-slate-600 leading-relaxed">
              <ul className="space-y-4">
                {t.ybla.benefits.map((benefit) => (
                  <li key={benefit.title} className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-[#B7860B] mt-1 shrink-0"
                      size={20}
                    />
                    <span>
                      <strong>{benefit.title}</strong> {benefit.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEKTION: REFERENTEN */}
      <section className="py-16 bg-white text-left">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter mb-10 leading-[1.1] text-[#0F2B57]">
            {t.speakers.label}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8">
            {speakers.map((ref) => (
              <div
                key={ref.name}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={ref.photo}
                  alt={ref.name}
                  loading="lazy"
                  className="w-24 h-24 rounded-full object-cover object-top bg-[#0F2B57] border-2 border-[#B7860B] mb-3"
                />
                <p className="font-bold text-[#0F2B57] leading-tight">
                  {ref.name}
                </p>
                <p className="text-xs text-slate-500 leading-snug mt-1">
                  {ref.role[lang]}
                </p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 mt-8">{t.speakers.more}</p>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mt-10 pt-8 border-t border-slate-100">
            {t.speakers.note}
          </p>
        </div>
      </section>

      {/* SEKTION 3: PROGRAMM-AUFBAU */}
      <ProgramTimeline />

      {/* GOLDENER TRENNER */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#B7860B]/40 to-transparent bg-[#0A1628]" />

      {/* SEKTION 4: CAREERPATHS (REWORKED POSITIONING) */}
      <section className="py-32 bg-[#0A1628] text-white relative overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter">
          Vision
        </div>

        {/* GOLDENER GLOW HINTER DEM RADAR */}
        <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B7860B]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-custom relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center text-left">
            <div className="lg:col-span-5 space-y-12 text-left">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none text-[#B7860B] text-left text-left">
                {t.careers.title}
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-md text-left">
                {t.careers.text}
              </p>

              <div className="grid grid-cols-2 gap-x-6 gap-y-10 pt-6 border-t border-white/10 text-left">
                {t.careers.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1 text-left text-left"
                  >
                    <span className="text-4xl md:text-5xl font-black text-[#B7860B] leading-none text-left">
                      <Counter value={stat.val} />
                    </span>
                    <span className="text-[10px] md:text-[11px] uppercase font-bold tracking-wider text-slate-300 leading-tight text-left">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <CareerExplorer />
          </div>
        </div>
      </section>

      {/* SEKTION 5: ROADMAP */}
      <section className="py-24 bg-white relative overflow-hidden text-left">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <span className="text-[25vw] font-black uppercase tracking-tighter text-[#B7860B]/5 whitespace-nowrap text-left">
            YBLA
          </span>
        </div>
        <div className="container-custom relative z-10 text-left">
          <div className="mb-16 text-left">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0F2B57] mb-4 text-left">
              {t.roadmap.title}
            </h2>
            <div className="h-1.5 w-24 bg-[#B7860B] text-left" />
          </div>
          <div className="relative text-left">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2 hidden md:block text-left" />
            <div className="space-y-20 text-left">
              <div className="relative flex flex-col md:flex-row md:justify-center items-start md:items-center pl-12 md:pl-0 text-left">
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#B7860B] md:-translate-x-1/2 z-20 shadow-lg text-left" />
                <div className="md:w-1/2 md:pr-20 md:text-right mb-4 md:mb-0 text-left md:text-right">
                  <h4 className="text-xl font-bold text-[#0F2B57] uppercase tracking-tight text-left md:text-right">
                    {t.roadmap.earlyTitle}
                  </h4>
                  <p className="text-slate-500 mt-2 max-w-sm md:ml-auto text-left md:text-right text-left">
                    {t.roadmap.earlyText}
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-20 text-left text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0F2B57] rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 text-left">
                    <Mail size={14} className="text-[#B7860B]" />{" "}
                    {t.roadmap.earlyBadge}
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col md:flex-row md:justify-center items-start md:items-center pl-12 md:pl-0 text-left text-left">
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-[#0F2B57] md:-translate-x-1/2 z-20 shadow-lg text-left" />
                <div className="md:w-1/2 md:pr-20 md:text-right mb-4 md:mb-0 text-left md:text-right text-left text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest text-left">
                    <Calendar size={14} className="text-[#B7860B]" />{" "}
                    {t.roadmap.mainBadge}
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-20 text-left">
                  <h4 className="text-xl font-bold text-[#0F2B57] uppercase tracking-tight text-left">
                    {t.roadmap.mainTitle}
                  </h4>
                  <p className="text-slate-500 mt-2 max-w-sm text-left">
                    {t.roadmap.mainText}
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col md:flex-row md:justify-center items-start md:items-center pl-12 md:pl-0 text-left text-left">
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#0F2B57] md:-translate-x-1/2 z-20 shadow-lg text-left" />
                <div className="md:w-1/2 md:pr-20 md:text-right mb-4 md:mb-0 text-left md:text-right text-left text-left text-left">
                  <h4 className="text-xl font-bold text-[#0F2B57] uppercase tracking-tight text-left md:text-right">
                    {t.roadmap.interviewsTitle}
                  </h4>
                  <p className="text-slate-500 mt-2 max-w-sm md:ml-auto text-left md:text-right text-left">
                    {t.roadmap.interviewsText}
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-20 text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0F2B57] rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 text-left">
                    <Clock size={14} className="text-[#B7860B]" />{" "}
                    {t.roadmap.interviewsBadge}
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col md:flex-row md:justify-center items-start md:items-center pl-12 md:pl-0 text-left text-left">
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-[#B7860B] md:-translate-x-1/2 z-20 flex items-center justify-center shadow-lg text-left text-left">
                  <Info size={18} className="text-white text-left" />
                </div>
                <div className="md:w-1/2 md:pr-20 md:text-right mb-4 md:mb-0 text-left md:text-right text-left text-left text-left text-left">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#B7860B] text-white rounded-full text-xs font-black uppercase tracking-widest shadow-lg text-left">
                    {t.roadmap.kickoffBadge}
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-20 text-left text-left">
                  <h4 className="text-xl font-bold text-[#0F2B57] uppercase tracking-tight text-left">
                    {t.roadmap.kickoffTitle}
                  </h4>
                  <p className="text-slate-600 mt-2 max-w-sm font-medium text-left">
                    {t.roadmap.kickoffText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply-section" className="py-16 bg-white text-left">
        <div className="container-custom">
          <div className="bg-[#091C3A] p-10 md:p-14 text-center rounded-xl shadow-lg relative overflow-hidden">
            <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter mb-8 text-white text-center">
              {t.cta.title}
            </h2>
            <motion.a
              href="https://application.myteg-ev.de/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#B7860B] text-white px-10 py-4 font-bold uppercase text-[10px] tracking-[0.2em] rounded-sm shadow-lg transition-all text-left"
            >
              {t.cta.button} <MousePointer2 size={16} />
            </motion.a>
          </div>
        </div>
      </section>

      {/* LOGO KARUSSELL */}
      <section className="py-16 bg-white overflow-hidden text-center mx-auto border-b border-slate-100 text-left text-left text-left">
        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-12 text-center text-center">
          {t.logosTitle}
        </h2>
        <div className="flex whitespace-nowrap mb-8 justify-center text-left text-left">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-20 pr-20 text-left text-left text-left"
          >
            {[...scrollingLogos, ...scrollingLogos].map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.name}
                className="h-10 w-auto object-contain opacity-60 text-left text-left text-left"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <StudentFaq />

      {/* KONTAKT */}
      <section className="pb-24 pt-16 bg-white text-left">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row overflow-hidden rounded-xl shadow-2xl min-h-[400px] text-left">
            <div className="md:w-1/2 w-full h-72 md:h-auto bg-slate-50 flex items-start text-left text-left text-left text-left text-left">
              <img
                src="/for-students/team/yassin-portrait.jpeg"
                alt="Yassin"
                className="w-full h-full object-cover text-left"
              />
            </div>
            <div className="md:w-1/2 w-full bg-[#0F2B57] p-10 md:p-14 flex flex-col justify-center text-white text-left text-left">
              <div className="flex gap-4 mb-8 text-left text-left text-left">
                <div className="w-[2px] bg-[#B7860B] text-left text-left" />
                <p className="italic text-xl text-slate-200 leading-tight text-left text-left">
                  {t.contact.quote}
                </p>
              </div>
              <div className="mb-10 text-left text-left">
                <h3 className="text-xl font-bold mb-1 text-left text-white">
                  Yassin Aboushelib
                </h3>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] text-left text-left text-left">
                  {" "}
                  {t.contact.role}
                </p>
              </div>
              <div className="flex gap-10 text-left">
                <a
                  href="https://www.linkedin.com/in/yassin-aboushelib/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#B7860B] hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors text-left text-left"
                >
                  <Linkedin size={24} /> LinkedIn
                </a>
                <a
                  href="mailto:yassin.aboushelib@teg-ev.de"
                  className="flex items-center gap-2 text-[#B7860B] hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors text-left text-left text-left text-left text-left"
                >
                  <Mail size={24} /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const programImages = [
  "/shared/teg-compliment-fallback.jpeg",
  "/events/converted/frontier-tech-conference-2025.webp",
  "/events/converted/fireside-chat-2025.webp",
];

// Programm-Aufbau als Timeline mit Semester-Karten
/*
 * Captions on the hero photo, like the fine labels of a diagram: a quiet
 * aside for those who look closely, never louder than the headline. Muted
 * white type in one size, each caption a single comma-separated line of
 * text, no card, one thin line per person with a single bend, all running
 * right.
 * The SVG uses the photo's own pixel grid (1080 × 800) and the same crop as
 * the <img> (object-cover + object-top = xMidYMin slice), so the lines stay
 * on each person at every desktop size. No line crosses a face. Shown only
 * where the whole group is in frame.
 */
const heroAnnotations = [
  // Top to bottom, as the heads stand: Beck, Buddenberg, Maiborn. Each
  // caption is a wide, two-line block placed where no face is behind it.
  // Lines start just beside a face, never on it.
  // From beside Beck's head up to the wall next to it, above the faces.
  {
    key: "beck",
    line: [
      [488, 94],
      [500, 70],
      [512, 70],
    ],
    box: [516, 62, 292],
  },
  // From beside Buddenberg's chin right, below his neighbour's chin, then up
  // into the free band between that face and Maiborn's head.
  {
    key: "buddenberg",
    line: [
      [524, 238],
      [630, 238],
      [642, 162],
    ],
    box: [646, 152, 300],
  },
  // From beside Maiborn's head to the dark suit and door next to him.
  {
    key: "maiborn",
    line: [
      [762, 254],
      [776, 236],
      [786, 236],
    ],
    box: [790, 228, 280],
  },
] as const;

const HeroAnnotations = () => {
  const t = copy[usePageLang()];
  return (
    <svg
      viewBox="0 0 1080 800"
      preserveAspectRatio="xMidYMin slice"
      className="pointer-events-none absolute inset-0 z-[5] hidden h-full w-full hero-annotations"
    >
      {heroAnnotations.map(({ key, line, box: [x, y, width] }) => {
        const label = t.hero.annotations[key];
        return (
          <g key={key}>
            <polyline
              points={line.map((point) => point.join(",")).join(" ")}
              fill="none"
              stroke="#ffffff"
              strokeOpacity={0.45}
              strokeWidth={0.75}
              vectorEffect="non-scaling-stroke"
            />
            <foreignObject
              x={x}
              y={y}
              width={width}
              height={120}
              className="overflow-visible"
            >
              <p className="text-[7px] font-light leading-[1.45] tracking-[0.01em] text-white/80 [text-shadow:0_1px_2px_rgba(0,0,0,0.85),0_0_8px_rgba(0,0,0,0.6)]">
                {label}
              </p>
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
};

const ProgramTimeline = () => {
  const t = copy[usePageLang()].program;
  const programSteps = t.steps;
  const timelineRef = useRef<HTMLDivElement>(null);
  // Linie läuft exakt vom Mittelpunkt des ersten bis zum letzten Punkt
  const [track, setTrack] = useState({ top: 0, height: 0 });
  // Punkte füllen sich, sobald die Linie (Viewport-Mitte) sie erreicht
  const [reached, setReached] = useState<boolean[]>([]);

  useEffect(() => {
    const container = timelineRef.current;
    if (!container) return;
    const measure = () => {
      const dots = container.querySelectorAll<HTMLElement>(
        "[data-timeline-dot]",
      );
      if (dots.length < 2) return;
      const box = container.getBoundingClientRect();
      const center = (el: HTMLElement) => {
        const r = el.getBoundingClientRect();
        return r.top + r.height / 2 - box.top;
      };
      const top = center(dots[0]);
      setTrack({ top, height: center(dots[dots.length - 1]) - top });
    };
    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(container);

    const dots = Array.from(
      container.querySelectorAll<HTMLElement>("[data-timeline-dot]"),
    );
    const dotObserver = new IntersectionObserver(
      (entries) => {
        setReached((prev) => {
          const next = dots.map((_, i) => prev[i] ?? false);
          for (const entry of entries) {
            const i = dots.indexOf(entry.target as HTMLElement);
            next[i] = entry.isIntersecting;
          }
          return next;
        });
      },
      // Root reicht weit über den Viewport nach oben bis zur Mitte, damit
      // auch schnelles Scrollen (Sprung über die Mitte hinaus) erkannt wird
      { rootMargin: "100000px 0px -50% 0px" },
    );
    dots.forEach((dot) => dotObserver.observe(dot));

    return () => {
      resizeObserver.disconnect();
      dotObserver.disconnect();
    };
  }, []);

  const dotClass = (i: number) =>
    `absolute z-10 -left-8 md:-left-12 w-4 h-4 md:w-6 md:h-6 rounded-full border-2 border-[#B7860B] transition-colors duration-300 ${
      i === 0 || reached[i] ? "bg-[#B7860B]" : "bg-[#0A1628]"
    }`;

  return (
    <section className="py-24 md:py-32 bg-[#0A1628] text-white border-b border-white/5">
      <div className="container-custom">
        <div>
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
              {t.title}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-16">
            {t.facts.map((fact) => (
              <div key={fact.label} className="bg-[#0A1628] p-5 md:p-6">
                <p className="text-3xl md:text-4xl font-black text-[#B7860B] leading-none">
                  {fact.val}
                </p>
                <p className="text-[10px] md:text-[11px] uppercase font-bold tracking-wider text-slate-300 mt-2 leading-tight">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>

          <div ref={timelineRef} className="relative pl-8 md:pl-12">
            {/* Timeline-Linie: Die goldene Füllung klebt per position: sticky mit
              ihrer Unterkante an der Viewport-Mitte. Der Browser scrollt sie
              selbst mit, ohne JavaScript pro Frame, daher flackert nichts.
              Oberhalb wird sie an der Linie abgeschnitten (overflow: clip,
              nicht hidden, sonst greift sticky nicht). */}
            <div
              style={{ top: track.top, height: track.height }}
              className="absolute left-[7px] md:left-[11px] w-0.5 bg-white/10 [overflow:clip]"
            >
              <div
                style={{ top: -track.height, height: track.height * 2 }}
                className="absolute inset-x-0"
              >
                <div style={{ height: track.height }} />
                <div
                  style={{ height: track.height }}
                  className="sticky bottom-[50vh] bg-[#B7860B]"
                />
              </div>
            </div>

            <div className="space-y-6">
              {programSteps.map((step, i) => (
                <div key={step.label} className="relative">
                  <div data-timeline-dot className={`${dotClass(i)} top-8`} />
                  <div className="bg-white/[0.03] border border-white/10 overflow-hidden">
                    <div className="aspect-[21/9] w-full overflow-hidden">
                      <img
                        src={programImages[i]}
                        alt={step.title}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-90"
                      />
                    </div>
                    <div className="p-5 md:p-8">
                      <span className="text-[#B7860B] font-black uppercase tracking-widest text-[10px] block mb-1">
                        {step.label}
                      </span>
                      <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-none text-white">
                        {step.title}
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base mt-2">
                        {step.subtitle}
                      </p>
                    </div>
                    <ul className="px-5 md:px-8 pb-6 md:pb-8 space-y-4 border-t border-white/10 pt-6">
                      {step.modules.map((m) => (
                        <li key={m.name} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="text-[#B7860B] shrink-0 mt-1"
                          />
                          <div>
                            <p className="font-bold text-base md:text-lg leading-snug">
                              {m.name}
                            </p>
                            {"desc" in m && (
                              <p className="text-slate-400 text-sm md:text-base leading-snug">
                                {m.desc}
                              </p>
                            )}
                            {"points" in m && (
                              <ul className="mt-1 space-y-1 list-disc list-inside marker:text-white marker:text-xs">
                                {m.points.map((p) => (
                                  <li
                                    key={p}
                                    className="text-slate-400 text-sm md:text-base leading-snug"
                                  >
                                    {p}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              {/* Abschluss */}
              <div className="relative">
                <div
                  data-timeline-dot
                  className={`${dotClass(programSteps.length)} top-6 flex items-center justify-center`}
                >
                  {/* Haken zeichnet sich, sobald der Abschluss-Punkt gefüllt ist */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3 h-3 md:w-4 md:h-4"
                    aria-hidden="true"
                  >
                    <motion.path
                      d="M4.5 12.5l4.5 4.5L19.5 7"
                      fill="none"
                      stroke="#0A1628"
                      strokeWidth={3.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={false}
                      animate={
                        reached[programSteps.length]
                          ? { pathLength: 1, opacity: 1 }
                          : { pathLength: 0, opacity: 0 }
                      }
                      transition={{
                        pathLength: {
                          duration: 0.45,
                          ease: "easeOut",
                          delay: 0.2,
                        },
                        opacity: { duration: 0.1, delay: 0.2 },
                      }}
                    />
                  </svg>
                </div>
                <div className="border border-[#B7860B]/40 bg-[#B7860B]/10 p-5 md:p-8">
                  <span className="text-[#B7860B] font-black uppercase tracking-widest text-[10px] block mb-1">
                    {t.completionLabel}
                  </span>
                  <p className="text-lg md:text-xl font-bold leading-snug">
                    {t.completionText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Karrierewege nach der YBLA (Quelle: TEG-Karrierewege.pdf); Texte in `copy`
type CareerKey = keyof (typeof copy)["de"]["careerPaths"];

type CareerPath = {
  title: string;
  desc: string;
  steps: string[];
};

const careerIcons: Record<CareerKey, React.ElementType> = {
  vertrieb: TrendingUp,
  engineering: Code2,
  strategie: Target,
  forschung: FlaskConical,
  recht: Scale,
  gruendung: Rocket,
};

// Felder im Radar (Reihenfolge wie `copy.careerFields`) und welche
// Karrierewege sie zeigen
const careerFieldLayout: {
  side: "left" | "right";
  paths: CareerKey[];
}[] = [
  { side: "left", paths: ["strategie"] },
  { side: "right", paths: ["recht"] },
  { side: "left", paths: ["forschung"] },
  { side: "right", paths: ["vertrieb"] },
  { side: "left", paths: ["engineering"] },
  { side: "right", paths: ["gruendung"] },
];

type CareerField = (typeof careerFieldLayout)[number] & {
  name: string;
  short: string;
};

const useCareerFields = (): CareerField[] => {
  const t = copy[usePageLang()];
  return careerFieldLayout.map((layout, i) => ({
    ...layout,
    ...t.careerFields[i],
  }));
};

const CareerPathDetail = ({
  path,
  icon: Icon,
}: {
  path: CareerPath;
  icon: React.ElementType;
}) => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 shrink-0 rounded-md border border-[#B7860B]/40 bg-[#B7860B]/10 flex items-center justify-center">
          <Icon size={20} className="text-[#B7860B]" />
        </div>
        <h4 className="text-lg font-bold text-white leading-tight">
          {path.title}
        </h4>
      </div>
      <p className="text-slate-300 text-sm leading-relaxed">{path.desc}</p>
      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 mt-4 text-xs">
        {path.steps.map((step, i) => {
          const last = i === path.steps.length - 1;
          return (
            <React.Fragment key={step}>
              <span
                className={last ? "text-[#B7860B] font-bold" : "text-slate-400"}
              >
                {step}
              </span>
              {!last && <ChevronRight size={12} className="text-slate-600" />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

const CareerFieldCard = ({ field }: { field: CareerField }) => {
  const t = copy[usePageLang()];
  return (
    <div className="bg-[#051222]/95 border border-[#B7860B]/40 rounded-md shadow-2xl p-6 md:p-7 relative">
      <span className="text-[#B7860B] font-black uppercase tracking-[0.3em] text-[10px] block mb-5">
        {field.paths.length > 1 ? t.careerPathsLabel : t.careerPathLabel}
      </span>
      <div className="space-y-6 divide-y divide-white/10 [&>*+*]:pt-6">
        {field.paths.map((key) => (
          <CareerPathDetail
            key={key}
            path={t.careerPaths[key]}
            icon={careerIcons[key]}
          />
        ))}
      </div>
    </div>
  );
};

// Radar mit klickbaren Feldern; die Karte zum Feld erscheint in der Mitte
const CareerExplorer = () => {
  const t = copy[usePageLang()];
  const careerFields = useCareerFields();
  const [selected, setSelected] = useState<number | null>(null);
  const field = selected === null ? null : careerFields[selected];

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    // Klick außerhalb von Karte und Feldern schließt die Karte
    const onPointer = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-career-card], [data-career-field]")) {
        setSelected(null);
      }
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [selected]);

  const toggle = (i: number) => setSelected((cur) => (cur === i ? null : i));
  const rows = [
    { indices: [0, 1], className: "flex justify-around px-20" },
    { indices: [2, 3], className: "flex justify-between px-0" },
    { indices: [4, 5], className: "flex justify-around px-20" },
  ];

  return (
    <>
      {/* RADAR BOXEN (VERSETZTE ANORDNUNG) */}
      <div className="lg:col-span-7 relative h-[650px] hidden md:flex items-center justify-center text-left">
        {/* ZENTRUM */}
        <div className="relative z-20 w-24 h-24 rounded-full bg-[#B7860B] flex items-center justify-center shadow-[0_0_50px_rgba(183,134,11,0.5)] border-2 border-white/20">
          <Target className="text-[#0A1628]" size={40} />
        </div>

        {/* HINTERGRUND RINGE */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-[300px] h-[300px] border border-[#B7860B] rounded-full" />
          <div className="absolute w-[550px] h-[550px] border border-[#B7860B] rounded-full" />
        </div>

        {/* KARTEN POSITIONIERUNG (STAGGERED FÜR RADAR LOOK) */}
        <div className="absolute inset-0 flex flex-col justify-between py-12 text-left">
          {rows.map((row) => (
            <div key={row.indices.join()} className={row.className}>
              {row.indices.map((i) => (
                <CareerCard
                  key={careerFields[i].name}
                  name={careerFields[i].name}
                  side={careerFields[i].side}
                  active={selected === i}
                  onClick={() => toggle(i)}
                />
              ))}
            </div>
          ))}
        </div>

        {/* KARTE IN DER MITTE */}
        <AnimatePresence>
          {field && (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
            >
              <div
                data-career-card
                className="w-[440px] max-w-full max-h-[600px] overflow-y-auto pointer-events-auto"
              >
                <div className="relative">
                  <CareerFieldCard field={field} />
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    aria-label={t.close}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* MOBIL: FELDER ALS BUTTONS, KARTE DARUNTER */}
      <div className="md:hidden text-left">
        <div className="flex flex-wrap gap-2">
          {careerFields.map((f, i) => (
            <button
              key={f.name}
              type="button"
              data-career-field
              onClick={() => toggle(i)}
              aria-pressed={selected === i}
              className={`border px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-white transition-colors ${
                selected === i
                  ? "bg-[#B7860B]/20 border-[#B7860B]"
                  : "bg-white/5 border-white/10"
              }`}
            >
              {f.short}
            </button>
          ))}
        </div>
        {field && (
          <div className="mt-4" data-career-card>
            <CareerFieldCard field={field} />
          </div>
        )}
      </div>
    </>
  );
};

// Hilfskomponente für die versetzten Karten (fixiert den fehlenden Punkt und das Layout)
const CareerCard = ({
  name,
  side,
  active,
  onClick,
}: {
  name: string;
  side: "left" | "right";
  active: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    data-career-field
    onClick={onClick}
    aria-pressed={active}
    className={`bg-[#051222]/80 border backdrop-blur-md px-5 py-4 rounded-sm hover:border-[#B7860B] transition-all w-[260px] shadow-2xl relative pointer-events-auto cursor-pointer ${active ? "border-[#B7860B]" : "border-white/10"}`}
  >
    <div
      className={`flex items-center gap-3 ${side === "right" ? "flex-row-reverse text-right" : "flex-row text-left"}`}
    >
      <div className="w-2 h-2 bg-[#B7860B] rounded-full shadow-[0_0_8px_#B7860B]" />
      <h4 className="text-[10px] font-black uppercase tracking-[0.15em] text-white leading-tight">
        {name}
      </h4>
    </div>
  </button>
);

export default ForStudents;
