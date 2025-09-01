import { TaskHistory } from '@models';

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
