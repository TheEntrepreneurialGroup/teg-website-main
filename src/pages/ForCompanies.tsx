/**
 * For executives (route "/for-companies"). Two kinds of reader arrive here:
 * executives who came from a conference page and want to attend, and
 * executives who might contribute. The page serves them in that order:
 *
 *  1. Cover: what TEG is for executives, with the one action (contribute).
 *  2. Events: guests are sent on to /events; whoever wants to speak, propose
 *     an event or host one writes to Jonathan. Recent speakers in compact form.
 *  3. Contributing to the Academy: what TEG stands for (Buddenberg), what
 *     became of his students, then the ways to pass something on.
 *  4. Contact, then a few questions (kept for search and AI answers).
 *
 * Same art direction as the About page (landing.css). Rendered in German at
 * /for-companies and in English at /en/for-companies; both are prerendered.
 */
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./editorial.css";
import "./landing.css";
import { PageLang, useLocalizePath, usePageLang } from "../i18n/pageLang";
import { FaqSchema } from "../seo/EventSchema";

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

const MAIL = "jonathan.babelotzky@teg-ev.de";

/** A ready-made e-mail, so nobody has to work out what to write. */
const mailto = (mail: { subject: string; body: string }) =>
  `mailto:${MAIL}?subject=${encodeURIComponent(mail.subject)}&body=${encodeURIComponent(mail.body)}`;

const copy = {
  de: {
    quoteOpen: "„",
    quoteClose: "“",
    cover: {
      audience: "Für Führungskräfte",
      since: "München, seit 1986",
      title: "Führungskräfte bilden ihre Nachfolger aus.",
      lede: "Seit 1986 geben in München Führungskräfte aus Konzernen und Mittelstand weiter, was sie über Führung wissen: an ausgewählte Studierende und Berufseinsteiger, die später selbst Verantwortung tragen. Den Anfang machte der Vorstandsvorsitzende der Deutschen BP.",
      cta: "So wirken Sie mit",
      guest: "Als Gast teilnehmen",
      photoAlt:
        "Panel mit Führungskräften vor Publikum im smartvillage Bogenhausen",
    },
    events: {
      title:
        "Sie möchten als Gast bei einer unserer Veranstaltungen teilnehmen?",
      text: "Mehrmals im Jahr laden wir Führungskräfte aus Konzernen und Mittelstand zu Konferenzen und Abenden nach München ein.",
      link: "Zu den Konferenzen und Abenden",
      speakersLabel: "Zuletzt haben bei uns gesprochen",
      box: {
        title: "Sprechen, vorschlagen, Gastgeber sein",
        text: "Sie möchten selbst sprechen, eine Veranstaltung vorschlagen oder Ihr Haus als Gastgeber anbieten? Schreiben Sie Jonathan Babelotzky.",
        link: "E-Mail schreiben",
        mail: {
          subject: "Veranstaltungen der TEG",
          body: "Guten Tag Herr Babelotzky,\n\nich möchte (bitte auswählen): als Speaker mitwirken / eine Veranstaltung vorschlagen / unser Haus als Gastgeber anbieten.\n\nUnternehmen und Funktion: \nThema oder Idee: \n\nMit freundlichen Grüßen\n",
        },
      },
    },
    origin: {
      title: "Wofür die TEG steht",
      stance:
        "Für verantwortungsvollen Kapitalismus. Und für Führungskräfte, die ein Unternehmen nicht nur verwalten, sondern das Ruder herumreißen, wenn es darauf ankommt.",
      story: [
        "Am 2. Januar 1976, morgens um acht, übernahm Dr. Hellmuth Buddenberg die Deutsche BP. Das Unternehmen hatte 276 Millionen DM verloren, ein Drittel des Grundkapitals war aufgezehrt. Die Branche spottete, der Oberbuchhalter wolle Konzernchef spielen.",
        "Buddenberg erklärte das „Ende des Empire-Denkens“. Jeder Bereichsleiter sollte fortan handeln wie ein selbständiger Unternehmer und für sein Ergebnis einstehen. Umbau und Sanierung trieb er mit einer solchen Energie voran, dass er in seinem Unternehmen bald den Spitznamen „Zackzack“ bekam.",
        "Zweieinhalb Jahre nach seinem Antritt war die Deutsche BP saniert und vor Esso und Shell die größte Ölgesellschaft des Landes. Vom Oberbuchhalter sprach niemand mehr: Wirtschaftsjournalisten wählten ihn zweimal unter die drei besten Manager des Jahres.",
      ],
      close:
        "Nach dem Turnaround der Deutschen BP war die TEG sein nächstes Projekt. 1986 stieß er sie in München an, um eine neue Generation von Führungskräften auszubilden, die ebenso beeindruckende Leistungen vollbringt und Verantwortung für die deutsche Wirtschaft übernimmt. Auf dem Foto steht er im Kreis der ersten Studierenden. Buddenberg starb 2003. Sein Erbe besteht in der TEG fort und wird von vielen engagierten Führungskräften weitergeführt.",
      sources: "Quellen: Der Spiegel, 29. August 1976 und 24. Februar 1980",
      photoAlt:
        "Dr. Hellmuth Buddenberg in der Mitte einer Gruppe von Studierenden der TEG aus den Gründungsjahren",
      caption:
        "Dr. Hellmuth Buddenberg und die erste Generation der TEG-Studierenden",
    },
    heirs: {
      title: "Was aus seinen Studenten wurde",
      text: [
        "Zwei der jungen Männer auf dem Foto: Ulrich Beck, später Global Vice President Finance der Airbus Group und CFO der Airbus Joint Ventures. Und Volker Maiborn, heute Aufsichtsrat von MaibornWolff.",
        "Sie sind keine Ausnahme. Von gut 300 Absolventen stehen heute 41 im Top-Management großer Konzerne, 40 führen ein mittelständisches Unternehmen. Aufgenommen werden je Halbjahr 8 bis 15 von einer dreistelligen Zahl Bewerber.",
      ],
    },
    engage: {
      title: "Was Sie weitergeben können",
      intro:
        "Zwei Wege, an der Ausbildung mitzuwirken. Zu jedem liegt eine kurze E-Mail bereit, in der Sie nur drei Zeilen ergänzen.",
      workshopPhotoAlt:
        "Workshop mit einer kleinen Gruppe von Teilnehmern der Academy",
      workshop: {
        title: "Workshop",
        text: "Ein Samstag mit einer kleinen Gruppe unserer Teilnehmer, vier bis acht Stunden, zu einem Thema aus Ihrem Führungsalltag. Viele Führungskräfte nutzen dafür Folien und Case Studies aus der Führungskräfteentwicklung ihres Hauses. Vereinfachen müssen Sie nichts: Unsere Teilnehmer setzen sich intensiv mit disziplinarischer Führung auseinander und kommen auf diesem Niveau mit.",
        alsoIntro: "Ebenso möglich sind:",
        also: [
          "eine Fragerunde, für die wir zu Beginn Fragen sammeln,",
          "eine Reflexion, etwa über Führung als introvertierte Person,",
          "oder ein ungelöstes Problem aus Ihrem Unternehmen, an dem die Gruppe arbeitet.",
        ],
        link: "Workshop anbieten",
        mail: {
          subject: "Workshop für die Young Business Leadership Academy",
          body: "Guten Tag Herr Babelotzky,\n\nich kann mir vorstellen, einen Workshop für die Teilnehmer der Young Business Leadership Academy zu halten.\n\nUnternehmen und Funktion: \nMögliches Thema: \nZeitraum, der mir passt: \n\nMit freundlichen Grüßen\n",
        },
      },
      mentoring: {
        title: "Mentoring",
        text: "Sie begleiten einen Teilnehmer, der in Ihrem Fachgebiet Verantwortung übernimmt, als Ansprechpartner aus der Praxis.",
        link: "Mentor werden",
        mail: {
          subject: "Mentoring bei der TEG",
          body: "Guten Tag Herr Babelotzky,\n\nich kann mir vorstellen, einen Teilnehmer der Young Business Leadership Academy als Mentor zu begleiten.\n\nUnternehmen und Funktion: \nMein Fachgebiet: \n\nMit freundlichen Grüßen\n",
        },
      },
    },
    faq: {
      title: "Fragen von Führungskräften",
      items: [
        {
          q: "Wie kann ich mich als Führungskraft in München für Nachwuchsführungskräfte engagieren?",
          a: "Bei der TEG mit einem Workshop für die Teilnehmer der Young Business Leadership Academy (ein Samstag, vier bis acht Stunden, eine kleine Gruppe) oder als Mentor für einen Teilnehmer. Auf unseren Konferenzen und Abenden können Sie außerdem sprechen oder Gastgeber sein. Wie viel Zeit Sie geben, entscheiden Sie.",
        },
        {
          q: "Können wir Teilnehmer der TEG Young Business Leadership Academy für unser Unternehmen gewinnen?",
          a: "Ja, für Aufgaben nah an der Führung: als Assistenz einer Bereichsleitung, als Chief of Staff oder mit direkter Zulassung zu einem Management-Trainee-Programm. Viele Führungskräfte haben bei uns genau diese Besetzung gefunden: Menschen, die die Aufgabe als Vorbereitung auf die eigene Führungsrolle verstehen und sich schon heute mit den Fragen beschäftigen, die Ihren Alltag bestimmen.",
        },
        {
          q: "Wie werden wir Gastgeber oder Förderer einer Veranstaltung?",
          a: "Schreiben Sie an Jonathan Babelotzky, Leitung Strategie und Partnerschaften. In einem kurzen Gespräch klären wir, welche Veranstaltung zu Ihrem Haus passt.",
        },
      ],
    },
    contact: {
      quote:
        "Schreiben Sie mir zwei Zeilen. Ich melde mich persönlich, und wir klären in einem kurzen Gespräch Thema und Termin.",
      role: "Leitung Strategie und Partnerschaften",
      link: "E-Mail schreiben",
      mail: {
        subject: "Mitwirken bei der TEG",
        body: "Guten Tag Herr Babelotzky,\n\nich möchte mehr über die Mitwirkung bei der TEG erfahren.\n\nUnternehmen und Funktion: \nWoran ich Interesse habe: \n\nMit freundlichen Grüßen\n",
      },
    },
  },
  en: {
    quoteOpen: "“",
    quoteClose: "”",
    cover: {
      audience: "For Executives",
      since: "Munich, since 1986",
      title: "Executives train their successors.",
      lede: "Since 1986, executives from large corporations and mid-sized companies have passed on in Munich what they know about leadership: to selected students and young professionals who will later carry responsibility themselves. The first was the Chairman of the Board of Deutsche BP.",
      cta: "How to contribute",
      guest: "Attend as a guest",
      photoAlt:
        "Panel of executives before an audience at smartvillage Bogenhausen",
    },
    events: {
      title: "Would you like to attend one of our events as a guest?",
      text: "Several times a year we invite executives from large corporations and mid-sized companies to conferences and evenings in Munich.",
      link: "To the conferences and evenings",
      speakersLabel: "Recent speakers",
      box: {
        title: "Speak, propose, host",
        text: "Would you like to speak yourself, propose an event or offer your company as host? Write to Jonathan Babelotzky.",
        link: "Write an e-mail",
        mail: {
          subject: "TEG events",
          body: "Dear Mr Babelotzky,\n\nI would like to (please choose): speak at an event / propose an event / offer our company as host.\n\nCompany and role: \nTopic or idea: \n\nKind regards\n",
        },
      },
    },
    origin: {
      title: "What TEG stands for",
      stance:
        "For responsible capitalism. And for executives who do not merely administer a company but turn it around when it matters.",
      story: [
        "On 2 January 1976, at eight in the morning, Dr. Hellmuth Buddenberg took over Deutsche BP. The company had lost 276 million Deutschmarks; a third of its share capital was gone. The industry scoffed that the chief bookkeeper wanted to play at being a chief executive.",
        "Buddenberg declared the “end of empire thinking”. From then on, every head of division was to act like an independent entrepreneur and answer for his result. He drove the restructuring and the turnaround with such energy that before long his own company nicknamed him “Zackzack”.",
        "Two and a half years after he took over, Deutsche BP was restored to health and, ahead of Esso and Shell, the largest oil company in the country. No one spoke of the chief bookkeeper any more: business journalists twice voted him among the three best managers of the year.",
      ],
      close:
        "After the turnaround of Deutsche BP, TEG was his next project. He initiated it in Munich in 1986 to train a new generation of executives who achieve equally impressive things and take responsibility for German business. In the photograph he stands among the first students. Buddenberg died in 2003. His legacy lives on in TEG and is carried forward by many committed executives.",
      sources: "Sources: Der Spiegel, 29 August 1976 and 24 February 1980",
      photoAlt:
        "Dr. Hellmuth Buddenberg at the centre of a group of TEG students in the founding years",
      caption:
        "Dr. Hellmuth Buddenberg and the first generation of TEG students",
    },
    heirs: {
      title: "What became of his students",
      text: [
        "Two of the young men in the photograph: Ulrich Beck, later Global Vice President Finance of the Airbus Group and CFO of the Airbus Joint Ventures. And Volker Maiborn, today on the supervisory board of MaibornWolff.",
        "They are no exception. Of some 300 graduates, 41 are now in the top management of major corporations and 40 lead a mid-sized company. Each half-year we admit 8 to 15 from a three-digit number of applicants.",
      ],
    },
    engage: {
      title: "What you can pass on",
      intro:
        "Two ways to contribute to the programme. Each comes with a short e-mail in which you only add three lines.",
      workshopPhotoAlt: "Workshop with a small group of Academy participants",
      workshop: {
        title: "Workshop",
        text: "A Saturday with a small group of our participants, four to eight hours, on a subject from your daily work as a leader. Many executives draw on slides and case studies from their company’s leadership development. There is no need to simplify anything: our participants engage closely with disciplinary leadership and keep pace at that level.",
        alsoIntro: "Equally welcome are:",
        also: [
          "a Q&A session, for which we gather questions at the outset,",
          "a reflection, for instance on leading as an introvert,",
          "or an unresolved problem from your company for the group to work on.",
        ],
        link: "Offer a workshop",
        mail: {
          subject: "Workshop for the Young Business Leadership Academy",
          body: "Dear Mr Babelotzky,\n\nI could imagine holding a workshop for the participants of the Young Business Leadership Academy.\n\nCompany and role: \nPossible topic: \nPeriod that suits me: \n\nKind regards\n",
        },
      },
      mentoring: {
        title: "Mentoring",
        text: "You accompany a participant who is taking on responsibility in your field, as a counterpart from practice.",
        link: "Become a mentor",
        mail: {
          subject: "Mentoring at TEG",
          body: "Dear Mr Babelotzky,\n\nI could imagine mentoring a participant of the Young Business Leadership Academy.\n\nCompany and role: \nMy field: \n\nKind regards\n",
        },
      },
    },
    faq: {
      title: "Questions executives ask",
      items: [
        {
          q: "How can I, as an executive in Munich, support the next generation of leaders?",
          a: "At TEG with a workshop for the participants of the Young Business Leadership Academy (a Saturday, four to eight hours, a small group) or as a mentor to a participant. You can also speak at our conferences and evenings or host one. How much time you give is yours to decide.",
        },
        {
          q: "Can we win participants of the TEG Young Business Leadership Academy for our company?",
          a: "Yes, for roles close to leadership: as assistant to a head of division, as chief of staff, or with direct admission to a management trainee programme. Many executives have found exactly that with us: people who see the role as preparation for leading themselves and who already work on the questions that shape your day.",
        },
        {
          q: "How do we become host or patron of an event?",
          a: "Write to Jonathan Babelotzky, Strategy and Partnerships Lead. In a short conversation we work out which event suits your company.",
        },
      ],
    },
    contact: {
      quote:
        "Write me two lines. I will reply personally, and in a short conversation we settle topic and date.",
      role: "Strategy and Partnerships Lead",
      link: "Write an e-mail",
      mail: {
        subject: "Contributing at TEG",
        body: "Dear Mr Babelotzky,\n\nI would like to learn more about contributing at TEG.\n\nCompany and role: \nWhat I am interested in: \n\nKind regards\n",
      },
    },
  },
} satisfies Record<PageLang, unknown>;

const ForCompanies: React.FC = () => {
  const lang = usePageLang();
  const localize = useLocalizePath();
  const t = copy[lang];

  return (
    <div className="ev landing exec" lang={lang}>
      <FaqSchema items={t.faq.items} />
      <section className="dark">
        <div className="cover">
          <div className="cover-text">
            <p className="when">
              <span>{t.cover.audience}</span>
              <span>{t.cover.since}</span>
            </p>
            <h1>{t.cover.title}</h1>
            <p className="lede">{t.cover.lede}</p>
            <div className="exec-actions">
              <a className="exec-cta" href="#mitwirken">
                {t.cover.cta} <ArrowRight size={16} />
              </a>
              <p className="more">
                <a href="#veranstaltungen">{t.cover.guest}</a>
              </p>
            </div>
          </div>
          <div className="cover-photo">
            <img src="/for-companies/cover-panel.webp" alt={t.cover.photoAlt} />
          </div>
        </div>
      </section>

      <section className="exec-events" id="veranstaltungen">
        <div className="wrap">
          <div className="exec-events-guest">
            <h2>{t.events.title}</h2>
            <p>{t.events.text}</p>
            <Link className="text-link" to={localize("/events")}>
              {t.events.link} <ArrowRight size={15} />
            </Link>
          </div>
          <aside className="exec-events-box">
            <h3>{t.events.box.title}</h3>
            <p>{t.events.box.text}</p>
            <a className="text-link" href={mailto(t.events.box.mail)}>
              {t.events.box.link} <ArrowRight size={15} />
            </a>
          </aside>
          <div className="exec-events-speakers">
            <h3>{t.events.speakersLabel}</h3>
            <ul className="exec-speakers">
              {pastSpeakers.map((speaker) => (
                <li key={speaker.name}>
                  <b>{speaker.name}</b>
                  <span>{speaker.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="exec-origin" id="mitwirken">
        <div className="wrap">
          <figure>
            <div className="crop">
              <img
                src="/for-students/commitment/ancient-group.avif"
                alt={t.origin.photoAlt}
                loading="lazy"
              />
            </div>
            <figcaption>{t.origin.caption}</figcaption>
          </figure>
          <div>
            <h2 className="section-title">{t.origin.title}</h2>
            <p className="stance">{t.origin.stance}</p>
            <div className="story">
              {t.origin.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="close">{t.origin.close}</p>
            </div>
            <p className="sources">{t.origin.sources}</p>
            <div className="heirs">
              <h3>{t.heirs.title}</h3>
              {t.heirs.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section exec-engage" id="wege">
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
              <h3>{t.engage.workshop.title}</h3>
              <p>{t.engage.workshop.text}</p>
              <p className="exec-also">{t.engage.workshop.alsoIntro}</p>
              <ul>
                {t.engage.workshop.also.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="text-link" href={mailto(t.engage.workshop.mail)}>
                {t.engage.workshop.link} <ArrowRight size={15} />
              </a>
            </div>
          </article>
          <article className="exec-mentoring">
            <h3>{t.engage.mentoring.title}</h3>
            <p>{t.engage.mentoring.text}</p>
            <a className="text-link" href={mailto(t.engage.mentoring.mail)}>
              {t.engage.mentoring.link} <ArrowRight size={15} />
            </a>
          </article>
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
              <a href={mailto(t.contact.mail)}>{t.contact.link}</a>
              <a href={`mailto:${MAIL}`}>{MAIL}</a>
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

      <section className="chapter-section exec-faq" id="fragen">
        <div className="wrap">
          <h2 className="section-title">{t.faq.title}</h2>
          <div className="exec-faq-list">
            {t.faq.items.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForCompanies;
