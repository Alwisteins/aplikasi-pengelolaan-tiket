import { useState, useEffect } from "react";
import { useTasks } from "../../hooks/useTasks";
import { Task } from "../../types/task";
import taskStatusStyle from "../../utils/taskStatusStyle";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/fa/search";

export default function SearchModal() {
  const { tasks } = useTasks();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState<Task[] | null>(null);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    if (!tasks) return;

    const filtered = value.trim()
      ? tasks.filter((task) =>
          task.name.toLowerCase().includes(query.toLowerCase())
        )
      : tasks;

    setFilteredTasks(filtered);
  };

  return (
    <div className="z-10">
      <div className={open ? "block" : "hidden"}>
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="relative px-5 pt-14 pb-10 rounded-md space-y-3 bg-white">
            <button
              type="button"
              className="font-bold text-xl absolute top-5 right-5"
              onClick={() => setOpen(false)}
            >
              x
            </button>
            <input
              type="search"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="find task name here..."
              value={query}
              onChange={handleSearch}
              required
            />
            {filteredTasks &&
              filteredTasks.map((task) => (
                <div
                  key={task.name}
                  className="flex justify-between items-center space-x-20 p-3 border-b-2 border-slate-200"
                >
                  <p className="font-medium">{task.name}</p>
                  <p
                    className={`${taskStatusStyle(
                      task.status
                    )} text-xs py-1 px-2 rounded-lg`}
                  >
                    {task.status.toUpperCase()}
                  </p>
                </div>
              ))}
            
          </div>
        </div>
      </div>
      <button type="button" onClick={() => setOpen(true)}>
        <Icon icon={search} className="text-slate-500" />
      </button>
    </div>
  );
}
