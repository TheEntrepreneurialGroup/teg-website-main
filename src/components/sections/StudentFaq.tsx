import { ChevronRight } from "lucide-react";

interface FaqEntry {
  question: string;
  /** Absätze der Antwort; jede Antwort steht für sich, da Suchmaschinen sie einzeln zitieren. */
  answer: string[];
}

const faqs: FaqEntry[] = [
  {
    question: "Wie angesehen ist TEG in der deutschen Wirtschaft?",
    answer: [
      "TEG genießt hohes Ansehen bei Führungskräften und in der Executive-Search-Szene, besonders in München. TEG ist seit 1986 privatwirtschaftlich getragen und an keine Universität gebunden. Deshalb ist der Name an den Hochschulen weniger präsent, dafür umso mehr dort, wo Führungspositionen besetzt werden. Zahlreiche Führungskräfte engagieren sich bei TEG als Referenten, Mentoren, im Beirat und im Kuratorium. Die Unabhängigkeit hat einen weiteren Vorteil: TEG wählt ausschließlich nach Leistung und Eignung aus.",
    ],
  },
  {
    question: "Ist TEG eine studentische Initiative?",
    answer: [
      "Nein. TEG ist ein privatwirtschaftlich finanzierter Club zum Thema disziplinarische Führung, gegründet 1986. Führungskräfte engagieren sich als Referenten, Mentoren und Begleiter, im Beirat und im Kuratorium. Die Young Business Leadership Academy (YBLA) ist strukturiert und formalisiert, mit festen Terminen und einer wissenschaftlich abgenommenen Abschlussarbeit. Sie verbindet eine professionelle Executive Education mit einem Stipendienprogramm.",
    ],
  },
  {
    question:
      "Wie hilfreich ist TEG für Praktika, Unternehmensberatungen und Führungspositionen?",
    answer: [
      "TEG hilft vor allem auf dem Weg in Führungspositionen. Der YBLA-Abschluss erleichtert den Einstieg in die Management-Trainee-Programme großer Unternehmen. Viele TEGler finden ihren Berufseinstieg über Kontakte aus den TEG-Konferenzen statt über eine klassische Bewerbung. Besonders hilft der Name TEG beim Wechsel von einer Fach- in eine Führungsposition.",
      "Zur Unternehmensberatung: Wer die Welt der Führungskräfte kennt, fasst leichter im Consulting Fuß, und dabei kann TEG helfen. TEG-Absolventen wechseln jedoch meist auf die andere Seite: Sie werden selbst Führungskräfte, die sich von Beratern beraten lassen. Wer dauerhaft in der Beratung bleiben möchte statt Menschen zu führen, ist bei TEG nicht richtig.",
    ],
  },
  {
    question:
      "Was unterscheidet die Ausbildung zu disziplinarischer Führung von Innovations-, Design-Thinking- oder Business-Ideen-Kursen?",
    answer: [
      "Die YBLA bereitet auf die Führung von Menschen vor, Innovationskurse auf die Entwicklung von Ideen. Innovations- und Gründungskurse vermitteln Methoden, um Ideen zu entwickeln und zu präsentieren. Disziplinarische Führung heißt dagegen, Verantwortung für Menschen zu tragen: Mitarbeitende auswählen, beurteilen, entwickeln und auch schwierige Gespräche führen. Unternehmen erkennen nur Ausbildungen, die genau das lehren, als Vorbereitung auf eine Führungsrolle an. Die YBLA ist ein solches Programm, die studentische Entsprechung professioneller Führungskräfte-Trainings. Eine vergleichbare Fortbildung, die du sonst berufsbegleitend in ähnlicher Länge absolvieren würdest, kannst du damit zum Teil bereits abhaken.",
      "Stand 2026 ist die YBLA das einzige Programm in München, das bereits Studierende auf disziplinarische Führung vorbereitet. Alle anderen setzen mehrere Jahre Berufserfahrung voraus.",
    ],
  },
  {
    question:
      "Welche Kontakte zu Unternehmen und Führungskräften kann man bei TEG aufbauen?",
    answer: [
      "In der YBLA lernst du Führungskräfte aus dem General Management der DACH-Wirtschaft kennen: in den Workshops, als Mentoren und auf den TEG-Konferenzen. Außerdem pflegt TEG enge Kontakte in die Executive-Search-Szene: zu den großen fünf Häusern, intern „SHREK“ genannt, ebenso wie zu spezialisierten Boutiquen. Viele Kreise öffnen sich erst mit dem Abschluss der YBLA. Das Netzwerk steht denen offen, die das Programm vollständig durchlaufen.",
    ],
  },
  {
    question:
      "Wie schwierig ist es, in die Young Business Leadership Academy aufgenommen zu werden?",
    answer: [
      "Die Aufnahme ist anspruchsvoll: Pro Semester vergibt TEG 8 bis 15 Plätze in der YBLA. TEG wählt ausschließlich nach Leistung und Eignungsdiagnostik aus, ohne Quoten. Entscheidend ist nicht allein der Notenschnitt, sondern ob TEG dir eine Führungsrolle nach dem Studium zutraut. Neben deiner Bewerbung gehören deshalb ein analytisch-logischer Test und ein Case zu einem Mitarbeitergespräch zum Auswahlverfahren. Ein Empfehlungsschreiben einer Führungskraft hilft ebenfalls.",
    ],
  },
  {
    question:
      "Ist die Teilnahme an der YBLA kostenlos, und lohnt sich der zeitliche Aufwand?",
    answer: [
      "Die Teilnahme an der YBLA ist für Ausgewählte kostenfrei. Sie wird von Ehemaligen getragen, die heute im Top-Management stehen. Es fällt lediglich der Mitgliedsbeitrag des Vereins von 30 € an. Es ist gute Tradition, dass TEGler später selbst die nächste Generation fördern.",
      "Der Aufwand ist real: drei Semester lang 10 bis 18 Stunden pro Woche, abends und samstags, mit festen Terminen und einer wissenschaftlich betreuten Abschlussarbeit. Dafür erhältst du ein Abschlusszeugnis, das deine Führungsreife bestätigt, und hakst einen Teil der Führungsfortbildung ab, die du sonst später neben dem Beruf absolvieren würdest. Mit dem Abschluss bist du TEGler auf Lebenszeit.",
    ],
  },
  {
    question: "Wie läuft die Abschlussarbeit der YBLA ab?",
    answer: [
      "In der YBLA-Abschlussarbeit verbindest du Literatur und Interviews mit Führungskräften zu einem eigenen Fachbeitrag. Du wählst ein Thema aus der Reihe der Management-Workshops, das dich besonders beschäftigt hat. Dazu recherchierst du die Literatur und führst Interviews mit vier Führungskräften, die mindestens eine Abteilung leiten, also selbst Führungskräfte unter sich haben. Aus beidem entsteht ein Beitrag, wie Unternehmen bei diesem Thema entscheiden, handeln und sich aufstellen sollten. Die Arbeit wird wissenschaftlich abgenommen.",
    ],
  },
  {
    question: "Kann ich die YBLA vorzeitig beenden?",
    answer: [
      "Die YBLA ist auf vollständige Teilnahme angelegt. Das TEG-Netzwerk lebt von dieser Verbindlichkeit. Wer das Programm vorzeitig beendet, verlässt auch die Gruppen und Kreise von TEG. Viele Kontakte öffnen sich ohnehin erst mit dem Abschluss. Wer nur ein Semester mitnehmen möchte, um Kontakte zu sammeln, sollte sich deshalb nicht bewerben.",
    ],
  },
  {
    question: "Kann ich an der YBLA auch berufsbegleitend teilnehmen?",
    answer: [
      "Ja, unter bestimmten Bedingungen. Endet dein Studium während der YBLA, schließt du das Programm berufsbegleitend ab. In einzelnen Fällen nimmt TEG auch Young Professionals auf, die die YBLA vollständig neben dem Beruf absolvieren. Dann erwartet TEG eine genaue Begründung: Warum bist du bereit, auf so viel Freizeit zu verzichten, und wie bringst du das Programm in deinem Kalender unter?",
    ],
  },
];

/** schema.org FAQPage; `<` escaped so the JSON cannot close the script tag. */
const structuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer.join("\n\n") },
  })),
}).replace(/</g, "\\u003c");

/**
 * Häufige Fragen am Ende der Studierenden-Seite. Native details/summary: Die
 * Antworten stehen im vorgerenderten HTML und sind ohne JavaScript lesbar.
 */
export default function StudentFaq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="py-24 bg-slate-50 border-y border-slate-200 text-left"
    >
      <div className="container-custom px-4 md:px-8 mx-auto max-w-4xl">
        <div className="mb-12">
          <h2
            id="faq-title"
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0F2B57] mb-4"
          >
            Häufige <span className="text-[#B7860B]">Fragen</span>
          </h2>
          <div className="h-1.5 w-24 bg-[#B7860B]" />
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200 bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-5 py-6 md:px-8 [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg md:text-xl font-bold text-[#0F2B57] leading-snug">
                  {faq.question}
                </h3>
                <ChevronRight
                  size={22}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[#B7860B] transition-transform group-open:rotate-90"
                />
              </summary>
              <div className="space-y-4 px-5 pb-7 md:px-8 text-base md:text-lg text-slate-600 leading-relaxed">
                {faq.answer.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
    </section>
  );
}
