import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable()
export class PushNotificationService {

  private messaging: any;

  constructor() {
    try { this.messaging = firebase.messaging() }
    catch(err) { console.log(err) }
  }

  requestPermission() {
    if (!this.messaging) return Promise.reject()
    return this.messaging.requestPermission()
  }

  getToken() {
    if (!this.messaging) return Promise.reject()
    return this.messaging.getToken()
  }
}
