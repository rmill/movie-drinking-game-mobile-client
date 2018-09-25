import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControllerComponent } from './controller.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { MessagesComponent } from './messages/messages.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    ButtonsComponent,
    MessagesComponent,
    ScoreComponent
  ],
  imports: [ CommonModule ],
  providers: [],
  bootstrap: [ ControllerComponent ],
  exports: [
    ButtonsComponent,
    MessagesComponent,
    ScoreComponent
  ]
})
export class ControllerModule { }
