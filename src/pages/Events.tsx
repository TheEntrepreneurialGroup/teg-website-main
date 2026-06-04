import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  X,
  ChevronRight,
  ChevronLeft,
  Mail,
  Linkedin,
} from "lucide-react";

interface EventData {
  id: string | number;
  title: string;
  date: string;
  location: string;
  category?: string;
  topic?: string;
  description: string;
  longText: string;
  image: string;
  imageFit?: "cover" | "contain";
  externalLink?: string;
  speakers?: {
    name: string;
    company: string;
    position: string;
  }[];
}

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [[upcomingPage, upcomingDir], setUpcomingPage] = useState([0, 0]);
  const [[pastPage, pastDir], setPastPage] = useState([0, 0]);

  const lumaLink = "https://luma.com/71152vc3?utm_source=tg_ws";
  const upcomingEvents: EventData[] = [
    {
      id: "ai-2026",
      title: "AI Consulting Conference 2026",
      date: "10.06.2026",
      location: "Netlight, München",
      category: "Upcoming Highlight",
      topic: "Beyond Hype. Into Business.",
      description:
        "Ein kuratierter Konferenztag darüber, wie KI Consulting, Geschäftsmodelle und Karrieren konkret verändert.",
      longText:
        "Die AI Consulting Conference bringt Perspektiven aus Strategieberatung, Tech-Consulting, Industrie, angewandter KI, Forschung und Recht zusammen. Im Fokus stehen reale KI-Use-Cases, AI-Assets in Beratungsarbeit, Industry Briefings, Applied-AI-Workshops, Governance, Haftung und die Zukunft der Beraterkarriere.",
      image: "/events/converted/ai-consulting-conference-2026.webp",
      imageFit: "contain",
      externalLink: lumaLink,
      speakers: [
        {
          name: "Florian Bauer",
          company: "McKinsey & Company",
          position: "Senior Partner, Technology & AI Leader DACH",
        },
        {
          name: "Marcus Hartmann",
          company: "Roland Berger",
          position: "Senior Partner",
        },
        {
          name: "Andrea Martin",
          company: "IBM",
          position: "CTO DACH",
        },
        {
          name: "Dr. Andreas Liebl",
          company: "appliedAI Initiative",
          position: "CEO",
        },
      ],
    },
  ];

  const pastEvents: EventData[] = [
    {
      id: "teg-talk-24-04-2026",
      title: "TEG Talk: Corporate Entrepreneurship",
      date: "24.04.2026",
      location: "O2 Tower / Wayra Germany, München",
      category: "TEG Talk",
      topic: "Leiten. Verantworten. Gründen.",
      description:
        "Wie unternehmerisches Denken in großen Organisationen Wirkung entfaltet.",
      longText:
        "Ein Abend über Corporate Entrepreneurship, technologische Verantwortung und Innovation in etablierten Strukturen. Im Fokus standen Software-defined Mobility, politische Verantwortung, Healthtech, KI und die Frage, wie aus Strategie konkrete Umsetzung wird.",
      image: "/events/converted/teg-talk-24-04-2026.webp",
      externalLink: "https://luma.com/fuk94geg",
      speakers: [
        {
          name: "Georg Doll",
          company: "Microsoft",
          position: "CTO Automotive & Mobility",
        },
        {
          name: "Dr. Tobias Süß",
          company: "HENSOLDT",
          position: "Director Political Affairs",
        },
        {
          name: "Dr. Hartwig Rüll",
          company: "Siemens / Semiconductor & Communication",
          position: "Strategy and technology leader",
        },
        {
          name: "Dr. Irene Lejeune",
          company: "CE Consumer Electronics",
          position: "Co-Founder",
        },
      ],
    },
    {
      id: "charging-ahead-2026",
      title: "Charging Ahead: Deutschland vs. China",
      date: "20.01.2026",
      location: "smartvillage Bogenhausen, München",
      category: "Industry Panel",
      topic: "E-Mobility, Automotive Strategy and China Competition",
      description:
        "Ein Panel zur Frage, wo deutsche OEMs im globalen E-Mobility-Wettlauf stehen.",
      longText:
        "Gemeinsam mit Expertinnen und Experten aus Industrie und Wissenschaft diskutierte TEG Software, User Experience, Entwicklungsgeschwindigkeit, Markenidentität, autonome Systeme, Regulierung und nachhaltige Antriebstechnologien. Das Format verband strategische Industrieperspektiven mit akademischer Tiefe und offenem Networking.",
      image: "/events/converted/charging-ahead-2026-alt.webp",
      speakers: [
        {
          name: "Jennifer Treiber-Ruckenbrod",
          company: "MINI",
          position: "Global CMO",
        },
        {
          name: "Janik Juelch",
          company: "XPENG Deutschland",
          position: "Customer Experience & Sponsoring Manager",
        },
        {
          name: "Prof. Dr. Johannes Betz",
          company: "Technical University of Munich",
          position: "Professor für Autonomes Fahren",
        },
        {
          name: "Prof. Dr. Malte Jaensch",
          company: "Technical University of Munich",
          position: "Professor für nachhaltige mobile Antriebssysteme",
        },
      ],
    },
    {
      id: "frontier-tech-conference-2025",
      title: "Frontier Tech Conference 2025",
      date: "10.12.2025",
      location: "MaibornWolff, München",
      category: "Conference",
      topic: "The unsexy skills to turn research into companies",
      description:
        "Tech Meets Reality, Ideas Meet Execution: Deep-Tech-Gründung jenseits der Theorie.",
      longText:
        "TEG und PushQuantum brachten STEM-Studierende, Forschende, Founder und Professionals zusammen, um die operative Seite von Deep-Tech-Unternehmen zu verstehen: Team Execution, Finanzierung, Skalierung, Markteintritt und reale Use Cases von Quantum bis Aerospace, Automotive und Robotics.",
      image: "/events/converted/frontier-tech-conference-2025.webp",
      externalLink: "https://luma.com/cyr1ctl9",
      speakers: [
        {
          name: "Jan Goetz",
          company: "IQM Quantum Computers",
          position: "CEO & Co-Founder",
        },
        {
          name: "Thomas Luschmann",
          company: "Peak Quantum",
          position: "Co-Founder & Managing Director",
        },
        {
          name: "Stephen DiAdamo",
          company: "Qoro Quantum",
          position: "Co-Founder & CTO",
        },
        {
          name: "Tobias Kalkowsky",
          company: "UnternehmerTUM / Digital Product School",
          position: "Agile Coach & Lecturer",
        },
      ],
    },
    {
      id: "enterprise-sales-2025",
      title: "Enterprise Sales: B2B",
      date: "20.11.2025",
      location: "München Innenstadt",
      category: "Business Event",
      topic: "Wie verkaufe ich an große Unternehmen?",
      description: "Sales als Brücke zwischen Produkt, Vertrauen und Wirkung.",
      longText:
        "Das Event zeigte, wie Gründerinnen, Gründer und Young Professionals komplexe B2B-Sales-Prozesse strukturieren, Entscheider auf Augenhöhe erreichen und Vertrauen als Wachstumsfaktor nutzen. Neben Praxisvorträgen ging es um mentale Blockaden, Enterprise-Methodik, technische Exzellenz und AI-gestützte Sales Execution.",
      image: "/events/converted/enterprise-sales-2025.webp",
      externalLink: "https://luma.com/x3umz079",
      speakers: [
        {
          name: "Georg Schwienbacher",
          company: "Georg Schwienbacher Consulting",
          position: "CEO",
        },
        {
          name: "Christopher Stützel",
          company: "Staffbase",
          position: "Large Enterprise Account Executive",
        },
        {
          name: "Heinz-Georg Geissler",
          company: "Bundesverband der Vertriebsmanager e.V.",
          position: "Leiter der Geschäftsstelle",
        },
        {
          name: "Achim A.",
          company: "Sinalis AI",
          position: "Founder",
        },
      ],
    },
    {
      id: "teg-talk-24-10-2025",
      title: "TEG Talk: Leadership Insights",
      date: "24.10.2025",
      location: "Microsoft Office, München",
      category: "TEG Talk",
      topic: "Leadership, Entrepreneurship and responsible company building",
      description: "Vier Perspektiven auf Führung, Unternehmertum und Wirkung.",
      longText:
        "Bei Microsoft München verband der TEG Talk Gründungserfahrung, Corporate Leadership und verantwortungsvolles Unternehmertum. Besonders im Fokus stand die Geschichte von Philipp Baaske: vom Physiker und Labor-Spin-off zum weltweit erfolgreichen Life-Science-Unternehmen.",
      image: "/shared/images/tegtalk-group-WS26.avif",
      externalLink: "https://luma.com/by6x0unh",
      speakers: [
        {
          name: "Philipp Baaske",
          company: "NanoTemper Technologies / LMU München",
          position: "Executive Chairman; Vice President Entrepreneurship",
        },
        {
          name: "Osman Agirbas",
          company: "Interhyp Group",
          position: "Managing Director",
        },
        {
          name: "Ulrich Beck",
          company: "Airbus Group / TEG Alumnus",
          position: "Former VP Finance",
        },
        {
          name: "Rene Pajta",
          company: "Microsoft",
          position: "Speaker",
        },
      ],
    },
    {
      id: "fireside-chat-2025",
      title: "From Student to Manager",
      date: "07.10.2025",
      location: "Atreus, München",
      category: "Fireside Chat",
      topic: "Karrierewege in die Führung",
      description:
        "Ein Abend über Leadership, Executive Search und frühe Weichenstellungen.",
      longText:
        "Der Fireside Chat zeigte, wie Studierende und Young Professionals früh Verantwortung entwickeln können. Diskutiert wurden Auswahlkriterien für Führungskräfte, Top-Management-Pfade, Transformation, Interim Management, Leadership Placement und die Rolle von Vision, Anpassungsfähigkeit und Kommunikation.",
      image: "/events/converted/fireside-chat-2025.webp",
      externalLink: "https://luma.com/jsc8kfna",
      speakers: [
        {
          name: "Petra Becker",
          company: "Atreus",
          position: "Direktorin & Executive Interim Managerin",
        },
        {
          name: "Laray Mbendjamen",
          company: "Heidrick & Struggles",
          position: "Engagement Manager",
        },
      ],
    },
  ];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginateUpcoming = (dir: number) =>
    setUpcomingPage([
      (upcomingPage + dir + upcomingEvents.length) % upcomingEvents.length,
      dir,
    ]);
  const paginatePast = (dir: number) => {
    const totalPages = Math.ceil(pastEvents.length / 2);
    setPastPage([(pastPage + dir + totalPages) % totalPages, dir]);
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 overflow-x-hidden">
      <div className="relative h-[45vh] w-full overflow-hidden bg-slate-900">
        <img
          src="/shared/heroes/hero-subpage.avif"
          alt="Hero"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom px-4 md:px-8">
            <div className="bg-slate-900 p-8 max-w-2xl border-l-8 border-white">
              <span className="text-white text-xs font-bold uppercase tracking-[0.2em] block mb-2">
                Gegründet 1986
              </span>
              <h1 className="text-white text-4xl font-bold uppercase tracking-tight">
                Events & Netzwerk.
              </h1>
              <p className="text-white/60 mt-4 text-base leading-relaxed">
                Schnittstelle zwischen High-Potentials und Wirtschaft.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container-custom relative px-4 md:px-16">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center">
              <span className="w-8 h-[1px] bg-blue-600 mr-3"></span> Upcoming
              Highlights
            </h2>
          </div>
          <div className="relative group">
            {upcomingEvents.length > 1 && (
              <>
                <button
                  onClick={() => paginateUpcoming(-1)}
                  className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition-all shadow-lg"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => paginateUpcoming(1)}
                  className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition-all shadow-lg"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
            <div className="relative min-h-[900px] md:h-[560px]">
              <AnimatePresence initial={false} custom={upcomingDir}>
                <motion.div
                  key={upcomingPage}
                  custom={upcomingDir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 grid grid-rows-[minmax(240px,0.95fr)_auto] md:grid-rows-none md:grid-cols-12 border border-slate-200 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden rounded-xl"
                >
                  <div className="md:col-span-7 h-full min-h-0">
                    <img
                      src={upcomingEvents[upcomingPage].image}
                      className={`w-full h-full ${
                        upcomingEvents[upcomingPage].imageFit === "contain"
                          ? "object-contain bg-[#0a1e3b]"
                          : "object-cover"
                      }`}
                      alt=""
                    />
                  </div>
                  <div className="md:col-span-5 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                    <p className="text-blue-600 font-bold text-[10px] uppercase mb-4">
                      {upcomingEvents[upcomingPage].category}
                    </p>
                    <h3 className="text-[clamp(1.6rem,8vw,3rem)] md:text-3xl font-bold mb-5 md:mb-6 uppercase tracking-tighter leading-none break-words">
                      {upcomingEvents[upcomingPage].title}
                    </h3>
                    {upcomingEvents[upcomingPage].topic && (
                      <p className="text-slate-900 text-xs font-bold uppercase tracking-widest mb-4 leading-relaxed">
                        {upcomingEvents[upcomingPage].topic}
                      </p>
                    )}
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {upcomingEvents[upcomingPage].description}
                    </p>
                    <div className="space-y-3 mb-6 md:mb-8 text-slate-500 text-sm">
                      <p className="flex items-center">
                        <Calendar size={16} className="mr-3" />{" "}
                        {upcomingEvents[upcomingPage].date}
                      </p>
                      <p className="flex items-center">
                        <MapPin size={16} className="mr-3" />{" "}
                        {upcomingEvents[upcomingPage].location}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setSelectedEvent(upcomingEvents[upcomingPage])
                      }
                      className="bg-slate-900 text-white px-6 md:px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-all w-fit"
                    >
                      Details ansehen
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 pb-10 md:pt-24 md:pb-14 bg-white relative overflow-hidden">
        <div className="container-custom px-4 md:px-16 relative z-10">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16 items-center">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4">
                Past Events
              </h2>
              <div className="h-1 w-16 bg-blue-600 mb-6" />
              <p className="text-slate-500 text-sm leading-relaxed">
                Unsere Historie spiegelt die Qualität unserer Partnerschaften
                wider.
              </p>
            </div>
            <div className="md:col-span-2 relative group min-h-[800px] md:min-h-[460px]">
              <button
                onClick={() => paginatePast(-1)}
                className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition-all shadow-md"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => paginatePast(1)}
                className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition-all shadow-md"
              >
                <ChevronRight size={20} />
              </button>
              <div className="relative h-[800px] md:h-[460px] overflow-hidden rounded-xl">
                <AnimatePresence initial={false} custom={pastDir}>
                  <motion.div
                    key={pastPage}
                    custom={pastDir}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 p-2"
                  >
                    {pastEvents
                      .slice(pastPage * 2, pastPage * 2 + 2)
                      .map((event) => (
                        <div
                          key={event.id}
                          onClick={() => setSelectedEvent(event)}
                          className="border border-slate-100 cursor-pointer bg-white h-full group rounded-lg shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col"
                        >
                          <div className="h-44 sm:h-48 shrink-0 overflow-hidden">
                            <img
                              src={event.image}
                              className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                                event.imageFit === "contain"
                                  ? "object-contain bg-[#0a1e3b]"
                                  : "object-cover"
                              }`}
                              alt=""
                            />
                          </div>
                          <div className="flex flex-1 flex-col p-6 sm:p-7 pt-5 pb-8">
                            <p className="text-blue-600 font-bold text-[10px] uppercase mb-2">
                              {event.date}
                            </p>
                            <div>
                              <h4 className="font-bold uppercase text-[clamp(0.72rem,1.2vw,0.875rem)] tracking-widest leading-snug break-words">
                                {event.title}
                              </h4>
                              <p className="text-slate-500 text-[clamp(0.68rem,1vw,0.75rem)] leading-relaxed mt-3 break-words">
                                {event.topic || event.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker references will be added back once confirmed testimonials are available.
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="container-custom px-4 md:px-8">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] text-center mb-16">
            Referenzen ehemaliger Speaker
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-8 bg-white border border-slate-200 relative"
              >
                <Quote
                  className="text-blue-600/10 absolute top-4 right-4"
                  size={40}
                />
                <p className="text-slate-600 italic text-sm mb-6">
                  "Die Zusammenarbeit war hochprofessionell. Die Qualität der
                  Studierenden setzt Maßstäbe."
                </p>
                <p className="font-bold uppercase text-[10px] tracking-widest">
                  Referenz Speaker {i}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      <section className="pt-8 pb-16 md:pt-10 md:pb-24 bg-white">
        <div className="container-custom px-4 md:px-16">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden rounded-sm shadow-2xl min-h-[450px]">
            <div className="md:w-1/2 w-full h-80 md:h-auto relative">
              <img
                src="/for-companies/contact/jonathan.avif"
                alt="Jonathan Babelotzky"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="md:w-1/2 w-full bg-[#0a1e3b] p-12 md:p-16 flex flex-col justify-center text-white">
              <div className="flex gap-6 mb-10">
                <div className="w-[2px] bg-amber-500" />
                <p className="italic text-xl text-slate-200 leading-tight">
                  “Ich freue mich von Ihnen <br /> zu hören!”
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-2 tracking-tight">
                  Jonathan Babelotzky
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  Bereichsleiter
                  <br />
                  Organisationsstrategie und
                  <br />
                  Partnerschaften
                </p>
              </div>

              <div className="flex gap-12">
                <a
                  href="https://www.linkedin.com/in/jonathan-babelotzky/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-amber-500 hover:text-white transition-all text-sm font-bold tracking-wider"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a
                  href="mailto:jonathan.babelotzky@teg-ev.de"
                  className="flex items-center gap-2 text-amber-500 hover:text-white transition-all text-sm font-bold tracking-wider"
                >
                  <Mail size={18} /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-900/90 backdrop-blur-md">
            <button
              onClick={() => setSelectedEvent(null)}
              aria-label="Event schließen"
              className="absolute right-4 top-4 md:right-6 md:top-6 z-20 p-3 bg-white text-slate-900 border border-slate-200 rounded-full shadow-xl hover:bg-blue-600 hover:text-white transition-all"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white w-full max-w-[92rem] max-h-[88vh] md:h-[calc(100vh-48px)] md:max-h-[760px] overflow-y-auto md:overflow-hidden grid md:grid-cols-12 relative rounded-sm shadow-2xl"
            >
              <div className="h-44 sm:h-56 md:h-full md:col-span-4">
                <img
                  src={selectedEvent.image}
                  className={`w-full h-full ${
                    selectedEvent.imageFit === "contain"
                      ? "object-contain bg-[#0a1e3b]"
                      : "object-cover"
                  }`}
                  alt=""
                />
              </div>
              <div className="md:col-span-8 p-6 sm:p-8 md:p-7 lg:p-8 flex flex-col justify-center">
                <p className="text-blue-600 font-bold text-[10px] uppercase mb-2 tracking-widest">
                  {selectedEvent.category || "Past Event"}
                </p>
                <h2 className="text-[1.2rem] sm:text-2xl lg:text-3xl font-bold mb-3 uppercase tracking-normal leading-tight break-words">
                  {selectedEvent.title}
                </h2>
                <div className="grid sm:grid-cols-2 gap-2 mb-3 text-slate-500 text-sm">
                  <p className="flex items-center">
                    <Calendar size={16} className="mr-3 shrink-0" />
                    {selectedEvent.date}
                  </p>
                  <p className="flex items-center">
                    <MapPin size={16} className="mr-3 shrink-0" />
                    {selectedEvent.location}
                  </p>
                </div>
                {selectedEvent.topic && (
                  <p className="text-slate-900 text-xs font-bold uppercase tracking-widest mb-2 leading-relaxed break-words">
                    {selectedEvent.topic}
                  </p>
                )}
                <p className="text-slate-600 text-sm italic mb-3 border-l-4 border-slate-100 pl-4 leading-relaxed">
                  {selectedEvent.description}
                </p>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                  {selectedEvent.longText}
                </p>
                {selectedEvent.speakers &&
                  selectedEvent.speakers.length > 0 && (
                    <div className="mb-4">
                      <p className="text-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                        Speaker
                      </p>
                      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-3">
                        {selectedEvent.speakers.map((speaker) => (
                          <div
                            key={`${selectedEvent.id}-${speaker.name}`}
                            className="border-l-2 border-blue-600 pl-3"
                          >
                            <p className="text-slate-900 text-[13px] font-bold leading-snug break-words">
                              {speaker.name}
                            </p>
                            <p className="text-slate-500 text-[11px] leading-relaxed break-words">
                              {speaker.position}, {speaker.company}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                {selectedEvent.externalLink && (
                  <button
                    onClick={() =>
                      window.open(selectedEvent.externalLink, "_blank")
                    }
                    className="bg-blue-600 text-white py-3 px-6 font-bold uppercase text-[10px] tracking-widest hover:bg-blue-700 transition-all w-fit"
                  >
                    Event ansehen
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
