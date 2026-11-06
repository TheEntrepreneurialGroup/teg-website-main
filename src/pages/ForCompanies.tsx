/**
 * For executives (route "/for-companies"). Same art direction as the About
 * page (landing.css): split cover, chapters in a black/white rhythm, photos
 * with panels set over their edge, no overlines, motion only on the cover.
 *
 * Rendered in German at /for-companies and in English at /en/for-companies.
 * Both are prerendered, so every word below ships as static HTML.
 */
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./editorial.css";
import "./landing.css";
import { PageLang, useLocalizePath, usePageLang } from "../i18n/pageLang";

/** Roles are given in their original English in both editions. */
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

const testimonialPeople = [
  {
    author: "Prof. Dr. h.c. Roland Berger",
    img: "/for-companies/testimonials/roland-berger.avif",
  },
  {
    author: "Johannes Pruchnow",
    img: "/for-companies/testimonials/johannes-pruchnow.avif",
  },
  {
    author: "Dr. Bernd Wiemann",
    img: "/for-companies/testimonials/bernd-wiedemann.avif",
  },
  {
    author: "Bodo Donauer",
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

const copy = {
  de: {
    quoteOpen: "„",
    quoteClose: "“",
    cover: {
      audience: "Für Führungskräfte",
      since: "München, seit 1986",
      title: "Ein Abend unter Führungskräften.",
      lede: "Mehrmals im Jahr laden wir Führungskräfte aus Konzernen und Mittelstand nach München ein. Einige sprechen, die meisten kommen zum Zuhören und für die Gespräche danach. Vorbereitet und geleitet werden diese Abende von Studierenden und Berufseinsteigern, die bei uns eine Führungsausbildung durchlaufen.",
      dates: "Kommende Termine",
      engage: "Wege der Mitwirkung",
      contact: "Kontakt",
      photoAlt:
        "Panel mit Führungskräften vor Publikum im smartvillage Bogenhausen",
    },
    speakers: {
      title: "Wer bei uns spricht",
      intro:
        "Auf der Bühne stehen Partner, Geschäftsführer und Bereichsleiter. Im Publikum sitzen Menschen in vergleichbaren Positionen. Die Runden sind bewusst klein, die Gästeliste stellen wir selbst zusammen.",
      listTitle: "Zuletzt bei uns zu Gast",
      calendar: "Zum Veranstaltungskalender",
    },
    academy: {
      photoAlt: "Workshop der Young Business Leadership Academy",
      title: "Wer die Abende organisiert",
      text: [
        "Die Veranstaltungen sind das Praxisprojekt unserer Young Business Leadership Academy. Über 18 Monate, parallel zu Studium oder Beruf, besuchen die Teilnehmer Workshops mit erfahrenen Führungskräften, arbeiten in festen Teams und leiten am Ende ein eigenes Projekt, zum Beispiel eine dieser Veranstaltungen. Alle sechs Monate beginnt eine neue Kohorte. Aus jeweils über hundert Bewerbungen wählen wir 8 bis 15 Teilnehmer aus.",
        "Das Programm gibt es seit 1986. Von gut 300 Absolventen sind heute 41 im Top-Management großer Konzerne und 40 in der Geschäftsführung mittelständischer Unternehmen.",
      ],
    },
    engage: {
      title: "Wo wir Unterstützung suchen",
      intro:
        "Es gibt vier Wege, sich einzubringen. Wie viel Zeit Sie investieren, entscheiden Sie.",
      workshopPhotoAlt:
        "Workshop mit einer kleinen Gruppe von Teilnehmern der Academy",
      workshop: {
        title: "YBLA Workshop",
        text: "Ein Samstag mit einer kleinen Gruppe unserer Teilnehmer, vier bis acht Stunden, mit einem Praxisimpuls oder einem Herzensthema aus Ihrem Führungsalltag. Viele Führungskräfte greifen dafür auf Folien und Case Studies aus der internen Führungskräfteentwicklung ihres Unternehmens zurück. Vereinfachen müssen Sie nichts: Unsere Teilnehmer setzen sich intensiv mit disziplinarischer Führung auseinander und kommen auf diesem Niveau mit.",
        alsoIntro: "Ebenso möglich sind:",
        also: [
          "eine Q&A-Session, für die wir zu Beginn Fragen sammeln, die Sie der Reihe nach beantworten,",
          "eine Reflexion, etwa über Führung als introvertierte Person,",
          "oder ein offenes, ungelöstes Problem aus Ihrem Unternehmen als Case Study, zu dem die Gruppe Denkanstöße liefert.",
        ],
      },
      ways: [
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
      ],
      write: "Schreiben Sie mir gerne direkt",
    },
    testimonials: [
      {
        quote:
          "Unternehmer zu sein heißt Verantwortung zu übernehmen. TEG eröffnet Studenten die Möglichkeit eigene Ideen umzusetzen und an diesen Herausforderungen zu wachsen.",
        position: "Unternehmer und Gründer Roland Berger GmbH",
      },
      {
        quote:
          "Wir brauchen in Deutschland mehr Eigeninitiative und mehr Unternehmertum, um das Land wieder nach vorn zu bringen. Dafür engagiert sich TEG. Ein wichtiger Beitrag, von dem alle Beteiligten profitieren.",
        position: "Principal, McKinsey & Company",
      },
      {
        quote:
          "Nachdem ich das Team zufälligerweise an einem Samstagabend um 23 Uhr arbeitend in ihrem Büro gesehen habe, dachte ich mir, dass diese Initiative es wert ist, unterstützt zu werden.",
        position: "CEO Vodafone Pilotentwicklung",
      },
      {
        quote:
          "Die Studenten zeichnen sich durch ein hohes Maß an Professionalität und Engagement aus. Solche Initiativen sind essentiell für die Ausbildung zukünftiger Führungskräfte.",
        position: "Ehem. Leiter Fahrwerkentwicklung, BMW Group",
      },
    ],
    logosLabel: "Unternehmen im Netzwerk der TEG",
    contact: {
      quote:
        "Wenn Sie mehr wissen möchten, schreiben Sie mir einfach. Ich melde mich persönlich.",
      role: "Leitung Strategie und Partnerschaften",
    },
  },
  en: {
    quoteOpen: "“",
    quoteClose: "”",
    cover: {
      audience: "For Executives",
      since: "Munich, since 1986",
      title: "An evening among executives.",
      lede: "Several times a year, we invite executives from large corporations and mid-sized companies to Munich. A few speak; most come to listen, and for the conversations that follow. These evenings are prepared and led by students and young professionals who are completing their leadership education with us.",
      dates: "Upcoming dates",
      engage: "Ways to contribute",
      contact: "Contact",
      photoAlt:
        "Panel of executives before an audience at smartvillage Bogenhausen",
    },
    speakers: {
      title: "Who takes the stage",
      intro:
        "On stage are partners, managing directors and heads of division. In the audience sit people in comparable positions. The circles are deliberately small, and we compose the guest list ourselves.",
      listTitle: "Recent guests",
      calendar: "View the events calendar",
    },
    academy: {
      photoAlt: "Workshop of the Young Business Leadership Academy",
      title: "Who organises the evenings",
      text: [
        "The events are the practical project of our Young Business Leadership Academy. Over 18 months, alongside their studies or work, participants attend workshops with experienced executives, work in fixed teams and finally lead a project of their own, such as one of these events. A new cohort begins every six months. From more than a hundred applications each time, we select 8 to 15 participants.",
        "The programme has existed since 1986. Of some 300 graduates, 41 now hold top-management positions in major corporations and 40 serve as managing directors of mid-sized companies.",
      ],
    },
    engage: {
      title: "Where we welcome your support",
      intro:
        "There are four ways to take part. How much time you give is yours to decide.",
      workshopPhotoAlt: "Workshop with a small group of Academy participants",
      workshop: {
        title: "YBLA Workshop",
        text: "A Saturday with a small group of our participants, four to eight hours, built around a practical session or a subject close to your heart from your daily work as a leader. Many executives draw on slides and case studies from their company’s internal leadership development. There is no need to simplify anything: our participants engage closely with disciplinary leadership and keep pace at that level.",
        alsoIntro: "Equally welcome are:",
        also: [
          "a Q&A session, for which we gather questions at the outset and you answer them in turn,",
          "a reflection, for instance on leading as an introvert,",
          "or an open, unresolved problem from your company as a case study, on which the group offers fresh perspectives.",
        ],
      },
      ways: [
        {
          title: "Talk",
          text: "A talk or a seat on a panel at one of our events, before peers from other companies.",
        },
        {
          title: "Mentoring",
          text: "You stand by a participant who is taking on responsibility in your field, as a counterpart from practice.",
        },
        {
          title: "Host or Patron",
          text: "You open your premises for an evening, or support an event financially.",
        },
      ],
      write: "You are welcome to write to me directly",
    },
    testimonials: [
      {
        quote:
          "Being an entrepreneur means taking responsibility. TEG gives students the opportunity to put their own ideas into practice and to grow through these challenges.",
        position: "Entrepreneur and Founder, Roland Berger GmbH",
      },
      {
        quote:
          "Germany needs more initiative and more entrepreneurship to move the country forward again. That is what TEG stands for. An important contribution from which everyone involved benefits.",
        position: "Principal, McKinsey & Company",
      },
      {
        quote:
          "After happening to see the team at work in their office at eleven o’clock on a Saturday night, I decided that this initiative deserved support.",
        position: "CEO Vodafone Pilotentwicklung",
      },
      {
        quote:
          "The students are distinguished by a high degree of professionalism and commitment. Initiatives of this kind are essential to the education of future leaders.",
        position: "Former Head of Chassis Development, BMW Group",
      },
    ],
    logosLabel: "Companies in the TEG network",
    contact: {
      quote:
        "If you would like to know more, simply write to me. I will reply personally.",
      role: "Head of Strategy and Partnerships",
    },
  },
} satisfies Record<PageLang, unknown>;

const ForCompanies: React.FC = () => {
  const lang = usePageLang();
  const localize = useLocalizePath();
  const t = copy[lang];
  const testimonials = testimonialPeople.map((person, i) => ({
    ...person,
    ...t.testimonials[i],
  }));
  const [lead, ...voices] = testimonials;

  return (
    <div className="ev landing exec" lang={lang}>
      <section className="dark">
        <div className="cover">
          <div className="cover-text">
            <p className="when">
              <span>{t.cover.audience}</span>
              <span>{t.cover.since}</span>
            </p>
            <h1>{t.cover.title}</h1>
            <p className="lede">{t.cover.lede}</p>
            <p className="more">
              <Link to={localize("/events")}>{t.cover.dates}</Link>
              <a href="#mitwirken">{t.cover.engage}</a>
              <a href="#kontakt">{t.cover.contact}</a>
            </p>
          </div>
          <div className="cover-photo">
            <img src="/for-companies/cover-panel.webp" alt={t.cover.photoAlt} />
          </div>
        </div>
      </section>

      <section className="chapter-section" id="speaker">
        <div className="wrap">
          <div className="chapter-head">
            <div>
              <h2 className="section-title">{t.speakers.title}</h2>
            </div>
            <p className="section-intro">{t.speakers.intro}</p>
          </div>
          <h3 className="exec-list-title">{t.speakers.listTitle}</h3>
          <ul className="exec-speakers">
            {pastSpeakers.map((speaker) => (
              <li key={speaker.name}>
                <b>{speaker.name}</b>
                <span>{speaker.role}</span>
              </li>
            ))}
          </ul>
          <p className="exec-more">
            <Link className="text-link" to={localize("/events")}>
              {t.speakers.calendar} <ArrowRight size={15} />
            </Link>
          </p>
        </div>
      </section>

      <section className="selection" id="academy">
        <img
          className="selection-photo"
          src="/shared/ybla-meeting.jpeg"
          alt={t.academy.photoAlt}
          loading="lazy"
        />
        <div className="wrap">
          <div className="selection-panel">
            <h2 className="section-title">{t.academy.title}</h2>
            {t.academy.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="chapter-section exec-engage" id="mitwirken">
        <div className="wrap">
          <div className="chapter-head">
            <div>
              <h2 className="section-title">{t.engage.title}</h2>
            </div>
            <p className="section-intro">{t.engage.intro}</p>
          </div>

          <article className="exec-workshop">
            <div className="exec-workshop-photo">
              <img
                src="/for-companies/how-to-lead.a.team.jpeg"
                alt={t.engage.workshopPhotoAlt}
                loading="lazy"
              />
            </div>
            <div className="exec-workshop-text">
              <span className="pillar-n">01</span>
              <h3>{t.engage.workshop.title}</h3>
              <p>{t.engage.workshop.text}</p>
              <p className="exec-also">{t.engage.workshop.alsoIntro}</p>
              <ul>
                {t.engage.workshop.also.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>

          <div className="exec-ways">
            {t.engage.ways.map((way, i) => (
              <article key={way.title}>
                <span className="pillar-n">
                  {String(i + 2).padStart(2, "0")}
                </span>
                <h3>{way.title}</h3>
                <p>{way.text}</p>
              </article>
            ))}
          </div>

          <p className="exec-more">
            <a className="text-link" href="#kontakt">
              {t.engage.write} <ArrowRight size={15} />
            </a>
          </p>
        </div>
      </section>

      <section className="dark exec-voices" id="stimmen">
        <div className="wrap">
          <figure className="exec-lead-quote">
            <img src={lead.img} alt={lead.author} loading="lazy" />
            <div>
              <blockquote>
                {t.quoteOpen}
                {lead.quote}
                {t.quoteClose}
              </blockquote>
              <figcaption>
                <b>{lead.author}</b>
                <span>{lead.position}</span>
              </figcaption>
            </div>
          </figure>
          <div className="exec-quotes">
            {voices.map((voice) => (
              <figure key={voice.author}>
                <blockquote>
                  {t.quoteOpen}
                  {voice.quote}
                  {t.quoteClose}
                </blockquote>
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

      <section className="exec-logos" aria-label={t.logosLabel}>
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
              {t.quoteOpen}
              {t.contact.quote}
              {t.quoteClose}
            </blockquote>
            <p className="exec-contact-name">
              <b>Jonathan Babelotzky</b>
              <span>{t.contact.role}</span>
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
};

export default ForCompanies;
