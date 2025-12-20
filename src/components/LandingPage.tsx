import type { ReactNode } from "react"


interface LandingPageProps {
  children: ReactNode
}

export function LandingPage({ children }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">{children}</div>
    </div>
  )
}
