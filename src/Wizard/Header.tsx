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
                    const isValid = visitedSteps.includes(stepConfig.id);
                    const isActive = stepConfig.id === activeStepId;

                    return index < steps.length - 1 ? (
                        <React.Fragment key={index}>
                            <Step onClick={() => onClick(index)}
                                  isActive={isActive}
                                  isValid={isValid}
                                  {...stepConfig}
                                  key={index}/>
                            <StepSeparator isValid={isValid}
                                           isActive={isActive}>
                            </StepSeparator>
                        </React.Fragment>
                    ) : (
                        <Step onClick={() => onClick(index)}
                              isActive={isActive}
                              isValid={isValid}
                              {...stepConfig}
                              key={index}/>
                    )
                })
            }
        </div>
    )
}

export default Header
