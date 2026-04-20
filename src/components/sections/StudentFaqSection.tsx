import { ChevronDown } from "lucide-react";
import { useIntl } from "react-intl";

type LocaleKey = "de" | "en";

type FaqItem = {
  question: string;
  answer: string;
  bullets?: string[];
};

type SectionCopy = {
  expectationsTitle: string;
  expectationsIntro: string;
  expectsTitle: string;
  expects: string[];
  offersTitle: string;
  offers: string[];
  faqTitle: string;
  faqItems: FaqItem[];
};

const copy: Record<LocaleKey, SectionCopy> = {
  de: {
    expectationsTitle: "Was beide Seiten erwarten können",
    expectationsIntro:
      "TEG ist bewusst leistungsorientiert. Deshalb ist von Beginn an klar, was von dir erwartet wird und was du dafür zurückbekommst.",
    expectsTitle: "TEG erwartet",
    expects: [
      "Mindestens 10 Stunden pro Woche mit echter Verbindlichkeit",
      "Eigeninitiative statt Abwarten auf Aufgaben",
      "Klare Kommunikation, wenn etwas blockiert oder zeitlich eng wird",
      "Saubere Umsetzung und Verantwortung für Ergebnisse im Team",
    ],
    offersTitle: "TEG bietet",
    offers: [
      "Reale Aufgaben mit sichtbarem Impact statt interner Beschäftigung",
      "Frühe Verantwortung in Projekten, Events und Department-Arbeit",
      "Direkten Austausch mit ambitionierten Mitgliedern und Alumni",
      "Konkrete Networking-Möglichkeiten mit Geschäftsführern, C-Leveln und Entscheidungsträgern bei Workshops, Panels und Events",
      "Schnelle fachliche und persönliche Entwicklung durch Praxis statt Theorie",
    ],
    faqTitle: "Wichtige Fragen zur Mitgliedschaft",
    faqItems: [
      {
        question: "Was ist TEG - und was bewusst nicht?",
        answer:
          "TEG ist ein leistungsorientiertes Netzwerk mit echter Verantwortung, realen Projekten und C-Level-naher Ausbildung. Es ist bewusst kein Accelerator, kein Sponsorenkonstrukt und kein Mitlaufprogramm.",
      },
      {
        question: "Warum werden Bewerber abgelehnt und wie wichtig sind Noten?",
        answer:
          "Typische Gründe sind fehlender Ehrgeiz, schwaches Commitment oder ein kultureller Misfit. Noten sind relevant, weil sie oft Belastbarkeit, Struktur und verfügbare Kapazität widerspiegeln.",
      },
      {
        question:
          "Arbeite ich an echten Aufgaben und kann ich mein Department wechseln?",
        answer:
          "Ja, du arbeitest an echten Aufgaben mit sichtbarem Impact. Ein Departmentwechsel ist grundsätzlich möglich, sollte aber früh und bewusst entschieden werden.",
      },
      {
        question:
          "Wie realistisch sind Jobs, Praktika oder Kontakte durch TEG?",
        answer:
          "Laut TEG sehr realistisch: Rund 80 % erleben echte Karrierechancen, etwa ein Drittel direkte starke Durchbrüche. Netzwerkeffekte entstehen oft früh.",
      },
    ],
  },
  en: {
    expectationsTitle: "What both sides can expect",
    expectationsIntro:
      "TEG is intentionally performance-oriented. That is why expectations are clear from the start on both sides.",
    expectsTitle: "TEG expects",
    expects: [
      "At least 10 hours per week with real reliability",
      "Initiative instead of waiting for tasks",
      "Clear communication when something is blocked or time gets tight",
      "Clean execution and ownership of outcomes inside the team",
    ],
    offersTitle: "TEG offers",
    offers: [
      "Real work with visible impact instead of busywork",
      "Early responsibility in projects, events, and department work",
      "Direct exchange with ambitious members and alumni",
      "Concrete networking opportunities with managing directors, C-level leaders, and decision-makers at workshops, panels, and events",
      "Fast professional and personal growth through practice instead of theory",
    ],
    faqTitle: "Key questions about membership",
    faqItems: [
      {
        question: "What is TEG - and what is it deliberately not?",
        answer:
          "TEG is a performance-oriented network built around real responsibility, real projects, and C-level-adjacent development. It is deliberately not an accelerator, a sponsor-driven construct, or a passive membership.",
      },
      {
        question: "Why are applicants rejected and how important are grades?",
        answer:
          "Typical reasons are lack of ambition, weak commitment, or a cultural mismatch. Grades matter because they often signal resilience, structure, and available capacity.",
      },
      {
        question: "Will I work on real tasks and can I switch departments?",
        answer:
          "Yes, you work on real tasks with visible impact. Switching departments is generally possible, but it should be done early and intentionally.",
      },
      {
        question:
          "How realistic are jobs, internships, or contacts through TEG?",
        answer:
          "According to TEG, very realistic: around 80% experience real career opportunities, and about one third see strong direct breakthroughs. Network effects often start early.",
      },
    ],
  },
};

function StudentFaqSection() {
  const intl = useIntl();
  const locale: LocaleKey = intl.locale.startsWith("de") ? "de" : "en";
  const section = copy[locale];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-8 md:px-14 lg:px-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="space-y-6">
            <div className="border border-primary/10 p-5 md:p-6">
              <h4 className="text-2xl font-semibold text-primary">
                {section.expectationsTitle}
              </h4>
              <p className="mt-3 text-base text-muted-foreground">
                {section.expectationsIntro}
              </p>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-primary/55">
                    {section.expectsTitle}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {section.expects.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 border border-primary/10 bg-primary/[0.03] px-3 py-2 text-sm text-primary"
                      >
                        <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-primary/55">
                    {section.offersTitle}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {section.offers.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 border border-accent/20 bg-accent/10 px-3 py-2 text-sm text-primary"
                      >
                        <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-primary/10">
            <div className="border-b border-primary/10 px-5 py-5 md:px-6">
              <h4 className="text-2xl font-semibold text-primary">
                {section.faqTitle}
              </h4>
            </div>

            <div className="px-5 md:px-6">
              {section.faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group border-b border-primary/10 py-4 last:border-b-0"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                    <h5 className="text-lg font-semibold text-primary">
                      {item.question}
                    </h5>
                    <span className="mt-1 shrink-0 text-primary/60 transition-transform duration-300 group-open:rotate-180">
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </summary>

                  <div className="pt-3 text-base leading-relaxed text-muted-foreground">
                    <p>{item.answer}</p>
                    {item.bullets && (
                      <ul className="mt-3 space-y-2 text-sm text-primary/85">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2">
                            <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentFaqSection;
