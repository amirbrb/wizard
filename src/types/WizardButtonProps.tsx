interface WizardButtonProps {
    show: boolean,
    onCancel?: () => void,
    onBack?: () => void,
    onNext?: () => void,
    onSubmit?: (summaryObj: any) => void,
    canProceed?: boolean,
}

export default WizardButtonProps;
