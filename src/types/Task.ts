export type Task = {
  id: number | string;
  name: string;
  description: string;
  startDate: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
};
