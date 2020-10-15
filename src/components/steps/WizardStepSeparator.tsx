import React from  'react';

interface IStepSeparatorProps {
    isActive:boolean,
    isValid: boolean,
}

const WizardStepSeparator: React.FC<IStepSeparatorProps> = ({
                                                                isActive,
                                                                isValid}) => {
    return (
        <div className={`wizard-step-separator ${ isActive ? 'active': ''} ${ isValid ? 'valid' : ''}`}>
        </div>
    )
}

export default WizardStepSeparator;
