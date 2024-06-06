import { useState, useEffect } from "react";
import axios from "axios";
import { Task } from "../task/Task";
import { generateStyle } from "../task/Task";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/fa/search";

interface FetchTasksParams {
  url: string;
  setTasks: (tasks: Task[]) => void;
  setFilteredTasks: (task: Task[]) => void;
}

const fetchTasks = async ({
  url,
  setTasks,
  setFilteredTasks,
}: FetchTasksParams) => {
  try {
    const response = await axios.get(url);
    const tasks = response.data as Task[];
    setTasks(tasks);
    setFilteredTasks(tasks);
  } catch (err) {
    console.error("Error fetching tasks:", err);
  }
};

const filterTasks = (tasks: Task[] | null, query: string): Task[] | null => {
  if (!tasks) return null;
  if (!query.trim()) return tasks;
  return tasks.filter((task) =>
    task.name.toLowerCase().includes(query.toLowerCase())
  );
};

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [filteredTasks, setFilteredTasks] = useState<Task[] | null>(null);
  const url = "http://localhost:3000/tasks";

  useEffect(() => {
    fetchTasks({ url, setTasks, setFilteredTasks });
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    setFilteredTasks(filterTasks(tasks, value));
  };

  return (
    <div className="z-10">
      <div className={open ? "block" : "hidden"}>
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="relative px-5 py-8 rounded-md space-y-5 bg-white">
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
                    className={`${generateStyle(
                      task.status
                    )} text-xs py-1 px-2 rounded-lg`}
                  >
                    {task.status.toUpperCase()}
                  </p>
                </div>
              ))}
            <div className="flex justify-center font-bold text-lg">
              <button onClick={() => setOpen(false)}>x</button>
            </div>
          </div>
        </div>
      </div>
      <button type="button" onClick={() => setOpen(true)}>
        <Icon icon={search} className="text-slate-500" />
      </button>
    </div>
  );
}
