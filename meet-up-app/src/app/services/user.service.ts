import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  editingUser!: any;
  constructor(public httpService: HttpService, private routes: Router) { }

  editCard(user: any) {
    this.editingUser = user;
    this.routes.navigate(['edit-user'])
  }
}
