import React from "react";
import StepMessageProps from "./StepMessageProps";
import StepComponentSettingsProps from "./StepComponentSettingsProps";

type StepProps = {
    id: string,
    text: string,
    icon: string,
    messageProps: StepMessageProps,
    componentSettings: StepComponentSettingsProps,
    validate: (stateObj: any) => boolean,
    shouldHide: (stateObj: any) => boolean,
    getResponseObj: (stateObj: any) => any,
    isVisible: boolean,
    renderSummaryObj: (stateObj: any) => JSX.Element,
}

export default StepProps;
