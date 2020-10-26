import './App.css';

import React from 'react';
import Wizard from "./components/Wizard";
import StepProps from "./types/StepProps";
import WizardApi from "./utils/WizardApi";
import Comp1 from "./demoComponents/Comp1";
import Comp2 from "./demoComponents/Comp2";
import DefaultSummaryStep from "./components/summary/DefaultSummaryStep";

const App = () => {
    const steps = Array<StepProps>(
        {
            id: 'comp1',
            icon: 'fa-cog',
            text: 'Step 1',
            messageProps: {
                message: 'please write something',
            },
            componentSettings: {
                component: Comp1 as React.FC,
                props: {
                    text: 'write something to continue',
                    outputValue1: 'comp1',
                },
            },
            validate: (stateObj: any) => {
                return !!stateObj.outputValue1;
            },
            shouldHide: (stateObj: any) => {
                return false;
            },
            getResponseObj: (stateObj: any) => {
                return {
                    outputValue1: stateObj.outputValue1
                };
            },
            isVisible: true,
            renderSummaryObj: stateObj => {
                return <div>Input Value: {stateObj.outputValue1}</div>;
            }
        },
        {
            id: 'comp2',
            icon: 'fa-map',
            text: 'Step 2',
            messageProps: {
                message: 'Please write something',
            },
            componentSettings: {
                component: Comp2 as React.FC,
                props: {
                    text: 'write something2 to continue',
                    outputValue2: 'comp2',
                }
            },
            validate: (stateObj: any) => {
                return !!stateObj.outputValue2;
            },
            shouldHide: (stateObj: any) => {
                return stateObj.outputValue1 === 'hide';
            },
            getResponseObj: (stateObj: any) => {
                return {
                    outputValue2: stateObj.outputValue2
                };
            },
            isVisible: true,
            renderSummaryObj: stateObj => {
                return <div>Input 2 Value: {stateObj.outputValue2}</div>;
            }
        },
    );

    const submit = (summaryObj: any) => {
        console.log('submitting ', summaryObj);
    };

    const cancel = () => {
        console.log('cancel called');
    };

    const renderSummaryBeforeSubmission = (stateObj: any) => {
        return (
            <div>
                <div>{stateObj.comp1 && stateObj.comp1.outputValue1 ? `Comp1: ${stateObj.comp1.outputValue1}` : ''} </div>
                <div>{stateObj.comp2 && stateObj.comp2.outputValue2 ? `Comp2: ${stateObj.comp2.outputValue2}` : ''} </div>
            </div>
        );
    }

    const renderSummaryPostSubmission = (stateObj: any) => {
        return (
            <div>
                Thank You!
                <br/>
                Submitted nothing...
            </div>
        );
    }

    const api = new WizardApi(
        steps,
        DefaultSummaryStep,
        renderSummaryBeforeSubmission,
        renderSummaryPostSubmission,
        submit,
        cancel,
    );

    return (
        <Wizard api={api}>
        </Wizard>
    );
}



export default App;
