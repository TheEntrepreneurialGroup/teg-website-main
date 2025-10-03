import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { trackButtonClick } from "../utils/analytics";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage: string;
  backgroundSize?: string;
  backgroundPosition?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
  backgroundSize = "cover",
  backgroundPosition = "center bottom",
}) => {
  return (
    <div
      className="relative h-full md:h-screen min-h-[600px] flex items-center justify-start overflow-hidden pl-8 md:pt-96 pb-16"
      style={{
        marginTop: "1rem",
        backgroundImage: `linear-gradient(rgba(15, 44, 89, 0.4), rgba(15, 44, 89, 0.5)), url(${backgroundImage})`,
        backgroundSize,
        backgroundPosition,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/60"></div>

      <div className="container-custom z-10 text-left pl-8">
        <motion.h1
          className="text-white font-bold "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-secondary-light text-xl max-w-3xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>

        {buttonText && buttonLink && (
          <Button href={buttonLink}>{buttonText}</Button>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
