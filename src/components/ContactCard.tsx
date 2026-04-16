import React from "react";

import { Mail, Linkedin, Quote } from "lucide-react";
import { trackOutboundClick } from "../utils/analytics";

interface ContactCardProps {
  name: string;
  title: string;
  imageUrl: string;
  email: string;
  linkedinUrl: string;
  greeting?: string;
  variant?: "default" | "quote";
}

const ContactCard: React.FC<ContactCardProps> = ({
  name,
  title,
  imageUrl,
  email,
  linkedinUrl,
  greeting,
  variant = "default",
}) => {
  return (
    <div className="bg-white  shadow-lg overflow-hidden w-full max-w-4xl">
      <div className="flex flex-col md:flex-row items-center p-2 md:p-6 pb-2 gap-2 sm:gap-4">
        {/* Image Section */}
        <div className="w-full md:w-64 h-[500px] md:h-80 lg:h-96 overflow-hidden border-1 border-border  flex-shrink-0">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 mt-4 md:mt-0 md:text-left">
          {variant === "quote" && greeting && (
            <div className="text-muted-foreground">
              <Quote size={15} className="" />
              <h2 className="text-xl font-medium my-1">{greeting}</h2>
              <div className="flex justify-end">
                <Quote size={15} />
              </div>
            </div>
          )}
          <p className="text-muted-foreground text-2xl md:text-2xl font-medium mt-3 mb-1">
            {name}
          </p>
          <p className="text-muted-foreground text-base md:text-lg font-normal mt-0 mb-2">
            {title}
          </p>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-border"></div>

      {/* Contact Information */}
      <div className="flex flex-row justify-evenly divide-x divide-gray-200 m-4 gap-2">
        <div className="flex items-center text-muted-foreground justify-center">
          <a
            href={linkedinUrl}
            className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackOutboundClick(linkedinUrl, "ContactCard: " + name)
            }
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="flex items-center text-muted-foreground justify-center">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-300"
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
