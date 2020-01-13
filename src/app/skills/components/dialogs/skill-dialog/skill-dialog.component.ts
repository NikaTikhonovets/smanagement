import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Person } from '../../../../shared/entities/person';
import { get } from 'lodash';
import { TasksService } from '../../../../shared/services/tasks.service';
import { PersonsService } from '../../../../shared/services/persons.service';
import { forkJoin } from 'rxjs';
import { Task } from '../../../../shared/entities/task';
import { Skill } from '../../../../shared/entities/skill';

@Component( {
  selector: 'sm-skill-dialog',
  templateUrl: './skill-dialog.component.html',
  styleUrls: [ './skill-dialog.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class SkillDialogComponent implements OnInit {
  public taskOptions: Task[] = [];
  public personOptions: Person[] = [];
  public skillForm: FormGroup;

  constructor( public dialogRef: MatDialogRef<SkillDialogComponent>,
               @Inject( MAT_DIALOG_DATA ) public data: { skill: Skill, isEdit: boolean },
               private formBuilder: FormBuilder,
               private tasksService: TasksService,
               private personsService: PersonsService ) {
  }

  ngOnInit(): void {
    forkJoin([this.tasksService.getTasks(), this.personsService.getPersons()])
    .subscribe( ( [tasks, persons] ) => {
      this.taskOptions = tasks;
      this.personOptions = persons;
      this.skillForm = this.formBuilder.group( {
        name: [ get( this.data, 'skill.name', '' ), Validators.required ],
        type: [ get( this.data, 'skill.type', '' ), Validators.required ],
        tasks: [ [], Validators.required ],
        persons: [ [], Validators.required ]
      } );
    } );
  }

  public onSubmit(): void {
    const formValues = this.skillForm.value;
    const selectedTasks = this.taskOptions.filter( ( task ) => formValues.tasks.includes( task.taskId ) );
    const selectedPersons = this.personOptions.filter( ( person ) => formValues.persons.includes( person.personId ) );
    const currentPerson = {
      ...this.skillForm.value,
      tasks: selectedTasks,
      persons: selectedPersons
    };
    this.dialogRef.close( currentPerson );
  }
}
