interface SectionTitleProps {
  text: string;
  className?: string;
}

export function SectionTitle({ text, className = "" }: SectionTitleProps) {
  return (
    <h2
      className={`text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 ${className}`}
    >
      {text}
    </h2>
  );
}
