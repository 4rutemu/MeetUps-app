import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>
  }>

  constructor(public authService: AuthService, private fb: FormBuilder) {
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((data) => console.log(data)) //TODO убрать лог
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


}
