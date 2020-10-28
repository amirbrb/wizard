import React from 'react';
import Header from "./Header";
import MainView from "./MainView";

import Footer from "./Footer";
import {StepProps} from "../Wizard/types";
import useWizard from "./useWizard";

/*type WizardProps = {
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
}*/

type WizardProps = {
    steps: StepProps[],
    postSubmitView: JSX.Element,
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
        currentIndex,
        isValid,
        isWizardSubmitted,
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
                    isStepValidationFailed={!isValid}
                    onClick={stepClick}
                    activeStep={currentIndex}>
            </Header>
            <MainView currentView={isWizardSubmitted ? postSubmitView : activeView}>
            </MainView>
            <Footer isInitialStep={currentIndex === 0}
                    isLastStep={currentIndex === steps.length - 1}
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
