import React from "react";

export interface StepProps {
    id: string,
    text: string,
    icon: string,
    message: string,
    renderView: () => React.ReactNode,
    validate: () => boolean,
    isVisible: () => boolean,
    summaryDisplay: () => React.ReactNode,
}
