interface TestimonialListProps {
  testimonials: Array<React.ReactNode>
  speed?: "slow" | "medium" | "fast"
}

export function TestimonialList({ testimonials, speed = "medium" }: TestimonialListProps) {
  const speedClasses = {
    slow: "animate-[scroll_60s_linear_infinite]",
    medium: "animate-[scroll_40s_linear_infinite]",
    fast: "animate-[scroll_20s_linear_infinite]",
  }

  // Duplicate logos for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <div className="relative w-screen overflow-hidden ml-[calc(50%-50vw)]">
      <div className={`inline-flex w-max flex-nowrap ${speedClasses[speed]} hover:[animation-play-state:paused]`}>
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-auto mr-8 md:mr-16 flex items-center justify-center"
          >
            {testimonial}
          </div>
        ))}
      </div>
    </div>
  )
}


/**
import type { ReactNode } from "react"

interface TestimonialListProps {
  children: ReactNode
}

export function TestimonialList({ children }: TestimonialListProps) {
  return <div className="space-y-6">{children}</div>
}
  */
