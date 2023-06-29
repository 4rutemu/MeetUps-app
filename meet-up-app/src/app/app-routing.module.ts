import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./modules/auth/components/login/login.component";
import {FormsModule} from "@angular/forms";
import {MeetupBoardComponent} from "./modules/meetup-board/components/meetup-board/meetup-board.component";
import {UsersListComponent} from "./modules/users-list/components/users-list/users-list.component";
import {authGuard} from "./guards/auth.guard";
import {isAdminGuard} from "./guards/is-admin.guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'meetups', component: MeetupBoardComponent, canActivate: [authGuard]},
  {path: 'users-list', component: UsersListComponent, canActivate: [authGuard, isAdminGuard]},
  {path: '', redirectTo: 'login', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
