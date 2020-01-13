import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsPageComponent } from './components/skills-page/skills-page.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { RouterModule } from '@angular/router';
import { SKILLS_ROUTES } from './skills.routes';
import {
  MatButtonModule,
  MatChipsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatSelectModule,
  MatTableModule
} from '@angular/material';
import { SkillDialogComponent } from './components/dialogs/skill-dialog/skill-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SkillsPageComponent, SkillsListComponent, SkillDialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild( SKILLS_ROUTES ),
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  entryComponents: [SkillDialogComponent]
})
export class SkillsModule { }
