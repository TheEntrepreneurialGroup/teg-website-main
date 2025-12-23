import React from "react";

import { PrimaryButton } from "./blocks/PrimaryButton";
import { useNavigate } from 'react-router-dom'

interface NewHeroTwoButtonsProps {
    title: string;
    mobileTitle?: string;
    subtitle?: string; // This is the new since in the old HeroSectionTwoButtonsProps
    bgImage: string;
    buttonText1: string;
    buttonText2: string;
    buttonLink1: string;
    buttonLink2: string;
}

const NewHeroTwoButtons: React.FC<NewHeroTwoButtonsProps> = ({
    title,
    mobileTitle,
    subtitle,
    bgImage,
    buttonText1,
    buttonText2,
    buttonLink1,
    buttonLink2,
}) => {
    const navigate = useNavigate()
    return (
        <section className="relative w-full min-h-[60vh] md:h-[75vh] md:min-h-[600px] overflow-hidden">
            <img
                src={bgImage}
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-primary-dark/65 z-10"></div>
            <div className="absolute bottom-0 left-0 p-2 md:p-16 w-full">
                <div className="relative z-20 h-full w-full flex flex-col justify-center items-center md:justify-start md:items-start">
                    <div className="flex flex-col justify-start w-full">
                        <h1 className="hidden sm:block text-left text-gray-100 mb-2 w-full">{title}</h1>
                        <h1 className="block sm:hidden text-left text-gray-100 mb-2 w-full text-2xl">{mobileTitle}</h1>
                        <h3 className="text-left text-gray-100 font-normal w-full">{subtitle}</h3>
                    </div>
                    <div className="mt-4 md:mt-16 flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start w-full">
                        <div className="md:mr-8">
                            <PrimaryButton
                                label={buttonText1}
                                onClick={() => navigate(buttonLink1)}
                                size="lg"
                            />
                        </div>
                        <div className="mt-2 md:mt-0">
                            <PrimaryButton
                                label={buttonText2}
                                onClick={() => navigate(buttonLink2)}
                                size="lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default NewHeroTwoButtons;