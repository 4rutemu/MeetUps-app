import {Component, Input} from '@angular/core';
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input()
  user!: any;

  constructor(public userService: UserService) {
  }
}
