/**
 * Supply Chain Management Conference 2026 — participant sub-page of /events.
 * Ported from the Claude Design artifact "TEG Management Conferences".
 * The location-host landing page stays at /supplychain (RequestDemo).
 */
import React from "react";
import { Link } from "react-router-dom";
import "./events-editorial.css";
import {
  CalendlyInline,
  ContactCard,
  ContactPerson,
  TegFounders,
  YblaTerm,
} from "../components/events/EditorialParts";

const ASSET = "/events/supply-chain";
const LUMA_URL = "https://luma.com/scmconference";
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

const speakers = [
  {
    name: "Hansjörg Briegel",
    role: "VP Forschung und Entwicklung Intel, Ecosystem Development",
    photo: "briegel",
  },
  {
    name: "Peter Dressler",
    role: "VP Supply Chain Infineon (2008–2024)",
    photo: "dressler",
  },
  {
    name: "Jochen Kröber",
    role: "Partner Horváth, Head of Supply Chain Management & Production",
    photo: "kroeber",
  },
  {
    name: "Stephan Lustig",
    role: "Geschäftsführer Supply Chain Paulaner Brauerei (2010–2018)",
    photo: "lustig",
  },
  {
    name: "Rainer Baumann",
    role: "VP Global Supply Chain & Digital Manufacturing Infineon (2014–2025)",
    photo: "baumann",
  },
  {
    name: "Dr. Julian Popp",
    role: "Partner MHP, VP Supply Chain Körber",
    photo: "popp",
  },
  {
    name: "Prof. Dr. Lisandra Flach",
    role: "Expertin für globalen Handel, LMU / ifo Institut",
    photo: "flach",
  },
  {
    name: "Manuela Kirner",
    role: "Senior Director Customs & Supply Chain Infineon (2016–2025)",
    photo: "kirner",
  },
];

const sectors = [
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
    ex: "Paulaner, AB InBev, Coca-Cola, Krombacher",
  },
];

const topics = [
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
];

const organisers: ContactPerson[] = [
  {
    name: "Corbinian Massinger",
    role: "Programm und Anmeldung",
    photo: `${ASSET}/team/massinger.webp`,
    email: "corbinian.massinger@teg-ev.de",
    phone: "+49 176 56029611",
  },
  {
    name: "Leonard Beckmann",
    role: "Partnerschaften und Speaker-Anfragen",
    photo: `${ASSET}/team/beckmann.webp`,
    email: "leonard.beckmann@teg-ev.de",
    phone: "+49 162 9341601",
  },
];

const pastConferences = [
  {
    year: "2026",
    title: "AI Consulting Conference",
    note: "Mit BCG, Roland Berger, IBM, PwC und Munich Re.",
    photos: [
      ["ai-consulting-1", "Publikum der AI Consulting Conference 2026"],
      [
        "ai-consulting-2",
        "Podiumsdiskussion auf der AI Consulting Conference 2026",
      ],
    ],
  },
  {
    year: "2025",
    title: "Frontier Tech Conference",
    note: "Mit Microsoft, Google, MaibornWolff, NVIDIA und UnternehmerTUM.",
    photos: [
      ["frontier-tech-1", "Publikum der Frontier Tech Conference 2025"],
      ["frontier-tech-2", "Panel auf der Frontier Tech Conference 2025"],
    ],
  },
];

const mailto = (subject: string) =>
  `mailto:leonard.beckmann@teg-ev.de?subject=${encodeURIComponent(
    `${subject} ${MAIL_SUBJECT}`,
  )}`;

const SupplyChainConference: React.FC = () => (
  <div className="ev" lang="de">
    <section className="hero">
      <div className="wrap">
        <p className="when">
          <span>8. Dezember 2026</span>
          <span>München</span>
          <span>ganztägig</span>
        </p>
        <div className="hero-mark">
          <h1>
            <img
              src={`${ASSET}/wordmark.webp`}
              alt="Supply Chain Management Conference"
              width={2275}
              height={754}
            />
          </h1>
          <p className="lede">
            Ein Tag zu zwei Fragen, die in vielen Konzernen offen sind: Wer
            verantwortet Fehlentscheidungen autonomer Systeme in der
            Lieferkette? Und ab wann rechnet sich Second Sourcing gegenüber der
            Abhängigkeit von China?
          </p>
        </div>
        <div className="cta">
          <div className="actions">
            <a className="btn primary" href="#teilnahme">
              Anmelden
            </a>
            <a className="btn ghost" href="#fokus">
              Programm ansehen
            </a>
          </div>
          <p className="more">
            <a href={mailto("Themenvorschlag")}>Thema einreichen</a>
            <a href={mailto("Sponsoring")}>Sponsor werden</a>
          </p>
        </div>
        <dl className="facts">
          <div>
            <dt>125</dt>
            <dd>Teilnehmer, davon 100 Führungskräfte</dd>
          </div>
          <div>
            <dt>über 20</dt>
            <dd>Speaker</dd>
          </div>
          <div>
            <dt>1 Tag</dt>
            <dd>Panels, Einzelvorträge und Workshops in kleinen Gruppen</dd>
          </div>
        </dl>
      </div>
    </section>

    <section className="partners" aria-label="Unterstützt von">
      <div className="wrap">
        <p>Unterstützt von</p>
        <div className="row">
          {partners.map((partner) => (
            <img key={partner.name} src={partner.logo} alt={partner.name} />
          ))}
        </div>
      </div>
    </section>

    <section className="band" id="lineup">
      <div className="wrap">
        <div className="head">
          <h2 className="h2">Speaker</h2>
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
              <p>{speaker.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="band" id="publikum">
      <div className="wrap">
        <div className="head">
          <h2 className="h2">Zusammensetzung des Publikums</h2>
          <p className="intro">
            125 Teilnehmer, davon 100 Führungskräfte von der Teamleitung bis zum
            C-Level, überwiegend aus Konzernen dieser vier Branchen.
          </p>
        </div>
        <ul className="sectors">
          {sectors.map((sector) => (
            <li key={sector.name}>
              <span className="pct">{sector.pct}</span>
              <span className="name">{sector.name}</span>
              <span className="ex">{sector.ex}</span>
            </li>
          ))}
        </ul>
        <p className="footnote">
          Hinzu kommen Teilnehmer unserer <YblaTerm />, die 10 bis 20 % des
          Publikums ausmachen.
        </p>
      </div>
    </section>

    <section className="band" id="fokus">
      <div className="wrap">
        <div className="head">
          <h2 className="h2">Fokus</h2>
        </div>
        <div className="topics">
          {topics.map((topic) => (
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

    <section className="band" id="teilnahme">
      <div className="wrap join">
        <div className="join-text">
          <h2 className="h2">Teilnahme</h2>
          <p>
            Die Plätze werden nach Profil, Motivation und fachlichem Bezug zum
            Thema vergeben.
          </p>
          <p>
            Die Anmeldung erfolgt über eine kurze Bewerbung auf Luma.
            Verbindlich wird Ihre Teilnahme erst mit unserer Bestätigung.
          </p>
          <a
            className="btn primary"
            href={LUMA_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Zur Anmeldung auf Luma
          </a>
        </div>
        <dl className="terms">
          <div>
            <dt>Datum</dt>
            <dd>8. Dezember 2026, ganztägig</dd>
          </div>
          <div>
            <dt>Ort</dt>
            <dd>München</dd>
          </div>
          <div>
            <dt>Sprache</dt>
            <dd>Deutsch</dd>
          </div>
          <div>
            <dt>Format</dt>
            <dd>
              Panels und Einzelvorträge
              <span>
                Dazu Workshops in kleinen Gruppen mit begrenzter Platzzahl
              </span>
            </dd>
          </div>
          <div>
            <dt>Verpflegung</dt>
            <dd>Mittagessen, Snacks und Getränke inbegriffen</dd>
          </div>
          <div>
            <dt>Ticket</dt>
            <dd>
              rund 100 €<span>Kategorien und Preise auf Luma</span>
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
            Organisiert wird die Konferenz von Corbinian Massinger und Leonard
            Beckmann, zwei Teilnehmern unserer <YblaTerm />. Die Projektleitung
            eines Formats der TEG ist verpflichtender Teil der 18-monatigen
            Academy. Speaker, Partner und Gäste dieser Konferenz haben die
            beiden selbst gewonnen.
          </p>
          <p>
            Corbinian Massinger strebt eine Führungsrolle in der Halbleiter-
            oder Robotikindustrie an, Leonard Beckmann eine Managementposition
            bei einem großen Logistikdienstleister oder den Weg in den Executive
            Search. Die Konferenz bringt beide mit den Branchen zusammen, in
            denen sie später Verantwortung übernehmen wollen.
          </p>
        </div>
        <div className="contacts">
          {organisers.map((person) => (
            <ContactCard key={person.email} person={person} />
          ))}
        </div>
      </div>
      <div className="wrap booking" id="termin-buchen">
        <h3>Termin buchen</h3>
        <p>30 Minuten mit Corbinian Massinger.</p>
        <CalendlyInline
          url={CALENDLY_URL}
          title="Termin mit Corbinian Massinger buchen"
        />
      </div>
    </section>

    <section className="band" id="bisher">
      <div className="wrap">
        <div className="head">
          <h2 className="h2">Zuletzt veranstaltet</h2>
          <p className="intro">
            Die TEG veranstaltet zwei bis vier Konferenzen im Jahr, jede zu
            einem anderen Thema. <Link to="/events">Alle Events der TEG</Link>
          </p>
        </div>
        <div className="past">
          {pastConferences.map((conf) => (
            <article className="conf" key={conf.title}>
              <div className="photos">
                {conf.photos.map(([file, alt]) => (
                  <img
                    key={file}
                    src={`${ASSET}/past/${file}.webp`}
                    alt={alt}
                    loading="lazy"
                  />
                ))}
              </div>
              <span className="year">{conf.year}</span>
              <h3>{conf.title}</h3>
              <p>{conf.note}</p>
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

export default SupplyChainConference;
