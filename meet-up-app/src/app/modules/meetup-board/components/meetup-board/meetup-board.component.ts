import { Component } from '@angular/core';
import {MeetupService} from "../../services/meetup.service";

@Component({
  selector: 'app-meetup-board',
  templateUrl: './meetup-board.component.html',
  styleUrls: ['./meetup-board.component.css']
})
export class MeetupBoardComponent {
  constructor(public meetupService: MeetupService) {
  }
}
