import { Component, inject } from '@angular/core';
import { ProjectService } from '../../service/project.service';
import { Project } from '../../../types/Project';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { themeStyles } from '../../../styles';
import { ButtonComponent } from '../../component/ui/button/button.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [RouterLink, ButtonComponent, NgIf, NgFor],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.css',
})
export class SingleProjectComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: ProjectService = inject(ProjectService);
  foundProject: Project | null | undefined = null;
  theme = themeStyles.secondary;

  constructor() {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    this.foundProject = this.housingService.getProjectById(id ? id : '');
  }
  get tasksList(): any[] {
    return this.foundProject?.tasks || [];
  }
}
