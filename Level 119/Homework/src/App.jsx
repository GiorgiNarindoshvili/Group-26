import { useEffect, useState } from 'react'



const App = () => {
  const[advice, setAdvice] = useState("")


  const fetchData = async () => {
  const response = await fetch("https://api.adviceslip.com/advice")
  const data = await response.json()
  console.log(data)
  setAdvice(data.slip.advice)
  
}
  useEffect(() => {
    fetchData()
  }, [])
  

  return(
    <main>
      <h1>Advice Generator</h1>
      <button onClick={() => setAdvice(fetchData())}>Click to get an advice</button>
      <p><strong>Your Quote:</strong> {advice}</p>
    </main>
  )
}

export default App
