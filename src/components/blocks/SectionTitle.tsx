interface SectionTitleProps {
  text: string;
  className?: string;
  as?: "h1" | "h2";
}

export function SectionTitle({
  text,
  className = "",
  as: Tag = "h2",
}: SectionTitleProps) {
  return (
    <Tag
      className={`text-3xl md:text-4xl font-semibold text-left mb-8 md:mb-12 ${className}`}
    >
      {text}
    </Tag>
  );
}
