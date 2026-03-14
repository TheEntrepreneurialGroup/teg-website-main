import { cn } from "@/lib/utils/utils";
import DesktopNav from "@/components/layout/DesktopNav";
import MobileNav from "@/components/layout/MobileNav";

interface NavbarProps {
  scrolled?: boolean;
}

export default function Navbar({ scrolled = false }: NavbarProps) {
  return (
    <header
      className={cn(
        "bg-primary-dark fixed top-0 right-0 left-0 z-50 bg-blue-950 transition-all duration-300",
        { "shadow-md": scrolled, "md:py-2": !scrolled },
      )}
    >
      <div className="hidden md:block">
        <DesktopNav />
      </div>
      <div className="block md:hidden">{/* <MobileNav /> */}</div>
    </header>
  );
}
