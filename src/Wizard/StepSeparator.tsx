import React from  'react';

interface StepSeparatorProps {
    isActive:boolean,
    isValid: boolean,
}

const StepSeparator: React.FC<StepSeparatorProps> = ({
                                                                isActive,
                                                                isValid}) => {
    return (
        <div className={`wizard-step-separator ${ isActive ? 'active': ''} ${ isValid ? 'valid' : ''}`}>
        </div>
    )
}

export default StepSeparator;
