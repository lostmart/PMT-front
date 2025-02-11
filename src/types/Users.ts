import { Task } from './Task';

export type User = {
  id: number | string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'collaborator' | 'guest';
  assignedTasks: Task[] | Task['id'][];
};
