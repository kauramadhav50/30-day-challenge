import { Button } from "./Button.tsx";

export function TaskList({ task, onTaskComplete }) {

  
  
  return (
    <div className="w-full mt-6">

      {/* Header */}
      <div className="hidden md:grid grid-cols-4 gap-4 p-4 bg-gray-800 text-gray-200 font-bold text-lg rounded-t-lg">
        <div className="text-center border-r border-gray-600">
          S No.
        </div>

        <div className="text-center border-r border-gray-600">
          Task Name
        </div>

        <div className="text-center border-r border-gray-600">
          Task Priority
        </div>

        <div className="text-center">
          Actions
        </div>
      </div>

      {/* List */}
      <div className="space-y-3 md:space-y-0">
        {task.map((t, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-700 text-gray-200 border border-gray-600 md:border-t-0 rounded-lg md:rounded-none"
          >

            {/* S No. */}
            <div className="flex md:justify-center items-center gap-2 md:border-r md:border-gray-600">
              <span className="md:hidden font-semibold text-gray-400">
                S No.:
              </span>

              <span className="font-bold text-lg">
                {index + 1}
              </span>
            </div>

            {/* Task Name */}
            <div className="flex md:justify-center items-center gap-2 md:border-r md:border-gray-600">
              <span className="md:hidden font-semibold text-gray-400">
                Task:
              </span>

              <span className="font-semibold text-lg">
                {t.task}
              </span>
            </div>

            {/* Priority */}
            <div className="flex md:justify-center items-center gap-2 md:border-r md:border-gray-600">
              <span className="md:hidden font-semibold text-gray-400">
                Priority:
              </span>

              <span className="font-semibold text-lg capitalize">
                {t.priority}
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap justify-start md:justify-center gap-2">
              <Button
                name="Complete"
                onclick={onTaskComplete}
              />

              <Button
                name="Edit"
                onclick={() => {}}
              />

              <Button
                name="Delete"
                onclick={() => {}}
              />
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}