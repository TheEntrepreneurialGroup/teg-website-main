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
    outer: "md:grid md:grid-cols-2 md:gap-0",
    image: "md:w-full",
    imageOrderRight: "order-1 md:order-2",
    imageOrderLeft: "order-1",
    textRight: "md:order-1",
    textLeft: "md:order-2",
    textBase: "",
  },
  lg: {
    outer: "md:grid md:grid-cols-2 md:gap-0",
    image: "md:w-full",
    imageOrderRight: "order-1 md:order-2",
    imageOrderLeft: "order-1",
    textRight: "md:order-1",
    textLeft: "md:order-2",
    textBase: "",
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
          "order-2 flex min-w-0 flex-col justify-center px-6 py-10 sm:px-8 md:w-full md:px-10 md:py-12 lg:px-16 lg:py-16 xl:px-24",
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
