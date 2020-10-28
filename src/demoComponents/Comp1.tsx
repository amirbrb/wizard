import React, {useState} from 'react';

type Comp1Props = {
    outputValue: string | undefined,
    text: string,
    onValueChange: (value: string) => void
}

const Comp1: React.FC<Comp1Props> = ({
                                         outputValue,
                                         text,
                                         onValueChange,
                                     }) => {
    const [value, setValue] = useState(outputValue || '');

    const setInputValue = (e: React.FormEvent<HTMLInputElement>) => {
        const v = e.currentTarget.value;
        setValue(v);
        onValueChange(v);
    }

    return (
        <div>
            <input value={value} onChange={setInputValue}/>
            <div>{value}</div>
            <div>{text}</div>
        </div>
    )
}

export default Comp1;
