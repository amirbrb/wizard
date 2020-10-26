import React from "react";
import WizardStepIcon from "./WizardStepIcon";
import WizardStepTitle from "./WizardStepTitle";

interface WizardSummaryStepProps {
    isActive: boolean,
}

const WizardSummaryStep: React.FC<WizardSummaryStepProps> = ({isActive}) => {
    return <div className={'wizard-step'}>
        <WizardStepIcon icon={'fa fa-list-alt'} isValid={false} isActive={isActive}>
        </WizardStepIcon>
        <WizardStepTitle title={'summary'}>
        </WizardStepTitle>
    </div>
}

export default WizardSummaryStep;
