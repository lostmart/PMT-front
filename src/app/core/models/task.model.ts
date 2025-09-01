import { TaskHistory, User } from '@models';

export type TaskStatus = 'To Do' | 'In Progress' | 'Completed';

export type TaskPriority = 'low' | 'medium' | 'high';

export type TaskMember = {
  id: User['id'];
  userName: User['userName'];
};

export type Task = {
  id: number | string;
  name: string;
  description: string;
  startDate: string;
  dueDate: string;
  members: TaskMember[] | number[];
  priority: TaskPriority;
  status: TaskStatus;
  history?: TaskHistory[];
};
