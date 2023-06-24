import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupBoardComponent } from './components/meetup-board/meetup-board.component';
import { MeetupCardComponent } from './components/meetup-card/meetup-card.component';
import {FormsModule} from "@angular/forms";



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
    FormsModule
  ]
})
export class MeetupBoardModule { }
