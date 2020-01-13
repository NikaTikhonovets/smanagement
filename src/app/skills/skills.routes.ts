import { Routes } from '@angular/router';
import { SkillsPageComponent } from './components/skills-page/skills-page.component';

export const SKILLS_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: SkillsPageComponent
      }
    ]
  }
];
