import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MeetupBoardModule} from "./modules/meetup-board/meetup-board.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        MeetupBoardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
