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
        <div className="flex justify-center items-center min-h-full mx-8">
            <div className="flex items-center w-full md:w-[30vw] overflow-hidden bg-secondary-light p-8 rounded-lg">
                <div className="flex flex-shrink flex-col">
                    <div className="w-full text-center text-primary text-4xl mb-2"><b>{title}</b></div>
                    <div className="w-full text-justify">{text}</div>
                </div>
            </div>
        </div>
    );
}

export default TextBox;