import React from "react";
import Button from "./Button";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  variant?: "light" | "dark";
  className?: string;
  isSection?: boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  variant = "dark",
  className = "",
  isSection = true,
}) => {
  const isLight = variant === "light";

  const content = (
    <>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          isLight ? "text-primary" : "text-white"
        }`}
      >
        {title}
      </h2>

      <p
        className={`text-lg mb-8 ${
          isLight ? "text-gray-600" : "text-secondary-light"
        }`}
      >
        {description}
      </p>

      <div>
        <Button
          className="max-w-[250px] md:w-auto text-center min-w-[100px]"
          href={buttonLink}
          buttonText={"home-cta: " + buttonText}
        >
          {buttonText}
        </Button>
      </div>
    </>
  );

  // Conditional rendering based on isSection flag
  if (isSection) {
    return (
      <section
        className={`py-16 ${
          isLight ? "bg-secondary-light" : "bg-primary"
        } ${className}`}
      >
        <div className="container-custom">
          <div className="max-w-3xl">{content}</div>
        </div>
      </section>
    );
  }

  // Return just the content wrapped in a div for grid usage
  return (
    <div
      className={`p-8 rounded-lg ${
        isLight ? "bg-secondary-light" : "bg-primary"
      } ${className}`}
    >
      {content}
    </div>
  );
};

export default CallToAction;
