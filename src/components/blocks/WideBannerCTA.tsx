import type { ReactNode } from "react"

interface WideBannerCTAProps {
  background: "grey" | "white"
  title: string
  text: string
  align: "left" | "center"
  children?: ReactNode
}

export function WideBannerCTA({ background, title, text, align, children }: WideBannerCTAProps) {
  const bgClass = background === "grey" ? "bg-gray-100" : "bg-white"
  const textAlign = align === "center" ? "text-center" : "text-left"

  return (
    <div className={`${bgClass} rounded-lg p-8 md:p-12`}>
      <div className={`max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
        <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${textAlign}`}>{title}</h3>
        <p className={`text-muted-foreground mb-6 ${textAlign}`}>{text}</p>
        {children}
      </div>
    </div>
  )
}
