import React from "react";
import Step from "./Step";
import StepSeparator from "./StepSeparator";
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

                    const StepView = () => <Step onClick={() => onClick(index)}
                                                 isActive={isActive}
                                                 isVisited={isVisited}
                                                 {...stepConfig}
                                                 key={index}/>;

                    return index < steps.length - 1 ? (
                        <React.Fragment key={index}>
                            <StepView/>
                            <StepSeparator isVisited={isVisited}
                                           isActive={isActive}>
                            </StepSeparator>
                        </React.Fragment>
                    ) : (
                        <StepView key={index}/>
                    )
                })
            }
        </div>
    )
}

export default Header
