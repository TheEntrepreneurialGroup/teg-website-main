import React from "react";
import Button from "../Button";
import { useIntl } from "react-intl";

const HeroSectionStudentsMobile: React.FC = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "student.hero.title" });
  const subtitle = intl.formatMessage({ id: "student.hero.subtitle" });
  const buttonText = intl.formatMessage({ id: "student.hero.buttonText" });
  const buttonLink = intl.formatMessage({ id: "student.hero.buttonLink" });
  const backgroundImage = "/for_students.jpg";

  return (
    <div className="flex flex-col items-center justify-start">
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="w-full h-auto"
      />

      <div className="container-custom text-left p-8">
        <h1 className="text-primary font-bold text-2xl">{title}</h1>
        <p className="text-gray-700 max-w-3xl mb-8">
          {subtitle}
        </p>

        {buttonText && buttonLink && (
          <Button href={buttonLink} buttonText={buttonText}>
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeroSectionStudentsMobile;
