import React, { useState } from "react";
import App from "../App";
const MovieCard = (props) => {
    const[showMore, setShowMore] = useState(false)

    const handleClick = () => {
        setShowMore(!showMore)
    }
        
    
    return(
        <div style={{
            border: "4px, solid, black",
            borderRadius: "10px",
            height: "400px",
            width: "400px",
            display: "flex",
            flexDirection: "row"
            
        }}>
            <div style={{
                height:"100px",
                width: "100px"

            }}>
                <h1>{props.title}</h1>
                <img src={props.poster} alt={props.title}  style={{
                    width:"100px",
                    display: "flex",
                    paddingLeft:"30px"

                
                }}/>
                <p style={{
                    width: "300px",
                    textAlign: "center"

                }}>{props.description}</p>
                
                <button onClick={handleClick}>{showMore? "Hide Info": "Show Info"}</button>

                {showMore &&(
                    <div style={{
                        display:"flex",
                        flexDirection: "column",
                        
                    }}>
                        <p style={{
                        width: "300px",
                        textAlign: "center",
                        
                        }}>{props.genre}</p>
                        <p style={{
                        width: "300px",
                        textAlign: "center",
                        
                        }}>{props.releaseDate}</p>
                        <p style={{
                        width: "300px",
                        textAlign: "center",
                        
                        }}>{props.rating}</p>
                    </div>
                )}
                
                
            </div>
            

        </div>
    )
}

export default MovieCard