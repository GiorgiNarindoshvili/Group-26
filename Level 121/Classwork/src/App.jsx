import { useEffect, useState } from 'react'



const App = () => {
  const[count, setCount] = useState(0)

  useEffect(() => {
    const handleClick = () => {
        setCount(prev => prev + 1)
    }
    document.addEventListener("click", handleClick)
    return() => {
        document.removeEventListener("click", handleClick)
    }
  }, [count])

  return(
    <main>
        <h1>Count: {count}</h1>
    </main>
  )
}
// clean up function removes event listener on every single click, so count will increase by 1, without clean up function, event listener would do more than one task and it will increase count by 2,3 4
export default App
