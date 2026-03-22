import { cn } from "@/lib/utils";
import DesktopNav from "@/components/layout/DesktopNav";
import MobileNav from "@/components/layout/MobileNav";
import Logo from "@/ui/Logo";

interface NavbarProps {
  scrolled?: boolean;
}

export default function Navbar({ scrolled = false }: NavbarProps) {
  return (
    <header
      className={
        "bg-primary-dark sticky top-0 right-0 left-0 z-50 text-white transition-all duration-300"
      }
    >
      <div
        className={cn(
          "flex items-center justify-between sm:gap-12 sm:pr-4 lg:gap-10 lg:px-8",
          {
            "shadow-md": scrolled,
            "py-4": !scrolled,
          },
        )}
      >
        <Logo
          className="shrink-0"
          imageClassName="h-auto w-54 sm:w-60 md:w-64 lg:w-70 xl:w-78"
          sizes="9rem, (min-width: 1024px) 8rem, (min-width: 768px) 7rem, 6rem"
        />

        <DesktopNav containerClassName="hidden md:flex" />
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
