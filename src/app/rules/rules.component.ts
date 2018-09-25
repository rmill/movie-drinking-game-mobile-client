import { Component, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { GameService, State } from '../shared/service/game.service';

@Component({
  selector: 'rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent {

  public rules: Array<string>

  private stateSub: Subscription

  constructor(protected cdr: ChangeDetectorRef, protected game: GameService) {}

  ngOnInit() {
    this.stateSub = this.game.state.subscribe(state => this.processState(state))
    console.log('ngOnInit')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
    this.stateSub.unsubscribe()
  }

  processState(state: State) {
    console.log('here', state.rules)
    this.rules = state.rules
    this.cdr.detectChanges()
  }
}
