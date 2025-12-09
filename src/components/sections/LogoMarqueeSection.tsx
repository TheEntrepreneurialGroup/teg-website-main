import type { ReactNode } from "react"

interface LogoMarqueeSectionProps {
  title: string
  children: ReactNode
}

export function LogoMarqueeSection({ title, children }: LogoMarqueeSectionProps) {
  return (
    <section className="w-full py-4 md:py-8 bg-background">
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6">{title}</h2>
        {children}
      </div>
    </section>
  )
}
