import { Routes } from '@angular/router';
import { PersonsPageComponent } from './components/persons-page/persons-page.component';

export const USERS_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PersonsPageComponent
      }
    ]
  }
];
