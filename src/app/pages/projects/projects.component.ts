import { Component, inject } from '@angular/core';
import { Project } from '../../../types/Project';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../service/project.service';
import { DropdownComponent } from '../../component/ui/dropdown/dropdown.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, RouterLink, DropdownComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  housingService: ProjectService = inject(ProjectService);

  projectsList: Project[] = [];
  constructor() {
    this.projectsList = this.housingService.getAllProjects();
  }

  handleDropdownAction(action: string) {
    console.log(`Selected action: ${action}`);
  }
}
