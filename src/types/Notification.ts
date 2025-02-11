export type Notification = {
  id: string | number;
  userId: string | number;
  message: string;
  type: 'task-assigned' | 'task-updated' | 'project-invitation';
  read: boolean;
  createdAt: Date | string;
};
