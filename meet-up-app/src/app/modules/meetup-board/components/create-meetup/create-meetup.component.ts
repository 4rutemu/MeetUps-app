import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpService, URLS} from "../../../../services/http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-meetup',
  templateUrl: './create-meetup.component.html',
  styleUrls: ['./create-meetup.component.scss']
})
export class CreateMeetupComponent implements OnInit{
  createForm!: FormGroup<{
    name: FormControl<string | null>;
    description: FormControl<string | null>;
    time: FormControl<string | null>;
    duration: FormControl<string | null>;
    location: FormControl<string | null>;
    targetAudience: FormControl<string | null>;
    needToNow: FormControl<string | null>;
    willHappen: FormControl<string | null>;
    reasonToCome: FormControl<string | null>;
  }>

  constructor(private fb: FormBuilder,
              private httpService: HttpService,
              private routes: Router) {
  }

  ngOnInit() {
    this.createForm = this.fb.group({
      name:['', [Validators.required]],
      description:[''],
      time:['', [Validators.required]],
      duration:['', [Validators.required]],
      location:['', [Validators.required]],
      targetAudience:[''],
      needToNow:[''],
      willHappen:[''],
      reasonToCome:[''],
    })
  }

  createMeetup() {
    this.httpService.postData(URLS.MEETUP,
    {
      "name": this.createForm.value.name,
      "description": this.createForm.value.description,
      "time": this.createForm.value.time,
      "duration": Number(this.createForm.value.duration),
      "location": this.createForm.value.location,
      "target_audience": this.createForm.value.targetAudience,
      "need_to_know": this.createForm.value.needToNow,
      "will_happen": this.createForm.value.willHappen,
      "reason_to_come": this.createForm.value.reasonToCome
    }
    )
    this.routes.navigate(['meetups'])
  }

  cancelCreating() {
    this.routes.navigate(['meetups'])
  }
}
