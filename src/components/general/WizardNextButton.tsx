import React from 'react';
import WizardButtonProps from "../../types/WizardButtonProps";

const WizardNextButton: React.FC<WizardButtonProps> = ({
                                                            onNext,
                                                            canProceed,
                                                            show}) => {
    return (
        <button className={`btn btn-primary wizard-button ${!show ? 'hidden' : ''}`}
                disabled={!canProceed}
                onClick={onNext}>
            Next
        </button>
    )
}

export default WizardNextButton
