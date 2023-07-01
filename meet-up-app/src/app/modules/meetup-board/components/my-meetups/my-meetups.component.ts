import {Component, OnInit} from '@angular/core';
import {MeetupService} from "../../../../services/meetup.service";
import {HttpService, URLS} from "../../../../services/http.service";
import {AuthService} from "../../../../services/auth.service";
import {filter} from "rxjs";
import {IMeetup} from "../meetup-card/meetup-card.component";

@Component({
  selector: 'app-my-meetups',
  templateUrl: './my-meetups.component.html',
  styleUrls: ['./my-meetups.component.scss']
})
export class MyMeetupsComponent implements OnInit{
  meetups: any;

  constructor(public meetupService: MeetupService, private httpService: HttpService, private authService: AuthService) {

  }

  ngOnInit() {
    setTimeout(() => this.meetups = this.httpService.getData(URLS.MEETUP)
      .pipe(filter((meetup: IMeetup) => meetup.owner.id === this.authService.user.id)), 1500)
  }
}
