export type Task = {
  id: number | string;
  name: string;
  description: string;
  startDate: string;
  dueDate: string;
  members: number[] | string[];
  priority: string;
};
