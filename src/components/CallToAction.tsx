import React from "react";
import { PrimaryButton } from "./blocks/PrimaryButton";

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
        className={`text-3xl font-semibold mb-4 ${isLight ? "text-primary" : "text-white"}`}
      >
        {title}
      </h2>

      <p
        className={`text-xl mb-8 ${
          isLight ? "text-muted-foreground" : "text-secondary-light"
        }`}
      >
        {description}
      </p>

      <PrimaryButton
        label={buttonText}
        href={buttonLink}
        buttonText={"home-cta: " + buttonText}
      />
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
        <div className="max-w-7xl mx-auto px-4 md:px-8">{content}</div>
      </section>
    );
  }

  // Return just the content wrapped in a div for grid usage
  return (
    <div
      className={`p-8  ${
        isLight ? "bg-secondary-light" : "bg-primary"
      } ${className}`}
    >
      {content}
    </div>
  );
};

export default CallToAction;
