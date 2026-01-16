import type { ReactNode } from "react";

interface WhyTegSectionProps {
  children: ReactNode;
}

export function WhyTegSection({ children }: WhyTegSectionProps) {
  return (
    <section className="py-8 md:py-12">
      <div className="space-y-8">{children}</div>
    </section>
  );
}
