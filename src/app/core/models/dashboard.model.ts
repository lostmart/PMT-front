import { Project } from "./project.model";
import { Task } from "./task.model";

export type Dashboard = {
  projects: Project[];
  tasks: Task[];
  notifications: Notification[];
};