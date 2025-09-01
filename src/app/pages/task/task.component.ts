import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { themeStyles } from '../../../styles';
import { ButtonComponent } from '../../component/ui/button/button.component';
import { TaskService } from '../../core/services/task.service';
import { Task } from '@models';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  taskService: TaskService = inject(TaskService);
  foundTask: Task | null | undefined = null;
  theme = themeStyles.secondary;
  constructor() {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    this.foundTask = this.taskService.getTaskById(id ? id : '');
  }
}
