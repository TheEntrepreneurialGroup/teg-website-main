import { useIntl, FormattedMessage } from "react-intl";
import { ChevronsDown } from "lucide-react";

const richValues = {
  b: (chunks: React.ReactNode) => (
    <strong className="text-primary font-bold">{chunks}</strong>
  ),
};

export default function MemberProcessSection() {
  const intl = useIntl();
  const t = (id: string) => intl.formatMessage({ id });

  return (
    <section className="flex justify-center bg-white">
      <div className="flex flex-col w-full max-w-7xl p-4 sm:p-8 md:p-14 lg:p-20 gap-8 md:gap-12">
        <h3 className="text-3xl font-semibold text-primary text-left">
          {t("student.memberProcess.title")}
        </h3>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Semester 1 */}
          <div className="flex flex-col gap-3">
            <h4 className="text-primary text-xl">
              {t("student.memberProcess.semester1.title")}
            </h4>
            <div className="border-l-[1.5px] border-accent pl-4">
              <div className="flex flex-col gap-1 py-1">
                <p className="text-foreground text-lg">
                  <FormattedMessage
                    id="student.memberProcess.semester1.p1"
                    values={richValues}
                  />
                </p>
                <p className="text-foreground text-lg">
                  <FormattedMessage
                    id="student.memberProcess.semester1.p2"
                    values={richValues}
                  />
                </p>
                <div>
                  <p className="text-foreground text-lg">
                    <FormattedMessage
                      id="student.memberProcess.semester1.p3"
                      values={richValues}
                    />
                  </p>
                  <ul className="text-foreground mt-1 list-disc space-y-0.5 pl-3 text-lg">
                    <li>{t("student.memberProcess.semester1.bullet1")}</li>
                    <li>{t("student.memberProcess.semester1.bullet2")}</li>
                    <li>{t("student.memberProcess.semester1.bullet3")}</li>
                    <li>{t("student.memberProcess.semester1.bullet4")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Semester 2 & 3 */}
          <div className="flex flex-col gap-10">
            {/* Semester 2 */}
            <div className="flex flex-col gap-3">
              <h4 className="text-primary text-xl">
                {t("student.memberProcess.semester2.title")}
              </h4>
              <div className="border-l-[1.5px] border-accent pl-4">
                <div className="flex flex-col gap-1 py-1">
                  <p className="text-foreground text-lg">
                    <FormattedMessage
                      id="student.memberProcess.semester2.p1"
                      values={richValues}
                    />
                  </p>
                  <p className="text-foreground text-lg">
                    <FormattedMessage
                      id="student.memberProcess.semester2.p2"
                      values={richValues}
                    />
                  </p>
                  <p className="text-foreground text-lg">
                    <FormattedMessage
                      id="student.memberProcess.semester2.p3"
                      values={richValues}
                    />
                  </p>
                </div>
              </div>
            </div>

            {/* Semester 3 */}
            <div className="flex flex-col gap-3">
              <h4 className="text-primary text-xl">
                {t("student.memberProcess.semester3.title")}
              </h4>
              <div className="border-l-[1.5px] border-accent pl-4">
                <div className="flex flex-col justify-center py-1">
                  <p className="text-foreground text-lg">
                    <FormattedMessage
                      id="student.memberProcess.semester3.p1"
                      values={richValues}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex flex-col items-center">
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-foreground/20" />
            <span className="px-6 text-lg text-foreground/80">
              {t("student.memberProcess.afterwards.title")}
            </span>
            <div className="h-px flex-1 bg-foreground/20" />
          </div>
          <ChevronsDown
            className="text-primary mt-2 h-7 w-7"
            strokeWidth={2.5}
          />
        </div>

        {/* Afterwards */}
        <div className="flex flex-col items-center gap-6 bg-muted p-6 md:flex-row md:gap-10 md:p-10">
          <div className="flex flex-1 flex-col gap-3 text-center md:text-left">
            <p className="text-foreground text-xl leading-snug md:text-2xl">
              <FormattedMessage
                id="student.memberProcess.afterwards.leftTitle"
                values={richValues}
              />
            </p>
            <p className="text-foreground/80 text-lg italic">
              {t("student.memberProcess.afterwards.leftSubtitle")}
            </p>
          </div>

          <div className="text-foreground/80 flex-shrink-0 text-center text-xl">
            {t("student.memberProcess.afterwards.or")}
          </div>

          <div className="flex flex-1 flex-col justify-center text-center md:text-left">
            <p className="text-foreground text-xl leading-snug md:text-2xl">
              <FormattedMessage
                id="student.memberProcess.afterwards.rightTitle"
                values={richValues}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
