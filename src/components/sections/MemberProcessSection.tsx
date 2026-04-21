import { useIntl } from "react-intl";
import { useState } from "react";

interface SemesterData {
  number: string;
  title: string;
  subtitle: string;
  bullets: string[];
  isInfinity?: boolean;
}

const semesterData: SemesterData[] = [
  {
    number: "1",
    title: "1. Semester",
    subtitle: "Grundlagen & Managementverständnis",
    bullets: [
      "Onboarding in deine Fachrolle innerhalb eines TEG Departments",
      "Coaching & Mentoring in deiner Department Aufgabe",
      "Eigeninitiativische KPI Erhöhung innerhalb TEG Initiative",
      "C-Level Workshop Schulung im Semester",
    ],
  },
  {
    number: "2",
    title: "2. Semester",
    subtitle: "Anwendung in realen Projektleitung",
    bullets: [
      "Zugang zu Fachkonferenzen, C-Level Workshops oder Management TEG Talks",
      "Kompetenzen: Ziel-Setzung, Teamleitung, Verkauf- & Vermarktungs-Strategien",
      "Bei erreichten KPIs: Projektleitung-Zertifikat",
    ],
  },
  {
    number: "3",
    title: "3. Semester",
    subtitle: "Eigeninitiative",
    bullets: [
      "Leitung eines TEG Departments",
      "Exklusive Praktika und Werkstudenten-Jobs",
      "Coach Zertifikat",
    ],
  },
  {
    number: "∞",
    title: "TEG-Alumni",
    subtitle: "Nach erfolgreicher Absolvierung",
    bullets: [
      "1:1 Mentoring mit TEG-Alumnis",
      "Professional-Zertifikat",
      "Placement für eine Führungskarriere",
    ],
    isInfinity: true,
  },
];

function SemesterCard({
  data,
  isActive,
  onClick,
}: {
  data: SemesterData;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`
        relative cursor-pointer transition-all duration-300 ease-out
        border-2 rounded-sm bg-white
        ${isActive ? "border-primary shadow-lg" : "border-primary/30 hover:border-primary/60"}
        ${isActive ? "lg:col-span-2 lg:row-span-1" : ""}
      `}
    >
      {/* Large Number Background */}
      <div
        className={`
          absolute font-serif italic font-bold text-accent-light select-none pointer-events-none
          ${data.isInfinity ? "text-[4rem] md:text-[5rem] lg:text-[6rem] top-2 left-3" : "text-[5rem] md:text-[6rem] lg:text-[7rem] -top-2 left-2"}
        `}
        style={{ lineHeight: 1 }}
      >
        {data.number}
        <span className="text-accent-light text-[1.5rem] md:text-[2rem] align-top">.</span>
      </div>

      {/* Content */}
      <div
        className={`
          relative z-10 p-6 pt-16 md:pt-20 lg:pt-24
          ${isActive ? "pb-6" : "pb-4"}
        `}
      >
        <h4 className="text-primary font-semibold text-lg md:text-xl leading-tight">
          {data.subtitle}
        </h4>

        {/* Expanded Content */}
        <div
          className={`
            overflow-hidden transition-all duration-300 ease-out
            ${isActive ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
          `}
        >
          <ul className="space-y-2">
            {data.bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-muted-foreground text-sm md:text-base"
              >
                <span className="text-accent-light mt-1.5 text-xs">●</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function SemesterCardMobile({
  data,
  isActive,
  onClick,
}: {
  data: SemesterData;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div className="flex gap-4">
      {/* Number Column */}
      <div className="flex flex-col items-center">
        <div
          onClick={onClick}
          className={`
            w-16 h-16 flex items-center justify-center cursor-pointer
            border-2 rounded-sm bg-white transition-all duration-300
            ${isActive ? "border-primary shadow-lg" : "border-primary/30"}
          `}
        >
          <span
            className={`
              font-serif italic font-bold text-accent-light
              ${data.isInfinity ? "text-3xl" : "text-4xl"}
            `}
          >
            {data.number}
            <span className="text-accent-light text-sm align-top">.</span>
          </span>
        </div>
        {/* Connecting Line */}
        <div className="w-0.5 flex-1 bg-accent-light/30 min-h-4" />
      </div>

      {/* Content Column */}
      <div className="flex-1 pb-6">
        <div
          onClick={onClick}
          className={`
            cursor-pointer p-4 border-2 rounded-sm bg-white transition-all duration-300
            ${isActive ? "border-primary shadow-lg" : "border-primary/30"}
          `}
        >
          <h4 className="text-primary font-semibold text-base leading-tight">
            {data.title}
          </h4>
          <p className="text-muted-foreground text-sm mt-1">{data.subtitle}</p>

          {/* Expanded Content */}
          <div
            className={`
              overflow-hidden transition-all duration-300 ease-out
              ${isActive ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}
            `}
          >
            <ul className="space-y-2">
              {data.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-muted-foreground text-sm"
                >
                  <span className="text-accent-light mt-1 text-xs">●</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MemberProcessSection() {
  const intl = useIntl();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex justify-center bg-white">
      <div className="flex flex-col items-start w-full max-w-7xl p-4 sm:p-8 md:p-14 lg:p-20 gap-6 md:gap-10">
        {/* Header */}
        <div className="w-full">
          <h3 className="text-3xl font-semibold text-primary">
            {intl.formatMessage({ id: "student.memberProcess.title" })}
          </h3>
          <p className="text-xl text-muted-foreground mt-2">
            Dein Weg zur Führungspersönlichkeit in 3 Semestern
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-4 gap-4 w-full">
          {semesterData.map((semester, index) => (
            <SemesterCard
              key={index}
              data={semester}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden w-full">
          {semesterData.map((semester, index) => (
            <SemesterCardMobile
              key={index}
              data={semester}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
