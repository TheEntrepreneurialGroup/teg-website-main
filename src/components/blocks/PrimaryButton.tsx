import { Button } from "@/components/ui/button";

interface PrimaryButtonProps {
  label: string;
  align?: "left" | "center" | "right";
  size?: "sm" | "default" | "lg";
  onClick?: () => void;
}

export function PrimaryButton({
  label,
  align = "left",
  size = "default",
  onClick,
}: PrimaryButtonProps) {
  const alignClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }[align];

  return (
    <div className={`flex ${alignClass}`}>
      <Button
        size={size}
        className="bg-accent hover:bg-accent-light active:bg-accent-dark text-white shadow-[0px_0px_5px_rgba(0,0,0,0.1)] text-base md:text-xl px-4 md:px-6 py-3 whitespace-normal text-center"
        onClick={onClick}
      >
        {label}
      </Button>
    </div>
  );
}
