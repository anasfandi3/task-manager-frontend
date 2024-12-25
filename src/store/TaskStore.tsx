import {create} from 'zustand';
import { persist } from 'zustand/middleware';

type Task = {
  id: number;
  description: string;
  due_date: string;
  completed: boolean;
  order: number;
};

type TaskState = {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
  updateTask: (updatedTask: Task) => void;
  deleteTask: (id: number) => void;
};

const useTaskStore = create(
  persist<TaskState>(
    (set) => ({
      tasks: [
        {id: 1, description: 'description 1', due_date: 'due_date1', completed: true, order: 1},
        {id: 2, description: 'description 2', due_date: 'due_date2', completed: true, order: 2},
        {id: 3, description: 'description 3', due_date: 'due_date3', completed: false, order: 3},
        {id: 4, description: 'description 4', due_date: 'due_date4', completed: false, order: 4},
      ],
      setTasks: (tasks) => set({ tasks }),
      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),
      updateTask: (updatedTask) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          ),
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
    }),
    {
      name: 'task-store', // The key in localStorage
    }
  )
);

export default useTaskStore;
