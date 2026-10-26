import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIntl } from "react-intl";
import { trackButtonClick } from "../utils/analytics";

interface NavbarProps {
  switchLanguage: (lang: "en" | "de") => void;
}

/** Same black as the editorial pages (--stage in editorial.css). */
const NAV_BG = "bg-[#17191c]";

const Navbar: React.FC<NavbarProps> = ({ switchLanguage }) => {
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

  // The events overview and the conference pages share the conference name
  // and the "Konferenzen & Events" menu entry.
  const isConferencePage = ["/events", "/conferences"].some((prefix) =>
    location.pathname.startsWith(prefix),
  );
  const isActive = (to: string, routeActive: boolean) =>
    routeActive || (to === "/events" && isConferencePage);

  const switchMobileLanguage = (language: "en" | "de") => {
    switchLanguage(language);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-[60] border-b border-white/10 font-['Libre_Franklin'] text-xl antialiased ${NAV_BG}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-custom relative flex h-20 w-full items-center justify-between xl:h-24">
          <Link
            to="/"
            className="relative z-10 flex items-center"
            aria-label="TEG Startseite"
          >
            <span className="flex items-center gap-3.5 text-[15px] leading-tight text-white">
              <img
                src="/events/teg-mark.webp"
                alt=""
                className="h-9 w-9"
                width={36}
                height={36}
              />
              {/* Name set as a two-line lockup so it stays compact next to
                  the menu; the events pages use the shorter conference name. */}
              {isConferencePage ? (
                <span className="font-medium tracking-[0.01em]">
                  <b className="font-bold">TEG</b> Management Conferences
                </span>
              ) : (
                <span className="grid text-[14px] font-medium leading-[1.25]">
                  <span>
                    <b className="font-bold">TEG</b> Executive Education
                  </span>
                  <span>&amp; Management Conferences</span>
                </span>
              )}
            </span>
          </Link>

          <nav className="hidden items-center gap-8 xl:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive: routeActive }) =>
                  `relative whitespace-nowrap py-2 font-normal text-white transition-colors duration-200 hover:text-white/70 ${
                    isActive(item.to, routeActive)
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

          <div className="hidden items-center gap-4 xl:flex">
            <button
              onClick={() => switchLanguage("en")}
              className="font-normal text-white transition-colors duration-200 hover:text-white/70"
            >
              EN
            </button>
            <span className="text-white/60">|</span>
            <button
              onClick={() => switchLanguage("de")}
              className="font-normal text-white transition-colors duration-200 hover:text-white/70"
            >
              DE
            </button>
          </div>

          <button
            className="relative z-[70] ml-auto grid h-11 w-11 place-items-center text-white xl:hidden"
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
            className={`fixed inset-0 z-50 flex min-h-dvh flex-col px-6 pb-10 pt-28 font-['Libre_Franklin'] xl:hidden ${NAV_BG}`}
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
                  className={({ isActive: routeActive }) =>
                    `border-b border-white/10 pb-4 text-2xl font-normal transition-colors ${
                      isActive(item.to, routeActive)
                        ? "text-white"
                        : "text-white/70"
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
                className="font-normal text-white transition-colors hover:text-white/70"
              >
                EN
              </button>
              <span className="text-white/50">|</span>
              <button
                onClick={() => switchMobileLanguage("de")}
                className="font-normal text-white transition-colors hover:text-white/70"
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
