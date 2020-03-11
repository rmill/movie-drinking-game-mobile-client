import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AuthService } from 'angularx-social-login';

import {DataService} from './data.service';

@Injectable()
export class PlayerService {
  public getPlayer: Observable<Player>;
  public getPlayerSubject: Subject<Player>;

  constructor(private auth: AuthService, private data: DataService) {
    this.getPlayerSubject = new Subject();
    this.getPlayer = this.getPlayerSubject.asObservable();
  }

  login(name: string, gameId: string) {
    const player: Player = {
      answer_speed: 0,
      best_streak: 0,
      correct_answers: 0,
      current_streak: 0,
      id: null,
      incorrect_answers: 0,
      missed_answers: 0,
      name
    };

    return this.data.create(`game/${gameId}/player`, player)
      .then(id => {
        player['id'] = id;
        this.getPlayerSubject.next(player);
      });
  }

  private intPlayer() {
    // this.auth.authState.subscribe(user => {
    //   // get the social sign in user
    //   return user ? user.id : null
    // }).then(id => {
    //   // Get the guest id
    //   return id ? id : localStorage.getItem('player-id');
    // }).then(id => {
    //   this.playerObs = this.data.getReference('player', id);
    //   this.playerObs.on('value', this.processPlayer);
    // });
  }

  private processPlayer(player: Player) {
    // if (player) {
    //   this.player.next(player);
    //   this.mountGame(player.game_id);
    // } else {
    //   localStorage.removeItem('player-id');
    // }
  }
}

export interface Player {
  answer_speed: number;
  best_streak: number;
  correct_answers: number;
  current_streak: number;
  id: string;
  incorrect_answers: number;
  missed_answers: number;
  name: string;
}
