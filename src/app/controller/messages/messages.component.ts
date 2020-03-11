import { ChangeDetectorRef, Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { State, StateService } from '../../shared/service/state.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  public hasStarted = false;
  public hasFinished = false;
  public isIdle = false;
  public nextQuestionIn = 0;
  public nextQuestionInDenomination: string;

  private gameSub: Subscription;

  constructor(private cdr: ChangeDetectorRef, private state: StateService) {}

  ngOnInit() {
    // this.gameSub = this.game.state.subscribe(state => this.processState(state));
  }

  ngOnDestroy() {
    this.gameSub.unsubscribe();
  }

  processState(state: State) {
    this.hasFinished = [this.state.WAITING_FOR_END, this.state.END_GAME].includes(state.state);
    this.hasStarted = state.state !== this.state.NEW_GAME;
    this.isIdle = state.state === this.state.IDLE;
    this.nextQuestionIn = Math.ceil(state.seconds_to_next_question / 60);
    this.nextQuestionInDenomination = this.nextQuestionIn === 1 ? 'Minute' : 'Minutes';

    this.cdr.detectChanges();
  }
}
