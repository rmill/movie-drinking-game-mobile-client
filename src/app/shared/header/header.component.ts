import { Component, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { GameService, State } from '../service/game.service';
import { ViewService } from '../service/view.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public rules: Array<string>

  private stateSub: Subscription

  constructor(
    protected cdr: ChangeDetectorRef, protected game: GameService, protected view: ViewService
  ) {}

  ngOnInit() {
    this.stateSub = this.game.state.subscribe(state => this.processState(state))
  }

  ngOnDestroy() {
    this.stateSub.unsubscribe()
  }

  processState(state: State) {
    this.rules = state.rules
    this.cdr.detectChanges()
  }

  switchView() {
    if (this.view.isOnController())
      this.view.showRules()
    else this.view.showController()
  }
}
