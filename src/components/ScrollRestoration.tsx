import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollPositions = new Map<string, number>();

const ScrollRestoration: React.FC = () => {
  const location = useLocation();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    // Save scroll position for previous path
    if (prevPath.current) {
      scrollPositions.set(prevPath.current, window.scrollY);
    }

    if (location.hash) {
      const id = location.hash.slice(1);
      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
      requestAnimationFrame(scrollToHash);
      prevPath.current = location.pathname;
      return;
    }

    // Restore scroll position for current path, or scroll to top
    const y = scrollPositions.get(location.pathname) ?? 0;
    window.scrollTo(0, y);
    prevPath.current = location.pathname;
    // Optionally, clean up positions for unmounted routes
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollRestoration;
