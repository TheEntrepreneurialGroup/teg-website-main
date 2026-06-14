import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIntl } from "react-intl";
import Logo from "./Logo";
import { trackButtonClick } from "../utils/analytics";

interface NavbarProps {
  scrolled: boolean;
  switchLanguage: (lang: "en" | "de") => void;
  hidden?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  scrolled,
  switchLanguage,
  hidden,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const intl = useIntl();
  const location = useLocation();

  const navItems = [
    {
      to: "/",
      label: intl.formatMessage({ id: "navbar.aboutPage.about" }),
      trackingLabel: "About Us",
      end: true,
    },
    {
      to: "/events",
      label: intl.formatMessage({ id: "navbar.aboutPage.events" }),
      trackingLabel: "Events",
    },
    {
      to: "/for-companies",
      label: intl.formatMessage({ id: "navbar.aboutPage.executives" }),
      trackingLabel: "TEG for Companies",
    },
    {
      to: "/for-students",
      label: intl.formatMessage({ id: "navbar.aboutPage.students" }),
      trackingLabel: "TEG for Students",
    },
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileMenuOpen]);

  const switchMobileLanguage = (language: "en" | "de") => {
    switchLanguage(language);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-[60] text-xl transition-[background-color,backdrop-filter,box-shadow,opacity] duration-300 ${
          hidden ? "pointer-events-none opacity-0" : "opacity-100"
        } ${
          scrolled || mobileMenuOpen
            ? "bg-primary-dark/95 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.55)] backdrop-blur-md"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-transparent transition-opacity duration-300 ${
            scrolled || mobileMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        />

        <div className="container-custom relative flex h-20 w-full items-center justify-between md:h-24">
          <Link
            to="/"
            className="relative z-10 flex items-center"
            aria-label="TEG Startseite"
          >
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `relative py-2 font-normal text-white transition-colors duration-300 hover:text-primary-light ${
                    isActive
                      ? "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white"
                      : ""
                  }`
                }
                onClick={() => trackButtonClick(item.trackingLabel, "Navbar")}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <button
              onClick={() => switchLanguage("en")}
              className="font-normal text-white transition-colors duration-300 hover:text-primary-light"
            >
              EN
            </button>
            <span className="text-white/60">|</span>
            <button
              onClick={() => switchLanguage("de")}
              className="font-normal text-white transition-colors duration-300 hover:text-primary-light"
            >
              DE
            </button>
          </div>

          <button
            className="relative z-[70] ml-auto grid h-11 w-11 place-items-center text-white md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Menü schließen" : "Navigation öffnen"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            className="fixed inset-0 z-50 flex min-h-dvh flex-col bg-primary-dark px-6 pb-10 pt-28 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.nav
              className="flex flex-1 flex-col justify-center gap-7"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25 }}
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `border-b border-white/10 pb-4 text-2xl font-normal transition-colors ${
                      isActive ? "text-accent-light" : "text-white"
                    }`
                  }
                  onClick={() => trackButtonClick(item.trackingLabel, "Navbar")}
                >
                  {item.label}
                </NavLink>
              ))}
            </motion.nav>

            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
              <button
                onClick={() => switchMobileLanguage("en")}
                className="font-normal text-white transition-colors hover:text-accent-light"
              >
                EN
              </button>
              <span className="text-white/50">|</span>
              <button
                onClick={() => switchMobileLanguage("de")}
                className="font-normal text-white transition-colors hover:text-accent-light"
              >
                DE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
