import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageCardProps {
  imageUrl: string;
  altText: string;
  caption?: string;
  delay?: number;
  className?: string;
  fullscreenOnExpand?: boolean;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  altText,
  caption,
  delay = 0,
  className,
  fullscreenOnExpand = true,
}) => {
  const [expanded, setExpanded] = useState(false);
  const combinedClassName = `relative overflow-hidden cursor-pointer w-full h-64 ${
    className || ""
  }`;

  return (
    <>
      {/* Card view */}
      <motion.div
        className={combinedClassName}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        onClick={() => setExpanded(true)}
      >
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover"
        />
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-white font-bold drop-shadow-[0_0_3px_rgba(0,0,0,0.8)]">
              {caption}
            </p>
          </div>
        )}
      </motion.div>
      {/* Expanded modal view */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpanded(false)}
          >
            <motion.img
              src={imageUrl}
              alt={altText}
              className={
                fullscreenOnExpand
                  ? "w-full h-full max-w-5xl max-h-[90vh] object-contain rounded-lg shadow-lg"
                  : "max-w-3xl max-h-[80vh] object-contain rounded-lg shadow-lg"
              }
              style={fullscreenOnExpand ? undefined : undefined}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            />
            {caption && (
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/70 px-6 py-2 rounded text-white text-lg">
                {caption}
              </div>
            )}
            <button
              className="absolute top-6 right-8 text-white text-3xl font-bold"
              onClick={() => setExpanded(false)}
              aria-label="Close"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageCard;
