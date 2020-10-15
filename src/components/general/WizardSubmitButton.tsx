import React from 'react';
import WizardButtonProps from "../../types/WizardButtonProps";

const WizardSubmitButton: React.FC<WizardButtonProps> = ({
                                                              onSubmit,
                                                              canProceed,
                                                              show}) => {
    return (
        <button
            className={`btn btn-success wizard-button ${!show ? 'hidden' : ''}`}
            disabled={!canProceed}
            onClick={onSubmit}>Submit</button>
    )
}

export default WizardSubmitButton
