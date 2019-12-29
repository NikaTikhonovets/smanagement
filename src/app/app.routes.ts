import {Routes} from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'persons',
    loadChildren: () => import('./users/users.module').then(module => module.UsersModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.module').then(module => module.TasksModule)
  },
  {
    path: '**',
    redirectTo: 'persons'
  }
];
