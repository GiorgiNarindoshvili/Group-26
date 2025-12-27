import useCounter from "./hooks/counter.js";


const Counting = () => {
    const {counter, increment, decrement, reset} = useCounter(0);

    console.log(counter)
    return(
        <div>
            <p>Count: {counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Counting;