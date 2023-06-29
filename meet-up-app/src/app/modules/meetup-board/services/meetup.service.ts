import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {HttpService, URLS} from "./http.service";



@Injectable({
  providedIn: 'root'
})
export class MeetupService {
  meetups = this.httpService.getData(URLS.MEETUP);

  constructor(public httpService: HttpService) { }
}
