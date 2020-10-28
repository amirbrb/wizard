import React from "react";
import map from "lodash/map";

import {StepProps} from "./types";
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
                        <>
                            <SummaryAggregationStep
                                icon={step.icon}
                                title={step.text}
                                summary={step.summary()}>
                            </SummaryAggregationStep>
                            <SummaryStepSeparator></SummaryStepSeparator>
                        </>
                        :
                        <SummaryAggregationStep
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
