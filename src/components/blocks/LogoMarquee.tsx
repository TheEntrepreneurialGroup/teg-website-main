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
    <div className="relative w-screen overflow-hidden ml-[calc(50%-50vw)]">
      <div className={`inline-flex w-max flex-nowrap ${speedClasses[speed]}`}>
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-auto h-8 md:h-20 mr-8 md:mr-16 flex items-center justify-center"
          >
            {logo.src === "placeholder" ? (
              <div className="w-16 h-16 md:w-20 md:h-20 bg-muted-foreground/20 rounded" />
            ) : (
              <img src={logo.src || "/placeholder.svg"} alt="" className="w-full h-full object-contain mr-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
