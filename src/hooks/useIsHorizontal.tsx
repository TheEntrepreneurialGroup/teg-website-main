import { useState, useEffect } from "react";

export function useIsHorizontal() {
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const handler = (e: MediaQueryListEvent) => setIsHorizontal(e.matches);
    setIsHorizontal(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isHorizontal;
}
