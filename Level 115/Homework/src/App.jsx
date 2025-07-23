import { useState } from 'react'
import React from 'react'


const App = () => {
  const[studentList, setStudentList] = useState([])

  const handleSubmit = (e) =>{
    e.preventDefault()
    const{name, grade} = e.target
    setStudentList(prev => [...prev,{name: name.value, grade: grade.value}])
  }
  const handleDelete = (dele) =>{
    setStudentList(prev=>prev.filter(current => current.id !== dele))
  }



  return(
    <div>
      <form onSubmit = {handleSubmit}>
        <div>
          <label htmlFor="name">Enter Student's Name: </label>
          <input type="text" id='name' name='name' required/>
        </div>
        <div>
          <label htmlFor="grade">Enter Student's Grade: </label>
          <input type="text" id='grade' name='grade' required/>
        </div>
        <button id='mainbutton' style={{border:'none', background: 'skyblue', borderRadius: '5px', height: '30px', cursor: 'pointer'}}>Search the Results!</button>
        
        
      </form>
      <div>
          {studentList.map((curStudent, index) => {
            return(
              <ul key={index}>
              <li>{curStudent.name}</li>
              <li>{curStudent.grade}</li>
              <button onClick={() => handleDelete(curStudent.id)}>Delete Student</button>
            </ul>
            )
            
          })}
        </div>
    </div>
  )
}

export default App
