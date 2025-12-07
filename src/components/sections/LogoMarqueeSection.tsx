import type { ReactNode } from "react"

interface LogoMarqueeSectionProps {
  title: string
  children: ReactNode
}

export function LogoMarqueeSection({ title, children }: LogoMarqueeSectionProps) {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">{title}</h2>
        {children}
      </div>
    </section>
  )
}
