import React from "react";
import WizardStepIcon from "./WizardStepIcon";
import WizardStepTitle from "./WizardStepTitle";

interface IWizardSummaryStepProps {
    isActive: boolean,
}

const WizardSummaryStep: React.FC<IWizardSummaryStepProps> = ({isActive}) => {
    return <div className={'wizard-step'}>
        <WizardStepIcon icon={'fa fa-list-alt'} isValid={false} isActive={isActive}>
        </WizardStepIcon>
        <WizardStepTitle title={'summary'}>
        </WizardStepTitle>
    </div>
}

export default WizardSummaryStep;
