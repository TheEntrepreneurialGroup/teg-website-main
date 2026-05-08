import { useIntl } from "react-intl";
import { PrimaryButton } from "../blocks/PrimaryButton";
import { cn } from "@/lib/utils";

function ProcessStep({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="bg-primary text-white flex aspect-[2:1] items-center justify-center p-2 text-center text-lg leading-tight font-normal">
        {title}
      </div>
      <div className="text-foreground pt-2 text-lg leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function ApplicationPipelineSection() {
  const intl = useIntl();
  const t = (id: string) => intl.formatMessage({ id });

  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-start w-full max-w-7xl p-4 sm:p-8 md:p-14 lg:p-20 gap-6 md:gap-12">
        <div className="w-full flex flex-col">
          <h3 className="text-3xl font-semibold text-primary">
            {t("student.applicationPipeline.title")}
          </h3>
          <p className="text-xl text-foreground mt-3">
            {t("student.applicationPipeline.description")}
          </p>
        </div>

        <div className="w-full grid grid-cols-1 items-start gap-6 md:grid-cols-5 md:gap-3">
          <ProcessStep title={t("student.applicationPipeline.step1.title")}>
            <p>{t("student.applicationPipeline.step1.description")}</p>
          </ProcessStep>

          <ProcessStep title={t("student.applicationPipeline.step2.title")}>
            <p>{t("student.applicationPipeline.step2.description")}</p>
          </ProcessStep>

          <ProcessStep title={t("student.applicationPipeline.step3.title")}>
            <p>{t("student.applicationPipeline.step3.description")}</p>
          </ProcessStep>

          <ProcessStep title={t("student.applicationPipeline.step4.title")}>
            <p>{t("student.applicationPipeline.step4.description")}</p>
          </ProcessStep>

          <ProcessStep title={t("student.applicationPipeline.step5.title")}>
            <p>{t("student.applicationPipeline.step5.intro")}</p>
            <ul className="mt-1 list-disc space-y-1 pl-3">
              <li>{t("student.applicationPipeline.step5.bullet1")}</li>
              <li>{t("student.applicationPipeline.step5.bullet2")}</li>
            </ul>
          </ProcessStep>
        </div>

        <PrimaryButton
          label={t("student.callToAction.buttonText")}
          href={t("student.callToAction.buttonLink")}
          buttonText={
            "application-pipeline: " + t("student.callToAction.buttonText")
          }
        />
      </div>
    </section>
  );
}
