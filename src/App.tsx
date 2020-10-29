import './App.css';
import React, {useState} from 'react';
import filter from "lodash/filter";

import Wizard from "./Wizard/Wizard";
import DemoComp1 from "./demoComponents/DemoComp1";
import DemoComp2 from "./demoComponents/DemoComp2";
import SummaryView from "./Wizard/SummaryView";
import DemoComp3 from "./demoComponents/DemoComp3";

const App = () => {
    const [comp1Value, setComp1Value] = useState<string>();
    const [comp2Value, setComp2Value] = useState<string>();
    const [comp3Checked, setComp3Checked] = useState(true);

    const stepsConfig = [
        {
            id: 'comp1',
            icon: 'fa-cog',
            text: 'aaa',
            get message() {
                return comp1Value === undefined || !!comp1Value ? '': 'no comp value';
            },
            renderView: () => <DemoComp1 text={'Comp1'} outputValue={comp1Value} onValueChange={value1Changed}/>,
            validate: () => !!comp1Value,
            isVisible: () => true,
            summaryDisplay: () => <div>{comp1Value}</div>
        },
        {
            id: 'comp2',
            icon: 'fa-arrow-right',
            text: 'bbb',
            get message() {
                return comp2Value === undefined || comp2Value ? '': 'no comp 2 value';
            },
            renderView: () => <DemoComp2 text={'Comp2'} outputValue={comp2Value} onValueChange={value2Changed}/>,
            validate: () => !!comp2Value,
            isVisible: () => comp1Value !== 'hide',
            summaryDisplay: () => <div>{comp2Value}</div>
        },
        {
            id: 'comp3',
            icon: 'fa-arrow-up',
            text: 'ccc',
            get message() {
                return comp2Value === undefined || comp2Value ? '': 'no comp 2 value';
            },
            renderView: () => <DemoComp3 text={'Comp2'} output={comp3Checked} onCheckedChange={value3Changed}/>,
            validate: () => comp3Checked,
            isVisible: () => comp1Value !== 'hide',
            summaryDisplay: () => <div>{comp3Checked.toString()}</div>
        },
        {
            id: 'preSummary',
            icon: 'fa-align-justify',
            text: 'Summary',
            message: '',
            renderView: () => {
                const summarySteps = filter(stepsConfig, step=> step.isVisible());
                return <SummaryView summarySteps={summarySteps}/>;
            },
            validate: () => true,
            isVisible: () => true,
            summaryDisplay: () => <div>154.2 videos will be created</div>
        },
    ];

    const value1Changed = (value: string) => {
        setComp1Value(value);
    }

    const value2Changed = (value: string) => {
        setComp2Value(value);
    }

    const value3Changed = (value: boolean) => {
        setComp3Checked(value);
    }

    const submit = () => {
        console.log('submit called')
    };

    const cancel = () => {
        console.log('cancel called');
    };

    const postSubmitView = () => {
        return (
            <div>Thanks, submitted <b>{[comp1Value, comp2Value].join("-")}</b></div>
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
