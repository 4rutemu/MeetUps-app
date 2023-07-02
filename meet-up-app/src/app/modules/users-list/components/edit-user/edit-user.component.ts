import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {HttpService, URLS} from "../../../../services/http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit{
  editForm!: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    fio: FormControl<string | null>
  }>

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private httpService: HttpService,
              private routes: Router) {
  }

  ngOnInit() {
    this.editForm = this.fb.group({
      email: [this.userService.editingUser.email, [Validators.required, Validators.email]],
      password: [this.userService.editingUser.password, Validators.required],
      fio: [this.userService.editingUser.fio, [Validators.required]]
    });
  }

  editUser() {
    this.httpService.putDataWithId(URLS.USER,
      {
        "email": this.editForm.value.email,
        "password": this.editForm.value.password,
        "fio": this.editForm.value.fio
      }, this.userService.editingUser.id
    )
    this.routes.navigate(['users-list'])
  }

  deleteUser() {
    this.httpService.deleteDataWithPath(URLS.USER, this.userService.editingUser.id)
    this.routes.navigate(['users-list'])
  }

  cancelEditing() {
    this.routes.navigate(['users-list'])
  }
}
