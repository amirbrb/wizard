import React from 'react';
import WizardHeader from "./structure/WizardHeader";
import WizardMainView from "./structure/WizardMainView";

import WizardFooter from "./structure/WizardFooter";
import StepProps from "../types/StepProps";

type WizardProps = {
    onCancel: () => void,
    onSubmit: () => void,
    onBack: () => void,
    onNext: () => void,
    onStepClick: (index: number) => void,
    steps: StepProps[],
    activeView: JSX.Element,
    isValidStep: boolean,
    isDirtyStep: boolean,
    isWizardSubmitted: boolean,
    visitedSteps: string[],
    currentIndex: number,
}

const Wizard: React.FC<WizardProps> = ({
                                           onCancel,
                                           onSubmit,
                                           onBack,
                                           onNext,
                                           onStepClick,
                                           steps,
                                           activeView,
                                           isValidStep,
                                           isDirtyStep,
                                           isWizardSubmitted,
                                           visitedSteps,
                                           currentIndex,
                                        }) => {
    return (
        <div className={'wizard-wrapper'}>
            <WizardHeader steps={steps}
                          visitedSteps={visitedSteps}
                          isStepValidationFailed={isDirtyStep ? !isValidStep : false}
                          onClick={onStepClick}
                          activeStep={currentIndex}>
            </WizardHeader>
            <WizardMainView currentView={activeView}>
            </WizardMainView>
            <WizardFooter isInitialStep={currentIndex === 0}
                          isLastStep={currentIndex === steps.length - 1}
                          isWizardSubmitted={isWizardSubmitted}
                          canProceed={isValidStep}
                          onCancel={onCancel}
                          onSubmit={onSubmit}
                          onNext={onNext}
                          onBack={onBack}>
            </WizardFooter>
        </div>
    );
}


export default Wizard
