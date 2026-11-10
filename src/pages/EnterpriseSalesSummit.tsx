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

const ASSET = "/events/enterprise-sales";
const LUMA_URL = "https://luma.com/teg-4sug";
/** Manrope is not in the site-wide font request; subset to the hero claim. */
const HERO_FONT_URL: Record<PageLang, string> = {
  de: "https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&text=RSFWKethinkgsaludcbw.%20&display=swap",
  en: "https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&text=RSFWethinkgalsucyomrd.%20&display=swap",
};
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
    when: ["19. Januar 2027", "München", "Abendveranstaltung"],
    tagline: "Rethinking the Sales Funnel.",
    promise: "Was heute wirklich Kunden bringt.",
    lede: [
      "Wie gewinnt man Enterprise-Kunden, wenn sich die Entscheidung für einen Anbieter oft schon vor dem ersten Sales-Gespräch anbahnt? Und wie wird aus Interesse ein Abschluss, wenn Buying Committees, Budgetfreigaben und interne Prioritäten mitentscheiden?",
      "Vier Vorträge. Perspektiven aus langjähriger Enterprise-Sales-Praxis und modernem Go-to-Market. Ein Abend unter Menschen, die komplexe B2B-Deals nicht nur aus Präsentationen kennen.",
    ],
    registerLuma: "Zur Anmeldung auf Luma",
    viewSpeakers: "Speaker ansehen",
    whyHeading: "Warum dieser Summit?",
    whyLead:
      "Wie baut man heute eine Enterprise-Pipeline auf? Und wie kommt man auf die Shortlist, wenn Einkaufsteams schon vor dem ersten Vertriebsgespräch KI zur Recherche nutzen?",
    why: [
      "Viele Kaufentscheidungen nehmen früh Gestalt an. Einkaufsteams nutzen ChatGPT, Gemini, Claude, Copilot oder Perplexity, um Anbieter zu finden und zu vergleichen. Wer in diesen Antworten fehlt, kann bei der Vorauswahl übergangen werden, ohne es zu erfahren.",
      "Vier Speaker zeigen aus ihrer Vertriebspraxis, wie Teams passende Accounts identifizieren, Kaufsignale für die Ansprache nutzen und komplexe Deals voranbringen. An Beispielen aus dem industriellen Mittelstand geht es auch darum, wie KI-Modelle Anbieter darstellen und was Vertriebsteams für ihre Sichtbarkeit tun können.",
    ],
    topicsHeading: "Die Themen",
    topics: [
      {
        n: "01",
        title: "Die moderne Sales Pipeline · Accounts und Kaufsignale",
        text: "Wie findet man passende Accounts und die richtigen Ansprechpartner? Wir zeigen, wie Lead Research, saubere Daten und Kaufsignale jenseits von Stellenanzeigen zusammenwirken und wie sich mit Clay und Claude Code eine KI-gestützte GTM-Infrastruktur aufbauen lässt.",
      },
      {
        n: "02",
        title: "Die moderne Sales Pipeline · Vom Erstkontakt zum Deal",
        text: "Welches Kundenproblem löst das Angebot und wodurch hebt es sich vom Wettbewerb ab? Es geht um die passende Ansprache für jede Rolle im Buying Center und darum, wie Vertriebsteams mehrere Stakeholder einbinden und Vertrauen aufbauen.",
      },
      {
        n: "03",
        title: "Die KI-Shortlist · Wie Einkaufsteams Anbieter auswählen",
        text: "Heinz-Georg Geissler zeigt anhand anonymisierter Messungen aus dem industriellen Mittelstand, wie unterschiedlich KI-Modelle Anbieter darstellen und welche Quellen sie heranziehen. Dabei geht es auch darum, wie Einkaufsteams heute ihre Lieferanten vorauswählen.",
      },
      {
        n: "04",
        title: "Die KI-Shortlist · Die eigene Sichtbarkeit prüfen",
        text: "Empfehlungen, Netzwerke und Fachbeiträge beeinflussen, was Menschen und KI-Modelle über Anbieter erfahren. Wir besprechen drei Hebel, mit denen Vertriebsteams ihre Sichtbarkeit verbessern können. Mit einem kurzen Selbstcheck können Teilnehmende prüfen, wie ihr Unternehmen in KI-Antworten erscheint.",
      },
    ],
    speakersHeading: "Die Speaker",
    speakers: [
      {
        role: "Internationaler B2B-Vertrieb · Bundesverband der Vertriebsmanager · WelikeU",
        bio: "Heinz-Georg Geissler verantwortet seit über 25 Jahren internationalen Vertrieb und Führung in der Industrie. Als Mitgründer der WelikeU GmbH begleitet er Geschäftsführende im Mittelstand nach dem Grundsatz „Erst die Grundlage. Dann die KI.“ Parallel baut er als Geschäftsführer und CSO der Compact Motion GmbH ein Industrie-Startup für Linearmotoren auf. Im Präsidium des Bundesverbands der Vertriebsmanager verantwortet er Partner und Inhalte. Für das Springer-Buch „Der Wandel im Vertrieb“ schrieb er das Kapitel zur kundenzentrierten B2B Customer Journey. 2006 brachte er eine Glaslaserschneidtechnik in die iPhone-Fertigung.",
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
    audienceOutro:
      "Wer komplexe B2B-Deals steuert, weiß: Gute Gespräche allein reichen nicht. Es geht um den richtigen Zugang zum Account, belastbare Kundenbeziehungen und einen Verkaufsprozess, der auch dann funktioniert, wenn viele Stakeholder mitreden.",
    audienceYbla: ["Hinzu kommen Teilnehmer unserer ", "."],
    joinHeading: "Teilnahme",
    joinText:
      "Die Plätze werden nach Profil, Motivation und fachlichem Bezug zum Thema vergeben. Jede Anmeldung wird von uns bestätigt. Empfehlungen aus dem eigenen Sales-Netzwerk sind willkommen: Auch empfohlene Gäste melden sich über Luma an.",
    register: "Zur Anmeldung",
    terms: [
      ["Datum", "19. Januar 2027, abends"],
      ["Ort", "München"],
      [
        "Format",
        "Vier Fachvorträge",
        "und Austausch mit anderen Enterprise Sales Professionals",
      ],
      ["Sprache", "Deutsch"],
      ["Anmeldung", "Über Luma", "Jede Anmeldung wird von uns bestätigt"],
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
    when: ["19 January 2027", "Munich", "Evening event"],
    tagline: "Rethinking the Sales Funnel.",
    promise: "What actually wins customers today.",
    lede: [
      "How do you win enterprise customers when the choice of vendor often begins to take shape before the first sales conversation? And how does interest become a signed deal when buying committees, budget approvals and internal priorities all have a say?",
      "Four talks. Perspectives drawn from long enterprise sales practice and from modern go-to-market. An evening among people who know complex B2B deals from more than slide decks.",
    ],
    registerLuma: "Register on Luma",
    viewSpeakers: "View the speakers",
    whyHeading: "Why this summit?",
    whyLead:
      "How do you build an enterprise pipeline today? And how do you make the shortlist when buying teams use AI to research vendors before the first sales conversation?",
    why: [
      "Many purchasing decisions begin to take shape early. Buying teams use ChatGPT, Gemini, Claude, Copilot or Perplexity to find and compare vendors. If a vendor is missing from those answers, it can be passed over without ever knowing.",
      "Four speakers draw on their sales experience to show how teams identify suitable accounts, use buying signals in outreach and move complex deals forward. Examples from mid-sized industrial companies show how AI models present vendors and what sales teams can do to improve their visibility.",
    ],
    topicsHeading: "The topics",
    topics: [
      {
        n: "01",
        title: "The modern sales pipeline · Accounts and buying signals",
        text: "How do you find suitable accounts and the right contacts? We look at how lead research, clean data and buying signals beyond job postings work together, and how tools such as Clay and Claude Code can support an AI-powered go-to-market operation.",
      },
      {
        n: "02",
        title: "The modern sales pipeline · From first contact to deal",
        text: "Which customer problem does your offer solve, and what sets it apart from the competition? We cover how to tailor outreach to each role in the buying group, engage several stakeholders and build trust.",
      },
      {
        n: "03",
        title: "The AI shortlist · How buying teams select vendors",
        text: "Using anonymised measurements from mid-sized industrial companies, Heinz-Georg Geissler shows how differently AI models present vendors and which sources they draw on. He also explores how buying teams choose which suppliers to consider.",
      },
      {
        n: "04",
        title: "The AI shortlist · Checking your visibility",
        text: "Referrals, networks and industry publications shape what people and AI models learn about vendors. We discuss three ways sales teams can improve their visibility. A short self-assessment lets participants see how their own company appears in AI answers.",
      },
    ],
    speakersHeading: "The speakers",
    speakers: [
      {
        role: "International B2B sales · Bundesverband der Vertriebsmanager · WelikeU",
        bio: "Heinz-Georg Geissler has led international sales and managed teams in industry for over 25 years. He co-founded WelikeU GmbH to advise leaders of mid-sized companies on getting the fundamentals in place before adopting AI. As managing director and CSO of Compact Motion GmbH, he is also building an industrial start-up for linear motors. He oversees partnerships and content on the executive board of the Bundesverband der Vertriebsmanager. He wrote the chapter on the customer-centric B2B customer journey for Springer's “Der Wandel im Vertrieb”. In 2006, he introduced a laser glass-cutting technique into iPhone manufacturing.",
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
    audienceOutro:
      "Anyone who steers complex B2B deals knows that good conversations alone are not enough. What counts is the right access to the account, durable customer relationships and a sales process that holds up even when many stakeholders have a say.",
    audienceYbla: ["They are joined by participants of our ", "."],
    joinHeading: "Attendance",
    joinText:
      "Places are allocated by profile, motivation and professional connection to the topic. We confirm every registration individually. Referrals from your own sales network are welcome: referred guests also register via Luma.",
    register: "Register",
    terms: [
      ["Date", "19 January 2027, evening"],
      ["Location", "Munich"],
      [
        "Format",
        "Four expert talks",
        "and conversation with fellow enterprise sales professionals",
      ],
      ["Language", "German"],
      ["Registration", "Via Luma", "We confirm every registration"],
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
      <Helmet>
        <link rel="stylesheet" href={HERO_FONT_URL[lang]} />
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
              <span className="wm-bold">Enterprise Sales</span>
              <span>
                Summit <span className="year">2027</span>
              </span>
            </h1>
          </div>
          <div className="claim">
            <p className="tagline">{t.tagline}</p>
            <p className="promise">{t.promise}</p>
          </div>
          <div className="lede-block">
            {t.lede.map((text) => (
              <p className="lede" key={text}>
                {text}
              </p>
            ))}
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
            {t.why.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="band" id="themen">
        <div className="wrap">
          <div className="head">
            <h2 className="h2">{t.topicsHeading}</h2>
          </div>
          <div className="topics">
            {t.topics.map((topic) => (
              <div className="topic" key={topic.n}>
                <span className="n">{topic.n}</span>
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
              </div>
            ))}
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
            <p>{t.audienceOutro}</p>
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
