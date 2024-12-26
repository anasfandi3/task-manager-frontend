import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import Axios from '@/api/Axios';

type Task = {
  id: number;
  description: string;
  due_date: string;
  completed: boolean;
  order: number;
};

type TaskState = {
  tasks: Task[];
  isEditMode: boolean;
  setEditMode: (mode: boolean) => void;
  fetchTasks: () => void;
  setTasks: (tasks: Task[]) => void;
  addTask: (description: string, due_date: string) => void;
  updateTask: (updatedTask: Task) => void;
  deleteTask: (id: number) => void;
};

const formatDateToYMD = (date: Date | string): string => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
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
      isEditMode: false,
      setEditMode: (isEditMode) => set({ isEditMode }),
      fetchTasks: async () => {
        try {
          const response = await Axios.get('tasks');
          set(({
            tasks: response.data.tasks.map((task: any)=>{
              task.due_date = formatDateToYMD(task.due_date)
              return task
            })
          }));
        } catch (error) {
          console.error('Failed to update task:', error);
        }
      },
      setTasks: (tasks) => set({ tasks }),
      addTask: async (description, due_date) => {
        try {
          const response = await Axios.post('tasks', {
            description: description,
            due_date: due_date,
            completed: false
          });
          set((state) => ({
            tasks: [...state.tasks, response.data.task],
          }))
        } catch (error) {
          console.error('Failed to update task:', error);
        }
      },
      updateTask: async (updatedTask) =>
      {
        try {
          const response = await Axios.put(`tasks/${updatedTask.id}`, updatedTask);
          set((state) => ({
            tasks: state.tasks.map((task) =>
              task.id === updatedTask.id ? response.data.task : task
            ),
          }));
        } catch (error) {
          console.error('Failed to update task:', error);
        }
      },
      deleteTask: async (id) => {
        try {
          await Axios.delete(`tasks/${id}`);
          set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
          }))
        } catch (error) {
          console.error('Failed to delete task:', error);
        }
      }
    }),
    {
      name: 'task-store',
    }
  )
);

export default useTaskStore;
