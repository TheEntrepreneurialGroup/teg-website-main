import { cn } from "@/lib/utils";
import DesktopNav from "@/components/layout/DesktopNav";
import MobileNav from "@/components/layout/MobileNav";

interface NavbarProps {
  scrolled?: boolean;
}

export default function Navbar({ scrolled = false }: NavbarProps) {
  return (
    <header
      className={cn(
        "bg-primary-dark sticky top-0 right-0 left-0 z-50 transition-all duration-300",
        { "shadow-md": scrolled, "md:py-4": !scrolled },
      )}
    >
      <DesktopNav />
      <div className="block md:hidden">
        <MobileNav />
      </div>
    </header>
  );
}
