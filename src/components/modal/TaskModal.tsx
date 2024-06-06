import { FC } from "react";
import type { Task } from "../../types/task";

interface TaskModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addNewTask: (task: Task) => Promise<void>;
}

const TaskModal: FC<TaskModalProps> = ({ open, setOpen, addNewTask }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = form.name.value;
    const status = form.status.value;
    addNewTask({ name, status, isFinish: false });
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      <div className="relative p-6 space-y-5 rounded-lg bg-white">
        <button
          type="button"
          className="font-bold text-xl absolute top-5 right-5"
          onClick={() => setOpen(false)}
        >
          x
        </button>
        <form onSubmit={handleSubmit}>
          <h2 className="text-center text-md mb-4 font-semibold">Create New Task</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
              <input
                type="text"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Status
              <input
                type="text"
                name="status"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                required
              />
            </label>
          </div>
          <div className="flex justify-center space-x-2">
            <button
              type="submit"
              className="px-3 py-2 text-slate-200 rounded-lg bg-blue-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
