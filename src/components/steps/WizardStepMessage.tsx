import React from 'react';
import StepMessageProps from "../../types/StepMessageProps";

interface IStepMessageValidationProps extends StepMessageProps{
    showValidationError: boolean,
}

const WizardStepMessage: React.FC<IStepMessageValidationProps> = ({
                                                            message,
                                                            showValidationError}) => {
    let style = {
        display: showValidationError ? 'block' : 'none',
    }
    return (
        <div style={style} className={'step-validation-error'}>{message}</div>
    )
}

export default WizardStepMessage;
