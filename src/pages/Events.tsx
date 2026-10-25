import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./events-editorial.css";
import {
  ContactCard,
  ContactPerson,
  TegFounders,
} from "../components/events/EditorialParts";
import {
  EveningEvent,
  LUMA_CALENDAR_URL,
  pastConferences,
  pastEveningEvents,
  upcomingConferences,
  upcomingEveningEvents,
} from "./eventsData";

const contact: ContactPerson = {
  name: "Jonathan Babelotzky",
  role: "Leitung Strategie und Partnerschaften",
  photo: "/for-companies/contact/jonathan.avif",
  email: "jonathan.babelotzky@teg-ev.de",
  linkedin: "https://www.linkedin.com/in/jonathan-babelotzky/",
};

const EveningItem: React.FC<{ event: EveningEvent }> = ({ event }) => (
  <li className={`evening${event.image ? "" : " no-thumb"}`}>
    <div className="meta">
      <span>{event.date}</span>
      {event.location && <span>{event.location}</span>}
    </div>
    {event.image && (
      <div className="thumb">
        <img src={event.image} alt={event.imageAlt ?? ""} loading="lazy" />
      </div>
    )}
    <div className="body">
      {event.format && <span className="format">{event.format}</span>}
      <h3>{event.title}</h3>
      {event.topic && <p className="topic-line">{event.topic}</p>}
      {event.description && <p>{event.description}</p>}
      {event.guests && event.guests.length > 0 && (
        <ul className="guests" aria-label="Speaker">
          {event.guests.map((guest) => (
            <li key={guest.name}>
              <b>{guest.name}</b>
              <span>
                {[guest.position, guest.company].filter(Boolean).join(", ")}
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
          Zum Event auf Luma
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

const AgendaRow: React.FC<{ item: AgendaItem }> = ({ item }) => {
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
          Programm <ArrowRight size={15} />
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

const Events: React.FC = () => (
  <div className="ev" lang="de">
    <section className="band stage page-top" id="kommend">
      <div className="wrap">
        <h1 className="sr-only">
          Konferenzen und Abendveranstaltungen der TEG
        </h1>

        {leadConference && (
          <Link className="lead" to={leadConference.page}>
            <p className="lead-eyebrow">Nächste Konferenz</p>
            <h2>{leadConference.title}</h2>
            {leadConference.theme && (
              <p className="lead-theme">{leadConference.theme}</p>
            )}
            <p className="lead-meta">
              {[
                leadConference.date,
                leadConference.location,
                ...(leadConference.details ?? []),
              ]
                .filter(Boolean)
                .join(" · ")}
            </p>
            <span className="lead-cta">
              Programm ansehen <ArrowRight size={16} />
            </span>
          </Link>
        )}

        {moreConferences.length > 0 && (
          <>
            <h2 className="agenda-label">Weitere Konferenzen</h2>
            <ul className="agenda">
              {moreConferences.map((conf) => (
                <AgendaRow
                  key={conf.id}
                  item={{
                    ...conf,
                    theme: conf.theme ?? "Programm und Speaker folgen in Kürze",
                  }}
                />
              ))}
            </ul>
          </>
        )}

        <h2 className="agenda-label">
          Du bekommst von uns nicht genug? Unsere nächsten Abendveranstaltungen:
        </h2>
        {upcomingEveningEvents.length > 0 ? (
          <ul className="agenda minor">
            {upcomingEveningEvents.map((event) => (
              <AgendaRow
                key={event.id}
                item={{
                  id: event.id,
                  date: event.date,
                  location: event.location,
                  title: event.title,
                  theme:
                    event.topic ??
                    event.description ??
                    "Speaker und Ort folgen in Kürze",
                }}
              />
            ))}
          </ul>
        ) : (
          <p className="agenda-empty">
            Der nächste Abend wird in Kürze im{" "}
            <a
              href={LUMA_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Kalender der TEG auf Luma
            </a>{" "}
            angekündigt.
          </p>
        )}
      </div>
    </section>

    <section className="band" id="bisher">
      <div className="wrap">
        <div className="head">
          <h2 className="h2 quiet">Bisherige Events</h2>
        </div>

        <h3 className="subhead first">Konferenzen</h3>
        <div className="past">
          {pastConferences.map((conf) => (
            <article className="conf" key={conf.id}>
              <div className="photos">
                {conf.photos.map((photo) => (
                  <img
                    key={photo.src}
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                  />
                ))}
              </div>
              <span className="year">
                {conf.date}, {conf.location}
              </span>
              <h3>{conf.title}</h3>
              <p>{conf.note}</p>
            </article>
          ))}
        </div>

        <h3 className="subhead">Abendveranstaltungen</h3>
        <ul className="evenings">
          {pastEveningEvents.map((event) => (
            <EveningItem key={event.id} event={event} />
          ))}
        </ul>
      </div>
    </section>

    <section className="band" id="kontakt">
      <div className="wrap org">
        <div className="org-text">
          <h2 className="h2">Kontakt</h2>
          <p>
            Für Partnerschaften, Speaker-Anfragen und Einladungen zu unseren
            Formaten.
          </p>
        </div>
        <div className="contacts single">
          <ContactCard person={contact} />
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

export default Events;
