import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PersonsService } from '../../../shared/services/persons.service';
import { Person } from '../../../shared/entities/person';
import { PersonDialogComponent } from '../dialogs/person-dialog/person-dialog.component';
import { DIALOG_DEFAULT_CONFIG } from '../../../shared/constants/dialog-config.const';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'sm-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonsListComponent {
  public displayedColumns: string[] = ['personId', 'name', 'skills', 'actions'];
  public dataSource = [];
  @Input() set persons(currentPersons: Person[]) {
    this.dataSource = currentPersons;
  }

  constructor(private personsService: PersonsService,
              private matDialog: MatDialog) {}

  public removePerson(personId: number): void {
    this.personsService.removePerson(personId).subscribe();
  }

  public editPerson(person: Person): void {
    const dialogRef = this.matDialog.open(PersonDialogComponent, {
      ...DIALOG_DEFAULT_CONFIG,
      data: {person, isEdit: true}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.personsService.editPerson(person.personId, result).subscribe();
    });
  }
}
