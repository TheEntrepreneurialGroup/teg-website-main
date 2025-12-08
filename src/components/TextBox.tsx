import React from "react";

interface TextBoxProps {
    title: string;
    text: string;
}

const TextBox: React.FC<TextBoxProps> = ({
    title,
    text
}) => {
    return (
        <div className="w-[40vw] h-[40vh] overflow-hidden bg-secondary-light p-8 rounded-lg">
                <div className="flex justify-center text-primary text-4xl mb-2"><b>{title}</b></div>
                <div className="text-justify">{text}</div>
        </div>
    );
}

export default TextBox;