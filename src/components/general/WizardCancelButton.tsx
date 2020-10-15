import React from 'react';
import WizardButtonProps from "../../types/WizardButtonProps";

const WizardCancelButton: React.FC<WizardButtonProps> = ({onCancel, show}) => {
    return (
        <button className={`btn btn-danger wizard-button ${!show ? 'hidden' : ''}`} onClick={onCancel}>Cancel</button>
    )
}

export default WizardCancelButton
