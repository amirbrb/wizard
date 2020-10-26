import React from "react";
import StepComponentSettingsProps from "../../types/StepComponentSettingsProps";

type WizardMainViewProps = {
    handleComponentStateChange: (stateObj: any, props: any) => void,
    components: StepComponentSettingsProps[],
    activeStep: number,
    isWizardSubmitted: boolean,
    postSubmissionComponent: JSX.Element,
}

const WizardMainView: React.FC<WizardMainViewProps> = ({
                                                           handleComponentStateChange,
                                                           components,
                                                           activeStep,
                                                           isWizardSubmitted,
                                                           postSubmissionComponent}) => {

    const activeComp = components[activeStep];
    const ActiveComponent = activeComp.component;

    return (
        <div className={'wizard-main-view'}>
            {
                isWizardSubmitted ?
                    postSubmissionComponent :
                    <ActiveComponent {...Object.assign({}, {
                        ...activeComp.props,
                        handleComponentStateChange: handleComponentStateChange,
                    })}>
                    </ActiveComponent>
            }
        </div>
    )

    /*
    const ActiveComponent = component.component;

    return (
        <div className={'wizard-main-view'}>
            <ActiveComponent {...Object.assign({}, {
                ...component.props,
                handleChange,
            })}>
            </ActiveComponent>
        </div>
    )*/
}

export  default WizardMainView;
