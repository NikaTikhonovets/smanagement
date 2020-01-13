import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Task } from '../../../shared/entities/task';
import { TasksService } from '../../../shared/services/tasks.service';
import { DIALOG_DEFAULT_CONFIG } from '../../../shared/constants/dialog-config.const';
import { TaskDialogComponent } from '../dialogs/task-dialog/task-dialog.component';

@Component({
  selector: 'sm-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksPageComponent implements OnInit {
  public tasks: Task[] = [];
  constructor(private matDialog: MatDialog,
              private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  public addTask(): void {
    const dialogRef = this.matDialog.open(TaskDialogComponent, {
      ...DIALOG_DEFAULT_CONFIG,
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.tasksService.addTask(result).subscribe();
    });
  }

}
