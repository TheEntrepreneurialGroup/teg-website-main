import type { ReactNode } from "react"

interface ProblemHeroSectionProps {
  children: ReactNode
}

export function ProblemHeroSection({ children }: ProblemHeroSectionProps) {
  return (
    <section className="py-8 md:py-12">
      <div className="space-y-6">{children}</div>
    </section>
  )
}
