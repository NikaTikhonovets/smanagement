import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { RouterModule } from '@angular/router';
import { USERS_ROUTES } from './users.routes';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { MatChipsModule, MatInputModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [UsersListComponent, UsersPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(USERS_ROUTES),
    MatInputModule,
    MatTableModule,
    MatChipsModule
  ]
})
export class UsersModule { }
