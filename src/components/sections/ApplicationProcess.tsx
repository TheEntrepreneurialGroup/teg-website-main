import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

function ProcessStep({ title, className, children }: ProcessStepProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="bg-primary text-primary-foreground flex min-h-[100px] items-center justify-center p-4 text-center text-sm leading-tight font-bold lg:min-h-[120px] lg:p-6 lg:text-base">
        {title}
      </div>
      <div className="text-muted-foreground px-1 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function ApplicationProcess() {
  const t = useTranslations("ApplicationProcess");

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
      {/* Header Section */}
      <div className="mb-12 flex flex-col gap-4">
        <h2 className="text-primary text-3xl font-bold md:text-4xl">
          {t("title")}
        </h2>
        <p className="text-muted-foreground max-w-4xl text-base leading-relaxed md:text-lg">
          {t("subtitle")}
        </p>
      </div>

      {/* Process Steps Grid */}
      <div className="mb-12 grid grid-cols-1 items-start gap-8 md:grid-cols-5 md:gap-4">
        {/* Step 1 */}
        <ProcessStep title={t("steps.1.title")}>
          <p>{t("steps.1.description")}</p>
        </ProcessStep>

        {/* Step 2 */}
        <ProcessStep title={t("steps.2.title")}>
          <p>{t("steps.2.description")}</p>
        </ProcessStep>

        {/* Step 3 */}
        <ProcessStep title={t("steps.3.title")}>
          <p>{t("steps.3.description")}</p>
        </ProcessStep>

        {/* Step 4 */}
        <ProcessStep title={t("steps.4.title")}>
          <p>{t("steps.4.description")}</p>
        </ProcessStep>

        {/* Step 5 */}
        <ProcessStep title={t("steps.5.title")}>
          <p className="mb-2">{t("steps.5.intro")}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {t.raw("steps.5.bullets").map((bullet: string, idx: number) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </ProcessStep>
      </div>

      {/* Call to Action */}
      <div className="flex justify-start">
        <Button variant="default" className="px-8 py-6 text-lg font-bold">
          {t("cta")}
        </Button>
      </div>
    </section>
  );
}
