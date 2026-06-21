import React from "react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

/**
 * OptimizedImage — serves WebP with original-format fallback.
 *
 * `src` should point to the original image (e.g. .jpg, .png).
 * The component automatically derives the WebP path by swapping the extension
 * and renders a <picture> element so the browser only downloads the best format.
 * If the WebP fails to load, the <img> tag provides the original as fallback.
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  ...rest
}) => {
  // Derive WebP path: /about/formats/industry-panel.png → /about/formats/industry-panel.webp
  const webpSrc = src.replace(/\.[^.]+$/, ".webp");

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        {...rest}
        onError={(e) => {
          // If the original also fails, hide broken icon
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    </picture>
  );
};

export default OptimizedImage;
