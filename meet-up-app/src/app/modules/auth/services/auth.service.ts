import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {tap} from "rxjs";
import {environment} from "../../../environment"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = `${environment.backendOrigin}/auth`;

  constructor(private http: HttpClient, private routes: Router) { }

  login(email: string, password: string) {
    return this.http
      .post<any>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        tap((res) => {
          if (res.token) {
            localStorage.setItem('del_meetups_auth_token', res.token);
            console.log(this.parseJwt(res.token)); // TODO убрать лог
            this.routes.navigate(['meetups']);
          }
          return null;
        })
      );
  }

  logout() {
    localStorage.removeItem('del_meetups_auth_token');
    this.routes.navigate(['login']);
  }

  parseJwt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  public get user(): any | null {
    const token = localStorage.getItem('del_meetups_auth_token');
    if (token) {
      const user: any = this.parseJwt(token);
      return user;
    } else return null;
  }

  public get token(): string | null {
    return localStorage.getItem('del_meetups_auth_token');
  }
}
