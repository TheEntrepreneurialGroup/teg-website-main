/**
 * Aviation Management Conference 2027 — sub-page of /events.
 * Placeholder until programme, speakers and registration are confirmed;
 * then extend it along the lines of SupplyChainConference.tsx.
 */
import React from "react";
import "./events-editorial.css";
import {
  ContactCard,
  ContactPerson,
  TegFounders,
} from "../components/events/EditorialParts";

const contact: ContactPerson = {
  name: "Jonathan Babelotzky",
  role: "Partnerschaften und Speaker-Anfragen",
  photo: "/for-companies/contact/jonathan.avif",
  email: "jonathan.babelotzky@teg-ev.de",
  linkedin: "https://www.linkedin.com/in/jonathan-babelotzky/",
};

const AviationConference: React.FC = () => (
  <div className="ev" lang="de">
    <section className="hero">
      <div className="wrap">
        <p className="when">
          <span>19. Mai 2027</span>
        </p>
        <h1 className="title">Aviation Management Conference</h1>
        <p className="lede">
          Programm, Speaker und Anmeldung geben wir in Kürze an dieser Stelle
          bekannt.
        </p>
      </div>
    </section>

    <section className="band flush" id="kontakt">
      <div className="wrap org">
        <div className="org-text">
          <h2 className="h2">Kontakt</h2>
          <p>Für Partnerschaften und Speaker-Anfragen zu dieser Konferenz.</p>
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

export default AviationConference;
