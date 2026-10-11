import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

// Hilfskomponente für die hochzählenden Zahlen.
// Rendert zuerst den echten Wert, damit er im vorgerenderten HTML steht
// (Suchmaschinen, KI-Crawler, ohne JavaScript). Erst im Browser wird auf 0
// zurückgesetzt und beim Hereinscrollen hochgezählt.
const Counter = ({ value }: { value: string }) => {
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  const [displayValue, setDisplayValue] = useState(numericValue);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    // Bereits sichtbar: nicht auf 0 springen, echten Wert stehen lassen
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    setDisplayValue(0);
    let controls: ReturnType<typeof animate> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        controls = animate(0, numericValue, {
          duration: 2,
          ease: "easeOut",
          onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
        });
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      controls?.stop();
    };
  }, [numericValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

export default Counter;
