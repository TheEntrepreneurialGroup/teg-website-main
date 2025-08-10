import React from 'react';
import { motion } from 'framer-motion';

interface ImageCardProps {
    imageUrl: string;
    altText: string;
    caption?: string;
    delay?: number;
    className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, altText, caption, delay = 0, className }) => {
    const combinedClassName = `relative overflow-hidden card ${className || ''}`;

    return (
        <motion.div 
            className={combinedClassName}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
        >
           
               <img 
                    src={imageUrl} 
                    alt={altText} 
                    className="w-full h-auto object-cover" 
                />
        
        {caption && (
                 <div className="mt-2 px-4">
                    <p className="text-lg leading-6 font-bold">{caption}</p>
                 </div>
            )}
        </motion.div>
    );
};

export default ImageCard;
