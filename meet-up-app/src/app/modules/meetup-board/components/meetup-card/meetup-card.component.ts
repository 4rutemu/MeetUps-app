import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-meetup-card',
  templateUrl: './meetup-card.component.html',
  styleUrls: ['./meetup-card.component.css']
})
export class MeetupCardComponent {

  @Input()
  name!: string
  @Input()
  about!: string
}
