import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable()
export class PushNotificationService {

  private messaging: any;

  constructor() {
    this.messaging = firebase.messaging();
  }

  requestPermission() {
    return this.messaging.requestPermission();
  }

  getToken() {
    return this.messaging.getToken();
  }
}
