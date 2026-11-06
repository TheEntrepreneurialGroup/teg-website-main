import { ChevronRight } from "lucide-react";
import { PageLang, usePageLang } from "../../i18n/pageLang";

interface FaqEntry {
  question: string;
  /** Absätze der Antwort; jede Antwort steht für sich, da Suchmaschinen sie einzeln zitieren. */
  answer: string[];
}

const faqsDe: FaqEntry[] = [
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

const faqsEn: FaqEntry[] = [
  {
    question: "How highly regarded is TEG in German business?",
    answer: [
      "TEG is held in high regard among executives and in executive search, particularly in Munich. Since 1986 TEG has been privately funded and is tied to no university. Its name is therefore less present at the universities, and all the more so where leadership positions are filled. Numerous executives give their time to TEG as speakers and mentors, and on its advisory board and Kuratorium. Independence has a further advantage: TEG selects solely on merit and aptitude.",
    ],
  },
  {
    question: "Is TEG a student initiative?",
    answer: [
      "No. TEG is a privately funded club devoted to line management, founded in 1986. Executives give their time as speakers, mentors and companions, and on the advisory board and Kuratorium. The Young Business Leadership Academy (YBLA) is structured and formalised, with fixed dates and a final thesis that is assessed to academic standards. It combines professional executive education with a scholarship programme.",
    ],
  },
  {
    question:
      "How helpful is TEG for internships, management consulting and leadership positions?",
    answer: [
      "TEG helps above all on the way into leadership positions. The YBLA certificate eases entry into the management trainee programmes of large companies. Many TEGlers find their first position through contacts made at TEG conferences rather than through a conventional application. The TEG name is of particular help in the move from a specialist to a leadership role.",
      "As for management consulting: those who know the world of executives find their footing in consulting more easily, and TEG can help with that. TEG graduates, however, usually move to the other side: they become executives themselves, who are advised by consultants. Anyone who wants to remain in consulting for good rather than lead people is not in the right place at TEG.",
    ],
  },
  {
    question:
      "How does training in line management differ from courses on innovation, design thinking or business ideas?",
    answer: [
      "The YBLA prepares you to lead people; innovation courses prepare you to develop ideas. Innovation and start-up courses teach methods for developing and presenting ideas. Line management, by contrast, means bearing responsibility for people: selecting, appraising and developing staff, and conducting difficult conversations as well. Companies recognise only training that teaches exactly this as preparation for a leadership role. The YBLA is such a programme, the student counterpart of professional executive training. It allows you to complete in part a comparable course that you would otherwise take, at similar length, alongside your job.",
      "As of 2026 the YBLA is the only programme in Munich that prepares students for line management. All others require several years of professional experience.",
    ],
  },
  {
    question:
      "What contacts with companies and executives can you build at TEG?",
    answer: [
      "In the YBLA you meet executives from the general management of business in the DACH region: in the workshops, as mentors and at the TEG conferences. TEG also maintains close ties to executive search: to the five large firms, known internally as “SHREK”, as well as to specialised boutiques. Many circles open only once you have completed the YBLA. The network is open to those who go through the programme in full.",
    ],
  },
  {
    question:
      "How difficult is it to be admitted to the Young Business Leadership Academy?",
    answer: [
      "Admission is demanding: each semester TEG awards 8 to 15 places in the YBLA. TEG selects solely on merit and aptitude assessment, without quotas. What matters is not your grade average alone, but whether TEG trusts you with a leadership role after your studies. Alongside your application, the selection process therefore includes an analytical and logical reasoning test and a case on a staff appraisal conversation. A letter of recommendation from an executive also helps.",
    ],
  },
  {
    question: "Is the YBLA free of charge, and is it worth the time it takes?",
    answer: [
      "Participation in the YBLA is free of charge for those selected. It is supported by alumni who are now in top management. The only cost is the association’s membership fee of €30. It is a fine tradition that TEGlers later support the next generation themselves.",
      "The commitment is real: for three semesters, 10 to 18 hours a week, in the evenings and on Saturdays, with fixed dates and an academically supervised final thesis. In return you receive a certificate attesting to your readiness to lead, and complete part of the leadership training you would otherwise take later alongside your job. On graduating you are a TEGler for life.",
    ],
  },
  {
    question: "How does the YBLA final thesis work?",
    answer: [
      "In the YBLA final thesis you combine the literature with interviews with executives into a paper of your own. You choose a topic from the series of management workshops that particularly engaged you. You research the literature and interview four executives who lead at least a department, and so have managers reporting to them. From both emerges a paper on how companies should decide, act and organise themselves on this topic. The thesis is assessed to academic standards.",
    ],
  },
  {
    question: "Can I leave the YBLA early?",
    answer: [
      "The YBLA is designed for participation in full. The TEG network lives on this commitment. Those who leave the programme early also leave TEG’s groups and circles. Many contacts open only with graduation in any case. Anyone who wants to take part for a single semester to collect contacts should therefore not apply.",
    ],
  },
  {
    question: "Can I take part in the YBLA while working?",
    answer: [
      "Yes, under certain conditions. If your studies end during the YBLA, you complete the programme alongside your job. In individual cases TEG also admits young professionals who complete the YBLA entirely alongside their work. TEG then expects a precise rationale: why are you prepared to give up so much of your free time, and how will you fit the programme into your calendar?",
    ],
  },
];

const faqs = { de: faqsDe, en: faqsEn } satisfies Record<PageLang, FaqEntry[]>;

const copy = {
  de: {
    title: (
      <>
        Häufige <span className="text-[#B7860B]">Fragen</span>
      </>
    ),
  },
  en: {
    title: (
      <>
        Frequently asked <span className="text-[#B7860B]">questions</span>
      </>
    ),
  },
} satisfies Record<PageLang, unknown>;

/** schema.org FAQPage; `<` escaped so the JSON cannot close the script tag. */
const toStructuredData = (entries: FaqEntry[]) =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer.join("\n\n") },
    })),
  }).replace(/</g, "\\u003c");

const structuredData = {
  de: toStructuredData(faqs.de),
  en: toStructuredData(faqs.en),
} satisfies Record<PageLang, string>;

/**
 * Häufige Fragen am Ende der Studierenden-Seite. Native details/summary: Die
 * Antworten stehen im vorgerenderten HTML und sind ohne JavaScript lesbar.
 */
export default function StudentFaq() {
  const lang = usePageLang();
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="py-24 bg-slate-50 border-y border-slate-200 text-left"
    >
      <div className="container-custom">
        <div className="max-w-4xl">
          <div className="mb-12">
            <h2
              id="faq-title"
              className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0F2B57] mb-4"
            >
              {copy[lang].title}
            </h2>
            <div className="h-1.5 w-24 bg-[#B7860B]" />
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200 bg-white">
            {faqs[lang].map((faq) => (
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
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData[lang] }}
      />
    </section>
  );
}
