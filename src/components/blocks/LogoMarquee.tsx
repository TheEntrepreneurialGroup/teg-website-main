interface LogoMarqueeProps {
  logos: Array<{ src: string }>
  speed?: "slow" | "medium" | "fast"
}

export function LogoMarquee({ logos, speed = "medium" }: LogoMarqueeProps) {
  const speedClasses = {
    slow: "animate-[scroll_120s_linear_infinite]",
    medium: "animate-[scroll_80s_linear_infinite]",
    fast: "animate-[scroll_40s_linear_infinite]",
  }

  // Duplicate logos for seamless loop - triple to ensure smoothness on wide screens
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <div className="relative w-screen overflow-hidden ml-[calc(50%-50vw)] bg-white py-12">
      {/* Fade Gradients */}
      <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className={`inline-flex w-max flex-nowrap ${speedClasses[speed]} hover:[animation-play-state:paused]`}>
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-auto h-12 md:h-24 mr-16 md:mr-32 flex items-center justify-center group"
          >
            {logo.src === "placeholder" ? (
              <div className="w-24 h-24 bg-muted-foreground/20 rounded" />
            ) : (
              <img
                src={logo.src || "/placeholder.svg"}
                alt=""
                className="w-full h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform group-hover:scale-110"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
