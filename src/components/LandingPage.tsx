import type { ReactNode } from "react"
import { TestimonialsSection } from "@/components/sections/TestimonialsSectionNew"

interface LandingPageProps {
  children: ReactNode
}

export function LandingPage({ children }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">{children}</div>
    </div>
  )
}
