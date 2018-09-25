import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import * as firebase from 'firebase';

import { AppComponent } from './app.component';
import { ControllerComponent } from './controller/controller.component';
import { ControllerModule } from './controller/controller.module';
import { LoginComponent } from './login/login.component';
import { NoGamesComponent } from './no-games/no-games.component';
import { RulesComponent } from './rules/rules.component';
import { HeaderComponent } from './shared/header/header.component';
import { DataService } from './shared/service/data.service';
import { GameService } from './shared/service/game.service';
import { PushNotificationService } from './shared/service/push-notification.service';
import { ViewService } from './shared/service/view.service';
import { environment } from '../environments/environment';

const appRoutes: any = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'controller', component: ControllerComponent },
  { path: 'no-games', component: NoGamesComponent },
  { path: 'rules', component: RulesComponent }
];

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    HeaderComponent,
    LoginComponent,
    NoGamesComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    ControllerModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ DataService, GameService, PushNotificationService, ViewService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
