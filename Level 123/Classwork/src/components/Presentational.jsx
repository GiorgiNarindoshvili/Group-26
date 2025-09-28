import { useState } from "react"
import "../components/Container"
const Presentational = ({userName, password, setUsername, setPassword}) => {
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

export default Presentational;