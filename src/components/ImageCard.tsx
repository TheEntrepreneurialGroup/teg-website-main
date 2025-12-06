import React from "react";

interface ImageCardProps {
  imageUrl: string;
  altText: string;
  caption?: string;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  altText,
  caption,
  className,
}) => {
  const combinedClassName = `relative overflow-hidden card w-full${
    className || ""
  }`;

  return (
    <div className={combinedClassName}>
      <img
        src={imageUrl}
        alt={altText}
        className="w-full object-cover aspect-[948/695]"
      />

      {caption && (
        <div className="mt-2 px-4">
          <p className="text-lg leading-6 font-medium">{caption}</p>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
