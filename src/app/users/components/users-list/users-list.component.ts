import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PERSONS } from '../../../shared/constants/persons.const';

@Component({
  selector: 'sm-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  displayedColumns: string[] = ['personId', 'name', 'skills'];
  dataSource = PERSONS;
}
