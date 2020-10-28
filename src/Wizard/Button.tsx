import React from "react";

type ButtonProps = {
    className: string,
    onClick: () => void,
    isDisabled: boolean,
    children: string,
}

const Button: React.FC<ButtonProps> = ({className, onClick, isDisabled, children}) => {
    return (
        <button onClick={onClick} className={className} disabled={isDisabled}>{children}</button>
    )
}

export  default Button;
