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
        <>
            {/* Mobile: Stacked layout - image above, content below (like ForStudents) */}
            <section className="md:hidden flex flex-col">
                <img
                    src={bgImage}
                    alt="Hero"
                    className="w-full h-auto"
                />
                <div className="px-4 py-6 bg-white">
                    <h1 className="text-primary font-bold text-2xl mb-2">{mobileTitle}</h1>
                    <p className="text-gray-700 text-base mb-6">{subtitle}</p>
                    <div className="flex flex-col gap-3">
                        <PrimaryButton
                            label={buttonText1}
                            onClick={() => navigate(buttonLink1)}
                            size="lg"
                        />
                        <PrimaryButton
                            label={buttonText2}
                            onClick={() => navigate(buttonLink2)}
                            size="lg"
                        />
                    </div>
                </div>
            </section>

            {/* Desktop: Overlaid layout */}
            <section className="hidden md:block relative w-full h-[75vh] min-h-[600px] overflow-hidden">
                <img
                    src={bgImage}
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover object-center z-0"
                />
                <div className="absolute inset-0 bg-primary-dark/65 z-10"></div>
                <div className="absolute bottom-0 left-0 p-16 w-full">
                    <div className="relative z-20 h-full w-full flex flex-col justify-start items-start">
                        <div className="flex flex-col justify-start w-full">
                            <h1 className="text-left text-gray-100 mb-2 w-full">{title}</h1>
                            <h3 className="text-left text-gray-100 font-normal w-full">{subtitle}</h3>
                        </div>
                        <div className="mt-16 flex flex-row justify-start items-start w-full">
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
                </div>
            </section>
        </>
    );
}

export default NewHeroTwoButtons;