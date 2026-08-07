import "./App.css";
import { TaskCard } from "./Components/TaskCard.tsx";

function App() {
  return (
    <>
      <div className="h-screen bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <TaskCard name="Total Tasks" Taskno="10" />
          <TaskCard name="Completed Tasks" Taskno="5" />
          <TaskCard name="Pending Tasks" Taskno="5" />
        </div>
      </div>
    </>
  );
}

export default App;
