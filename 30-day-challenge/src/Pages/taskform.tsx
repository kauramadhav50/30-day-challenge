import { Button } from "../Components/Button.tsx";
import { useState } from "react";

export function TaskForm({ onclick, onAddTask }) {
  const [formData, setFormData] = useState({
    task: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    onclick();

    onAddTask(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-full max-w-2xl mx-4 p-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl">
        {/* Close Button */}
        <div
          className="absolute top-4 right-5 text-white/70 hover:text-white text-2xl cursor-pointer transition"
          onClick={onclick}
        >
          ×
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold text-white mb-6">Add Task</h1>
        </div>

        <form
          className="grid grid-cols-1 md:grid-cols-1 gap-4"
          onSubmit={handleSubmit}
          method="post"
        >
          <input
            type="text"
            placeholder="Task name"
            name="task"
            value={formData.task}
            onChange={handleChange}
            className="bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg p-3 outline-none focus:bg-white/20 focus:border-white/40 transition"
            required
          />
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg p-3 outline-none focus:bg-white/20 focus:border-white/40 transition"
          >
            <option disabled value="" className="text-gray-500 ">
              Select Priority
            </option>
            <option value="low" className="text-red-500 ">
              Low
            </option>
            <option value="medium" className="text-yellow-500 ">
              Medium
            </option>
            <option value="high" className="text-green-500 ">
              High
            </option>
          </select>
          <Button name="Add Task" type="submit" onclick={() => {}}  />
        </form>
      </div>
    </div>
  );
}
