import React from "react";
import {StepProps} from "../Wizard/types";
import map from "lodash/map";
import SummaryAggregationStep from "./SummaryAggregationStep";
import SummaryStepSeparator from "./SummaryStepSeperator";

type defaultSummaryViewProps = {
    summarySteps: StepProps[],
}

const SummaryView: React.FC<defaultSummaryViewProps> = ({summarySteps}) => {
    return (
        <div className={'wizard-summary'}>
            {
                map(summarySteps, (step, index)=> {
                    return index < summarySteps.length - 1 ?
                        <React.Fragment key={index}>
                            <SummaryAggregationStep
                                icon={step.icon}
                                title={step.text}
                                summary={step.summary()}>
                            </SummaryAggregationStep>
                            <SummaryStepSeparator></SummaryStepSeparator>
                        </React.Fragment>
                        :
                        <SummaryAggregationStep
                            key={index}
                            icon={step.icon}
                            title={step.text}
                            summary={step.summary()}>
                        </SummaryAggregationStep>
                })
            }
        </div>
    )
}

export default SummaryView;
