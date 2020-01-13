import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Task } from '../../../shared/entities/task';
import { TasksService } from '../../../shared/services/tasks.service';
import { TaskDialogComponent } from '../dialogs/task-dialog/task-dialog.component';
import { DIALOG_DEFAULT_CONFIG } from '../../../shared/constants/dialog-config.const';
import { MatDialog } from '@angular/material';

@Component( {
  selector: 'sm-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: [ './tasks-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class TasksListComponent {
  public displayedColumns: string[] = [ 'taskId', 'name', 'period', 'skills', 'actions' ];
  public dataSource = [];

  @Input() set tasks( currentTasks: Task[] ) {
    this.dataSource = currentTasks;
  }

  constructor( private tasksService: TasksService,
               private matDialog: MatDialog ) {
  }

  public removeTask( taskId: number ): void {
    this.tasksService.removeTask( taskId ).subscribe();
  }

  public editPerson( task: Task ): void {
    const dialogRef = this.matDialog.open( TaskDialogComponent, {
      ...DIALOG_DEFAULT_CONFIG,
      data: {task, isEdit: true}
    } );

    dialogRef.afterClosed().subscribe( result => {
      if (!result) {
        return;
      }
      this.tasksService.editTask( task.taskId, result ).subscribe();
    } );
  }

}
