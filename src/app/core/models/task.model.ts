import { TaskHistory } from './task-history.model';

export type Task = {
  id: number | string;
  name: string;
  description: string;
  startDate: string;
  dueDate: string;
  members: number[] | string[];
  priority: 'low' | 'medium' | 'high';
  status: 'To Do' | 'In Progress' | 'Completed';
  history: TaskHistory[];
};
