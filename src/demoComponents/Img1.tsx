import React from "react";
const Img1: React.FC<any> = ({catUrl}) => {
    return (
        <div>
            <img src={catUrl}></img>
        </div>
    )
}

export default Img1;
