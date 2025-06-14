import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage: string;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
}) => {
  return (
    <div
      className="relative h-screen min-h-[600px] flex items-center justify-start overflow-hidden"
      style={{
      height: "calc(100vh - 6rem)",
      marginTop: "1rem",
      backgroundImage: `linear-gradient(rgba(15, 44, 89, 0.4), rgba(15, 44, 89, 0.5)), url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/40"></div>

      <div className="container-custom z-10 text-left pl-8">
      <motion.h1
        className="text-white mb-6 font-bold"
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

      <motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0.6, y: -4 }}
      animate={{ opacity: 0.8, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
        ></path>
      </svg>
      </motion.div>
    </div>
  );
};
export default HeroSection;
