type TextComponentProps = {
  title: string;          // "Coach-Zertifikat:"
  intro: React.ReactNode; // Fließtext-Absätze
  highlight: string;      // "Im Zertifikat enthalten sind:"
  items: string[];        // Liste mit den Punkten
};

export default function TextComponent({
  title,
  intro,
  highlight,
  items,
}: TextComponentProps) {
  return (
    <section
      className="
        rounded-xl bg-sky-50 p-6 md:p-7 shadow-sm
        border-l-4 border-sky-400 border-dashed
        text-gray-800
      "
    >
      <h3 className="text-sky-600 font-semibold mb-3">{title}</h3>

      <div className="leading-relaxed mb-3">
        {intro}
      </div>

      <p className="font-semibold italic mb-2">{highlight}</p>

      <ul className="list-none space-y-1">
        {items.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </section>
  );
}
