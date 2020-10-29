import React from  'react';
import classNames from "classnames";

interface HeaderStepSeparatorProps {
    isActive:boolean,
    isVisited: boolean,
}

const HeaderStepSeparator: React.FC<HeaderStepSeparatorProps> = ({
                                                                isActive,
                                                                isVisited}) => {
    const className = classNames('wizard-step-separator', {
        active: isActive,
        visited: isVisited
    });
    return (
        <div className={className}/>
    )
}

export default HeaderStepSeparator;
