import { ChangeDetectorRef, Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '../../shared/service/data.service';
import { Answer, GameService } from '../../shared/service/game.service';
import { Player} from '../../shared/service/player.service';
import { State, StateService } from '../../shared/service/state.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  public answers: Array<string>;
  public selectedAnswer: number;
  public questionText: string;

  private canAnswer = true;
  private checkedAnswer = false;
  private hideAnswers = true;
  private playerId: string;
  private playerSub: Subscription;
  private stateSub: Subscription;

  constructor(
    private cdr: ChangeDetectorRef, private data: DataService, private game: GameService, private state: StateService
  ) {}

  ngOnInit() {
    // this.stateSub = this.game.state.subscribe(state => this.processState(state))
    // this.playerSub = this.game.player.subscribe(player => this.processPlayer(player))
  }

  ngOnDestroy() {
    this.stateSub.unsubscribe();
  }

  isDisabled(answerIndex: number) {
    if (Number.isInteger(this.selectedAnswer)) {
      return answerIndex !== this.selectedAnswer;
    }

    return !this.canAnswer;
  }

  isHidden() {
    return this.hideAnswers || !this.checkedAnswer;
  }

  onClick(answerIndex: number) {
    if (Number.isInteger(this.selectedAnswer)) {
      return;
    }

    this.selectedAnswer = answerIndex;

    const answer = { answer: this.selectedAnswer, player_id: this.playerId  };
    this.data.create('answer', answer, this.playerId);

    this.cdr.detectChanges();
  }

  processAnswer(answer: Answer) {
    this.selectedAnswer = answer ? answer.answer : null;
    this.checkedAnswer = true;

    this.cdr.detectChanges();
  }

  processPlayer(player: Player) {
    this.playerId = player.id;

    if (!this.checkedAnswer) {
      this.data.getOnce('answer', player.id).then(answer => this.processAnswer(answer));
    }

    this.cdr.detectChanges();
  }

  processState(state: State) {
    this.answers = state.question.answers;
    this.questionText = state.question.text;

    const canAnswerStates = [this.state.SHOW_ANSWERS, this.state.WAITING_FOR_ANSWERS];
    this.canAnswer = canAnswerStates.includes(state.state);

    const hideAnswersStates = [this.state.SHOW_QUESTION, this.state.WAITING_FOR_QUESTION];
    this.hideAnswers = hideAnswersStates.includes(state.state);

    this.cdr.detectChanges();
  }
}
