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
        <div className="bg-primary-light flex flex-col justify-around items-center w-64 h-64 p-4 md:px-12 rounded-2xl">
            <div className="text-gray-100 text-5xl text-center">{number}</div>
            <div className="text-gray-100 text-center text-lg">{text}</div>
        </div>
    );
}

export default NumberBox;