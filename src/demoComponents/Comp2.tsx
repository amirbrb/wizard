import React, {useState} from 'react';

type Comp2Props = {
    handleComponentStateChange: (stateObj: any) => void,
    outputValue2: string,
    text: string,
}

const Comp2: React.FC<Comp2Props> = ({
                                         handleComponentStateChange,
                                         outputValue2,
                                         text}) => {
    const [value, setValue] = useState(outputValue2 || '');

    const setInputValue = (e: React.FormEvent<HTMLInputElement>) => {
        const v = e.currentTarget.value;
        setValue(v);
        handleComponentStateChange({
            outputValue2: v
        });
    }

    return (
        <div>
            <input value={value} onChange={setInputValue}/>
            <div>{text}</div>
        </div>
    )
}

export default Comp2;
