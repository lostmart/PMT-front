import { Project, Task } from '@models';

export type Dashboard = {
  projects: Project[];
  tasks: Task[];
  notifications: Notification[];
};
