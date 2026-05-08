interface SectionTitleProps {
  text: string;
  className?: string;
}

export function SectionTitle({ text, className = "" }: SectionTitleProps) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-semibold text-left mb-8 md:mb-12 ${className}`}
    >
      {text}
    </h2>
  );
}
