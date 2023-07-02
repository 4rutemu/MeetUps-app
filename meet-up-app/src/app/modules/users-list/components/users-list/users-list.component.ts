import {Component, OnInit} from '@angular/core';
import {HttpService, URLS} from "../../../../services/http.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit{
  users!: any;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    setTimeout(() => this.users = this.httpService.getData(URLS.USER).pipe(tap(console.log)), 700)
  }
}
