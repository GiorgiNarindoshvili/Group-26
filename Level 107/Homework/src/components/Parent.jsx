import React from "react";
import ChildFunc from "./Child.jsx";

const Parent = () =>{
    return(
        <div>
            <ChildFunc/>      
            <ChildFunc/>
        </div>
    );
}

export default Parent;