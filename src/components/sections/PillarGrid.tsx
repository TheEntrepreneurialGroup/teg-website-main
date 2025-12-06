import type { ReactNode } from "react"

interface PillarGridProps {
  columns: number
  children: ReactNode
}

export function PillarGrid({ columns, children }: PillarGridProps) {
  return <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6`}>{children}</div>
}
