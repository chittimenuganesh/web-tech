import { useState } from "react";
import Nav from "./Nav";
import Input from "./Input";
import Show from "./Show";

function App() {
  const [tasks, setTasks] = useState([]);

  const TaskHandle = (task) => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const deleteHandle = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editHandle = (index, newText) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    ));
  };

  const completeTask = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  const togglePriority = (index) => {
  const newTasks = tasks.map((task, i) =>
    i === index ? { ...task, priority: !task.priority } : task
  );
  setTasks(newTasks);
  };


  return (
    <>
      <Nav />
      <Input addTask={TaskHandle} />
      <Show
        tasks={tasks}
        deleteTask={deleteHandle}
        editTask={editHandle}
        completeTask={completeTask}
        togglePriority={togglePriority}
      />
    </>
  );
}

export default App;
