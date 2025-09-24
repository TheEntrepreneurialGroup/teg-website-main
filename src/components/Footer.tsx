import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { trackOutboundClick } from "../utils/analytics";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom pb-3">
        <div className="border-t border-gray-700 mt-6 pt-3 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-light text-sm">
            &copy; {new Date().getFullYear()} The Entrepreneurial Group. All
            rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/company/teg-ev/posts/?feedView=all"
              className="text-white hover:text-secondary-light transition-colors duration-300"
              aria-label="LinkedIn"
              onClick={() =>
                trackOutboundClick(
                  "https://www.linkedin.com/company/teg-ev/posts/?feedView=all",
                  "Footer",
                )
              }
            >
              <Linkedin size={20} />
            </a>
            {
              <a
                href="https://www.facebook.com/TheEntrepreneurialGroup"
                className="text-white hover:text-secondary-light transition-colors duration-300"
                aria-label="Facebook"
                onClick={() =>
                  trackOutboundClick(
                    "https://www.facebook.com/TheEntrepreneurialGroup",
                    "Footer",
                  )
                }
              >
                <Facebook size={20} />
              </a>
            }
            <a
              href="https://www.instagram.com/tegmunich/"
              className="text-white hover:text-secondary-light transition-colors duration-300"
              aria-label="Instagram"
              onClick={() =>
                trackOutboundClick(
                  "https://www.instagram.com/tegmunich/",
                  "Footer",
                )
              }
            >
              <Instagram size={20} />
            </a>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="mailto:info@teg-ev.de"
              className="text-secondary-light text-sm hover:text-white transition-colors duration-300"
              onClick={() =>
                trackOutboundClick("mailto:info@teg-ev.de", "Footer")
              }
            >
              Contact
            </a>
            <Link
              to="/imprint"
              className="text-secondary-light text-sm hover:text-white transition-colors duration-300"
            >
              Imprint
            </Link>
            <Link
              to="/privacy-policy"
              className="text-secondary-light text-sm hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
