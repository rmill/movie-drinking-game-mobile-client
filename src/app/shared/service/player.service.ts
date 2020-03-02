import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'

@Injectable()
export class PlayerService {
  public getPlayer: Observable<Player>
  public getPlayerSubject: Subject<Player>

  constructor() {
    this.getPlayerSubject = new Subject()
    this.getPlayer = this.getPlayerSubject.asObservable()

    this.selectPlayer()
  }

  login(name: string, gameId: string, token: string) {
    let player = {
      answer_speed: 0,
      best_streak: 0,
      correct_answers: 0,
      current_streak: 0,
      drinks: 0,
      fcm_token: token,
      game_id: gameId,
      incorrect_answers: 0,
      missed_answers: 0,
      name: name
    }

    return this.data.create('player', player)
      .then(playerId => this.mountPlayer(playerId))
      .then(() => localStorage.setItem('player-id', this.playerMount.key))
  }

  playerExists() {
    if (this.playerMount) {
      return this.playerMount.once('value').then(snapshot => snapshot.exists())
    }

    return Promise.resolve(false)
  }

  private intPlayer() {

    this.authService.authState.subscribe(user => {
      // get the social sign in user
      return user ? user.id : null
    }).then(id => {
      // Get the guest id
      return id ? id : localStorage.getItem('player-id')
    }).then(id => {
      this.playerObs = this.data.getReference('player', id)
      this.playerObs.on('value', this.processPlayer)
    })
  }

  private processPlayer(player: Player) {
    if (player) {
      this.player.next(player)
      this.mountGame(player.game_id)
    }
    else
      localStorage.removeItem('player-id')
  }
}

export interface Player {
  answer: number
  correct_answers: number
  drinks: number
  game_id: string
  id: string
  incorrect_answers: number
  missed_answers: number
  name: string
}
