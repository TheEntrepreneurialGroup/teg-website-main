import type { ReactNode } from "react"

interface TestimonialsSectionProps {
  children: ReactNode
}

export function TestimonialsSection({ children }: TestimonialsSectionProps) {
  return <section className="py-12 md:py-20 border-b">{children}</section>
}
