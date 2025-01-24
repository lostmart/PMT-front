import { Injectable } from '@angular/core';
import { Project } from '../../types/Project';
import { projectsListData } from './projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  protected projectList: Project[] = projectsListData;

  constructor() {}

  getAllProjects(): Project[] {
    return this.projectList;
  }

  getProjectById(id: string): Project | undefined {
    return this.projectList.find((project) => project?.id === parseInt(id, 10));
  }
}
