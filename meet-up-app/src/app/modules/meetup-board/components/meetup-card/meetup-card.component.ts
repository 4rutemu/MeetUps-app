import {Component, Input} from '@angular/core';

interface IMeetup {
  "id": number,
  "name": string,
  "description": string,
  "location": string,
  "target_audience": string,
  "need_to_know": string,
  "will_happen": string,
  "reason_to_come": string,
  "time": string,
  "duration": number,
  "createdBy": number,
  "owner": {
    "id": number,
    "email": string,
    "password": string,
    "fio": string
  },
  "users": [
    {
      "id": number,
      "email": string,
      "password": string,
      "fio": string
    }
  ]
}

@Component({
  selector: 'app-meetup-card',
  templateUrl: './meetup-card.component.html',
  styleUrls: ['./meetup-card.component.css']
})
export class MeetupCardComponent {

  @Input()
  meetup?: IMeetup;


}
