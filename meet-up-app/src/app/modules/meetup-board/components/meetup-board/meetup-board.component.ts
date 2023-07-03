import {Component, OnInit} from '@angular/core';
import {MeetupService} from "../../../../services/meetup.service";
import {tap} from "rxjs";
import {HttpService, URLS} from "../../../../services/http.service";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-meetup-board',
  templateUrl: './meetup-board.component.html',
  styleUrls: ['./meetup-board.component.css']
})
export class MeetupBoardComponent implements OnInit{

  meetups: any;
  searchText!: string;

  constructor(public meetupService: MeetupService,
              private httpService: HttpService,
              public authService: AuthService) {

  }

  ngOnInit() {
    setTimeout(() => this.meetups = this.httpService.getData(URLS.MEETUP), 700)
  }


}
