import React from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const boldText = {
  bold: (chunks: React.ReactNode) => (
    <strong className="text-primary font-bold">{chunks}</strong>
  ),
};

export function MemberProcess() {
  const t = useTranslations("MemberProcess");

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16 md:px-8">
      <h2 className="text-primary mb-12 text-center text-3xl font-bold md:text-left md:text-4xl">
        {t("title")}
      </h2>

      {/* Semesters Grid */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        {/* Column 1: Semester 1 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-foreground/80 text-xl">{t("semester1.title")}</h3>
          <div className="flex">
            {/* Left Border Decoration */}
            <div className="bg-primary w-1 flex-shrink-0" />

            {/* Content */}
            <div className="flex flex-col gap-2 py-1 pl-4">
              <p className="text-foreground text-lg">
                {t.rich("semester1.p1", boldText)}
              </p>
              <p className="text-foreground text-lg">
                {t.rich("semester1.p2", boldText)}
              </p>
              <div>
                <p className="text-foreground text-lg">
                  {t.rich("semester1.p3", boldText)}
                </p>
                <ul className="text-foreground mt-2 list-disc space-y-1 pl-6 text-lg">
                  {t
                    .raw("semester1.bullets")
                    .map((bullet: string, idx: number) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Semester 2 & 3 */}
        <div className="flex flex-col gap-12">
          {/* Semester 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-foreground/80 text-xl">
              {t("semester2.title")}
            </h3>
            <div className="flex">
              <div className="bg-primary w-1 flex-shrink-0" />
              <div className="flex flex-col gap-1 py-1 pl-4">
                <p className="text-foreground text-lg leading-relaxed">
                  {t.rich("semester2.p1", boldText)}
                </p>
                <p className="text-foreground text-lg">
                  {t.rich("semester2.p2", boldText)}
                </p>
                <p className="text-foreground text-lg">
                  {t.rich("semester2.p3", boldText)}
                </p>
              </div>
            </div>
          </div>

          {/* Semester 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-foreground/80 text-xl">
              {t("semester3.title")}
            </h3>
            <div className="flex">
              <div className="bg-primary mt-1 h-6 w-1 flex-shrink-0" />
              <div className="flex flex-col justify-center pl-4">
                <p className="text-foreground text-lg">
                  {t.rich("semester3.p1", boldText)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-12 flex flex-col items-center">
        <div className="flex w-full items-center">
          <div className="bg-foreground/20 h-px flex-1" />
          <span className="text-foreground/80 px-6 text-lg">
            {t("afterwards.title")}
          </span>
          <div className="bg-foreground/20 h-px flex-1" />
        </div>
        <ChevronDown className="text-primary mt-2 h-8 w-8" strokeWidth={3} />
      </div>

      {/* Afterwards Container */}
      <div className="flex flex-col items-center gap-6 rounded-sm bg-slate-100 p-6 md:flex-row md:gap-10 md:p-10 dark:bg-slate-800/60">
        {/* Left Side */}
        <div className="flex flex-1 flex-col gap-4 text-center md:text-left">
          <p className="text-foreground text-xl leading-snug md:text-2xl">
            {t.rich("afterwards.leftTitle", boldText)}
          </p>
          <p className="text-foreground/80 text-lg italic">
            {t("afterwards.leftSubtitle")}
          </p>
        </div>

        {/* OR separator */}
        <div className="text-foreground/80 flex-shrink-0 text-center text-xl">
          {t("afterwards.or")}
        </div>

        {/* Right Side */}
        <div className="flex flex-1 flex-col justify-center text-center md:text-left">
          <p className="text-foreground text-xl leading-snug md:text-2xl">
            {t.rich("afterwards.rightTitle", boldText)}
          </p>
        </div>
      </div>
    </section>
  );
}
