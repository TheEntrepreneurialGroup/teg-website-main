import React from "react";
import { motion } from "framer-motion";

/**
 * YblaJourney
 * ----------------------------------------------------------------------------
 * Editorial full-width spread for the YBLA programme introduction.
 * No visible cards, borders, or grid lines — pure typographic hierarchy.
 */

export type YblaJourneyProps = {
  isDe: boolean;
};

const ease = [0.22, 1, 0.36, 1] as const;

const YblaJourney: React.FC<YblaJourneyProps> = ({ isDe }) => {
  const copy = isDe
    ? {
        kicker: "Unser Nachwuchskanal",
        title: "Die YBLA",
        fullName: "Young Business Leadership Academy",
        intro:
          "Ausbildung der nächsten Führungsgenerationen: Wir bereiten junge Menschen auf Leitungsaufgaben im heimischen Wirtschaftsraum vor. Zentral dafür ist unsere YBLA. Ein intensives 18-monatiges Programm für Studierende und Berufseinsteiger. Zugrunde liegt ein erfolgreiches Schulungskonzept welches Theorie, Praxis und Projektverantwortung vereint. Unsere Auswahl ist strikt herkunftsblind: Wer Potenzial zeigt, unsere mathematisch-analytische und psychologische Eignungsdiagnostik besteht und sich konsequent anstrengt, erarbeitet sich seinen Weg.",
        stats: [
          { value: "18", unit: "Monate", note: "Programmdauer" },
          { value: "10–18", unit: "h / Woche", note: "außerhalb der Prüfungsphasen" },
        ],
      }
    : {
        kicker: "Our junior talent pipeline",
        title: "The YBLA",
        fullName: "Young Business Leadership Academy",
        intro:
          "An 18-month qualification programme running alongside university studies — open to students of any subject.",
        stats: [
          { value: "18", unit: "months", note: "programme duration" },
          { value: "10–18", unit: "h / week", note: "outside exam periods" },
        ],
      };

  return (
    <section className="relative isolate overflow-hidden bg-[#040F1F] py-24 text-white md:py-32 lg:py-40">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(80% 55% at 30% 50%, rgba(246,215,123,0.07) 0%, rgba(4,15,31,0) 70%)",
        }}
      />
      {/* top / bottom hairlines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F6D77B]/35 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F6D77B]/35 to-transparent"
      />

      {/* decorative oversized wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 right-0 select-none overflow-hidden pr-4 text-[clamp(7rem,18vw,22rem)] font-black leading-none tracking-tight text-white/[0.025]"
      >
        YBLA
      </div>

      <div className="relative mx-auto w-full max-w-screen-xl px-6 md:px-12 lg:px-16">

        {/* ── kicker ── */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-10 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#F6D77B]"
        >
          {copy.kicker}
        </motion.div>

        {/* ── headline + intro + stats row ── */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">

          {/* left: title + intro */}
          <div className="lg:w-[55%] xl:w-[58%]">
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease }}
              className="text-[clamp(2.4rem,5.5vw,5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-white"
            >
              {copy.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
              className="mt-3 text-[clamp(0.7rem,1vw,0.85rem)] font-medium uppercase tracking-[0.22em] text-[#F6D77B]"
            >
              {copy.fullName}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease, delay: 0.18 }}
              className="mt-8 text-[clamp(1.05rem,1.4vw,1.25rem)] leading-[1.6] text-white"
            >
              {copy.intro}
            </motion.p>
          </div>

          {/* right: stats */}
          <div className="flex-1 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, ease, delay: 0.15 }}
            >
              <div className="flex flex-col gap-10">
                {copy.stats.map((s) => (
                  <div key={s.value}>
                    <p className="text-[clamp(2.2rem,4vw,3.8rem)] font-semibold leading-none tracking-tight text-[#F6D77B]">
                      {s.value}
                      <span className="ml-2 text-[clamp(0.85rem,1.1vw,1rem)] font-medium text-white">
                        {s.unit}
                      </span>
                    </p>
                    <p className="mt-2 text-[0.8rem] text-white">{s.note}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default YblaJourney;
