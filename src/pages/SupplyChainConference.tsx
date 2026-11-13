/**
 * Supply Chain Management Conference 2026 — participant sub-page of /events.
 * Ported from the Claude Design artifact "TEG Management Conferences".
 * scmc.css adds the conference's own wordmark and navy accent.
 *
 * Rendered in German at /conferences/… and in English at /en/conferences/….
 * Both are prerendered, so every word below ships as static HTML.
 */
import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./editorial.css";
import "./scmc.css";
import {
  CalendlyInline,
  ContactCard,
  ContactPerson,
  TegFounders,
  YblaTerm,
} from "../components/events/EditorialParts";
import LanguageNotice from "../components/LanguageNotice";
import { programme } from "./scmcProgramme";
import { PageLang, useLocalizePath, usePageLang } from "../i18n/pageLang";
import EventSchema from "../seo/EventSchema";

const ASSET = "/events/supply-chain";
const LUMA_URL = "https://luma.com/scmconference";
/* The speaker film was first published as a post on the TEG LinkedIn page. */
const LINKEDIN_POST_URL =
  "https://www.linkedin.com/posts/teg-management-conferences_am-8-dezember-2026-bringt-die-supply-chain-activity-7525829439415316480-cvy8";
/** Montserrat 800 is not in the site-wide font request; subset to the wordmark. */
const WORDMARK_FONT_URL =
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@800&text=SUPLYCHAIN%20&display=swap";
const MAIL_SUBJECT = "Supply Chain Management Conference";
/** Same 30-minute slot with Corbinian as on the location-host page. */
const CALENDLY_URL =
  "https://calendly.com/corbinian-massinger-teg-ev/30min?hide_event_type_details=1&hide_gdpr_banner=1";

const partners = [
  { name: "Intel", logo: `${ASSET}/partners/intel.webp` },
  { name: "Infineon", logo: `${ASSET}/partners/infineon.webp` },
  { name: "Horváth", logo: `${ASSET}/partners/horvath.webp` },
  { name: "MHP – A Porsche Company", logo: `${ASSET}/partners/mhp.webp` },
];

/**
 * Associations, listed after the companies. Few guests know them, so each
 * logo carries its name and a link. Heights even out the two logo shapes.
 */
const associations = [
  {
    name: "Open Industry 4.0 Alliance",
    url: "https://openindustry4.com/",
    logo: `${ASSET}/partners/open-industry-4.webp`,
    height: 44,
  },
  {
    name: "Chinaforum Bayern",
    url: "https://www.chinaforumbayern.de/",
    logo: `${ASSET}/partners/chinaforum-bayern.webp`,
    height: 26,
  },
];

const speakers = [
  {
    name: "Hansjörg Briegel",
    role: {
      de: "VP Forschung und Entwicklung Intel, Ecosystem Development",
      en: "VP Research and Development Intel, Ecosystem Development",
    },
    photo: "briegel",
  },
  {
    name: "Peter Dressler",
    role: {
      de: "VP Supply Chain Infineon (2008–2024)",
      en: "VP Supply Chain Infineon (2008–2024)",
    },
    photo: "dressler",
  },
  {
    name: "Jochen Kröber",
    role: {
      de: "Partner Horváth, Head of Supply Chain Management & Production",
      en: "Partner Horváth, Head of Supply Chain Management & Production",
    },
    photo: "kroeber",
  },
  {
    name: "Dr. Stefan Lustig",
    role: {
      de: "Geschäftsführer Supply Chain Paulaner Brauerei (2010–2018)",
      en: "Managing Director Supply Chain, Paulaner Brewery (2010–2018)",
    },
    photo: "lustig",
  },
  {
    name: "Rainer Baumann",
    role: {
      de: "VP Global Supply Chain & Digital Manufacturing Infineon (2014–2025)",
      en: "VP Global Supply Chain & Digital Manufacturing Infineon (2014–2025)",
    },
    photo: "baumann",
  },
  {
    name: "Dr. Julian Popp",
    role: {
      de: "Partner MHP, VP Supply Chain Körber",
      en: "Partner MHP, VP Supply Chain Körber",
    },
    photo: "popp",
  },
  {
    name: "Manuela Kirner",
    role: {
      de: "Senior Director Customs, Infineon (bis 2025)",
      en: "Senior Director Customs, Infineon (until 2025)",
    },
    photo: "kirner",
  },
  {
    name: "Klaus Buchwald",
    role: {
      de: "COO Siltronic; Executive VP Operations, Infineon (1998–2024)",
      en: "COO Siltronic; Executive VP Operations, Infineon (1998–2024)",
    },
    photo: "buchwald",
  },
  {
    name: "Dr. Stefan Kluge",
    role: {
      de: "VP Operations, ams Osram",
      en: "VP Operations, ams Osram",
    },
    photo: "kluge",
  },
  {
    name: "Anke Schnitzer",
    role: {
      de: "Leitung IT, CompuSafe Data Systems",
      en: "Head of IT, CompuSafe Data Systems",
    },
    photo: "schnitzer",
  },
  {
    name: "Oskar Schneider",
    role: {
      de: "Senior AI Expert, Data Science, Horváth",
      en: "Senior AI Expert, Data Science, Horváth",
    },
    photo: "schneider",
  },
];

const copy = {
  de: {
    when: ["8. Dezember 2026", "9–18 Uhr", "MaibornWolff Kraftwerk, München"],
    lede: "Die Supply Chain Management Conference bringt am 8. Dezember 2026 in München Führungskräfte aus Logistik, Industrie, Tech, Beratung und Wissenschaft zusammen. Ganztägig, mit Panels, Einzelvorträgen und Workshops in kleinen Gruppen.",
    register: "Anmelden",
    viewProgramme: "Programm ansehen",
    proposeTopic: "Thema einreichen",
    topicSubject: "Themenvorschlag",
    sponsor: "Sponsor werden",
    sponsorSubject: "Sponsoring",
    facts: [
      ["100", "Plätze, Teilnehmerzahl limitiert"],
      ["über 20", "Speaker"],
      ["1 Tag", "Panels, Einzelvorträge und Workshops in kleinen Gruppen"],
    ],
    supportedBy: "Unterstützt von",
    associations: "Verbände",
    speakersHeading: "Speaker",
    filmHeading: "Vier Speaker im Video",
    filmText:
      "Jochen Kröber, Peter Dressler, Rainer Baumann und Hansjörg Briegel über ihre Erwartungen an den 8. Dezember.",
    filmLink: "Beitrag auf LinkedIn ansehen",
    filmTitle:
      "Video: vier Speaker über die Supply Chain Management Conference",
    audienceHeading: "Zusammensetzung des Publikums",
    audienceIntro:
      "100 Teilnehmer, davon 70 Führungskräfte von der Teamleitung bis zum C-Level, überwiegend aus Konzernen dieser vier Branchen.",
    sectors: [
      {
        pct: "30 %",
        name: "Logistikdienstleister",
        ex: "DHL, Kühne+Nagel, DB Schenker, Dachser",
      },
      {
        pct: "26 %",
        name: "Maschinen- und Anlagenbau",
        ex: "Siemens, Krones, Trumpf, GEA",
      },
      {
        pct: "24 %",
        name: "Halbleiterindustrie",
        ex: "Infineon, Intel, Bosch, TSMC",
      },
      {
        pct: "20 %",
        name: "Getränkeindustrie",
        ex: "Paulaner, AB InBev, Coca‑Cola, Krombacher",
      },
    ],
    audienceFootnote: [
      "Hinzu kommen Teilnehmer unserer ",
      ", die 10 bis 20 % des Publikums ausmachen.",
    ],
    focusHeading: "Fokus",
    topics: [
      {
        n: "01",
        title: "Automatisierung",
        points: [
          "Wen Automatisierung tatsächlich entlastet",
          "KI, Roboter und autonome Systeme in Planung, Lager und Fertigung",
          "Verantwortung bei Fehlern: Goal-Misalignment und Sim-to-Real Gap",
        ],
      },
      {
        n: "02",
        title: "Geopolitik",
        points: [
          "Abhängigkeit von China oder Second Sourcing: Kosten gegen Risiko",
          "CSDDD- und LkSG-Pflichten bei fehlender Transparenz über Sub-Tier-Lieferanten",
          "Profitabilität unter den Umweltauflagen der EU",
        ],
      },
    ],
    programmeHeading: "Programm",
    openSlot: "Offen",
    programmeIntro:
      "Dienstag, 8. Dezember 2026. Einlass ab 9 Uhr, Beginn um 9:30 Uhr.",
    joinHeading: "Teilnahme",
    joinText: [
      "Die Plätze werden nach Profil, Motivation und fachlichem Bezug zum Thema vergeben.",
      "Die Anmeldung erfolgt über eine kurze Bewerbung auf Luma. Verbindlich wird Ihre Teilnahme erst mit unserer Bestätigung.",
    ],
    joinCta: "Zur Anmeldung auf Luma",
    terms: [
      ["Datum", "8. Dezember 2026, 9–18 Uhr"],
      ["Ort", "MaibornWolff Kraftwerk", "Drygalski-Allee 25, München"],
      ["Sprache", "Deutsch"],
      [
        "Format",
        "Panels und Einzelvorträge",
        "Dazu Workshops in kleinen Gruppen mit begrenzter Platzzahl",
      ],
      ["Verpflegung", "Mittagessen, Snacks und Getränke inbegriffen"],
      ["Ticket", "60 €", "Kategorien und Preise auf Luma"],
    ],
    orgHeading: "Organisation",
    orgText: [
      [
        "Organisiert wird die Konferenz von Corbinian Massinger und Leonard Beckmann, zwei Teilnehmern unserer ",
        ". Die Projektleitung eines Formats der TEG ist verpflichtender Teil der 18-monatigen Academy. Speaker, Partner und Gäste dieser Konferenz haben die beiden selbst gewonnen.",
      ],
      [
        "Corbinian Massinger strebt eine Führungsrolle in der Halbleiter- oder Robotikindustrie an, Leonard Beckmann eine Managementposition bei einem großen Logistikdienstleister oder den Weg in den Executive Search. Die Konferenz bringt beide mit den Branchen zusammen, in denen sie später Verantwortung übernehmen wollen.",
      ],
    ],
    organiserRoles: [
      "Programm und Anmeldung",
      "Partnerschaften und Speaker-Anfragen",
    ],
    bookingHeading: "Termin buchen",
    bookingText: "30 Minuten mit Corbinian Massinger.",
    bookingTitle: "Termin mit Corbinian Massinger buchen",
    pastHeading: "Zuletzt veranstaltet",
    pastIntro:
      "Die TEG veranstaltet zwei bis vier Konferenzen im Jahr, jede zu einem anderen Thema.",
    pastLink: "Alle Events der TEG",
    past: [
      {
        note: "Mit BCG, Roland Berger, IBM, PwC und Munich Re.",
        alts: [
          "Publikum der AI Consulting Conference 2026",
          "Podiumsdiskussion auf der AI Consulting Conference 2026",
        ],
      },
      {
        note: "Mit Microsoft, Google, MaibornWolff, NVIDIA und UnternehmerTUM.",
        alts: [
          "Publikum der Frontier Tech Conference 2025",
          "Panel auf der Frontier Tech Conference 2025",
        ],
      },
    ],
  },
  en: {
    when: ["8 December 2026", "9 am – 6 pm", "MaibornWolff Kraftwerk, Munich"],
    lede: "On 8 December 2026 in Munich, the Supply Chain Management Conference brings together executives from logistics, industry, tech, consulting and academia. A full day of panels, keynotes and workshops in small groups.",
    register: "Register",
    viewProgramme: "View programme",
    proposeTopic: "Propose a topic",
    topicSubject: "Topic proposal",
    sponsor: "Become a sponsor",
    sponsorSubject: "Sponsorship",
    facts: [
      ["100", "seats, attendance limited"],
      ["over 20", "speakers"],
      ["1 day", "Panels, keynotes and workshops in small groups"],
    ],
    supportedBy: "Supported by",
    associations: "Industry associations",
    speakersHeading: "Speakers",
    filmHeading: "Four speakers on film",
    filmText:
      "Jochen Kröber, Peter Dressler, Rainer Baumann and Hansjörg Briegel on what they expect from 8 December.",
    filmLink: "View the post on LinkedIn",
    filmTitle: "Video: four speakers on the Supply Chain Management Conference",
    audienceHeading: "Who attends",
    audienceIntro:
      "100 participants, 70 of them executives from team lead to C-level, mostly from large corporations in these four industries.",
    sectors: [
      {
        pct: "30 %",
        name: "Logistics service providers",
        ex: "DHL, Kühne+Nagel, DB Schenker, Dachser",
      },
      {
        pct: "26 %",
        name: "Machinery and plant engineering",
        ex: "Siemens, Krones, Trumpf, GEA",
      },
      {
        pct: "24 %",
        name: "Semiconductors",
        ex: "Infineon, Intel, Bosch, TSMC",
      },
      {
        pct: "20 %",
        name: "Beverages",
        ex: "Paulaner, AB InBev, Coca‑Cola, Krombacher",
      },
    ],
    audienceFootnote: [
      "They are joined by participants of our ",
      ", who make up 10 to 20 % of the audience.",
    ],
    focusHeading: "Focus",
    topics: [
      {
        n: "01",
        title: "Automation",
        points: [
          "Whom automation actually relieves",
          "AI, robots and autonomous systems in planning, warehousing and production",
          "Accountability for errors: goal misalignment and the sim-to-real gap",
        ],
      },
      {
        n: "02",
        title: "Geopolitics",
        points: [
          "Dependence on China or second sourcing: cost against risk",
          "CSDDD and German Supply Chain Act duties without transparency on sub-tier suppliers",
          "Profitability under the EU's environmental requirements",
        ],
      },
    ],
    programmeHeading: "Programme",
    openSlot: "Open",
    programmeIntro:
      "Tuesday, 8 December 2026. Doors open at 9:00, sessions begin at 9:30.",
    joinHeading: "Attendance",
    joinText: [
      "Places are allocated by profile, motivation and professional connection to the topic.",
      "You register with a short application on Luma. Your place is confirmed only once we have accepted it.",
    ],
    joinCta: "Register on Luma",
    terms: [
      ["Date", "8 December 2026, 9 am – 6 pm"],
      ["Venue", "MaibornWolff Kraftwerk", "Drygalski-Allee 25, Munich"],
      ["Language", "German"],
      [
        "Format",
        "Panels and keynotes",
        "Plus workshops in small groups with limited places",
      ],
      ["Catering", "Lunch, snacks and drinks included"],
      ["Ticket", "€60", "Categories and prices on Luma"],
    ],
    orgHeading: "Organisers",
    orgText: [
      [
        "The conference is organised by Corbinian Massinger and Leonard Beckmann, two participants of our ",
        ". Leading a TEG format is a required part of the 18-month Academy. The two won this conference's speakers, partners and guests themselves.",
      ],
      [
        "Corbinian Massinger is aiming for a leadership role in the semiconductor or robotics industry, Leonard Beckmann for a management position at a major logistics provider or a path into executive search. The conference connects both with the industries in which they intend to take on responsibility.",
      ],
    ],
    organiserRoles: ["Programme and registration", "Partnerships and speakers"],
    bookingHeading: "Book a call",
    bookingText: "30 minutes with Corbinian Massinger.",
    bookingTitle: "Book a call with Corbinian Massinger",
    pastHeading: "Recent conferences",
    pastIntro:
      "TEG holds two to four conferences a year, each on a different topic.",
    pastLink: "All TEG events",
    past: [
      {
        note: "With BCG, Roland Berger, IBM, PwC and Munich Re.",
        alts: [
          "Audience at the AI Consulting Conference 2026",
          "Panel discussion at the AI Consulting Conference 2026",
        ],
      },
      {
        note: "With Microsoft, Google, MaibornWolff, NVIDIA and UnternehmerTUM.",
        alts: [
          "Audience at the Frontier Tech Conference 2025",
          "Panel at the Frontier Tech Conference 2025",
        ],
      },
    ],
  },
} satisfies Record<PageLang, unknown>;

const organisers: Omit<ContactPerson, "role">[] = [
  {
    name: "Corbinian Massinger",
    photo: `${ASSET}/team/massinger.webp`,
    email: "corbinian.massinger@teg-ev.de",
    phone: "+49 176 56029611",
  },
  {
    name: "Leonard Beckmann",
    photo: `${ASSET}/team/beckmann.webp`,
    email: "leonard.beckmann@teg-ev.de",
    phone: "+49 162 9341601",
  },
];

const pastConferences = [
  {
    year: "2026",
    title: "AI Consulting Conference",
    photos: ["ai-consulting-1", "ai-consulting-2"],
  },
  {
    year: "2025",
    title: "Frontier Tech Conference",
    photos: ["frontier-tech-1", "frontier-tech-2"],
  },
];

const mailto = (subject: string) =>
  `mailto:leonard.beckmann@teg-ev.de?subject=${encodeURIComponent(
    `${subject} ${MAIL_SUBJECT}`,
  )}`;

const SupplyChainConference: React.FC = () => {
  const lang = usePageLang();
  const localize = useLocalizePath();
  const t = copy[lang];
  return (
    <div className="ev scmc" lang={lang}>
      <Helmet>
        <link rel="stylesheet" href={WORDMARK_FONT_URL} />
      </Helmet>
      <EventSchema ids={["supplychainconference2026"]} lang={lang} />
      <section className="hero">
        <LanguageNotice kind="conference" />
        <div className="wrap">
          <p className="when">
            {t.when.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </p>
          <div className="hero-mark">
            <h1
              className="wordmark"
              aria-label="Supply Chain Management Conference"
            >
              {/* The spaces keep the words apart for anything that reads the
                  heading as text; each span is its own line on screen. */}
              <span className="wm-bold">Supply Chain</span>{" "}
              <span>Management</span> <span>Conference</span>
            </h1>
            <p className="lede">{t.lede}</p>
          </div>
          <div className="cta">
            <div className="actions">
              <a
                className="btn primary"
                href={LUMA_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.register}
                <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </a>
              <a className="btn ghost" href="#programm">
                {t.viewProgramme}
              </a>
            </div>
            <p className="more">
              <a href={mailto(t.topicSubject)}>{t.proposeTopic}</a>
              <a href={mailto(t.sponsorSubject)}>{t.sponsor}</a>
            </p>
          </div>
          <dl className="facts">
            {t.facts.map(([figure, label]) => (
              <div key={figure}>
                <dt>{figure}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="partners" aria-label={t.supportedBy}>
        <div className="wrap">
          <div className="partner-group">
            <p>{t.supportedBy}</p>
            <div className="row">
              {partners.map((partner) => (
                <img key={partner.name} src={partner.logo} alt={partner.name} />
              ))}
            </div>
          </div>
          <div className="partner-group associations">
            <p>{t.associations}</p>
            <div className="row">
              {associations.map((association) => (
                <a
                  key={association.name}
                  className="association"
                  href={association.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="logo">
                    <img
                      src={association.logo}
                      alt=""
                      style={{ height: association.height }}
                    />
                  </span>
                  <span className="name">{association.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="band" id="lineup">
        <div className="wrap">
          <div className="head">
            <h2 className="h2">{t.speakersHeading}</h2>
          </div>
          <ul className="lineup">
            {speakers.map((speaker) => (
              <li className="speaker" key={speaker.name}>
                <img
                  src={`${ASSET}/speakers/${speaker.photo}.webp`}
                  alt={speaker.name}
                  loading="lazy"
                />
                <h3>{speaker.name}</h3>
                <p>{speaker.role[lang]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band" id="video">
        <div className="wrap film">
          <div className="film-text">
            <h2 className="h2">{t.filmHeading}</h2>
            <p>{t.filmText}</p>
            <p className="more">
              <a
                href={LINKEDIN_POST_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.filmLink}
              </a>
            </p>
          </div>
          <div className="film-frame">
            <video
              controls
              playsInline
              preload="none"
              poster={`${ASSET}/speaker-film.jpg`}
              aria-label={t.filmTitle}
            >
              <source src={`${ASSET}/speaker-film.mp4`} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="band" id="publikum">
        <div className="wrap">
          <div className="head">
            <h2 className="h2">{t.audienceHeading}</h2>
            <p className="intro">{t.audienceIntro}</p>
          </div>
          <ul className="sectors">
            {t.sectors.map((sector) => (
              <li key={sector.name}>
                <span className="pct">{sector.pct}</span>
                <span className="name">{sector.name}</span>
                <span className="ex">{sector.ex}</span>
              </li>
            ))}
          </ul>
          <p className="footnote">
            {t.audienceFootnote[0]}
            <YblaTerm />
            {t.audienceFootnote[1]}
          </p>
        </div>
      </section>

      <section className="band" id="fokus">
        <div className="wrap">
          <div className="head">
            <h2 className="h2">{t.focusHeading}</h2>
          </div>
          <div className="topics">
            {t.topics.map((topic) => (
              <div className="topic" key={topic.n}>
                <span className="n">{topic.n}</span>
                <h3>{topic.title}</h3>
                <ul>
                  {topic.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band" id="programm">
        <div className="wrap">
          <div className="head">
            <h2 className="h2">{t.programmeHeading}</h2>
            <p className="intro">{t.programmeIntro}</p>
          </div>
          <ol className="programme">
            {programme.map((item) => (
              <li
                key={item.time}
                className={
                  item.quiet
                    ? "slot quiet"
                    : item.briefings
                      ? "slot briefing-block"
                      : "slot"
                }
              >
                <p className="slot-meta">
                  <time>{item.time}</time>
                  <span className="kind">{item.kind[lang]}</span>
                </p>
                <div className="slot-body">
                  <h3>{item.title[lang]}</h3>
                  {item.host && <p className="host">{item.host[lang]}</p>}
                  {item.speakers && (
                    <ul className="slot-speakers">
                      {item.speakers.map((speaker) => (
                        <li key={speaker.name}>
                          <span className="name">{speaker.name}</span>
                          <span className="role">{speaker.role[lang]}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.abstract && (
                    <p className="abstract">{item.abstract[lang]}</p>
                  )}
                  {item.briefings && (
                    <ul className="briefings">
                      {item.briefings.map((briefing, index) =>
                        briefing ? (
                          <li key={briefing.speaker?.name ?? briefing.company}>
                            <span className="industry">
                              {briefing.industry[lang]}
                            </span>
                            <span
                              className={
                                briefing.speaker || briefing.company
                                  ? "name"
                                  : "name tbd"
                              }
                            >
                              {briefing.speaker?.name ??
                                briefing.company ??
                                t.openSlot}
                            </span>
                            {briefing.speaker && (
                              <span className="role">
                                {briefing.speaker.role[lang]}
                              </span>
                            )}
                          </li>
                        ) : (
                          <li key={`open-${index}`} className="open">
                            <span className="industry">{t.openSlot}</span>
                            <span className="name tbd">{t.openSlot}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band" id="teilnahme">
        <div className="wrap join">
          <div className="join-text">
            <h2 className="h2">{t.joinHeading}</h2>
            {t.joinText.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a
              className="btn primary"
              href={LUMA_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.joinCta}
            </a>
          </div>
          <dl className="terms">
            {t.terms.map(([term, value, detail]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>
                  {value}
                  {detail && <span>{detail}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="band" id="organisation">
        <div className="wrap org">
          <div className="org-text">
            <h2 className="h2">{t.orgHeading}</h2>
            <p>
              {t.orgText[0][0]}
              <YblaTerm />
              {t.orgText[0][1]}
            </p>
            <p>{t.orgText[1][0]}</p>
          </div>
          <div className="contacts">
            {organisers.map((person, index) => (
              <ContactCard
                key={person.email}
                person={{ ...person, role: t.organiserRoles[index] }}
              />
            ))}
          </div>
        </div>
        <div className="wrap booking" id="termin-buchen">
          <h3>{t.bookingHeading}</h3>
          <p>{t.bookingText}</p>
          <CalendlyInline url={CALENDLY_URL} title={t.bookingTitle} />
        </div>
      </section>

      <section className="band" id="bisher">
        <div className="wrap">
          <div className="head">
            <h2 className="h2">{t.pastHeading}</h2>
            <p className="intro">
              {t.pastIntro} <Link to={localize("/events")}>{t.pastLink}</Link>
            </p>
          </div>
          <div className="past">
            {pastConferences.map((conf, index) => (
              <article className="conf" key={conf.title}>
                <div className="photos">
                  {conf.photos.map((file, photoIndex) => (
                    <img
                      key={file}
                      src={`${ASSET}/past/${file}.webp`}
                      alt={t.past[index].alts[photoIndex]}
                      loading="lazy"
                    />
                  ))}
                </div>
                <span className="year">{conf.year}</span>
                <h3>{conf.title}</h3>
                <p>{t.past[index].note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band" id="ueber">
        <div className="wrap">
          <TegFounders />
        </div>
      </section>
    </div>
  );
};

export default SupplyChainConference;
