import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  position, 
  company, 
  image,
  delay = 0 
}) => {
  return (
    <motion.div 
      className="card p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="mb-6">
        {/* Quote icon */}
        <svg className="w-10 h-10 text-accent opacity-20 mb-2" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8v8H6v6h8V8h-4zm14 0v8h-4v6h8V8h-4z"></path>
        </svg>
        <p className="text-gray-600 italic">{quote}</p>
      </div>
      
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-semibold text-primary">{name}</h4>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;