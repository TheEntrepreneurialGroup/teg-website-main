import React from "react";
import Button from "./Button";
import { PrimaryButton } from "./blocks/PrimaryButton";
import { useNavigate } from 'react-router-dom'

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
    const navigate = useNavigate()
    return (
        <section className="relative w-full aspect-[16/9] md:h-[75vh] md:aspect-auto overflow-hidden">
            <img
                src={bgImage}
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-primary-dark/80 z-10"></div>
            <div className="relative z-20 h-full w-full flex flex-col justify-center items-center p-8">
                <div className="flex flex-col items-center">
                    <h1 className="text-center text-gray-100 mb-2">{title}</h1>
                    <h3 className="text-center text-gray-100">{subtitle}</h3>
                </div>
                <div className="mt-28 flex justify-center">
                    <div className="mr-8">
                        <PrimaryButton
                            label={buttonText1}
                            onClick={() => navigate(buttonLink1)}
                            size="lg"
                        />
                    </div>
                    <div>
                        <PrimaryButton
                            label={buttonText2}
                            onClick={() => navigate(buttonLink2)}
                            size="lg"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default NewHeroTwoButtons;