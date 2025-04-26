import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { motion } from 'framer-motion';

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
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo />
          <span className={`font-heading font-bold text-xl ml-2 ${scrolled ? 'text-primary' : 'text-primary'}`}>
            TEG
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `font-semibold ${scrolled || isActive ? 'text-primary' : 'text-primary'} hover:text-primary-light transition-colors duration-300`
            }
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/for-students" 
            className={({ isActive }) => 
              `font-semibold ${scrolled || isActive ? 'text-primary' : 'text-primary'} hover:text-primary-light transition-colors duration-300`
            }
          >
            For Students
          </NavLink>
          <NavLink 
            to="/for-companies" 
            className={({ isActive }) => 
              `font-semibold ${scrolled || isActive ? 'text-primary' : 'text-primary'} hover:text-primary-light transition-colors duration-300`
            }
          >
            For Companies
          </NavLink>
          <Link 
            to="/for-students#apply" 
            className="btn btn-primary"
          >
            Apply Now
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white flex flex-col items-center justify-center z-40"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center space-y-6">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-xl font-semibold ${isActive ? 'text-primary' : 'text-gray-800'} hover:text-primary transition-colors duration-300`
                }
                onClick={() => setMobileMenuOpen(false)}
                end
              >
                Home
              </NavLink>
              <NavLink 
                to="/for-students" 
                className={({ isActive }) => 
                  `text-xl font-semibold ${isActive ? 'text-primary' : 'text-gray-800'} hover:text-primary transition-colors duration-300`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                For Students
              </NavLink>
              <NavLink 
                to="/for-companies" 
                className={({ isActive }) => 
                  `text-xl font-semibold ${isActive ? 'text-primary' : 'text-gray-800'} hover:text-primary transition-colors duration-300`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                For Companies
              </NavLink>
              <Link 
                to="/for-students#apply" 
                className="btn btn-primary mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply Now
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;