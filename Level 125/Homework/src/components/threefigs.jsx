import { useState } from "react"
import image1 from "../assets/images/pattern-character-count.svg"
import yellow from "../assets/images/pattern-word-count.svg"
import orange from "../assets/images/pattern-sentence-count.svg"

const Rects = ({text}) => {
    const charCount = text.length;
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    const sentenceCount = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    return(
        <div id="boxes">
            <div id="purplebox">
                <img src={image1} alt="" />
                <p id="purplenum"> {charCount}</p>
                <p id="chars">Total Characters</p>
                
            </div>
            <div id="yellowbox">
                <img src={yellow} alt="" />
                <p id="yellownum">{wordCount}</p>
                <p id="words">Word Count</p>
            </div>
            <div id="orangebox">
                <img src={orange} alt="" />
                <p id="orangenum">{sentenceCount}</p>
                <p id="sen">Sentence Count</p>
            </div>
        </div>
    )
}

export default Rects