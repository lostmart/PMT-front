import { Component, inject } from '@angular/core';
import { ProjectService } from '../../service/project.service';
import { Project } from '../../../types/Project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.css',
})
export class SingleProjectComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: ProjectService = inject(ProjectService);
  foundService: Project | null | undefined = null;
  constructor() {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    this.foundService = this.housingService.getProjectById(id ? id : '');
  }
}
