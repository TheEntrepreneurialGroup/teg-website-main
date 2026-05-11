import React from "react";

import { PrimaryButton } from "./blocks/PrimaryButton";
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
  imageObjectPosition?: string;
  variant?: "md" | "lg";
}

const variantClasses = {
  md: {
    outer: "md:flex-row md:gap-0",
    image: "md:w-1/2",
    imageOrderRight: "order-1 md:order-2",
    imageOrderLeft: "order-1",
    textRight: "md:order-1 md:px-8 lg:px-24 xl:px-44",
    textLeft: "md:order-2 md:pl-12 md:px-8 lg:px-24 xl:px-44",
    textBase: "md:px-0",
  },
  lg: {
    outer: "md:flex-row md:gap-0",
    image: "md:w-1/2",
    imageOrderRight: "order-1 md:order-2",
    imageOrderLeft: "order-1",
    textRight: "md:order-1 md:px-8 xl:px-24 2xl:px-44",
    textLeft: "md:order-2 md:pl-12 md:px-8 xl:px-24 2xl:px-44",
    textBase: "md:px-0",
  },
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  className,
  title,
  description,
  body,
  buttonText,
  buttonLink,
  imagePosition = "left",
  imageObjectPosition,
  imageURL,
  imageAltText,
  variant = "md",
}) => {
  const resolvedButtonText = buttonText?.trim();
  const resolvedButtonLink = buttonLink?.trim();
  const shouldShowButton =
    Boolean(resolvedButtonText) && Boolean(resolvedButtonLink);
  const v = variantClasses[variant];

  return (
    <div
      className={cn(
        "w-full flex flex-col gap-10 items-stretch overflow-hidden",
        v.outer,
        className,
      )}
    >
      <div
        className={cn(
          "relative aspect-[4/3] w-full flex-none overflow-hidden bg-secondary-light md:aspect-auto md:self-stretch",
          v.image,
          imagePosition === "right" ? v.imageOrderRight : v.imageOrderLeft,
        )}
      >
        <img
          src={imageURL}
          alt={imageAltText}
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={
            imageObjectPosition
              ? { objectPosition: imageObjectPosition }
              : undefined
          }
        />
      </div>
      <div
        className={cn(
          "order-2 flex-1 min-w-0 px-4 py-8 md:py-0",
          v.textBase,
          imagePosition === "right" ? v.textRight : v.textLeft,
        )}
      >
        <div className="text-primary text-3xl font-semibold leading-tight max-w-[60ch] overflow-hidden">
          {title}
        </div>
        <div className="mt-4 text-xl text-foreground max-w-prose">
          {description}
        </div>
        {body && (
          <div className="mt-2 text-xl text-foreground max-w-prose">{body}</div>
        )}
        {shouldShowButton && (
          <div className="mt-2 lg:mt-4">
            <PrimaryButton
              label={resolvedButtonText!}
              href={resolvedButtonLink!}
              size="lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
