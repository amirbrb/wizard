import React from 'react';
import {StepIconProps} from "./types";

const StepIcon: React.FC<StepIconProps> = ({icon, isVisited, isActive}) => {
    return (
        <div className={'wizard-step-icon'}>
            <i className={`fa ${isVisited && !isActive ? 'fa-check': icon}`}/>
        </div>
    )
}

export default StepIcon;
