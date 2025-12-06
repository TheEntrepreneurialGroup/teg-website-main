import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface TestimonialCardProps {
  quote: string
  person: {
    name: string
    roleLine1: string
    roleLine2: string
  }
  avatar: "placeholder"
}

export function TestimonialCard({ quote, person }: TestimonialCardProps) {
  return (
    <div className="bg-gray-100 rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <p className="text-base leading-relaxed">
          {quote.split("wichtiger begriff").map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && <strong className="font-semibold">wichtiger begriff</strong>}
            </span>
          ))}
        </p>
      </div>
      <div className="flex flex-col items-center md:items-end gap-3">
        <Avatar className="w-20 h-20">
          <AvatarFallback className="bg-gray-300 text-gray-600 text-2xl">
            {person.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="text-center md:text-right">
          <p className="font-semibold">{person.name}</p>
          <p className="text-sm text-muted-foreground">{person.roleLine1}</p>
          <p className="text-sm text-muted-foreground">{person.roleLine2}</p>
        </div>
      </div>
    </div>
  )
}
