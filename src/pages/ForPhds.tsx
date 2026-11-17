/**
 * PhD Business Leadership Academy (route "/for-phds"): the counterpart to
 * the Young Business Leadership Academy for doctoral candidates and
 * postdocs. The programme is not designed yet, so the page promises no
 * format or schedule. It answers the reader's one question, "what do I take
 * away?", and asks for nothing but a non-binding e-mail:
 *
 *  1. Cover: where this leads (from research to leadership) and how.
 *  2. What you take away: three gains, each set against what a doctorate
 *     leaves open.
 *  3. Who teaches at TEG: figures and names instead of claims.
 *  4. Contact: two lines to Jonathan for information and the waiting list.
 *
 * Same art direction as the About page (landing.css). Rendered in German at
 * /for-phds and in English at /en/for-phds; both are prerendered.
 */
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./editorial.css";
import "./landing.css";
import { PageLang, useLocalizePath, usePageLang } from "../i18n/pageLang";
import { pastSpeakers } from "./pastSpeakers";

const MAIL = "jonathan.babelotzky@teg-ev.de";

/** A ready-made e-mail, so nobody has to work out what to write. */
const mailto = (mail: { subject: string; body: string }) =>
  `mailto:${MAIL}?subject=${encodeURIComponent(mail.subject)}&body=${encodeURIComponent(mail.body)}`;

const copy = {
  de: {
    quoteOpen: "„",
    quoteClose: "“",
    cover: {
      audience: "Für Promovierende und Postdocs",
      name: "PhD Business Leadership Academy",
      title: "Aus der Forschung in die Führung.",
      lede: "In der PhD Business Leadership Academy lernen Promovierende und Promovierte von erfahrenen Führungskräften aus Konzernen und Mittelstand, wie Unternehmen geführt werden. Im persönlichen Austausch und neben der Forschung.",
      cta: "Auf die Warteliste",
      more: "Was Sie mitnehmen",
      photoAlt:
        "Panel mit Führungskräften vor Publikum bei einer Veranstaltung der TEG",
    },
    gains: {
      title: "Was Sie mitnehmen",
      intro:
        "Eine Promotion bildet für die Forschung aus. Wer danach Verantwortung in einem Unternehmen übernehmen will, braucht drei Dinge, die an der Universität selten zu haben sind.",
      items: [
        {
          title: "Ein klares Bild vom eigenen Marktwert",
          text: "Wer promoviert, kann mehr, als im Lebenslauf steht. Was diese Fähigkeiten in einem Unternehmen wert sind, sagen Ihnen Führungskräfte, die selbst einstellen und befördern.",
        },
        {
          title: "Mentoren und Kontakte außerhalb der Wissenschaft",
          text: "Auf Fachkonferenzen kommen auch die Industrievertreter meist aus der Wissenschaft. Bei uns treffen Sie Führungskräfte mit ganz anderen Werdegängen, im kleinen Kreis und im direkten Gespräch.",
        },
        {
          title: "Wirtschaft aus erster Hand",
          text: "Strategie, Finanzen, Personalverantwortung: Sie lernen es von denen, die es täglich entscheiden. Näher an der Praxis als ein MBA und ohne die Forschung dafür zu unterbrechen.",
        },
      ],
      // Text and links alternate; a `to` marks a link.
      today: [
        { text: "Bisher können PhDs an unseren " },
        { text: "Konferenzen und Abendveranstaltungen", to: "/events" },
        {
          text: " teilnehmen und sich dort mit Führungskräften austauschen. Ebenso steht ihnen gemeinsam mit Studierenden und Berufseinsteigern unsere 18-monatige ",
        },
        {
          text: "Young Business Leadership Academy (YBLA)",
          to: "/for-students",
        },
        {
          text: " offen. Wegen der Nachfrage planen wir für PhDs ein eigenes Format, das speziell auf den Transfer von der Wissenschaft in die Wirtschaft ausgelegt ist.",
        },
      ],
      // Closes the paragraph; the link opens the ready-made e-mail.
      waitlist: {
        before: " Wenn Sie zum Start dabei sein möchten, ",
        link: "setzen wir Sie gern auf die Warteliste",
        after: ".",
      },
    },
    proof: {
      title: "Wer bei der TEG unterrichtet",
      intro:
        "Bei uns bilden Führungskräfte selbst aus, in Workshops und als Mentoren. Seit 1986 tun sie das in der Young Business Leadership Academy für Studierende und Berufseinsteiger. Die geplante PhD Business Leadership Academy öffnet diesen Zugang für alle, die promovieren oder promoviert haben.",
      facts: [
        ["1986", "gegründet von Vorständen elf deutscher Unternehmen"],
        ["über 300", "Absolventen der Young Business Leadership Academy"],
        ["41", "Absolventen heute im Top-Management von Konzernen"],
      ],
      speakersLabel: "Zuletzt haben bei uns gesprochen",
    },
    contact: {
      quote:
        "Die erste Kohorte ist in Vorbereitung. Schreiben Sie mir zwei Zeilen, dann erhalten Sie weitere Informationen und einen Platz auf der Warteliste.",
      role: "Leitung Strategie und Partnerschaften",
      link: "E-Mail schreiben",
      mail: {
        subject: "PhD Business Leadership Academy",
        body: "Guten Tag Herr Babelotzky,\n\nich interessiere mich für die PhD Business Leadership Academy. Bitte senden Sie mir weitere Informationen und setzen Sie mich auf die Warteliste.\n\nFachgebiet und Universität oder Institut: \nStand (Promotion läuft, abgeschlossen, Postdoc): \n\nMit freundlichen Grüßen\n",
      },
    },
  },
  en: {
    quoteOpen: "“",
    quoteClose: "”",
    cover: {
      audience: "For PhD candidates and postdocs",
      name: "PhD Business Leadership Academy",
      title: "From research to leadership.",
      lede: "In the PhD Business Leadership Academy, doctoral candidates and postdocs learn from experienced executives of large corporations and mid-sized companies how companies are led. In personal exchange and alongside their research.",
      cta: "Join the waiting list",
      more: "What you take away",
      photoAlt: "Panel of executives before an audience at a TEG event",
    },
    gains: {
      title: "What you take away",
      intro:
        "A doctorate trains you for research. Those who want to take on responsibility in a company afterwards need three things that are rarely on offer at a university.",
      items: [
        {
          title: "A clear picture of your market value",
          text: "Those who complete a doctorate can do more than their CV shows. What these abilities are worth in a company, you hear from executives who hire and promote themselves.",
        },
        {
          title: "Mentors and contacts outside academia",
          text: "At academic conferences, even the industry representatives mostly come from academia. With us you meet executives with entirely different careers, in a small circle and in direct conversation.",
        },
        {
          title: "Business at first hand",
          text: "Strategy, finance, responsibility for people: you learn it from those who decide on it every day. Closer to practice than an MBA, and without interrupting your research for it.",
        },
      ],
      today: [
        { text: "Until now, PhDs have been able to attend our " },
        { text: "conferences and evening events", to: "/events" },
        {
          text: " and talk with executives there. Our 18-month ",
        },
        {
          text: "Young Business Leadership Academy (YBLA)",
          to: "/for-students",
        },
        {
          text: " is likewise open to them, together with students and young professionals. Because of the demand, we are planning a format of its own for PhDs, designed specifically for the transfer from academia to business.",
        },
      ],
      waitlist: {
        before: " If you would like to be there from the start, ",
        link: "we will gladly put you on the waiting list",
        after: ".",
      },
    },
    proof: {
      title: "Who teaches at TEG",
      intro:
        "With us, executives do the teaching themselves, in workshops and as mentors. Since 1986 they have done so in the Young Business Leadership Academy for students and young professionals. The planned PhD Business Leadership Academy opens that access to everyone working towards a doctorate or holding one.",
      facts: [
        ["1986", "founded by board members of eleven German companies"],
        ["over 300", "graduates of the Young Business Leadership Academy"],
        ["41", "graduates now in the top management of corporations"],
      ],
      speakersLabel: "Recent speakers",
    },
    contact: {
      quote:
        "The first cohort is in preparation. Write me two lines and you will receive further information and a place on the waiting list.",
      role: "Strategy and Partnerships Lead",
      link: "Write an e-mail",
      mail: {
        subject: "PhD Business Leadership Academy",
        body: "Dear Mr Babelotzky,\n\nI am interested in the PhD Business Leadership Academy. Please send me further information and put me on the waiting list.\n\nField and university or institute: \nStage (doctorate in progress, completed, postdoc): \n\nKind regards\n",
      },
    },
  },
} satisfies Record<PageLang, unknown>;

const ForPhds: React.FC = () => {
  const lang = usePageLang();
  const localize = useLocalizePath();
  const t = copy[lang];

  return (
    <div className="ev landing about phd" lang={lang}>
      <section className="dark">
        <div className="cover">
          <div className="cover-text">
            <p className="when">
              <span>{t.cover.audience}</span>
              <span>{t.cover.name}</span>
            </p>
            <h1>{t.cover.title}</h1>
            <p className="lede">{t.cover.lede}</p>
            <div className="exec-actions">
              <a className="exec-cta" href={mailto(t.contact.mail)}>
                {t.cover.cta} <ArrowRight size={16} />
              </a>
              <p className="more">
                <a href="#mitnehmen">{t.cover.more}</a>
              </p>
            </div>
          </div>
          <div className="cover-photo">
            <img src="/for-companies/cover-panel.webp" alt={t.cover.photoAlt} />
          </div>
        </div>
      </section>

      <section className="chapter-section" id="mitnehmen">
        <div className="wrap">
          <div className="chapter-head">
            <div>
              <h2 className="section-title">{t.gains.title}</h2>
            </div>
            <p className="section-intro">{t.gains.intro}</p>
          </div>
          <div className="phd-points">
            {t.gains.items.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="phd-today">
            {t.gains.today.map((part) =>
              "to" in part ? (
                <Link key={part.text} to={localize(part.to)}>
                  {part.text}
                </Link>
              ) : (
                part.text
              ),
            )}
            {t.gains.waitlist.before}
            <a href={mailto(t.contact.mail)}>{t.gains.waitlist.link}</a>
            {t.gains.waitlist.after}
          </p>
        </div>
      </section>

      <section className="chapter-section dark" id="teg">
        <div className="wrap">
          <div className="chapter-head">
            <div>
              <h2 className="section-title">{t.proof.title}</h2>
            </div>
            <p className="section-intro">{t.proof.intro}</p>
          </div>
          <dl className="phd-facts">
            {t.proof.facts.map(([value, label]) => (
              <div key={label}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
          <h3 className="phd-speakers-label">{t.proof.speakersLabel}</h3>
          <ul className="exec-speakers">
            {pastSpeakers.map((speaker) => (
              <li key={speaker.name}>
                <b>{speaker.name}</b>
                <span>{speaker.role}</span>
              </li>
            ))}
          </ul>
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
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForPhds;
