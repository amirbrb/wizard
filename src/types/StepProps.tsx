import React from "react";
import StepMessageProps from "./StepMessageProps";
import StepComponentSettingsProps from "./StepComponentSettingsProps";

type StepProps = {
    id: string,
    text: string,
    icon: string,
    message: string,
    renderView: () => JSX.Element,
    validate: () => boolean,
    isVisible: boolean,
    summary: () => JSX.Element,
}

export default StepProps;
