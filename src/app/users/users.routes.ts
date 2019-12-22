import { Routes } from '@angular/router';
import { UsersPageComponent } from './components/users-page/users-page.component';

export const USERS_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: UsersPageComponent
      }
    ]
  }
];
