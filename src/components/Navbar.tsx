import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { motion } from "framer-motion";

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary-dark shadow-md py-1" : "bg-primary-dark py-2"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
            <NavLink
            to="/"
            className={({ isActive }) =>
              `font-semibold relative ${
              scrolled || isActive ? "text-white" : "text-white"
              } hover:text-primary-light transition-colors duration-300 ${
              isActive ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white" : ""
              }`
            }
            end
            >
            About Us
            </NavLink>
            <NavLink
            to="/for-companies"
            className={({ isActive }) =>
              `font-semibold relative ${
              scrolled || isActive ? "text-white" : "text-white"
              } hover:text-primary-light transition-colors duration-300 ${
              isActive ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white" : ""
              }`
            }
            >
            TEG for Companies
            </NavLink>
            <NavLink
            to="/for-students"
            className={({ isActive }) =>
              `font-semibold relative ${
              scrolled || isActive ? "text-white" : "text-white"
              } hover:text-primary-light transition-colors duration-300 ${
              isActive ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white" : ""
              }`
            }
            >
            TEG for Students
            </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${
            mobileMenuOpen ? "text-black" : "text-white"
          } z-50`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white flex flex-col items-start justify-center z-40 p-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-start space-y-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-xl font-semibold ${
                    isActive ? "text-primary" : "text-gray-800"
                  } hover:text-primary transition-colors duration-300`
                }
                onClick={() => setMobileMenuOpen(false)}
                end
              >
                About Us
              </NavLink>
              <NavLink
                to="/for-companies"
                className={({ isActive }) =>
                  `text-xl font-semibold ${
                    isActive ? "text-primary" : "text-gray-800"
                  } hover:text-primary transition-colors duration-300`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                TEG for Companies
              </NavLink>
              <NavLink
                to="/for-students"
                className={({ isActive }) =>
                  `text-xl font-semibold ${
                    isActive ? "text-primary" : "text-gray-800"
                  } hover:text-primary transition-colors duration-300`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                TEG for Students
              </NavLink>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
