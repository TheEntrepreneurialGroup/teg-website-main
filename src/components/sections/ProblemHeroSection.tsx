import type { ReactNode } from "react"

interface ProblemHeroSectionProps {
  children: ReactNode
}

export function ProblemHeroSection({ children }: ProblemHeroSectionProps) {
  return (
    <section className="py-12 md:py-20">
      <div className="space-y-6">{children}</div>
    </section>
  )
}
