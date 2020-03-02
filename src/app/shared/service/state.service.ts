import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class StateService {
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
  readonly END_GAME = 'end_game'

  public state: ReplaySubject<State>

  constructor() {
    this.state = new ReplaySubject(1)
  }

  private processState(state: State) {
    console.log('new state', state)
    if (state) this.state.next(state)
    else this.gameDeleted.next(null)
  }
}

export interface State {
  rules: string[]
  question?: Question
  seconds_to_next_question: number
  state: string
}
