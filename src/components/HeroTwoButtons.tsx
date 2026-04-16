import React from "react";
import { PrimaryButton } from "./blocks/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface HeroTwoButtonsProps {
  title: string;
  mobileTitle?: string;
  subtitle?: string; // This is the new since in the old HeroSectionTwoButtonsProps
  bgImage: string;
  buttonText1: string;
  buttonText2?: string;
  buttonLink1: string;
  buttonLink2?: string;
  gradientClassName?: string;
  imageClassName?: string;
  className?: string;
}

const HeroTwoButtons: React.FC<HeroTwoButtonsProps> = ({
  title,
  mobileTitle,
  subtitle,
  bgImage,
  buttonText1,
  buttonText2,
  buttonLink1,
  buttonLink2,
  gradientClassName,
  imageClassName,
  className,
}) => {
  const navigate = useNavigate();

  const handleLink = (to: string) => {
    if (to.startsWith("#")) {
      const id = to.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `#${id}`);
      } else {
        window.location.hash = `#${id}`;
      }
      return;
    }

    navigate(to);
  };
  return (
    <>
      {/* Mobile: Stacked layout - image above, content below (like ForStudents) */}
      <section className="md:hidden flex flex-col">
        <img src={bgImage} alt="Hero" className="w-full h-auto" />
        <div className="p-4 bg-white">
          <h1 className="text-primary font-semibold text-3xl mb-2">
            {mobileTitle}
          </h1>
          <p className="text-gray-700 text-xl mb-6">{subtitle}</p>
          <div className="flex flex-col items-start gap-3">
            <PrimaryButton
              label={buttonText1}
              onClick={() => handleLink(buttonLink1)}
              size="lg"
              align="left"
              fullWidth={false}
              minWidthClassName="w-[250px]"
            />
            {buttonText2 && buttonLink2 && (
              <PrimaryButton
                label={buttonText2}
                onClick={() => handleLink(buttonLink2)}
                size="lg"
                align="left"
                fullWidth={false}
                minWidthClassName="w-[250px]"
              />
            )}
          </div>
        </div>
      </section>

      {/* Desktop: Overlaid layout */}
      <section
        className={cn(
          "hidden md:block relative w-full h-[75vh] min-h-[600px] overflow-hidden",
          className,
        )}
      >
        <img
          src={bgImage}
          alt="Hero"
          className={cn(
            "absolute inset-0 w-full h-full object-cover z-0",
            imageClassName ?? "object-center",
          )}
        />
        {/* <div className="absolute inset-0 bg-primary-dark/65 z-10"></div> */}
        <div
          className={cn(
            "absolute inset-0 z-10 bg-gradient-to-b from-transparent via-primary/10 via-65% to-primary to-90%",
            gradientClassName,
          )}
        />
        <div className="absolute bottom-0 left-0 p-16 w-full">
          <div className="relative z-20 h-full w-full flex flex-col justify-start items-start">
            <div className="flex flex-col justify-start w-full">
              <h1 className="text-left text-gray-100 mb-2 w-full">{title}</h1>
              <h3 className="text-left text-gray-100 font-normal w-full">
                {subtitle}
              </h3>
            </div>
            <div className="mt-16 flex flex-row justify-start items-start w-full">
              <div className="mr-8">
                <PrimaryButton
                  label={buttonText1}
                  onClick={() => handleLink(buttonLink1)}
                  size="lg"
                />
              </div>
              {buttonText2 && buttonLink2 && (
                <div>
                  <PrimaryButton
                    label={buttonText2}
                    onClick={() => handleLink(buttonLink2)}
                    size="lg"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroTwoButtons;
