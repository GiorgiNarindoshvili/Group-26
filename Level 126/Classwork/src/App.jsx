import { useToggle } from "./hooks/useToggle"


const App = () => {
  const[toggle, handleToggle] = useToggle()

  return(
   <>
      <div id="boxtchng" style=
      {{backgroundColor: toggle, 
      width: "200px", 
      height:"200px", 
      transition: "0.4s"}}></div>


      <button id="red" onClick={() => handleToggle("red")}>Red</button>
      <button id="yellow" onClick={() => {handleToggle("yellow")}}>Yellow</button>
      <button id="green" onClick={() => handleToggle("green")}>Green</button>
   </>
     
    
    
  )
}
 
export default App
