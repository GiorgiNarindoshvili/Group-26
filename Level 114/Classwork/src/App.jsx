import{ useState } from 'react'


const App = () => {
    const[usInfo, setUsInfo] = useState({});
    
    const handleEvent = ({ target }) =>{
        const { name, value } = target
        setUsInfo(prev => {
            const newUser = {...prev, [name]: value};
            return newUser
        })
     }
        

    
    return(
    <div>
        <label htmlFor="namee">Enter Your Name</label>
        <input type="text" 
                name='firstname'
                placeholder='Enter Your First Name'
                id='namee'
                 onChange={handleEvent}
            />
            <label htmlFor="lastname">Enter Your Last Name</label>
            <input type="text" 
                name='lastname'
                placeholder='Enter Your Last Name'
                id='lastname'
                 onChange={handleEvent}
            />
        
        <div>
            <p><strong>First Name: {usInfo.firstname || ""}</strong></p>
            <p><strong>Last Name: {usInfo.lastname || ""}</strong></p>
        </div>
    </div>
    )
  
}

export default App
