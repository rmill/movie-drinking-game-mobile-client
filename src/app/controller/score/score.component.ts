import { ChangeDetectorRef, Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { GameService } from '../../shared/service/game.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {

  public correctAnswers: number;
  public incorrectAnswers: number;
  public missedAnswers: number;

  private playerSub: Subscription;

  constructor(private cdr: ChangeDetectorRef, private game: GameService) {}

  ngOnInit() {
    // this.playerSub = this.game.player.subscribe(player => {
    //   this.correctAnswers = player.correct_answers;
    //   this.incorrectAnswers = player.incorrect_answers;
    //   this.missedAnswers = player.missed_answers;
    //
    //   this.cdr.detectChanges();
    // });
  }

  ngOnDestroy() {
    this.playerSub.unsubscribe();
  }
}
