import { Routes } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';

export const TASK_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: TasksListComponent
      }
    ]
  }
];
