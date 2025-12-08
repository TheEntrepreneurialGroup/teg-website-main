import React from "react";
import Button from "./Button";

interface NewHeroTwoButtonsProps {
    title: string;
    subtitle?: string; // This is the new since in the old HeroSectionTwoButtonsProps
    bgImage: string;
    buttonText1: string;
    buttonText2: string;
    buttonLink1: string;
    buttonLink2: string;
}

const NewHeroTwoButtons: React.FC<NewHeroTwoButtonsProps> = ({
    title,
    subtitle,
    bgImage,
    buttonText1,
    buttonText2,
    buttonLink1,
    buttonLink2,
}) => {
    return (
        <section className="relative w-full aspect-[16/9] md:h-[75vh] md:aspect-auto overflow-hidden mb-12">
            <img
                src={bgImage}
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-[#091c3a]/70 z-10"></div> // Darken the bg
            <div className="relative z-20 h-full w-full flex flex-col justify-center items-center p-8">
                <div className="flex flex-col items-center">
                    <h1 className="text-center text-gray-100 mb-2">{title}</h1>
                    <h3 className="text-center text-gray-100">{subtitle}</h3>
                </div>
                <div className="mt-28 flex justify-center">
                    <Button className="mr-28" href={buttonLink1}>{buttonText1}</Button>
                    <Button href={buttonLink2}>{buttonText2}</Button>
                </div>
            </div>

        </section>
    );
}

export default NewHeroTwoButtons;