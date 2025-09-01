import { User } from './user.model';

export type TaskHistory = {
  id: string | number;
  taskId: string | number;
  changedBy: User | User['id'];
  changeDescription: string;
  changedAt: Date | string;
};
