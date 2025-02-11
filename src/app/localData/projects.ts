import { Project } from '../../types/Project';

export const projectsListData: Project[] = [
  {
    id: 1,
    name: 'Project 1',
    description: 'Description 1',
    startDate: '2021-01-01',
    owner: 1,
    tasks: [1, 2, 3],
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'Description 2',
    startDate: '2021-02-01',
    owner: 2,
    tasks: [],
    members: [1, 2, 3],
  },
  {
    id: 3,
    name: 'Project 3',
    description: 'Description 3',
    startDate: '2021-03-01',
    owner: 3,
    tasks: [7, 8, 9],
  },
];
