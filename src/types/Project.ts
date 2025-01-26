export type Project = {
  id: number | string;
  name: string;
  description: string;
  startDate: string;
  owner: number;
  tasks: number[] | string[];
  members?: number[];
};
