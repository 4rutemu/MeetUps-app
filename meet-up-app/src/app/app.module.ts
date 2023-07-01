import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MeetupBoardModule} from "./modules/meetup-board/meetup-board.module";
import {FormsModule} from "@angular/forms";
import {AuthModule} from "./modules/auth/auth.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import {TokenInterceptor} from "./interceptors/token.interceptor";
import {NavbarModule} from "./modules/navbar/navbar.module";
import {UsersListModule} from "./modules/users-list/users-list.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MeetupBoardModule,
        FormsModule,
        AuthModule,
        HttpClientModule,
        NavbarModule,
        UsersListModule
    ],
    providers: [AuthService, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
