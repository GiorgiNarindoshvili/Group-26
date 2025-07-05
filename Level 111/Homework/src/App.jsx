import React, { useState } from "react";

//1
const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleClick = () => {
    const input = document.getElementById("task");
    if (input.value) {
      setTaskList([...taskList, input.value]);
      input.value = "";
      
    }
  };

  const handleRemoveClick = () => {
    if (selectedTask !== null) {
      setTaskList(taskList.filter((_, i) => i !== selectedTask));
      
    }
  };

  return (
    <main>
      <input type="text" id="task" placeholder="Enter your Task" />
      <button onClick={handleClick}>Add Task</button>
      <button onClick={handleRemoveClick}>Remove Task</button>

      <h1>Tasks:</h1>
      <ul>
        {taskList.map((tsk, i) => (
          <li key={i} onClick={() => setSelectedTask(i)}>
            {tsk}
          </li>
        ))}
      </ul>
    </main>
  );
};

//2 Hooks in jsx allows us to create realistic and lifecycle functions, use state can be most common one,by using the use state we can create an event which will contribute to state variables in components and render them and also controller of event, that controller can change or control our created events, which will make some changes in rendering too


export default App;