import React from "react";

interface TextBoxProps {
  title: string;
  text: string;
}

const TextBox: React.FC<TextBoxProps> = ({ title, text }) => {
  return (
    <div className="flex-1 bg-white p-8 md:p-10 shadow-lg">
      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center">
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed text-center md:text-lg">
        {text}
      </p>
    </div>
  );
};

export default TextBox;
