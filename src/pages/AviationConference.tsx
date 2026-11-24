/**
 * Aviation Management Conference 2027 — sub-page of /events.
 * Placeholder until programme, speakers and registration are confirmed;
 * then extend it along the lines of SupplyChainConference.tsx.
 *
 * Rendered in German at /conferences/… and in English at /en/conferences/….
 * Both are prerendered, so every word below ships as static HTML.
 */
import React from "react";
import "./editorial.css";
import {
  ContactCard,
  ContactPerson,
  TegFounders,
} from "../components/events/EditorialParts";
import LanguageNotice from "../components/LanguageNotice";
import { PageLang, usePageLang } from "../i18n/pageLang";
import EventSchema from "../seo/EventSchema";

const copy = {
  de: {
    when: ["3. Juni 2027", "München"],
    lede: "Programm, Speaker und Anmeldung geben wir in Kürze an dieser Stelle bekannt.",
    contactHeading: "Kontakt",
    contactText:
      "Für Partnerschaften und Speaker-Anfragen zu dieser Konferenz.",
    partner: "Partner",
    contactRoles: [
      "Organisation und Programm",
      "Partnerschaften und Speaker-Anfragen",
    ],
  },
  en: {
    when: ["3 June 2027", "Munich"],
    lede: "Programme, speakers and registration will be announced here shortly.",
    contactHeading: "Contact",
    contactText: "For partnerships and speaker enquiries for this conference.",
    partner: "Partner",
    contactRoles: ["Organisation and programme", "Partnerships and speakers"],
  },
} satisfies Record<PageLang, unknown>;

/**
 * Official partner of the conference. The logo carries the full name in
 * small type, so it runs taller than the default 40px to stay legible.
 */
const partner = {
  name: "Deutsche Gesellschaft für Luft- und Raumfahrt – Lilienthal-Oberth e.V. (DGLR)",
  url: "https://www.dglr.de/",
  logo: "/events/aviation/partners/dglr.webp",
};

/** Same order as `contactRoles` in `copy`. */
const contacts: Omit<ContactPerson, "role">[] = [
  {
    name: "Markus Ramsauer",
    photo: "/events/enterprise-sales/team/ramsauer.webp",
    email: "markus.ramsauer@teg-ev.de",
    linkedin: "https://www.linkedin.com/in/markus-ramsauer-0488763a5/",
  },
  {
    name: "Jonathan Babelotzky",
    photo: "/for-companies/contact/jonathan.avif",
    email: "jonathan.babelotzky@teg-ev.de",
    linkedin: "https://www.linkedin.com/in/jonathan-babelotzky/",
  },
];

const AviationConference: React.FC = () => {
  const lang = usePageLang();
  const t = copy[lang];
  return (
    <div className="ev" lang={lang}>
      <EventSchema ids={["aviation-management-conference-2027"]} lang={lang} />
      <section className="hero">
        <LanguageNotice kind="conference" />
        <div className="wrap">
          <p className="when">
            {t.when.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </p>
          <h1 className="title">Aviation Management Conference</h1>
          <p className="lede">{t.lede}</p>
        </div>
      </section>

      <section className="partners" aria-label={t.partner}>
        <div className="wrap">
          <p>{t.partner}</p>
          <div className="row">
            <a href={partner.url} target="_blank" rel="noopener noreferrer">
              <img
                src={partner.logo}
                alt={partner.name}
                style={{ height: 56 }}
              />
            </a>
          </div>
        </div>
      </section>

      <section className="band flush" id="kontakt">
        <div className="wrap org">
          <div className="org-text">
            <h2 className="h2">{t.contactHeading}</h2>
            <p>{t.contactText}</p>
          </div>
          <div className="contacts">
            {contacts.map((person, index) => (
              <ContactCard
                key={person.email}
                person={{ ...person, role: t.contactRoles[index] }}
              />
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
};

export default AviationConference;
