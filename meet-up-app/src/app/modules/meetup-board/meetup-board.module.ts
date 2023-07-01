import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupBoardComponent } from './components/meetup-board/meetup-board.component';
import { MeetupCardComponent } from './components/meetup-card/meetup-card.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MeetupService} from "../../services/meetup.service";
import {HttpService} from "../../services/http.service";
import { MyMeetupsComponent } from './components/my-meetups/my-meetups.component';
import { CreateMeetupComponent } from './components/create-meetup/create-meetup.component';
import { EditMeetupComponent } from './components/edit-meetup/edit-meetup.component';
import { MeetupFilterPipe } from './pipes/meetup-filter.pipe';



@NgModule({
  declarations: [
    MeetupBoardComponent,
    MeetupCardComponent,
    MyMeetupsComponent,
    CreateMeetupComponent,
    EditMeetupComponent,
    MeetupFilterPipe
  ],
  exports: [
    MeetupBoardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    MeetupService,
    HttpService,
    MeetupFilterPipe
  ]
})
export class MeetupBoardModule { }
