import React, { useEffect, useId, useRef, useState } from "react";

const YBLA_TIP =
  "18-monatiges Entwicklungsprogramm der TEG für Nachwuchsführungskräfte. Dazu gehören Workshops mit erfahrenen Führungskräften und die Projektleitung eines Formats der TEG, für das die Teilnehmer Speaker, Partner und Gäste selbst gewinnen. Über 300 Absolventen, darunter 41 in Top-Level-Führungspositionen in Konzernen.";

/** Inline term with a tooltip; keyboard reachable. */
export const Term: React.FC<{ children: React.ReactNode; tip: string }> = ({
  children,
  tip,
}) => {
  const id = useId();
  return (
    <span className="term" tabIndex={0} aria-describedby={id}>
      {children}
      <span className="tip" role="tooltip" id={id}>
        {tip}
      </span>
    </span>
  );
};

export const YblaTerm: React.FC = () => (
  <Term tip={YBLA_TIP}>Young Business Leadership Academy</Term>
);

const CopyButton: React.FC<{ value: string }> = ({ value }) => {
  const [label, setLabel] = useState("Kopieren");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setLabel("Kopiert");
    } catch {
      setLabel("Nicht kopiert");
    }
    window.setTimeout(() => setLabel("Kopieren"), 1600);
  };
  return (
    <button className="copy" type="button" onClick={copy}>
      {label}
    </button>
  );
};

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

interface CalendlyApi {
  initInlineWidget: (options: {
    url: string;
    parentElement: HTMLElement;
  }) => void;
}

/**
 * Calendly inline booking. Initialised explicitly so it also renders after
 * client-side navigation, when widget.js has already scanned the page.
 */
export const CalendlyInline: React.FC<{ url: string; title: string }> = ({
  url,
  title,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const parent = ref.current;
    if (!parent) return;
    const init = () => {
      const calendly = (window as unknown as { Calendly?: CalendlyApi })
        .Calendly;
      if (!calendly || !ref.current) return;
      parent.innerHTML = "";
      calendly.initInlineWidget({ url, parentElement: parent });
    };
    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT}"]`,
    );
    if (!script) {
      script = document.createElement("script");
      script.src = CALENDLY_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
    if ((window as unknown as { Calendly?: CalendlyApi }).Calendly) {
      init();
      return;
    }
    script.addEventListener("load", init);
    return () => script?.removeEventListener("load", init);
  }, [url]);

  return <div ref={ref} className="calendly" aria-label={title} />;
};

export interface ContactPerson {
  name: string;
  role: string;
  photo: string;
  email: string;
  phone?: string;
  linkedin?: string;
}

export const ContactCard: React.FC<{ person: ContactPerson }> = ({
  person,
}) => (
  <article className="contact">
    <img src={person.photo} alt={person.name} loading="lazy" />
    <h3>{person.name}</h3>
    <p className="role">{person.role}</p>
    <div className="line">
      <a href={`mailto:${person.email}`}>{person.email}</a>
      <CopyButton value={person.email} />
    </div>
    {person.phone && (
      <div className="line">
        <span>{person.phone}</span>
        <CopyButton value={person.phone.replace(/\s+/g, "")} />
      </div>
    )}
    {person.linkedin && (
      <div className="line">
        <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    )}
  </article>
);

export const TegFounders: React.FC = () => (
  <div className="about">
    <h2 className="h2">Über die TEG</h2>
    <div>
      <p>
        Die TEG wurde 1986 in München gegründet und entstand aus einer
        Initiative rund um Dr. Helmuth Buddenberg, damals Vorstandsvorsitzender
        der Deutschen BP. Ziel war, früh eine neue Generation unternehmerisch
        denkender Führungskräfte auszubilden. Bis 1988 entstand ein Kuratorium
        aus Vorständen von elf Unternehmen, darunter Franz Köhne
        (Personalvorstand BMW), Hans H. Schlitzberger (Siemens) und Roland
        Berger. Im Kuratorium vertreten waren:
      </p>
      <ul className="founders">
        {[
          "Deutsche BP",
          "BMW",
          "Siemens",
          "MBB (heute Airbus)",
          "Bayerische Hypotheken- und Wechsel-Bank",
          "Roland Berger",
          "Boston Consulting Group",
          "KPMG",
          "Ruhrgas (heute E.ON)",
          "Infratest",
          "Personalmagazin",
        ].map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <dl className="alumni">
        <div>
          <dt>über 300</dt>
          <dd>Absolventen der Young Business Leadership Academy</dd>
        </div>
        <div>
          <dt>41</dt>
          <dd>heute in Top-Level-Führungspositionen in Konzernen</dd>
        </div>
        <div>
          <dt>40</dt>
          <dd>in Führungspositionen im Mittelstand</dd>
        </div>
        <div>
          <dt>15</dt>
          <dd>Unternehmensgründer</dd>
        </div>
      </dl>
    </div>
  </div>
);
