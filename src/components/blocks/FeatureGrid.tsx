import type { ReactNode } from "react";

interface FeatureGridProps {
  children: ReactNode;
}

export function FeatureGrid({ children }: FeatureGridProps) {
  return <div className="w-full flex flex-wrap justify-center">{children}</div>;
}
