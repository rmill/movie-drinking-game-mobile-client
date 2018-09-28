import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { DataService } from './data.service';

@Injectable()
export class GameService {
  readonly NEW_GAME = 'new_game';
  readonly IDLE = 'idle';
  readonly SHOW_QUESTION = 'show_question';
  readonly WAITING_FOR_QUESTION = 'waiting_for_question';
  readonly SHOW_ANSWERS = 'show_answers';
  readonly WAITING_FOR_ANSWERS = 'waiting_for_answers';
  readonly SHOW_CORRECT_ANSWER = 'show_correct_answer';
  readonly WAITING_FOR_CORRECT_ANSWER = 'waiting_for_correct_answer';
  readonly SHOW_DRINKS = 'show_drinks';
  readonly WAITING_FOR_DRINKS = 'waiting_for_drinks';
  readonly HIDE_QUESTION = 'hide_question';
  readonly WAITING_FOR_END = 'waiting_for_end';
  readonly END_GAME = 'end_game';

  public gameDeleted: ReplaySubject<null>;
  public state: ReplaySubject<State>;
  public player: ReplaySubject<Player>;

  private gameMount;
  private playerMount;

  constructor(private data: DataService) {
    this.gameDeleted = new ReplaySubject(1)
    this.state = new ReplaySubject(1)
    this.player = new ReplaySubject(1)

    let playerId = localStorage.getItem('player-id')
    if (playerId) this.mountPlayer(playerId)
  }

  findGames() {
    return this.data.getOnce('game')
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
      .then(() => localStorage.setItem('player-id', this.playerMount.key));
  }

  playerExists() {
    if (this.playerMount) {
      return this.playerMount.once('value').then(snapshot => snapshot.exists())
    }

    return Promise.resolve(false);
  }

  mountGame(gameId) {
    if (this.gameMount) this.gameMount.off()

    this.gameMount = this.data.getReference('game', gameId)
    this.gameMount.on('value', snapshot => this.processState(snapshot.val()))
  }

  private mountPlayer(playerId) {
    if (this.playerMount) this.playerMount.off()

    this.playerMount = this.data.getReference('player', playerId)
    this.playerMount.on('value', snapshot => {
      let val = snapshot.val()
      let player = val ? Object.assign(val, { id: playerId }) : null
      this.processPlayer(player)
    })
  }

  private processPlayer(player: Player) {
    console.log('new-player', player)

    if (player) {
      this.player.next(player)
      this.mountGame(player.game_id)
    }
    else
      localStorage.removeItem('player-id')
  }

  private processState(state: State) {
    console.log('new state', state)
    if (state) this.state.next(state)
    else this.gameDeleted.next(null)
  }
}

export interface Answer {
  answer: number;
  player_id: string;
}

export interface Player {
  answer: number;
  correct_answers: number;
  drinks: number;
  game_id: string;
  id: string;
  incorrect_answers: number;
  missed_answers: number;
  name: string;
}

export interface Question {
  text: string;
  answers: string[];
}

export interface State {
  rules: string[];
  question?: Question;
  seconds_to_next_question: number;
  state: string;
}
