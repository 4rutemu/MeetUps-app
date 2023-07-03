import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {HttpService, URLS} from "./http.service";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";



@Injectable({
  providedIn: 'root'
})
export class MeetupService {
  meetups = this.httpService.getData(URLS.MEETUP);
  editingMeetup!: any;
  constructor(public httpService: HttpService,
              private routes: Router,
              private authService: AuthService
              ) { }

  editCard(meetup: any) {
    this.editingMeetup = meetup;
    this.routes.navigate(['edit-meetup'])
  }

  isSubscribed(meetup: any) {
    return meetup.users.find((user: any) => user.id === this.authService.user.id);
  }

  toggleSubscribeOnMeetup(meetup: any) {
    if (!this.isSubscribed(meetup)) {
      this.httpService.putData(URLS.MEETUP,
        {"idMeetup": meetup.id, "idUser": this.authService.user.id})
    } else {
      this.httpService.deleteDataWithBody(URLS.MEETUP,
        {"idMeetup": meetup.id, "idUser": this.authService.user.id})
    }
  }
}
