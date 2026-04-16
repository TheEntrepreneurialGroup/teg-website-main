import React from "react";
import { motion } from "framer-motion";
import { HTMLMotionProps } from "framer-motion";
import { trackButtonClick } from "../utils/analytics";
import clsx from "clsx";

interface ButtonProps extends HTMLMotionProps<"a"> {
  children: React.ReactNode;
  className?: string;
  buttonText?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  className,
  buttonText,
  onClick,
  ...props
}) => (
  <motion.a
    href={href}
    className={clsx(
      "inline-flex h-12 w-full md:w-[260px] items-center justify-center bg-accent px-6 text-base font-semibold text-white transition-colors hover:bg-accent-light hover:text-white active:bg-accent-dark",
      className,
    )}
    onClick={(e) => {
      if (!!buttonText && !!href) {
        trackButtonClick(buttonText, href);
      }

      if (onClick) onClick(e);
    }}
    {...props}
  >
    {children}
  </motion.a>
);

export default Button;
