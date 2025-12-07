interface OfferBoxProps {
  title: string
  subtitle?: string
  text?: string
  textPlaceholder?: boolean
  size?: "large" | "medium" | "small"
}

export function OfferBox({ title, subtitle, text, textPlaceholder = false, size = "medium" }: OfferBoxProps) {
  const sizeClasses = {
    large: "p-8 md:p-12",
    medium: "p-6 md:p-8",
    small: "p-4 md:p-6",
  }

  return (
    <div className={`bg-muted rounded-lg ${sizeClasses[size]} mt-8`}>
      <h3 className="text-xl md:text-2xl font-semibold mb-4">{title}</h3>
      {subtitle && <h4 className="text-lg md:text-xl font-medium mb-2">{subtitle}</h4>}
      {text && <p className="text-muted-foreground">{text}</p>}
      {textPlaceholder && (
        <div className="space-y-3">
          <div className="h-4 bg-muted-foreground/20 rounded w-full" />
          <div className="h-4 bg-muted-foreground/20 rounded w-5/6" />
          <div className="h-4 bg-muted-foreground/20 rounded w-4/6" />
        </div>
      )}
    </div>
  )
}
