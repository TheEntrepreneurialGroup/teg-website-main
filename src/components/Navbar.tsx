import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIntl } from "react-intl";
import { trackButtonClick } from "../utils/analytics";
import { getBasePath, localizePath, usePageLang } from "../i18n/pageLang";

interface NavbarProps {
  switchLanguage: (lang: "en" | "de") => void;
}

/** Same black as the editorial pages (--stage in editorial.css). */
const NAV_BG = "bg-[#17191c]";

const Navbar: React.FC<NavbarProps> = ({ switchLanguage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const intl = useIntl();
  const location = useLocation();

  // The events overview and the conference pages share the conference name
  // and the "Konferenzen & Events" menu entry.
  const pageLang = usePageLang();
  const basePath = getBasePath(location.pathname);
  const isConferencePage = ["/events", "/conferences"].some((prefix) =>
    basePath.startsWith(prefix),
  );

  const allNavItems = [
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
      studentFacing: true,
    },
  ];
  // Conference tickets are for executives only, so the student offer stays
  // off the conference pages' menu; every other page still lists it.
  const navItems = allNavItems.filter(
    (item) => !(isConferencePage && item.studentFacing),
  );
  const activeLanguage = intl.locale.startsWith("en") ? "en" : "de";

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

  const isActive = (to: string, routeActive: boolean) =>
    routeActive || (to === "/events" && isConferencePage);

  const switchMobileLanguage = (language: "en" | "de") => {
    switchLanguage(language);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] border-b border-white/10 font-['Libre_Franklin'] antialiased ${NAV_BG}`}
      >
        {/* Same column as the editorial pages (.ev .wrap), so the logo and
            the language switch line up with the content edges. */}
        <div className="relative mx-auto flex h-[var(--site-nav-h)] w-full max-w-[1296px] items-center justify-between px-[max(16px,min(48px,4vw))]">
          <Link
            to={localizePath("/", pageLang)}
            className="relative z-10 flex items-center"
            aria-label={pageLang === "en" ? "TEG home" : "TEG Startseite"}
          >
            <span className="flex items-center gap-3 text-[15px] leading-tight text-white">
              <img
                src="/events/teg-mark.webp"
                alt=""
                className="h-8 w-8"
                width={32}
                height={32}
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

          <nav className="hidden h-full items-center gap-9 xl:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={localizePath(item.to, pageLang)}
                end={item.end}
                className={({ isActive: routeActive }) =>
                  `relative flex h-full items-center whitespace-nowrap text-[15px] font-normal tracking-[0.01em] transition-colors duration-200 hover:text-white ${
                    isActive(item.to, routeActive)
                      ? "text-white after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white"
                      : "text-white/70"
                  }`
                }
                onClick={() => trackButtonClick(item.trackingLabel, "Navbar")}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 text-[13px] tracking-[0.04em] xl:flex">
            {(["de", "en"] as const).map((language, index) => (
              <React.Fragment key={language}>
                {index > 0 && <span className="text-white/30">/</span>}
                <button
                  onClick={() => switchLanguage(language)}
                  aria-pressed={activeLanguage === language}
                  className={`font-normal transition-colors duration-200 hover:text-white ${
                    activeLanguage === language ? "text-white" : "text-white/50"
                  }`}
                >
                  {language.toUpperCase()}
                </button>
              </React.Fragment>
            ))}
          </div>

          <button
            className="relative z-[70] -mr-2.5 ml-auto grid h-11 w-11 place-items-center text-white xl:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={
              pageLang === "en"
                ? mobileMenuOpen
                  ? "Close menu"
                  : "Open navigation"
                : mobileMenuOpen
                  ? "Menü schließen"
                  : "Navigation öffnen"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <X size={22} strokeWidth={1.5} />
            ) : (
              <Menu size={22} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            className={`fixed inset-0 z-50 flex min-h-dvh flex-col px-4 pb-10 pt-24 font-['Libre_Franklin'] xl:hidden ${NAV_BG}`}
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
                  to={localizePath(item.to, pageLang)}
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

            <div className="flex items-center gap-3 border-t border-white/10 pt-6 text-[15px] tracking-[0.04em]">
              {(["de", "en"] as const).map((language, index) => (
                <React.Fragment key={language}>
                  {index > 0 && <span className="text-white/30">/</span>}
                  <button
                    onClick={() => switchMobileLanguage(language)}
                    aria-pressed={activeLanguage === language}
                    className={`font-normal transition-colors hover:text-white ${
                      activeLanguage === language
                        ? "text-white"
                        : "text-white/50"
                    }`}
                  >
                    {language.toUpperCase()}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
