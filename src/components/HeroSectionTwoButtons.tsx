import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { trackButtonClick } from "../utils/analytics";
import umami from "umami";

interface HeroSectionTwoButtonsProps {
  title: string;
  since: string;
  subtitle: string;
  buttonText1?: string;
  buttonLink1?: string;
  buttonText2?: string;
  buttonLink2?: string;
  backgroundImage: string;
}
const HeroSectionTwoButtons: React.FC<HeroSectionTwoButtonsProps> = ({
  title,
  since,
  subtitle,
  buttonText1,
  buttonLink1,
  buttonText2,
  buttonLink2,
  backgroundImage,
}) => {
  return (
    <div
      className="relative h-full md:h-screen lg:h-[108vh] min-h-[600px] flex items-center justify-start overflow-hidden md:pt-40 pb-16"
      style={{
        marginTop: "1rem",
        backgroundImage: `linear-gradient(rgba(15, 44, 89, 0.4), rgba(15, 44, 89, 0.5)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <style>
        {`
          @media (max-width: 768px) {
            .hero-bg-mobile {
              background-position: left center !important;
            }
          }
        `}
      </style>

      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/60"></div>
      <div className="container-custom z-10 text-left pl-8 py-12">
        <motion.h1
          className="text-white font-bold break-words"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        {since && (
          <motion.h1
            className="text-white mb-6 font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {since}
          </motion.h1>
        )}
        {subtitle != "home.hero.subtitle" && (
          <motion.p
            className="text-secondary-light text-xl max-w-4xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          className="flex gap-2 flex-wrap jusitfy-start w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {buttonText1 && buttonLink1 && (
            <Button
              className="w-[250px] md:w-auto text-center min-w-[100px]"
              href={buttonLink1}
              onClick={() =>
                umami.track("home-hero-cta", { button: buttonText1 })
              }
            >
              {buttonText1}
            </Button>
          )}
          {buttonText2 && buttonLink2 && (
            <Button
              className="w-[250px] md:w-auto text-center min-w-[100px]"
              href={buttonLink2}
              onClick={() =>
                umami.track("home-hero-cta", { button: buttonText2 })
              }
            >
              {buttonText2}
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  );
};
export default HeroSectionTwoButtons;
