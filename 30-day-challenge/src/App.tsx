import "./App.css";
import { TaskCard } from "./Components/TaskCard.tsx";
import { Button } from "./Components/Button.tsx";
import { TaskForm } from "./Pages/taskform.tsx";
import { useState } from "react";
import { TaskList } from "./Components/TaskList.tsx";

function App() {
  const [isopen, setIsopen] = useState(false);

  const [tasks, setTasks] = useState([]);

  const handletaskadd = (tasks) => {
    setTasks((prev) => [...prev, tasks]);
    setIsopen(false);
    console.log(tasks);
  };

  return (
    <>
      <div className="h-screen bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <TaskCard name="Total Tasks" Taskno="10" />
          <TaskCard name="Completed Tasks" Taskno="5" />
          <TaskCard name="Pending Tasks" Taskno="5" />
        </div>

        <div className="p-4">
          {/* Add task form button */}
          <Button name="Add Task" onclick={() => setIsopen(true)} />

          {/* Add task form */}
          {isopen && (
            <TaskForm
              onclick={() => setIsopen(false)}
              onAddTask={handletaskadd}
            />
          )}
        </div>

        <TaskList task={tasks} />
      </div>
    </>
  );
}

export default App;
