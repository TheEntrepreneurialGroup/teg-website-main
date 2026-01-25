"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { Link, usePathname } from "@/i18n/navigation";

import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import DesktopNav from "@/ui/DesktopNav";
import MobileMenu from "@/ui/MobileMenu";

interface NavbarProps {
  scrolled?: boolean;
}

export default function Navbar({ scrolled = false }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen((s) => !s);
  const closeMobile = () => setMobileMenuOpen(false);
  const pathname = usePathname();

  return (
    <header
      className={clsx(
        "bg-primary-dark fixed top-0 right-0 left-0 z-50 bg-black transition-all duration-300",
        { "shadow-md": scrolled, "md:py-2": !scrolled },
      )}
    >
      <div className="container-custom flex w-full items-center justify-between p-2">
        <div className="flex items-center p-0">
          <Logo width={140} height={60} />
        </div>

        <DesktopNav />

        <div className="mx-4 hidden items-center space-x-4 md:flex">
          <Link
            href={pathname}
            locale="en"
            className="hover:text-primary-light font-semibold text-white transition-colors duration-300"
          >
            EN
          </Link>
          <span className="text-white">|</span>
          <Link
            href={pathname}
            locale="de"
            className="hover:text-primary-light font-semibold text-white transition-colors duration-300"
          >
            DE
          </Link>
        </div>

        <button
          className={clsx("z-50 ml-auto aspect-square h-full md:hidden", {
            "text-black": mobileMenuOpen,
            "text-white": !mobileMenuOpen,
          })}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <MobileMenu open={mobileMenuOpen} onClose={closeMobile} />
      </div>
    </header>
  );
}
