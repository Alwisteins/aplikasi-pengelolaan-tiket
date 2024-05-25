import axios from "axios";
import { useEffect, useState } from "react";
import TaskModal from "../modal/TaskModal";

type Task = { name: string; status: "string"; isFinish: boolean };
type Tasks = Task[];

export interface NewTask {
  name: string;
  status: string;
  isFinish: boolean;
}

export default function Task() {
  const [tasks, setTasks] = useState<Tasks | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<NewTask | null>(null);
  const url = "http://localhost:3000/tasks";

  const generateStyle = (taskStatus: string): string => {
    if (taskStatus == "urgent") {
      return `bg-yellow-500 text-white`;
    } else if (taskStatus == "new") {
      return `bg-green-500 text-white`;
    } else {
      return `bg-slate-200 text-slate-400`;
    }
  };

  const fetchTasks = () => {
    axios.get(url).then((response) => {
      setTasks(response.data);
    });
  };

  useEffect(() => {
    fetchTasks();
  }, [newTask]);

  useEffect(() => {
    if (newTask) {
      axios.post(url, newTask).then((response) => {
        console.log(response.data);
        setNewTask(null);
        fetchTasks();
      });
    }
  }, [newTask]);

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
          <TaskModal open={open} setOpen={setOpen} setNewTask={setNewTask} />
        </div>
        {tasks &&
          tasks.map((task) => (
            <div
              key={task.name}
              className="flex justify-between items-center p-3 border-b-2 border-slate-200"
            >
              <p className="font-medium">{task.name}</p>
              <p
                className={`${generateStyle(
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
