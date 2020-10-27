import React from "react";

interface SummaryStepProps {
    icon: string,
    title: string,
    summary: JSX.Element,
}
const SummaryStep: React.FC<SummaryStepProps> = ({
                                                     icon,
                                                     title,
                                                     summary}) => {
    return <div className={'wizard-summary-step'}>
        <div className={'wizard-step-icon'}>
            <i className={`fa ${icon}`}>
            </i>
        </div>
        <div className={'summary-data'}>
            <div className={'summary-data-title'}>{title}</div>
            <div className={'summary-data-data'}>{summary}</div>
        </div>
    </div>
}

export default SummaryStep;
