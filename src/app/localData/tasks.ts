import { Task } from '../../types/Task';

export const tasksListData: Task[] = [
  {
    id: 1,
    name: 'Task 1',
    description: 'lorem ipsum de la task uno',
    startDate: '2021-01-01',
    dueDate: '2021-01-10',
    members: [1, 2],
    priority: 'low',
    status: 'To Do',
  },
];
