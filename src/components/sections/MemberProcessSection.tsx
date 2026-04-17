import { useIsHorizontal } from "../../hooks/useIsHorizontal";
import { useIntl } from "react-intl";

export default function MemberProcessSection() {
  const isHorizontal = useIsHorizontal();
  const intl = useIntl();

  return (
    <section className="flex justify-center bg-white">
      <div className="flex flex-col items-center w-full max-w-7xl p-4 sm:p-8 md:p-14 lg:p-20 gap-4 sm:gap-4 md:gap-14">
        {/* Text Section */}
        <div className="w-full flex flex-col justify-center sm:pt-1">
          <h3 className="text-3xl font-semibold text-primary text-left">
            {intl.formatMessage({ id: "student.memberProcess.title" })}
          </h3>
        </div>
        {/* SVG Section */}
        <div className="h-full min-w-[250px] justify-start">
          <img
            src={
              isHorizontal
                ? "/for-students/member-process/overview-desktop.svg"
                : "/for-students/member-process/overview-phone.svg"
            }
            alt="Pipeline"
            className="w-full h-auto block sm:w-[90%]"
          />
        </div>
      </div>
    </section>
  );
}
