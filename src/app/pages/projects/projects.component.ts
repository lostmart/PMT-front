import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {
    this.projectsList = this.housingService.getAllProjects();
  }

  isDropDownOpen(id: string | number) {
    return this.selectedId === id;
  }

  // toggle dropdown for each project
  handleDropdownClick(event: MouseEvent, id: string | number) {
    event.stopPropagation();
    this.selectedId = id;
  }

  // actions for dropdown
  handleDropdownAction(
    action: 'edit' | 'delete' | 'view',
    id: string | number
  ) {
    console.log(`Selected project id: ${id}`);
    console.log(`Selected action: ${action}`);
    this.setShowDialogue(action, id);
    if (action === 'delete') {
      console.log('Deleting project');
    }
  }

  setShowDialogue(action: 'edit' | 'delete' | 'view', id: string | number) {
    this.showDialogue = !this.showDialogue;
    this.goToProject(id);
  }

  goToProject(id: string | number) {
    this.router.navigate(['/project', id]);
  }
}
