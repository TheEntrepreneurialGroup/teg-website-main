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

const ASSET = "/events/enterprise-sales";
const LUMA_URL = "https://luma.com/teg-4sug";
/** Manrope is not in the site-wide font request; subset to the hero claim. */
const HERO_FONT_URL =
  "https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&text=RSFWKethinkgsaludcbw.%20&display=swap";
/** Montserrat 800 is not in the site-wide font request; subset to the wordmark. */
const WORDMARK_FONT_URL =
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@800&text=ENTRPISAL%20&display=swap";

interface Affiliation {
  name: string;
  url: string;
  /** Square tile in logos/; omitted while no official logo is at hand. */
  logo?: string;
}

const speakers: {
  name: string;
  role: string;
  photo: string;
  bio: string;
  affiliations: Affiliation[];
}[] = [
  {
    name: "Heinz-Georg Geissler",
    role: "Internationaler B2B-Vertrieb · Bundesverband der Vertriebsmanager · WelikeU",
    photo: "heinz_georg_geissler",
    bio: "Über 25 Jahre Vertriebs- und Führungserfahrung in technischen B2B-Märkten, unter anderem bei Schott, Jenoptik und AFAG. Als Präsidiumsmitglied im Bundesverband der Vertriebsmanager und Mitgründer von WelikeU beschäftigt er sich damit, wie Unternehmen Vertrieb, Marketing und Technologie entlang der tatsächlichen Customer Journey zusammendenken – mit Erfahrung aus etablierten Industrieunternehmen ebenso wie aus neuen Geschäftsmodellen.",
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
    role: "Enterprise Sales Manager, Ariadne · zuvor Staffbase und Bilendo · Beyond Quota",
    photo: "christopher_stuetzel",
    bio: "Christopher Stützel kennt Enterprise Sales aus beiden Perspektiven: als Large Enterprise Account Executive beim deutschen Tech-Unicorn Staffbase und aus mehr als sechs Jahren Vertriebsführung bei Bilendo. Als Co-Host des Sales-Podcasts „Beyond Quota“ beschäftigt er sich mit modernen Sales-Methoden und den Fragen, die im Vertriebsalltag tatsächlich den Unterschied machen.",
    affiliations: [
      { name: "Ariadne", url: "https://www.ariadne.io/de", logo: "ariadne" },
    ],
  },
  {
    name: "Rainer Hoesl",
    role: "Sales Leader & Go-to-Market-Architekt · zuvor Salesforce · MEDDPICC",
    photo: "rainer_hoesl",
    bio: "Rainer Hoesl war über fünf Jahre im Enterprise-Vertrieb bei Salesforce tätig und bringt zusätzliche Erfahrung aus Accenture und BearingPoint mit. Heute liegt sein Schwerpunkt auf dem Aufbau skalierbarer Vertriebsorganisationen: Wie entwickelt sich Founder-led Sales zu einem belastbaren Go-to-Market-Modell, und welche Prozesse sorgen dafür, dass Pipeline nicht vom Zufall abhängt?",
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
    role: "Co-Founder, GTMengineer.dev · Signal-Based Outbound & GTM Engineering",
    photo: "emanuel_morhard",
    bio: "Emanuel Morhard steht für die technische Seite moderner Neukundengewinnung. Er baut Go-to-Market-Systeme, die Account-Daten, Buying Signals und automatisierte Workflows zu relevanter Ansprache verbinden. Mit GTMengineer.dev beschäftigt er sich insbesondere mit Cold Outbound und der Umsetzung moderner GTM-Infrastruktur, unter anderem mit Clay.",
    affiliations: [
      {
        name: "GTMengineer.dev",
        url: "https://gtmengineer.dev/",
        logo: "gtmengineer",
      },
    ],
  },
];

const topics = [
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
];

const audience = [
  "Enterprise Account Executives und Key Account Manager",
  "Sales Manager und Sales Directors",
  "Heads of Sales und VP Sales",
  "Business Development und Revenue Professionals",
];

const organiser: ContactPerson = {
  name: "Markus Ramsauer",
  role: "Organisation, Programm sowie Speaker- und Partneranfragen",
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

const EnterpriseSalesSummit: React.FC = () => (
  <div className="ev ess" lang="de">
    <Helmet>
      <link rel="stylesheet" href={HERO_FONT_URL} />
      <link rel="stylesheet" href={WORDMARK_FONT_URL} />
    </Helmet>
    <section className="hero">
      <div className="wrap">
        <p className="when">
          <span>19. Januar 2027</span>
          <span>München</span>
          <span>Abendveranstaltung</span>
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
          <p className="tagline">Rethinking the Sales Funnel.</p>
          <p className="promise">Was heute wirklich Kunden bringt.</p>
        </div>
        <div className="lede-block">
          <p className="lede">
            Wie gewinnt man Enterprise-Kunden, wenn sich die Entscheidung für
            einen Anbieter oft schon vor dem ersten Sales-Gespräch anbahnt? Und
            wie wird aus Interesse ein Abschluss, wenn Buying Committees,
            Budgetfreigaben und interne Prioritäten mitentscheiden?
          </p>
          <p className="lede">
            Vier Vorträge. Perspektiven aus langjähriger Enterprise-Sales-Praxis
            und modernem Go-to-Market. Ein Abend unter Menschen, die komplexe
            B2B-Deals nicht nur aus Präsentationen kennen.
          </p>
        </div>
        <div className="actions">
          <RegisterButton label="Zur Anmeldung auf Luma" />
          <a className="btn ghost" href="#speaker">
            Speaker ansehen
          </a>
        </div>
      </div>
    </section>

    <section className="band flush" id="warum">
      <div className="wrap why">
        <h2 className="h2">Warum dieser Summit?</h2>
        <div className="why-text">
          <p className="why-lead">
            Der Funnel verändert sich. Die Herausforderungen dahinter kennen wir
            alle.
          </p>
          <p>
            Ein Account zeigt Interesse, aber niemand kennt den tatsächlichen
            Entscheidungsprozess. Der Champion ist überzeugt, doch der Economic
            Buyer bleibt unerreichbar. Die Pipeline sieht gut aus, bis Deals
            wieder und wieder ins nächste Quartal rutschen. Und parallel wird es
            schwieriger, mit klassischem Outbound überhaupt noch ein relevantes
            Erstgespräch zu eröffnen.
          </p>
          <p>
            Der Enterprise Sales Summit setzt genau dort an. Wir sprechen
            darüber, wie Unternehmen heute auf Shortlists kommen, wie
            Signal-Based Outbound wirklich eingesetzt wird und wie man komplexe
            Kaufentscheidungen von innen heraus voranbringt. Dabei treffen die
            Erfahrung aus gewachsenen Vertriebsorganisationen und die
            Möglichkeiten moderner GTM-Infrastruktur aufeinander.
          </p>
          <p>
            Nicht als Sammlung von Sales-Buzzwords, sondern als Austausch
            darüber, was sich im Alltag bewährt, wo Methoden an Grenzen stoßen
            und was neu gedacht werden muss.
          </p>
        </div>
      </div>
    </section>

    <section className="band" id="themen">
      <div className="wrap">
        <div className="head">
          <h2 className="h2">Die Themen</h2>
        </div>
        <div className="topics">
          {topics.map((topic) => (
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
          <h2 className="h2">Die Speaker</h2>
        </div>
        <ul className="bios">
          {speakers.map((speaker) => (
            <li className="bio" key={speaker.name}>
              <img
                src={`${ASSET}/speakers/${speaker.photo}.webp`}
                alt={speaker.name}
                loading="lazy"
              />
              <div className="bio-text">
                <h3>{speaker.name}</h3>
                <p className="role">{speaker.role}</p>
                <p>{speaker.bio}</p>
                <ul className="affiliations" aria-label="Unternehmen">
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
        <h2 className="h2">Für wen ist der Summit?</h2>
        <div className="why-text">
          <p>
            Für Menschen, die im Enterprise Sales selbst Verantwortung tragen:
          </p>
          <ul className="audience">
            {audience.map((group) => (
              <li key={group}>{group}</li>
            ))}
          </ul>
          <p>
            Wer komplexe B2B-Deals steuert, weiß: Gute Gespräche allein reichen
            nicht. Es geht um den richtigen Zugang zum Account, belastbare
            Kundenbeziehungen und einen Verkaufsprozess, der auch dann
            funktioniert, wenn viele Stakeholder mitreden.
          </p>
        </div>
      </div>
    </section>

    <section className="band" id="teilnahme">
      <div className="wrap join">
        <div className="join-text">
          <h2 className="h2">Teilnahme</h2>
          <p>
            Die Anmeldung erfolgt über die Eventseite auf Luma.
            Teilnahmebedingungen und aktuelle Ticketinformationen finden Sie
            dort.
          </p>
          <RegisterButton label="Zur Anmeldung" />
        </div>
        <dl className="terms">
          <div>
            <dt>Datum</dt>
            <dd>19. Januar 2027, abends</dd>
          </div>
          <div>
            <dt>Ort</dt>
            <dd>München</dd>
          </div>
          <div>
            <dt>Format</dt>
            <dd>
              Vier Fachvorträge
              <span>
                und Austausch mit anderen Enterprise Sales Professionals
              </span>
            </dd>
          </div>
          <div>
            <dt>Sprache</dt>
            <dd>Deutsch</dd>
          </div>
          <div>
            <dt>Anmeldung</dt>
            <dd>
              Über Luma
              <span>Teilnahmebedingungen und Ticketinformationen dort</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <section className="band" id="organisation">
      <div className="wrap org">
        <div className="org-text">
          <h2 className="h2">Organisation</h2>
          <p>
            Der Enterprise Sales Summit wird von der TEG im Rahmen ihrer{" "}
            <YblaTerm /> organisiert. In dem 18-monatigen Programm übernehmen
            die Teilnehmer Verantwortung für eigene Veranstaltungsformate und
            bringen erfahrene Fach- und Führungskräfte miteinander ins Gespräch.
          </p>
        </div>
        <div className="contacts single">
          <ContactCard person={organiser} />
        </div>
      </div>
    </section>

    <section className="band" id="ueber">
      <div className="wrap">
        <div className="about">
          <h2 className="h2">Über die TEG</h2>
          <div>
            <p>
              Die TEG bringt seit 1986 Führungskräfte aus Konzernen und
              Mittelstand zusammen und veranstaltet Konferenzen sowie
              Fachformate in München. Bei bisherigen Veranstaltungen waren unter
              anderem Microsoft, Google, IBM, Siemens, BMW, McKinsey &amp;
              Company, BCG, Roland Berger, Accenture und PwC als Partner- oder
              Speaker-Unternehmen vertreten. Ziel ist der fachliche Austausch
              zwischen Menschen, die in ihren Unternehmen Verantwortung tragen.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default EnterpriseSalesSummit;
