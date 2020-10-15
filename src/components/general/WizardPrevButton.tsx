import React from 'react';
import WizardButtonProps from "../../types/WizardButtonProps";

const WizardPrevButton: React.FC<WizardButtonProps> = ({
                                                            onBack,
                                                            show}) => {
    return (
        <button className={`btn btn-primary wizard-button ${!show ? 'hidden' : ''}`} onClick={onBack}>Back</button>
    )
}

export default WizardPrevButton
