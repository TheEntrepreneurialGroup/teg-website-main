"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const scrollPositions = new Map<string, number>();

export default function ScrollRestoration() {
  const pathname = usePathname();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    // Save scroll position for previous path
    if (prevPath.current) {
      scrollPositions.set(prevPath.current, window.scrollY);
    }

    // Restore scroll position for current path, or scroll to top
    const y = scrollPositions.get(pathname) ?? 0;
    window.scrollTo(0, y);

    prevPath.current = pathname;
  }, [pathname]);

  return null;
}

