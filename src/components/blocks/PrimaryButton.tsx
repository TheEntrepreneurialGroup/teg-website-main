import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/utils/analytics";
import { Link } from "react-router-dom";

interface PrimaryButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "default" | "lg";
  align?: "left" | "center" | "right";
  buttonText?: string;
  className?: string;
}

function isExternal(url: string) {
  return (
    url.startsWith("http") || url.startsWith("//") || url.startsWith("mailto:")
  );
}

export function PrimaryButton({
  label,
  href,
  onClick,
  size = "default",
  align = "left",
  buttonText,
  className,
}: PrimaryButtonProps) {
  const alignClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }[align];

  const buttonClasses =
    "bg-accent hover:bg-accent/80 active:bg-accent/90 text-white hover:text-white text-xl font-normal px-4 md:px-6 py-3 whitespace-normal text-center w-full md:w-auto min-w-[250px]" +
    (className ? " " + className : "");

  const handleClick = () => {
    if (buttonText && href) {
      trackButtonClick(buttonText, href);
    }
    if (onClick) onClick();
  };

  if (href && isExternal(href)) {
    return (
      <div className={"flex w-full md:w-auto " + alignClass}>
        <Button
          asChild
          size={size}
          className={buttonClasses}
          onClick={handleClick}
        >
          <a href={href} target="_blank" rel="noreferrer">
            {label}
          </a>
        </Button>
      </div>
    );
  }

  if (href) {
    return (
      <div className={"flex w-full md:w-auto " + alignClass}>
        <Button
          asChild
          size={size}
          className={buttonClasses}
          onClick={handleClick}
        >
          <Link to={href}>{label}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className={"flex w-full md:w-auto " + alignClass}>
      <Button size={size} className={buttonClasses} onClick={handleClick}>
        {label}
      </Button>
    </div>
  );
}
