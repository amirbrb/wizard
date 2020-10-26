import React from 'react';
import StepMessageProps from "../../types/StepMessageProps";

interface StepMessageValidationProps extends StepMessageProps{
    showValidationError: boolean,
}

const WizardStepMessage: React.FC<StepMessageValidationProps> = ({
                                                            message,
                                                            showValidationError}) => {
    const style = {
        display: showValidationError ? 'block' : 'none',
    };
    return (
        <div style={style} className={'step-validation-error'}>{message}</div>
    )
}

export default WizardStepMessage;
