import React from "react";
import { motion } from "framer-motion";

/**
 * YblaJourney
 * ----------------------------------------------------------------------------
 * Companion statement to the "Leitmotiv" block. Uses the same dark navy
 * stage, gold hairlines and single-colour headline so the two reads form
 * one consistent mission spread.
 */

export type YblaJourneyProps = {
  isDe: boolean;
};

const YblaJourney: React.FC<YblaJourneyProps> = ({ isDe }) => {
  const copy = isDe
    ? {
        kicker: "Unsere Kernaufgabe",
        title: "Die YBLA",
        body:
          "Die Young Business Leadership Academy ist ein studienbegleitendes Qualifizierungsprogramm über 18 Monate für Studierende aller Fachrichtungen. Der Aufwand beträgt 10 bis 18 Wochenstunden außerhalb der Prüfungsphasen. Das Programm besteht aus drei Säulen: einer theoretischen Grundlage in Leadership und Unternehmensführung, praktischer Erfahrung in der Projektleitung, sowie einer Fachrolle innerhalb der Organisation.",
      }
    : {
        kicker: "Our core mission",
        title: "The YBLA",
        body:
          "The Young Business Leadership Academy is an 18-month qualification programme alongside university studies, open to students of any subject. The workload is 10 to 18 hours per week outside exam periods. The programme rests on three pillars: a theoretical foundation in leadership and general management, practical experience in project leadership, and an operational role within the organisation.",
      };

  return (
    <section className="relative isolate overflow-hidden bg-[#040F1F] py-24 text-white md:py-36 lg:py-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(70% 60% at 50% 50%, rgba(246,215,123,0.10) 0%, rgba(4,15,31,0) 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F6D77B]/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F6D77B]/40 to-transparent"
      />
      <div className="relative mx-auto max-w-5xl px-4 md:px-8">
        <div className="mb-10 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#F6D77B]/85">
          <span className="h-px w-10 bg-[#F6D77B]/60" />
          {copy.kicker}
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-[clamp(1.65rem,3.2vw,3rem)] font-semibold leading-[1.15] tracking-[-0.012em] text-white"
        >
          {copy.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="mt-8 max-w-3xl text-[clamp(1rem,1.25vw,1.2rem)] leading-[1.6] text-white"
        >
          {copy.body}
        </motion.p>
      </div>
    </section>
  );
};

export default YblaJourney;
