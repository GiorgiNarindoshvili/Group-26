import { useState } from "react"

const Inputbar = ({ onTextChange }) => {
    const handleChange = (e) => {
        onTextChange(e.target.value)
    }
    return(
        <div id="input1">
            <textarea name="" id="text12" placeholder="Start typing here… (or paste your text)" onChange={handleChange}></textarea>
            <div id="checkboxes"> 
                <div id="c">
                    <div id="checkbox1">
                        <input type="checkbox" />
                        <p>Exclude Spaces</p>
                    </div>
                    <div id="chec">
                        <input type="checkbox" />
                        <p>Set Character Limit</p>
                    </div> 
                    
                </div>
                <div>
                    <p>  Approx. reading time:  Insert number minutes</p>
                </div>
            </div>
        </div>
    )
}

export default Inputbar