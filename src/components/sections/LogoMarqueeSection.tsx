import type { ReactNode } from "react"

interface LogoMarqueeSectionProps {
  title: string
  children: ReactNode
  autoscroll?: boolean
  speed?: "slow" | "medium" | "fast"
}

export function LogoMarqueeSection({ title, children, autoscroll = true, speed = "medium" }: LogoMarqueeSectionProps) {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">{title}</h2>
        {children}
      </div>
    </section>
  )
}
