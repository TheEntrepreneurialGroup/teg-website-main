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
<<<<<<< HEAD
        <div className="bg-primary-light flex flex-col justify-around items-center w-64 h-64 p-4 md:px-12 rounded-2xl">
            <div className="text-gray-100 text-5xl text-center">{number}</div>
            <div className="text-gray-100 text-center text-lg">{text}</div>
=======
        <div className="bg-primary-light w-60 h-60 flex-shrink-0 p-4 rounded-2xl">
            <div className="text-gray-100 flex h-1/2 items-center justify-center text-5xl font-medium text-center">{number}</div>
            <div className="text-gray-100 flex h-1/2 items-center justify-center text-center text-lg">{text}</div>
>>>>>>> 525a5e0 (TEG in Zahlen visially improved alignment and mobile ready)
        </div>
    );
}

export default NumberBox;