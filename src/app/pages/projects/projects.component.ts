import { Component, inject } from '@angular/core';
import { Project } from '../../../types/Project';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../service/project.service';
import { DropdownComponent } from '../../component/ui/dropdown/dropdown.component';
import { DialogueComponent } from '../../component/ui/dialogue/dialogue.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, RouterLink, DropdownComponent, DialogueComponent, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  housingService: ProjectService = inject(ProjectService);

  projectsList: Project[] = [];
  showDialogue: boolean | null = false;
  selectedId: string | number | null = null;

  constructor() {
    this.projectsList = this.housingService.getAllProjects();
  }

  handleDropdownClick(id: string | number) {
    console.log('Dropdown clicked', id);
    this.selectedId = id;
  }

  handleDropdownAction(action: string) {
    console.log(`Selected action: ${action}`);
    if (action === 'delete') {
      console.log('Deleting project');
    }
  }
}
