import React from 'react';
import WizardCancelButton from "../general/WizardCancelButton";
import WizardNextButton from "../general/WizardNextButton";
import WizardPrevButton from "../general/WizardPrevButton";
import WizardSubmitButton from "../general/WizardSubmitButton";

type WizardFooterProps = {
    onNext: () => void,
    onBack: () => void,
    onCancel: () => void,
    onSubmit: (summaryObj: any) => void,
    isInitialStep: boolean,
    isLastStep: boolean,
    canProceed: boolean,
    isWizardSubmitted: boolean,
}

const WizardFooter: React.FC<WizardFooterProps> = ({
                                                       onNext,
                                                       onBack,
                                                       onCancel,
                                                       onSubmit,
                                                       isInitialStep,
                                                       isLastStep,
                                                       canProceed,
                                                       isWizardSubmitted}) => {
    return (
        <div className={`wizard-footer ${isWizardSubmitted ? 'submitted' : ''}`}>
            <WizardCancelButton key={'cancel'} onCancel={onCancel} show={isInitialStep}></WizardCancelButton>
            <WizardPrevButton key={'back'} onBack={onBack} show={!isInitialStep && !isWizardSubmitted}></WizardPrevButton>
            <WizardNextButton key={'next'} onNext={onNext} show={!isLastStep} canProceed={canProceed}></WizardNextButton>
            <WizardSubmitButton key={'submit'} onSubmit={onSubmit} canProceed={!isWizardSubmitted} show={isLastStep}></WizardSubmitButton>
        </div>
    )
}

export default WizardFooter;
