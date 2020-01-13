import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PersonDialogComponent } from '../dialogs/person-dialog/person-dialog.component';
import { PersonsService } from '../../../shared/services/persons.service';
import { Person } from '../../../shared/entities/person';
import { DIALOG_DEFAULT_CONFIG } from '../../../shared/constants/dialog-config.const';

@Component({
  selector: 'sm-users-page',
  templateUrl: './persons-page.component.html',
  styleUrls: ['./persons-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonsPageComponent implements OnInit {
  public persons: Person[] = [];
  constructor(private matDialog: MatDialog,
              private personsService: PersonsService) {}

  ngOnInit(): void {
    this.personsService.getPersons().subscribe((persons) => {
      this.persons = persons;
    });
  }

  public addPerson(): void {
    const dialogRef = this.matDialog.open(PersonDialogComponent, {
      ...DIALOG_DEFAULT_CONFIG,
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.personsService.addPerson(result).subscribe();
    });
  }
}
