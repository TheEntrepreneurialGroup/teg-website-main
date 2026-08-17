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
  cardImage?: string;
  video?: string;
  imageFit?: "cover" | "contain";
  externalLink?: string;
  contactLink?: string;
  speakers?: {
    name: string;
    company?: string;
    position?: string;
    photo?: string;
  }[];
  detailsSpeakersOnly?: boolean;
}

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [[upcomingPage, upcomingDir], setUpcomingPage] = useState([0, 0]);
  const [[pastPage, pastDir], setPastPage] = useState([0, 0]);

  const biotechLumaLink = "https://luma.com/teg-qdjm";
  const upcomingEvents: EventData[] = [
    {
      id: "supplychainconference2026",
      title: "Supply Chain Conference",
      date: "8. Dezember 2026",
      location: "MaibornWolff GmbH, München",
      category: "Upcoming Highlight",
      topic: "Automation & Politics X Supply Chain",
      description:
        "TEG lädt ausgewählte Führungskräfte und Young Professionals zu einem Konferenztag nach München. Speaker stehen vor einem kuratierten Publikum und verbinden Geopolitik, Automatisierung und die Praxis der Lieferkette.",
      longText: "",
      image: "/events/converted/frontier-tech-conference-2025.webp",
      video: "/events/scc-events-hero-v3.mp4",
      imageFit: "cover",
      externalLink: "/supplychain",
      contactLink: "https://calendly.com/corbinian-massinger-teg-ev/30min",
      detailsSpeakersOnly: true,
      speakers: [
        {
          name: "Jochen Kröber",
          photo: "/events/speakers/kroeber.jpg",
        },
        {
          name: "Stephan Lustig",
          photo: "/events/speakers/lustig.jpg",
        },
        {
          name: "Oskar Schneider",
          photo: "/events/speakers/schneider.jpg",
        },
        {
          name: "Michael Risch",
          photo: "/events/speakers/risch.jpg",
        },
        {
          name: "Felix Richard Topf",
          photo: "/events/speakers/topf.jpg",
        },
        {
          name: "Prof. Dr. Lisandra Flach",
          photo: "/events/speakers/flach.jpg",
        },
        {
          name: "Prof. Dr. Achim J. Lilienthal",
          photo: "/events/speakers/lilienthal.jpg",
        },
      ],
    },
  ];

  const pastEvents: EventData[] = [
    {
      id: "biotech-medtech-panel-2026",
      title: "Herausforderungen & Innovation in Biotech & Medtech",
      date: "03.07.2026",
      location: "IZB Faculty Club, Martinsried",
      category: "Industry Panel",
      topic: "Zukunft der Münchner Biotech- und Medtech-Szene",
      description:
        "Ein interaktiver Panel Talk zur Zukunft der Life-Sciences, Biotech- und Medtech-Industrie in München.",
      longText:
        "Founder, C-Level und Senior Professionals teilen ihre Sichtweisen und Prognosen dazu, wie sich Münchens Life-Sciences-, Biotech- und Medtech-Standort entwickeln wird. Forschung und Wirtschaft treffen aufeinander, um über Hürden, Innovationen und kommende Challenges zu diskutieren. Im Mittelpunkt stehen keine abstrakten Theorien, sondern Fakten, Erfahrungen und ein offener Austausch für alle, die Naturwissenschaften und Wirtschaft zusammen denken.",
      image: "/events/converted/biotech-medtech-panel-2026.webp",
      imageFit: "contain",
      externalLink: biotechLumaLink,
      speakers: [
        {
          name: "Dr. Thilo Kaltenbach",
          company: "Roland Berger",
          position: "Senior Partner, Global Pharma & Healthcare",
        },
        {
          name: "Dr. Dominik Schumacher",
          company: "Tubulis GmbH",
          position: "CEO & Founder",
        },
        {
          name: "Prof. Andreas Ladurner",
          company: "Eisbach Bio GmbH / LMU Munich",
          position:
            "CSO, Founder and Managing Director; Chair of Physiological Chemistry",
        },
        {
          name: "Prof. med. Ralf Huss",
          company: "BioM Biotech Cluster Development",
          position: "Geschäftsführer",
        },
      ],
    },
    {
      id: "ai-2026",
      title: "AI Consulting Conference 2026",
      date: "10.06.2026",
      location: "Netlight, München",
      category: "Conference",
      topic: "Beyond Hype. Into Business.",
      description:
        "Ein kuratierter Konferenztag darüber, wie KI Consulting, Geschäftsmodelle und Karrieren konkret verändert.",
      longText:
        "Die AI Consulting Conference brachte Perspektiven aus Strategieberatung, Tech-Consulting, Industrie, angewandter KI, Forschung und Recht zusammen. Im Fokus standen reale KI-Use-Cases, AI-Assets in Beratungsarbeit, Industry Briefings, Applied-AI-Workshops, Governance, Haftung und die Zukunft der Beraterkarriere.",
      image: "/events/converted/ai-consulting-conference-2026.webp",
      imageFit: "contain",
      externalLink: "https://luma.com/71152vc3?utm_source=tg_ws",
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
      <div className="relative min-h-[470px] w-full overflow-hidden bg-slate-900 md:h-[45vh] md:min-h-0">
        <img
          src="/shared/heroes/hero-subpage.avif"
          alt="Hero"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-start pt-24 md:items-center md:pt-20 xl:pt-24">
          <div className="container-custom px-4 md:px-8">
            <div className="bg-slate-900 p-8 max-w-2xl border-l-8 border-white">
              <span className="text-white text-[1.3125rem] font-bold uppercase tracking-[0.12em] block mb-2">
                Gegründet 1986
              </span>
              <h1 className="text-white text-[2.5rem] font-bold uppercase tracking-tight">
                Events & Netzwerk.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container-custom relative px-[8px] md:px-16">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-[1.3125rem] font-bold text-blue-600 uppercase tracking-widest flex items-center">
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
            <div className="relative">
              <AnimatePresence initial={false} custom={upcomingDir}>
                <motion.div
                  key={upcomingPage}
                  custom={upcomingDir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative grid overflow-hidden rounded-xl border border-slate-200 bg-white/90 shadow-2xl backdrop-blur-sm md:grid-cols-12"
                >
                  <div
                    className={`min-h-0 min-w-0 overflow-hidden md:col-span-4 ${
                      upcomingEvents[upcomingPage].imageFit === "contain"
                        ? "flex aspect-[1131/1360] items-center justify-center bg-[#062d18] p-3 md:aspect-auto md:p-5"
                        : "aspect-[16/10] md:aspect-auto"
                    }`}
                  >
                    {upcomingEvents[upcomingPage].video ? (
                      <video
                        src={upcomingEvents[upcomingPage].video}
                        poster={upcomingEvents[upcomingPage].image}
                        className="h-full w-full object-cover object-center"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={upcomingEvents[upcomingPage].image}
                        className={`${
                          upcomingEvents[upcomingPage].imageFit === "contain"
                            ? "h-full max-h-full w-auto max-w-full object-contain object-center"
                            : "h-full w-full object-cover object-center"
                        }`}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="flex min-w-0 flex-col justify-center px-4 py-5 sm:p-8 md:col-span-8 md:p-8 lg:p-10">
                    <p className="mb-4 text-[1.3125rem] font-bold uppercase text-blue-600 md:mb-3">
                      {upcomingEvents[upcomingPage].category}
                    </p>
                    <h3 className="mb-5 break-words text-[clamp(1.85rem,6vw,2.75rem)] font-bold uppercase leading-none tracking-tighter md:mb-5 md:text-[2.6rem] lg:text-[2.75rem]">
                      {upcomingEvents[upcomingPage].title}
                    </h3>
                    {upcomingEvents[upcomingPage].topic && (
                      <p className="mb-4 text-[1.3125rem] font-bold uppercase leading-relaxed tracking-wider text-slate-900 md:mb-3">
                        {upcomingEvents[upcomingPage].topic}
                      </p>
                    )}
                    {upcomingEvents[upcomingPage].description && (
                      <p className="mb-4 text-2xl leading-relaxed text-slate-500 md:mb-4">
                        {upcomingEvents[upcomingPage].description}
                      </p>
                    )}
                    {upcomingEvents[upcomingPage].longText && (
                      <p className="mb-6 text-2xl leading-relaxed text-slate-500 md:mb-5">
                        {upcomingEvents[upcomingPage].longText}
                      </p>
                    )}
                    <div className="mb-6 space-y-3 text-2xl text-slate-500 md:mb-6">
                      <p className="flex items-center">
                        <Calendar size={16} className="mr-3" />{" "}
                        {upcomingEvents[upcomingPage].date}
                      </p>
                      <p className="flex items-center">
                        <MapPin size={16} className="mr-3" />{" "}
                        {upcomingEvents[upcomingPage].location}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <button
                        onClick={() =>
                          setSelectedEvent(upcomingEvents[upcomingPage])
                        }
                        className="w-full bg-slate-900 px-4 py-[14px] text-center text-[1.125rem] font-bold uppercase tracking-[0.04em] text-white transition-all hover:bg-blue-600 sm:w-fit sm:whitespace-nowrap sm:px-[18px] sm:text-[1.3125rem] sm:tracking-[0.08em] md:px-8 md:py-4 md:tracking-wider"
                      >
                        Details ansehen
                      </button>
                      {(upcomingEvents[upcomingPage].contactLink ||
                        upcomingEvents[upcomingPage].externalLink) && (
                        <a
                          href={
                            upcomingEvents[upcomingPage].contactLink ||
                            upcomingEvents[upcomingPage].externalLink
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full border border-slate-900 px-4 py-[14px] text-center text-[1.125rem] font-bold uppercase tracking-[0.04em] text-slate-900 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:w-fit sm:whitespace-nowrap sm:px-[18px] sm:text-[1.3125rem] sm:tracking-[0.08em] md:px-8 md:py-4 md:tracking-wider"
                        >
                          In Kontakt treten
                        </a>
                      )}
                    </div>
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
              <h2 className="text-[2.15rem] font-bold uppercase tracking-tighter mb-4">
                Past Events
              </h2>
              <div className="h-1 w-16 bg-blue-600 mb-6" />
              <p className="text-slate-500 text-2xl leading-relaxed">
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
                          <div
                            className={`h-44 shrink-0 overflow-hidden sm:h-48 ${
                              event.imageFit === "contain"
                                ? "flex items-center justify-center bg-[#062d18] p-3"
                                : ""
                            }`}
                          >
                            <img
                              src={event.cardImage || event.image}
                              className={`transition-transform duration-500 group-hover:scale-105 ${
                                event.imageFit === "contain"
                                  ? "h-full max-h-full w-auto max-w-full object-contain object-center"
                                  : "h-full w-full object-cover"
                              }`}
                              alt=""
                            />
                          </div>
                          <div className="flex flex-1 flex-col p-6 sm:p-7 pt-5 pb-8">
                            <p className="text-blue-600 font-bold text-[1.3125rem] uppercase mb-2">
                              {event.date}
                            </p>
                            <div>
                              <h4 className="font-bold uppercase text-[clamp(1.425rem,2.7vw,1.6875rem)] tracking-widest leading-snug break-words">
                                {event.title}
                              </h4>
                              <p className="text-slate-500 text-[clamp(1.3125rem,2.1vw,1.5rem)] leading-relaxed mt-3 break-words">
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
                <p className="italic text-2xl text-slate-200 leading-tight">
                  “Ich freue mich von Ihnen <br /> zu hören!”
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-[1.65rem] font-bold mb-2 tracking-tight">
                  Jonathan Babelotzky
                </h3>
                <p className="text-slate-400 text-2xl leading-relaxed font-medium">
                  Leitung Strategie &amp; Partnerschaften
                </p>
              </div>

              <div className="flex gap-12">
                <a
                  href="https://www.linkedin.com/in/jonathan-babelotzky/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-amber-500 hover:text-white transition-all text-2xl font-bold tracking-wider"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a
                  href="mailto:jonathan.babelotzky@teg-ev.de"
                  className="flex items-center gap-2 text-amber-500 hover:text-white transition-all text-2xl font-bold tracking-wider"
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
          <div className="fixed inset-0 z-[100] flex items-stretch justify-stretch bg-slate-900/90 p-0 backdrop-blur-md sm:items-center sm:justify-center sm:p-4 md:p-6">
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
              className="relative grid h-dvh w-full max-w-[92rem] overflow-y-auto bg-white shadow-2xl sm:h-auto sm:max-h-[92vh] sm:rounded-sm md:h-[calc(100vh-48px)] md:max-h-[760px] md:grid-cols-12 md:overflow-hidden"
            >
              <div
                className={`h-56 min-w-0 overflow-hidden sm:h-64 md:col-span-4 md:h-full ${
                  selectedEvent.imageFit === "contain"
                    ? "flex items-center justify-center bg-[#062d18] p-3 md:p-5"
                    : ""
                }`}
              >
                <img
                  src={selectedEvent.image}
                  className={`${
                    selectedEvent.imageFit === "contain"
                      ? "h-full max-h-full w-auto max-w-full object-contain object-center"
                      : "h-full w-full object-cover"
                  }`}
                  alt=""
                />
              </div>
              <div className="flex min-h-0 min-w-0 flex-col justify-start p-5 sm:p-8 md:col-span-8 md:h-full md:overflow-hidden md:p-7 lg:p-8">
                <p className="text-blue-600 font-bold text-[1.3125rem] uppercase mb-2 tracking-widest">
                  {selectedEvent.category || "Past Event"}
                </p>
                <h2 className="text-[1.4rem] sm:text-2xl lg:text-[2rem] font-bold mb-3 uppercase tracking-normal leading-tight break-words">
                  {selectedEvent.title}
                </h2>
                <div className="grid sm:grid-cols-2 gap-2 mb-3 text-slate-500 text-2xl">
                  <p className="flex items-center">
                    <Calendar size={16} className="mr-3 shrink-0" />
                    {selectedEvent.date}
                  </p>
                  <p className="flex items-center">
                    <MapPin size={16} className="mr-3 shrink-0" />
                    {selectedEvent.location}
                  </p>
                </div>
                {!selectedEvent.detailsSpeakersOnly && selectedEvent.topic && (
                  <p className="text-slate-900 text-[1.3125rem] font-bold uppercase tracking-wider mb-2 leading-relaxed break-words">
                    {selectedEvent.topic}
                  </p>
                )}
                {!selectedEvent.detailsSpeakersOnly &&
                  selectedEvent.description && (
                    <p className="text-slate-600 text-2xl italic mb-3 border-l-4 border-slate-100 pl-4 leading-relaxed">
                      {selectedEvent.description}
                    </p>
                  )}
                {!selectedEvent.detailsSpeakersOnly &&
                  selectedEvent.longText && (
                    <p className="text-slate-500 text-2xl mb-4 leading-relaxed">
                      {selectedEvent.longText}
                    </p>
                  )}
                {selectedEvent.speakers &&
                  selectedEvent.speakers.length > 0 && (
                    <div className="mb-4 flex min-h-0 flex-1 flex-col">
                      <p className="text-slate-900 text-[1.3125rem] font-bold uppercase tracking-[0.12em] mb-3 shrink-0">
                        Speaker
                      </p>
                      <div
                        className={
                          selectedEvent.detailsSpeakersOnly
                            ? "min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1 grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[52vh] md:max-h-none"
                            : "grid sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-3"
                        }
                      >
                        {selectedEvent.speakers.map((speaker) =>
                          speaker.photo ? (
                            <div
                              key={`${selectedEvent.id}-${speaker.name}`}
                              className="flex flex-col items-center text-center"
                            >
                              <img
                                src={speaker.photo}
                                alt={speaker.name}
                                className="mb-3 h-28 w-28 rounded-full object-cover object-center shadow-sm sm:h-32 sm:w-32"
                              />
                              <p className="text-slate-900 text-[18px] font-bold leading-snug break-words">
                                {speaker.name}
                              </p>
                            </div>
                          ) : (
                            <div
                              key={`${selectedEvent.id}-${speaker.name}`}
                              className="border-l-2 border-blue-600 pl-3"
                            >
                              <p className="text-slate-900 text-[22.5px] font-bold leading-snug break-words">
                                {speaker.name}
                              </p>
                              {(speaker.position || speaker.company) && (
                                <p className="text-slate-500 text-[19.5px] leading-relaxed break-words">
                                  {[speaker.position, speaker.company]
                                    .filter(Boolean)
                                    .join(", ")}
                                </p>
                              )}
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                {selectedEvent.externalLink && (
                  <button
                    onClick={() =>
                      window.open(selectedEvent.externalLink, "_blank")
                    }
                    className="w-full bg-blue-600 px-[18px] py-[14px] text-center text-[1.3125rem] font-bold uppercase tracking-[0.08em] text-white transition-all hover:bg-blue-700 sm:w-fit sm:px-6 sm:py-3 sm:tracking-wider"
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
