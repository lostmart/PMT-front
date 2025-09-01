import { Component, inject } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '@models';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { themeStyles } from '@shared/components/theme/styles';

import { ButtonComponent } from '@shared/components/ui';
import { NgFor, NgIf } from '@angular/common';
import { ProgressBarComponent } from '@shared/components/ui';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [RouterLink, ButtonComponent, NgIf, NgFor, ProgressBarComponent],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.css',
})
export class SingleProjectComponent {
  // for <app-button [variant]="variant">
  variant: 'primary' | 'secondary' | 'third' | 'danger' | 'neutral' = 'neutral';

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: ProjectService = inject(ProjectService);
  foundProject: Project | null | undefined = null;
  theme = themeStyles.secondary;

  currentProgress = 25;

  constructor() {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    this.foundProject = this.housingService.getProjectById(id ? id : '');
  }
  get tasksList(): any[] {
    return this.foundProject?.tasks || [];
  }
}
