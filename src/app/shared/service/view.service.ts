import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable()
export class ViewService {
  constructor(private router: Router) {}

  isOnController() {
    return this.router.url === '/controller'
  }

  isOnRules() {
    return this.router.url === '/rules'
  }

  showLogin() {
    this.router.navigateByUrl('/login')
  }

  showController() {
    this.router.navigateByUrl('/controller')
  }

  showNoGames() {
    this.router.navigateByUrl('/no-games')
  }

  showRules() {
    this.router.navigateByUrl('/rules')
  }
}
