import React from 'react';
import Button from './Button';
import classNames from "classnames";

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

    const CancelButton = () => <Button isDisabled={false} onClick={onCancel} className={`wizard-button cancel-button`}>Cancel</Button>;
    const BackButton = () => <Button isDisabled={false} onClick={onBack} className={`wizard-button prev-next-button`}>Back</Button>;
    const NextButton = () => <Button isDisabled={!canProceed} onClick={onNext} className={`wizard-button prev-next-button`}>Next</Button>;
    const SubmitButton = () => <Button isDisabled={isWizardSubmitted} onClick={onSubmit} className={`wizard-button submit-button`}>Submit</Button>;

    const className = classNames('wizard-footer',
        {'submitted': isWizardSubmitted},
    );

    return (
        <div className={className}>
            {isInitialStep && !isLastStep && <CancelButton />}
            {!isInitialStep && !isWizardSubmitted && <BackButton />}
            {!isLastStep && <NextButton />}
            {isLastStep && <SubmitButton />}
        </div>
    )
}

export default Footer;
