type Roles = 'admin' | 'collaborator' | 'guest';

export type User = {
  id: number | string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  role: Roles;
  tasks: number[] | string[];
};
