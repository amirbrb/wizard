import React from "react";
import HeaderStep from "./HeaderStep";
import HeaderStepSeparator from "./HeaderStepSeparator";
import {StepProps} from "./types";
import map from 'lodash/map'

type HeaderProps = {
    steps: StepProps[],
    activeStepId: string,
    visitedSteps: Array<string>,
    onClick: (stepIndex: number) => void,
}

const Header: React.FC<HeaderProps> = ({
                                                       steps,
                                                       activeStepId,
                                                       visitedSteps,
                                                       onClick}) => {
    return (
        <div className={'wizard-header'}>
            {
                map(steps, (stepConfig, index)=> {
                    const isVisited = visitedSteps.includes(stepConfig.id);
                    const isActive = stepConfig.id === activeStepId;

                    const StepView = () => <HeaderStep onClick={() => onClick(index)}
                                                       isActive={isActive}
                                                       isVisited={isVisited}
                                                       {...stepConfig}
                                                       key={index}/>;

                    return <React.Fragment key={index}>
                        <StepView/>
                        {
                            index < steps.length - 1 &&
                            <HeaderStepSeparator isVisited={isVisited}
                                                 isActive={isActive}>
                            </HeaderStepSeparator>
                        }
                    </React.Fragment>
                })
            }
        </div>
    )
}

export default Header
