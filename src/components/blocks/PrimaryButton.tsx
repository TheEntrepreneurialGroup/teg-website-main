import { Button } from "@/components/ui/button"

interface PrimaryButtonProps {
  label: string
  align?: "left" | "center" | "right"
  size?: "sm" | "default" | "lg"
}

export function PrimaryButton({ label, align = "left", size = "default" }: PrimaryButtonProps) {
  const alignClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }[align]

  return (
    <div className={`flex ${alignClass}`}>
      <Button size={size} className="bg-blue-600 hover:bg-blue-700 text-white">
        {label}
      </Button>
    </div>
  )
}
