import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Person } from '../../../../shared/entities/person';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { get } from 'lodash';
import { SkillsService } from '../../../../shared/services/skills.service';
import { Skill } from '../../../../shared/entities/skill';

@Component( {
  selector: 'sm-person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: [ './person-dialog.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class PersonDialogComponent implements OnInit {
  public personForm: FormGroup;
  public skillOptions: Skill[] = [];

  constructor( public dialogRef: MatDialogRef<PersonDialogComponent>,
               @Inject( MAT_DIALOG_DATA ) public data: {person: Person, isEdit: boolean},
               private formBuilder: FormBuilder,
               private skillsService: SkillsService ) {
  }

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe( ( skills ) => {
      this.skillOptions = skills;
      const currentSelectedSkills = get( this.data, 'person.skills', [] ).map( ( skill ) => skill.skillId );
      this.personForm = this.formBuilder.group( {
        name: [ get( this.data, 'person.name', '' ), Validators.required ],
        skills: [ currentSelectedSkills, Validators.required ],
      } );
    } );
  }

  public onSubmit(): void {
    const selectedSkills = this.skillOptions.filter( ( skill ) => this.personForm.value.skills.includes( skill.skillId ) );
    const currentPerson = {
      ...this.personForm.value,
      skills: selectedSkills
    };
    this.dialogRef.close( currentPerson );
  }
}
