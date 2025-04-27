import React from 'react';
import { motion } from 'framer-motion';

interface ImageCardProps {
    imageUrl: string;
    altText: string;
    caption?: string;
    delay?: number;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, altText, caption, delay = 0 }) => {
    return (
        <motion.div 
            className="card p-0 overflow-hidden rounded-2xl shadow-md flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
        >
            <div className="flex-shrink-0">
                <img 
                    src={imageUrl} 
                    alt={altText} 
                    className="w-full max-h-48 object-contain" 
                />
            </div>
            <div className="flex-grow p-4">
                {caption && (
                    <p className="text-gray-700">{caption}</p>
                )}
            </div>
        </motion.div>
    );
};

export default ImageCard;
