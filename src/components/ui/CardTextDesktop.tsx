import React from "react";

interface CardTextProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  body?: string;
}

const CardTextDesktop: React.FC<CardTextProps> = ({
  image,
  imageAlt,
  title,
  subtitle,
  body,
}) => (
  <section className="flex flex-col  items-center">
    <div className="flex flex-row max-w-7xl items-start bg-white shadow-sm md:p-14 lg:p-29 gap-8">
      <div className="flex-shrink-0 w-1/2">
        <img
          src={image}
          alt={imageAlt}
          className="flex-shrink: 0 w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col w-1/2 my-1">
        <h2 className="font-bold text-2xl mb-2">{title}</h2>

        <p className="text-gray-700 m-0 mb-2 text-lg">{subtitle}</p>
        {body && <p className="text-gray-700 m-0 text-lg">{body}</p>}
      </div>
    </div>
  </section>
);

export default CardTextDesktop;
