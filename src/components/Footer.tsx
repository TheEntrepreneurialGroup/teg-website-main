import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-light text-sm">
            &copy; {new Date().getFullYear()} The Entrepreneurial Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/company/teg-ev/posts/?feedView=all" className="text-white hover:text-secondary-light transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              {/* <a href="https://facebook.com" className="text-white hover:text-secondary-light transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a> */}
              <a href="https://www.instagram.com/tegmunich/" className="text-white hover:text-secondary-light transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="mailto:info@teg-ev.de" className="text-secondary-light text-sm hover:text-white transition-colors duration-300">
              Contact
            </a>
            <Link to="/imprint" className="text-secondary-light text-sm hover:text-white transition-colors duration-300">
              Imprint
            </Link>
            <Link to="/privacy-policy" className="text-secondary-light text-sm hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;