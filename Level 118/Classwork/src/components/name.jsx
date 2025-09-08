import { useEffect, useState } from "react"

const Names = () => {
    const allnames = ["giorgi", "luka", "gabrieli", "giga", "lika", "anano", "anita", "lana", "zura", "zaza"]
    const[usnames, setUsnames] = useState(allnames)
    const[search, setSearch] = useState("")

    useEffect(() => {
        setUsnames(
            allnames.filter((names) => 
                names.toLowerCase().includes(search.toLowerCase())
            )
        )
    }, [search])
    return(
        <div>
            <h1>Search the Name: </h1>
            
            <label htmlFor="d">Put a name here  </label>
            <input type="text"  id = "d" placeholder="Enter a Name" onChange={(e) => setSearch(e.target.value)}/>
            {
                usnames.map((name) => {
                    return(
                        <ul>
                            <li key={Date.now()}>{name}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default Names