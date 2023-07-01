import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./modules/auth/components/login/login.component";
import {FormsModule} from "@angular/forms";
import {MeetupBoardComponent} from "./modules/meetup-board/components/meetup-board/meetup-board.component";
import {UsersListComponent} from "./modules/users-list/components/users-list/users-list.component";
import {authGuard} from "./guards/auth.guard";
import {isAdminGuard} from "./guards/is-admin.guard";
import {MyMeetupsComponent} from "./modules/meetup-board/components/my-meetups/my-meetups.component";
import {CreateMeetupComponent} from "./modules/meetup-board/components/create-meetup/create-meetup.component";
import {EditMeetupComponent} from "./modules/meetup-board/components/edit-meetup/edit-meetup.component";
import {EditUserComponent} from "./modules/users-list/components/edit-user/edit-user.component";
import {RegitrationComponent} from "./modules/auth/components/regitration/regitration.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegitrationComponent},
  {path: 'meetups', component: MeetupBoardComponent, canActivate: [authGuard]},
  {path: 'my-meetups', component: MyMeetupsComponent, canActivate: [authGuard]},
  {path: 'users-list', component: UsersListComponent, canActivate: [authGuard, isAdminGuard]},
  {path: 'create-meetup', component: CreateMeetupComponent, canActivate: [authGuard]},
  {path: 'edit-meetup', component: EditMeetupComponent, canActivate: [authGuard]},
  {path: 'edit-user', component: EditUserComponent, canActivate: [authGuard, isAdminGuard]},
  {path: '', redirectTo: 'login', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
