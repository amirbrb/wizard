import React, {useState} from 'react';

type Comp1Props = {
    handleComponentStateChange: (stateObj: any) => void,
    outputValue1: string,
}

const Comp1: React.FC<Comp1Props> = ({
                                         handleComponentStateChange,
                                         outputValue1,
                                     }) => {
    const [value, setValue] = useState(outputValue1 || '');

    const setInputValue = (e: React.FormEvent<HTMLInputElement>) => {
        const v = e.currentTarget.value;
        setValue(v);
        handleComponentStateChange({
            outputValue1: v
        });
    }

    return (
        <div>
            <input value={value} onChange={setInputValue}/>
            <div>{value}</div>
        </div>
    )
}

export default Comp1;
