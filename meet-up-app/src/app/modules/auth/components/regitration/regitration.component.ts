import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-regitration',
  templateUrl: './regitration.component.html',
  styleUrls: ['./regitration.component.scss']
})
export class RegitrationComponent implements OnInit{
  registrationForm!: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    fio: FormControl<string | null>
  }>

  constructor(public authService: AuthService,
              private fb: FormBuilder,
              private routes: Router) {
  }

  register() {
    if (this.registrationForm.invalid) {
      return;
    }

    this.authService
      .register(this.registrationForm.value.email,
        this.registrationForm.value.password,
        this.registrationForm.value.fio)
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      fio: ['', [Validators.required]]
    });
  }

  redirectToLogin() {
    this.routes.navigate(['login'])
  }
}
