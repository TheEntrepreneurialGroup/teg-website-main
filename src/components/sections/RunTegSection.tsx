import type { ReactNode } from "react";

interface RunTegSectionProps {
  children: ReactNode;
}

export function RunTegSection({ children }: RunTegSectionProps) {
  return <section className="py-12 md:py-20">{children}</section>;
}
