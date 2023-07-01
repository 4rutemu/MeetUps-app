import {Component, OnInit} from '@angular/core';
import {MeetupService} from "../../../../services/meetup.service";
import {tap} from "rxjs";
import {HttpService, URLS} from "../../../../services/http.service";

@Component({
  selector: 'app-meetup-board',
  templateUrl: './meetup-board.component.html',
  styleUrls: ['./meetup-board.component.css']
})
export class MeetupBoardComponent implements OnInit{

  meetups: any;
  searchText!: string;

  constructor(public meetupService: MeetupService, private httpService: HttpService) {

  }

  ngOnInit() {
    setTimeout(() => this.meetups = this.httpService.getData(URLS.MEETUP), 1500)
  }
}
