import React, { useEffect, useId, useRef, useState } from "react";
import { PageLang, usePageLang } from "../../i18n/pageLang";

const YBLA_TIP: Record<PageLang, string> = {
  de: "18-monatiges Entwicklungsprogramm der TEG für Nachwuchsführungskräfte. Dazu gehören Workshops mit erfahrenen Führungskräften und die Projektleitung eines Formats der TEG, für das die Teilnehmer Speaker, Partner und Gäste selbst gewinnen. Über 300 Absolventen, darunter 41 in Top-Level-Führungspositionen in Konzernen.",
  en: "TEG's 18-month development programme for future leaders. It combines workshops with experienced executives and the project lead of a TEG format, for which participants win speakers, partners and guests themselves. Over 300 graduates, 41 of them now in top-level leadership positions in large corporations.",
};

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
  <Term tip={YBLA_TIP[usePageLang()]}>Young Business Leadership Academy</Term>
);

const COPY_LABELS: Record<
  PageLang,
  { idle: string; done: string; failed: string }
> = {
  de: { idle: "Kopieren", done: "Kopiert", failed: "Nicht kopiert" },
  en: { idle: "Copy", done: "Copied", failed: "Not copied" },
};

const CopyButton: React.FC<{ value: string }> = ({ value }) => {
  const labels = COPY_LABELS[usePageLang()];
  const [label, setLabel] = useState(labels.idle);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setLabel(labels.done);
    } catch {
      setLabel(labels.failed);
    }
    window.setTimeout(() => setLabel(labels.idle), 1600);
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
    resize?: boolean;
  }) => void;
}

const NARROW_QUERY = "(max-width: 720px)";

/**
 * Calendly inline booking. Initialised explicitly so it also renders after
 * client-side navigation, when widget.js has already scanned the page. On
 * phones Calendly resizes the frame to its content, so the calendar keeps
 * its natural height instead of a fixed box with empty space.
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
      calendly.initInlineWidget({
        url,
        parentElement: parent,
        resize: window.matchMedia(NARROW_QUERY).matches,
      });
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
  /** Omitted until a portrait is at hand. */
  photo?: string;
  email: string;
  phone?: string;
  linkedin?: string;
}

export const ContactCard: React.FC<{
  person: ContactPerson;
}> = ({ person }) => (
  <article className="contact">
    {person.photo && (
      <img src={person.photo} alt={person.name} loading="lazy" />
    )}
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

const FOUNDERS_COPY: Record<
  PageLang,
  {
    heading: string;
    text: string;
    companies: string[];
    alumni: [string, string][];
  }
> = {
  de: {
    heading: "Über die TEG",
    text: "Die TEG wurde 1986 in München gegründet und entstand aus einer Initiative rund um Dr. Hellmuth Buddenberg, damals Vorstandsvorsitzender der Deutschen BP. Ziel war, früh eine neue Generation unternehmerisch denkender Führungskräfte auszubilden. Bis 1988 entstand ein Kuratorium aus Vorständen von elf Unternehmen, darunter Franz Köhne (Personalvorstand BMW), Hans H. Schlitzberger (Siemens) und Roland Berger. Im Kuratorium vertreten waren:",
    companies: [
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
    ],
    alumni: [
      ["über 300", "Absolventen der Young Business Leadership Academy"],
      ["41", "heute in Top-Level-Führungspositionen in Konzernen"],
      ["40", "in Führungspositionen im Mittelstand"],
      ["15", "Unternehmensgründer"],
    ],
  },
  en: {
    heading: "About TEG",
    text: "TEG was founded in Munich in 1986, on an initiative led by Dr. Hellmuth Buddenberg, then Chairman of the Board of Deutsche BP. Its aim was to develop a new generation of entrepreneurially minded leaders early on. By 1988 a Kuratorium had formed from the executive boards of eleven companies, among them Franz Köhne (Board Member for Human Resources, BMW), Hans H. Schlitzberger (Siemens) and Roland Berger. Represented on the Kuratorium were:",
    companies: [
      "Deutsche BP",
      "BMW",
      "Siemens",
      "MBB (now Airbus)",
      "Bayerische Hypotheken- und Wechsel-Bank",
      "Roland Berger",
      "Boston Consulting Group",
      "KPMG",
      "Ruhrgas (now E.ON)",
      "Infratest",
      "Personalmagazin",
    ],
    alumni: [
      ["over 300", "graduates of the Young Business Leadership Academy"],
      ["41", "now in top-level leadership positions in large corporations"],
      ["40", "in leadership positions in mid-sized companies"],
      ["15", "company founders"],
    ],
  },
};

export const TegFounders: React.FC = () => {
  const copy = FOUNDERS_COPY[usePageLang()];
  return (
    <div className="about">
      <h2 className="h2">{copy.heading}</h2>
      <div>
        <p>{copy.text}</p>
        <ul className="founders">
          {copy.companies.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <dl className="alumni">
          {copy.alumni.map(([figure, label]) => (
            <div key={label}>
              <dt>{figure}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
