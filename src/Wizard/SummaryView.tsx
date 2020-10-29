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
                    const SummaryAggregation = () => <SummaryAggregationStep
                        icon={step.icon}
                        title={step.text}
                        summary={step.summaryDisplay()}/>;

                    return index < summarySteps.length - 1 ?
                        <React.Fragment key={index}>
                            <SummaryAggregation/>
                            <SummaryStepSeparator/>
                        </React.Fragment>
                        :<SummaryAggregation key={index}/>

                })
            }
        </div>
    )
}

export default SummaryView;
