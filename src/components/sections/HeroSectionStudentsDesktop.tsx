import React from "react";
import Button from "../Button";
import { useIntl } from "react-intl";

const HeroSectionStudentsDesktop: React.FC = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "student.hero.title" });
  const subtitle = intl.formatMessage({ id: "student.hero.subtitle" });
  const buttonText = intl.formatMessage({ id: "student.hero.buttonText" });
  const buttonLink = intl.formatMessage({ id: "student.hero.buttonLink" });
  const backgroundImage = "/for_students.jpg";

  return (
    <div className="flex flex-row items-center justify-start p-5">
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="object-cover w-3/4"
      />

      <div className="container-custom text-left p-8 w-1/2">
        <h1 className="text-primary font-bold text-2xl">{title}</h1>
        <p className="text-gray-700 max-w-3xl mb-8">{subtitle}</p>

        {buttonText && buttonLink && (
          <Button href={buttonLink} buttonText={buttonText}>
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeroSectionStudentsDesktop;
