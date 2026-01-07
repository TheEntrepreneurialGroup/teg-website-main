"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "./blocks/PrimaryButton";
import { cn } from "../lib/utils";

interface NewFeatureCardProps {
  className?: string;
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
  className,
  title,
  description,
  buttonText,
  buttonLink,
  imagePosition,
  imageURL,
  imageAltText,
  clickable,
}) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        "w-full h-fiit flex flex-col md:flex-row items-center gap-10 overflow-visible",
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
        className={`${
          imagePosition === "right"
            ? "order-2 md:order-1 md:pr-0 md:pl-8"
            : "order-2 md:order-2 md:pl-0 md:pr-8"
        } flex-1 min-w-0 px-4 md:px-0`}
      >
        <div className="text-primary text-3xl font-bold leading-tight max-w-[60ch] overflow-hidden">
          {title}
        </div>
        <div className="mt-2 mb-6 text-gray-700 max-w-prose">{description}</div>
        <div className={`${clickable ? "" : "hidden"}`}>
          <PrimaryButton
            label={buttonText}
            onClick={() => router.push(buttonLink)}
            size="lg"
          />
        </div>
      </div>
    </div>
  );
};

export default NewFeatureCard;
