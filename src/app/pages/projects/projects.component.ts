import { Component, inject } from '@angular/core';
import { Project } from '../../../types/Project';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../service/project.service';
import { DropdownComponent } from '../../component/ui/dropdown/dropdown.component';
import { DialogueComponent } from '../../component/ui/dialogue/dialogue.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, RouterLink, DropdownComponent, DialogueComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  housingService: ProjectService = inject(ProjectService);

  projectsList: Project[] = [];
  showDialogue: boolean | string = false;

  constructor() {
    this.projectsList = this.housingService.getAllProjects();
  }

  handleDropdownClick(action: MouseEvent) {
    console.log('Dropdown clicked', action);
  }

  handleDropdownAction(action: string) {
    console.log(`Selected action: ${action}`);
    if (action === 'delete') {
      console.log('Deleting project');
    }
  }
}
