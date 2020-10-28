export interface StepIconProps {
    icon: string,
    isValid: boolean,
    isActive: boolean,
}

export interface StepMessageProps {
    message: string,
}

export interface StepProps {
    id: string,
    text: string,
    icon: string,
    message: string,
    renderView: () => JSX.Element,
    validate: () => boolean,
    isVisible: () => boolean,
    summary: () => JSX.Element,
}
