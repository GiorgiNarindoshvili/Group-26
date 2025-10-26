import { useState } from "react"

const useToggle = (initialState = "white") => {
    const[toggle, setToggle] = useState(initialState)

    const handleToggle = (newColor) => {
        setToggle(newColor)
    }

    return[toggle, handleToggle]
}

export { useToggle }