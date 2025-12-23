import React from "react";
import TextBox from "../TextBox";

interface MissionAndVisionProps {
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
}

const MissionAndVision: React.FC<MissionAndVisionProps> = ({
    missionTitle,
    missionText,
    visionTitle,
    visionText,
}) => {
    return (
        <div className="bg-primary py-12 md:py-16 px-4 md:px-8 mb-8">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8">
                <TextBox
                    title={missionTitle}
                    text={missionText}
                />
                <TextBox
                    title={visionTitle}
                    text={visionText}
                />
            </div>
        </div>
    );
}

export default MissionAndVision;