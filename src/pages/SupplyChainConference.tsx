/**
 * Supply Chain Management Conference 2026 — participant sub-page of /events.
 * Ported from the Claude Design artifact "TEG Management Conferences".
 * The location-host landing page stays at /supplychain (RequestDemo).
 *
 * Styled with the conference sub-brand from the "SCMC 2026 Page Style Guide"
 * (scmc.css, scoped under .scmc): Montserrat display type, the poster
 * gradient, ice washes and corner blooms. The closing TEG sections keep the
 * house style.
 */
import React from "react";
import { Helmet } from "react-helmet-async";
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

const ASSET = "/events/supply-chain";
const LUMA_URL = "https://luma.com/scmconference";
const VENUE = "MaibornWolff Kraftwerk, Drygalski-Allee 25, München";
/** Montserrat 800 is not part of the site-wide font request. */
const DISPLAY_FONT_URL =
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800&display=swap";
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

const speakers: {
  name: string;
  role: string;
  photo: string;
  /** Talk title from the poster set, where one is announced. */
  talk?: string;
}[] = [
  {
    name: "Hansjörg Briegel",
    role: "VP Forschung und Entwicklung Intel, Ecosystem Development",
    photo: "briegel",
  },
  {
    name: "Peter Dressler",
    role: "VP Supply Chain Infineon (2008–2024)",
    photo: "dressler",
    talk: "Globale Umbrüche und die Zukunftsfähigkeit Infineons",
  },
  {
    name: "Jochen Kröber",
    role: "Partner Horváth, Head of Supply Chain Management & Production",
    photo: "kroeber",
    talk: "Digital Twins",
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
    talk: "Supply Chain aus KI, Robotern und autonomen Systemen",
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
    share: 30,
    name: "Logistikdienstleister",
    ex: "DHL, Kühne+Nagel, DB Schenker, Dachser",
  },
  {
    pct: "26 %",
    share: 26,
    name: "Maschinen- und Anlagenbau",
    ex: "Siemens, Krones, Trumpf, GEA",
  },
  {
    pct: "24 %",
    share: 24,
    name: "Halbleiterindustrie",
    ex: "Infineon, Intel, Bosch, TSMC",
  },
  {
    pct: "20 %",
    share: 20,
    name: "Getränkeindustrie",
    ex: "Paulaner, AB InBev, Coca-Cola, Krombacher",
  },
];

/** Each point is plain text or [before, emphasis, after?]. */
const topics: { n: string; title: string; points: (string | string[])[] }[] = [
  {
    n: "01",
    title: "Automatisierung",
    points: [
      ["Wen Automatisierung ", "tatsächlich entlastet"],
      "KI, Roboter und autonome Systeme in Planung, Lager und Fertigung",
      "Verantwortung bei Fehlern: Goal-Misalignment und Sim-to-Real Gap",
    ],
  },
  {
    n: "02",
    title: "Geopolitik",
    points: [
      [
        "Abhängigkeit von China oder ",
        "Second Sourcing",
        ": Kosten gegen Risiko",
      ],
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

/** Poster convention: first name (and titles) navy, last name gradient. */
const SplitName: React.FC<{ name: string }> = ({ name }) => {
  const cut = name.lastIndexOf(" ");
  return (
    <>
      <span className="first">{name.slice(0, cut + 1)}</span>
      <span className="last grad-text">{name.slice(cut + 1)}</span>
    </>
  );
};

const Point: React.FC<{ point: string | string[] }> = ({ point }) =>
  typeof point === "string" ? (
    <>{point}</>
  ) : (
    <>
      {point[0]}
      <strong>{point[1]}</strong>
      {point[2]}
    </>
  );

const mailto = (subject: string) =>
  `mailto:leonard.beckmann@teg-ev.de?subject=${encodeURIComponent(
    `${subject} ${MAIL_SUBJECT}`,
  )}`;

const SupplyChainConference: React.FC = () => (
  <div className="ev scmc" lang="de">
    <Helmet>
      <link rel="stylesheet" href={DISPLAY_FONT_URL} />
    </Helmet>

    <section className="hero bloom">
      <div className="wrap">
        <p className="meta-block">
          <b>08. Dezember 2026 · ganztägig</b>
          {VENUE}
        </p>
        <div className="hero-mark">
          <h1
            className="wordmark"
            aria-label="Supply Chain Management Conference"
          >
            <span className="wm-bold grad-text">Supply Chain</span>
            <span className="wm-light">Management</span>
            <span className="wm-light">Conference</span>
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
              Anmelden <span aria-hidden="true">→</span>
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
            <dt>1 Tag</dt>
            <dd>
              <span className="u">Ganztägig</span>
              Panels, Einzelvorträge und Workshops
            </dd>
          </div>
          <div>
            <dt>20+</dt>
            <dd>
              <span className="u">Speaker</span>
              aus Industrie und Beratung
            </dd>
          </div>
          <div>
            <dt>125</dt>
            <dd>
              <span className="u">Gäste</span>
              davon 100 Führungskräfte
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <section className="partners" aria-label="Mit Partnern und Speakern von">
      <div className="wrap">
        <p>Mit Partnern und Speakern von</p>
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
          <p className="eyebrow-sc">Aus Industrie und Beratung</p>
          <h2 className="h2">Speaker</h2>
        </div>
        <ul className="lineup">
          {speakers.map((speaker) => (
            <li className="spk" key={speaker.name}>
              <div className="ph">
                <img
                  src={`${ASSET}/speakers/${speaker.photo}.webp`}
                  alt={speaker.name}
                  loading="lazy"
                />
              </div>
              <div className="tx">
                <h3>
                  <SplitName name={speaker.name} />
                </h3>
                <p className="role">{speaker.role}</p>
                {speaker.talk && <p className="talk">{speaker.talk}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="band" id="publikum">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow-sc">125 Gäste · 100 Führungskräfte</p>
          <h2 className="h2">Zusammensetzung des Publikums</h2>
          <p className="intro">
            125 Teilnehmer, davon 100 Führungskräfte von der Teamleitung bis zum
            C-Level, überwiegend aus Konzernen dieser vier Branchen.
          </p>
        </div>
        <ul className="bars">
          {sectors.map((sector) => (
            <li className="bar" key={sector.name}>
              <span className="pct">{sector.pct}</span>
              <span className="track" aria-hidden="true">
                <span
                  className="fill"
                  style={{ display: "block", width: `${sector.share}%` }}
                />
              </span>
              <span className="lab">
                <b>{sector.name}</b> · {sector.ex}
              </span>
            </li>
          ))}
        </ul>
        <p className="footnote">
          Hinzu kommen Teilnehmer unserer <YblaTerm />, die 10 bis 20 % des
          Publikums ausmachen.
        </p>
      </div>
    </section>

    <section className="band ice" id="fokus">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow-sc">Zwei Schwerpunkte</p>
          <h2 className="h2">Fokus</h2>
        </div>
        <div className="timeline">
          {topics.map((topic) => (
            <div className="tl" key={topic.n}>
              <h3>
                <small>{topic.n}</small>
                {topic.title}
              </h3>
              <ul>
                {topic.points.map((point) => (
                  <li key={String(point)}>
                    <Point point={point} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="band bloom" id="teilnahme">
      <div className="wrap join">
        <div className="join-text">
          <p className="eyebrow-sc">Anmeldung über Luma</p>
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
            Zur Anmeldung auf Luma <span aria-hidden="true">→</span>
          </a>
        </div>
        <dl className="facts-list">
          <div>
            <dt>Datum</dt>
            <dd>8. Dezember 2026, ganztägig</dd>
          </div>
          <div>
            <dt>Ort</dt>
            <dd>{VENUE}</dd>
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
          <p className="eyebrow-sc">Young Business Leadership Academy</p>
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
            <ContactCard
              key={person.email}
              person={person}
              heading={<SplitName name={person.name} />}
            />
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

    <section className="band house" id="bisher">
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

    <section className="band house" id="ueber">
      <div className="wrap">
        <TegFounders />
      </div>
    </section>
  </div>
);

export default SupplyChainConference;
