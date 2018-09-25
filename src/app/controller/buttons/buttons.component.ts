import { ChangeDetectorRef, Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '../../shared/service/data.service';
import { Answer, GameService, Player, State } from '../../shared/service/game.service';

@Component({
  selector: 'buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  public answers: Array<string>
  public selectedAnswer: number
  public questionText: string

  private canAnswer: boolean = true
  private checkedAnswer: boolean = false
  private hideAnswers: boolean = true
  private playerId: string
  private playerSub: Subscription
  private stateSub: Subscription

  constructor(
    private cdr: ChangeDetectorRef, private data: DataService, private game: GameService
  ) {}

  ngOnInit() {
    this.stateSub = this.game.state.subscribe(state => this.processState(state))
    this.playerSub = this.game.player.subscribe(player => this.processPlayer(player))
  }

  ngOnDestroy() {
    this.stateSub.unsubscribe()
  }

  isDisabled(answerIndex: number) {
    if (Number.isInteger(this.selectedAnswer))
      return answerIndex != this.selectedAnswer

    return !this.canAnswer
  }

  isHidden() {
    return this.hideAnswers || !this.checkedAnswer
  }

  onClick(answerIndex: number) {
    if (Number.isInteger(this.selectedAnswer)) return

    this.selectedAnswer = answerIndex

    let answer = { answer: this.selectedAnswer, player_id: this.playerId  }
    this.data.create('answer', answer, this.playerId)

    this.cdr.detectChanges()
  }

  processAnswer(answer: Answer) {
    this.selectedAnswer = answer ? answer.answer : null
    this.checkedAnswer = true

    this.cdr.detectChanges()
  }

  processPlayer(player: Player) {
    this.playerId = player.id

    if (!this.checkedAnswer)
      this.data.getOnce('answer', player.id).then(answer => this.processAnswer(answer))

    this.cdr.detectChanges()
  }

  processState(state: State) {
    this.answers = state.question.answers
    this.questionText = state.question.text

    let canAnswerStates = [this.game.SHOW_ANSWERS, this.game.WAITING_FOR_ANSWERS]
    this.canAnswer = canAnswerStates.includes(state.state)

    let hideAnswersStates = [this.game.SHOW_QUESTION, this.game.WAITING_FOR_QUESTION]
    this.hideAnswers = hideAnswersStates.includes(state.state)

    this.cdr.detectChanges()
  }
}
