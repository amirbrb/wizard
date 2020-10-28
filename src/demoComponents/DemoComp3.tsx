import React, {useState} from 'react';

type Comp3Props = {
    output: boolean,
    text: string,
    onCheckedChange: (checked: boolean) => void,
}

const DemoComp3: React.FC<Comp3Props> = ({
                                         output,
                                         text,
                                         onCheckedChange}) => {
    const [checked, setChecked] = useState(output || false);
    const setCheckValue = (e: React.FormEvent<HTMLInputElement>) => {
        const v = e.currentTarget.checked;
        setChecked(v);
        onCheckedChange(v);
    }

    return (
        <div>
            <label>
                {text}
                <input type="checkbox" checked={checked} onChange={setCheckValue}></input>
            </label>
        </div>
    )
}

export default DemoComp3;
