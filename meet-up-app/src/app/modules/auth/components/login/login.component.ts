import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email!: any;
  password!: any;

  constructor(public authService: AuthService) {
  }

  login() {
    this.authService.login(this.email, this.password)
      .subscribe((data) => console.log(data)) //TODO убрать лог
  }

}
