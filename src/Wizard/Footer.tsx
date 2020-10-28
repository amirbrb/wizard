import React from 'react';
import Button from './Button';

type FooterProps = {
    onNext: () => void,
    onBack: () => void,
    onCancel: () => void,
    onSubmit: () => void,
    isInitialStep: boolean,
    isLastStep: boolean,
    canProceed: boolean,
    isWizardSubmitted: boolean,
}

const Footer: React.FC<FooterProps> = ({
                                                       onNext,
                                                       onBack,
                                                       onCancel,
                                                       onSubmit,
                                                       isInitialStep,
                                                       isLastStep,
                                                       canProceed,
                                                       isWizardSubmitted}) => {

    const CancelButton = () => <Button isDisabled={false} onClick={onCancel} className={`btn btn-light wizard-button`}>Cancel</Button>;
    const BackButton = () => <Button isDisabled={false} onClick={onBack} className={`btn btn-primary wizard-button`}>Back</Button>;
    const NextButton = () => <Button isDisabled={!canProceed} onClick={onNext} className={`btn btn-primary wizard-button`}>Next</Button>;
    const SubmitButton = () => <Button isDisabled={isWizardSubmitted} onClick={onSubmit} className={`btn btn-success wizard-button`}>Submit</Button>;

    return (
        <div className={`wizard-footer ${isWizardSubmitted ? 'submitted' : ''}`}>
            {isInitialStep && !isLastStep && <CancelButton />}
            {!isInitialStep && !isWizardSubmitted && <BackButton />}
            {!isLastStep && <NextButton />}
            {isLastStep && <SubmitButton />}
        </div>
    )
}

export default Footer;
