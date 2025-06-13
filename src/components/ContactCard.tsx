import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Quote } from 'lucide-react';

interface ContactCardProps {
  name: string;
  title: string;
  imageUrl: string;
  email: string;
  linkedinUrl: string;
  greeting?: string;
  variant?: 'default' | 'quote';
  delay?: number;
}

const ContactCard: React.FC<ContactCardProps> = ({
  name,
  title,
  imageUrl,
  email,
  linkedinUrl,
  greeting,
  variant = 'default',
  delay = 0
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex flex-col md:flex-row items-center p-6 gap-4">
        {/* Image Section */}
        <div className="w-full md:w-64 h-84 overflow-hidden border-2 border-gray-200 rounded-lg flex-shrink-0">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 mt-4 md:mt-0 md:text-left">
          {variant === 'quote' && greeting && (
            <div className="text-gray-700">
              <Quote size={20} className="block mb-2" />
              <h2 className="text-3xl md:text-4xl font-bold">{greeting}</h2>
              <div className="flex justify-end mt-2">
                <Quote size={20} />
              </div>
            </div>
          )}
          <p className="text-gray-700 text-xl md:text-2xl font-medium mt-4">
            {name}
          </p>
          <p className="text-gray-700 text-xl md:text-2xl font-medium">
            {title}
          </p>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-200"></div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-200">
        <div className="p-4 flex items-center gap-2 text-gray-700 justify-center">
          <a
            href={linkedinUrl}
            className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="p-4 flex items-center gap-2 text-gray-700 justify-center">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-300"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard; 