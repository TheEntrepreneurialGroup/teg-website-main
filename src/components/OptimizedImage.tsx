import React from "react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

/**
 * OptimizedImage — renders a single optimized asset (WebP/AVIF).
 * Pass the final optimized path directly, e.g. `/about/formats/summit.webp`.
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  ...rest
}) => {
  return (
    <img
      src={src}
      alt={alt}
      {...rest}
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  );
};

export default OptimizedImage;
