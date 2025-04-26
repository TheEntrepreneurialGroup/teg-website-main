import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Linkedin, Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Logo />
              <span className="font-heading font-bold text-xl ml-2 text-white">
                TEG
              </span>
            </div>
            <p className="text-secondary-light text-sm">
              The Entrepreneurial Group - Forging Tomorrow's Executives Since 1984
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://linkedin.com" className="text-white hover:text-secondary-light transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com" className="text-white hover:text-secondary-light transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-secondary-light transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-white font-heading text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-light hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/for-students" className="text-secondary-light hover:text-white transition-colors duration-300">
                  For Students
                </Link>
              </li>
              <li>
                <Link to="/for-companies" className="text-secondary-light hover:text-white transition-colors duration-300">
                  For Companies
                </Link>
              </li>
              <li>
                <Link to="/for-students#apply" className="text-secondary-light hover:text-white transition-colors duration-300">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-white font-heading text-lg mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/for-students#leadership" className="text-secondary-light hover:text-white transition-colors duration-300">
                  Leadership Program
                </Link>
              </li>
              <li>
                <Link to="/for-students#mentorship" className="text-secondary-light hover:text-white transition-colors duration-300">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link to="/for-companies#partnerships" className="text-secondary-light hover:text-white transition-colors duration-300">
                  Corporate Partnerships
                </Link>
              </li>
              <li>
                <Link to="/for-companies#events" className="text-secondary-light hover:text-white transition-colors duration-300">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-white font-heading text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-secondary-light">contact@teg-group.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-secondary-light">+49 (0) 123 456 789</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-light text-sm">
            &copy; {new Date().getFullYear()} The Entrepreneurial Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-secondary-light text-sm hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-secondary-light text-sm hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;