import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

import { trackButtonClick } from "../utils/analytics";
import { useIntl } from "react-intl";

interface NavbarProps {
  scrolled: boolean;
  switchLanguage: (lang: "en" | "de") => void;
  isAboutPage?: boolean;
  hideNavItems?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, switchLanguage, isAboutPage, hideNavItems }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const intl = useIntl();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-xl transition-[background-color,backdrop-filter,box-shadow,padding] duration-500 ease-out ${
        scrolled
          ? "bg-primary-dark shadow-[0_8px_24px_-12px_rgba(0,0,0,0.55)] backdrop-blur-md"
          : "bg-transparent backdrop-blur-0 md:py-2"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Soft gradient veil when transparent — keeps logo + nav legible over imagery */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-b from-black/45 via-black/15 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      />
      <div className="relative">
      <div className="container-custom flex justify-between items-center w-full p-2">
        <Link to="/" className="flex items-center p-0">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex items-center space-x-8 transition-opacity duration-500 ${
            hideNavItems ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {isAboutPage ? (
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-normal relative ${
                    scrolled || isActive ? "text-white" : "text-white"
                  } hover:text-primary-light transition-colors duration-300 ${
                    isActive
                      ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white"
                      : ""
                  }`
                }
                onClick={() => trackButtonClick("About Us", "Navbar")}
                end
              >
                {intl.formatMessage({ id: "navbar.aboutPage.about" })}
              </NavLink>
              <NavLink
                to="/for-companies"
                className={({ isActive }) =>
                  `font-normal relative ${
                    scrolled || isActive ? "text-white" : "text-white"
                  } hover:text-primary-light transition-colors duration-300 ${
                    isActive
                      ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white"
                      : ""
                  }`
                }
                onClick={() => trackButtonClick("TEG for Companies", "Navbar")}
              >
                {intl.formatMessage({ id: "navbar.aboutPage.executives" })}
              </NavLink>
              <NavLink
                to="/for-students"
                className={({ isActive }) =>
                  `font-normal relative ${
                    scrolled || isActive ? "text-white" : "text-white"
                  } hover:text-primary-light transition-colors duration-300 ${
                    isActive
                      ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white"
                      : ""
                  }`
                }
                onClick={() => trackButtonClick("TEG for Students", "Navbar")}
              >
                {intl.formatMessage({ id: "navbar.aboutPage.students" })}
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-normal relative ${
                    scrolled || isActive ? "text-white" : "text-white"
                  } hover:text-primary-light transition-colors duration-300 ${
                    isActive
                      ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white"
                      : ""
                  }`
                }
                onClick={() => trackButtonClick("About Us", "Navbar")}
                end
              >
                {intl.formatMessage({ id: "navbar.about" })}
              </NavLink>
              <NavLink
                to="/for-companies"
                className={({ isActive }) =>
                  `font-normal relative ${
                    scrolled || isActive ? "text-white" : "text-white"
                  } hover:text-primary-light transition-colors duration-300 ${
                    isActive
                      ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white"
                      : ""
                  }`
                }
                onClick={() => trackButtonClick("TEG for Companies", "Navbar")}
              >
                {intl.formatMessage({ id: "navbar.forCompanies" })}
              </NavLink>
              <NavLink
                to="/for-students"
                className={({ isActive }) =>
                  `font-normal relative ${
                    scrolled || isActive ? "text-white" : "text-white"
                  } hover:text-primary-light transition-colors duration-300 ${
                    isActive
                      ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white"
                      : ""
                  }`
                }
                onClick={() => trackButtonClick("TEG for Students", "Navbar")}
              >
                {intl.formatMessage({ id: "navbar.forStudents" })}
              </NavLink>
            </>
          )}
        </nav>

        {/* Language Switcher */}
        <div className="hidden md:flex items-center space-x-4 mx-4">
          <button
            onClick={() => switchLanguage("en")}
            className="font-normal text-white hover:text-primary-light transition-colors duration-300"
          >
            EN
          </button>
          <span className="text-white">|</span>
          <button
            onClick={() => switchLanguage("de")}
            className="font-normal text-white hover:text-primary-light transition-colors duration-300"
          >
            DE
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden h-full aspect-square ml-auto ${
            mobileMenuOpen ? "text-foreground" : "text-white"
          } z-50`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-white flex flex-col items-start justify-center z-40 p-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-start space-y-6">
              {isAboutPage ? (
                <>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-xl font-normal ${
                        isActive ? "text-primary" : "text-foreground"
                      } hover:text-primary transition-colors duration-300`
                    }
                    onClick={() => {
                      setMobileMenuOpen(false);
                      trackButtonClick("About us", "Navbar");
                    }}
                    end
                  >
                    {intl.formatMessage({ id: "navbar.aboutPage.about" })}
                  </NavLink>
                  <NavLink
                    to="/for-companies"
                    className={({ isActive }) =>
                      `text-xl font-normal ${
                        isActive ? "text-primary" : "text-foreground"
                      } hover:text-primary transition-colors duration-300`
                    }
                    onClick={() => {
                      setMobileMenuOpen(false);
                      trackButtonClick("TEG for Companies", "Navbar");
                    }}
                  >
                    {intl.formatMessage({ id: "navbar.aboutPage.executives" })}
                  </NavLink>
                  <NavLink
                    to="/for-students"
                    className={({ isActive }) =>
                      `text-xl font-normal ${
                        isActive ? "text-primary" : "text-foreground"
                      } hover:text-primary transition-colors duration-300`
                    }
                    onClick={() => {
                      setMobileMenuOpen(false);
                      trackButtonClick("TEG for Students", "Navbar");
                    }}
                  >
                    {intl.formatMessage({ id: "navbar.aboutPage.students" })}
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-xl font-normal ${
                        isActive ? "text-primary" : "text-foreground"
                      } hover:text-primary transition-colors duration-300`
                    }
                    onClick={() => {
                      setMobileMenuOpen(false);
                      trackButtonClick("About us", "Navbar");
                    }}
                    end
                  >
                    {intl.formatMessage({ id: "navbar.about" })}
                  </NavLink>
                  <NavLink
                    to="/for-companies"
                    className={({ isActive }) =>
                      `text-xl font-normal ${
                        isActive ? "text-primary" : "text-foreground"
                      } hover:text-primary transition-colors duration-300`
                    }
                    onClick={() => {
                      setMobileMenuOpen(false);
                      trackButtonClick("TEG for Companies", "Navbar");
                    }}
                  >
                    {intl.formatMessage({ id: "navbar.forCompanies" })}
                  </NavLink>
                  <NavLink
                    to="/for-students"
                    className={({ isActive }) =>
                      `text-xl font-normal ${
                        isActive ? "text-primary" : "text-foreground"
                      } hover:text-primary transition-colors duration-300`
                    }
                    onClick={() => {
                      setMobileMenuOpen(false);
                      trackButtonClick("TEG for Students", "Navbar");
                    }}
                  >
                    {intl.formatMessage({ id: "navbar.forStudents" })}
                  </NavLink>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
      </div>
    </header>
  );
};

export default Navbar;
