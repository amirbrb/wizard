import React from "react";

type WizardMainViewProps = {
    currentView: JSX.Element,
}

const WizardMainView: React.FC<WizardMainViewProps> = ({currentView}) => {
    return (
        <div className={'wizard-main-view'}>
            {
                currentView
            }
        </div>
    )
}

export  default WizardMainView;
