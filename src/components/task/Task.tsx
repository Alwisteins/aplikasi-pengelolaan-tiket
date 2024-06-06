import { useTasks } from "../../hooks/useTasks";
import { useState } from "react";
import TaskModal from "../modal/TaskModal";
import taskStatusStyle from "../../utils/taskStatusStyle";
import type { Task } from "../../types/task";

export default function Task() {
  const { tasks, addNewTask } = useTasks();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="bg-white p-8 space-y-3 grow">
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl font-bold">Tasks</h1>
          <p className="font-medium text-slate-400 text-xs">Today</p>
        </div>
        <button className="text-blue-700">View all</button>
      </div>
      <div>
        <div className="flex justify-between p-3 border-b-2 border-slate-200">
          <p className="font-medium text-slate-400">Create new task</p>
          <button
            onClick={() => setOpen(true)}
            className="px-2 font-medium bg-slate-200 rounded-lg text-slate-400"
          >
            +
          </button>
          <TaskModal open={open} setOpen={setOpen} addNewTask={addNewTask} />
        </div>
        {tasks &&
          tasks.map((task) => (
            <div
              key={task.name}
              className="flex justify-between items-center p-3 border-b-2 border-slate-200"
            >
              <p className="font-medium">{task.name}</p>
              <p
                className={`${taskStatusStyle(
                  task.status
                )} text-xs py-1 px-3 rounded-lg`}
              >
                {task.status.toLocaleUpperCase()}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
