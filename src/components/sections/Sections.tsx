import React from "react";
import NewFeatureCard from "../NewFeatureCard";

interface SectionsProps {
    image1: string;
    imagePos1: "left" | "right";
    imageAlt1: string;
    tilte1: string;
    text1: string;
    button1Text: string;
    Link1: string;
    clickable1: boolean;

    image2: string;
    imagePos2: "left" | "right";
    imageAlt2: string;
    tilte2: string;
    text2: string;
    button2Text: string;
    Link2: string;
    clickable2: boolean;

    image3: string;
    imagePos3: "left" | "right";
    imageAlt3: string;
    tilte3: string;
    text3: string;
    button3Text: string;
    Link3: string;
    clickable3: boolean;
}

const Sections: React.FC<SectionsProps> = ({
    image1,
    imagePos1,
    imageAlt1,
    tilte1,
    text1,
    button1Text,
    Link1,
    clickable1,
    image2,
    imagePos2,
    imageAlt2,
    tilte2,
    text2,
    button2Text,
    Link2,
    clickable2,
    image3,
    imagePos3,
    imageAlt3,
    tilte3,
    text3,
    button3Text,
    Link3,
    clickable3
}) => {
    return (
        <div className="flex flex-col items-center">
            <NewFeatureCard
                title={tilte1}
                description={text1}
                buttonText={button1Text}
                imagePosition={imagePos1}
                imageAltText={imageAlt1}
                imageURL={image1}
                buttonLink={Link1}
                clickable={clickable1}
            />
            <NewFeatureCard
                title={tilte2}
                description={text2}
                buttonText={button2Text}
                imagePosition={imagePos2}
                imageAltText={imageAlt2}
                imageURL={image2}
                buttonLink={Link2}
                clickable={clickable2}
            />
            <NewFeatureCard
                title={tilte3}
                description={text3}
                buttonText={button3Text}
                imagePosition={imagePos3}
                imageAltText={imageAlt3}
                imageURL={image3}
                buttonLink={Link3}
                clickable={clickable3}
            />
        </div>
    );
}

export default Sections;