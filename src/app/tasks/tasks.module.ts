import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TASK_ROUTES } from './tasks.routes';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@NgModule({
  declarations: [
    TasksListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(TASK_ROUTES)
  ]
})
export class TasksModule { }
