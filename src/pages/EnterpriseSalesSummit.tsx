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
    name: "Rainer Hoesl",
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
      "Der Funnel verändert sich. Die Herausforderungen dahinter kennen wir alle.",
    why: [
      "Ein Account zeigt Interesse, aber niemand kennt den tatsächlichen Entscheidungsprozess. Der Champion ist überzeugt, doch der Economic Buyer bleibt unerreichbar. Die Pipeline sieht gut aus, bis Deals wieder und wieder ins nächste Quartal rutschen. Und parallel wird es schwieriger, mit klassischem Outbound überhaupt noch ein relevantes Erstgespräch zu eröffnen.",
      "Der Enterprise Sales Summit setzt genau dort an. Wir sprechen darüber, wie Unternehmen heute auf Shortlists kommen, wie Signal-Based Outbound wirklich eingesetzt wird und wie man komplexe Kaufentscheidungen von innen heraus voranbringt. Dabei treffen die Erfahrung aus gewachsenen Vertriebsorganisationen und die Möglichkeiten moderner GTM-Infrastruktur aufeinander.",
      "Nicht als Sammlung von Sales-Buzzwords, sondern als Austausch darüber, was sich im Alltag bewährt, wo Methoden an Grenzen stoßen und was neu gedacht werden muss.",
    ],
    topicsHeading: "Die Themen",
    topics: [
      {
        n: "01",
        title: "Auf die Shortlist kommen, bevor der erste Call stattfindet",
        text: "Viele Kunden recherchieren, vergleichen und bilden Präferenzen, bevor Sales überhaupt involviert ist. Wie wird man bei den richtigen Accounts früh relevant? Und welche Rolle spielen Vertrauen, Beziehungen und eine abgestimmte Customer Journey, bevor eine Opportunity im CRM auftaucht?",
      },
      {
        n: "02",
        title: "Signal-Based Outbound statt noch einer Sequenz",
        text: "Mehr Touchpoints allein machen keine bessere Pipeline. Entscheidend ist, ob die Ansprache zum Account, zum Anlass und zum Zeitpunkt passt. Wir schauen auf Buying Signals, Account Research und die technische Seite moderner GTM-Prozesse – von der Datengrundlage bis zu Workflows mit Tools wie Clay.",
      },
      {
        n: "03",
        title: "Der Champion sagt Ja. Das Buying Committee noch lange nicht.",
        text: "Große Deals scheitern selten an einer einzigen guten Präsentation. Wie baut man Zugang zu mehreren Stakeholdern auf? Wie kommt man an den Economic Buyer, ohne den Champion zu übergehen? Und wie entsteht aus individueller Begeisterung eine tragfähige Entscheidung im Unternehmen?",
      },
      {
        n: "04",
        title: "Pipeline ist noch kein Umsatz",
        text: "Eine Opportunity kann im Forecast stehen, ohne dass der Kunde eine echte Kaufentscheidung vorbereitet. Woran erkennt man Fortschritt? Welche Fragen legen Risiken offen? Und wie helfen klare Qualifizierung, MEDDPICC und ein gemeinsamer Entscheidungsplan, die richtigen Deals voranzubringen?",
      },
    ],
    speakersHeading: "Die Speaker",
    speakers: [
      {
        role: "Internationaler B2B-Vertrieb · Bundesverband der Vertriebsmanager · WelikeU",
        bio: "Über 25 Jahre Vertriebs- und Führungserfahrung in technischen B2B-Märkten, unter anderem bei Schott, Jenoptik und AFAG. Als Präsidiumsmitglied im Bundesverband der Vertriebsmanager und Mitgründer von WelikeU beschäftigt er sich damit, wie Unternehmen Vertrieb, Marketing und Technologie entlang der tatsächlichen Customer Journey zusammendenken – mit Erfahrung aus etablierten Industrieunternehmen ebenso wie aus neuen Geschäftsmodellen.",
      },
      {
        role: "Enterprise Sales Manager, Ariadne · zuvor Staffbase und Bilendo · Beyond Quota",
        bio: "Christopher Stützel kennt Enterprise Sales aus beiden Perspektiven: als Large Enterprise Account Executive beim deutschen Tech-Unicorn Staffbase und aus mehr als sechs Jahren Vertriebsführung bei Bilendo. Als Co-Host des Sales-Podcasts „Beyond Quota“ beschäftigt er sich mit modernen Sales-Methoden und den Fragen, die im Vertriebsalltag tatsächlich den Unterschied machen.",
      },
      {
        role: "Sales Leader & Go-to-Market-Architekt · zuvor Salesforce · MEDDPICC",
        bio: "Rainer Hoesl war über fünf Jahre im Enterprise-Vertrieb bei Salesforce tätig und bringt zusätzliche Erfahrung aus Accenture und BearingPoint mit. Heute liegt sein Schwerpunkt auf dem Aufbau skalierbarer Vertriebsorganisationen: Wie entwickelt sich Founder-led Sales zu einem belastbaren Go-to-Market-Modell, und welche Prozesse sorgen dafür, dass Pipeline nicht vom Zufall abhängt?",
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
    joinHeading: "Teilnahme",
    joinText:
      "Die Anmeldung erfolgt über die Eventseite auf Luma. Teilnahmebedingungen und aktuelle Ticketinformationen finden Sie dort.",
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
      [
        "Anmeldung",
        "Über Luma",
        "Teilnahmebedingungen und Ticketinformationen dort",
      ],
    ],
    orgHeading: "Organisation",
    orgText: [
      "Der Enterprise Sales Summit wird von der TEG im Rahmen ihrer ",
      " organisiert. In dem 18-monatigen Programm übernehmen die Teilnehmer Verantwortung für eigene Veranstaltungsformate und bringen erfahrene Fach- und Führungskräfte miteinander ins Gespräch.",
    ],
    organiserRole: "Organisation, Programm sowie Speaker- und Partneranfragen",
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
      "The funnel is changing. The challenges behind it are familiar to all of us.",
    why: [
      "An account shows interest, yet no one knows how the decision will actually be made. The champion is convinced, but the economic buyer remains out of reach. The pipeline looks healthy until deals slip into the next quarter, again and again. And all the while it grows harder to open a relevant first conversation with classic outbound at all.",
      "The Enterprise Sales Summit starts precisely there. We discuss how companies make it onto shortlists today, how signal-based outbound is really put to work, and how complex purchasing decisions are moved forward from within. Experience from established sales organisations meets the possibilities of modern GTM infrastructure.",
      "Not as a collection of sales buzzwords, but as an exchange on what holds up in daily practice, where methods reach their limits and what needs to be rethought.",
    ],
    topicsHeading: "The topics",
    topics: [
      {
        n: "01",
        title: "Making the shortlist before the first call",
        text: "Many customers research, compare and form preferences before sales is involved at all. How do you become relevant early with the right accounts? And what part do trust, relationships and a coordinated customer journey play before an opportunity ever appears in the CRM?",
      },
      {
        n: "02",
        title: "Signal-based outbound instead of yet another sequence",
        text: "More touchpoints alone do not make a better pipeline. What matters is whether the outreach fits the account, the occasion and the moment. We look at buying signals, account research and the technical side of modern GTM processes – from the underlying data to workflows built with tools such as Clay.",
      },
      {
        n: "03",
        title: "The champion says yes. The buying committee is another matter.",
        text: "Large deals rarely fail for want of one good presentation. How do you build access to several stakeholders? How do you reach the economic buyer without going around the champion? And how does individual enthusiasm become a decision the whole organisation will stand behind?",
      },
      {
        n: "04",
        title: "Pipeline is not yet revenue",
        text: "An opportunity can sit in the forecast while the customer is not preparing a real purchasing decision at all. How do you recognise progress? Which questions bring risks to light? And how do clear qualification, MEDDPICC and a mutual action plan help move the right deals forward?",
      },
    ],
    speakersHeading: "The speakers",
    speakers: [
      {
        role: "International B2B sales · Bundesverband der Vertriebsmanager · WelikeU",
        bio: "More than 25 years of sales and leadership experience in technical B2B markets, including at Schott, Jenoptik and AFAG. As a member of the executive board of the Bundesverband der Vertriebsmanager, the German association of sales managers, and co-founder of WelikeU, he examines how companies can think sales, marketing and technology together along the actual customer journey – drawing on experience from established industrial companies as well as from new business models.",
      },
      {
        role: "Enterprise Sales Manager, Ariadne · formerly Staffbase and Bilendo · Beyond Quota",
        bio: "Christopher Stützel knows enterprise sales from both sides: as a Large Enterprise Account Executive at the German tech unicorn Staffbase, and from more than six years of sales leadership at Bilendo. As co-host of the sales podcast “Beyond Quota”, he explores modern sales methods and the questions that genuinely make the difference in everyday selling.",
      },
      {
        role: "Sales Leader & Go-to-Market Architect · formerly Salesforce · MEDDPICC",
        bio: "Rainer Hoesl spent more than five years in enterprise sales at Salesforce and brings further experience from Accenture and BearingPoint. Today his focus is on building scalable sales organisations: how does founder-led sales mature into a resilient go-to-market model, and which processes ensure that pipeline is not left to chance?",
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
    joinHeading: "Attendance",
    joinText:
      "Registration is via the event page on Luma, where you will also find the terms of attendance and current ticket information.",
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
      ["Registration", "Via Luma", "Terms and ticket information there"],
    ],
    orgHeading: "Organisation",
    orgText: [
      "The Enterprise Sales Summit is organised by TEG as part of its ",
      ". In the 18-month programme, participants take responsibility for their own event formats and bring experienced professionals and executives into conversation with one another.",
    ],
    organiserRole: "Organisation, programme, speaker and partner enquiries",
    aboutHeading: "About TEG",
    about:
      "Since 1986, TEG has brought together executives from large corporations and the Mittelstand, and holds conferences and specialist formats in Munich. Past events have included Microsoft, Google, IBM, Siemens, BMW, McKinsey & Company, BCG, Roland Berger, Accenture and PwC as partner or speaker companies. The aim is a professional exchange between people who carry responsibility in their organisations.",
  },
} satisfies Record<PageLang, unknown>;

const organiser: Omit<ContactPerson, "role"> = {
  name: "Markus Ramsauer",
  email: "markus.ramsauer@teg-ev.de",
  linkedin: "https://www.linkedin.com/in/markus-ramsauer-0488763a5/",
};

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
          <div className="contacts single">
            <ContactCard person={{ ...organiser, role: t.organiserRole }} />
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
