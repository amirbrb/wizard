import React from 'react';

type HeaderStepMessageProps = {
    message: string,
}

const HeaderStepMessage: React.FC<HeaderStepMessageProps> = ({
                                                            message,}) => {
    return (message && <div className={'step-validation-error'}>{message}</div>) || <div/>
}

export default HeaderStepMessage;
