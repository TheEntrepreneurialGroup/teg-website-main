import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Linkedin,
  MousePointer2,
  ChevronRight,
  Target,
  CheckCircle2,
  Calendar,
  Clock,
  Info,
  TrendingUp,
  Code2,
  FlaskConical,
  Scale,
  Rocket,
  X,
  MessageCircle,
  Video,
  Mic,
} from "lucide-react";
import Counter from "../components/blocks/Counter";
import StudentFaq from "../components/sections/StudentFaq";

const ForStudents: React.FC = () => {
  const scrollingLogos = [
    { name: "BMW", src: "/shared/logos/bmw-image.webp" },
    { name: "BCG", src: "/shared/logos/bcg.avif" },
    { name: "Siemens", src: "/shared/logos/siemens.svg" },
    { name: "HVB", src: "/shared/logos/hypovereinsbank.svg" },
    { name: "Roland Berger", src: "/shared/logos/roland-berger.svg" },
    { name: "Ruhrgas", src: "/shared/logos/ruhrgas.avif" },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans [overflow-x:clip] text-left">
      {/* SEKTION 1: HERO */}
      <section className="relative min-h-[100vh] w-full overflow-hidden bg-slate-900 flex flex-col justify-end text-left">
        <img
          src="/for-students/commitment/ancient-group.avif"
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />

        <div className="relative z-10 container-custom px-4 md:px-8 mx-auto w-full pb-20">
          <h1 className="text-4xl sm:text-5xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.92] sm:leading-[0.92] text-white -ml-1">
            Gestalte die <br />
            <span className="text-[#B7860B]">Wirtschaft</span> <br />
            von morgen.
          </h1>
          <p className="text-white/80 mt-8 text-lg md:text-xl font-medium max-w-2xl">
            Die Schmiede zukünftiger Führungskräfte. Gegründet 1986.
          </p>
        </div>
      </section>

      {/* SEKTION: INTRO */}
      <section className="py-24">
        <div className="container-custom px-4 md:px-8 text-left mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
            <div className="md:col-span-6 flex flex-col justify-start">
              <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter mb-6 leading-[1.1] text-[#0F2B57]">
                TEG: Eine Gemeinschaft, die Maßstäbe setzt
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Seit 1986 entwickeln wir mit großem Erfolg ambitionierte
                Studierende und Berufseinsteiger zu Führungskräften und
                Geschäftsführern. Wir richten uns an alle Fachrichtungen.
              </p>
              <ul className="mt-8 md:mt-auto md:pt-8 space-y-4 text-lg text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="h-7 flex items-center shrink-0">
                    <Calendar size={20} className="text-[#B7860B]" />
                  </span>
                  <span>
                    Bewerbung zur kommenden YBLA offen bis{" "}
                    <strong className="text-[#0F2B57]">24. Oktober</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-7 flex items-center shrink-0">
                    <Mic size={20} className="text-[#B7860B]" />
                  </span>
                  <div>
                    Lerne uns kennen beim{" "}
                    <strong className="text-[#0F2B57]">
                      TEG Talk am 22. Oktober
                    </strong>{" "}
                    mit Jan Hiesserich, leitet als Group Chief Strategy Officer
                    einen Konzern mit 35 Tochterunternehmen, Heiner Thorborg,
                    besetzt als Headhunter C-Level-Positionen bei Konzernen wie
                    Amazon, BMW oder Microsoft, + 2 weitere.
                    <a
                      href="https://luma.com/uecrvr40"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex items-center gap-1 text-[#B7860B] hover:text-[#0F2B57] text-xs font-bold uppercase tracking-[0.2em] transition-colors"
                    >
                      Zum Event <ChevronRight size={14} />
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-7 flex items-center shrink-0">
                    <MessageCircle size={20} className="text-[#B7860B]" />
                  </span>
                  <span>
                    WhatsApp-Gruppe mit regelmäßigen Infos für Studierende
                    <a
                      href="https://chat.whatsapp.com/J5hQYkeq14hCOkJsJ74w5x"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex items-center gap-1 text-[#B7860B] hover:text-[#0F2B57] text-xs font-bold uppercase tracking-[0.2em] transition-colors"
                    >
                      Zur WhatsApp-Gruppe <ChevronRight size={14} />
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-7 flex items-center shrink-0">
                    <Video size={20} className="text-[#B7860B]" />
                  </span>
                  <span>
                    Online-Sprechstunden zur Bewerbung
                    <span className="mt-1 flex flex-col gap-1">
                      {[
                        {
                          label: "Mo., 19. Oktober, 20–21 Uhr",
                          href: "https://luma.com/ob8f4f61",
                        },
                        {
                          label: "Fr., 23. Oktober, 20–21 Uhr (Last Minute)",
                          href: "https://luma.com/vk3famb0",
                        },
                      ].map((slot) => (
                        <a
                          key={slot.href}
                          href={slot.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[#B7860B] hover:text-[#0F2B57] text-xs font-bold uppercase tracking-[0.2em] transition-colors"
                        >
                          {slot.label} <ChevronRight size={14} />
                        </a>
                      ))}
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-6 flex">
              <a
                href="/events"
                className="w-full min-h-[280px] relative overflow-hidden bg-[#0A1628] border border-white/10 hover:border-[#B7860B] transition-colors duration-500 group flex flex-col justify-end text-left"
              >
                <img
                  src="/events/converted/charging-ahead-2026-alt.webp"
                  alt=""
                  loading="lazy"
                  className="absolute inset-y-0 right-0 w-full md:w-3/4 h-full object-cover object-[center_60%] opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] from-30% via-[#0A1628]/75 via-55% to-[#0A1628]/10" />
                <div className="relative p-8 md:p-10">
                  <span className="text-[#B7860B] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                    Konferenzen & Events
                  </span>
                  <p className="text-white text-lg md:text-xl leading-snug font-medium max-w-md">
                    Du möchtest wissen, was die Unternehmensführungen deutscher
                    Firmen heute bewegt? Bewirb dich für die Teilnahme bei einem
                    unserer Events.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[#B7860B] text-xs font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                    Zum Event-Kalender
                    <ChevronRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEKTION 2: FLAGGSCHIFF-PROGRAMM */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container-custom px-4 md:px-8 mx-auto text-left md:text-center">
          <div className="mb-12 text-left md:text-center">
            <div className="flex items-center gap-4 mb-4 md:justify-center text-left">
              <div className="h-1 w-12 bg-[#B7860B]" />
              <span className="text-[#B7860B] font-bold uppercase tracking-widest text-sm text-left">
                Unser Flaggschiff-Programm
              </span>
              <div className="h-1 w-12 bg-[#B7860B] hidden md:block" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#0F2B57] uppercase tracking-tighter leading-tight text-left md:text-center">
              Young Business Leadership Academy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center text-left">
            <div className="md:col-span-7 text-left order-2 md:order-1 text-left">
              <h3 className="text-2xl font-bold text-[#0F2B57] mb-6 uppercase tracking-tight text-left">
                Was ist die YBLA?
              </h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-left">
                <p>
                  Die <strong>YBLA</strong> ist ein exklusives
                  Ausbildungsangebot innerhalb von TEG, das darauf ausgerichtet
                  ist, dich auf die Herausforderungen moderner Führung
                  vorzubereiten. Du lernst Führung direkt von Menschen, die
                  selbst seit Jahren Teams, Abteilungen und Unternehmen leiten.
                  Wir richten uns an alle Studiengänge, jedoch kommen die
                  meisten Teilnehmer aus: den{" "}
                  <strong>Naturwissenschaften</strong>, der{" "}
                  <strong>Technik</strong>, der <strong>Wirtschaft</strong>, den{" "}
                  <strong>Rechtswissenschaften (Jura)</strong> sowie der{" "}
                  <strong>Mathematik</strong>
                </p>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-[#B7860B] mt-1 shrink-0"
                      size={20}
                    />
                    <span>
                      <strong>Lerne von den Besten:</strong> Workshops mit
                      Team-, Abteilungs- und Bereichsleitern sowie Top-Managern
                      und Kontakte zur Spitze der deutschen Wirtschaft.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-[#B7860B] mt-1 shrink-0"
                      size={20}
                    />
                    <span>
                      <strong>Vorsprung:</strong> Erlerne entscheidende
                      Fähigkeiten in Bereichen wie Teamführung, Risikomanagement
                      und Strategie, die man in keinem Hörsaal lernt.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-[#B7860B] mt-1 shrink-0"
                      size={20}
                    />
                    <span>
                      <strong>Praxis:</strong> Als Praxisprojekt organisierst du
                      eine Industrie-Konferenz mit Top-Managern, als
                      Abschlussarbeit führst du Interviews mit Führungskräften.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-left">
                    <CheckCircle2
                      className="text-[#B7860B] mt-1 shrink-0"
                      size={20}
                    />
                    <span>
                      <strong>Community:</strong> Werde Teil einer selektierten
                      Gemeinschaft mit der zukünftigen Generation deutscher
                      Führungskräfte, Gründer und Top-Manager.
                    </span>
                  </li>
                </ul>
                <p className="pt-4 font-bold text-[#0F2B57] text-left">
                  Nach erfolgreichem Absolvieren der 3 Semester YBLA erhältst du
                  ein Abschlusszeugnis, welches deine Leistungen und
                  Führungsreife bestätigt. Weiterhin wirst du nach
                  YBLA-Abschluss TEGler auf Lebenszeit.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 order-1 md:order-2">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/shared/ybla-meeting.jpeg"
                  alt="YBLA"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKTION: REFERENTEN */}
      <section className="py-16 bg-white text-left">
        <div className="container-custom px-4 md:px-8 mx-auto">
          <span className="text-[#B7860B] font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">
            Unsere Referenten
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8">
            {[
              {
                name: "Dr. Michael Moser",
                role: "Vorstand, Fresenius SE & Co. KGaA",
                photo: "/for-students/referenten/moser.webp",
              },
              {
                name: "Volker Maiborn",
                role: "Aufsichtsrat, MaibornWolff GmbH",
                photo: "/for-students/referenten/maiborn.webp",
              },
              {
                name: "Hansjörg Briegel",
                role: "Vice President ER&D Ecosystem Development, Intel",
                photo: "/for-students/referenten/briegel.webp",
              },
              {
                name: "Thomas Uchtmann",
                role: "Geschäftsführer Vertrieb, Horbach",
                photo: "/for-students/referenten/uchtmann.webp",
              },
              {
                name: "Uli Beck",
                role: "ehem. Vice President Finance Airbus, Aufsichtsrat Rovsing",
                photo: "/for-students/referenten/beck.webp",
              },
              {
                name: "Marko Miosic",
                role: "Partner, Senator Executive Search",
                photo: "/for-students/referenten/miosic.webp",
              },
              {
                name: "Georg Sonner",
                role: "Senior Manager Solution Advisory EMEA, Basware",
                photo: "/for-students/referenten/sonner.webp",
              },
              {
                name: "Błażej Wilkoławski",
                role: "Director University Relations Poland, JetBrains",
                photo: "/for-students/referenten/wilkolawski.webp",
              },
              {
                name: "Julian Fink",
                role: "Stv. Bereichsleiter Vertrieb, Bayern-Genetik",
                photo: "/for-students/referenten/fink.webp",
              },
              {
                name: "Alexej Utz",
                role: "Teamleiter Software-Entwicklung, itestra",
                photo: "/for-students/referenten/utz.webp",
              },
            ].map((ref) => (
              <div
                key={ref.name}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={ref.photo}
                  alt={ref.name}
                  loading="lazy"
                  className="w-24 h-24 rounded-full object-cover object-top bg-[#0F2B57] border-2 border-[#B7860B] mb-3"
                />
                <p className="font-bold text-[#0F2B57] leading-tight">
                  {ref.name}
                </p>
                <p className="text-xs text-slate-500 leading-snug mt-1">
                  {ref.role}
                </p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 mt-8 text-center">und weitere …</p>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto text-center mt-10 pt-8 border-t border-slate-100">
            Einige Führungskräfte, die bei uns referieren, waren in ihrer
            Studienzeit selbst bei TEG engagiert und haben an Workshops im
            Rahmen unserer Ausbildungsformate teilgenommen. Heute geben sie ihr
            Wissen und ihre Lebenserfahrung in 4- bis 8-stündigen intensiven
            Workshops an die nächste Generation TEGler weiter.
          </p>
        </div>
      </section>

      {/* SEKTION 3: PROGRAMM-AUFBAU */}
      <ProgramTimeline />

      {/* GOLDENER TRENNER */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#B7860B]/40 to-transparent bg-[#0A1628]" />

      {/* SEKTION 4: CAREERPATHS (REWORKED POSITIONING) */}
      <section className="py-32 bg-[#0A1628] text-white relative overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter">
          Vision
        </div>

        {/* GOLDENER GLOW HINTER DEM RADAR */}
        <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B7860B]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-custom px-4 md:px-8 mx-auto relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center text-left">
            <div className="lg:col-span-5 space-y-12 text-left">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none text-[#B7860B] text-left text-left">
                Zukunftschancen
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-md text-left">
                Unsere YBLA bereitet dich auf die anspruchsvollsten Pfade der
                Wirtschaft vor. YBLA Absolventen sind heute führende Köpfe in
                globalen Konzernen. Ganze 30% davon in der Unternehmensleitung
              </p>

              <div className="grid grid-cols-2 gap-x-6 gap-y-10 pt-6 border-t border-white/10 text-left">
                {[
                  { label: "Absolventen", val: "300+" },
                  { label: "Top-Level Führungskräfte in Konzernen", val: "41" },
                  {
                    label: "Top-Level Führungskräfte im Mittelstand",
                    val: "40",
                  },
                  { label: "Unternehmens-gründer", val: "15" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1 text-left text-left"
                  >
                    <span className="text-4xl md:text-5xl font-black text-[#B7860B] leading-none text-left">
                      <Counter value={stat.val} />
                    </span>
                    <span className="text-[10px] md:text-[11px] uppercase font-bold tracking-wider text-slate-300 leading-tight text-left">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <CareerExplorer />
          </div>
        </div>
      </section>

      {/* SEKTION 5: ROADMAP */}
      <section className="py-24 bg-white relative overflow-hidden text-left">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <span className="text-[25vw] font-black uppercase tracking-tighter text-[#B7860B]/5 whitespace-nowrap text-left">
            YBLA
          </span>
        </div>
        <div className="container-custom px-4 md:px-8 mx-auto relative z-10 text-left">
          <div className="mb-16 text-left">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0F2B57] mb-4 text-left">
              Termine & <span className="text-[#B7860B]">Roadmap</span>
            </h2>
            <div className="h-1.5 w-24 bg-[#B7860B] text-left" />
          </div>
          <div className="relative text-left">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2 hidden md:block text-left" />
            <div className="space-y-20 text-left">
              <div className="relative flex flex-col md:flex-row md:justify-center items-start md:items-center pl-12 md:pl-0 text-left">
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#B7860B] md:-translate-x-1/2 z-20 shadow-lg text-left" />
                <div className="md:w-1/2 md:pr-20 md:text-right mb-4 md:mb-0 text-left md:text-right">
                  <h4 className="text-xl font-bold text-[#0F2B57] uppercase tracking-tight text-left md:text-right">
                    Vorab-Bewerbung
                  </h4>
                  <p className="text-slate-500 mt-2 max-w-sm md:ml-auto text-left md:text-right text-left">
                    Du kannst dich jederzeit vorab bewerben. Am 01.10. erhältst
                    du eine Mail zur Bestätigung der Gültigkeit.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-20 text-left text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0F2B57] rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 text-left">
                    <Mail size={14} className="text-[#B7860B]" /> Jetzt möglich
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col md:flex-row md:justify-center items-start md:items-center pl-12 md:pl-0 text-left text-left">
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-[#0F2B57] md:-translate-x-1/2 z-20 shadow-lg text-left" />
                <div className="md:w-1/2 md:pr-20 md:text-right mb-4 md:mb-0 text-left md:text-right text-left text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest text-left">
                    <Calendar size={14} className="text-[#B7860B]" /> 01. - 24.
                    Oktober
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-20 text-left">
                  <h4 className="text-xl font-bold text-[#0F2B57] uppercase tracking-tight text-left">
                    Haupt-Bewerbungsphase
                  </h4>
                  <p className="text-slate-500 mt-2 max-w-sm text-left">
                    Unser offizielles Zeitfenster zur Bewerbung für neue
                    Talente. Am 25. & 26.10. findet die Auswahl statt.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col md:flex-row md:justify-center items-start md:items-center pl-12 md:pl-0 text-left text-left">
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#0F2B57] md:-translate-x-1/2 z-20 shadow-lg text-left" />
                <div className="md:w-1/2 md:pr-20 md:text-right mb-4 md:mb-0 text-left md:text-right text-left text-left text-left">
                  <h4 className="text-xl font-bold text-[#0F2B57] uppercase tracking-tight text-left md:text-right">
                    Interviews
                  </h4>
                  <p className="text-slate-500 mt-2 max-w-sm md:ml-auto text-left md:text-right text-left">
                    Auswahlinterviews in unserem eigenen TEG Office sowie eine
                    Eignungsdiagnostik (Persönlichkeits- und Logiktest), ob du
                    dich für Personalverantwortung eignest.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-20 text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0F2B57] rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 text-left">
                    <Clock size={14} className="text-[#B7860B]" /> 28.10. -
                    03.11.
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col md:flex-row md:justify-center items-start md:items-center pl-12 md:pl-0 text-left text-left">
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-[#B7860B] md:-translate-x-1/2 z-20 flex items-center justify-center shadow-lg text-left text-left">
                  <Info size={18} className="text-white text-left" />
                </div>
                <div className="md:w-1/2 md:pr-20 md:text-right mb-4 md:mb-0 text-left md:text-right text-left text-left text-left text-left">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#B7860B] text-white rounded-full text-xs font-black uppercase tracking-widest shadow-lg text-left">
                    Kick-Off Event
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-20 text-left text-left">
                  <h4 className="text-xl font-bold text-[#0F2B57] uppercase tracking-tight text-left">
                    Start des Programms
                  </h4>
                  <p className="text-slate-600 mt-2 max-w-sm font-medium text-left">
                    06.11. (Abends) & 07.11. (Ganztags). Die Teilnahme ist
                    verpflichtend für alle neuen Member.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="apply-section"
        className="py-16 px-4 bg-white text-left text-left"
      >
        <div className="container-custom bg-[#091C3A] p-10 md:p-14 text-center rounded-xl shadow-lg relative mx-auto overflow-hidden text-left text-left">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter mb-8 text-white text-center">
            Bewirb dich jetzt, und werde Teil von TEG!
          </h2>
          <motion.a
            href="https://application.myteg-ev.de/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#B7860B] text-white px-10 py-4 font-bold uppercase text-[10px] tracking-[0.2em] rounded-sm shadow-lg transition-all text-left"
          >
            Jetzt Bewerben <MousePointer2 size={16} />
          </motion.a>
        </div>
      </section>

      {/* LOGO KARUSSELL */}
      <section className="py-16 bg-white overflow-hidden text-center mx-auto border-b border-slate-100 text-left text-left text-left">
        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-12 text-center text-center">
          Unsere Gründer-Firmen
        </h2>
        <div className="flex whitespace-nowrap mb-8 justify-center text-left text-left">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-20 pr-20 text-left text-left text-left"
          >
            {[...scrollingLogos, ...scrollingLogos].map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.name}
                className="h-10 w-auto object-contain opacity-60 text-left text-left text-left"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <StudentFaq />

      {/* KONTAKT */}
      <section className="pb-24 pt-16 bg-white px-4 text-left text-left text-left text-left">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden rounded-xl shadow-2xl min-h-[400px] text-left text-left">
          <div className="md:w-1/2 w-full h-72 md:h-auto bg-slate-50 flex items-start text-left text-left text-left text-left text-left">
            <img
              src="/for-students/team/yassin-portrait.jpeg"
              alt="Yassin"
              className="w-full h-full object-cover text-left"
            />
          </div>
          <div className="md:w-1/2 w-full bg-[#0F2B57] p-10 md:p-14 flex flex-col justify-center text-white text-left text-left">
            <div className="flex gap-4 mb-8 text-left text-left text-left">
              <div className="w-[2px] bg-[#B7860B] text-left text-left" />
              <p className="italic text-xl text-slate-200 leading-tight text-left text-left">
                “Wenn du Fragen hast, schreib mir gerne eine Nachricht!”
              </p>
            </div>
            <div className="mb-10 text-left text-left">
              <h3 className="text-xl font-bold mb-1 text-left text-white">
                Yassin Aboushelib
              </h3>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] text-left text-left text-left">
                {" "}
                Leitung People & Operations
              </p>
            </div>
            <div className="flex gap-10 text-left">
              <a
                href="https://www.linkedin.com/in/yassin-aboushelib/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#B7860B] hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors text-left text-left"
              >
                <Linkedin size={24} /> LinkedIn
              </a>
              <a
                href="mailto:yassin.aboushelib@teg-ev.de"
                className="flex items-center gap-2 text-[#B7860B] hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors text-left text-left text-left text-left text-left"
              >
                <Mail size={24} /> Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const programSteps = [
  {
    label: "1. Semester",
    title: "Einstieg",
    subtitle: "Management Workshops 1 · Praxis-Modul 1",
    image: "/shared/teg-compliment-fallback.jpeg",
    modules: [
      {
        name: "Management Workshops 1",
        desc: "Workshops mit Führungskräften zu Karriere, Führungsebenen und Verantwortung.",
      },
      {
        name: "Praxis-Modul 1",
        points: [
          "Mitarbeit in einem Fachteam von TEG, z. B. im Sales.",
          "Onboarding in jeweiliges Team.",
          "Mentoring durch Teamlead.",
        ],
      },
    ],
  },
  {
    label: "2. Semester",
    title: "Verantwortung",
    subtitle: "Management Workshops 2 · Praxis-Modul 2 · Projektleitung",
    image: "/events/converted/frontier-tech-conference-2025.webp",
    modules: [
      {
        name: "Management Workshops 2",
        desc: "Weitere Workshops mit Führungskräften aus der Wirtschaft.",
      },
      {
        name: "Praxis-Modul 2",
        points: [
          "Mehr Verantwortung im eigenen Aufgabenbereich.",
          "Weiterentwicklung von Prozessen und Abläufen im Fachteam.",
          "Gewinnung eines Mentors aus der Industrie zu deiner Fachrolle.",
        ],
      },
      {
        name: "Projektleitungs-Modul",
        desc: "Du leitest ein eigenes Projekt, z. B. eine Industrie-Konferenz mit Top-Managern.",
      },
    ],
  },
  {
    label: "3. Semester",
    title: "Führung",
    subtitle: "Management Workshops 3 · Praxis-Modul 3 · Abschlussarbeit",
    image: "/events/converted/fireside-chat-2025.webp",
    modules: [
      {
        name: "Management Workshops 3",
        desc: "Schwerpunkt Management und Führung.",
      },
      {
        name: "Praxis-Modul 3",
        desc: "Abschluss der Mitarbeit im Fachteam.",
      },
      {
        name: "Abschlussarbeit",
        desc: "Eigene Arbeit auf Basis von Interviews mit Führungskräften.",
      },
    ],
  },
];

// Programm-Aufbau als Timeline mit Semester-Karten
const ProgramTimeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  // Linie läuft exakt vom Mittelpunkt des ersten bis zum letzten Punkt
  const [track, setTrack] = useState({ top: 0, height: 0 });
  // Punkte füllen sich, sobald die Linie (Viewport-Mitte) sie erreicht
  const [reached, setReached] = useState<boolean[]>([]);

  useEffect(() => {
    const container = timelineRef.current;
    if (!container) return;
    const measure = () => {
      const dots = container.querySelectorAll<HTMLElement>(
        "[data-timeline-dot]",
      );
      if (dots.length < 2) return;
      const box = container.getBoundingClientRect();
      const center = (el: HTMLElement) => {
        const r = el.getBoundingClientRect();
        return r.top + r.height / 2 - box.top;
      };
      const top = center(dots[0]);
      setTrack({ top, height: center(dots[dots.length - 1]) - top });
    };
    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(container);

    const dots = Array.from(
      container.querySelectorAll<HTMLElement>("[data-timeline-dot]"),
    );
    const dotObserver = new IntersectionObserver(
      (entries) => {
        setReached((prev) => {
          const next = dots.map((_, i) => prev[i] ?? false);
          for (const entry of entries) {
            const i = dots.indexOf(entry.target as HTMLElement);
            next[i] = entry.isIntersecting;
          }
          return next;
        });
      },
      // Root reicht weit über den Viewport nach oben bis zur Mitte, damit
      // auch schnelles Scrollen (Sprung über die Mitte hinaus) erkannt wird
      { rootMargin: "100000px 0px -50% 0px" },
    );
    dots.forEach((dot) => dotObserver.observe(dot));

    return () => {
      resizeObserver.disconnect();
      dotObserver.disconnect();
    };
  }, []);

  const dotClass = (i: number) =>
    `absolute z-10 -left-8 md:-left-12 w-4 h-4 md:w-6 md:h-6 rounded-full border-2 border-[#B7860B] transition-colors duration-300 ${
      i === 0 || reached[i] ? "bg-[#B7860B]" : "bg-[#0A1628]"
    }`;

  return (
    <section className="py-24 md:py-32 bg-[#0A1628] text-white border-b border-white/5">
      <div className="container-custom px-4 md:px-8 mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
            YBLA Programm-Aufbau
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-16">
          {[
            { val: "3", label: "Semester parallel zum Studium" },
            { val: "8", label: "Module bis zum Abschluss" },
            { val: "10–18 h", label: "pro Woche, abends & samstags" },
            { val: "8–15", label: "Plätze pro Semester" },
          ].map((fact) => (
            <div key={fact.label} className="bg-[#0A1628] p-5 md:p-6">
              <p className="text-3xl md:text-4xl font-black text-[#B7860B] leading-none">
                {fact.val}
              </p>
              <p className="text-[10px] md:text-[11px] uppercase font-bold tracking-wider text-slate-300 mt-2 leading-tight">
                {fact.label}
              </p>
            </div>
          ))}
        </div>

        <div ref={timelineRef} className="relative pl-8 md:pl-12">
          {/* Timeline-Linie: Die goldene Füllung klebt per position: sticky mit
              ihrer Unterkante an der Viewport-Mitte. Der Browser scrollt sie
              selbst mit, ohne JavaScript pro Frame, daher flackert nichts.
              Oberhalb wird sie an der Linie abgeschnitten (overflow: clip,
              nicht hidden, sonst greift sticky nicht). */}
          <div
            style={{ top: track.top, height: track.height }}
            className="absolute left-[7px] md:left-[11px] w-0.5 bg-white/10 [overflow:clip]"
          >
            <div
              style={{ top: -track.height, height: track.height * 2 }}
              className="absolute inset-x-0"
            >
              <div style={{ height: track.height }} />
              <div
                style={{ height: track.height }}
                className="sticky bottom-[50vh] bg-[#B7860B]"
              />
            </div>
          </div>

          <div className="space-y-6">
            {programSteps.map((step, i) => (
              <div key={step.label} className="relative">
                <div data-timeline-dot className={`${dotClass(i)} top-8`} />
                <div className="bg-white/[0.03] border border-white/10 overflow-hidden">
                  <div className="aspect-[21/9] w-full overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
                  <div className="p-5 md:p-8">
                    <span className="text-[#B7860B] font-black uppercase tracking-widest text-[10px] block mb-1">
                      {step.label}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-none text-white">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-sm md:text-base mt-2">
                      {step.subtitle}
                    </p>
                  </div>
                  <ul className="px-5 md:px-8 pb-6 md:pb-8 space-y-4 border-t border-white/10 pt-6">
                    {step.modules.map((m) => (
                      <li key={m.name} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="text-[#B7860B] shrink-0 mt-1"
                        />
                        <div>
                          <p className="font-bold text-base md:text-lg leading-snug">
                            {m.name}
                          </p>
                          {"desc" in m && (
                            <p className="text-slate-400 text-sm md:text-base leading-snug">
                              {m.desc}
                            </p>
                          )}
                          {"points" in m && (
                            <ul className="mt-1 space-y-1 list-disc list-inside marker:text-white marker:text-xs">
                              {m.points.map((p) => (
                                <li
                                  key={p}
                                  className="text-slate-400 text-sm md:text-base leading-snug"
                                >
                                  {p}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Abschluss */}
            <div className="relative">
              <div
                data-timeline-dot
                className={`${dotClass(programSteps.length)} top-6 flex items-center justify-center`}
              >
                {/* Haken zeichnet sich, sobald der Abschluss-Punkt gefüllt ist */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-3 h-3 md:w-4 md:h-4"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M4.5 12.5l4.5 4.5L19.5 7"
                    fill="none"
                    stroke="#0A1628"
                    strokeWidth={3.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={false}
                    animate={
                      reached[programSteps.length]
                        ? { pathLength: 1, opacity: 1 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{
                      pathLength: {
                        duration: 0.45,
                        ease: "easeOut",
                        delay: 0.2,
                      },
                      opacity: { duration: 0.1, delay: 0.2 },
                    }}
                  />
                </svg>
              </div>
              <div className="border border-[#B7860B]/40 bg-[#B7860B]/10 p-5 md:p-8">
                <span className="text-[#B7860B] font-black uppercase tracking-widest text-[10px] block mb-1">
                  Abschluss
                </span>
                <p className="text-lg md:text-xl font-bold leading-snug">
                  Abschlusszeugnis über deine Leistungen und Führungsreife und
                  TEGler auf Lebenszeit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Karrierewege nach der YBLA (Quelle: TEG-Karrierewege.pdf)
type CareerPath = {
  title: string;
  icon: React.ElementType;
  desc: string;
  steps: string[];
};

const careerPaths: Record<string, CareerPath> = {
  vertrieb: {
    title: "Vertrieb & Markt",
    icon: TrendingUp,
    desc: "Du öffnest Märkte, in die das Unternehmen vorher nicht hineinkam, und führst die Teams, die die Abschlüsse holen. Wenn ein ganzes Quartal an einem einzigen Deal hängt, sitzt du am Tisch und verhandelst ihn.",
    steps: [
      "Teamleitung Vertrieb",
      "Head of Sales",
      "Vice President Sales",
      "Chief Commercial Officer",
    ],
  },
  engineering: {
    title: "Engineering & Software",
    icon: Code2,
    desc: "Code schreiben können viele – du entscheidest, was gebaut wird, und führst das Team, das es baut. Vom Tech Lead bis zum CTO verantwortest du Architektur, Tempo und die Produkte des Unternehmens.",
    steps: [
      "Engineering Lead",
      "Head of Engineering",
      "Vice President Engineering",
      "CTO",
    ],
  },
  strategie: {
    title: "Unternehmensstrategie",
    icon: Target,
    desc: "Jeder große Konzern leistet sich eine eigene Strategieabteilung – die Einheit, die entscheidet, wohin sich das Unternehmen als Nächstes bewegt. Du analysierst Märkte und Wettbewerber, bewertest Übernahmen und entscheidest, wo das Unternehmen angreift und wo nicht. Als Chief Strategy Officer legst du dem Vorstand den Kurs vor, auf den sich das ganze Haus ausrichtet.",
    steps: [
      "Teamleitung Strategie",
      "Director Strategy",
      "Chief Strategy Officer",
    ],
  },
  forschung: {
    title: "Forschung & Entwicklung",
    icon: FlaskConical,
    desc: "Ob du ein Labor leitest oder die Entwicklung eines ganzen Geschäftsbereichs verantwortest: Du setzt die Richtung, an der geforscht wird, und bringst die Ergebnisse dahin, wo sie zu Produkten werden.",
    steps: ["Laborleitung", "Head of R&D", "Vice President R&D"],
  },
  recht: {
    title: "Recht & Compliance",
    icon: Scale,
    desc: "Andere Juristen schreiben Gutachten. Du sitzt am Tisch, wenn entschieden wird – als General Counsel verantwortest du Recht und Compliance, verhandelst die großen Verträge und entscheidest mit, wohin das Unternehmen geht.",
    steps: [
      "Teamleitung Legal",
      "Head of Legal & Compliance",
      "General Counsel",
      "Kaufm.-jur. Geschäftsführung",
    ],
  },
  gruendung: {
    title: "Eigenes Unternehmen",
    icon: Rocket,
    desc: "Nach der YBLA kennst du die Konzern-Welt auswendig – du weißt, was die C-Levels der DAX-Konzerne nachts wachhält, und sprichst ihre Sprache. Du baust ein B2B-Unternehmen, das genau diese Probleme löst, und verhandelst deine Deals dort, wo sie fallen: im obersten Stockwerk.",
    steps: ["Erste Konzern-Erfahrung", "B2B-Gründung", "Geschäftsführung"],
  },
};

// Felder im Radar und welche Karrierewege sie zeigen
const careerFields = [
  {
    name: "Strategy",
    short: "Unternehmensstrategie",
    side: "left",
    paths: ["strategie"],
  },
  {
    name: "Recht & Compliance",
    short: "Recht & Compliance",
    side: "right",
    paths: ["recht"],
  },
  {
    name: "Forschung & Entwicklung",
    short: "Forschung & Entwicklung",
    side: "left",
    paths: ["forschung"],
  },
  {
    name: "Vertrieb & Markt",
    short: "Vertrieb & Markt",
    side: "right",
    paths: ["vertrieb"],
  },
  {
    name: "Engineering & Software",
    short: "Engineering & Software",
    side: "left",
    paths: ["engineering"],
  },
  {
    name: "B2B Gründertum",
    short: "B2B Gründertum",
    side: "right",
    paths: ["gruendung"],
  },
] as const;

const CareerPathDetail = ({ path }: { path: CareerPath }) => {
  const Icon = path.icon;
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 shrink-0 rounded-md border border-[#B7860B]/40 bg-[#B7860B]/10 flex items-center justify-center">
          <Icon size={20} className="text-[#B7860B]" />
        </div>
        <h4 className="text-lg font-bold text-white leading-tight">
          {path.title}
        </h4>
      </div>
      <p className="text-slate-300 text-sm leading-relaxed">{path.desc}</p>
      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 mt-4 text-xs">
        {path.steps.map((step, i) => {
          const last = i === path.steps.length - 1;
          return (
            <React.Fragment key={step}>
              <span
                className={last ? "text-[#B7860B] font-bold" : "text-slate-400"}
              >
                {step}
              </span>
              {!last && <ChevronRight size={12} className="text-slate-600" />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

const CareerFieldCard = ({
  field,
}: {
  field: (typeof careerFields)[number];
}) => (
  <div className="bg-[#051222]/95 border border-[#B7860B]/40 rounded-md shadow-2xl p-6 md:p-7 relative">
    <span className="text-[#B7860B] font-black uppercase tracking-[0.3em] text-[10px] block mb-5">
      {field.paths.length > 1 ? "Karrierewege" : "Karriereweg"}
    </span>
    <div className="space-y-6 divide-y divide-white/10 [&>*+*]:pt-6">
      {field.paths.map((key) => (
        <CareerPathDetail key={key} path={careerPaths[key]} />
      ))}
    </div>
  </div>
);

// Radar mit klickbaren Feldern; die Karte zum Feld erscheint in der Mitte
const CareerExplorer = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const field = selected === null ? null : careerFields[selected];

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    // Klick außerhalb von Karte und Feldern schließt die Karte
    const onPointer = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-career-card], [data-career-field]")) {
        setSelected(null);
      }
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [selected]);

  const toggle = (i: number) => setSelected((cur) => (cur === i ? null : i));
  const rows = [
    { indices: [0, 1], className: "flex justify-around px-20" },
    { indices: [2, 3], className: "flex justify-between px-0" },
    { indices: [4, 5], className: "flex justify-around px-20" },
  ];

  return (
    <>
      {/* RADAR BOXEN (VERSETZTE ANORDNUNG) */}
      <div className="lg:col-span-7 relative h-[650px] hidden md:flex items-center justify-center text-left">
        {/* ZENTRUM */}
        <div className="relative z-20 w-24 h-24 rounded-full bg-[#B7860B] flex items-center justify-center shadow-[0_0_50px_rgba(183,134,11,0.5)] border-2 border-white/20">
          <Target className="text-[#0A1628]" size={40} />
        </div>

        {/* HINTERGRUND RINGE */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-[300px] h-[300px] border border-[#B7860B] rounded-full" />
          <div className="absolute w-[550px] h-[550px] border border-[#B7860B] rounded-full" />
        </div>

        {/* KARTEN POSITIONIERUNG (STAGGERED FÜR RADAR LOOK) */}
        <div className="absolute inset-0 flex flex-col justify-between py-12 text-left">
          {rows.map((row) => (
            <div key={row.indices.join()} className={row.className}>
              {row.indices.map((i) => (
                <CareerCard
                  key={careerFields[i].name}
                  name={careerFields[i].name}
                  side={careerFields[i].side}
                  active={selected === i}
                  onClick={() => toggle(i)}
                />
              ))}
            </div>
          ))}
        </div>

        {/* KARTE IN DER MITTE */}
        <AnimatePresence>
          {field && (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
            >
              <div
                data-career-card
                className="w-[440px] max-w-full max-h-[600px] overflow-y-auto pointer-events-auto"
              >
                <div className="relative">
                  <CareerFieldCard field={field} />
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    aria-label="Schließen"
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* MOBIL: FELDER ALS BUTTONS, KARTE DARUNTER */}
      <div className="md:hidden text-left">
        <div className="flex flex-wrap gap-2">
          {careerFields.map((f, i) => (
            <button
              key={f.name}
              type="button"
              data-career-field
              onClick={() => toggle(i)}
              aria-pressed={selected === i}
              className={`border px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-white transition-colors ${
                selected === i
                  ? "bg-[#B7860B]/20 border-[#B7860B]"
                  : "bg-white/5 border-white/10"
              }`}
            >
              {f.short}
            </button>
          ))}
        </div>
        {field && (
          <div className="mt-4" data-career-card>
            <CareerFieldCard field={field} />
          </div>
        )}
      </div>
    </>
  );
};

// Hilfskomponente für die versetzten Karten (fixiert den fehlenden Punkt und das Layout)
const CareerCard = ({
  name,
  side,
  active,
  onClick,
}: {
  name: string;
  side: "left" | "right";
  active: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    data-career-field
    onClick={onClick}
    aria-pressed={active}
    className={`bg-[#051222]/80 border backdrop-blur-md px-5 py-4 rounded-sm hover:border-[#B7860B] transition-all w-[260px] shadow-2xl relative pointer-events-auto cursor-pointer ${active ? "border-[#B7860B]" : "border-white/10"}`}
  >
    <div
      className={`flex items-center gap-3 ${side === "right" ? "flex-row-reverse text-right" : "flex-row text-left"}`}
    >
      <div className="w-2 h-2 bg-[#B7860B] rounded-full shadow-[0_0_8px_#B7860B]" />
      <h4 className="text-[10px] font-black uppercase tracking-[0.15em] text-white leading-tight">
        {name}
      </h4>
    </div>
  </button>
);

export default ForStudents;
