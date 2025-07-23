import React,{ useState } from 'react'


const students = [
  {
    id: 1, 
    name: "Alice", 
    grade: "A"
  },
  {
    id: 2, 
    name: "Bob", 
    grade: "B"
  },
  {
    id: 3, 
    name: "Charlie", 
    grade: "C"
  },
  {
    id: 4, 
    name: "Diana", 
    grade: "A"
  },
  {
    id: 5, 
    name: "Ethan", 
    grade: "B"
  },
  {
    id: 6, 
    name: "Fiona", 
    grade: "C"
  },
  {
    id: 7, 
    name: "George", 
    grade: "B"
  },
   {
    id: 8, 
    name: "Hannah", 
    grade: "A"
  }
];



const App =() => {
  const[studentList, setStudentList] = useState(students)
  const handleSubmit = (e) => {
    e.preventDefault()
    const{name, grade} = e.target
    setStudentList(prev=>[...prev, {name: name.value, grade: grade.value}])
  }

  const handleDelete = (de) => {
    setStudentList(prev => prev.filter(curValue=> curValue.id !== de))
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="sname">Enter Student's name: </label>
        <input type="text" id='sname' placeholder="Enter Student's name" name='name'/>
      </div>
      <div>
        <label htmlFor="grade">Enter Student's Grade: </label>
        <input type="text" id='grade' placeholder="Enter Student's grade" name='grade'/>
      </div>
      <button id='mainbutton' style={{border:'none', background: 'skyblue', borderRadius: '5px', height: '30px', cursor: 'pointer'}}>Search the Results!</button>
      </form>
      
      <div>
        {studentList.map((student, index) => {
          return(
            <ul key={index}>
              
              <li>{student.name}</li>
              <li>{student.grade}</li>
              <button onClick={() => handleDelete(student.id)}>Delete Student</button>
            </ul>
          )
        })}
      </div>
    </div>
  )
  
}

export default App
