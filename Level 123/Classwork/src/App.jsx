import { useState } from 'react';

const App = () => {
  const[userName, setUsername] = useState("")
  const[password, setPassword] = useState("")



  return(
    <div>
      <h1>Registration Form: </h1>
      <div className='form1' style={{display: 'flex', flexDirection: "column", }}>
        <input type="text" placeholder = "Enter your Name" onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" placeholder='Enter Your Password' onChange={(k) => setPassword(k.target.value)}/>
      </div>
      <div>
        <p>Name: {userName}</p>
        <p>Password: {password}</p>
      </div>
    </div>
    

  )
  
}

export default App
