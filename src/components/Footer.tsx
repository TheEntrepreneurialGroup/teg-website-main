import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { useIntl } from "react-intl";
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

/** Black footer matching the navbar (--stage in editorial.css). */
const Footer: React.FC = () => {
  const isDe = useIntl().locale.startsWith("de");
  const linkClass =
    "text-[#a9adb3] transition-colors duration-200 hover:text-white";
  return (
    <footer className="border-t border-white/10 bg-[#17191c] font-['Libre_Franklin'] text-[#a9adb3] antialiased">
      <div className="mx-auto flex max-w-[1296px] flex-col gap-6 px-[max(16px,min(48px,4vw))] py-10 text-sm md:flex-row md:items-center md:justify-between">
        <p className="m-0">
          TEG e.V. · München · {isDe ? "seit 1986" : "since 1986"}
        </p>
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
        <nav className="flex gap-6" aria-label={isDe ? "Rechtliches" : "Legal"}>
          <a
            href={CONTACT_MAIL}
            className={linkClass}
            onClick={() => trackOutboundClick(CONTACT_MAIL, "Footer")}
          >
            {isDe ? "Kontakt" : "Contact"}
          </a>
          <Link to="/imprint" className={linkClass}>
            {isDe ? "Impressum" : "Imprint"}
          </Link>
          <Link to="/privacy-policy" className={linkClass}>
            {isDe ? "Datenschutz" : "Privacy Policy"}
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
