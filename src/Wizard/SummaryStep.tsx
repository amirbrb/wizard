import React from "react";
import StepIcon from "./StepIcon";
import StepTitle from "./StepTitle";

interface SummaryStepProps {
    isActive: boolean,
}

const SummaryStep: React.FC<SummaryStepProps> = ({isActive}) => {
    return <div className={'wizard-step'}>
        <StepIcon icon={'fa fa-list-alt'} isValid={false} isActive={isActive}>
        </StepIcon>
        <StepTitle title={'summary'}>
        </StepTitle>
    </div>
}

export default SummaryStep;
