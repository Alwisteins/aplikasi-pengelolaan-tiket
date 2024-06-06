import { FC } from "react";
import type { Task } from "../../types/task";

interface TaskModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addNewTask: (task: Task) => Promise<void>
}

const TaskModal: FC<TaskModalProps> = ({ open, setOpen, addNewTask }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = form.name.value;
    const status = form.status.value;
    const isFinish = form.isFinish.checked;
    addNewTask({ name, status, isFinish });
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      <div className="p-6 rounded-lg bg-white">
        <h2 className="text-center text-md font-semibold">Create New Task</h2>
        <form onSubmit={handleSubmit}>
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
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Is Finish
              <input type="checkbox" name="isFinish" className="mt-1 block" />
            </label>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
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