import {StepProps} from "../Wizard/types";
import {useState} from "react";
import filter from "lodash/filter";

const useWizard = (steps: StepProps[], cancel: () => void, submit: () => void,) => {
    const [isWizardSubmitted, setIsWizardSubmitted] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visitedSteps, setVisitedSteps] = useState(Array<string>());

    const visibleSteps = filter(steps, step=> step.isVisible());
    const isValid = visibleSteps[currentIndex].validate();
    const activeView = visibleSteps[currentIndex].renderView();

    const next = () => {
        setVisitedSteps([...visitedSteps, visibleSteps[currentIndex].id]);
        const activeIndex = currentIndex + 1;
        setCurrentIndex(activeIndex);
    };

    const back = () => {
        setVisitedSteps([...visitedSteps].splice(0, currentIndex));
        const activeIndex = currentIndex - 1;
        setCurrentIndex(activeIndex);
    };

    const stepClick = (index: number) => {
        if(isWizardSubmitted) return;

        if(index < currentIndex) {
            setVisitedSteps([...visitedSteps].splice(0, currentIndex));
            setCurrentIndex(index);
        }
    }

    const onSubmit = () => {
        submit();
        setIsWizardSubmitted(true);
    }

    return {
        currentIndex,
        setCurrentIndex,
        isValid,
        isWizardSubmitted,
        activeView,
        visibleSteps,
        visitedSteps,
        next,
        back,
        stepClick,
        onSubmit,
    }
}

export default useWizard;
