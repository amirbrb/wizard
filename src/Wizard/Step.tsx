import React from 'react';
import StepMessage from "./StepMessage";
import StepIcon from "./StepIcon";
import StepTitle from "./StepTitle";
import {StepProps} from "./types";

interface HeaderStepProps extends StepProps {
    isActive: boolean,
    isVisited: boolean,
    onClick: () => void,
}

const Step: React.FC<HeaderStepProps> = ({
                                                    text,
                                                    icon,
                                                    message,
                                                    isActive,
                                                    isVisited,
                                                    onClick}) => {
    return (
        <div
            onClick={onClick}
            className={[`wizard-step`, isActive ? 'active' : '', isVisited ? 'visited' : ''].filter(Boolean).join(' ')}>
            <StepIcon icon={icon} isVisited={isVisited} isActive={isActive}>
            </StepIcon>
            <StepTitle title={text}>
            </StepTitle>
            <StepMessage message={message}>
            </StepMessage>
        </div>
    )
}

export default Step;
