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
      className={cn(
        "bg-primary-dark sticky top-0 right-0 left-0 z-50 text-white transition-all duration-300 [--nav-h:5rem] md:[--nav-h:6rem]",
        { "[--nav-h:5.5rem]": !scrolled, "[--nav-h:4.5rem]": scrolled },
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between px-6 py-4 sm:gap-12 lg:gap-10 lg:px-8",
          {
            "shadow-md": scrolled,
            "": !scrolled,
          },
        )}
      >
        <Logo
          className="shrink-0"
          imageClassName="h-auto w-70 md:w-66 lg:w-70 xl:w-78"
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
