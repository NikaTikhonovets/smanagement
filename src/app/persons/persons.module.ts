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
import { PersonDialogComponent } from './components/dialogs/person-dialog/person-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PersonsListComponent, PersonsPageComponent, PersonDialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(USERS_ROUTES),
    MatInputModule,
    MatTableModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  entryComponents: [PersonDialogComponent]
})
export class PersonsModule { }
