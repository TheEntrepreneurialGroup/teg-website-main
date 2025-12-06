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
    //can override the parameters,
    href={href}
    className={clsx("btn btn-accent", className)}
    onClick={(e) => {
      if (!!buttonText && !!href) {
        trackButtonClick(buttonText, href);
        if (onClick) onClick(e);
      }
    }}
    {...props}
  >
    {children}
  </motion.a>
);

export default Button;
