import { Task } from '@models';

export type UserRole = 'admin' | 'collaborator' | 'guest';

export type User = {
  id: number | string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  assignedTasks: Task[] | Task['id'][];
};
