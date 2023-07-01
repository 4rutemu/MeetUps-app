import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {HttpService, URLS} from "./http.service";
import {Router} from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class MeetupService {
  meetups = this.httpService.getData(URLS.MEETUP);
  editingMeetup!: any;
  constructor(public httpService: HttpService, private routes: Router) { }

  editCard(meetup: any) {
    this.editingMeetup = meetup;
    this.routes.navigate(['edit-meetup'])
  }
}
