import React from 'react';
import classNames from "classnames";

type StepIconProps = {
    icon: string,
    isVisited: boolean,
    isActive: boolean,
}

const HeaderStepIcon: React.FC<StepIconProps> = ({icon, isVisited, isActive}) => {
    const currentIcon = isVisited && !isActive ? 'fa-check' : icon;
    const faClassName = classNames('fa', currentIcon);
    return (
        <div className={'wizard-step-icon'}>
            <i className={faClassName}/>
        </div>
    )
}

export default HeaderStepIcon;
