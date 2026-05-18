import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { trackOutboundClick } from "../utils/analytics";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white border-t border-primary-dark">
      <div className="container-custom py-20 md:py-28">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="order-3 md:order-1 text-center md:text-left">
            <p className="text-secondary-light text-sm tracking-wide">
              &copy; {new Date().getFullYear()} The Entrepreneurial Group. All
              rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-10 order-1 md:order-2">
            <a
              href="https://www.linkedin.com/company/teg-ev/posts/?feedView=all"
              className="text-white hover:text-secondary-light transform hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
              onClick={() =>
                trackOutboundClick(
                  "https://www.linkedin.com/company/teg-ev/posts/?feedView=all",
                  "Footer",
                )
              }
            >
              <Linkedin size={32} strokeWidth={1.5} />
            </a>

            <a
              href="https://www.facebook.com/TheEntrepreneurialGroup"
              className="text-white hover:text-secondary-light transform hover:-translate-y-1 transition-all duration-300"
              aria-label="Facebook"
              onClick={() =>
                trackOutboundClick(
                  "https://www.facebook.com/TheEntrepreneurialGroup",
                  "Footer",
                )
              }
            >
              <Facebook size={32} strokeWidth={1.5} />
            </a>

            <a
              href="https://www.instagram.com/tegmunich/"
              className="text-white hover:text-secondary-light transform hover:-translate-y-1 transition-all duration-300"
              aria-label="Instagram"
              onClick={() =>
                trackOutboundClick(
                  "https://www.instagram.com/tegmunich/",
                  "Footer",
                )
              }
            >
              <Instagram size={32} strokeWidth={1.5} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 order-2 md:order-3">
            <a
              href="mailto:info+website@teg-ev.de"
              className="text-secondary-light text-sm font-bold hover:text-white transition-colors duration-300 uppercase tracking-[0.2em]"
              onClick={() =>
                trackOutboundClick("mailto:info+website@teg-ev.de", "Footer")
              }
            >
              Contact
            </a>
            <Link
              to="/imprint"
              className="text-secondary-light text-sm font-bold hover:text-white transition-colors duration-300 uppercase tracking-[0.2em]"
            >
              Imprint
            </Link>
            <Link
              to="/privacy-policy"
              className="text-secondary-light text-sm font-bold hover:text-white transition-colors duration-300 uppercase tracking-[0.2em]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 text-center">
          <p className="text-xs text-white/30 uppercase tracking-[0.4em] font-medium">
            Establishing Entrepreneurs since 1986
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
