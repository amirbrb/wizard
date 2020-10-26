import React, {useState} from 'react';
import WizardHeader from "./structure/WizardHeader";
import WizardMainView from "./structure/WizardMainView";

import WizardApi from '../utils/WizardApi'
import WizardFooter from "./structure/WizardFooter";

type WizardProps = {
    api: WizardApi,
}

const Wizard: React.FC<WizardProps> = ({api}) => {
    const getIsValidStep = () => {
        return api.currentStepSettings.validate(api.currentStepSettings.componentSettings.props);
    }

    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const [activeStepId, setActiveStepId] = useState(api.currentStepSettings.id);
    const [isValidStep, setIsValidStep] = useState(getIsValidStep);
    const [isStepValidationFailed, setIsStepValidationFailed] = useState(false);
    const [visitedSteps, setVisitedSteps] = useState(Array<string>());
    const [visibleSteps, setVisibleSteps] = useState(api.visibleSteps);
    const [isSubmitted, setIsSubmitted] = useState(api.submitted);

    const handleForwardNavigation = () => {
        const newActiveStep = activeStepIndex + 1;

        //move forward with current response
        let currentResponse = getCurrentStepResponse();
        api.next(currentResponse);

        //get current step's (after forward) response and validate
        currentResponse = getCurrentStepResponse();
        const isValid = api.lastStepIndex === newActiveStep ||
            api.currentStepSettings.validate(currentResponse);

        setIsValidStep(isValid);
        setActiveStepIndex(newActiveStep);
        setActiveStepId(api.currentStepSettings.id);

        const indexOfStep = visitedSteps.indexOf(activeStepId);
        indexOfStep === -1 && visitedSteps.push(activeStepId);
        setVisitedSteps(visitedSteps.map(s=> s));
    }

    const handleBackwardNavigation = () => {
        api.back();

        setIsValidStep(true);
        setActiveStepIndex(activeStepIndex - 1);
        setActiveStepId(api.currentStepSettings.id);

        const indexOfStep = visitedSteps.indexOf(activeStepId);
        indexOfStep > -1 && visitedSteps.splice(indexOfStep, 1);
        setVisitedSteps(visitedSteps.map(s=> s));
    }

    const handleComponentStateChange = (stateObj: any) => {
        api.handleComponentStateChange(stateObj);
        setVisibleSteps(api.visibleSteps);

        const validationResponse = api.currentStepSettings.validate(stateObj);
        setIsValidStep(validationResponse);
        setIsStepValidationFailed(!validationResponse);
    }

    const handleStepClick = (stepIndex: number) => {

    }

    const handleSubmit = (stateObj: any) => {
        api.onSubmit(stateObj);
        setIsSubmitted(api.submitted);
        const indexOfStep = visitedSteps.indexOf(activeStepId);
        indexOfStep === -1 && visitedSteps.push(activeStepId);
        setVisitedSteps(visitedSteps.map(s=> s));
        setIsValidStep(true);
    }

    /**
     * Helper function to get current step's response
     * */
    const getCurrentStepResponse = () => {
        return api.currentStepSettings.getResponseObj(api.currentStepSettings.componentSettings.props) || null;
    }

    //Hide next steps when invoking the current component ->
    //for example - the first step's props should hide the next step
    const currentStepResponse = getCurrentStepResponse();
    api.processStepsVisibility(currentStepResponse);

    return (
        <div className={'wizard-wrapper'}>
            <WizardHeader lastStep={api.lastStepIndex}
                          steps={visibleSteps}
                          visitedSteps={visitedSteps}
                          isStepValidationFailed={isStepValidationFailed}
                          onClick={handleStepClick}
                          activeStep={activeStepIndex}>
            </WizardHeader>
            <WizardMainView handleComponentStateChange={handleComponentStateChange}
                            activeStep={activeStepIndex}
                            isWizardSubmitted={isSubmitted}
                            postSubmissionComponent={api.postSubmissionView}
                            components={api.components}>
            </WizardMainView>
            <WizardFooter isInitialStep={activeStepIndex === 0}
                          isLastStep={activeStepIndex === api.lastStepIndex}
                          isWizardSubmitted={isSubmitted}
                          canProceed={isValidStep}
                          onCancel={api.onCancel}
                          onSubmit={handleSubmit}
                          onNext={handleForwardNavigation}
                          onBack={handleBackwardNavigation}>
            </WizardFooter>
        </div>
    )
}


export default Wizard
