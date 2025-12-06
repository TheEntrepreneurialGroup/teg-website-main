import type { ReactNode } from "react"

interface FeatureGridProps {
  layout: "2x2"
  children: ReactNode
}

export function FeatureGrid({ children }: FeatureGridProps) {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">{children}</div>
}
