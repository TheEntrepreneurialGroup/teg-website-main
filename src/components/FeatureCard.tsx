import React from "react";

import { PrimaryButton } from "./blocks/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  className?: string;
  title: string;
  description: string;
  body?: string;
  buttonText?: string;
  buttonLink?: string;
  imageURL: string;
  imageAltText: string;
  imagePosition?: "left" | "right";
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  className,
  title,
  description,
  body,
  buttonText,
  buttonLink,
  imagePosition = "left",
  imageURL,
  imageAltText,
}) => {
  const navigate = useNavigate();
  const resolvedButtonText = buttonText?.trim();
  const resolvedButtonLink = buttonLink?.trim();
  const shouldShowButton =
    Boolean(resolvedButtonText) && Boolean(resolvedButtonLink);

  return (
    <div
      className={cn(
        "w-full h-fiit flex flex-col md:gap-0 gap-10 md:flex-row items-center overflow-visible",
        className,
      )}
    >
      <img
        src={imageURL}
        alt={imageAltText}
        className={`
          w-full md:w-1/2 aspect-[4/3] object-cover object-center
          ${imagePosition === "right" ? "order-1 md:order-2" : "order-1"}
        `}
      />
      <div
        className={`order-2 ${
          imagePosition === "right"
            ? "md:order-1 md:px-8 lg:px-24 xl:px-44"
            : "md:order-2 md:pl-12 md:px-8 lg:px-24 xl:px-44"
        } flex-1 min-w-0 px-4 md:px-0`}
      >
        <div className="text-primary text-3xl font-semibold leading-tight max-w-[60ch] overflow-hidden">
          {title}
        </div>
        <div className="mt-2 text-xl text-muted-foreground max-w-prose">
          {description}
        </div>
        {body && (
          <div className="mt-2 text-xl text-muted-foreground max-w-prose">
            {body}
          </div>
        )}
        {shouldShowButton && (
          <div className="mt-2 lg:mt-4">
            <PrimaryButton
              label={resolvedButtonText!}
              onClick={() => navigate(resolvedButtonLink!)}
              size="lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
