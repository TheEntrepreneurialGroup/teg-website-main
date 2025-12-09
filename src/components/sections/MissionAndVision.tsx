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
        <div className="flex flex-shrink flex-col md:flex-row justify-center bg-primary p-8 md:p-16 mb-16 gap-8">
            <TextBox
                title={missionTitle}
                text={missionText}
            />
            <TextBox
                title={visionTitle}
                text={visionText}
            />
        </div>
    );
}

export default MissionAndVision;