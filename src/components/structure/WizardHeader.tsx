import React from "react";
import WizardStep from "../steps/WizardStep";
import WizardStepSeparator from "../steps/WizardStepSeparator";
import StepProps from "../../types/StepProps";

type WizardHeaderProps = {
    steps: StepProps[],
    activeStep: number,
    isStepValidationFailed: boolean,
    visitedSteps: Array<string>,
    lastStep: number,
    onClick: (stepIndex: number) => void,
}

const WizardHeader: React.FC<WizardHeaderProps> = ({
                                                       steps,
                                                       activeStep,
                                                       visitedSteps,
                                                       lastStep,
                                                       isStepValidationFailed,
                                                       onClick}) => {
    return (
        <div className={'wizard-header'}>
            {
                steps.map((stepConfig, index)=> {
                    return index < lastStep ? (
                        <React.Fragment key={index}>
                            <WizardStep
                                        onClick={() => onClick.call(null, index)}
                                        isStepValidationError={isStepValidationFailed}
                                        isActive={index === activeStep}
                                        isValid={visitedSteps.includes(stepConfig.id)}
                                        {...stepConfig}>
                            </WizardStep>
                            <WizardStepSeparator
                                                 isValid={visitedSteps.includes(stepConfig.id)}
                                                 isActive={index === activeStep}>
                            </WizardStepSeparator>
                        </React.Fragment>
                    ) : (
                        <WizardStep key={index}
                                    onClick={() => onClick.call(null, index)}
                                    isStepValidationError={isStepValidationFailed}
                                    isActive={index === activeStep}
                                    isValid={visitedSteps.includes(stepConfig.id)}
                                    {...stepConfig}>
                        </WizardStep>
                    )
                })
            }
        </div>
    )
}

export default WizardHeader
