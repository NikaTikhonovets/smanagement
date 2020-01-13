import { Routes } from '@angular/router';
import { TasksPageComponent } from './components/tasks-page/tasks-page.component';

export const TASKS_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: TasksPageComponent
      }
    ]
  }
];
