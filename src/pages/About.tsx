/**
 * About page (route "/"), the landing page. Shares editorial.css with the
 * events pages and adds its own art direction in about.css: split cover,
 * chapters in a black/white/stone rhythm, facts and names instead of
 * claims, no scroll animations.
 *
 * Rendered in German at / and in English at /en. Both are prerendered, so
 * every word below ships as static HTML.
 */
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./editorial.css";
import "./landing.css";
import { PageLang, useLocalizePath, usePageLang } from "../i18n/pageLang";
import { OrganisationSchema } from "../seo/EventSchema";
import { localize as localizeText, upcomingConferences } from "./eventsData";

// Companies and institutions that sent speakers, hosts or partners to TEG
// events (site data and the TEG Luma calendar, 2025 to 2026).
const partnerNames = [
  // Industrie und Technologie
  "BMW Group",
  "MINI",
  "Siemens",
  "Airbus",
  "Infineon",
  "Intel",
  "Microsoft",
  "IBM",
  "Google",
  "NVIDIA",
  "Munich Re",
  "HENSOLDT",
  "Körber",
  "Siltronic",
  "Paulaner",
  "Interhyp",
  "GFT Technologies",
  "IQM Quantum Computers",
  "XPENG",
  // Beratung und Recht
  "McKinsey & Company",
  "Boston Consulting Group",
  "Roland Berger",
  "Oliver Wyman",
  "Accenture",
  "PwC",
  "Capgemini Invent",
  "Horváth",
  "MHP",
  "Berylls",
  "Netlight",
  "MaibornWolff",
  "Heidrick & Struggles",
  "Hogan Lovells",
  // Wissenschaft und Ökosystem
  "TU München",
  "LMU München",
  "Universität der Bundeswehr München",
  "ifo Institut",
  "appliedAI",
  "UnternehmerTUM",
  "Wayra",
  "BioM",
];

// Executives first, then functional management, interim, SME, founders.
const alumni = [
  { name: "Ulrich Beck", img: "ulrich_beck.jpg", level: "top" },
  { name: "Claus Wattendrup", img: "claus_wattendrup.jpg", level: "top" },
  { name: "Daniel Just", img: "daniel_just.jpg", level: "top" },
  { name: "Dr. Michael Wagner", img: "drmpwagner.jpg", level: "top" },
  { name: "David Riessner", img: "david_riessner.jpg", level: "top" },
  { name: "Arne Rieger", img: "arne_rieger.jpg", level: "middle" },
  { name: "Kate Grusemann", img: "kate_grusemann.webp", level: "middle" },
  { name: "Bernd Amberger", img: "bernd_amberger.jpg", level: "middle" },
  { name: "Veronika Vasileva", img: "veronika_vasileva.webp", level: "middle" },
  { name: "Michael Kraupa", img: "michael_kraupa.jpg", level: "interim" },
  { name: "Maximilian Mann", img: "maximilian_mann.jpg", level: "sme" },
  { name: "Volker Maiborn", img: "volker_maiborn.jpg", level: "founder" },
] as const;

type Level = (typeof alumni)[number]["level"];

const copy = {
  de: {
    banner: { label: "Nächste Konferenz", cta: "Programm ansehen" },
    hero: {
      when: ["Über die TEG", "München, seit 1986"],
      title: "Verantwortung für die deutsche Wirtschaft seit 1986.",
      lede: "Seit 1986 verfolgt die TEG zwei Ziele: Führungskräfte aus Konzernen und Mittelstand branchenübergreifend miteinander ins Gespräch zu bringen und die nächste Generation auf die Führung deutscher Unternehmen vorzubereiten.",
      links: [
        { to: "/events", label: "Konferenzen & Events" },
        { to: "/for-companies", label: "Für Führungskräfte" },
        { to: "/for-students", label: "Für Studierende" },
      ],
      photoAlt: "Mitglieder der TEG",
    },
    facts: [
      ["1986", "gegründet von Vorständen elf deutscher Unternehmen"],
      ["über 300", "Absolventen der Young Business Leadership Academy"],
      ["41", "Absolventen heute im Top-Management von Konzernen"],
      ["2 bis 4", "Konferenzen im Jahr, dazu Abendveranstaltungen"],
    ],
    partnersLabel: "Partner und Speaker",
    mission: {
      pillars: [
        {
          title: "Austausch unter Führungskräften",
          text: "Mehrmals im Jahr laden wir Führungskräfte aus Konzernen und Mittelstand nach München ein, zu Konferenzen, Panels und dem TEG Management Talk. Einige sprechen, die meisten kommen zum Zuhören und für die Gespräche danach.",
          link: "Zu den Formaten",
          href: "#formate",
        },
        {
          title: "Ausbildung der nächsten Generation",
          text: "In der Young Business Leadership Academy bereiten wir Studierende und Berufseinsteiger über 18 Monate auf Führungsverantwortung vor: mit Workshops bei erfahrenen Führungskräften, in festen Teams und mit einem eigenen Projekt.",
          link: "Zur Academy",
          href: "#ybla",
        },
      ],
      bridge:
        "Beides greift ineinander: Vorbereitet und geleitet werden unsere Veranstaltungen von den Teilnehmern der Academy als Lern-Projekt. Speaker, Partner und Gäste gewinnen sie selbst.",
    },
    heritage: {
      title: "Gegründet von Vorständen elf deutscher Top-Unternehmen.",
      intro:
        "Die TEG entstand 1986 in München aus einer Initiative rund um Dr. Hellmuth Buddenberg, damals Vorstandsvorsitzender der Deutschen BP. Ziel war, früh eine neue Generation unternehmerisch denkender Führungskräfte auszubilden. Bis 1988 entstand ein Kuratorium aus Vorständen von elf Unternehmen. Heute ist die TEG ein gemeinnütziger Verein der Erwachsenenbildung.",
      foundersLabel: "Aus dem Gründungskuratorium",
      founders: [
        {
          name: "Dr. Hellmuth Buddenberg",
          role: "Vorstandsvorsitzender, Deutsche BP",
        },
        { name: "Franz Köhne", role: "Personalvorstand, BMW" },
        { name: "Hans H. Schlitzberger", role: "Siemens" },
        { name: "Roland Berger", role: "Gründer, Roland Berger + Partner" },
      ],
      companiesLabel: "Im Kuratorium vertreten",
      today: "heute",
      articleAlt:
        "Historischer Zeitungsartikel zur Gründung des TEG-Kuratoriums",
      articleCaption: "Donaukurier, zur Gründung des Kuratoriums",
    },
    formats: {
      title: "Unsere Formate",
      intro:
        "Jedes Format bringt Führungskräfte zusammen, die etwas verbindet: eine Branche, eine Funktion oder eine übergreifende Frage. Massenevents veranstalten wir nicht, die Gästeliste stellen wir selbst zusammen.",
      link: "Kommende Termine",
      items: [
        {
          name: "Industrie-Panel",
          img: "/about/formats/industry-panel.webp",
          alt: "Branchen-Panel mit fünf Führungskräften im Gespräch auf der Bühne",
          lede: "Eine kleine Runde mit inhaltlich branchenbezogener Tiefe. Verantwortungsträger mit gemeinsamen Interessen und Kompetenzen lernen sich kennen.",
          traits: [
            ["Gäste", "bis 50, ohne Mikrofon"],
            ["Fokus", "eine Industrie, etwa Automotive, Aerospace oder Health"],
            ["Speaker", "Führungskräfte, C-Level, Gründer und Professoren"],
          ],
        },
        {
          name: "Summit",
          img: "/about/formats/summit.webp",
          alt: "Vortragender präsentiert vor der Folie Multi Stakeholder Management",
          lede: "Eine Handvoll Präsentationen von Entscheidern der gleichen beruflichen Funktion. Wer kommt, sitzt unter Gleichgestellten.",
          traits: [
            ["Gäste", "bis 80, ohne Mikrofon"],
            ["Fokus", "eine Funktion, etwa Sales oder Marketing"],
            [
              "Speaker",
              "Senior Experts, Consultants, Verbandsvorsitzende, Gründer, Team- und Abteilungsleitungen",
            ],
          ],
        },
        {
          name: "Konferenz",
          img: "/about/formats/konferenz.webp",
          alt: "Konferenzsaal mit Publikum und Sprecher vor der Leinwand",
          lede: "Präsentationen und Panels über einen ganzen Tag. Ein Deep Dive über die Grenzen der Industrien hinweg.",
          traits: [
            ["Gäste", "bis 150, mit Mikrofon"],
            [
              "Fokus",
              "mehrere Industrien, etwa Software und Management Consulting oder Robotics, Quantum und Aerospace",
            ],
          ],
        },
      ],
    },
    ybla: {
      title: "Young Business Leadership Academy",
      intro:
        "Unser Programm für Studierende und Berufseinsteiger, die Führungsverantwortung übernehmen wollen. Über 18 Monate, parallel zu Studium oder Beruf, besuchen die Teilnehmer Workshops mit erfahrenen Führungskräften, arbeiten in festen Teams und leiten am Ende ein eigenes Projekt, zum Beispiel eine unserer Veranstaltungen.",
      link: "Für Studierende",
      terms: [
        ["Dauer", "18 Monate", "parallel zu Studium oder Beruf"],
        [
          "Aufwand",
          "10 bis 18 Stunden pro Woche",
          "außerhalb der Prüfungsphasen",
        ],
        [
          "Inhalt",
          "Workshops, Teamarbeit, eigenes Projekt",
          "Workshops mit erfahrenen Führungskräften",
        ],
        [
          "Kohorten",
          "Start alle sechs Monate",
          "8 bis 15 Teilnehmer aus über hundert Bewerbungen",
        ],
      ],
    },
    alumni: {
      title: "Ein kleiner Ausschnitt unserer Absolventen",
      intro:
        "Das Programm gibt es seit 1986. Von gut 300 Absolventen sind heute 41 im Top-Management großer Konzerne und 40 in der Geschäftsführung mittelständischer Unternehmen.",
      stats: [
        ["über 300", "Absolventen"],
        ["30 %", "der Absolventen im Top-Management"],
        ["41", "Top-Level-Führungskräfte in Konzernen"],
        ["40", "Top-Level-Führungskräfte im Mittelstand"],
        ["15", "Unternehmensgründer"],
      ],
      levels: {
        top: "Top-Management",
        middle: "Mittleres Management",
        interim: "Interim Management",
        sme: "Geschäftsführung Mittelstand",
        founder: "Gründer",
      } satisfies Record<Level, string>,
    },
    selection: {
      title: "Wer bei TEG mitmacht, wird ausgewählt.",
      text: "Alle sechs Monate wählen wir aus über hundert Bewerbungen 8 bis 15 Teilnehmer für die Academy aus. Jeder Bewerber durchläuft dasselbe Verfahren, unabhängig von Herkunft oder Netzwerk. Bewertet werden analytisches Denken, Leistungsbereitschaft und Führungscharakter: die Fähigkeit, Initiative zu ergreifen, zu führen und geführt zu werden.",
      photoAlt: "Teilnehmer der TEG bei einer Veranstaltung",
      link: "Zur Bewerbung",
    },
    video: {
      label: "Im Video:",
      name: "Thomas Uchtmann",
      role: "Geschäftsführer Vertrieb bei HORBACH",
    },
    join: {
      title: "Wie Sie Teil der TEG werden",
      paths: [
        {
          who: "Für Führungskräfte",
          text: "Halten Sie einen Workshop in der Academy, sprechen Sie auf einer unserer Veranstaltungen, begleiten Sie einen Teilnehmer als Mentor oder seien Sie Gastgeber eines Abends.",
          link: "Mitwirken als Führungskraft",
          to: "/for-companies",
        },
        {
          who: "Für Studierende und Berufseinsteiger",
          text: "Bewerbungen für die Young Business Leadership Academy sind zweimal im Jahr möglich, im April und im Oktober.",
          link: "Zur Bewerbung",
          to: "/for-students",
        },
      ],
    },
  },
  en: {
    banner: { label: "Next conference", cta: "View programme" },
    hero: {
      when: ["About TEG", "Munich, since 1986"],
      title: "Responsibility for German business since 1986.",
      lede: "Since 1986, TEG has pursued two aims: to bring executives from large corporations and mid-sized companies into conversation across industries, and to prepare the next generation for the leadership of German companies.",
      links: [
        { to: "/events", label: "Conferences & Events" },
        { to: "/for-companies", label: "For Executives" },
        { to: "/for-students", label: "For Students" },
      ],
      photoAlt: "Members of TEG",
    },
    facts: [
      ["1986", "founded by board members of eleven German companies"],
      ["over 300", "graduates of the Young Business Leadership Academy"],
      ["41", "graduates now in the top management of corporations"],
      ["2 to 4", "conferences a year, alongside evening events"],
    ],
    partnersLabel: "Partners and speakers",
    mission: {
      pillars: [
        {
          title: "Exchange among executives",
          text: "Several times a year we invite executives from large corporations and mid-sized companies to Munich, to conferences, panels and the TEG Management Talk. A few speak; most come to listen, and for the conversations afterwards.",
          link: "Our formats",
          href: "#formate",
        },
        {
          title: "Educating the next generation",
          text: "In the Young Business Leadership Academy, we prepare students and young professionals for leadership responsibility over 18 months: through workshops with experienced executives, in permanent teams and with a project of their own.",
          link: "The Academy",
          href: "#ybla",
        },
      ],
      bridge:
        "The two are intertwined: our events are prepared and led by participants of the Academy as a learning project. They secure the speakers, partners and guests themselves.",
    },
    heritage: {
      title: "Founded by board members of eleven leading German companies.",
      intro:
        "TEG was founded in Munich in 1986 on an initiative led by Dr. Hellmuth Buddenberg, then Chairman of the Board of Deutsche BP. The aim was to form, early on, a new generation of executives who think as entrepreneurs. By 1988, board members of eleven companies had come together as the Kuratorium. Today TEG is a non-profit association dedicated to adult education.",
      foundersLabel: "From the founding Kuratorium",
      founders: [
        {
          name: "Dr. Hellmuth Buddenberg",
          role: "Chairman of the Board, Deutsche BP",
        },
        { name: "Franz Köhne", role: "Board Member for Human Resources, BMW" },
        { name: "Hans H. Schlitzberger", role: "Siemens" },
        { name: "Roland Berger", role: "Founder, Roland Berger + Partner" },
      ],
      companiesLabel: "Represented on the Kuratorium",
      today: "now",
      articleAlt:
        "Historic newspaper article on the founding of the TEG Kuratorium",
      articleCaption: "Donaukurier, on the founding of the Kuratorium",
    },
    formats: {
      title: "Our formats",
      intro:
        "Each format brings together executives who share something: an industry, a function or an overarching question. We do not hold mass events; we compile the guest list ourselves.",
      link: "Upcoming dates",
      items: [
        {
          name: "Industry Panel",
          img: "/about/formats/industry-panel.webp",
          alt: "Industry panel with five executives in conversation on stage",
          lede: "A small circle with real depth in a single industry. People in positions of responsibility who share interests and expertise come to know one another.",
          traits: [
            ["Guests", "up to 50, without microphones"],
            ["Focus", "one industry, such as automotive, aerospace or health"],
            ["Speakers", "executives, C-level, founders and professors"],
          ],
        },
        {
          name: "Summit",
          img: "/about/formats/summit.webp",
          alt: "Speaker presenting in front of a slide on multi-stakeholder management",
          lede: "A handful of presentations by decision-makers from the same professional function. Those who attend sit among peers.",
          traits: [
            ["Guests", "up to 80, without microphones"],
            ["Focus", "one function, such as sales or marketing"],
            [
              "Speakers",
              "senior experts, consultants, chairs of industry associations, founders, team and department heads",
            ],
          ],
        },
        {
          name: "Conference",
          img: "/about/formats/konferenz.webp",
          alt: "Conference hall with an audience and a speaker before the screen",
          lede: "Presentations and panels over a full day. A deep dive across the boundaries between industries.",
          traits: [
            ["Guests", "up to 150, with microphones"],
            [
              "Focus",
              "several industries, such as software and management consulting, or robotics, quantum and aerospace",
            ],
          ],
        },
      ],
    },
    ybla: {
      title: "Young Business Leadership Academy",
      intro:
        "Our programme for students and young professionals who intend to take on leadership responsibility. Over 18 months, alongside their studies or work, participants attend workshops with experienced executives, work in permanent teams and finally lead a project of their own, for instance one of our events.",
      link: "For students",
      terms: [
        ["Duration", "18 months", "alongside studies or work"],
        ["Commitment", "10 to 18 hours a week", "outside examination periods"],
        [
          "Content",
          "Workshops, teamwork, a project of one’s own",
          "Workshops with experienced executives",
        ],
        [
          "Cohorts",
          "A new intake every six months",
          "8 to 15 participants from over a hundred applications",
        ],
      ],
    },
    alumni: {
      title: "A small selection of our graduates",
      intro:
        "The programme has existed since 1986. Of some 300 graduates, 41 now hold top-management positions in large corporations and 40 serve as managing directors of mid-sized companies.",
      stats: [
        ["over 300", "graduates"],
        ["30%", "of graduates in top management"],
        ["41", "top-level executives in corporations"],
        ["40", "top-level executives in mid-sized companies"],
        ["15", "company founders"],
      ],
      levels: {
        top: "Top management",
        middle: "Middle management",
        interim: "Interim management",
        sme: "Managing Director, mid-sized company",
        founder: "Founder",
      } satisfies Record<Level, string>,
    },
    selection: {
      title: "Participation at TEG is by selection.",
      text: "Every six months we select 8 to 15 participants for the Academy from more than a hundred applications. Every applicant goes through the same process, regardless of background or connections. We assess analytical thinking, drive and leadership character: the ability to take the initiative, to lead and to be led.",
      photoAlt: "TEG participants at an event",
      link: "How to apply",
    },
    video: {
      label: "In the video:",
      name: "Thomas Uchtmann",
      role: "Managing Director Sales at HORBACH",
    },
    join: {
      title: "How to become part of TEG",
      paths: [
        {
          who: "For executives",
          text: "Lead a workshop in the Academy, speak at one of our events, accompany a participant as a mentor, or host an evening.",
          link: "Get involved as an executive",
          to: "/for-companies",
        },
        {
          who: "For students and young professionals",
          text: "Applications to the Young Business Leadership Academy are accepted twice a year, in April and in October.",
          link: "How to apply",
          to: "/for-students",
        },
      ],
    },
  },
} satisfies Record<PageLang, unknown>;

// "today" only where the company has a different name now.
const heritageCompanies: {
  name: string;
  today?: { de: string; en: string };
}[] = [
  { name: "Deutsche BP", today: { de: "bp", en: "bp" } },
  { name: "BMW" },
  { name: "Siemens" },
  { name: "Roland Berger + Partner" },
  { name: "The Boston Consulting Group" },
  { name: "MBB", today: { de: "Airbus", en: "Airbus" } },
  { name: "Peat, Marwick, Mitchell + Co", today: { de: "KPMG", en: "KPMG" } },
  { name: "Ruhrgas", today: { de: "E.ON", en: "E.ON" } },
  {
    name: "Bayerische Hypotheken- und Wechsel-Bank",
    today: { de: "HypoVereinsbank", en: "HypoVereinsbank" },
  },
  { name: "Infratest" },
  {
    name: "Personal-Media-Partner",
    today: { de: "Teil von Roland Berger", en: "part of Roland Berger" },
  },
];

/**
 * Gentle reveal: elements marked data-reveal that start below the fold fade
 * up once when they enter the viewport. Content stays visible without JS,
 * in the prerendered HTML and for visitors who prefer reduced motion.
 */
function useReveal(root: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const container = root.current;
    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const targets = Array.from(
      container.querySelectorAll<HTMLElement>("[data-reveal]"),
    ).filter((el) => el.getBoundingClientRect().top > window.innerHeight);
    targets.forEach((el) => el.classList.add("is-hidden"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove("is-hidden");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [root]);
}

/** Stagger for items in a row, capped so long grids do not lag. */
const delay = (i: number, step = 70): React.CSSProperties => ({
  transitionDelay: `${Math.min(i, 6) * step}ms`,
});

const About: React.FC = () => {
  const lang = usePageLang();
  const localize = useLocalizePath();
  const t = copy[lang];
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);
  // The first upcoming conference in eventsData.ts; the banner goes away on
  // its own once that list is empty.
  const nextConference = upcomingConferences[0];

  return (
    <div className="ev landing" lang={lang} ref={rootRef}>
      <OrganisationSchema lang={lang} />
      <section className="dark">
        {nextConference && (
          <Link className="next-banner" to={localize(nextConference.page)}>
            <span className="label">{t.banner.label}</span>
            <span className="name">
              {localizeText(nextConference.title, lang)}
            </span>
            <span className="meta">
              {[nextConference.date, nextConference.location]
                .filter((part) => part !== undefined)
                .map((part) => localizeText(part, lang))
                .join(" · ")}
            </span>
            <span className="go">
              <span>{t.banner.cta}</span> <ArrowRight size={15} />
            </span>
          </Link>
        )}
        <div className="cover">
          <div className="cover-text">
            <p className="when">
              {t.hero.when.map((part) => (
                <span key={part}>{part}</span>
              ))}
            </p>
            <h1>{t.hero.title}</h1>
            <p className="lede">{t.hero.lede}</p>
            <p className="more">
              {t.hero.links.map((link) => (
                <Link key={link.to} to={localize(link.to)}>
                  {link.label}
                </Link>
              ))}
            </p>
          </div>
          <div className="cover-photo">
            <img src="/shared/heroes/hero-home.avif" alt={t.hero.photoAlt} />
          </div>
        </div>
        <div className="facts-strip">
          <div className="wrap">
            <dl>
              {t.facts.map(([value, label]) => (
                <div key={label}>
                  <dt>{value}</dt>
                  <dd>{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="network" aria-label={t.partnersLabel}>
        <div className="wrap">
          <p className="network-title">{t.partnersLabel}</p>
        </div>
        <div className="ticker">
          {/* Two identical runs; the track moves by one run for a seamless loop. */}
          <div className="ticker-track">
            {[0, 1].map((run) => (
              <ul key={run} aria-hidden={run === 1 ? true : undefined}>
                {partnerNames.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      <section className="mission" id="auftrag">
        <div className="wrap">
          <div className="pillars">
            {t.mission.pillars.map((pillar, i) => (
              <article key={pillar.title} data-reveal style={delay(i, 120)}>
                <span className="pillar-n">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2>{pillar.title}</h2>
                <p>{pillar.text}</p>
                <a className="text-link" href={pillar.href}>
                  {pillar.link} <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
          <p className="bridge" data-reveal>
            {t.mission.bridge}
          </p>
        </div>
      </section>

      <section className="chapter-section" id="formate">
        <div className="wrap">
          <div className="chapter-head">
            <div>
              <h2 className="section-title">{t.formats.title}</h2>
            </div>
            <p className="section-intro">{t.formats.intro}</p>
          </div>
          <div className="format-cards">
            {t.formats.items.map((format, i) => (
              <article className="format-card" key={format.name}>
                <div className="format-photo">
                  <img src={format.img} alt={format.alt} loading="lazy" />
                </div>
                <div className="format-panel">
                  <span className="format-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{format.name}</h3>
                  <p>{format.lede}</p>
                  <ul>
                    {format.traits.map(([term, value]) => (
                      <li key={term}>
                        <span>{term}</span> {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <p className="format-more">
            <Link className="text-link" to={localize("/events")}>
              {t.formats.link} <ArrowRight size={15} />
            </Link>
          </p>
        </div>
      </section>

      <section className="academy dark" id="ybla">
        <div className="wrap">
          <div className="academy-panel">
            <h2 className="section-title">{t.ybla.title}</h2>
            <p className="section-intro">{t.ybla.intro}</p>
            <Link className="text-link" to={localize("/for-students")}>
              {t.ybla.link} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
        <div className="academy-film">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/shared/teg-compliment-fallback.jpeg"
            aria-label={`${t.video.name}, ${t.video.role}`}
          >
            <source
              src="/shared/teg-compliment-compressed.webm"
              type="video/webm"
            />
            <source
              src="/shared/teg-compliment-compressed.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="wrap">
          <p className="film-caption">
            {t.video.label} <b>{t.video.name}</b>, {t.video.role}
          </p>
          <dl className="fact-row" data-reveal>
            {t.ybla.terms.map(([term, value, note]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>
                  {value}
                  {note && <span>{note}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="selection" id="auswahl">
        <img
          className="selection-photo"
          src="/shared/heroes/selection-bg.webp"
          alt={t.selection.photoAlt}
          loading="lazy"
        />
        <div className="wrap">
          <div className="selection-panel">
            <h2 className="section-title">{t.selection.title}</h2>
            <p>{t.selection.text}</p>
            <Link className="text-link" to={localize("/for-students")}>
              {t.selection.link} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="chapter-section" id="absolventen">
        <div className="wrap">
          <div className="chapter-head" data-reveal>
            <div>
              <h2 className="section-title">{t.alumni.title}</h2>
            </div>
            <p className="section-intro">{t.alumni.intro}</p>
          </div>
          <dl className="grad-stats" data-reveal>
            {t.alumni.stats.map(([value, label]) => (
              <div key={label}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
          <ul className="portraits">
            {alumni.map((alum) => (
              <li key={alum.name}>
                <img
                  src={`/about/alumni/${alum.img}`}
                  alt={alum.name}
                  loading="lazy"
                />
                <b>{alum.name}</b>
                <span>{t.alumni.levels[alum.level]}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="founding" id="gruendung">
        <figure className="founding-article" data-reveal>
          <img
            src="/about/heritage/zeitungsartikel.webp"
            alt={t.heritage.articleAlt}
            loading="lazy"
          />
          <figcaption>{t.heritage.articleCaption}</figcaption>
        </figure>
        <div className="founding-text" data-reveal>
          <h2 className="split-title">
            <span className="year">1986</span>
            {t.heritage.title}
          </h2>
          <p className="section-intro">{t.heritage.intro}</p>
          <ul className="founders-named" aria-label={t.heritage.foundersLabel}>
            {t.heritage.founders.map((founder) => (
              <li key={founder.name}>
                <b>{founder.name}</b>
                <span>{founder.role}</span>
              </li>
            ))}
          </ul>
          <p className="board-line">
            <span>{t.heritage.companiesLabel}: </span>
            {heritageCompanies
              .map((company) =>
                company.today
                  ? `${company.name} (${t.heritage.today} ${company.today[lang]})`
                  : company.name,
              )
              .join("  ·  ")}
          </p>
        </div>
      </section>

      <section className="join-us dark" id="mitwirken">
        <div className="wrap">
          <h2 className="section-title">{t.join.title}</h2>
          <div className="paths">
            {t.join.paths.map((path, i) => (
              <article key={path.to} data-reveal style={delay(i, 120)}>
                <h3>{path.who}</h3>
                <p>{path.text}</p>
                <Link className="text-link" to={localize(path.to)}>
                  {path.link} <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
