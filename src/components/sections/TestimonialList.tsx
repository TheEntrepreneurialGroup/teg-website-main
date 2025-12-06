import type { ReactNode } from "react"

interface TestimonialListProps {
  layout: "stacked"
  children: ReactNode
}

export function TestimonialList({ children }: TestimonialListProps) {
  return <div className="space-y-6">{children}</div>
}
