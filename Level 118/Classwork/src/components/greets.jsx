import { useEffect, useState } from 'react'


const Greets = () => {
    const[name, setName] = useState("")
    

    useEffect(() => {
        setName(`${name}`)
    },[name])


  return(
    <div>
        <h1>Change a Name</h1>
        
           <label htmlFor="1">Enter Your name: </label>
           <input type="text" placeholder='Enter Your Name' id='1' onChange={(e) => setName(e.target.value)}/> 
           <h3>Hello {name} </h3>
        
      
    </div>
    
  )
}

export default Greets
