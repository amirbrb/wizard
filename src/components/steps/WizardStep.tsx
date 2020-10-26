import React from 'react';
import StepProps from "../../types/StepProps";
import WizardStepMessage from "./WizardStepMessage";
import WizardStepIcon from "./WizardStepIcon";
import WizardStepTitle from "./WizardStepTitle";

interface WizardStepProps extends StepProps {
    isActive: boolean,
    isStepValidationError: boolean,
    isValid: boolean,
    onClick: () => void,
}

const WizardStep: React.FC<WizardStepProps> = ({
                                                    text,
                                                    icon,
                                                    messageProps,
                                                    isActive,
                                                    isStepValidationError,
                                                    isValid,
                                                    onClick}) => {
    return (
        <div
            onClick={onClick}
            className={[`wizard-step`, isActive ? 'active' : '', isValid ? 'valid' : ''].filter(Boolean).join(' ')}>
            <WizardStepIcon icon={icon} isValid={isValid} isActive={isActive}>
            </WizardStepIcon>
            <WizardStepTitle title={text}>
            </WizardStepTitle>
            <WizardStepMessage showValidationError={isStepValidationError && isActive} message={messageProps.message}>
            </WizardStepMessage>
        </div>
    )
}

export default WizardStep;
