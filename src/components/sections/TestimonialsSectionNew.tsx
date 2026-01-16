import type { ReactNode } from "react";

interface TestimonialsSectionProps {
  children: ReactNode;
}

export function TestimonialsSection({ children }: TestimonialsSectionProps) {
  return <section className="py-8 md:py-12">{children}</section>;
}
