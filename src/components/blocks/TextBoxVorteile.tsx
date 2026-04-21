interface VorteileProps {
  title: string;
  desc: string;
  benefit: string;
}

export function TextBoxVorteile({ title, desc, benefit }: VorteileProps) {
  return (
    <div className="bg-white p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="flex flex-grow flex-col">
        <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
        <p className="text-foreground mb-6 min-h-[80px]">{desc}</p>
      </div>
      <div className="flex flex-shrink pt-4 border-t-2 border-border">
        <p className="font-bold text-accent">{benefit}</p>
      </div>
    </div>
  );
}
