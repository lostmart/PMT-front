import { Project } from './Project';
import { Task } from './Task';

export type Dashboard = {
  projects: Project[];
  tasks: Task[];
  notifications: Notification[];
};
