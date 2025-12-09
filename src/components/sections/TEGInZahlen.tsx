import React from "react";
import NumberBox from "../NumberBox";

interface TEGInZahlenProps {
    title: string;
    number1: string;
    text1: string;
    number2: string;
    text2: string;
    number3: string;
    text3: string;
    number4: string;
    text4: string;
}

const TEGInZahlen: React.FC<TEGInZahlenProps> = ({
    title,
    number1,
    text1,
    number2,
    text2,
    number3,
    text3,
    number4,
    text4
}) => {
    return (
        <div className="p-8 mb-12">
            <h1 className="mb-16">{title}</h1>
<<<<<<< HEAD
            <div className="flex flex-wrap justify-center gap-8">
=======
            <div className="w-full flex flex-wrap justify-center gap-4">
>>>>>>> 525a5e0 (TEG in Zahlen visially improved alignment and mobile ready)
                <NumberBox number={number1} text={text1} />
                <NumberBox number={number2} text={text2} />
                <NumberBox number={number3} text={text3} />
                <NumberBox number={number4} text={text4} />
            </div>
        </div>
    );
}

export default TEGInZahlen;