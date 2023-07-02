import { Component } from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public authService: AuthService, public routes: Router) {
  }

  isAdmin() {
    return (this.authService.user
    && this.authService.user.roles.find((role: any) => role.name === 'ADMIN'));
  }
}
