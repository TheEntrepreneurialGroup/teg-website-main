import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

import { trackButtonClick } from "../utils/analytics";
import { useIntl } from "react-intl";

interface NavbarProps {
  scrolled: boolean;
  switchLanguage: (lang: "en" | "de") => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, switchLanguage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const intl = useIntl();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary-dark text-xl ${
        scrolled ? "shadow-md" : "md:py-2"
      }`}
    >
      <div className="container-custom flex justify-between items-center w-full p-2">
        <Link to="/" className="flex items-center p-0">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
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
            {intl.formatMessage({
              id: "navbar.about",
            })}
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
            {intl.formatMessage({
              id: "navbar.forCompanies",
            })}
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
            {intl.formatMessage({
              id: "navbar.forStudents",
            })}
          </NavLink>
          {/* NEU: Events Tab Desktop */}
          <NavLink
            to="/events"
            className={({ isActive }) =>
              `font-normal relative ${
                scrolled || isActive ? "text-white" : "text-white"
              } hover:text-primary-light transition-colors duration-300 ${
                isActive
                  ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white"
                  : ""
              }`
            }
            onClick={() => trackButtonClick("Events", "Navbar")}
          >
            {intl.formatMessage({
              id: "navbar.events",
            })}
          </NavLink>
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
          <div className="fixed inset-0 bg-white flex flex-col items-start justify-center z-40 p-6">
            <nav className="flex flex-col items-start space-y-6">
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
                {intl.formatMessage({
                  id: "navbar.about",
                })}
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
                {intl.formatMessage({
                  id: "navbar.forCompanies",
                })}
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
                {intl.formatMessage({
                  id: "navbar.forStudents",
                })}
              </NavLink>
              {/* NEU: Events Tab Mobile */}
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `text-xl font-normal ${
                    isActive ? "text-primary" : "text-foreground"
                  } hover:text-primary transition-colors duration-300`
                }
                onClick={() => {
                  setMobileMenuOpen(false);
                  trackButtonClick("Events", "Navbar");
                }}
              >
                {intl.formatMessage({
                  id: "navbar.events",
                })}
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
