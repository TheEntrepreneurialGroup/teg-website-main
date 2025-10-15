import React from "react";

interface CardTextProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  body?: string;
}

const CardTextMobile: React.FC<CardTextProps> = ({
  image,
  imageAlt,
  title,
  subtitle,
  body,
}) => (
  <section className="flex flex-col w-full items-center bg-white shadow-sm px-2 py-8 gap-2">
    <div className="flex flex-row gap-2">
      <img
        src={image}
        alt={imageAlt}
        className="w-1/2 object-cover h-[250px]"
      />

      <div className="w-1/2">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 m-0 mb-2 text-lg">{subtitle}</p>
      </div>
    </div>
    {body && <p className="text-gray-700 m-0 text-lg">{body}</p>}
  </section>
);

export default CardTextMobile;
