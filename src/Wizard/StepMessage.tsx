import React from 'react';
import {StepMessageProps} from "../Wizard/types";

interface StepMessageValidationProps extends StepMessageProps{
    message: string,
}

const StepMessage: React.FC<StepMessageValidationProps> = ({
                                                            message,}) => {
    return (message && <div className={'step-validation-error'}>{message}</div>) || <div></div>
}

export default StepMessage;
