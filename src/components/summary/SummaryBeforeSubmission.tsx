import React from "react";
import SummaryStep from "./SummaryStep";
import StepProps from "../../types/StepProps";
import SummaryStepSeparator from "./SummaryStepSeperator";

type SummaryProps = {
    steps: StepProps[],
    summaryObj: any,
}

const SummaryBeforeSubmission: React.FC<SummaryProps> = ({
                                                            steps,
                                                            summaryObj,
                                                         }) => {
    return (
        <div className={'wizard-summary'}>
            {
                steps.map((step, index)=> {
                    return step.isVisible ?
                        index < steps.length - 1 ?
                            <React.Fragment key={index}>
                                <SummaryStep
                                    icon={step.icon}
                                    title={step.text}
                                    renderSummaryObj={step.renderSummaryObj}
                                    summaryObj={summaryObj[step.id] || summaryObj}>
                                </SummaryStep>
                                <SummaryStepSeparator></SummaryStepSeparator>
                            </React.Fragment>
                             :
                            <SummaryStep
                                key={index}
                                icon={step.icon}
                                title={step.text}
                                renderSummaryObj={step.renderSummaryObj}
                                summaryObj={summaryObj[step.id] || summaryObj}>
                            </SummaryStep>
                        :
                        null
                })
            }
        </div>
    )
}

export default SummaryBeforeSubmission;
