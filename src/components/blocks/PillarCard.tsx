interface PillarCardProps {
  title: string
}

export function PillarCard({ title }: PillarCardProps) {
  return (
    <div className="bg-gray-200 rounded-lg p-8 h-64 flex items-end">
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  )
}
