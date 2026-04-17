import React from "react";
import { Mail, Linkedin } from "lucide-react";
import { trackOutboundClick } from "../utils/analytics";

interface ContactCardProps {
  name: string;
  title: string;
  imageUrl: string;
  email: string;
  linkedinUrl: string;
  heading?: string;
  greeting?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  name,
  title,
  imageUrl,
  email,
  linkedinUrl,
  heading,
  greeting,
}) => {
  return (
    <div
      id="contact"
      className="w-full flex flex-col lg:flex-row lg:items-stretch"
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full lg:w-1/2 aspect-[4/3] object-cover object-top order-1"
        loading="lazy"
      />

      <div className="order-2 flex-1 min-w-0 px-4 lg:px-8 xl:px-24 2xl:px-44 bg-primary text-white flex flex-col justify-center py-8 lg:py-0 lg:aspect-[4/3]">
        {heading && (
          <h2 className="font-semibold text-white mb-8 lg:mb-16 text-3xl">
            {heading}
          </h2>
        )}

        {greeting && (
          <div className="border-l-[1.5px] border-accent pl-4">
            <p className="text-xl italic text-white/80 leading-relaxed">
              &ldquo;{greeting}&rdquo;
            </p>
            <p className="text-2xl font-semibold mt-3">{name}</p>
            <p className="text-lg text-white/70 mt-1">{title}</p>
          </div>
        )}

        {!greeting && (
          <div>
            <p className="text-2xl font-semibold">{name}</p>
            <p className="text-lg text-white/70 mt-1">{title}</p>
          </div>
        )}

        <div className="flex items-center gap-6 mt-6">
          <a
            href={linkedinUrl}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackOutboundClick(linkedinUrl, "ContactCard: " + name)
            }
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300"
            onClick={() =>
              trackOutboundClick(`mailto:${email}`, "ContactCard: " + name)
            }
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
