import React from "react";
import { motion } from "framer-motion";
<<<<<<< HEAD

=======
>>>>>>> d4a591e6dfa9c2797f3970f81a403b6b2dbc2714
interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage: string;
}
<<<<<<< HEAD

=======
>>>>>>> d4a591e6dfa9c2797f3970f81a403b6b2dbc2714
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
<<<<<<< HEAD
      backgroundImage: `linear-gradient(rgba(15, 44, 89, 0.4), rgba(15, 44, 89, 0.4)), url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/40"></div>

      <div className="container-custom z-10 text-left pl-8">
      <motion.h1
        className="text-white mb-8 font-extrabold text-5xl md:text-7xl leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </motion.h1>

      <motion.p
        className="text-secondary-light text-2xl md:text-3xl font-medium max-w-3xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {subtitle}
      </motion.p>

      {buttonText && buttonLink && (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        >
        <a href={buttonLink} className="btn btn-accent">
          {buttonText}
        </a>
        </motion.div>
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
=======
        height: "calc(100vh - 6rem)",
        marginTop: "1rem",
        backgroundImage: `linear-gradient(rgba(15, 44, 89, 0.8), rgba(15, 44, 89, 0.9)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/80"></div>

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href={buttonLink} className="btn btn-accent">
              {buttonText}
            </a>
          </motion.div>
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
>>>>>>> d4a591e6dfa9c2797f3970f81a403b6b2dbc2714
      </motion.div>
    </div>
  );
};
<<<<<<< HEAD

=======
>>>>>>> d4a591e6dfa9c2797f3970f81a403b6b2dbc2714
export default HeroSection;
