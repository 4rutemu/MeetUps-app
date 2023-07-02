import {Component, OnInit} from '@angular/core';
import {MeetupService} from "../../../../services/meetup.service";
import {HttpService, URLS} from "../../../../services/http.service";
import {AuthService} from "../../../../services/auth.service";
import {filter} from "rxjs";
import {IMeetup} from "../meetup-card/meetup-card.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-meetups',
  templateUrl: './my-meetups.component.html',
  styleUrls: ['./my-meetups.component.scss']
})
export class MyMeetupsComponent implements OnInit{
  meetups: any;

  constructor(public meetupService: MeetupService,
              private httpService: HttpService,
              public authService: AuthService,
              public routes: Router
  ) {

  }

  ngOnInit() {
    setTimeout(() => this.meetups = this.httpService.getData(URLS.MEETUP), 700)
  }
}
