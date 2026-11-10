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
    contactRole: "Partnerschaften und Speaker-Anfragen",
  },
  en: {
    when: ["3 June 2027", "Munich"],
    lede: "Programme, speakers and registration will be announced here shortly.",
    contactHeading: "Contact",
    contactText: "For partnerships and speaker enquiries for this conference.",
    contactRole: "Partnerships and speakers",
  },
} satisfies Record<PageLang, unknown>;

const contact: Omit<ContactPerson, "role"> = {
  name: "Jonathan Babelotzky",
  photo: "/for-companies/contact/jonathan.avif",
  email: "jonathan.babelotzky@teg-ev.de",
  linkedin: "https://www.linkedin.com/in/jonathan-babelotzky/",
};

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

      <section className="band flush" id="kontakt">
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

export default AviationConference;
