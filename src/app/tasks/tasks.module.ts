import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TASKS_ROUTES } from './tasks.routes';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TasksPageComponent } from './components/tasks-page/tasks-page.component';
import {
  MatButtonModule,
  MatChipsModule, MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatSelectModule,
  MatTableModule
} from '@angular/material';
import { TaskDialogComponent } from './components/dialogs/task-dialog/task-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';

@NgModule({
  declarations: [
    TasksListComponent,
    TasksPageComponent,
    TaskDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( TASKS_ROUTES ),
    MatButtonModule,
    MatTableModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    SatDatepickerModule,
    MatDatepickerModule,
    SatNativeDateModule
  ],
  entryComponents: [
    TaskDialogComponent
  ]
})
export class TasksModule { }
