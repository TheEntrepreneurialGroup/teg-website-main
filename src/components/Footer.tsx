import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { trackOutboundClick } from "../utils/analytics";

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/teg-ev/posts/?feedView=all",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "https://www.facebook.com/TheEntrepreneurialGroup",
    label: "Facebook",
    Icon: Facebook,
  },
  {
    href: "https://www.instagram.com/tegmunich/",
    label: "Instagram",
    Icon: Instagram,
  },
];

const CONTACT_MAIL = "mailto:info+website@teg-ev.de";

/** Black footer matching the editorial navbar on the events pages. */
const EditorialFooter: React.FC = () => {
  const linkClass =
    "text-[#a9adb3] transition-colors duration-200 hover:text-white";
  return (
    <footer className="bg-[#17191c] font-['Libre_Franklin'] text-[#a9adb3]">
      <div className="mx-auto flex max-w-[1296px] flex-col gap-6 px-[max(16px,min(48px,4vw))] py-10 text-sm md:flex-row md:items-center md:justify-between">
        <p className="m-0">TEG e.V. · München · seit 1986</p>
        <div className="flex items-center gap-6">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className={linkClass}
              onClick={() => trackOutboundClick(href, "Footer")}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <nav className="flex gap-6" aria-label="Rechtliches">
          <a
            href={CONTACT_MAIL}
            className={linkClass}
            onClick={() => trackOutboundClick(CONTACT_MAIL, "Footer")}
          >
            Kontakt
          </a>
          <Link to="/imprint" className={linkClass}>
            Impressum
          </Link>
          <Link to="/privacy-policy" className={linkClass}>
            Datenschutz
          </Link>
        </nav>
      </div>
    </footer>
  );
};

const Footer: React.FC<{ editorial?: boolean }> = ({ editorial }) => {
  if (editorial) return <EditorialFooter />;
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom pb-3">
        <div className="border-t border-primary-dark mt-6 pt-3 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-light text-sm">
            &copy; {new Date().getFullYear()} The Entrepreneurial Group. All
            rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                className="text-white hover:text-secondary-light transition-colors duration-300"
                aria-label={label}
                onClick={() => trackOutboundClick(href, "Footer")}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href={CONTACT_MAIL}
              className="text-secondary-light text-sm hover:text-white transition-colors duration-300"
              onClick={() => trackOutboundClick(CONTACT_MAIL, "Footer")}
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
