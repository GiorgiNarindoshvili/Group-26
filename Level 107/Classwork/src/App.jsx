import { useState } from 'react'
import React from 'react'
import "./index.css"

function App() {
  function hover(){
    alert(prompt("Enter Your Name"))
    
    
    
  }
  return <button onClick={hover}>Click Button to Enter</button>
}

export default App
