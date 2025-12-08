import React from "react";
import Button from "./Button";
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
}

const NewFeatureCard: React.FC<NewFeatureCardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imagePosition,
  imageURL,
  imageAltText
}) => {
  const navigate = useNavigate()
  return (
    <div
      className="
        w-[clamp(500px,70vw,1000px)]
        h-[clamp(350px,50vh,600px)]
        p-6 
        flex items-center gap-10
        mb-8
        overflow-hidden
      "
    >
      <img
        src={imageURL}
        alt={imageAltText}
        className={`
          w-1/2 min-w-[300px] h-full min-h-[400px] object-cover rounded-md
          flex-shrink-0
          ${imagePosition === "right" ? "order-2" : "order-1"}
        `}
      />
      <div className={`${imagePosition === "right" ? "order-1" : "order-2"} flex-1 min-w-0`}>
        <div className="text-primary text-3xl font-bold overflow-hidden">{title}</div>
        <div className="mt-2 mb-6 overflow-hidden">{description}</div>
        <PrimaryButton
          label={buttonText}
          onClick={() => navigate(buttonLink)}
          size="lg"
        />
      </div>
    </div>
  );
};

export default NewFeatureCard;