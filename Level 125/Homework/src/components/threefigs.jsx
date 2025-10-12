import { useState } from "react"
import image1 from "../assets/images/pattern-character-count.svg"
import yellow from "../assets/images/pattern-word-count.svg"
import orange from "../assets/images/pattern-sentence-count.svg"

const Rects = () => {
    return(
        <div id="boxes">
            <div id="purplebox">
                <img src={image1} alt="" />
                <p id="purplenum"> 270</p>
                <p id="chars">Total Characters</p>
                
            </div>
            <div id="yellowbox">
                <img src={yellow} alt="" />
                <p id="yellownum">39</p>
                <p id="words">Word Count</p>
            </div>
            <div id="orangebox">
                <img src={orange} alt="" />
                <p id="orangenum">04</p>
                <p id="sen">Sentence Count</p>
            </div>
        </div>
    )
}

export default Rects