interface LogoMarqueeProps {
  logos: Array<{ src: string }>;
  speed?: "slow" | "medium" | "fast";
}

export function LogoMarquee({ logos, speed = "medium" }: LogoMarqueeProps) {
  const speedClasses = {
    slow: "animate-[scroll_240s_linear_infinite]",
    medium: "animate-[scroll_160s_linear_infinite]",
    fast: "animate-[scroll_80s_linear_infinite]",
  };

  const speedClass = speedClasses[speed] ?? speedClasses.medium;

  // Duplicate logos for seamless loop - number must be divisible by 2 to not break the effect
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative w-screen overflow-hidden ml-[calc(50%-50vw)] bg-white py-4">
      {/* Fade Gradients */}
      <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        className={`inline-flex w-max flex-nowrap logo-marquee-scroll ${speedClass}`}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-auto h-6 md:h-12 mr-12 md:mr-24 flex items-center justify-center group"
          >
            {logo.src === "placeholder" ? (
              <div className="w-16 h-16 bg-muted-foreground/20 rounded" />
            ) : (
              <img
                src={logo.src || "/placeholder.svg"}
                alt=""
                className="h-full w-auto object-contain max-w-none"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
