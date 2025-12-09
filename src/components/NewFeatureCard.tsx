import React from "react";

import { PrimaryButton } from "./blocks/PrimaryButton";
import { useNavigate } from "react-router-dom";

interface NewFeatureCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageURL: string;
  imageAltText: string;
  imagePosition: "left" | "right";
  clickable: boolean;
}

const NewFeatureCard: React.FC<NewFeatureCardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imagePosition,
  imageURL,
  imageAltText,
  clickable
}) => {
  const navigate = useNavigate()
  return (
    <div
      className="
        w-full max-w-5xl
        h-auto
        p-6 
        flex flex-col md:flex-row items-center gap-10
        mb-8
        overflow-hidden
      "
    >
      <img
        src={imageURL}
        alt={imageAltText}
        className={`
          w-full md:w-1/2 h-64 md:h-full object-cover rounded-md
          flex-shrink-0
          ${imagePosition === "right" ? "order-1 md:order-2" : "order-1"}
        `}
      />
      <div className={`${imagePosition === "right" ? "order-2 md:order-1" : "order-2"} flex-1 min-w-0`}>
        <div className="text-primary text-3xl font-bold overflow-hidden">{title}</div>
        <div className="mt-2 mb-6 overflow-hidden">{description}</div>
        <div className={`${ clickable ? "" : "hidden"}`}>
          <PrimaryButton
            label={buttonText}
            onClick={() => navigate(buttonLink)}
            size="lg"
          />
        </div>
      </div>
    </div>
  );
};

export default NewFeatureCard;