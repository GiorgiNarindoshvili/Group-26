import { useState } from 'react'
import Counterr from './components/Counter'
const App = () => {
  const [taskList, setTaskList] = useState([])

  const handleClick = () => {
    const input = document.getElementById("task");
    if(input.value){
      setTaskList([...taskList, input.value]);
      input.value = "";
    }
  }
  return(
    <main>
      <input type="text" id="task" placeholder='Enter your Task'/>
      <button onClick={handleClick}>Add Task</button>
      <h1>Tasks: </h1>
      <ul>
        {taskList.map((tsk, i) => <li key={i}>{tsk}</li>)}
      </ul>
      <Counterr/>
    </main>
  )
}

export default App
