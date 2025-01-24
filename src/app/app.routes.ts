import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SingleProjectComponent } from './pages/single-project/single-project.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LogInComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'project/:id',
    component: SingleProjectComponent,
  },
  {
    path: '**',
    redirectTo: '', // Redirect to home or any other default route
  },
];
