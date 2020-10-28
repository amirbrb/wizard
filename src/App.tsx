import './App.css';
import React, {useState} from 'react';
import filter from "lodash/filter";

import Wizard from "./Wizard/Wizard";
import Comp1 from "./demoComponents/Comp1";
import Comp2 from "./demoComponents/Comp2";
import SummaryView from "./Wizard/SummaryView";
import {StepProps} from "./Wizard/types";

const App = () => {
    const [comp1Value, setComp1Value] = useState<undefined | string>(undefined);
    const [comp2Value, setComp2Value] = useState<undefined | string>(undefined);

    const stepsConfig = Array<StepProps>(
        {
            id: 'comp1',
            icon: 'fa-cog',
            text: 'aaa',
            get message() {
                return comp1Value === undefined || !!comp1Value ? '': 'no comp value';
            },
            renderView: () => <Comp1 text={'Comp1'} outputValue={comp1Value} onValueChange={value1Changed}/>,
            validate: () => !!comp1Value,
            isVisible: () => true,
            summary: () => <div>{comp1Value}</div>
        },
        {
            id: 'comp2',
            icon: 'fa-arrow-right',
            text: 'bbb',
            get message() {
                return comp2Value === undefined || comp2Value ? '': 'no comp 2 value';
            },
            renderView: () => <Comp2 text={'Comp2'} outputValue={comp2Value} onValueChange={value2Changed}/>,
            validate: () => !!comp2Value,
            isVisible: () => comp1Value !== 'hide',
            summary: () => <div>{comp2Value}</div>
        },
        {
            id: 'preSummary',
            icon: 'fa-map',
            text: 'Summary',
            message: '',
            renderView: () => {
                const summarySteps = filter(stepsConfig, step=> step.isVisible());
                return <SummaryView summarySteps={summarySteps}></SummaryView>;
            },
            validate: () => true,
            isVisible: () => true,
            summary: () => <div>154.2 videos will be created</div>
        },
    );

    const value1Changed = (value: string) => {
        setComp1Value(value);
    }

    const value2Changed = (value: string) => {
        setComp2Value(value);
    }

    const submit = () => {
        console.log('submitted', comp1Value)
    };

    const cancel = () => {
        console.log('cancel called');
    };

    const postSubmitView = () => {
        return (
            <div>Thanks, submitted <b>{comp1Value} - {comp2Value}</b></div>
        )
    };

    return (
        <Wizard steps={stepsConfig}
                cancel={cancel}
                submit={submit}
                postSubmitView={postSubmitView()}>
        </Wizard>
    );
}

export default App;
