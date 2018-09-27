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

  public showRulesBtn: boolean = false;

  private gameOverSub: Subscription
  private stateSub: Subscription

  constructor(
    protected cdr: ChangeDetectorRef, protected game: GameService, protected view: ViewService
  ) {}

  ngOnInit() {
    this.stateSub = this.game.state.subscribe(() => this.processState())
    this.gameOverSub = this.game.gameDeleted.subscribe(() => this.showRulesBtn = false)
  }

  ngOnDestroy() {
    this.gameOverSub.unsubscribe()
    this.stateSub.unsubscribe()
  }

  processState() {
    this.showRulesBtn = !this.view.isOnLogin()
    this.cdr.detectChanges()
  }

  switchView() {
    if (this.view.isOnController())
      this.view.showRules()
    else this.view.showController()
  }
}
