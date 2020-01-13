import {Routes} from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'persons',
    loadChildren: () => import('./persons/persons.module').then(module => module.PersonsModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.module').then(module => module.TasksModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./skills/skills.module').then(module => module.SkillsModule)
  },
  {
    path: '**',
    redirectTo: 'persons'
  }
];
