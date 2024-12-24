// store.js
import { atom } from 'recoil';

export const userTasksState = atom({
  key: 'userTasksState', 
  default: [
    {id: 1, description: 'description 1', due_date: 'due_date1', completed: true, order: 1},
    {id: 2, description: 'description 2', due_date: 'due_date2', completed: true, order: 2},
    {id: 3, description: 'description 3', due_date: 'due_date3', completed: false, order: 3},
    {id: 4, description: 'description 4', due_date: 'due_date4', completed: false, order: 4},
  ],        
});