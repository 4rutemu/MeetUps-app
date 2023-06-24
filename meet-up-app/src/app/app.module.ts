import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MeetupBoardModule} from "./modules/meetup-board/meetup-board.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MeetupBoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
