interface SubheadlineProps {
  text: string;
  variant?: "body" | "large";
}

export function Subheadline({ text, variant = "body" }: SubheadlineProps) {
  const className = {
    body: "text-base md:text-lg text-foreground",
    large: "text-lg md:text-xl text-foreground",
  }[variant];

  return <p className={className}>{text}</p>;
}
