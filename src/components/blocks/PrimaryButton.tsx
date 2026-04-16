import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/utils/analytics";

interface PrimaryButtonProps {
  label: string;
  align?: "left" | "center" | "right";
  size?: "sm" | "default" | "lg";
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  buttonText?: string;
  fullWidth?: boolean;
  minWidthClassName?: string;
  className?: string;
}

export function PrimaryButton({
  label,
  align = "left",
  size = "default",
  onClick,
  href,
  target,
  rel,
  buttonText,
  fullWidth = false,
  minWidthClassName = "min-w-[250px]",
  className,
}: PrimaryButtonProps) {
  const alignClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }[align];

  const buttonClasses =
    "bg-accent hover:bg-accent-light active:bg-accent-dark text-white shadow-[0px_0px_5px_rgba(0,0,0,0.1)] text-lg px-4 md:px-6 py-3 whitespace-normal text-center w-full md:w-auto " +
    minWidthClassName +
    (fullWidth ? " w-full" : "") +
    (className ? " " + className : "");

  const handleClick = () => {
    if (buttonText && href) {
      trackButtonClick(buttonText, href);
    }
    if (onClick) onClick();
  };

  if (href) {
    return (
      <div className={"flex " + alignClass + (fullWidth ? " w-full" : "")}>
        <a
          href={href}
          target={target}
          rel={rel}
          className={
            "inline-flex items-center justify-center gap-2 font-medium transition-all " +
            buttonClasses
          }
          onClick={handleClick}
        >
          {label}
        </a>
      </div>
    );
  }

  return (
    <div className={"flex " + alignClass + (fullWidth ? " w-full" : "")}>
      <Button size={size} className={buttonClasses} onClick={handleClick}>
        {label}
      </Button>
    </div>
  );
}
