interface LogoMarqueeProps {
  logos: Array<{ src: string }>
  speed?: "slow" | "medium" | "fast"
}

export function LogoMarquee({ logos, speed = "medium" }: LogoMarqueeProps) {
  const speedClasses = {
    slow: "animate-[scroll_100s_linear_infinite]",
    medium: "animate-[scroll_40s_linear_infinite]",
    fast: "animate-[scroll_20s_linear_infinite]",
  }

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex gap-8 md:gap-12">
        <div className={`flex gap-8 md:gap-12 ${speedClasses[speed]}`}>
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-muted rounded-lg flex items-center justify-center"
            >
              {logo.src === "placeholder" ? (
                <div className="w-16 h-16 md:w-20 md:h-20 bg-muted-foreground/20 rounded" />
              ) : (
                <img src={logo.src || "/placeholder.svg"} alt="" className="w-full h-full object-contain p-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
