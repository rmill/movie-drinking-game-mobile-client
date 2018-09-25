import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GameService } from './shared/service/game.service';
import { PushNotificationService } from './shared/service/push-notification.service';
import { ViewService } from './shared/service/view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private game: GameService,
    private pushNotification: PushNotificationService,
    private view: ViewService
  ) {
    pushNotification.requestPermission()
      .catch(err => this.permissionDenied(err))

    this.game.playerExists().then(exists => {
      if (exists) this.view.showController()
      else this.view.showLogin()
    })

    this.game.gameDeleted.subscribe(() => this.view.showNoGames())
  }

  permissionDenied(err) {
    console.log('Permission Denied', err);
  }
}
