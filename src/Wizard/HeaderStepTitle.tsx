import React from 'react';

type HeaderStepTitleProps = {
    title: string,
}

const HeaderStepTitle: React.FC<HeaderStepTitleProps> = ({title}) => {
    return (
        <div className={'wizard-step-title'}>
            {title}
        </div>
    )
}

export default HeaderStepTitle;
