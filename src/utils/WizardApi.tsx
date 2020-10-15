import React from "react";
import _ from 'lodash'
import StepProps from "../types/StepProps";

import SummaryBeforeSubmission from "../components/summary/SummaryBeforeSubmission";
import StepComponentSettingsProps from "../types/StepComponentSettingsProps";


class WizardApi {
    private _index: number;
    private readonly _summaryObject: any;
    private _overriddenProps: any = {};
    private readonly _steps: Array<StepProps>;
    private _submitted: boolean = false;
    public postSubmissionView: JSX.Element = <div></div>;
    private _renderSummary () {
        return () => {
            return <SummaryBeforeSubmission
                steps={this._steps}
                summaryObj={this._summaryObject}>
            </SummaryBeforeSubmission>
        }
    }

    public onSubmit: (stateObj: any) => void;
    public onCancel: () => void;

    constructor(steps: StepProps[],
                public summaryStepDefaults: StepProps,
                renderSummaryBeforeSubmission: (stateObj: any) => JSX.Element,
                renderSummaryPostSubmission: (stateObj: any) => JSX.Element,
                submit: (summaryObj: any) => void,
                cancel: () => void, ){

        this.onSubmit = () => {
            submit(this._summaryObject);
            this._submitted = true;
            this.postSubmissionView = renderSummaryPostSubmission(this._summaryObject);
        };

        this.onCancel = () => {
            cancel();
        };

        this._steps = steps;
        summaryStepDefaults.componentSettings.props.renderSummary = this._renderSummary();
        summaryStepDefaults.renderSummaryObj = renderSummaryBeforeSubmission;
        this._steps.push(summaryStepDefaults);

        this._index = 0;
        this._summaryObject = {};
    }

    back() {
        this._index--;
    }

    next(compState: any) {
        this._summaryObject[this.currentStepSettings.id] = compState;
        this._index++;
    }

    /**
     * Process which steps should be visible in the wizard, according to the current step response
     * */
    processStepsVisibility(currentStepResponse: any) {
        let aggregatedState = {};

        _.each(_.values(this._summaryObject), value => {
            aggregatedState = _.assign(aggregatedState, value);
        });

        aggregatedState = _.assign({aggregatedState}, currentStepResponse);

        _.each(this._steps, (step, index) => {
            if(index > this._index) {
                step.isVisible = !step.shouldHide(aggregatedState);
            }
        })
    }

    /**
     * Update current component properties -
     * will be used to re-create it when traversing back and forth in the wizard
     * */
    setStepProps(props: any) {
        this._overriddenProps[this.currentStepSettings.id] = props;
    }

    /**
     * After changing current step, cleanup all next steps from wizard state
     * */
    cleanUpSummaryObjFromStep() {
        _.each(this._steps, (step: StepProps, index: number) => {
            if(index > this._index) {
                delete this._summaryObject[step.id];
            }
        })
    }

    get currentComponent(): StepComponentSettingsProps {
        let currentStep = this.visibleSteps[this._index];
        return currentStep.componentSettings;
    }

    get components(): Array<StepComponentSettingsProps> {
        let steps = Array<StepComponentSettingsProps>();
        this.visibleSteps.forEach(step=> {
            let currentStep = {
                component: step.componentSettings.component,
                props: Object.assign(step.componentSettings.props, this._overriddenProps[step.id]),
            }
            steps.push(currentStep);
        })

        return steps;
    }

    get visibleSteps(): StepProps[] {
        return this._steps.filter(step=> step.isVisible);
    }

    get lastStepIndex(): number {
        return this.visibleSteps.length - 1;
    }

    get currentStepSettings(): StepProps {
        return this.visibleSteps[this._index];
    }

    get submitted(): boolean {
        return this._submitted;
    }

    handleComponentStateChange(stateObj: any) {
        this.cleanUpSummaryObjFromStep()
        this.setStepProps(stateObj);
        this.processStepsVisibility(stateObj)
    }
}

export default WizardApi;
