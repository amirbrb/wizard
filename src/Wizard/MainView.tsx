import React from "react";

type MainViewProps = {
    currentView: JSX.Element,
}

const MainView: React.FC<MainViewProps> = ({currentView}) => {
    return (
        <div className={'wizard-main-view'}>
            {
                currentView
            }
        </div>
    )
}

export  default MainView;
