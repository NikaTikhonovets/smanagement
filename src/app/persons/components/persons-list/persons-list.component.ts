import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PERSONS } from '../../../shared/constants/persons.const';
import {PersonsService} from '../../persons.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'sm-users-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonsListComponent {
  public displayedColumns: string[] = ['personId', 'name', 'skills', 'actions'];
  public dataSource = PERSONS;

  constructor(private personsService: PersonsService,
              private matDialog: MatDialog) {}

  public removePerson(personId: number): void {
    this.personsService.removePerson(personId);
  }

  public editPerson(): void {

  }
}
