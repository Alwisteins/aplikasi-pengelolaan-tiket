import { useState } from "react";
import { NewTask } from "../task/Task";

interface TaskModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setNewTask: React.Dispatch<React.SetStateAction<NewTask | null>>;
}

export default function TaskModal({
  open,
  setOpen,
  setNewTask,
}: TaskModalProps) {
  const [task, setTask] = useState<string>("");
  const [status, setStatus] = useState<string>("new");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(false)

    setNewTask({ name: task, status, isFinish: false });
  };

  return (
    <div className={`${open ? "block" : "hidden"}`}>
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="relative px-5 py-8 rounded-md space-y-5 bg-white"
        >
          <button
            onClick={() => setOpen(false)}
            className="font-bold text-xl absolute right-5 top-5"
          >
            x
          </button>
          <h1 className="text-center text-lg font-semibold">CREATE NEW TASK</h1>
          <div className="flex justify-center items-center space-x-5">
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="task"
                className="text-sm font-medium text-slate-400"
              >
                TASK
              </label>
              <input
                type="text"
                id="task"
                placeholder="New Task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
                className="p-2 text-sm bg-slate-100 border border-slate-200 rounded-md"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-slate-400"
              >
                STATUS
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="new">new</option>
                <option value="urgent">urgent</option>
                <option value="default">default</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="mx-[35%] py-2 px-3 rounded-md text-white bg-blue-700"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
