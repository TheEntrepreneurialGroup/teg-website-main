"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { trackButtonClick } from "../utils/analytics";
import { useIntl } from "react-intl";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  scrolled: boolean;
  switchLanguage: (lang: "en" | "de") => void;
}

export default function Navbar({ scrolled, switchLanguage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const intl = useIntl();
  const pathname = usePathname();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { label: intl.formatMessage({ id: "navbar.about" }), path: "/" , track: "About Us"},
    { label: intl.formatMessage({ id: "navbar.forCompanies" }), path: "/for-companies", track: "TEG for Companies" },
    { label: intl.formatMessage({ id: "navbar.forStudents" }), path: "/for-students", track: "TEG for Students" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary-dark ${
        scrolled ? "shadow-md" : "md:py-2"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-custom flex justify-between items-center w-full p-2">
        <Link href="/" className="flex items-center p-0">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => trackButtonClick(link.track, "Navbar")}
              className={`font-semibold relative text-white hover:text-primary-light transition-colors duration-300 ${
                isActive(link.path)
                  ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language Switcher */}
        <div className="hidden md:flex items-center space-x-4 mx-4">
          <button
            onClick={() => switchLanguage("en")}
            className="font-semibold text-white hover:text-primary-light transition-colors duration-300"
          >
            EN
          </button>
          <span className="text-white">|</span>
          <button
            onClick={() => switchLanguage("de")}
            className="font-semibold text-white hover:text-primary-light transition-colors duration-300"
          >
            DE
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden h-full aspect-square ml-auto ${
            mobileMenuOpen ? "text-black" : "text-white"
          } z-50`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-white flex flex-col items-start justify-center z-40 p-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col items-start space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      trackButtonClick(link.track, "Navbar");
                    }}
                    className={`text-xl font-semibold ${
                      isActive(link.path) ? "text-primary" : "text-gray-800"
                    } hover:text-primary transition-colors duration-300`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

