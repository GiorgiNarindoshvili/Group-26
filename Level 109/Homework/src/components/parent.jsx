import React from "react";
import App from "../App";

const Parent = ({ yourName }) =>{
    return(
        <>
            <App name={yourName}/>
        </>
    )
}

export default Parent;