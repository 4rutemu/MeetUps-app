import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../modules/auth/services/auth.service";
import {inject} from "@angular/core";

export const isAdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)

  if (authService.user.roles.find((role: any) => role.name === 'ADMIN')) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
