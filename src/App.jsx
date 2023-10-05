import React, { useState } from "react";
import "./styles/global.css";
import Navigation from "./components/Navigation";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  let uuid = self.crypto.randomUUID();

  function addTask(newTask) {
    const task = {
      id: uuid,
      ...newTask,
    };
    console.log("New Array of Tasks:", [...tasks, task]);
    setTasks((oldList) => [...oldList, task]);
  }

  function deleteTask(id) {
    const newArray = tasks.filter((item) => item.id !== id);
    setTasks(newArray);
  }

  return (
    <div className="centered-container">
      <div>
        <Navigation />
        {/* <TaskForm onSubmit={addTask} />  */}
        <TaskList tasks={tasks} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;
