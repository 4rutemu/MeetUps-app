import { Component } from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public authService: AuthService) {
  }

  isAdmin() {
    return (this.authService.user
    && this.authService.user.roles.find((role: any) => role.name === 'ADMIN'));
  }
}
