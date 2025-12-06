type TextComponentProps = {
  title: string;
  intro: React.ReactNode;
  highlight: string;
  items: string[];
  borderRight?: boolean; // new prop
};

export default function TextComponent({
  title,
  intro,
  highlight,
  items,
  borderRight = false,
}: TextComponentProps) {
  return (
    <section
      className={
        `bg-primary-light/5 p-2 sm:p-6 md:p-7 border-dashed ` +
        (borderRight
          ? "border-r-4 border-primary"
          : "border-l-4 border-primary")
      }
    >
      <h3 className="text-primary font-semibold mb-1">{title}</h3>
      <p className="leading-relaxed m-0 mb-1">{intro}</p>
      <p className="font-semibold italic m-0">{highlight}</p>
      <p className="list-none space-y-1 m-0">{items}</p>
    </section>
  );
}
