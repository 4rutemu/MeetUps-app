import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpService, URLS} from "../../../../services/http.service";
import {MeetupService} from "../../../../services/meetup.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-meetup',
  templateUrl: './edit-meetup.component.html',
  styleUrls: ['./edit-meetup.component.scss']
})
export class EditMeetupComponent {
  editForm!: FormGroup<{
    name: FormControl<string | null>;
    description: FormControl<string | null>;
    time: FormControl<string | null>;
    duration: FormControl<number | null>;
    location: FormControl<string | null>;
    targetAudience: FormControl<string | null>;
    needToNow: FormControl<string | null>;
    willHappen: FormControl<string | null>;
    reasonToCome: FormControl<string | null>;
  }>

  constructor(private fb: FormBuilder,
              private httpService: HttpService,
              private meetupService: MeetupService,
              private routes: Router) {
  }

  ngOnInit() {
    this.editForm = this.fb.group({
      name:[this.meetupService.editingMeetup.name, [Validators.required]],
      description:[this.meetupService.editingMeetup.description],
      time:[this.meetupService.editingMeetup.time, [Validators.required]],
      duration:[this.meetupService.editingMeetup.duration, [Validators.required]],
      location:[this.meetupService.editingMeetup.location, [Validators.required]],
      targetAudience:[this.meetupService.editingMeetup.targetAudience],
      needToNow:[this.meetupService.editingMeetup.needToNow],
      willHappen:[this.meetupService.editingMeetup.willHappen],
      reasonToCome:[this.meetupService.editingMeetup.reasonToCome],
    })
  }

  editMeetup() {
    this.httpService.putDataWithId(URLS.MEETUP,
      {
        "name": this.editForm.value.name,
        "description": this.editForm.value.description,
        "time": this.editForm.value.time,
        "duration": this.editForm.value.duration,
        "location": this.editForm.value.location,
        "target_audience": this.editForm.value.targetAudience,
        "need_to_know": this.editForm.value.needToNow,
        "will_happen": this.editForm.value.willHappen,
        "reason_to_come": this.editForm.value.reasonToCome
      }, this.meetupService.editingMeetup.id
    )
    this.routes.navigate(['meetups'])
  }

  deleteMeetup() {
    this.httpService.deleteDataWithPath(URLS.MEETUP, this.meetupService.editingMeetup.id)
    this.routes.navigate(['meetups'])
  }

  cancelEditing() {
    this.routes.navigate(['my-meetups'])
  }
}
