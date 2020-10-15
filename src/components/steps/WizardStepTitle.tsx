import React from 'react';

type StepTitleProps = {
    title: string,
}

const WizardStepTitle: React.FC<StepTitleProps> = ({title}) => {
    return (
        <div className={'wizard-step-title'}>
            {title}
        </div>
    )
}

export default WizardStepTitle;
