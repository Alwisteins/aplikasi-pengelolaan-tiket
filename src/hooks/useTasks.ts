import { useState, useEffect } from "react";
import axios from "axios";
import type { Task } from "../types/task";

const url = "http://localhost:3000/tasks";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [newTask, setNewTask] = useState<Task | null>(null);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(url);
      setTasks(response.data);
    } catch (error) {
      console.log("Error fetching tasks: " + error);
    }
  };

  const addNewTask = async (task: Task) => {
    try {
      setNewTask(task);
      await axios.post(url, task);
    } catch (error) {
      console.log("Error adding new task: " + error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [newTask]);

  return { tasks, fetchTasks, addNewTask };
};
