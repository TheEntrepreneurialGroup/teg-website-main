/**
 * For executives (route "/for-companies"). Same art direction as the About
 * page (landing.css): split cover, chapters in a black/white rhythm, photos
 * with panels set over their edge, no overlines, motion only on the cover.
 */
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./editorial.css";
import "./landing.css";

const pastSpeakers = [
  { name: "Florian Bauer", role: "Senior Partner, McKinsey & Company" },
  { name: "Marcus Hartmann", role: "Senior Partner, Roland Berger" },
  { name: "Jennifer Treiber-Ruckenbrod", role: "Global CMO, MINI" },
  { name: "Andrea Martin", role: "CTO DACH, IBM" },
  { name: "Georg Doll", role: "CTO Automotive & Mobility, Microsoft" },
  {
    name: "Hansjörg Briegel",
    role: "Vice President Ecosystem Development, Intel",
  },
  {
    name: "Jan Goetz",
    role: "Co-Founder & Managing Director, IQM Quantum Computers",
  },
  { name: "Osman Agirbas", role: "Managing Director, Interhyp Group" },
];

const workshop = {
  title: "YBLA Workshop",
  text: "Ein Samstag mit einer kleinen Gruppe unserer Teilnehmer, vier bis acht Stunden, mit einem Praxisimpuls oder einem Herzensthema aus Ihrem Führungsalltag. Viele Führungskräfte greifen dafür auf Folien und Case Studies aus der internen Führungskräfteentwicklung ihres Unternehmens zurück. Vereinfachen müssen Sie nichts: Unsere Teilnehmer setzen sich intensiv mit disziplinarischer Führung auseinander und kommen auf diesem Niveau mit.",
  alsoIntro: "Ebenso möglich sind:",
  also: [
    "eine Q&A-Session, für die wir zu Beginn Fragen sammeln, die Sie der Reihe nach beantworten,",
    "eine Reflexion, etwa über Führung als introvertierte Person,",
    "oder ein offenes, ungelöstes Problem aus Ihrem Unternehmen als Case Study, zu dem die Gruppe Denkanstöße liefert.",
  ],
};

const engagements = [
  {
    title: "Vortrag",
    text: "Ein Vortrag oder eine Panel-Teilnahme bei einer unserer Veranstaltungen, vor Kollegen aus anderen Unternehmen.",
  },
  {
    title: "Mentoring",
    text: "Sie stehen einem Teilnehmer, der in Ihrem Fachgebiet Verantwortung übernimmt, als Ansprechpartner aus der Praxis zur Seite.",
  },
  {
    title: "Gastgeber oder Förderer",
    text: "Sie stellen für einen Abend Ihre Räume zur Verfügung oder unterstützen eine Veranstaltung finanziell.",
  },
];

const testimonials = [
  {
    quote:
      "Unternehmer zu sein heißt Verantwortung zu übernehmen. TEG eröffnet Studenten die Möglichkeit eigene Ideen umzusetzen und an diesen Herausforderungen zu wachsen.",
    author: "Prof. Dr. h.c. Roland Berger",
    position: "Unternehmer und Gründer Roland Berger GmbH",
    img: "/for-companies/testimonials/roland-berger.avif",
  },
  {
    quote:
      "Wir brauchen in Deutschland mehr Eigeninitiative und mehr Unternehmertum, um das Land wieder nach vorn zu bringen. Dafür engagiert sich TEG. Ein wichtiger Beitrag, von dem alle Beteiligten profitieren.",
    author: "Johannes Pruchnow",
    position: "Principal, McKinsey & Company",
    img: "/for-companies/testimonials/johannes-pruchnow.avif",
  },
  {
    quote:
      "Nachdem ich das Team zufälligerweise an einem Samstagabend um 23 Uhr arbeitend in ihrem Büro gesehen habe, dachte ich mir, dass diese Initiative es wert ist, unterstützt zu werden.",
    author: "Dr. Bernd Wiemann",
    position: "CEO Vodafone Pilotentwicklung",
    img: "/for-companies/testimonials/bernd-wiedemann.avif",
  },
  {
    quote:
      "Die Studenten zeichnen sich durch ein hohes Maß an Professionalität und Engagement aus. Solche Initiativen sind essentiell für die Ausbildung zukünftiger Führungskräfte.",
    author: "Bodo Donauer",
    position: "Ehem. Leiter Fahrwerkentwicklung, BMW Group",
    img: "/for-companies/testimonials/bodo-donauer.avif",
  },
];

const logos = [
  { name: "BMW", src: "/shared/logos/bmw.avif" },
  { name: "McKinsey", src: "/shared/logos/mckinsey.avif" },
  { name: "BCG", src: "/shared/logos/bcg.avif" },
  { name: "Airbus", src: "/shared/logos/airbus.svg" },
  { name: "Siemens", src: "/shared/logos/siemens.svg" },
  { name: "Roland Berger", src: "/shared/logos/roland-berger.svg" },
  { name: "HypoVereinsbank", src: "/shared/logos/hypovereinsbank.svg" },
  { name: "Ruhrgas", src: "/shared/logos/ruhrgas.avif" },
  { name: "Vodafone", src: "/shared/logos/vodafone.avif" },
];

const [lead, ...voices] = testimonials;

const ForCompanies: React.FC = () => (
  <div className="ev landing exec" lang="de">
    <section className="dark">
      <div className="cover">
        <div className="cover-text">
          <p className="when">
            <span>Für Führungskräfte</span>
            <span>München, seit 1986</span>
          </p>
          <h1>Ein Abend unter Führungskräften.</h1>
          <p className="lede">
            Mehrmals im Jahr laden wir Führungskräfte aus Konzernen und
            Mittelstand nach München ein. Einige sprechen, die meisten kommen
            zum Zuhören und für die Gespräche danach. Vorbereitet und geleitet
            werden diese Abende von Studierenden und Berufseinsteigern, die bei
            uns eine Führungsausbildung durchlaufen.
          </p>
          <p className="more">
            <Link to="/events">Kommende Termine</Link>
            <a href="#mitwirken">Wege der Mitwirkung</a>
            <a href="#kontakt">Kontakt</a>
          </p>
        </div>
        <div className="cover-photo">
          <img
            src="/for-companies/cover-panel.webp"
            alt="Panel mit Führungskräften vor Publikum im smartvillage Bogenhausen"
          />
        </div>
      </div>
    </section>

    <section className="chapter-section" id="speaker">
      <div className="wrap">
        <div className="chapter-head">
          <div>
            <h2 className="section-title">Wer bei uns spricht</h2>
          </div>
          <p className="section-intro">
            Auf der Bühne stehen Partner, Geschäftsführer und Bereichsleiter. Im
            Publikum sitzen Menschen in vergleichbaren Positionen. Die Runden
            sind bewusst klein, die Gästeliste stellen wir selbst zusammen.
          </p>
        </div>
        <h3 className="exec-list-title">Zuletzt bei uns zu Gast</h3>
        <ul className="exec-speakers">
          {pastSpeakers.map((speaker) => (
            <li key={speaker.name}>
              <b>{speaker.name}</b>
              <span>{speaker.role}</span>
            </li>
          ))}
        </ul>
        <p className="exec-more">
          <Link className="text-link" to="/events">
            Zum Veranstaltungskalender <ArrowRight size={15} />
          </Link>
        </p>
      </div>
    </section>

    <section className="selection" id="academy">
      <img
        className="selection-photo"
        src="/shared/ybla-meeting.jpeg"
        alt="Workshop der Young Business Leadership Academy"
        loading="lazy"
      />
      <div className="wrap">
        <div className="selection-panel">
          <h2 className="section-title">Wer die Abende organisiert</h2>
          <p>
            Die Veranstaltungen sind das Praxisprojekt unserer Young Business
            Leadership Academy. Über 18 Monate, parallel zu Studium oder Beruf,
            besuchen die Teilnehmer Workshops mit erfahrenen Führungskräften,
            arbeiten in festen Teams und leiten am Ende ein eigenes Projekt, zum
            Beispiel eine dieser Veranstaltungen. Alle sechs Monate beginnt eine
            neue Kohorte. Aus jeweils über hundert Bewerbungen wählen wir 8 bis
            15 Teilnehmer aus.
          </p>
          <p>
            Das Programm gibt es seit 1986. Von gut 300 Absolventen sind heute
            41 im Top-Management großer Konzerne und 40 in der Geschäftsführung
            mittelständischer Unternehmen.
          </p>
        </div>
      </div>
    </section>

    <section className="chapter-section exec-engage" id="mitwirken">
      <div className="wrap">
        <div className="chapter-head">
          <div>
            <h2 className="section-title">Wo wir Unterstützung suchen</h2>
          </div>
          <p className="section-intro">
            Es gibt vier Wege, sich einzubringen. Wie viel Zeit Sie investieren,
            entscheiden Sie.
          </p>
        </div>

        <article className="exec-workshop">
          <div className="exec-workshop-photo">
            <img
              src="/for-companies/how-to-lead.a.team.jpeg"
              alt="Workshop mit einer kleinen Gruppe von Teilnehmern der Academy"
              loading="lazy"
            />
          </div>
          <div className="exec-workshop-text">
            <span className="pillar-n">01</span>
            <h3>{workshop.title}</h3>
            <p>{workshop.text}</p>
            <p className="exec-also">{workshop.alsoIntro}</p>
            <ul>
              {workshop.also.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>

        <div className="exec-ways">
          {engagements.map((way, i) => (
            <article key={way.title}>
              <span className="pillar-n">{String(i + 2).padStart(2, "0")}</span>
              <h3>{way.title}</h3>
              <p>{way.text}</p>
            </article>
          ))}
        </div>

        <p className="exec-more">
          <a className="text-link" href="#kontakt">
            Schreiben Sie mir gerne direkt <ArrowRight size={15} />
          </a>
        </p>
      </div>
    </section>

    <section className="dark exec-voices" id="stimmen">
      <div className="wrap">
        <figure className="exec-lead-quote">
          <img src={lead.img} alt={lead.author} loading="lazy" />
          <div>
            <blockquote>„{lead.quote}“</blockquote>
            <figcaption>
              <b>{lead.author}</b>
              <span>{lead.position}</span>
            </figcaption>
          </div>
        </figure>
        <div className="exec-quotes">
          {voices.map((voice) => (
            <figure key={voice.author}>
              <blockquote>„{voice.quote}“</blockquote>
              <figcaption>
                <img src={voice.img} alt="" loading="lazy" />
                <span>
                  <b>{voice.author}</b>
                  {voice.position}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    <section
      className="exec-logos"
      aria-label="Unternehmen im Netzwerk der TEG"
    >
      <div className="ticker">
        <div className="ticker-track">
          {[0, 1].map((run) => (
            <ul key={run} aria-hidden={run === 1 ? true : undefined}>
              {logos.map((logo) => (
                <li key={logo.name}>
                  <img src={logo.src} alt={logo.name} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>

    <section className="exec-contact" id="kontakt">
      <div className="wrap">
        <img
          className="exec-contact-photo"
          src="/for-companies/contact/jonathan.avif"
          alt="Jonathan Babelotzky"
          loading="lazy"
        />
        <div className="exec-contact-text">
          <blockquote>
            „Wenn Sie mehr wissen möchten, schreiben Sie mir einfach. Ich melde
            mich persönlich.“
          </blockquote>
          <p className="exec-contact-name">
            <b>Jonathan Babelotzky</b>
            <span>Leitung Strategie und Partnerschaften</span>
          </p>
          <p className="more">
            <a href="mailto:jonathan.babelotzky@teg-ev.de">
              jonathan.babelotzky@teg-ev.de
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-babelotzky/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default ForCompanies;
