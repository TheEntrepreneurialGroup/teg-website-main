/**
 * Enterprise Sales Summit 2027 — evening event, sub-page of /events.
 * Built along the lines of SupplyChainConference.tsx; ess.css adds the
 * summit's deep-navy hero and its live-text wordmark.
 */
import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import "./editorial.css";
import "./ess.css";
import {
  ContactCard,
  ContactPerson,
  YblaTerm,
} from "../components/events/EditorialParts";
import LanguageNotice from "../components/LanguageNotice";
import { PageLang, usePageLang } from "../i18n/pageLang";
import EventSchema from "../seo/EventSchema";

const ASSET = "/events/enterprise-sales";
const LUMA_URL = "https://luma.com/teg-4sug";
/** Manrope is not in the site-wide font request. It sets the hero claim and,
 *  as on the event slides, the headings of the topics band. */
const MANROPE_FONT_URL =
  "https://fonts.googleapis.com/css2?family=Manrope:wght@300..800&display=swap";
/** Montserrat 800 is not in the site-wide font request; subset to the wordmark. */
const WORDMARK_FONT_URL =
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@800&text=ENTRPISAL%20&display=swap";

interface Affiliation {
  name: string;
  url: string;
  /** Square tile in logos/; omitted while no official logo is at hand. */
  logo?: string;
}

/** Language-neutral speaker data; role and bio live in `copy`, same order. */
const speakers: {
  name: string;
  photo: string;
  affiliations: Affiliation[];
}[] = [
  {
    name: "Heinz-Georg Geissler",
    photo: "heinz_georg_geissler",
    affiliations: [
      {
        name: "Bundesverband der Vertriebsmanager",
        url: "https://www.dievertriebsmanager.de/",
        logo: "vertriebsmanager",
      },
      { name: "WelikeU", url: "https://www.welikeu.de/" },
    ],
  },
  {
    name: "Christopher Stützel",
    photo: "christopher_stuetzel",
    affiliations: [
      { name: "Ariadne", url: "https://www.ariadne.io/de", logo: "ariadne" },
    ],
  },
  {
    name: "Rainer Hösl",
    photo: "rainer_hoesl",
    affiliations: [
      {
        name: "Parrot Management Services",
        url: "https://parrot-ms.com/",
        logo: "parrot",
      },
    ],
  },
  {
    name: "Emanuel Morhard",
    photo: "emanuel_morhard",
    affiliations: [
      {
        name: "GTMengineer.dev",
        url: "https://gtmengineer.dev/",
        logo: "gtmengineer",
      },
    ],
  },
];

const copy = {
  de: {
    when: [
      "19. Januar 2027",
      "München",
      "Abendveranstaltung",
      "Einlass ab 17 Uhr",
    ],
    tagline: "Rethinking the Sales Funnel.",
    promise: "Was heute wirklich Kunden bringt.",
    registerLuma: "Zur Anmeldung auf Luma",
    viewSpeakers: "Speaker ansehen",
    whyHeading: "Warum dieser Summit?",
    whyLead:
      "Enterprise-Kunden kaufen heute anders ein als noch vor wenigen Jahren. Viele Vertriebsprozesse sind darauf noch nicht eingestellt.",
    why: "Die Speaker zeigen, mit welchen Methoden, Daten und Werkzeugen sie selbst arbeiten. Allgemeine Sales-Grundlagen sind nicht Teil des Programms.",
    topicsHeading: "Die Themen",
    pipeline: {
      title: "Die moderne Sales Pipeline",
      label: "Fokus Teil 1:",
      sub: "vom ersten Signal bis zum Enterprise Deal.",
      items: [
        {
          title: "Lead Research & List Building",
          text: "Wie baue ich eine richtig gute Liste: passende Accounts, richtige Ansprechpartner, saubere Daten?",
        },
        {
          title: "GTM-Infrastruktur & Tooling",
          text: "Wie baue ich eine moderne, KI-native GTM Engine zusammen (Clay, Claude Code & Co.)?",
        },
        {
          title: "Intent- & Signal-based Outbound",
          text: "Welche Signale jenseits der üblichen Datenbanken zeigen Bedarf, und wie nutze ich sie für den ersten Kontakt?",
        },
        {
          title: "Value Proposition & USP",
          text: "Welches Kundenproblem wird gelöst und warum sind wir besser als der Wettbewerb?",
        },
        {
          title: "Messaging für SDR",
          text: "Welche Message für welche Rolle im Buying Center?",
        },
        {
          title: "Multithreading im Enterprise Deal",
          text: "Mehrere Stakeholder einbinden und Vertrauen aufbauen.",
        },
      ],
    },
    shortlist: {
      title: "Die Shortlist schreibt heute die KI",
      label: "Fokus Teil 2:",
      sub: "wie Anbieter auf die Vorauswahl kommen, bevor der erste Vertriebskontakt stattfindet.",
      statement:
        "Wer in den Antworten von ChatGPT, Gemini, Claude, Copilot oder Perplexity nicht vorkommt, steht nicht auf der Shortlist und erfährt nie, dass er aussortiert wurde.",
      statementNote:
        "Heinz-Georg Geissler zeigt echte, anonymisierte Messungen aus dem industriellen Mittelstand. Die Teilnehmenden bekommen eine kurze Selbstprüfung mit, um die eigene Sichtbarkeit zu testen.",
      items: [
        "Wie unterschiedlich die KI-Modelle Anbieter darstellen und auf welche Quellen sie sich stützen.",
        "Warum Empfehlungen, Netzwerke und Fachbeiträge heute doppelt zählen: beim Menschen und bei der Maschine.",
        "Die drei Hebel, die am schnellsten wirken, und was das für die Arbeit von Vertriebsteams bedeutet.",
      ],
    },
    speakersHeading: "Die Speaker",
    speakers: [
      {
        role: "Internationaler B2B-Vertrieb · Bundesverband der Vertriebsmanager · WelikeU",
        bio: "Heinz-Georg Geissler verantwortet seit über 25 Jahren internationalen Vertrieb und Führung in der Industrie. Als Mitgründer der WelikeU GmbH begleitet er Geschäftsführende im Mittelstand nach dem Grundsatz „Erst die Grundlage. Dann die KI.“ Parallel baut er als Geschäftsführer und CSO der Compact Motion GmbH ein Industrie-Startup für Linearmotoren auf. Im Präsidium des Bundesverbands der Vertriebsmanager verantwortet er Partner und Inhalte. Für das Springer-Buch „Der Wandel im Vertrieb“ schrieb er das Kapitel zur kundenzentrierten B2B Customer Journey.",
      },
      {
        role: "Enterprise Sales Manager, Ariadne · zuvor Staffbase und Bilendo · Beyond Quota",
        bio: "Christopher Stützel ist Enterprise Sales Manager bei Ariadne. Zuvor war er Large Enterprise Account Executive beim deutschen Tech-Unicorn Staffbase und über sechs Jahre in leitenden Vertriebspositionen bei Bilendo tätig. Als Co-Host des Sales-Podcasts „Beyond Quota“ verbindet er seine Enterprise-Sales-Erfahrung mit neuen Ansätzen im B2B-Vertrieb.",
      },
      {
        role: "Sales Leader & Go-to-Market-Architekt · zuvor Salesforce · MEDDPICC",
        bio: "Rainer Hösl war langjähriger Enterprise Account Executive bei Salesforce und bringt Erfahrung von Accenture und BearingPoint mit. Als Sales Leader und Go-to-Market-Architekt ist er auf skalierbare Vertriebsorganisationen, MEDDPICC und den Übergang von Founder-led Sales zu planbarem Enterprise-Wachstum spezialisiert.",
      },
      {
        role: "Co-Founder, GTMengineer.dev · Signal-Based Outbound & GTM Engineering",
        bio: "Emanuel Morhard steht für die technische Seite moderner Neukundengewinnung. Er baut Go-to-Market-Systeme, die Account-Daten, Buying Signals und automatisierte Workflows zu relevanter Ansprache verbinden. Mit GTMengineer.dev beschäftigt er sich insbesondere mit Cold Outbound und der Umsetzung moderner GTM-Infrastruktur, unter anderem mit Clay.",
      },
    ],
    affiliationsLabel: "Unternehmen",
    audienceHeading: "Für wen ist der Summit?",
    audienceIntro:
      "Für Menschen, die im Enterprise Sales selbst Verantwortung tragen:",
    audience: [
      "Enterprise Account Executives und Key Account Manager",
      "Sales Manager und Sales Directors",
      "Heads of Sales und VP Sales",
      "Business Development und Revenue Professionals",
    ],
    audienceYbla: ["Hinzu kommen Teilnehmer unserer ", "."],
    joinHeading: "Teilnahme",
    joinText:
      "Die Plätze werden nach Profil, Motivation und fachlichem Bezug zum Thema vergeben. Jede Anmeldung wird von uns bestätigt. Empfehlungen aus dem eigenen Sales-Netzwerk sind willkommen: Auch empfohlene Gäste melden sich über Luma an.",
    register: "Zur Anmeldung",
    terms: [
      ["Datum", "19. Januar 2027", "Einlass ab 17 Uhr"],
      ["Ort", "München"],
      [
        "Format",
        "Vier Fachvorträge",
        "und Austausch mit anderen Enterprise Sales Professionals",
      ],
      ["Sprache", "Deutsch"],
      ["Anmeldung", "Über Luma"],
    ],
    orgHeading: "Organisation",
    orgText: [
      "Der Enterprise Sales Summit wird von der TEG im Rahmen ihrer ",
      " organisiert. In dem 18-monatigen Programm übernehmen die Teilnehmer Verantwortung für eigene Veranstaltungsformate und bringen erfahrene Fach- und Führungskräfte miteinander ins Gespräch.",
    ],
    organiserRoles: [
      "Organisation, Programm sowie Speaker- und Partneranfragen",
      "Co-Organisation sowie Speaker- und Partneranfragen",
    ],
    aboutHeading: "Über die TEG",
    about:
      "Die TEG bringt seit 1986 Führungskräfte aus Konzernen und Mittelstand zusammen und veranstaltet Konferenzen sowie Fachformate in München. Bei bisherigen Veranstaltungen waren unter anderem Microsoft, Google, IBM, Siemens, BMW, McKinsey & Company, BCG, Roland Berger, Accenture und PwC als Partner- oder Speaker-Unternehmen vertreten. Ziel ist der fachliche Austausch zwischen Menschen, die in ihren Unternehmen Verantwortung tragen.",
  },
  en: {
    when: ["19 January 2027", "Munich", "Evening event", "Doors open 5 pm"],
    tagline: "Rethinking the Sales Funnel.",
    promise: "What actually wins customers today.",
    registerLuma: "Register on Luma",
    viewSpeakers: "View the speakers",
    whyHeading: "Why this summit?",
    whyLead:
      "Enterprise customers buy differently than they did a few years ago. Many sales processes have not caught up.",
    why: "The speakers show the methods, data and tools they use in their own work. Sales fundamentals are not on the programme.",
    topicsHeading: "The topics",
    pipeline: {
      title: "The modern sales pipeline",
      label: "Focus part 1:",
      sub: "from the first signal to the enterprise deal.",
      items: [
        {
          title: "Lead research & list building",
          text: "How do I build a genuinely good list: the right accounts, the right contacts, clean data?",
        },
        {
          title: "GTM infrastructure & tooling",
          text: "How do I assemble a modern, AI-native GTM engine (Clay, Claude Code & co.)?",
        },
        {
          title: "Intent & signal-based outbound",
          text: "Which signals beyond the usual databases reveal demand, and how do I use them for first contact?",
        },
        {
          title: "Value proposition & USP",
          text: "Which customer problem do we solve, and why are we better than the competition?",
        },
        {
          title: "Messaging for SDRs",
          text: "Which message for which role in the buying centre?",
        },
        {
          title: "Multithreading in the enterprise deal",
          text: "Engaging several stakeholders and building trust.",
        },
      ],
    },
    shortlist: {
      title: "AI now writes the shortlist",
      label: "Focus part 2:",
      sub: "how vendors make the shortlist before the first sales contact takes place.",
      statement:
        "Vendors that do not appear in the answers of ChatGPT, Gemini, Claude, Copilot or Perplexity do not make the shortlist, and never learn that they were ruled out.",
      statementNote:
        "Heinz-Georg Geissler presents real, anonymised measurements from mid-sized industrial companies. Participants take home a short self-assessment to test their own visibility.",
      items: [
        "How differently AI models present vendors, and which sources they rely on.",
        "Why referrals, networks and industry articles now count twice: with people and with machines.",
        "The three levers that work fastest, and what they mean for the work of sales teams.",
      ],
    },
    speakersHeading: "The speakers",
    speakers: [
      {
        role: "International B2B sales · Bundesverband der Vertriebsmanager · WelikeU",
        bio: "Heinz-Georg Geissler has led international sales and managed teams in industry for over 25 years. He co-founded WelikeU GmbH to advise leaders of mid-sized companies on getting the fundamentals in place before adopting AI. As managing director and CSO of Compact Motion GmbH, he is also building an industrial start-up for linear motors. He oversees partnerships and content on the executive board of the Bundesverband der Vertriebsmanager. He wrote the chapter on the customer-centric B2B customer journey for Springer's “Der Wandel im Vertrieb”.",
      },
      {
        role: "Enterprise Sales Manager, Ariadne · formerly Staffbase and Bilendo · Beyond Quota",
        bio: "Christopher Stützel is Enterprise Sales Manager at Ariadne. He previously served as a Large Enterprise Account Executive at German tech unicorn Staffbase and spent more than six years in sales leadership roles at Bilendo. As co-host of the “Beyond Quota” sales podcast, he brings his enterprise sales experience to conversations about new approaches to B2B sales.",
      },
      {
        role: "Sales Leader & Go-to-Market Architect · formerly Salesforce · MEDDPICC",
        bio: "Rainer Hösl spent several years as an Enterprise Account Executive at Salesforce and also brings experience from Accenture and BearingPoint. As a sales leader and go-to-market architect, he specialises in building scalable sales organisations, applying MEDDPICC and moving from founder-led sales to predictable enterprise growth.",
      },
      {
        role: "Co-Founder, GTMengineer.dev · Signal-Based Outbound & GTM Engineering",
        bio: "Emanuel Morhard stands for the technical side of modern new business acquisition. He builds go-to-market systems that combine account data, buying signals and automated workflows into relevant outreach. With GTMengineer.dev, his particular focus is cold outbound and the implementation of modern GTM infrastructure, including with Clay.",
      },
    ],
    affiliationsLabel: "Companies",
    audienceHeading: "Who is the summit for?",
    audienceIntro:
      "For those who carry responsibility in enterprise sales themselves:",
    audience: [
      "Enterprise Account Executives and Key Account Managers",
      "Sales Managers and Sales Directors",
      "Heads of Sales and VPs of Sales",
      "Business Development and Revenue Professionals",
    ],
    audienceYbla: ["They are joined by participants of our ", "."],
    joinHeading: "Attendance",
    joinText:
      "Places are allocated by profile, motivation and professional connection to the topic. We confirm every registration individually. Referrals from your own sales network are welcome: referred guests also register via Luma.",
    register: "Register",
    terms: [
      ["Date", "19 January 2027", "Doors open at 5 pm"],
      ["Location", "Munich"],
      [
        "Format",
        "Four expert talks",
        "and conversation with fellow enterprise sales professionals",
      ],
      ["Language", "German"],
      ["Registration", "Via Luma"],
    ],
    orgHeading: "Organisation",
    orgText: [
      "The Enterprise Sales Summit is organised by TEG as part of its ",
      ". In the 18-month programme, participants take responsibility for their own event formats and bring experienced professionals and executives into conversation with one another.",
    ],
    organiserRoles: [
      "Organisation, programme, speaker and partner enquiries",
      "Co-organisation, speaker and partner enquiries",
    ],
    aboutHeading: "About TEG",
    about:
      "Since 1986, TEG has brought together executives from large corporations and the Mittelstand, and holds conferences and specialist formats in Munich. Past events have included Microsoft, Google, IBM, Siemens, BMW, McKinsey & Company, BCG, Roland Berger, Accenture and PwC as partner or speaker companies. The aim is a professional exchange between people who carry responsibility in their organisations.",
  },
} satisfies Record<PageLang, unknown>;

/** Same order as `organiserRoles` in `copy`. */
const organisers: Omit<ContactPerson, "role">[] = [
  {
    name: "Markus Ramsauer",
    photo: `${ASSET}/team/ramsauer.webp`,
    email: "markus.ramsauer@teg-ev.de",
    linkedin: "https://www.linkedin.com/in/markus-ramsauer-0488763a5/",
  },
  {
    name: "Abdul Aljubahji",
    photo: `${ASSET}/team/aljubahji.webp`,
    email: "abdul.aljubahji@teg-ev.de",
  },
];

/** 0 → "01", as on the event slides. */
const num = (i: number) => String(i + 1).padStart(2, "0");

/** Slide-style part heading in bold capitals, with its "Fokus" line. */
const PartHeading: React.FC<{
  part: { title: string; label: string; sub: string };
}> = ({ part }) => (
  <div className="part-head">
    <h3>{part.title}</h3>
    <p>
      <span>{part.label}</span> {part.sub}
    </p>
  </div>
);

const RegisterButton: React.FC<{ label: string }> = ({ label }) => (
  <a
    className="btn primary"
    href={LUMA_URL}
    target="_blank"
    rel="noopener noreferrer"
  >
    {label}
    <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
  </a>
);

const EnterpriseSalesSummit: React.FC = () => {
  const lang = usePageLang();
  const t = copy[lang];
  return (
    <div className="ev ess" lang={lang}>
      <EventSchema ids={["enterprise-sales-summit-2027"]} lang={lang} />
      <Helmet>
        <link rel="stylesheet" href={MANROPE_FONT_URL} />
        <link rel="stylesheet" href={WORDMARK_FONT_URL} />
      </Helmet>
      <section className="hero">
        <LanguageNotice kind="event" />
        <div className="wrap">
          <p className="when">
            {t.when.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </p>
          <div className="hero-mark">
            <h1 className="wordmark" aria-label="Enterprise Sales Summit 2027">
              <span className="wm-bold">Enterprise Sales</span>{" "}
              <span>
                Summit <span className="year">2027</span>
              </span>
            </h1>
          </div>
          <div className="claim">
            <p className="tagline">{t.tagline}</p>
            <p className="promise">{t.promise}</p>
          </div>
          <div className="actions">
            <RegisterButton label={t.registerLuma} />
            <a className="btn ghost" href="#speaker">
              {t.viewSpeakers}
            </a>
          </div>
        </div>
      </section>

      <section className="band flush" id="warum">
        <div className="wrap why">
          <h2 className="h2">{t.whyHeading}</h2>
          <div className="why-text">
            <p className="why-lead">{t.whyLead}</p>
            <p>{t.why}</p>
          </div>
        </div>
      </section>

      <section className="band flush" id="themen">
        <div className="wrap">
          <div className="head">
            <h2 className="h2">{t.topicsHeading}</h2>
          </div>

          <div className="part" id="teil-1">
            <PartHeading part={t.pipeline} />
            <ol className="cards">
              {t.pipeline.items.map((item, i) => (
                <li className="focus-item" key={item.title}>
                  <span className="card-n">{num(i)}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="part" id="teil-2">
            <PartHeading part={t.shortlist} />
            <div className="shortlist">
              <div className="statement-block">
                <p className="statement">{t.shortlist.statement}</p>
                <p className="statement-note">{t.shortlist.statementNote}</p>
              </div>
              <ul className="points">
                {t.shortlist.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="band" id="speaker">
        <div className="wrap">
          <div className="head">
            <h2 className="h2">{t.speakersHeading}</h2>
          </div>
          <ul className="bios">
            {speakers.map((speaker, i) => (
              <li className="bio" key={speaker.name}>
                <img
                  src={`${ASSET}/speakers/${speaker.photo}.webp`}
                  alt={speaker.name}
                  loading="lazy"
                />
                <div className="bio-text">
                  <h3>{speaker.name}</h3>
                  <p className="role">{t.speakers[i].role}</p>
                  <p>{t.speakers[i].bio}</p>
                  <ul className="affiliations" aria-label={t.affiliationsLabel}>
                    {speaker.affiliations.map((aff) => (
                      <li key={aff.name}>
                        <a
                          href={aff.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {aff.logo && (
                            <img
                              src={`${ASSET}/logos/${aff.logo}.webp`}
                              alt=""
                              loading="lazy"
                            />
                          )}
                          {aff.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band" id="zielgruppe">
        <div className="wrap why">
          <h2 className="h2">{t.audienceHeading}</h2>
          <div className="why-text">
            <p>{t.audienceIntro}</p>
            <ul className="audience">
              {t.audience.map((group) => (
                <li key={group}>{group}</li>
              ))}
            </ul>
            <p>
              {t.audienceYbla[0]}
              <YblaTerm />
              {t.audienceYbla[1]}
            </p>
          </div>
        </div>
      </section>

      <section className="band" id="teilnahme">
        <div className="wrap join">
          <div className="join-text">
            <h2 className="h2">{t.joinHeading}</h2>
            <p>{t.joinText}</p>
            <RegisterButton label={t.register} />
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
              {t.orgText[0]}
              <YblaTerm />
              {t.orgText[1]}
            </p>
          </div>
          <div className="contacts">
            {organisers.map((person, i) => (
              <ContactCard
                key={person.name}
                person={{ ...person, role: t.organiserRoles[i] }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="band" id="ueber">
        <div className="wrap">
          <div className="about">
            <h2 className="h2">{t.aboutHeading}</h2>
            <div>
              <p>{t.about}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseSalesSummit;
