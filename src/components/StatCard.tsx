import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, delay = 0 }) => {
  return (
    <motion.div 
      className="text-center p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="text-4xl font-bold text-accent mb-2">{value}</h3>
      <p className="text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
};

export default StatCard;