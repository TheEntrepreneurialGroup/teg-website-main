interface TestimonialListProps {
  testimonials: Array<React.ReactNode>
  speed?: "slow" | "medium" | "fast"
}

export function TestimonialList({ testimonials, speed = "medium" }: TestimonialListProps) {
  const speedClasses = {
    slow: "animate-[scroll_120s_linear_infinite]",
    medium: "animate-[scroll_80s_linear_infinite]",
    fast: "animate-[scroll_40s_linear_infinite]",
  }

  // Duplicate logos for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <>
      {/* Mobile: Swipeable horizontal scroll */}
      <div className="md:hidden w-screen overflow-x-auto ml-[calc(50%-50vw)] py-8 snap-x snap-mandatory scrollbar-hide">
        <div className="inline-flex w-max flex-nowrap px-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center"
            >
              {testimonial}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Auto-scrolling marquee */}
      <div className="hidden md:block relative w-screen overflow-hidden ml-[calc(50%-50vw)] py-8">
        <div className={`inline-flex w-max flex-nowrap ${speedClasses[speed]}`}>
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
    </>
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
