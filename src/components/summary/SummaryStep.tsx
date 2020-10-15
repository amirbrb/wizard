import React from "react";

interface ISummaryStepProps {
    icon: string,
    title: string,
    summaryObj: any,
    renderSummaryObj: (stateObj: any) => JSX.Element,
}
const SummaryStep: React.FC<ISummaryStepProps> = ({icon, title, summaryObj, renderSummaryObj}) => {
    return <div className={'wizard-summary-step'}>
        <div className={'wizard-step-icon'}>
            <i className={`fa ${icon}`}>
            </i>
        </div>
        <div className={'summary-data'}>
            <div className={'summary-data-title'}>{title}</div>
            <div className={'summary-data-data'}>{renderSummaryObj(summaryObj)}</div>
        </div>
    </div>
}

export default SummaryStep;
