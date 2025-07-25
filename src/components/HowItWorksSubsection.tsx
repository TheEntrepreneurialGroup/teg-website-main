import React from "react";

interface HowItWorksSubsectionProps {
  title: string;
  description: React.ReactNode;
  image?: string;
  imageOnLeft?: boolean;
}

const HowItWorksSubsection: React.FC<HowItWorksSubsectionProps> = ({ 
  title, 
  description, 
  image,
  imageOnLeft = false 
}) => {
  return (
    <div className={`flex flex-col ${imageOnLeft ? 'md:flex-row-reverse' : 'md:flex-row'} items-center md:items-stretch gap-8 md:gap-16 py-10 md:py-16`}>
      {/* Text Section */}
      <div className="flex-1 min-w-0 flex flex-col justify-center md:justify-start">
        <h5 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-left">
          {title}
        </h5>
        <div className="text-lg md:text-xl text-gray-700 leading-relaxed text-left space-y-4">
          {description}
        </div>
      </div>
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
        ) : (
            <span className="text-gray-400 text-base italic">Image coming soon</span>
        )}
      </div>
    </div>
  );
};

export default HowItWorksSubsection; 