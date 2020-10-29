import React from 'react';
import classNames from 'classnames';
import HeaderStepMessage from "./HeaderStepMessage";
import HeaderStepIcon from "./HeaderStepIcon";
import HeaderStepTitle from "./HeaderStepTitle";
import {StepProps} from "./types";

interface HeaderStepProps extends StepProps {
    isActive: boolean,
    isVisited: boolean,
    onClick: () => void,
}

const HeaderStep: React.FC<HeaderStepProps> = ({
                                                    text,
                                                    icon,
                                                    message,
                                                    isActive,
                                                    isVisited,
                                                    onClick}) => {

    const stepClassName = classNames('wizard-step',
        {'active': isActive},
        {'visited': isVisited}
    );

    return (
        <div
            onClick={onClick}
            className={stepClassName}>
            <HeaderStepIcon icon={icon} isVisited={isVisited} isActive={isActive}>
            </HeaderStepIcon>
            <HeaderStepTitle title={text}>
            </HeaderStepTitle>
            <HeaderStepMessage message={message}>
            </HeaderStepMessage>
        </div>
    )
}

export default HeaderStep;
