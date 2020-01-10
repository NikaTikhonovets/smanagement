import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import {AddPersonDialogComponent} from '../dialogs/add-person-dialog/add-person-dialog.component';

@Component({
  selector: 'sm-users-page',
  templateUrl: './persons-page.component.html',
  styleUrls: ['./persons-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonsPageComponent {
  constructor(private matDialog: MatDialog) {}

  public addPerson(): void {
    const dialogRef = this.matDialog.open(AddPersonDialogComponent, {
      width: '50%',
      maxWidth: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
