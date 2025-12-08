import type { ReactNode } from "react"

interface TestimonialListProps {
  children: ReactNode
}

export function TestimonialList({ children }: TestimonialListProps) {
  return <div className="space-y-6">{children}</div>
}
