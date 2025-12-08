import type { ReactNode } from "react"

interface FeatureGridProps {
  layout: "2x2"
  children: ReactNode
}

export function FeatureGrid({ children }: FeatureGridProps) {
  return <div className="w-full flex flex-wrap justify-center">{children}</div>
}
