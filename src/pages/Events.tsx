/**
 * /events overview: conferences, evening events and past events.
 * Rendered in German at /events and in English at /en/events. Both are
 * prerendered, so every word below ships as static HTML.
 */
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./editorial.css";
import {
  ContactCard,
  ContactPerson,
  TegFounders,
} from "../components/events/EditorialParts";
import LanguageNotice from "../components/LanguageNotice";
import { PageLang, useLocalizePath, usePageLang } from "../i18n/pageLang";
import {
  EveningEvent,
  LUMA_CALENDAR_URL,
  localize,
  pastConferences,
  pastEveningEvents,
  Text,
  upcomingConferences,
  upcomingEveningEvents,
} from "./eventsData";

const copy = {
  de: {
    title: "Konferenzen und Abendveranstaltungen der TEG",
    nextConference: "Nächste Konferenz",
    viewProgramme: "Programm ansehen",
    programme: "Programm",
    moreConferences: "Weitere Konferenzen",
    conferencePending: "Programm und Speaker folgen in Kürze",
    eveningHeading:
      "Du bekommst von uns nicht genug? Unsere nächsten Abendveranstaltungen:",
    eveningPending: "Speaker und Ort folgen in Kürze",
    eveningEmptyBefore: "Der nächste Abend wird in Kürze im",
    eveningEmptyLink: "Kalender der TEG auf Luma",
    eveningEmptyAfter: " angekündigt.",
    pastHeading: "Bisherige Events",
    pastConferences: "Konferenzen",
    pastEvenings: "Abendveranstaltungen",
    speakers: "Speaker",
    luma: "Zum Event auf Luma",
    contactHeading: "Kontakt",
    contactText:
      "Für Partnerschaften, Speaker-Anfragen und Einladungen zu unseren Formaten.",
    contactRole: "Leitung Strategie und Partnerschaften",
  },
  en: {
    title: "TEG conferences and evening events",
    nextConference: "Next conference",
    viewProgramme: "View programme",
    programme: "Programme",
    moreConferences: "Further conferences",
    conferencePending: "Programme and speakers to be announced shortly",
    eveningHeading: "Evening events",
    eveningPending: "Speakers and venue to be announced shortly",
    eveningEmptyBefore: "The next evening will be announced shortly in the",
    eveningEmptyLink: "TEG calendar on Luma",
    eveningEmptyAfter: ".",
    pastHeading: "Past events",
    pastConferences: "Conferences",
    pastEvenings: "Evening events",
    speakers: "Speakers",
    luma: "View the event on Luma",
    contactHeading: "Contact",
    contactText:
      "For partnerships, speaker enquiries and invitations to our events.",
    contactRole: "Director of Strategy and Partnerships",
  },
} satisfies Record<PageLang, unknown>;

type Copy = (typeof copy)[PageLang];

const contact: Omit<ContactPerson, "role"> = {
  name: "Jonathan Babelotzky",
  photo: "/for-companies/contact/jonathan.avif",
  email: "jonathan.babelotzky@teg-ev.de",
  linkedin: "https://www.linkedin.com/in/jonathan-babelotzky/",
};

const EveningItem: React.FC<{
  event: EveningEvent;
  lang: PageLang;
  t: Copy;
}> = ({ event, lang, t }) => (
  <li className={`evening${event.image ? "" : " no-thumb"}`}>
    <div className="meta">
      <span>{localize(event.date, lang)}</span>
      {event.location && <span>{localize(event.location, lang)}</span>}
    </div>
    {event.image && (
      <div className="thumb">
        <img
          src={event.image}
          alt={event.imageAlt ? localize(event.imageAlt, lang) : ""}
          loading="lazy"
        />
      </div>
    )}
    <div className="body">
      {event.format && (
        <span className="format">{localize(event.format, lang)}</span>
      )}
      <h3>{localize(event.title, lang)}</h3>
      {event.topic && (
        <p className="topic-line">{localize(event.topic, lang)}</p>
      )}
      {event.description && <p>{localize(event.description, lang)}</p>}
      {event.guests && event.guests.length > 0 && (
        <ul className="guests" aria-label={t.speakers}>
          {event.guests.map((guest) => (
            <li key={guest.name}>
              <b>{guest.name}</b>
              <span>
                {[guest.position, guest.company]
                  .filter((text) => text !== undefined)
                  .map((text) => localize(text, lang))
                  .filter(Boolean)
                  .join(", ")}
              </span>
            </li>
          ))}
        </ul>
      )}
      {event.link && (
        <a
          className="link"
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.luma}
        </a>
      )}
    </div>
  </li>
);

interface AgendaItem {
  id: string;
  date: string;
  location?: string;
  title: string;
  theme: string;
  details?: string[];
  /** Internal page; when set, the whole row links there. */
  page?: string;
}

const AgendaRow: React.FC<{ item: AgendaItem; t: Copy }> = ({ item, t }) => {
  const content = (
    <>
      <p className="when-col">
        <span>{item.date}</span>
        {item.location && <span>{item.location}</span>}
      </p>
      <div className="what">
        <h3>{item.title}</h3>
        <p className="theme">{item.theme}</p>
        {item.details && item.details.length > 0 && (
          <p className="details">{item.details.join(" · ")}</p>
        )}
      </div>
      {item.page && (
        <span className="go" aria-hidden="true">
          {t.programme} <ArrowRight size={15} />
        </span>
      )}
    </>
  );
  return (
    <li>
      {item.page ? (
        <Link className="agenda-row" to={item.page}>
          {content}
        </Link>
      ) : (
        <div className="agenda-row">{content}</div>
      )}
    </li>
  );
};

const [leadConference, ...moreConferences] = upcomingConferences;

const Events: React.FC = () => {
  const lang = usePageLang();
  const localizePath = useLocalizePath();
  const t = copy[lang];
  const text = (value: Text) => localize(value, lang);
  return (
    <div className="ev overview" lang={lang}>
      <section className="band stage page-top" id="kommend">
        <LanguageNotice kind="events" />
        <div className="wrap">
          <h1 className="sr-only">{t.title}</h1>

          {leadConference && (
            <Link className="lead" to={localizePath(leadConference.page)}>
              <p className="lead-eyebrow">{t.nextConference}</p>
              <h2>{text(leadConference.title)}</h2>
              {leadConference.theme && (
                <p className="lead-theme">{text(leadConference.theme)}</p>
              )}
              <p className="lead-meta">
                {[
                  leadConference.date,
                  leadConference.location,
                  ...(leadConference.details ?? []),
                ]
                  .filter((value) => value !== undefined)
                  .map(text)
                  .filter(Boolean)
                  .join(" · ")}
              </p>
              <span className="lead-cta">
                {t.viewProgramme} <ArrowRight size={16} />
              </span>
            </Link>
          )}

          {moreConferences.length > 0 && (
            <>
              <h2 className="agenda-label">{t.moreConferences}</h2>
              <ul className="agenda">
                {moreConferences.map((conf) => (
                  <AgendaRow
                    key={conf.id}
                    t={t}
                    item={{
                      id: conf.id,
                      date: text(conf.date),
                      location: conf.location && text(conf.location),
                      title: text(conf.title),
                      theme: conf.theme
                        ? text(conf.theme)
                        : t.conferencePending,
                      details: conf.details?.map(text),
                      page: localizePath(conf.page),
                    }}
                  />
                ))}
              </ul>
            </>
          )}

          <h2 className="agenda-label">{t.eveningHeading}</h2>
          {upcomingEveningEvents.length > 0 ? (
            <ul className="agenda minor">
              {upcomingEveningEvents.map((event) => (
                <AgendaRow
                  key={event.id}
                  t={t}
                  item={{
                    id: event.id,
                    date: text(event.date),
                    location: event.location && text(event.location),
                    title: text(event.title),
                    theme: text(
                      event.topic ?? event.description ?? t.eveningPending,
                    ),
                    page: event.page && localizePath(event.page),
                  }}
                />
              ))}
            </ul>
          ) : (
            <p className="agenda-empty">
              {t.eveningEmptyBefore}{" "}
              <a
                href={LUMA_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.eveningEmptyLink}
              </a>
              {t.eveningEmptyAfter}
            </p>
          )}
        </div>
      </section>

      <section className="band" id="bisher">
        <div className="wrap">
          <div className="head">
            <h2 className="h2 quiet">{t.pastHeading}</h2>
          </div>

          <h3 className="subhead first">{t.pastConferences}</h3>
          <div className="past">
            {pastConferences.map((conf) => (
              <article className="conf" key={conf.id}>
                <div className="photos">
                  {conf.photos.map((photo) => (
                    <img
                      key={photo.src}
                      src={photo.src}
                      alt={text(photo.alt)}
                      loading="lazy"
                    />
                  ))}
                </div>
                <span className="year">
                  {text(conf.date)}, {text(conf.location)}
                </span>
                <h3>{text(conf.title)}</h3>
                <p>{text(conf.note)}</p>
              </article>
            ))}
          </div>

          <h3 className="subhead">{t.pastEvenings}</h3>
          <ul className="evenings">
            {pastEveningEvents.map((event) => (
              <EveningItem key={event.id} event={event} lang={lang} t={t} />
            ))}
          </ul>
        </div>
      </section>

      <section className="band" id="kontakt">
        <div className="wrap org">
          <div className="org-text">
            <h2 className="h2">{t.contactHeading}</h2>
            <p>{t.contactText}</p>
          </div>
          <div className="contacts single">
            <ContactCard person={{ ...contact, role: t.contactRole }} />
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
};

export default Events;
