import type { ReactNode } from "react"

interface WhyTegSectionProps {
  children: ReactNode
}

export function WhyTegSection({ children }: WhyTegSectionProps) {
  return (
    <section className="py-12 md:py-20">
      <div className="space-y-8">{children}</div>
    </section>
  )
}
