export type Project = {
  id: number | string;
  name: string;
  description: string;
  startDate: string;
  owner: number | string;
  tasks: number[] | string[];
  members?: number[];
  progress: number
};

export function isValidProgress(progress: number): boolean {
  return progress >= 0 && progress <= 100;
}