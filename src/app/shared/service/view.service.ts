import { Injectable, NgZone } from '@angular/core'
import { Router } from '@angular/router'

@Injectable()
export class ViewService {
  constructor(private router: Router, private zone: NgZone) {}

  isOnController() {
    return this.router.url === '/controller'
  }

  isOnLogin() {
    this.router.url === '/login'
  }

  isOnRules() {
    return this.router.url === '/rules'
  }

  showLogin() {
    this.zone.run(() => this.router.navigate(['login']));
  }

  showController() {
    this.zone.run(() => this.router.navigate(['controller']));
  }

  showNoGames() {
    this.zone.run(() => this.router.navigate(['no-games']));
  }

  showRules() {
    this.zone.run(() => this.router.navigate(['rules']));
  }
}
