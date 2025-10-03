import { useIntl } from "react-intl";
import TextComponent from "../TextComponent";

export default function CertificatesSection() {
  const intl = useIntl();

  return (
    <section className="flex justify-center bg-white">
      <div className="flex flex-col items-center w-full max-w-7xl p-2 sm:p-8 md:p-14 lg:p-20 justify-center gap-4 sm:gap-6 md:gap-14">
        <TextComponent
          title={intl.formatMessage({ id: "student.certificate.coach.title" })}
          intro={intl.formatMessage({ id: "student.certificate.coach.intro" })}
          highlight={intl.formatMessage({
            id: "student.certificate.coach.highlight",
          })}
          items={[
            intl.formatMessage({ id: "student.certificate.coach.items" }),
          ]}
        />
        <TextComponent
          title={intl.formatMessage({
            id: "student.certificate.projectlead.title",
          })}
          intro={intl.formatMessage({
            id: "student.certificate.projectlead.intro",
          })}
          highlight={intl.formatMessage({
            id: "student.certificate.projectlead.highlight",
          })}
          items={[
            intl.formatMessage({ id: "student.certificate.projectlead.items" }),
          ]}
          borderRight={true}
        />
        <TextComponent
          title={intl.formatMessage({
            id: "student.certificate.professional.title",
          })}
          intro={intl.formatMessage({
            id: "student.certificate.professional.intro",
          })}
          highlight={intl.formatMessage({
            id: "student.certificate.professional.highlight",
          })}
          items={[
            intl.formatMessage({
              id: "student.certificate.professional.items",
            }),
          ]}
        />
      </div>
    </section>
  );
}
