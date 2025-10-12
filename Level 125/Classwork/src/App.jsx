import { useState } from 'react'
import './css.css'
const div2st = {
  backgroundColor: "green",
  color: "blue"
}

const App = () => {
  return(
    <>
      <div id="div1" style = {{background: "brown", color: "red"}}>
        <p>Hello World</p>
        <p>Hello Giorgi</p>
      </div><br /><br /><br />
      <div id='div2' style={div2st}>
        <p>React Component</p>
        <p>Hello</p>
      </div><br /><br /><br /><br />
      <div id='div3'>
        <p>Web Development</p>
        <p>React</p>
      </div>
    </>
    
  )
}

export default App
