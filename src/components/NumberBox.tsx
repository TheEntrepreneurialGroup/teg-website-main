import React from "react";

interface NumberBoxProps {
    number: string;
    text: string;
}

const NumberBox: React.FC<NumberBoxProps> = ({
    number,
    text
}) => {
    return (
        <div className="bg-primary-light flex flex-col justify-around items-center w-44 h-44 md:w-64 md:h-64 p-4 md:px-12 rounded-2xl shadow-[0px_0px_5px_rgba(0,0,0,0.2)]">
            <div className="text-gray-100 text-5xl font-medium flex h-1/2 items-center justify-center text-center">{number}</div>
            <div className="text-gray-100 text-sm md:text-lg flex h-1/2 items-center justify-center text-center">{text}</div>
        </div>
    );
}

export default NumberBox;