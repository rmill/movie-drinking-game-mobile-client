import { ChangeDetectorRef, Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { GameService, State } from '../../shared/service/game.service';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  public hasStarted: boolean = false;
  public hasFinished: boolean = false;
  public isIdle: boolean = false;
  public nextQuestionIn: number = 0;
  public nextQuestionInDenomination: string;

  private gameSub: Subscription

  constructor(private cdr: ChangeDetectorRef, private game: GameService) {};

  ngOnInit() {
    this.gameSub = this.game.state.subscribe(state => this.processState(state))
  }

  ngOnDestroy() {
    this.gameSub.unsubscribe()
  }

  processState(state: State) {
    this.hasFinished = [this.game.WAITING_FOR_END, this.game.END_GAME].includes(state.state)
    this.hasStarted = state.state != this.game.NEW_GAME
    this.isIdle = state.state == this.game.IDLE
    this.nextQuestionIn = Math.ceil(state.seconds_to_next_question / 60)
    this.nextQuestionInDenomination = this.nextQuestionIn == 1 ? 'Minute' : 'Minutes'

    this.cdr.detectChanges()
  }
}
