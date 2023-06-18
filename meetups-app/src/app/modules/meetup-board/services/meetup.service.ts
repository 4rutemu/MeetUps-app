import { Injectable } from '@angular/core';

interface IMeetup {
  name: string,
  about: string
}


@Injectable({
  providedIn: 'root'
})
export class MeetupService {
  meetups: IMeetup[] = [
    {
      name: 'CS:GO',
      about: 'I Love CS:GO (NO)'
    },
    {
      name: 'DOTA2',
      about: 'I Love DOTA2 (NO)'
    },
  ]

  constructor() { }
}
