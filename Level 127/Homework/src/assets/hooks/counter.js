import { useState } from "react";

const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue)

    const increment = () => {
        setCounter(prevCount => prevCount + 1);
    }
    const decrement = () => {
        setCounter(prevCount => prevCount - 1)
    }
    const reset = () => {
        setCounter(initialValue)
    }
    return {counter, increment, decrement, reset}

}

export default useCounter;
