import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { zip } from 'rxjs'

import { GameService } from './shared/service/game.service'
import { PushNotificationService } from './shared/service/push-notification.service'
import { ViewService } from './shared/service/view.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private game: GameService,
    private pushNotification: PushNotificationService,
    private view: ViewService,
  ) {
    // pushNotification.requestPermission()
    //   .catch(err => this.permissionDenied(err))

    // If there are no games, go to the no games screen
    let gameObs = this.game.getGame()
    let playerObs = this.player.getPlayer()

    zip(gameObs, playerObs).subscribe(([game, player]) => { this.navigate(game, player) })
  }

  /**
   * Navigate to the correct module based on Game and Player states
   */
  private navigate(game: Game, player: Player) {
    if (game && player) this.view.showController()
    else if (game) this.view.showLogin()
    else this.view.showNoGames()
  }

  // private permissionDenied(err) {
  //   console.log('Permission Denied', err);
  // }
}
