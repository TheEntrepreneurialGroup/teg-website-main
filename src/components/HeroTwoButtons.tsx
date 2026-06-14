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
    <section
      className={cn(
        "relative flex flex-col md:block md:h-[75vh] md:min-h-[600px] md:w-full md:overflow-hidden",
        className,
      )}
    >
      <img
        src={bgImage}
        alt="Hero"
        className={cn(
          "h-80 w-full object-cover object-center md:absolute md:inset-0 md:z-0 md:h-full md:w-full",
          imageClassName ?? "object-center",
        )}
      />
      <div
        className={cn(
          "hidden md:block absolute inset-0 z-10 bg-gradient-to-b from-transparent via-primary/10 via-65% to-primary to-90%",
          gradientClassName,
        )}
      />
      <div className="bg-white p-4 md:absolute md:bottom-0 md:left-0 md:z-20 md:w-full md:bg-transparent md:p-16">
        <div className="relative z-20 h-full w-full flex flex-col justify-start items-start">
          <div className="flex flex-col justify-start w-full">
            <h1 className="mb-2 text-3xl font-semibold text-primary md:w-full md:text-left md:text-gray-100">
              <span className="md:hidden">{mobileTitle ?? title}</span>
              <span className="hidden md:inline">{title}</span>
            </h1>
            <p className="w-full text-left text-xl text-foreground md:text-gray-100 md:font-normal">
              {subtitle}
            </p>
          </div>
          <div className="mt-6 flex flex-col items-start gap-3 md:mt-16 md:flex-row md:gap-8">
            <PrimaryButton
              label={buttonText1}
              onClick={() => handleLink(buttonLink1)}
              size="lg"
              align="left"
              className="w-full min-w-0 md:w-auto md:min-w-[250px]"
            />
            {buttonText2 && buttonLink2 && (
              <PrimaryButton
                label={buttonText2}
                onClick={() => handleLink(buttonLink2)}
                size="lg"
                align="left"
                className="w-full min-w-0 md:w-auto md:min-w-[250px]"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTwoButtons;
