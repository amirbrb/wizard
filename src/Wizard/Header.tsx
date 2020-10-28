import React from "react";
import Step from "./Step";
import StepSeparator from "./StepSeparator";
import {StepProps} from "../Wizard/types";

type HeaderProps = {
    steps: StepProps[],
    activeStep: number,
    isStepValidationFailed: boolean,
    visitedSteps: Array<string>,
    onClick: (stepIndex: number) => void,
}

const Header: React.FC<HeaderProps> = ({
                                                       steps,
                                                       activeStep,
                                                       visitedSteps,
                                                       isStepValidationFailed,
                                                       onClick}) => {
    return (
        <div className={'wizard-header'}>
            {
                steps.map((stepConfig, index)=> {
                    return index < steps.length - 1 ? (
                        <React.Fragment key={index}>
                            <Step onClick={() => onClick(index)}
                                  isActive={index === activeStep}
                                  isValid={visitedSteps.includes(stepConfig.id)}
                                  {...stepConfig}>
                            </Step>
                            <StepSeparator
                                                 isValid={visitedSteps.includes(stepConfig.id)}
                                                 isActive={index === activeStep}>
                            </StepSeparator>
                        </React.Fragment>
                    ) : (
                        <Step key={index}
                              onClick={() => onClick.call(null, index)}
                              isActive={index === activeStep}
                              isValid={visitedSteps.includes(stepConfig.id)}
                              {...stepConfig}>
                        </Step>
                    )
                })
            }
        </div>
    )
}

export default Header
