import { useEffect, useState } from "react";

export function useSlideshow(count: number, autoPlayMs = 6000) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (count <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, autoPlayMs);

    return () => window.clearInterval(timer);
  }, [count, autoPlayMs, activeIndex]);

  return { activeIndex, setActiveIndex };
}
