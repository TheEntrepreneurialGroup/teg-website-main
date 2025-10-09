import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { trackButtonClick } from "../utils/analytics";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  variant?: "light" | "dark";
  className?: string;
  isSection?: boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  variant = "dark",
  className = "",
  isSection = true,
}) => {
  const isLight = variant === "light";

  const content = (
    <>
      <motion.h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          isLight ? "text-primary" : "text-white"
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>

      <motion.p
        className={`text-lg mb-8 ${
          isLight ? "text-gray-600" : "text-secondary-light"
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Button
          className="max-w-[250px] md:w-auto text-center min-w-[100px]"
          href={buttonLink}
          buttonText={"home-cta: " + buttonText}
        >
          {buttonText}
        </Button>
      </motion.div>
    </>
  );

  // Conditional rendering based on isSection flag
  if (isSection) {
    return (
      <section
        className={`py-16 ${
          isLight ? "bg-secondary-light" : "bg-primary"
        } ${className}`}
      >
        <div className="container-custom">
          <div className="max-w-3xl">{content}</div>
        </div>
      </section>
    );
  }

  // Return just the content wrapped in a div for grid usage
  return (
    <div
      className={`p-8 rounded-lg ${
        isLight ? "bg-secondary-light" : "bg-primary"
      } ${className}`}
    >
      {content}
    </div>
  );
};

export default CallToAction;
