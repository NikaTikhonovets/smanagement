import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from '../../../../shared/entities/skill';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SkillsService } from '../../../../shared/services/skills.service';
import { get } from 'lodash';
import { Task } from '../../../../shared/entities/task';

@Component( {
  selector: 'sm-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: [ './task-dialog.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class TaskDialogComponent implements OnInit {
  public taskForm: FormGroup;
  public skillOptions: Skill[] = [];

  constructor( public dialogRef: MatDialogRef<TaskDialogComponent>,
               @Inject( MAT_DIALOG_DATA ) public data: { task: Task, isEdit: boolean },
               private formBuilder: FormBuilder,
               private skillsService: SkillsService ) {
  }

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe( ( skills ) => {
      this.skillOptions = skills;
      const initialPeriod = this.data.isEdit ? {
        begin: get( this.data, 'task.startTime', null ),
        end: get( this.data, 'task.finishTime', null )
      } : null;
      const currentSelectedSkills = get( this.data, 'task.skills', [] ).map( ( skill ) => skill.skillId );

      this.taskForm = this.formBuilder.group( {
        name: [ get( this.data, 'task.name', '' ), Validators.required ],
        period: [ initialPeriod, Validators.required ],
        skills: [ currentSelectedSkills, Validators.required ],
      } );
    } );
  }

  public onSubmit(): void {
    const selectedSkills = this.skillOptions.filter( ( skill ) => this.taskForm.value.skills.includes( skill.skillId ) );
    const currentTask = {
      name: this.taskForm.value.name,
      skills: selectedSkills,
      startTime: this.taskForm.value.period.begin,
      finishTime: this.taskForm.value.period.end,
    };
    this.dialogRef.close( currentTask );
  }
}
