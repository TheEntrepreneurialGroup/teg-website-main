import { useIsHorizontal } from "../../hooks/useIsHorizontal";
import { useIntl } from "react-intl";

export default function MemberProcessSection() {
  const isHorizontal = useIsHorizontal();
  const intl = useIntl();

  return (
    <section className="flex justify-center bg-gray-100">
      <div className="flex flex-col items-center w-full max-w-7xl p-2 sm:p-8 md:p-14 lg:p-20 gap-2 sm:gap-4 md:gap-14">
        {/* Text Section */}
        <div className="w-full flex flex-col justify-center sm:pt-1">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary text-left">
            {intl.formatMessage({ id: "student.memberProcess.title" })}
          </h3>
        </div>
        {/* SVG Section */}
        <div className="h-full min-w-[250px] justify-start">
          <img
            src={
              isHorizontal
                ? "/svg/overview-desktop.svg"
                : "/svg/overview-phone.svg"
            }
            alt="Pipeline"
            className="w-full h-auto block sm:w-[90%]"
          />
        </div>
      </div>
    </section>
  );
}
