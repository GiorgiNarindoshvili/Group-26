import React from "react";

const Parent = ({ children, onClick }) =>{
    return <button onClick={onClick}>{children}</button>
}

export default Parent