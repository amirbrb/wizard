import React from  'react';

interface StepSeparatorProps {
    isActive:boolean,
    isVisited: boolean,
}

const StepSeparator: React.FC<StepSeparatorProps> = ({
                                                                isActive,
                                                                isVisited}) => {
    return (
        <div className={`wizard-step-separator ${ isActive ? 'active': ''} ${ isVisited ? 'visited' : ''}`}/>
    )
}

export default StepSeparator;
