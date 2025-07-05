import { useState } from 'react'

const Counterr = () => {
  const [counter, setCount] = useState(0)


  const handleClick = () =>{
    setCount(counter + 1)
  }
  return(
    <div>
      <p>Counter: {counter}</p>
      <button onClick={handleClick}>Click to add one</button>
    </div>
    
  )
  
}

export default Counterr
