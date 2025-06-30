import { useState } from 'react'
import React from 'react'
import Parent from './components/Parent'
import Child from './components/Child'
const App = () =>{
  const handleClick = () =>{
    alert("Button is clicked!")
  }
  return(
    <main>
      <Parent onClick={handleClick}>
        <p>Hello</p>
        <h1>React</h1>
      </Parent>
    </main>
  )
}
export default App
