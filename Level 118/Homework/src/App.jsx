import { useEffect, useState } from 'react'

let timerid

const App = () => {
    const[time, setTime] = useState(() => parseInt(localStorage.getItem("time")))
    const[running, setRunning] = useState(() => parseInt(localStorage.getItem("running") === "true"))


    useEffect(() => {
      localStorage.setItem("time", time)
      localStorage.setItem("running", running)
    }, [running, time])

    useEffect(() => {
      if(running){
        clearInterval(timerid)
        timerid = setInterval(() => {
          setTime((t) => {
            if(t <= 1){
              clearInterval(timerid)
              setRunning(false)
              return 0
            }
            return t - 1
          })
        }, 1000)
      }
    }, [running])

  return(
    <main>
      <input type="number" placeholder='Enter a number' onChange={((e) => setTime(parseInt(e.target.value)))}/> <br /><br /><br /><br />
      <button onClick={() => setRunning(true)}>Start Countdown</button>
      <br /><br />
      <button onClick={() => {
        clearInterval(timerid)
        setRunning(false)
      }}>Stop Timer</button> <br /><br />
      <button onClick={() => {
        clearInterval(timerid)
        setRunning(false)
        setTime(0)
      }}>Refresh</button>
      <h3>Here's Our Time: {time === 0 ? "Time Is Up!" : time + " seconds"}</h3>
    </main>
    
    
  )
  
}

export default App
