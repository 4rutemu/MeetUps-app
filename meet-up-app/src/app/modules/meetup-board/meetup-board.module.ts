import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupBoardComponent } from './components/meetup-board/meetup-board.component';
import { MeetupCardComponent } from './components/meetup-card/meetup-card.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MeetupService} from "./services/meetup.service";
import {HttpService} from "./services/http.service";



@NgModule({
  declarations: [
    MeetupBoardComponent,
    MeetupCardComponent
  ],
  exports: [
    MeetupBoardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MeetupService,
    HttpService
  ]
})
export class MeetupBoardModule { }
