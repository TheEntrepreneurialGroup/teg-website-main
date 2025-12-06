import type { ReactNode } from "react"

interface FoundersGridProps {
  columns: number
  children: ReactNode
}

export function FoundersGrid({ columns, children }: FoundersGridProps) {
  return <div className={`grid grid-cols-2 md:grid-cols-${columns} gap-6`}>{children}</div>
}
