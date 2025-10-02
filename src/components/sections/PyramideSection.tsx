import { useIntl } from "react-intl";

export default function PyramideSection() {
  const intl = useIntl();

  return (
    <section className="flex justify-center bg-white">
      <div className="flex flex-col items-center w-full max-w-7xl p-2 sm:p-8 md:p-14 lg:p-20 gap-4 sm:gap-6 md:gap-14">
        {/* Text Section */}
        <div className="w-full flex flex-col justify-center sm:pt-1">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary text-left">
            {intl.formatMessage({ id: "student.certificate.title" })}
          </h3>
        </div>
        {/* SVG Section */}
        <div className="h-full min-w-[250px] justify-start">
          <img
            src={"/svg/pyramide.svg"}
            alt="Pipeline"
            className="w-full h-auto block sm:w-[90%]"
          />
        </div>
      </div>
    </section>
  );
}
