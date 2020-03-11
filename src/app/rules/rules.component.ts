import { Component, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { GameService } from '../shared/service/game.service';
import { State } from '../shared/service/state.service';


@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent {

  public rules: Array<string>;

  private stateSub: Subscription;

  constructor(protected cdr: ChangeDetectorRef, protected game: GameService) {}

  ngOnInit() {
    // this.stateSub = this.game.state.subscribe(state => this.processState(state))
  }

  ngOnDestroy() {
    this.stateSub.unsubscribe();
  }

  processState(state: State) {
    this.rules = state.rules;
    this.cdr.detectChanges();
  }
}
