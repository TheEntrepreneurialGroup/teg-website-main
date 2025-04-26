import React from 'react';
import { motion } from 'framer-motion';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'light' | 'dark';
}

const CallToAction: React.FC<CallToActionProps> = ({ 
  title, 
  description, 
  buttonText, 
  buttonLink,
  variant = 'dark'
}) => {
  const isLight = variant === 'light';
  
  return (
    <section className={`py-16 ${isLight ? 'bg-secondary-light' : 'bg-primary'}`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold mb-4 ${isLight ? 'text-primary' : 'text-white'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          
          <motion.p 
            className={`text-lg mb-8 ${isLight ? 'text-gray-600' : 'text-secondary-light'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href={buttonLink} 
              className={`btn ${isLight ? 'btn-primary' : 'btn-accent'}`}
            >
              {buttonText}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;