import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {StepProps} from "./types";
import useWizard from "./useWizard";

type WizardProps = {
    steps: StepProps[],
    postSubmitView: React.ReactNode,
    cancel: () => void,
    submit: () => void,
}

const Wizard: React.FC<WizardProps> = ({
                                            steps,
                                            postSubmitView,
                                            cancel,
                                            submit,
                                        }) => {

    const {
        visibleSteps,
        isValid,
        isWizardSubmitted,
        isFinalStep,
        isInitialStep,
        activeStepId,
        visitedSteps,
        activeView,
        stepClick,
        back,
        next,
        onSubmit
    } = useWizard(steps, cancel, submit);

    return (
        <div className={'wizard-wrapper'}>
            <Header steps={visibleSteps}
                    visitedSteps={visitedSteps}
                    onClick={stepClick}
                    activeStepId={activeStepId}>
            </Header>
            <div className={'wizard-main-view'}>
                {
                    isWizardSubmitted ? postSubmitView : activeView
                }
            </div>
            <Footer isInitialStep={isInitialStep}
                    isLastStep={isFinalStep}
                    isWizardSubmitted={isWizardSubmitted}
                    canProceed={isValid}
                    onCancel={cancel}
                    onSubmit={onSubmit}
                    onNext={next}
                    onBack={back}>
            </Footer>
        </div>
    );
}


export default Wizard
