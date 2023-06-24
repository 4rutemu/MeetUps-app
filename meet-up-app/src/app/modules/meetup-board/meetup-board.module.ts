import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupBoardComponent } from './components/meetup-board/meetup-board.component';
import { MeetupCardComponent } from './components/meetup-card/meetup-card.component';



@NgModule({
  declarations: [
    MeetupBoardComponent,
    MeetupCardComponent
  ],
  exports: [
    MeetupBoardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MeetupBoardModule { }
