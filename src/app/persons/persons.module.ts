import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsListComponent } from './components/persons-list/persons-list.component';
import { RouterModule } from '@angular/router';
import { USERS_ROUTES } from './persons.routes';
import { PersonsPageComponent } from './components/persons-page/persons-page.component';
import {
  MatButtonModule,
  MatChipsModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import { AddPersonDialogComponent } from './components/dialogs/add-person-dialog/add-person-dialog.component';

@NgModule({
  declarations: [PersonsListComponent, PersonsPageComponent, AddPersonDialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(USERS_ROUTES),
    MatInputModule,
    MatTableModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule
  ],
  entryComponents: [AddPersonDialogComponent]
})
export class PersonsModule { }
