(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"controller\">\n\t<header></header>\n\t<div class=\"content\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/controller/buttons/buttons.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/controller/buttons/buttons.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-buttons\">\n  <div class=\"question\">\n    <span [innerHTML]=\"questionText\"></span>\n  </div>\n  <table>\n    <tr *ngFor=\"let answer of answers; let i=index\">\n      <td>\n        <button\n          [class.hide]=\"isHidden()\"\n          [class.disabled]=\"isDisabled(i)\"\n          [class.pressed]=\"i === selectedAnswer\"\n          [innerHTML]=\"answer\"\n          (click)=\"onClick(i)\"\n          class=\"controller-button\"\n        >\n        </button>\n      </td>\n    </tr>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/controller/controller.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/controller/controller.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"showController\" class=\"content-controller\">\n  <messages *ngIf=\"!question\"></messages>\n  <buttons *ngIf=\"question\"></buttons>\n  <score></score>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/controller/messages/messages.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/controller/messages/messages.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!hasStarted\" class=\"content-start-game\">\n  <div class=\"content-start-game-container\">\n    <img class=\"logo-medium\">\n    <div><b>get your drinks!</b></div>\n    <div>we'll be starting soon</div>\n  </div>\n</div>\n\n<div *ngIf=\"hasStarted && isIdle\" class=\"content-waiting\">\n  <div class=\"content-waiting-container\">\n    <div>Next question in</div>\n    <div class=\"content-waiting-minutes\" [innerHTML]=\"nextQuestionIn\"></div>\n    <div class=\"content-waiting-denomination\" [innerHTML]=\"nextQuestionInDenomination\"></div>\n  </div>\n</div>\n\n<div *ngIf=\"hasFinished\" class=\"content-end-game\">\n  <div class=\"content-start-game-container\">\n    <img class=\"logo-medium\">\n    <div><b>The game is now over!</b></div>\n    <div>the trivia results will be posted at the end of the movie</div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/controller/score/score.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/controller/score/score.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"content-score\">\n  <tr>\n    <td class=\"content-score-icon\">\n      <i class=\"fa fa-check\"></i><span [innerHTML]=\"correctAnswers\"></span>\n    </td>\n    <td class=\"content-score-icon\">\n      <i class=\"fa fa-close\"></i><span [innerHTML]=\"incorrectAnswers\"></span>\n    </td>\n    <td class=\"content-score-icon\">\n      <i class=\"fa fa-user-times\"></i><span [innerHTML]=\"missedAnswers\"></span>\n    </td>\n    <td class=\"content-score-icon\">\n      <i class=\"fa fa-glass\"></i><span [innerHTML]=\"drinks\"></span>\n    </td>\n  </tr>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf='selectedGameId'>\n  <div class=\"content-text\">SIGN IN</div>\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\n    <input [(ngModel)]=\"userName\" [class.input-error]=\"userNameError\" name=\"userName\" type=\"text\" placeholder=\"USER NAME\">\n    <div *ngIf=\"errorMsg\" class=\"content-error\">{{ errorMsg }}</div>\n    <button type=\"submit\" [disabled]=\"loggingIn\" class=\"submit\">\n      <span *ngIf=\"!loggingIn\">SUBMIT</span>\n      <i *ngIf=\"loggingIn\" class=\"fa fa-spinner fa-spin\"></i>\n    </button>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/no-games/no-games.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/no-games/no-games.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-start-game\">\n  <div class=\"content-start-game-container\">\n    <img class=\"logo-medium\">\n    <div><b>No games found!</b></div>\n    <div>please refresh your browser</div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rules/rules.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rules/rules.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"rules\" class=\"content-rules content-main\">\n  <div class=\"content-text\">RULES</div>\n  <ul>\n    <li *ngFor=\"let rule of rules\">{{ rule }}</li>\n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-container\">\n  <div class=\"header-logo\">\n    <img class=\"logo\">\n  </div>\n  <i *ngIf=\"showRulesBtn\" class=\"fa fa-question-circle switch\" (click)=\"switchView()\"></i>\n</div>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  height: 90%;\n  font-family: Raleway;\n  padding: 0 4vw;\n  overflow-x: hidden;\n}\n\n.controller .content .content-rules .content-text {\n  padding: 12vh 0px;\n}\n\n.content .content-text.content-notfound {\n  font-size: 10vw;\n}\n\n.controller {\n  background-image: url('background.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n}\n\n.content-error {\n  padding-top: 10px;\n  font-size: 2vh;\n  color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUNBQStDO0VBQy9DLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgaGVpZ2h0OiA5MCU7XG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xuICBwYWRkaW5nOiAwIDR2dztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uY29udHJvbGxlciAuY29udGVudCAuY29udGVudC1ydWxlcyAuY29udGVudC10ZXh0IHtcbiAgcGFkZGluZzogMTJ2aCAwcHg7XG59XG5cbi5jb250ZW50IC5jb250ZW50LXRleHQuY29udGVudC1ub3Rmb3VuZCB7XG4gIGZvbnQtc2l6ZTogMTB2dztcbn1cblxuLmNvbnRyb2xsZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2JhY2tncm91bmQucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGVudC1lcnJvciB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDJ2aDtcbiAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/service/game.service */ "./src/app/shared/service/game.service.ts");
/* harmony import */ var _shared_service_push_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/service/push-notification.service */ "./src/app/shared/service/push-notification.service.ts");
/* harmony import */ var _shared_service_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/service/view.service */ "./src/app/shared/service/view.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var AppComponent = /** @class */ (function () {
    function AppComponent(game, pushNotification, view) {
        var _this = this;
        this.game = game;
        this.pushNotification = pushNotification;
        this.view = view;
        pushNotification.requestPermission()
            .catch(function (err) { return _this.permissionDenied(err); });
        this.game.playerExists().then(function (exists) {
            if (exists)
                _this.view.showController();
            else
                _this.view.showLogin();
        });
        this.game.gameDeleted.subscribe(function () { return _this.view.showNoGames(); });
    }
    AppComponent.prototype.permissionDenied = function (err) {
        console.log('Permission Denied', err);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _shared_service_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] },
        { type: _shared_service_push_notification_service__WEBPACK_IMPORTED_MODULE_2__["PushNotificationService"] },
        { type: _shared_service_view_service__WEBPACK_IMPORTED_MODULE_3__["ViewService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [_shared_service_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"],
            _shared_service_push_notification_service__WEBPACK_IMPORTED_MODULE_2__["PushNotificationService"],
            _shared_service_view_service__WEBPACK_IMPORTED_MODULE_3__["ViewService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _controller_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controller/controller.component */ "./src/app/controller/controller.component.ts");
/* harmony import */ var _controller_controller_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controller/controller.module */ "./src/app/controller/controller.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _no_games_no_games_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./no-games/no-games.component */ "./src/app/no-games/no-games.component.ts");
/* harmony import */ var _rules_rules_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rules/rules.component */ "./src/app/rules/rules.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_service_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/service/data.service */ "./src/app/shared/service/data.service.ts");
/* harmony import */ var _shared_service_game_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/service/game.service */ "./src/app/shared/service/game.service.ts");
/* harmony import */ var _shared_service_push_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/service/push-notification.service */ "./src/app/shared/service/push-notification.service.ts");
/* harmony import */ var _shared_service_view_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/service/view.service */ "./src/app/shared/service/view.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

















var appRoutes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'controller', component: _controller_controller_component__WEBPACK_IMPORTED_MODULE_6__["ControllerComponent"] },
    { path: 'no-games', component: _no_games_no_games_component__WEBPACK_IMPORTED_MODULE_9__["NoGamesComponent"] },
    { path: 'rules', component: _rules_rules_component__WEBPACK_IMPORTED_MODULE_10__["RulesComponent"] }
];
firebase__WEBPACK_IMPORTED_MODULE_4__["initializeApp"](_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _controller_controller_component__WEBPACK_IMPORTED_MODULE_6__["ControllerComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _no_games_no_games_component__WEBPACK_IMPORTED_MODULE_9__["NoGamesComponent"],
                _rules_rules_component__WEBPACK_IMPORTED_MODULE_10__["RulesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _controller_controller_module__WEBPACK_IMPORTED_MODULE_7__["ControllerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_shared_service_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"], _shared_service_game_service__WEBPACK_IMPORTED_MODULE_13__["GameService"], _shared_service_push_notification_service__WEBPACK_IMPORTED_MODULE_14__["PushNotificationService"], _shared_service_view_service__WEBPACK_IMPORTED_MODULE_15__["ViewService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/controller/buttons/buttons.component.css":
/*!**********************************************************!*\
  !*** ./src/app/controller/buttons/buttons.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-buttons {\n  height: 85%;\n}\n\n.controller-button {\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  font-size: 4vh;\n  text-decoration:none;\n  font-weight: 700;\n  font-family: Raleway;\n  outline: none;\n  border-radius: 2vh;\n  background-color: #065d7b;\n  color: #f5f8fe;\n  border: 0;\n  border-bottom: 0.5vh solid #04495e;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.disabled {\n  opacity: 0.5;\n}\n\n.pressed {\n  background-color: #f25424;\n  border-color: #f25424;\n}\n\n.controller-button:active:not(.pressed):not(.disabled) {\n  position:relative;\n  top: 3px;\n  background-color: #04495e;\n}\n\n.question {\n  text-align: center;\n  display: table;\n  height: 45%;\n  width: 100%;\n  color: #065d7b;\n  font-size: 5vh;\n  font-weight: 700;\n}\n\n.question span {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbGxlci9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsU0FBUztFQUNULGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsUUFBUTtFQUNSLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0VBQ2QsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb250cm9sbGVyL2J1dHRvbnMvYnV0dG9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtYnV0dG9ucyB7XG4gIGhlaWdodDogODUlO1xufVxuXG4uY29udHJvbGxlci1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogNHZoO1xuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJ2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NWQ3YjtcbiAgY29sb3I6ICNmNWY4ZmU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMC41dmggc29saWQgIzA0NDk1ZTtcbn1cblxuLmhpZGUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLnByZXNzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI1NDI0O1xuICBib3JkZXItY29sb3I6ICNmMjU0MjQ7XG59XG5cbi5jb250cm9sbGVyLWJ1dHRvbjphY3RpdmU6bm90KC5wcmVzc2VkKTpub3QoLmRpc2FibGVkKSB7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB0b3A6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0NDk1ZTtcbn1cblxuLnF1ZXN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgaGVpZ2h0OiA0NSU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzA2NWQ3YjtcbiAgZm9udC1zaXplOiA1dmg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5xdWVzdGlvbiBzcGFuIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/controller/buttons/buttons.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/controller/buttons/buttons.component.ts ***!
  \*********************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/data.service */ "./src/app/shared/service/data.service.ts");
/* harmony import */ var _shared_service_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/game.service */ "./src/app/shared/service/game.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent(cdr, data, game) {
        this.cdr = cdr;
        this.data = data;
        this.game = game;
        this.canAnswer = true;
        this.checkedAnswer = false;
        this.hideAnswers = true;
    }
    ButtonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stateSub = this.game.state.subscribe(function (state) { return _this.processState(state); });
        this.playerSub = this.game.player.subscribe(function (player) { return _this.processPlayer(player); });
    };
    ButtonsComponent.prototype.ngOnDestroy = function () {
        this.stateSub.unsubscribe();
    };
    ButtonsComponent.prototype.isDisabled = function (answerIndex) {
        if (Number.isInteger(this.selectedAnswer))
            return answerIndex != this.selectedAnswer;
        return !this.canAnswer;
    };
    ButtonsComponent.prototype.isHidden = function () {
        return this.hideAnswers || !this.checkedAnswer;
    };
    ButtonsComponent.prototype.onClick = function (answerIndex) {
        if (Number.isInteger(this.selectedAnswer))
            return;
        this.selectedAnswer = answerIndex;
        var answer = { answer: this.selectedAnswer, player_id: this.playerId };
        this.data.create('answer', answer, this.playerId);
        this.cdr.detectChanges();
    };
    ButtonsComponent.prototype.processAnswer = function (answer) {
        this.selectedAnswer = answer ? answer.answer : null;
        this.checkedAnswer = true;
        this.cdr.detectChanges();
    };
    ButtonsComponent.prototype.processPlayer = function (player) {
        var _this = this;
        this.playerId = player.id;
        if (!this.checkedAnswer)
            this.data.getOnce('answer', player.id).then(function (answer) { return _this.processAnswer(answer); });
        this.cdr.detectChanges();
    };
    ButtonsComponent.prototype.processState = function (state) {
        this.answers = state.question.answers;
        this.questionText = state.question.text;
        var canAnswerStates = [this.game.SHOW_ANSWERS, this.game.WAITING_FOR_ANSWERS];
        this.canAnswer = canAnswerStates.includes(state.state);
        var hideAnswersStates = [this.game.SHOW_QUESTION, this.game.WAITING_FOR_QUESTION];
        this.hideAnswers = hideAnswersStates.includes(state.state);
        this.cdr.detectChanges();
    };
    ButtonsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
    ]; };
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'buttons',
            template: __importDefault(__webpack_require__(/*! raw-loader!./buttons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/controller/buttons/buttons.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./buttons.component.css */ "./src/app/controller/buttons/buttons.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _shared_service_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/controller/controller.component.css":
/*!*****************************************************!*\
  !*** ./src/app/controller/controller.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-controller {\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbGxlci9jb250cm9sbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb250cm9sbGVyL2NvbnRyb2xsZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWNvbnRyb2xsZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/controller/controller.component.ts":
/*!****************************************************!*\
  !*** ./src/app/controller/controller.component.ts ***!
  \****************************************************/
/*! exports provided: ControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerComponent", function() { return ControllerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/service/game.service */ "./src/app/shared/service/game.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ControllerComponent = /** @class */ (function () {
    function ControllerComponent(cdr, game) {
        this.cdr = cdr;
        this.game = game;
        this.showController = false;
    }
    ControllerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameSub = this.game.state.subscribe(function (state) { return _this.processState(state); });
    };
    ControllerComponent.prototype.ngOnDestroy = function () {
        this.gameSub.unsubscribe();
    };
    ControllerComponent.prototype.processState = function (state) {
        this.showController = true;
        this.question = state.question;
        this.cdr.detectChanges();
    };
    ControllerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _shared_service_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }
    ]; };
    ControllerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'controller',
            template: __importDefault(__webpack_require__(/*! raw-loader!./controller.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/controller/controller.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./controller.component.css */ "./src/app/controller/controller.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _shared_service_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]])
    ], ControllerComponent);
    return ControllerComponent;
}());



/***/ }),

/***/ "./src/app/controller/controller.module.ts":
/*!*************************************************!*\
  !*** ./src/app/controller/controller.module.ts ***!
  \*************************************************/
/*! exports provided: ControllerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerModule", function() { return ControllerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller.component */ "./src/app/controller/controller.component.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/controller/buttons/buttons.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/controller/messages/messages.component.ts");
/* harmony import */ var _score_score_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./score/score.component */ "./src/app/controller/score/score.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var ControllerModule = /** @class */ (function () {
    function ControllerModule() {
    }
    ControllerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_4__["MessagesComponent"],
                _score_score_component__WEBPACK_IMPORTED_MODULE_5__["ScoreComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            providers: [],
            bootstrap: [_controller_component__WEBPACK_IMPORTED_MODULE_2__["ControllerComponent"]],
            exports: [
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_4__["MessagesComponent"],
                _score_score_component__WEBPACK_IMPORTED_MODULE_5__["ScoreComponent"]
            ]
        })
    ], ControllerModule);
    return ControllerModule;
}());



/***/ }),

/***/ "./src/app/controller/messages/messages.component.css":
/*!************************************************************!*\
  !*** ./src/app/controller/messages/messages.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-waiting {\n  height: 85%;\n}\n\n.content-waiting .icon {\n  margin-top: 4vh;\n  font-size: 19vh;\n}\n\n.content-waiting {\n  text-align: center;\n  display: table;\n  width: 100%;\n  color: #065d7b;\n  font-size: 7vw;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n.content-end-game {\n  height: 85%;\n}\n\n.content-end-game .icon {\n  margin-top: 4vh;\n  font-size: 19vh;\n}\n\n.content-end-game {\n  text-align: center;\n  display: table;\n  width: 100%;\n  color: #065d7b;\n  font-size: 5vw;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n.content-waiting-container {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.content-waiting-minutes {\n  font-weight: 900;\n  font-size: 56vw;\n  margin-top: -7vw;\n}\n\n.content-start-game {\n  width: 100%;\n  height: 85%;\n  display: table;\n}\n\n.content-start-game-container {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  text-transform: uppercase;\n  color: #065d7b;\n}\n\n.logo-medium {\n  content: url('logo-medium.png');\n  height: auto;\n  width: 74vw;\n  margin-bottom: 24vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbGxlci9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxjQUFjO0VBQ2QsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsK0JBQTZDO0VBQzdDLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29udHJvbGxlci9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtd2FpdGluZyB7XG4gIGhlaWdodDogODUlO1xufVxuXG4uY29udGVudC13YWl0aW5nIC5pY29uIHtcbiAgbWFyZ2luLXRvcDogNHZoO1xuICBmb250LXNpemU6IDE5dmg7XG59XG5cbi5jb250ZW50LXdhaXRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICMwNjVkN2I7XG4gIGZvbnQtc2l6ZTogN3Z3O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY29udGVudC1lbmQtZ2FtZSB7XG4gIGhlaWdodDogODUlO1xufVxuXG4uY29udGVudC1lbmQtZ2FtZSAuaWNvbiB7XG4gIG1hcmdpbi10b3A6IDR2aDtcbiAgZm9udC1zaXplOiAxOXZoO1xufVxuXG4uY29udGVudC1lbmQtZ2FtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzA2NWQ3YjtcbiAgZm9udC1zaXplOiA1dnc7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb250ZW50LXdhaXRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbnRlbnQtd2FpdGluZy1taW51dGVzIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiA1NnZ3O1xuICBtYXJnaW4tdG9wOiAtN3Z3O1xufVxuXG4uY29udGVudC1zdGFydC1nYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODUlO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLmNvbnRlbnQtc3RhcnQtZ2FtZS1jb250YWluZXIge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDY1ZDdiO1xufVxuXG4ubG9nby1tZWRpdW0ge1xuICBjb250ZW50OiB1cmwoLi4vLi4vLi4vYXNzZXRzL2xvZ28tbWVkaXVtLnBuZyk7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDc0dnc7XG4gIG1hcmdpbi1ib3R0b206IDI0dmg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/controller/messages/messages.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/controller/messages/messages.component.ts ***!
  \***********************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/game.service */ "./src/app/shared/service/game.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(cdr, game) {
        this.cdr = cdr;
        this.game = game;
        this.hasStarted = false;
        this.hasFinished = false;
        this.isIdle = false;
        this.nextQuestionIn = 0;
    }
    ;
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameSub = this.game.state.subscribe(function (state) { return _this.processState(state); });
    };
    MessagesComponent.prototype.ngOnDestroy = function () {
        this.gameSub.unsubscribe();
    };
    MessagesComponent.prototype.processState = function (state) {
        this.hasFinished = [this.game.WAITING_FOR_END, this.game.END_GAME].includes(state.state);
        this.hasStarted = state.state != this.game.NEW_GAME;
        this.isIdle = state.state == this.game.IDLE;
        this.nextQuestionIn = Math.ceil(state.seconds_to_next_question / 60);
        this.nextQuestionInDenomination = this.nextQuestionIn == 1 ? 'Minute' : 'Minutes';
        this.cdr.detectChanges();
    };
    MessagesComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _shared_service_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }
    ]; };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'messages',
            template: __importDefault(__webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/controller/messages/messages.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./messages.component.css */ "./src/app/controller/messages/messages.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _shared_service_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/controller/score/score.component.css":
/*!******************************************************!*\
  !*** ./src/app/controller/score/score.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-score {\n  height: 15%;\n  text-align: center;\n  color: #065d7b;\n}\n\n.content-score .content-score-icon {\n  font-size: 6vw;\n  margin: 15px;\n}\n\n.content-score .content-score-icon i {\n  margin-right: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbGxlci9zY29yZS9zY29yZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXIvc2NvcmUvc2NvcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXNjb3JlIHtcbiAgaGVpZ2h0OiAxNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwNjVkN2I7XG59XG5cbi5jb250ZW50LXNjb3JlIC5jb250ZW50LXNjb3JlLWljb24ge1xuICBmb250LXNpemU6IDZ2dztcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4uY29udGVudC1zY29yZSAuY29udGVudC1zY29yZS1pY29uIGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/controller/score/score.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/controller/score/score.component.ts ***!
  \*****************************************************/
/*! exports provided: ScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreComponent", function() { return ScoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/game.service */ "./src/app/shared/service/game.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ScoreComponent = /** @class */ (function () {
    function ScoreComponent(cdr, game) {
        this.cdr = cdr;
        this.game = game;
    }
    ScoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerSub = this.game.player.subscribe(function (player) {
            _this.correctAnswers = player.correct_answers;
            _this.incorrectAnswers = player.incorrect_answers;
            _this.missedAnswers = player.missed_answers;
            _this.drinks = player.drinks;
            _this.cdr.detectChanges();
        });
    };
    ScoreComponent.prototype.ngOnDestroy = function () {
        this.playerSub.unsubscribe();
    };
    ScoreComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _shared_service_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }
    ]; };
    ScoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'score',
            template: __importDefault(__webpack_require__(/*! raw-loader!./score.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/controller/score/score.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./score.component.css */ "./src/app/controller/score/score.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _shared_service_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]])
    ], ScoreComponent);
    return ScoreComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n\tposition: relative;\n\ttext-align: center;\n}\n\ninput {\n  font-family: Raleway;\n  border: none;\n  background: #FFF;\n  height: 12vh;\n\tpadding: 25px;\n  width: 100%;\n\tmargin-bottom: 2vh;\n  border-radius: 3vh;\n  font-size: 5vh;\n  color: #065d7b;\n box-sizing: border-box;\n}\n\n.input-error {\n\tbackground: #e9b7b7;\n\tborder: 2px solid #ff7c7c;\n}\n\n.input-uppercase {\n\ttext-transform: uppercase;\n}\n\n.content-text {\n  text-align: center;\n  padding: 10vh 0px;\n  color: #065d7b;\n  font-size: 18vw;\n  font-weight: 700;\n}\n\n::-webkit-input-placeholder {\n   text-align: center;\n\t color: #a8a8a8;\n}\n\n:-moz-placeholder { /* Firefox 18- */\n   text-align: center;\n\t color: #a8a8a8;\n}\n\n::-moz-placeholder {  /* Firefox 19+ */\n   text-align: center;\n\t color: #a8a8a8;\n}\n\n:-ms-input-placeholder {\n   text-align: center;\n}\n\n.submit {\n  font-family: Raleway;\n  width: 100%;\n  height: 12vh;\n  border: none;\n  font-size: 5vh;\n  margin-top: 2vh;\n  border-radius: 3vh;\n  background-color: #065d7b;\n  color: #f5f8fe;\n  border-bottom: 0.5vh solid #04495e;\n}\n\nbutton[disabled] {\n  opacity: 0.5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0NBQ2IsYUFBYTtFQUNaLFdBQVc7Q0FDWixrQkFBa0I7RUFHakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxjQUFjO0NBR2Qsc0JBQXNCO0FBQ3hCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7R0FDRyxrQkFBa0I7RUFDbkIsY0FBYztBQUNoQjs7QUFFQSxvQkFBb0IsZ0JBQWdCO0dBQ2pDLGtCQUFrQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBLHNCQUFzQixnQkFBZ0I7R0FDbkMsa0JBQWtCO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7R0FDRyxrQkFBa0I7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGhlaWdodDogMTJ2aDtcblx0cGFkZGluZzogMjVweDtcbiAgd2lkdGg6IDEwMCU7XG5cdG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzdmg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3ZoO1xuICBib3JkZXItcmFkaXVzOiAzdmg7XG4gIGZvbnQtc2l6ZTogNXZoO1xuICBjb2xvcjogIzA2NWQ3Yjtcblx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5pbnB1dC1lcnJvciB7XG5cdGJhY2tncm91bmQ6ICNlOWI3Yjc7XG5cdGJvcmRlcjogMnB4IHNvbGlkICNmZjdjN2M7XG59XG5cbi5pbnB1dC11cHBlcmNhc2Uge1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY29udGVudC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHZoIDBweDtcbiAgY29sb3I6ICMwNjVkN2I7XG4gIGZvbnQtc2l6ZTogMTh2dztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0IGNvbG9yOiAjYThhOGE4O1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdCBjb2xvcjogI2E4YThhODtcbn1cblxuOjotbW96LXBsYWNlaG9sZGVyIHsgIC8qIEZpcmVmb3ggMTkrICovXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdCBjb2xvcjogI2E4YThhODtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdWJtaXQge1xuICBmb250LWZhbWlseTogUmFsZXdheTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTJ2aDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDV2aDtcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBib3JkZXItcmFkaXVzOiAzdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjVkN2I7XG4gIGNvbG9yOiAjZjVmOGZlO1xuICBib3JkZXItYm90dG9tOiAwLjV2aCBzb2xpZCAjMDQ0OTVlO1xufVxuXG5idXR0b25bZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC41O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/service/game.service */ "./src/app/shared/service/game.service.ts");
/* harmony import */ var _shared_service_push_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/push-notification.service */ "./src/app/shared/service/push-notification.service.ts");
/* harmony import */ var _shared_service_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/service/view.service */ "./src/app/shared/service/view.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(game, pushNotification, view) {
        this.game = game;
        this.pushNotification = pushNotification;
        this.view = view;
        this.MAX_USER_NAME_LENGTH = 16;
        this.loggingIn = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.game.findGames().then(function (games) { return _this.selectGame(games); });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.validate()) {
            this.loggingIn = true;
            this.pushNotification.getToken()
                .catch(function () { return null; })
                .then(function (token) { return _this.game.login(_this.userName, _this.selectedGameId, token); })
                .then(function () { return _this.view.showController(); });
        }
    };
    LoginComponent.prototype.selectGame = function (games) {
        if (games) {
            this.selectedGameId = Object.keys(games)[0];
            this.game.mountGame(this.selectedGameId);
        }
        else {
            this.view.showNoGames();
        }
    };
    LoginComponent.prototype.validate = function () {
        this.errorMsg = '';
        if (!this.userName) {
            this.errorMsg = 'Name cannot be empty';
            return false;
        }
        if (this.userName.length > this.MAX_USER_NAME_LENGTH) {
            this.errorMsg = "Name must be " + this.MAX_USER_NAME_LENGTH + " characters or less";
            return false;
        }
        return true;
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _shared_service_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] },
        { type: _shared_service_push_notification_service__WEBPACK_IMPORTED_MODULE_2__["PushNotificationService"] },
        { type: _shared_service_view_service__WEBPACK_IMPORTED_MODULE_3__["ViewService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_shared_service_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"], _shared_service_push_notification_service__WEBPACK_IMPORTED_MODULE_2__["PushNotificationService"], _shared_service_view_service__WEBPACK_IMPORTED_MODULE_3__["ViewService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/no-games/no-games.component.css":
/*!*************************************************!*\
  !*** ./src/app/no-games/no-games.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-start-game {\n  width: 100%;\n  height: 85%;\n  display: table;\n}\n\n.content-start-game-container {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  text-transform: uppercase;\n  color: #065d7b;\n}\n\n.logo-medium {\n  content: url('logo-medium.png');\n  height: auto;\n  width: 74vw;\n  margin-bottom: 24vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm8tZ2FtZXMvbm8tZ2FtZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsK0JBQTBDO0VBQzFDLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbm8tZ2FtZXMvbm8tZ2FtZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXN0YXJ0LWdhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4NSU7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uY29udGVudC1zdGFydC1nYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwNjVkN2I7XG59XG5cbi5sb2dvLW1lZGl1bSB7XG4gIGNvbnRlbnQ6IHVybCguLi8uLi9hc3NldHMvbG9nby1tZWRpdW0ucG5nKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogNzR2dztcbiAgbWFyZ2luLWJvdHRvbTogMjR2aDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/no-games/no-games.component.ts":
/*!************************************************!*\
  !*** ./src/app/no-games/no-games.component.ts ***!
  \************************************************/
/*! exports provided: NoGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoGamesComponent", function() { return NoGamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var NoGamesComponent = /** @class */ (function () {
    function NoGamesComponent() {
    }
    NoGamesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'no-games',
            template: __importDefault(__webpack_require__(/*! raw-loader!./no-games.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/no-games/no-games.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./no-games.component.css */ "./src/app/no-games/no-games.component.css")).default]
        })
    ], NoGamesComponent);
    return NoGamesComponent;
}());



/***/ }),

/***/ "./src/app/rules/rules.component.css":
/*!*******************************************!*\
  !*** ./src/app/rules/rules.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-rules {\n  font-family: Raleway;\n  color: #065d7b;\n}\n\nul {\n  margin: 0;\n}\n\nli {\n  padding-bottom: 4vh;\n  font-size: 6vw;\n}\n\n.content-text {\n  padding: 5vh 0px;\n  text-align: center;\n  font-size: 18vw;\n  font-weight: 700;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnVsZXMvcnVsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ydWxlcy9ydWxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtcnVsZXMge1xuICBmb250LWZhbWlseTogUmFsZXdheTtcbiAgY29sb3I6ICMwNjVkN2I7XG59XG5cbnVsIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5saSB7XG4gIHBhZGRpbmctYm90dG9tOiA0dmg7XG4gIGZvbnQtc2l6ZTogNnZ3O1xufVxuXG4uY29udGVudC10ZXh0IHtcbiAgcGFkZGluZzogNXZoIDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4dnc7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/rules/rules.component.ts":
/*!******************************************!*\
  !*** ./src/app/rules/rules.component.ts ***!
  \******************************************/
/*! exports provided: RulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesComponent", function() { return RulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/service/game.service */ "./src/app/shared/service/game.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var RulesComponent = /** @class */ (function () {
    function RulesComponent(cdr, game) {
        this.cdr = cdr;
        this.game = game;
    }
    RulesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stateSub = this.game.state.subscribe(function (state) { return _this.processState(state); });
    };
    RulesComponent.prototype.ngOnDestroy = function () {
        this.stateSub.unsubscribe();
    };
    RulesComponent.prototype.processState = function (state) {
        this.rules = state.rules;
        this.cdr.detectChanges();
    };
    RulesComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _shared_service_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }
    ]; };
    RulesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rules',
            template: __importDefault(__webpack_require__(/*! raw-loader!./rules.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rules/rules.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./rules.component.css */ "./src/app/rules/rules.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _shared_service_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]])
    ], RulesComponent);
    return RulesComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  .header-logo {\n  width: 26vh;\n  height: 100%;\n}\n\n.header .text {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.header-container {\n  display: table;\n  height: 100%;\n  width: 91vw;\n  margin: auto;\n}\n\n.header-container .switch {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: right;\n  font-size: 5vh;\n  color: #065d7b;\n}\n\n.logo {\n  content: url('Logo.svg');\n  margin-top: 12%;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtFQUNBLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usd0JBQXNDO0VBQ3RDLGVBQWU7RUFDZixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogMjZ2aDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyIC50ZXh0IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA5MXZ3O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5oZWFkZXItY29udGFpbmVyIC5zd2l0Y2gge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiA1dmg7XG4gIGNvbG9yOiAjMDY1ZDdiO1xufVxuXG4ubG9nbyB7XG4gIGNvbnRlbnQ6IHVybCguLi8uLi8uLi9hc3NldHMvTG9nby5zdmcpO1xuICBtYXJnaW4tdG9wOiAxMiU7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/game.service */ "./src/app/shared/service/game.service.ts");
/* harmony import */ var _service_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/view.service */ "./src/app/shared/service/view.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(cdr, game, view) {
        this.cdr = cdr;
        this.game = game;
        this.view = view;
        this.showRulesBtn = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stateSub = this.game.state.subscribe(function () { return _this.processState(); });
        this.gameOverSub = this.game.gameDeleted.subscribe(function () { return _this.showRulesBtn = false; });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.gameOverSub.unsubscribe();
        this.stateSub.unsubscribe();
    };
    HeaderComponent.prototype.processState = function () {
        this.showRulesBtn = !this.view.isOnLogin();
        this.cdr.detectChanges();
    };
    HeaderComponent.prototype.switchView = function () {
        if (this.view.isOnController())
            this.view.showRules();
        else
            this.view.showController();
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _service_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] },
        { type: _service_view_service__WEBPACK_IMPORTED_MODULE_2__["ViewService"] }
    ]; };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header',
            template: __importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _service_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"], _service_view_service__WEBPACK_IMPORTED_MODULE_2__["ViewService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/service/data.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/service/data.service.ts ***!
  \************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.database = firebase__WEBPACK_IMPORTED_MODULE_1__["database"]();
    }
    DataService.prototype.create = function (resource, data, id) {
        if (id === void 0) { id = null; }
        var newResource;
        if (!id) {
            newResource = this.getReference(resource).push();
        }
        else {
            newResource = this.getReference(resource + "/" + id);
        }
        return newResource.set(data).then(function () { return newResource.key; });
    };
    DataService.prototype.getOnce = function (resource, id) {
        if (id === void 0) { id = null; }
        return this.getReference(resource, id)
            .once('value')
            .then(function (snapshot) { return snapshot.val(); });
    };
    DataService.prototype.getReference = function (resource, id) {
        if (id === void 0) { id = null; }
        var ref = id ? resource + "/" + id : resource;
        return this.database.ref(ref);
    };
    DataService.prototype.update = function (resource, id, data) {
        return this.getReference(resource, id).update(data);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/shared/service/game.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/service/game.service.ts ***!
  \************************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/shared/service/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var GameService = /** @class */ (function () {
    function GameService(data) {
        this.data = data;
        this.NEW_GAME = 'new_game';
        this.IDLE = 'idle';
        this.SHOW_QUESTION = 'show_question';
        this.WAITING_FOR_QUESTION = 'waiting_for_question';
        this.SHOW_ANSWERS = 'show_answers';
        this.WAITING_FOR_ANSWERS = 'waiting_for_answers';
        this.SHOW_CORRECT_ANSWER = 'show_correct_answer';
        this.WAITING_FOR_CORRECT_ANSWER = 'waiting_for_correct_answer';
        this.SHOW_DRINKS = 'show_drinks';
        this.WAITING_FOR_DRINKS = 'waiting_for_drinks';
        this.HIDE_QUESTION = 'hide_question';
        this.WAITING_FOR_END = 'waiting_for_end';
        this.END_GAME = 'end_game';
        this.gameDeleted = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.state = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.player = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        var playerId = localStorage.getItem('player-id');
        if (playerId)
            this.mountPlayer(playerId);
    }
    GameService.prototype.findGames = function () {
        return this.data.getOnce('game');
    };
    GameService.prototype.login = function (name, gameId, token) {
        var _this = this;
        var player = {
            answer_speed: 0,
            best_streak: 0,
            correct_answers: 0,
            current_streak: 0,
            drinks: 0,
            fcm_token: token,
            game_id: gameId,
            incorrect_answers: 0,
            missed_answers: 0,
            name: name
        };
        return this.data.create('player', player)
            .then(function (playerId) { return _this.mountPlayer(playerId); })
            .then(function () { return localStorage.setItem('player-id', _this.playerMount.key); });
    };
    GameService.prototype.playerExists = function () {
        if (this.playerMount) {
            return this.playerMount.once('value').then(function (snapshot) { return snapshot.exists(); });
        }
        return Promise.resolve(false);
    };
    GameService.prototype.mountGame = function (gameId) {
        var _this = this;
        if (this.gameMount)
            this.gameMount.off();
        this.gameMount = this.data.getReference('game', gameId);
        this.gameMount.on('value', function (snapshot) { return _this.processState(snapshot.val()); });
    };
    GameService.prototype.mountPlayer = function (playerId) {
        var _this = this;
        if (this.playerMount)
            this.playerMount.off();
        this.playerMount = this.data.getReference('player', playerId);
        this.playerMount.on('value', function (snapshot) {
            var val = snapshot.val();
            var player = val ? Object.assign(val, { id: playerId }) : null;
            _this.processPlayer(player);
        });
    };
    GameService.prototype.processPlayer = function (player) {
        console.log('new-player', player);
        if (player) {
            this.player.next(player);
            this.mountGame(player.game_id);
        }
        else
            localStorage.removeItem('player-id');
    };
    GameService.prototype.processState = function (state) {
        console.log('new state', state);
        if (state)
            this.state.next(state);
        else
            this.gameDeleted.next(null);
    };
    GameService.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/shared/service/push-notification.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/service/push-notification.service.ts ***!
  \*************************************************************/
/*! exports provided: PushNotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushNotificationService", function() { return PushNotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var PushNotificationService = /** @class */ (function () {
    function PushNotificationService() {
        try {
            this.messaging = firebase__WEBPACK_IMPORTED_MODULE_1__["messaging"]();
        }
        catch (err) {
            console.log(err);
        }
    }
    PushNotificationService.prototype.requestPermission = function () {
        if (!this.messaging)
            return Promise.reject();
        return this.messaging.requestPermission();
    };
    PushNotificationService.prototype.getToken = function () {
        if (!this.messaging)
            return Promise.reject();
        return this.messaging.getToken();
    };
    PushNotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PushNotificationService);
    return PushNotificationService;
}());



/***/ }),

/***/ "./src/app/shared/service/view.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/service/view.service.ts ***!
  \************************************************/
/*! exports provided: ViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewService", function() { return ViewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ViewService = /** @class */ (function () {
    function ViewService(router, zone) {
        this.router = router;
        this.zone = zone;
    }
    ViewService.prototype.isOnController = function () {
        return this.router.url === '/controller';
    };
    ViewService.prototype.isOnLogin = function () {
        return this.router.url === '/login';
    };
    ViewService.prototype.isOnRules = function () {
        return this.router.url === '/rules';
    };
    ViewService.prototype.showLogin = function () {
        var _this = this;
        this.zone.run(function () { return _this.router.navigate(['login']); });
    };
    ViewService.prototype.showController = function () {
        var _this = this;
        this.zone.run(function () { return _this.router.navigate(['controller']); });
    };
    ViewService.prototype.showNoGames = function () {
        var _this = this;
        this.zone.run(function () { return _this.router.navigate(['no-games']); });
    };
    ViewService.prototype.showRules = function () {
        var _this = this;
        this.zone.run(function () { return _this.router.navigate(['rules']); });
    };
    ViewService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    ViewService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ViewService);
    return ViewService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    firebase: {
        apiKey: "AIzaSyCdZ_eDSfZ_R8VEAJQEzzyei5y2ss4VGbA",
        authDomain: "drink-up-cinema.firebaseapp.com",
        databaseURL: "https://drink-up-cinema.firebaseio.com",
        messagingSenderId: "828526569727",
        projectId: "drink-up-cinema",
        storageBucket: "drink-up-cinema.appspot.com"
    },
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rmill/sandbox/personal/movie-drinking-game-mobile-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map