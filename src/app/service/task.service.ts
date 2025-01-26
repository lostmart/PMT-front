import { Injectable } from '@angular/core';
import { Task } from '../../types/Task';
import { tasksListData } from '../localData/tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  protected tasksList: Task[] = tasksListData;

  getAllTasks(): Task[] {
    return this.tasksList;
  }

  getTaskById(id: string): Task | undefined {
    return this.tasksList.find((task) => task?.id === parseInt(id, 10));
  }
}
