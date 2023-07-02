import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditUserComponent } from './components/edit-user/edit-user.component';



@NgModule({
  declarations: [
    UsersListComponent,
    UserCardComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersListModule { }
