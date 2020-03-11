import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { DataService } from './data.service';

@Injectable()
export class GameService {
  public getGame: Observable<Game>;
  private getGameSubject: Subject<Game>;

  constructor(private data: DataService) {
    this.getGameSubject = new Subject();
    this.getGame = this.getGameSubject.asObservable();

    // find and emit the currently running game
    this.findGames().then(games => this.selectGame(games));
  }

  private findGames() {
    return this.data.getOnce('game');
  }

  private selectGame(games) {
    // if (!games || games.length <= 0) {
    //   this.getGameSubject.next(null);
    //   return;
    // }
    //
    // let id = Object.keys(games)[0];
    // let gameObs = this.data.getReference('game', gameId);
    //
    // gameObs.on('value', snapshot => { this.getGameSubject.next(snapshot.val()); });
  }
}

export interface Game {
  id: string;
}

export interface Answer {
  answer: number;
  player_id: string;
}

export interface Question {
  text: string;
  answers: string[];
}
