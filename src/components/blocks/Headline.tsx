interface HeadlineProps {
  text: string;
  variant?: "h1" | "h2" | "h3";
}

export function Headline({ text, variant = "h1" }: HeadlineProps) {
  const className = {
    h1: "text-4xl md:text-5xl font-bold text-primary",
    h2: "text-3xl md:text-4xl font-bold text-primary",
    h3: "text-2xl md:text-3xl font-semibold text-primary",
  }[variant];

  const Tag = variant;

  return <Tag className={className}>{text}</Tag>;
}
