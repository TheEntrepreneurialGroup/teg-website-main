import { useIsHorizontal } from "../../hooks/useIsHorizontal";
import { useIntl } from "react-intl";
import Button from "../Button";

export default function ApplicationPipelineSection() {
  const isHorizontal = useIsHorizontal();
  const intl = useIntl();

  const buttonText = intl.formatMessage({
    id: "student.callToAction.buttonText",
  });

  const buttonLink = intl.formatMessage({
    id: "student.callToAction.buttonLink",
  });

  return (
    <section className="flex justify-center ">
      <div className="flex flex-col items-start w-full max-w-7xl p-2 sm:p-8 md:p-14 lg:p-20 gap-4 sm:gap-6 md:gap-14">
        {/* Text Section */}
        <div className="w-full flex flex-col sm:pt-1">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary">
            {intl.formatMessage({ id: "student.applicationPipeline.title" })}
          </h3>
          <p className="text-xl text-gray-700 mt-2 m-0">
            {intl.formatMessage({
              id: "student.applicationPipeline.description",
            })}
          </p>
        </div>
        {/* SVG Section */}
        <div className="h-full min-w-[250px] justify-start">
          <img
            src={
              isHorizontal
                ? "/svg/pipeline-desktop_SS2026_transparent-bg.svg"
                : "/svg/pipeline-phone_SS2026_transparent-bg.svg"
            }
            alt="Pipeline"
            className="w-full h-auto block sm:w-[90%]"
          />
        </div>

        <Button
          className="text-center"
          href={buttonLink}
          buttonText={"home-cta: " + buttonText}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
