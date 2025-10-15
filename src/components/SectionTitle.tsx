import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className={`mb-12`}>
      <h2
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-600 max-w-3xl text-lg">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
