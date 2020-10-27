import './App.css';
import React, {useState} from 'react';
import filter from "lodash/filter";
import StepProps from "./types/StepProps";
import Wizard from "./components/Wizard";
import Comp1 from "./demoComponents/Comp1";
import Comp2 from "./demoComponents/Comp2";
import DefaultSummaryView from "./components/summary/DefaultSummaryView";
import map from 'lodash/map';
import find from 'lodash/find';

const aggregatedState = {
    comp1Value: '',
    comp2Value: '',
};

const App = () => {
    const [comp1Value, setComp1Value] = useState('');

    const value1Changed = (value: string) => {
        setComp1Value(value)

        setIsDirty(true);

        const newStep2 = {
            ...find(steps, {id: 'comp2'}) as StepProps,
            isVisible: value !== 'hide'
        }

        const newSteps = map(steps, (step) =>
            step.id === 'comp2'
                ? newStep2
                : step);

        setSteps(newSteps);
    }

    const value2Changed = (value: string) => {

    }

    const stepsConfig: Array<StepProps> = [
        {
            id: 'comp1',
            icon: 'fa-cog',
            text: 'aaa',
            message: 'please write something',
            renderView: () => <Comp1 text={'Comp1'} outputValue={comp1Value} onValueChange={value1Changed}/>,
            validate: () => !!comp1Value,
            isVisible: true,
            summary: () => <div>{comp1Value}</div>
        },
        {
            id: 'comp2',
            icon: 'fa-arrow-right',
            text: 'bbb',
            message: 'please write something',
            renderView: () => <Comp2 text={'Comp2'} outputValue={aggregatedState.comp2Value} onValueChange={value2Changed}/>,
            validate: () => true,
            isVisible: true,
            summary: () => <div>{aggregatedState.comp2Value}</div>
        },
        {
            id: 'preSummary',
            icon: 'fa-map',
            text: 'Summary',
            message: '',
            renderView: () => {
                return <DefaultSummaryView summarySteps={visibleSteps}></DefaultSummaryView>;
            },
            validate: () => true,
            isVisible: true,
            summary: () => <div>154.2 videos will be created</div>
        }];

    const submit = () => {
        setIsWizardSubmitted(true);
        //setActiveView(<div>thanks, come back again</div>)
    };

    const cancel = () => {
        console.log('cancel called');
    };

/*    const next = () => {
        setVisitedSteps([...visitedSteps, visibleSteps[currentIndex].id]);
        const activeIndex = currentIndex + 1;
        setCurrentIndex(activeIndex);
        //setActiveView(visibleSteps[activeIndex].renderView());
        //setIsValid(visibleSteps[activeIndex].validate());
        //setIsDirty(visitedSteps.includes(visibleSteps[currentIndex].id));
    };

    const back = () => {
        setVisitedSteps([...visitedSteps].splice(0, currentIndex));
        const activeIndex = currentIndex - 1;
        setCurrentIndex(activeIndex);
        //setActiveView(visibleSteps[activeIndex].renderView());
        //setIsValid(visibleSteps[activeIndex].validate());
        //setIsDirty(visitedSteps.includes(visibleSteps[currentIndex].id))
    };*/

    const stepClick = (index: number) => {
        if(isWizardSubmitted) return;

        if(index < currentIndex) {
            setVisitedSteps([...visitedSteps].splice(0, currentIndex));
            setCurrentIndex(index);
            //setActiveView(visibleSteps[index].renderView());
            setIsValid(visibleSteps[index].validate());
            setIsDirty(visitedSteps.includes(visibleSteps[currentIndex].id));
        }
    }

    const [steps, setSteps] = useState(stepsConfig);

    const [visitedSteps, setVisitedSteps] = useState(Array<string>());
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isWizardSubmitted, setIsWizardSubmitted] = useState(false);
    const [isDirty, setIsDirty] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const visibleSteps = filter(steps, 'isVisible');

    function useWizardApi(steps: StepProps[]) {
        const currentIndex = 0;

        const activeView = steps[currentIndex].renderView();

        function next() {
            setCurrentIndex(Math.max(currentIndex + 1, steps.length - 1));
        }

        function back() {
            setCurrentIndex(Math.min(currentIndex - 1, 0));
        }


        return {
            next,
            back,
            activeView,
        }
    }


    const {next, back, activeView} = useWizardApi(steps);

    return (
        <>
        <div>Comp1: {comp1Value}</div>
        <div>Comp1 valid: {steps[currentIndex].validate().toString()}</div>
        <Wizard steps={visibleSteps}
                isWizardSubmitted={isWizardSubmitted}
                currentIndex={currentIndex}
                isValidStep={visibleSteps[currentIndex].validate()}
                isDirtyStep={isDirty}
                visitedSteps={visitedSteps}
                activeView={activeView}
                onBack={back}
                onNext={next}
                onStepClick={stepClick}
                onCancel={cancel}
                onSubmit={submit}>
        </Wizard>
        </>
    );
}

export default App;
