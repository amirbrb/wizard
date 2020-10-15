import React from 'react';
import StepIconProps from "../../types/StepIconProps";

const WizardStepIcon: React.FC<StepIconProps> = ({icon, isValid, isActive}) => {
    return (
        <div className={'wizard-step-icon'}>
            <i className={`fa ${isValid && !isActive ? 'fa-check': icon}`}></i>
        </div>
    )
}

export default WizardStepIcon;
