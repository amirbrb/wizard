import React, {useState} from 'react';

type Comp2Props = {
    outputValue: string,
    text: string,
    onValueChange: (value: string) => void
}

const Comp2: React.FC<Comp2Props> = ({
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

export default Comp2;
