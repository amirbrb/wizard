import React from "react";
import StepProps from "../../types/StepProps";
import map from "lodash/map";
import SummaryStep from "./SummaryStep";
import SummaryStepSeparator from "./SummaryStepSeperator";

type defaultSummaryViewProps = {
    summarySteps: StepProps[],
}

const DefaultSummaryView: React.FC<defaultSummaryViewProps> = ({summarySteps}) => {
    return (
        <div className={'wizard-summary'}>
            {
                map(summarySteps, (step, index)=> {
                    return index < summarySteps.length - 1 ?
                        <React.Fragment key={index}>
                            <SummaryStep
                                icon={step.icon}
                                title={step.text}
                                summary={step.summary()}>
                            </SummaryStep>
                            <SummaryStepSeparator></SummaryStepSeparator>
                        </React.Fragment>
                        :
                        <SummaryStep
                            icon={step.icon}
                            title={step.text}
                            summary={step.summary()}>
                        </SummaryStep>
                })
            }
        </div>
    )
}

export default DefaultSummaryView;
