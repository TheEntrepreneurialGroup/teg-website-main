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
                 <div className="absolute bottom-0 left-0 right-0 p-4 pb-0 bg-gradient-to-t from-black/80 via-black/70 via-70% to-black/0">
                    <p className="text-lg leading-6 text-white font-bold drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">{caption}</p>
                 </div>
            )}
        </motion.div>
    );
};

export default ImageCard;
