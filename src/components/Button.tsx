import React from "react";
import { motion } from "framer-motion";
import { HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"a"> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  className = "btn btn-accent",
  ...props
}) => (
  <motion.a
    //can override the parameters
    href={href}
    className={className}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
    whileTap={{ scale: 0.97 }}
    {...props}
  >
    {children}
  </motion.a>
);

export default Button;
