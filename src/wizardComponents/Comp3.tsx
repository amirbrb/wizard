import React from 'react';

const Comp3: React.FC<any> = ({handleChange, props}) => {
    const emitState = (e:  React.FormEvent<HTMLInputElement>) => {
        handleChange({checked: e.currentTarget.checked})
    }

    return (
        <div>
            <label>
                Is Valid (3)
                <input type="checkbox" checked={props.checked} onChange={emitState}></input>
            </label>
        </div>
    )
}

export default Comp3;
