import React from "react";

const DefaultSummaryStep = {
    id: 'Summary',
    text: 'Summary',
    icon: 'fa-list-alt',
    messageProps: {
        message: '',
    },
    componentSettings: {
        component: (props: any) => {
            return (
                <div>{props.renderSummary()}</div>
            )
        },
        props: {
            renderSummary: () => {},
        }
    },
    validate: (stateObj: any) => true,
    shouldHide: (stateObj: any) => false,
    getResponseObj: (stateObj: any) => {},
    isVisible: true,
    renderSummaryObj: (stateObj: any) => {
        return <div></div>
    },
}

export default DefaultSummaryStep;
