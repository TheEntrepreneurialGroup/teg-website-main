import type { ReactNode } from "react";

interface FoundersSectionProps {
  title: string;
  children: ReactNode;
}

export function FoundersSection({ title, children }: FoundersSectionProps) {
  return (
    <section className="py-12 md:py-20 border-b">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {title}
      </h2>
      {children}
    </section>
  );
}
