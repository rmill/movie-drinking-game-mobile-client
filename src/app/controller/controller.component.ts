import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { GameService, Question, State } from '../shared/service/game.service';

@Component({
  selector: 'controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {

  public question: Question;
  public showController: boolean = false;

  private gameSub: Subscription;

  constructor(protected cdr: ChangeDetectorRef, protected game: GameService) {}

  ngOnInit() {
    this.gameSub = this.game.state.subscribe(state => this.processState(state))
  }

  ngOnDestroy() {
    this.gameSub.unsubscribe()
  }

  processState(state: State) {
    this.showController = true;
    this.question = state.question
    this.cdr.detectChanges()
  }
}
