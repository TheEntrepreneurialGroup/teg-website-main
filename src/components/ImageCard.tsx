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
    const combinedClassName = `relative overflow-hidden ${className || ''}`;

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
                    className="w-full h-full object-cover" 
                />
        
        {caption && (
                 // Example: Overlay caption at the bottom
                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white text-sm">{caption}</p>
                 </div>
            )}
        </motion.div>
    );
};

export default ImageCard;
