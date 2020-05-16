(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/activate/activate.component.css":
/*!*************************************************!*\
  !*** ./src/app/activate/activate.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 0 2.4em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZhdGUvYWN0aXZhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9hY3RpdmF0ZS9hY3RpdmF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIuNGVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/activate/activate.component.html":
/*!**************************************************!*\
  !*** ./src/app/activate/activate.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"invalidPage\" class=\"fin box center\">\n  <h2 class=\"header\">\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 0\">Oh </span>\n    </span>\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 1\">no!</span>\n    </span>\n  </h2>\n  <p class=\"text float-up\" style=\"--order: 3\">This link is not valid. Make sure you pasted in the right one.</p>\n</div>\n<div *ngIf=\"expiredPage\" class=\"fin box center\">\n  <h2 class=\"header\">\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 0\">Too </span>\n    </span>\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 1\">late!</span>\n    </span>\n  </h2>\n  <p class=\"text float-up\" style=\"--order: 3\">This link has expired.</p>\n  <a class=\"link float-up\" style=\"--order: 4\" (click)=\"resendLink()\" (touchstart)=\"onTouchStart($event)\" (touchend)=\"onTouchEnd($event)\">Send a new link</a>\n</div>\n<app-done *ngIf=\"doneMes\" [mes]=\"doneMes\"></app-done>\n<app-error *ngIf=\"resErr\" [status]=\"resErr\"></app-error>\n"

/***/ }),

/***/ "./src/app/activate/activate.component.ts":
/*!************************************************!*\
  !*** ./src/app/activate/activate.component.ts ***!
  \************************************************/
/*! exports provided: ActivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateComponent", function() { return ActivateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivateComponent = /** @class */ (function () {
    function ActivateComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        // Views, true means that view is shown
        this.expiredPage = false;
        this.invalidPage = false;
    }
    // Resend link function
    ActivateComponent.prototype.resendLink = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var rand = params.rand;
            _this.dataService.post('resend', { type: 'activate', rand: rand }).subscribe(function () {
                _this.expiredPage = false;
                _this.doneMes = ['Sent! Check your mailbox.'];
            }, function (err) {
                _this.resErr = err.status;
            });
        });
    };
    ActivateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var rand = params.rand;
            _this.dataService.post('verify', { rand: rand }).subscribe(function (data) {
                _this.res = data;
                if (_this.res.userFound) {
                    if (_this.res.randValid) {
                        _this.doneMes = ['Great! Your email is now verified.', 'Sign in now'];
                    }
                    else {
                        _this.expiredPage = true;
                    }
                }
                else {
                    _this.invalidPage = true;
                }
            }, function (err) {
                _this.resErr = err.status;
            });
        });
    };
    ActivateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activate',
            template: __webpack_require__(/*! ./activate.component.html */ "./src/app/activate/activate.component.html"),
            styles: [__webpack_require__(/*! ./activate.component.css */ "./src/app/activate/activate.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ActivateComponent);
    return ActivateComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _recover_recover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recover/recover.component */ "./src/app/recover/recover.component.ts");
/* harmony import */ var _activate_activate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activate/activate.component */ "./src/app/activate/activate.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset/reset.component */ "./src/app/reset/reset.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'activate/:rand', component: _activate_activate_component__WEBPACK_IMPORTED_MODULE_4__["ActivateComponent"], data: { animation: 'activate' } },
    { path: 'new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_5__["NewComponent"], data: { animation: 'new' } },
    { path: 'reset/:rand', component: _reset_reset_component__WEBPACK_IMPORTED_MODULE_6__["ResetComponent"], data: { animation: 'reset' } },
    { path: 'recover', component: _recover_recover_component__WEBPACK_IMPORTED_MODULE_3__["RecoverComponent"], data: { animation: 'recover' } },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], data: { animation: 'home' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-wrap {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n}\n.app-visuals {\n  position: relative;\n  width: calc(100% - 24em);\n  height: 100%;\n  border-right: solid 2px var(--line);\n  overflow: hidden;\n}\n.app-content {\n  position: relative;\n  width: 24em;\n  height: 100%;\n  flex-shrink: 0;\n}\n@media only screen and (min-width: 1401px) {\n  .app-content {\n    width: 28em;\n  }\n}\n@media only screen and (max-width: 1024px) {\n  .app-visuals {\n    position: absolute;\n    width: 100%;\n  }\n  .app-content {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    width: 26em;\n    height: 32em;\n    box-sizing: border-box;\n    background: var(--background);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-radius: 1.2em;\n    border: solid 2px var(--line);\n  }\n  @supports ((-webkit-backdrop-filter: blur(0px)) or (backdrop-filter: blur(0px))) {\n    .app-content {\n      background: var(--background-opaque);\n      border: solid 2px var(--line-opaque);\n      -webkit-backdrop-filter: saturate(0.5) blur(40px);\n              backdrop-filter: saturate(0.5) blur(40px);\n    }\n  }\n}\n@media only screen and (max-width: 480px) {\n  .app-visuals {\n    display: none;\n  }\n  .app-content {\n    width: 100%;\n    height: 100%;\n    border-radius: 0;\n    border: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtDQUNoQjtBQUNEO0VBQ0U7SUFDRSxZQUFZO0dBQ2I7Q0FDRjtBQUNEO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtHQUNiO0VBQ0Q7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFNBQVM7SUFDVCx5Q0FBaUM7WUFBakMsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDhCQUE4QjtHQUMvQjtFQUNEO0lBQ0U7TUFDRSxxQ0FBcUM7TUFDckMscUNBQXFDO01BQ3JDLGtEQUEwQztjQUExQywwQ0FBMEM7S0FDM0M7R0FDRjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLGNBQWM7R0FDZjtFQUNEO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsYUFBYTtHQUNkO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtd3JhcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFwcC12aXN1YWxzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjRlbSk7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAycHggdmFyKC0tbGluZSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYXBwLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNGVtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAxcHgpIHtcbiAgLmFwcC1jb250ZW50IHtcbiAgICB3aWR0aDogMjhlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmFwcC12aXN1YWxzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmFwcC1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHdpZHRoOiAyNmVtO1xuICAgIGhlaWdodDogMzJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuMmVtO1xuICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWxpbmUpO1xuICB9XG4gIEBzdXBwb3J0cyAoYmFja2Ryb3AtZmlsdGVyOiBibHVyKDBweCkpIHtcbiAgICAuYXBwLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1vcGFxdWUpO1xuICAgICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tbGluZS1vcGFxdWUpO1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgwLjUpIGJsdXIoNDBweCk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5hcHAtdmlzdWFscyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYXBwLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-wrap\">\n  <div class=\"app-visuals\">\n    <app-visuals [currentRoute]=\"prepareRoute(outlet)\"></app-visuals>\n  </div>\n  <div class=\"app-content\" [@routeAnimations]=\"prepareRoute(outlet)\">\n    <router-outlet #outlet=\"outlet\"></router-outlet>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Login';
    }
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimations', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                position: 'absolute'
                            })
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])(), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('540ms cubic-bezier(0.55, 0, 1, 0.45)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                        ], { optional: true })
                    ])
                ])
            ]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _visuals_visuals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visuals/visuals.component */ "./src/app/visuals/visuals.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _recover_recover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recover/recover.component */ "./src/app/recover/recover.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _activate_activate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./activate/activate.component */ "./src/app/activate/activate.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reset/reset.component */ "./src/app/reset/reset.component.ts");
/* harmony import */ var _done_done_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./done/done.component */ "./src/app/done/done.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _visuals_visuals_component__WEBPACK_IMPORTED_MODULE_7__["VisualsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _recover_recover_component__WEBPACK_IMPORTED_MODULE_9__["RecoverComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_10__["NewComponent"],
                _activate_activate_component__WEBPACK_IMPORTED_MODULE_11__["ActivateComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"],
                _reset_reset_component__WEBPACK_IMPORTED_MODULE_13__["ResetComponent"],
                _done_done_component__WEBPACK_IMPORTED_MODULE_14__["DoneComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.post = function (link, data) {
        return this.http.post('/api/users/' + link, data);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/done/done.component.css":
/*!*****************************************!*\
  !*** ./src/app/done/done.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 0 2.4em;\n}\n.check {\n  width: 6em;\n  height: 6em;\n  margin-bottom: 1.6em;\n  opacity: 0;\n  -webkit-animation: fade-in 1.2s 280ms cubic-bezier(0, 0.55, 0.45, 1) forwards;\n          animation: fade-in 1.2s 280ms cubic-bezier(0, 0.55, 0.45, 1) forwards;\n}\n.circle {\n  margin: 0 auto 2em auto;\n  r: 48;\n  stroke: var(--dark);\n  stroke-width: 4;\n  -webkit-transform: translate(50px, 50px) rotate(-90deg);\n          transform: translate(50px, 50px) rotate(-90deg);\n  stroke-dasharray: 302;\n  stroke-dashoffset: 302;\n  -webkit-animation: circle-stroke 1.2s 280ms cubic-bezier(0.85, 0, 0.15, 1) forwards;\n          animation: circle-stroke 1.2s 280ms cubic-bezier(0.85, 0, 0.15, 1) forwards;\n}\n.line {\n  stroke: var(--dark);\n  stroke-width: 6;\n  stroke-dasharray: 95;\n  stroke-dashoffset: 95;\n  -webkit-animation: line-stroke 1.2s 280ms cubic-bezier(0.85, 0, 0.15, 1) forwards;\n          animation: line-stroke 1.2s 280ms cubic-bezier(0.85, 0, 0.15, 1) forwards;\n}\n.link {\n  display: inline-block;\n}\n@-webkit-keyframes circle-stroke {\n  from {\n    stroke-dashoffset: 302;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes circle-stroke {\n  from {\n    stroke-dashoffset: 302;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@-webkit-keyframes line-stroke {\n  from {\n    stroke-dashoffset: 95;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes line-stroke {\n  from {\n    stroke-dashoffset: 95;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uZS9kb25lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsOEVBQXNFO1VBQXRFLHNFQUFzRTtDQUN2RTtBQUNEO0VBQ0Usd0JBQXdCO0VBQ3hCLE1BQU07RUFDTixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHdEQUFnRDtVQUFoRCxnREFBZ0Q7RUFDaEQsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixvRkFBNEU7VUFBNUUsNEVBQTRFO0NBQzdFO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0ZBQTBFO1VBQTFFLDBFQUEwRTtDQUMzRTtBQUNEO0VBQ0Usc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRTtJQUNFLHVCQUF1QjtHQUN4QjtFQUNEO0lBQ0UscUJBQXFCO0dBQ3RCO0NBQ0Y7QUFQRDtFQUNFO0lBQ0UsdUJBQXVCO0dBQ3hCO0VBQ0Q7SUFDRSxxQkFBcUI7R0FDdEI7Q0FDRjtBQUNEO0VBQ0U7SUFDRSxzQkFBc0I7R0FDdkI7RUFDRDtJQUNFLHFCQUFxQjtHQUN0QjtDQUNGO0FBUEQ7RUFDRTtJQUNFLHNCQUFzQjtHQUN2QjtFQUNEO0lBQ0UscUJBQXFCO0dBQ3RCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9kb25lL2RvbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyLjRlbTtcbn1cbi5jaGVjayB7XG4gIHdpZHRoOiA2ZW07XG4gIGhlaWdodDogNmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjZlbTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDEuMnMgMjgwbXMgY3ViaWMtYmV6aWVyKDAsIDAuNTUsIDAuNDUsIDEpIGZvcndhcmRzO1xufVxuLmNpcmNsZSB7XG4gIG1hcmdpbjogMCBhdXRvIDJlbSBhdXRvO1xuICByOiA0ODtcbiAgc3Ryb2tlOiB2YXIoLS1kYXJrKTtcbiAgc3Ryb2tlLXdpZHRoOiA0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MHB4LCA1MHB4KSByb3RhdGUoLTkwZGVnKTtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMzAyO1xuICBzdHJva2UtZGFzaG9mZnNldDogMzAyO1xuICBhbmltYXRpb246IGNpcmNsZS1zdHJva2UgMS4ycyAyODBtcyBjdWJpYy1iZXppZXIoMC44NSwgMCwgMC4xNSwgMSkgZm9yd2FyZHM7XG59XG4ubGluZSB7XG4gIHN0cm9rZTogdmFyKC0tZGFyayk7XG4gIHN0cm9rZS13aWR0aDogNjtcbiAgc3Ryb2tlLWRhc2hhcnJheTogOTU7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiA5NTtcbiAgYW5pbWF0aW9uOiBsaW5lLXN0cm9rZSAxLjJzIDI4MG1zIGN1YmljLWJlemllcigwLjg1LCAwLCAwLjE1LCAxKSBmb3J3YXJkcztcbn1cbi5saW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuQGtleWZyYW1lcyBjaXJjbGUtc3Ryb2tlIHtcbiAgZnJvbSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMwMjtcbiAgfVxuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGluZS1zdHJva2Uge1xuICBmcm9tIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogOTU7XG4gIH1cbiAgdG8ge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/done/done.component.html":
/*!******************************************!*\
  !*** ./src/app/done/done.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <svg class=\"check\" viewBox=\"0 0 100 100\">\n    <g fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n      <circle class=\"circle\"/>\n      <path class=\"line\" d=\"M20 60 45 80 78 30\" />\n    </g>\n  </svg>\n  <div>\n    <p class=\"text float-up\" style=\"--order: 4\">{{mes[0]}}</p>\n    <a\n      *ngIf=\"mes[1]\"\n      href=\"/login/\"\n      class=\"link float-up\"\n      style=\"--order: 5\">{{mes[1]}}</a>\n  </div>\n  <div class=\"outer-link-wrap\" style=\"--order: 4\">\n    <a\n      class=\"float-up\"\n      routerLink=\"/\">\n      <svg class=\"back-arrow\" viewBox=\"0 0 5 10\">\n          <path stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-linecap=\"round\" d=\"M4 1 1 5 4 9\"></path>\n      </svg>\n      Back to Sign in</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/done/done.component.ts":
/*!****************************************!*\
  !*** ./src/app/done/done.component.ts ***!
  \****************************************/
/*! exports provided: DoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoneComponent", function() { return DoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DoneComponent = /** @class */ (function () {
    function DoneComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoneComponent.prototype, "mes", void 0);
    DoneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-done',
            template: __webpack_require__(/*! ./done.component.html */ "./src/app/done/done.component.html"),
            styles: [__webpack_require__(/*! ./done.component.css */ "./src/app/done/done.component.css")]
        })
    ], DoneComponent);
    return DoneComponent;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 0 2.4em;\n}\n.message {\n  margin: 0 auto 0.8em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLHFCQUFxQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMi40ZW07XG59XG4ubWVzc2FnZSB7XG4gIG1hcmdpbjogMCBhdXRvIDAuOGVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <h2 class=\"header\">\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 0\">Snap!</span>\n    </span>\n  </h2>\n  <div *ngIf=\"status == 500\">\n    <p class=\"text float-up\" style=\"--order: 2\">There was a server error.</p>\n    <a class=\"link float-up\" style=\"--order: 3\"routerLink=\"/\">Try again.</a>\n  </div>\n  <div *ngIf=\"status == 404\">\n    <p class=\"text float-up\" style=\"--order: 2\">What you're looking for doesn't exist.</p>\n    <p class=\"text float-up\" style=\"--order: 3\">Make sure the link is correct.</p>\n  </div>\n  <div *ngIf=\"status != 500 && status != 404\">\n    <p class=\"text float-up\" style=\"--order: 2\">Something went wrong.</p>\n  </div>\n  <div class=\"outer-link-wrap\" style=\"--order: 2\">\n    <a\n      class=\"float-up\"\n      routerLink=\"/\">\n      <svg class=\"back-arrow\" viewBox=\"0 0 5 10\">\n          <path stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-linecap=\"round\" d=\"M4 1 1 5 4 9\"></path>\n      </svg>\n      Back to Sign in</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ErrorComponent.prototype, "status", void 0);
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        })
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 0 2.4em;\n}\n.forgot-link {\n  display: block;\n  font-size: 0.9em;\n  margin-bottom: 0.8em;\n}\n.outer-link-wrap.bottom {\n  top: auto;\n  bottom: 1.2em;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLFVBQVU7RUFDVixvQ0FBNEI7VUFBNUIsNEJBQTRCO0NBQzdCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyLjRlbTtcbn1cbi5mb3Jnb3QtbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcbn1cbi5vdXRlci1saW5rLXdyYXAuYm90dG9tIHtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IDEuMmVtO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loginPage\" class=\"box link-bottom\">\n  <h2 class=\"header\">\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 0\">Sign </span>\n    </span>\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 1\">in</span>\n    </span>\n  </h2>\n  <p class=\"message float-up\" style=\"--order: 2\">{{mes}}</p>\n  <form [formGroup]=\"userGroup\">\n    <input\n      class=\"email-input float-up\"\n      style=\"--order: 3\"\n      [class.red]=\"emailErr || emailErr2\"\n      type=\"email\"\n      placeholder=\"Email\"\n      formControlName=\"email\">\n    <input\n      class=\"password-input float-up\"\n      style=\"--order: 4\"\n      [class.red]=\"passErr\"\n      type=\"password\"\n      placeholder=\"Password\"\n      formControlName=\"pass\">\n    <a\n      class=\"forgot-link float-up\"\n      style=\"--order: 5\"\n      routerLink=\"/recover\">Forgot your password?</a>\n    <button\n      class=\"confirm-button float-up\"\n      style=\"--order: 6\"\n      (click)=\"login($event)\">\n      Sign in\n      <svg *ngIf=\"loading\" class=\"center\" width=\"1.2em\" height=\"1.2em\">\n        <circle class=\"loader-circle\"/>\n      </svg>\n    </button>\n  </form>\n</div>\n<div class=\"outer-link-wrap bottom\" style=\"--order: 5\">\n  <p class=\"float-up\">Don't have an account? </p>\n  <a\n    class=\"float-up\"\n    routerLink=\"/new\">Sign up now.</a>\n</div>\n<app-error *ngIf=\"resErr\" [status]=\"resErr\"></app-error>\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, dataService) {
        this.fb = fb;
        this.dataService = dataService;
        // Message on top
        this.mes = 'Welcome to Sign!';
        // Input field errors, true makes the input field go red.
        this.emailErr = false;
        this.emailErr2 = false;
        this.passErr = false;
        // Views, true means that view is shown
        this.loginPage = true;
        // Loader icon, true means icon is shown
        this.loading = false;
        // Login form
        this.userGroup = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    LoginComponent.prototype.login = function ($event) {
        var _this = this;
        if (this.userGroup.valid) {
            console.log('hey');
            var user = this.userGroup.value;
            var button = $event.currentTarget;
            button.classList.add('loading');
            this.loading = true;
            this.dataService.post('login', user).subscribe(function (data) {
                _this.res = data;
                if (!_this.res.authorized) {
                    button.classList.remove('loading');
                    _this.loading = false;
                    _this.mes = 'Oops... wrong email/password.';
                    _this.emailErr = true;
                    _this.passErr = true;
                }
                else {
                    if (_this.res.active) {
                        document.location.assign('/');
                    }
                    else {
                        _this.mes = 'This account is not activated. Check your mailbox and activate it now.';
                        button.classList.remove('loading');
                        _this.loading = false;
                        _this.emailErr = true;
                        _this.passErr = true;
                    }
                }
            }, function (err) {
                _this.loginPage = false;
                _this.resErr = err.status;
            });
        }
        else {
            if (this.userGroup.get('email').errors) {
                if (this.userGroup.get('email').errors.required) {
                    this.mes = 'Forgetting something?';
                    this.emailErr = true;
                }
                if (this.userGroup.get('email').errors.email) {
                    this.mes = 'Invalid email.';
                    this.emailErr2 = true;
                }
            }
            else {
                this.emailErr = false;
                this.emailErr2 = false;
            }
            if (this.userGroup.get('pass').errors) {
                this.mes = 'Forgetting something?';
                this.passErr = true;
            }
            else {
                this.passErr = false;
            }
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 0 2.4em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3L25ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL25ldy9uZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyLjRlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"newPage\" class=\"box\">\n  <h2 class=\"header\">\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 0\">Sign </span>\n    </span>\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 1\">up</span>\n    </span>\n  </h2>\n  <p class=\"message float-up\" style=\"--order: 2\">{{newMes}}</p>\n  <form [formGroup]=\"newGroup\" autocomplete=\"off\">\n    <input\n      class=\"email-input float-up\"\n      style=\"--order: 3\"\n      autocomplete=\"none\"\n      [class.red]=\"newemailErr\"\n      type=\"email\"\n      placeholder=\"Email\"\n      formControlName=\"email\">\n    <input\n      class=\"password-input float-up\"\n      style=\"--order: 4\"\n      autocomplete=\"new-password\"\n      [class.red]=\"newPassErr\"\n      type=\"password\"\n      placeholder=\"Password\"\n      formControlName=\"pass\">\n    <input\n      class=\"confirm-password-input float-up\"\n      style=\"--order: 5\"\n      autocomplete=\"new-password\"\n      [class.red]=\"newPassErr\"\n      type=\"password\"\n      placeholder=\"Comfirm password\"\n      formControlName=\"pass2\">\n    <button\n      class=\"confirm-button float-up\"\n      style=\"--order: 6\"\n      type=\"submit\"\n      (click)=\"new($event)\">\n      Create account\n      <svg *ngIf=\"loading\" class=\"center\" width=\"1.2em\" height=\"1.2em\">\n        <circle class=\"loader-circle\"/>\n      </svg>\n    </button>\n  </form>\n  <div class=\"outer-link-wrap\" style=\"--order: 3\">\n    <a\n      class=\"float-up\"\n      routerLink=\"/\">\n      <svg class=\"back-arrow\" viewBox=\"0 0 5 10\">\n          <path stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-linecap=\"round\" d=\"M4 1 1 5 4 9\"></path>\n      </svg>\n      Back to Sign in</a>\n  </div>\n</div>\n<app-done *ngIf=\"doneMes\" [mes]=\"doneMes\"></app-done>\n<app-error *ngIf=\"resErr\" [status]=\"resErr\"></app-error>\n"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewComponent = /** @class */ (function () {
    function NewComponent(fb, dataService) {
        this.fb = fb;
        this.dataService = dataService;
        // Text at the top
        this.newMes = 'Become a member now.';
        this.comMes = '';
        // Input field errors, true makes the input field go red.
        this.newemailErr = false;
        this.newPassErr = false;
        this.newPass2Err = false;
        // Views, true means that view is shown
        this.newPage = true;
        // Loader icon, true means icon is shown
        this.loading = false;
        // Forms
        this.newGroup = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pass2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    NewComponent.prototype.new = function ($event) {
        var _this = this;
        if (this.newGroup.valid) {
            if (this.newGroup.get('pass').value === this.newGroup.get('pass2').value) {
                var button = $event.currentTarget;
                button.classList.add('loading');
                this.loading = true;
                this.newPassErr = false;
                this.newPass2Err = false;
                var newMem = this.newGroup.value;
                this.dataService.post('new', newMem).subscribe(function (data) {
                    _this.newRes = data;
                    button.classList.remove('loading');
                    _this.loading = false;
                    if (_this.newRes.userExists) {
                        _this.newMes = 'Account already exists.';
                    }
                    else {
                        _this.newPage = false;
                        _this.doneMes = ["You're all set. Check your inbox to verify your email.", 'Sign in now.'];
                    }
                }, function (err) {
                    _this.newPage = false;
                    _this.resErr = err.status;
                });
            }
            else {
                this.newPassErr = true;
                this.newPass2Err = true;
                this.newMes = "Reconfirm your password.";
            }
        }
        else {
            if (this.newGroup.get('email').errors) {
                if (this.newGroup.get('email').errors.required) {
                    this.newMes = 'Forgetting something?';
                    this.newemailErr = true;
                }
                if (this.newGroup.get('email').errors.email) {
                    this.newMes = 'Invalid email.';
                    this.newemailErr = true;
                }
            }
            else {
                this.newemailErr = false;
            }
            if (this.newGroup.get('pass').errors) {
                this.newMes = 'Forgetting something?';
                this.newPassErr = true;
            }
            else {
                this.newPassErr = false;
            }
            if (this.newGroup.get('pass2').errors) {
                this.newMes = 'Forgetting something?';
                this.newPass2Err = true;
            }
            else {
                this.newPass2Err = false;
            }
        }
    };
    NewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/recover/recover.component.css":
/*!***********************************************!*\
  !*** ./src/app/recover/recover.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 0 2.4em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb3Zlci9yZWNvdmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcmVjb3Zlci9yZWNvdmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMi40ZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/recover/recover.component.html":
/*!************************************************!*\
  !*** ./src/app/recover/recover.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"inputPage\" class=\"box\">\n  <h2 class=\"header\">\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 0\">Password </span>\n    </span>\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 1\">reset</span>\n    </span>\n  </h2>\n  <p class=\"message float-up\" style=\"--order: 2\">{{mes}}</p>\n  <input class=\"email-input float-up\" style=\"--order: 3\" [class.red]=\"err\" type=\"email\" [formControl]=\"forgotEmail\" placeholder=\"Email\">\n  <button class=\"confirm-button float-up\" style=\"--order: 4\" type=\"button\" (click)=\"sendEmail($event)\">\n    Done\n    <svg *ngIf=\"loading\" class=\"center\" width=\"1.2em\" height=\"1.2em\">\n      <circle class=\"loader-circle\"/>\n    </svg>\n  </button>\n  <div class=\"outer-link-wrap\" style=\"--order: 3\">\n    <a\n      class=\"float-up\"\n      routerLink=\"/\">\n      <svg class=\"back-arrow\" viewBox=\"0 0 5 10\">\n          <path stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-linecap=\"round\" d=\"M4 1 1 5 4 9\"></path>\n      </svg>\n      Back to Sign in</a>\n  </div>\n</div>\n<app-done *ngIf=\"doneMes\" [mes]=\"doneMes\"></app-done>\n<app-error *ngIf=\"resErr\" [status]=\"resErr\"></app-error>\n"

/***/ }),

/***/ "./src/app/recover/recover.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recover/recover.component.ts ***!
  \**********************************************/
/*! exports provided: RecoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverComponent", function() { return RecoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecoverComponent = /** @class */ (function () {
    function RecoverComponent(fb, dataService) {
        this.fb = fb;
        this.dataService = dataService;
        // Text at the top
        this.mes = "We'll send you an email with a link to reset your password.";
        // Input field errors, true makes the input field go red.
        this.err = false;
        // Views, true means that view is shown
        this.inputPage = true;
        // Loader icon, true means icon is shown
        this.loading = false;
        // Email form
        this.forgotEmail = this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
    }
    RecoverComponent.prototype.sendEmail = function ($event) {
        var _this = this;
        if (this.forgotEmail.valid) {
            var email = this.forgotEmail.value;
            var button = $event.currentTarget;
            button.classList.add('loading');
            this.loading = true;
            this.dataService.post('recover', { mail: email }).subscribe(function (data) {
                _this.res = data;
                button.classList.remove('loading');
                _this.loading = false;
                if (_this.res.userExists) {
                    _this.inputPage = false;
                    _this.doneMes = ['Done! If you have an account with us, you should receive an email containing a link to reset your password.'];
                }
                else {
                    _this.mes = 'This is not a registered account.';
                }
            }, function (err) {
                _this.inputPage = false;
                _this.resErr = err.status;
            });
        }
        else {
            this.err = true;
            if (this.forgotEmail.errors.email) {
                this.mes = "Invalid email.";
            }
            if (this.forgotEmail.errors.required) {
                this.mes = 'Email required.';
            }
        }
    };
    ;
    RecoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recover',
            template: __webpack_require__(/*! ./recover.component.html */ "./src/app/recover/recover.component.html"),
            styles: [__webpack_require__(/*! ./recover.component.css */ "./src/app/recover/recover.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], RecoverComponent);
    return RecoverComponent;
}());



/***/ }),

/***/ "./src/app/reset/reset.component.css":
/*!*******************************************!*\
  !*** ./src/app/reset/reset.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 0 2.4em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXQvcmVzZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9yZXNldC9yZXNldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIuNGVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/reset/reset.component.html":
/*!********************************************!*\
  !*** ./src/app/reset/reset.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"resetPage\" class=\"box center\">\n  <p>{{resetMes}}</p>\n  <form [formGroup]=\"resetGroup\">\n    <input\n      [class.red]=\"newPassErr\"\n      formControlName=\"newPass\"\n      placeholder=\"New password\"\n      type=\"password\"\n      autocomplete=\"new-password\">\n    <input\n      [class.red]=\"newPass2Err\"\n      formControlName=\"newPass2\"\n      placeholder=\"Confirm new password\"\n      type=\"password\"\n      autocomplete=\"new-password\">\n    <button (click)=\"reset($event)\">\n      Reset\n      <svg *ngIf=\"loading\" class=\"center\" width=\"1.2em\" height=\"1.2em\">\n        <circle class=\"loader-circle\"/>\n      </svg>\n    </button>\n  </form>\n</div>\n<div *ngIf=\"invalidPage\" class=\"fin box center\">\n  <h2 class=\"header\">\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 0\">Oh </span>\n    </span>\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 0\">no!</span>\n    </span>\n  </h2>\n  <p>This link is not valid.</p>\n</div>\n<div *ngIf=\"expiredPage\" class=\"fin box center\">\n  <h2 class=\"header\">\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 0\">Too </span>\n    </span>\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 0\">late!</span>\n    </span>\n  </h2>\n  <p>This link has expired.</p>\n  <a (click)=\"resendLink()\">Send a new link</a>\n</div>\n<app-done *ngIf=\"doneMes\" [mes]=\"doneMes\"></app-done>\n<app-error *ngIf=\"resErr\" [status]=\"resErr\"></app-error>\n"

/***/ }),

/***/ "./src/app/reset/reset.component.ts":
/*!******************************************!*\
  !*** ./src/app/reset/reset.component.ts ***!
  \******************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetComponent = /** @class */ (function () {
    function ResetComponent(route, dataService, fb) {
        this.route = route;
        this.dataService = dataService;
        this.fb = fb;
        // Text on top
        this.resetMes = "Enter the new password here.";
        // Input field errors, true makes the input field go red.
        this.newPassErr = false;
        this.newPass2Err = false;
        // Views, true means that view is shown
        this.resetPage = true;
        this.invalidPage = false;
        this.expiredPage = false;
        // Loader icon, true means icon is shown
        this.loading = false;
        // New password form
        this.resetGroup = this.fb.group({
            newPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newPass2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    // Functions
    ResetComponent.prototype.resendLink = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var rand = params.rand;
            _this.dataService.post('resend', { type: 'reset', rand: rand }).subscribe(function () {
                _this.expiredPage = false;
                _this.doneMes = ['Sent! Check your mailbox'];
            }, function (err) {
                _this.expiredPage = false;
                _this.resErr = err.status;
            });
        });
    };
    ResetComponent.prototype.reset = function ($event) {
        var _this = this;
        if (this.resetGroup.valid) {
            if (this.resetGroup.get('newPass').value === this.resetGroup.get('newPass2').value) {
                this.route.params.subscribe(function (params) {
                    var rand = params.rand;
                    var newPass = _this.resetGroup.get('newPass').value;
                    var button = $event.currentTarget;
                    button.classList.add('loading');
                    _this.loading = true;
                    _this.dataService.post('reset', { rand: rand, newPass: newPass }).subscribe(function (data) {
                        _this.resetRes = data;
                        button.classList.remove('loading');
                        _this.loading = false;
                        if (_this.resetRes.userFound) {
                            if (_this.resetRes.randValid) {
                                _this.resetPage = false;
                                _this.doneMes = ['Congrats! Your password is now reset.', 'Sign in now.'];
                            }
                            else {
                                _this.resetPage = false;
                                _this.expiredPage = true;
                            }
                        }
                        else {
                            _this.resetMes = 'Wrong reset link.';
                        }
                    }, function (err) {
                        _this.resetPage = false;
                        _this.resErr = err.status;
                    });
                });
            }
            else {
                this.resetMes = "The passwords don't match.";
                this.newPassErr = true;
                this.newPass2Err = true;
            }
        }
        else {
            if (this.resetGroup.get('newPass').errors) {
                this.resetMes = "Forgetting something?";
                this.newPassErr = true;
            }
            else {
                this.newPassErr = false;
            }
            if (this.resetGroup.get('newPass2').errors) {
                this.resetMes = "Forgetting something?";
                this.newPass2Err = true;
            }
            else {
                this.newPass2Err = false;
            }
        }
    };
    ResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__(/*! ./reset.component.html */ "./src/app/reset/reset.component.html"),
            styles: [__webpack_require__(/*! ./reset.component.css */ "./src/app/reset/reset.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./src/app/visuals/visuals.component.css":
/*!***********************************************!*\
  !*** ./src/app/visuals/visuals.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n}\n.visual-wrap {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n/*  */\n/* SVG */\n/*  */\n.lines {\n  width: 100%;\n  margin-top: 1.2em;\n}\n.blue-group>path,\n.yellow-group>path {\n  stroke-dasharray: 1110;\n  stroke-dashoffset: 1110;\n  will-change: stroke-dashoffset, transform;\n  -webkit-animation: dashoffset 1.6s cubic-bezier(0.85, 0, 0.15, 1) forwards;\n          animation: dashoffset 1.6s cubic-bezier(0.85, 0, 0.15, 1) forwards;\n  transition: stroke-dasharray 1.6s cubic-bezier(0.85, 0, 0.15, 1);\n}\n.green-group>path {\n  stroke-dasharray: 1110;\n  stroke-dashoffset: -1110;\n  will-change: stroke-dashoffset;\n  -webkit-animation: dashoffset-reverse 1.6s cubic-bezier(0.85, 0, 0.15, 1) forwards;\n          animation: dashoffset-reverse 1.6s cubic-bezier(0.85, 0, 0.15, 1) forwards;\n  transition: stroke-dasharray 1.6s cubic-bezier(0.85, 0, 0.15, 1);\n}\n.visual-wrap.recover .blue-group>path {\n  stroke-dasharray: 110;\n}\n.visual-wrap.recover .green-group>path {\n  stroke-dasharray: 110;\n}\n.visual-wrap.recover .yellow-group>path {\n  stroke-dasharray: 110;\n}\n@-webkit-keyframes dashoffset {\n  from {\n    stroke-dashoffset: 1110;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes dashoffset {\n  from {\n    stroke-dashoffset: 1110;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@-webkit-keyframes dashoffset-reverse {\n  from {\n    stroke-dashoffset: -1110;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes dashoffset-reverse {\n  from {\n    stroke-dashoffset: -1110;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n/*  */\n/* HEADER */\n/*  */\n.header-wrap {\n  position: relative;\n  width: 100%;\n}\n.header {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 1.2em 0.8em 0.8em;\n  text-align: center;\n  -webkit-transform: translate(-50%, -40%);\n          transform: translate(-50%, -40%);\n}\n.mask-span {\n  display: inline-block;\n  overflow: hidden;\n}\n.word {\n  white-space: pre;\n  display: inline-block;\n  -webkit-transform: translate3d(0, 1.8em, 0);\n          transform: translate3d(0, 1.8em, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  will-change: transform;\n  -webkit-animation: float-up 1.6s calc(var(--order)*80ms) cubic-bezier(0.85, 0, 0.15, 1) forwards;\n          animation: float-up 1.6s calc(var(--order)*80ms) cubic-bezier(0.85, 0, 0.15, 1) forwards;\n}\n@-webkit-keyframes float-up {\n  from {\n    -webkit-transform: translate3d(0, 1.8em, 0);\n            transform: translate3d(0, 1.8em, 0);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes float-up {\n  from {\n    -webkit-transform: translate3d(0, 1.8em, 0);\n            transform: translate3d(0, 1.8em, 0);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n/*  */\n/* SHAPES */\n/*  */\n.shapes-outer-wrap {\n  flex-shrink: 0;\n}\n.shapes-wrap {\n  position: relative;\n  width: 100%;\n  padding-bottom: 40%;\n}\n.circle {\n  border-radius: 50%;\n}\n.blue {\n  background-color: var(--blue);\n}\n.red {\n  background-color: var(--red);\n}\n.yellow {\n  background-color: var(--yellow);\n}\n.green {\n  background-color: var(--green);\n}\n.shapes-wrap>* {\n  width: 20%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transition: -webkit-transform 1.6s cubic-bezier(0.85, 0, 0.15, 1);\n  transition: transform 1.6s cubic-bezier(0.85, 0, 0.15, 1);\n  transition: transform 1.6s cubic-bezier(0.85, 0, 0.15, 1), -webkit-transform 1.6s cubic-bezier(0.85, 0, 0.15, 1);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  will-change: transform;\n}\n.shapes-wrap>*:after {\n  content: '';\n  display: block;\n  padding-bottom: 100%;\n}\n.shapes-wrap>*.double {\n  width: 40%;\n}\n.quadrant {\n  overflow: hidden;\n}\n.quadrant-mask {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  will-change: transform;\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  -webkit-animation: quadrant-mask 1.6s cubic-bezier(0.85, 0, 0.15, 1) forwards;\n          animation: quadrant-mask 1.6s cubic-bezier(0.85, 0, 0.15, 1) forwards;\n}\n.quadrant-circle {\n  position: absolute;\n  width: 200%;\n  height: 200%;\n  border-radius: 50%;\n}\n@-webkit-keyframes quadrant-mask {\n  from {\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n  }\n  to {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes quadrant-mask {\n  from {\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n  }\n  to {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n/* 0. RED SQUARE */\n.visual-wrap.home .rs {\n  -webkit-transform: translate3d(-100%, 0, 0) scale(0);\n          transform: translate3d(-100%, 0, 0) scale(0);\n}\n.shapes-wrap.home>.rs {\n  -webkit-transform: translate3d(-100%, 0, 0) scale(1);\n          transform: translate3d(-100%, 0, 0) scale(1);\n}\n.visual-wrap.new .rs {\n  -webkit-transform: translate3d(0%, 0, 0) scale(0);\n          transform: translate3d(0%, 0, 0) scale(0);\n}\n.shapes-wrap.new>.rs {\n  -webkit-transform: translate3d(0%, 0, 0) scale(1);\n          transform: translate3d(0%, 0, 0) scale(1);\n}\n.visual-wrap.recover .rs {\n  -webkit-transform: translate3d(-100%, 0, 0) scale(0);\n          transform: translate3d(-100%, 0, 0) scale(0);\n}\n.shapes-wrap.recover>.rs {\n  -webkit-transform: translate3d(-100%, 0, 0) scale(1);\n          transform: translate3d(-100%, 0, 0) scale(1);\n}\n/* 1. BLUE CIRCLE */\n.visual-wrap.home .bc {\n  -webkit-transform: translate3d(-50%, 0, 0) scale(0);\n          transform: translate3d(-50%, 0, 0) scale(0);\n}\n.shapes-wrap.home>.bc {\n  -webkit-transform: translate3d(-50%, 0, 0) scale(1);\n          transform: translate3d(-50%, 0, 0) scale(1);\n}\n.visual-wrap.new .bc {\n  -webkit-transform: translate3d(-25%, -25%, 0) scale(0);\n          transform: translate3d(-25%, -25%, 0) scale(0);\n}\n.shapes-wrap.new>.bc {\n  -webkit-transform: translate3d(-25%, -25%, 0) scale(0.5);\n          transform: translate3d(-25%, -25%, 0) scale(0.5);\n}\n.visual-wrap.recover .bc {\n  -webkit-transform: translate3d(0, 50%, 0) scale(0);\n          transform: translate3d(0, 50%, 0) scale(0);\n}\n.shapes-wrap.recover>.bc {\n  -webkit-transform: translate3d(0, 50%, 0) scale(1);\n          transform: translate3d(0, 50%, 0) scale(1);\n}\n/* 2. RED CIRCLE */\n.visual-wrap.home .rc {\n  -webkit-transform: translate3d(100%, -100%, 0) scale(0);\n          transform: translate3d(100%, -100%, 0) scale(0);\n}\n.shapes-wrap.home>.rc {\n  -webkit-transform: translate3d(100%, -100%, 0) scale(1);\n          transform: translate3d(100%, -100%, 0) scale(1);\n}\n.visual-wrap.new .rc {\n  -webkit-transform: translate3d(200%, -100%, 0) scale(0);\n          transform: translate3d(200%, -100%, 0) scale(0);\n}\n.shapes-wrap.new>.rc {\n  -webkit-transform: translate3d(200%, -100%, 0) scale(1);\n          transform: translate3d(200%, -100%, 0) scale(1);\n}\n.visual-wrap.recover .rc {\n  -webkit-transform: translate3d(0, -100%, 0) scale(0);\n          transform: translate3d(0, -100%, 0) scale(0);\n}\n.shapes-wrap.recover>.rc {\n  -webkit-transform: translate3d(0, -100%, 0) scale(1);\n          transform: translate3d(0, -100%, 0) scale(1);\n}\n/* 3. GREEN SQUARE */\n.gs {\n  -webkit-transform-origin: left;\n          transform-origin: left;\n}\n.visual-wrap.home .gs {\n  -webkit-transform: translate3d(200%, -100%, 0) scaleX(0);\n          transform: translate3d(200%, -100%, 0) scaleX(0);\n}\n.shapes-wrap.home>.gs {\n  -webkit-transform: translate3d(200%, -100%, 0) scaleX(1);\n          transform: translate3d(200%, -100%, 0) scaleX(1);\n}\n.visual-wrap.new .gs {\n  -webkit-transform: translate3d(200%, 0, 0) scaleX(0);\n          transform: translate3d(200%, 0, 0) scaleX(0);\n}\n.shapes-wrap.new>.gs {\n  -webkit-transform: translate3d(200%, 0, 0) scaleX(1);\n          transform: translate3d(200%, 0, 0) scaleX(1);\n}\n.visual-wrap.recover .gs {\n  -webkit-transform: translate3d(200%, 0, 0) scaleX(0);\n          transform: translate3d(200%, 0, 0) scaleX(0);\n}\n.shapes-wrap.recover>.gs {\n  -webkit-transform: translate3d(200%, 0, 0) scaleX(1);\n          transform: translate3d(200%, 0, 0) scaleX(1);\n}\n/* 4. YELLOW QUADRANT */\n.yq {\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n.visual-wrap.home .yq {\n  -webkit-transform: rotate(-90deg) translate3d(100%, 100%, 0);\n          transform: rotate(-90deg) translate3d(100%, 100%, 0);\n}\n.shapes-wrap.home>.yq {\n  -webkit-transform: rotate(-90deg) translate3d(100%, 100%, 0);\n          transform: rotate(-90deg) translate3d(100%, 100%, 0);\n}\n.visual-wrap.new .yq {\n  -webkit-transform: rotate(0deg) translate3d(100%, -100%, 0);\n          transform: rotate(0deg) translate3d(100%, -100%, 0);\n}\n.shapes-wrap.new>.yq {\n  -webkit-transform: rotate(0deg) translate3d(100%, -100%, 0);\n          transform: rotate(0deg) translate3d(100%, -100%, 0);\n}\n.visual-wrap.recover .yq {\n  -webkit-transform: translate3d(100%, -100%, 0) rotate(0deg);\n          transform: translate3d(100%, -100%, 0) rotate(0deg);\n}\n.shapes-wrap.recover>.yq {\n  -webkit-transform: translate3d(100%, -100%, 0) rotate(0deg);\n          transform: translate3d(100%, -100%, 0) rotate(0deg);\n}\n/* 5. RED QUADRANT */\n.rq {\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n.visual-wrap.home .rq {\n  -webkit-transform: translate3d(calc(100% - 1px), 0, 0) rotate(90deg);\n          transform: translate3d(calc(100% - 1px), 0, 0) rotate(90deg);\n}\n.shapes-wrap.home>.rq {\n  -webkit-transform: translate3d(calc(100% - 1px), 0, 0) rotate(90deg);\n          transform: translate3d(calc(100% - 1px), 0, 0) rotate(90deg);\n}\n.visual-wrap.new .rq {\n  -webkit-transform: translate3d(100%, 0, 0) rotate(0deg);\n          transform: translate3d(100%, 0, 0) rotate(0deg);\n}\n.shapes-wrap.new>.rq {\n  -webkit-transform: translate3d(100%, 0, 0) rotate(0deg);\n          transform: translate3d(100%, 0, 0) rotate(0deg);\n}\n.visual-wrap.recover .rq {\n  -webkit-transform: translate3d(100%, -100%, 0) rotate(90deg);\n          transform: translate3d(100%, -100%, 0) rotate(90deg);\n}\n.shapes-wrap.recover>.rq {\n  -webkit-transform: translate3d(100%, -100%, 0) rotate(90deg);\n          transform: translate3d(100%, -100%, 0) rotate(90deg);\n}\n/* 6. BLUE QUADRANT */\n.bq {\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n.visual-wrap.home .bq {\n  -webkit-transform: translate3d(calc(200% - 1px), -100%, 0) rotate(90deg);\n          transform: translate3d(calc(200% - 1px), -100%, 0) rotate(90deg);\n}\n.shapes-wrap.home>.bq {\n  -webkit-transform: translate3d(calc(200% - 1px), -100%, 0) rotate(90deg);\n          transform: translate3d(calc(200% - 1px), -100%, 0) rotate(90deg);\n}\n.visual-wrap.new .bq {\n  -webkit-transform: translate3d(calc(200% - 1px), -100%, 0) rotate(180deg);\n          transform: translate3d(calc(200% - 1px), -100%, 0) rotate(180deg);\n}\n.shapes-wrap.new>.bq {\n  -webkit-transform: translate3d(calc(200% - 1px), -100%, 0) rotate(180deg);\n          transform: translate3d(calc(200% - 1px), -100%, 0) rotate(180deg);\n}\n.visual-wrap.recover .bq {\n  -webkit-transform: translate3d(200%, -100%, 0) rotate(180deg);\n          transform: translate3d(200%, -100%, 0) rotate(180deg);\n}\n.shapes-wrap.recover>.bq {\n  -webkit-transform: translate3d(200%, -100%, 0) rotate(180deg);\n          transform: translate3d(200%, -100%, 0) rotate(180deg);\n}\n/* 7. YELLOW CIRCLE */\n.visual-wrap.home .yc {\n  -webkit-transform: translate3d(300%, 0, 0) scale(0);\n          transform: translate3d(300%, 0, 0) scale(0);\n}\n.shapes-wrap.home>.yc {\n  -webkit-transform: translate3d(300%, 0, 0) scale(1);\n          transform: translate3d(300%, 0, 0) scale(1);\n}\n.visual-wrap.new .yc {\n  -webkit-transform: translate3d(300%, 100%, 0) scale(0);\n          transform: translate3d(300%, 100%, 0) scale(0);\n}\n.shapes-wrap.new>.yc {\n  -webkit-transform: translate3d(300%, 100%, 0) scale(1);\n          transform: translate3d(300%, 100%, 0) scale(1);\n}\n.visual-wrap.recover .yc {\n  -webkit-transform: translate3d(300%, 0, 0) scale(0);\n          transform: translate3d(300%, 0, 0) scale(0);\n}\n.shapes-wrap.recover>.yc {\n  -webkit-transform: translate3d(300%, 0, 0) scale(0);\n          transform: translate3d(300%, 0, 0) scale(0);\n}\n/* 7. GREEN CIRCLE */\n.visual-wrap.home .gc {\n  -webkit-transform: translate3d(200%, 0, 0) scale(0);\n          transform: translate3d(200%, 0, 0) scale(0);\n}\n.shapes-wrap.home>.gc {\n  -webkit-transform: translate3d(200%, 0, 0) scale(1);\n          transform: translate3d(200%, 0, 0) scale(1);\n}\n.visual-wrap.new .gc {\n  -webkit-transform: translate3d(125%, -25%, 0) scale(0);\n          transform: translate3d(125%, -25%, 0) scale(0);\n}\n.shapes-wrap.new>.gc {\n  -webkit-transform: translate3d(125%, -25%, 0) scale(0.5);\n          transform: translate3d(125%, -25%, 0) scale(0.5);\n}\n.visual-wrap.recover .gc {\n  -webkit-transform: translate3d(125%, -25%, 0) scale(0);\n          transform: translate3d(125%, -25%, 0) scale(0);\n}\n.shapes-wrap.recover>.gc {\n  -webkit-transform: translate3d(125%, -25%, 0) scale(0.5);\n          transform: translate3d(125%, -25%, 0) scale(0.5);\n}\n/* 8. YELLOW SQUARE */\n.visual-wrap.home .ys {\n  -webkit-transform: translate3d(250%, 0, 0) scale(0);\n          transform: translate3d(250%, 0, 0) scale(0);\n}\n.shapes-wrap.home>.ys {\n  -webkit-transform: translate3d(250%, 0, 0) scale(1);\n          transform: translate3d(250%, 0, 0) scale(1);\n}\n.visual-wrap.new .ys {\n  -webkit-transform: translate3d(200%, 0, 0) scale(0);\n          transform: translate3d(200%, 0, 0) scale(0);\n}\n.shapes-wrap.new>.ys {\n  -webkit-transform: translate3d(200%, 0, 0) scale(1);\n          transform: translate3d(200%, 0, 0) scale(1);\n}\n.visual-wrap.recover .ys {\n  -webkit-transform: translate3d(200%, 0, 0) scale(0);\n          transform: translate3d(200%, 0, 0) scale(0);\n}\n.shapes-wrap.recover>.ys {\n  -webkit-transform: translate3d(200%, 0, 0) scale(1);\n          transform: translate3d(200%, 0, 0) scale(1);\n}\n@media only screen and (max-width: 1400px) {\n  .shapes-wrap {\n    width: 125%;\n    padding-bottom: 50%;\n  }\n}\n@media only screen and (max-width: 1024px) {\n  .visual-wrap {\n    justify-content: center;\n  }\n  .shapes-wrap {\n    width: 167%;\n    padding-bottom: 67%;\n  }\n  .header-wrap,\n  .padding {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdWFscy92aXN1YWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtDQUNkO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLCtCQUErQjtDQUNoQztBQUdELE1BQU07QUFDTixTQUFTO0FBQ1QsTUFBTTtBQUNOO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtDQUNuQjtBQUNEOztFQUVFLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsMENBQTBDO0VBQzFDLDJFQUFtRTtVQUFuRSxtRUFBbUU7RUFDbkUsaUVBQWlFO0NBQ2xFO0FBQ0Q7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixtRkFBMkU7VUFBM0UsMkVBQTJFO0VBQzNFLGlFQUFpRTtDQUNsRTtBQUNEO0VBQ0Usc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSxzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLHNCQUFzQjtDQUN2QjtBQUNEO0VBQ0U7SUFDRSx3QkFBd0I7R0FDekI7RUFDRDtJQUNFLHFCQUFxQjtHQUN0QjtDQUNGO0FBUEQ7RUFDRTtJQUNFLHdCQUF3QjtHQUN6QjtFQUNEO0lBQ0UscUJBQXFCO0dBQ3RCO0NBQ0Y7QUFDRDtFQUNFO0lBQ0UseUJBQXlCO0dBQzFCO0VBQ0Q7SUFDRSxxQkFBcUI7R0FDdEI7Q0FDRjtBQVBEO0VBQ0U7SUFDRSx5QkFBeUI7R0FDMUI7RUFDRDtJQUNFLHFCQUFxQjtHQUN0QjtDQUNGO0FBR0QsTUFBTTtBQUNOLFlBQVk7QUFDWixNQUFNO0FBQ047RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIseUNBQWlDO1VBQWpDLGlDQUFpQztDQUNsQztBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RC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QUNGO0FBQ0Q7RUFDRTtJQUNFLHdCQUF3QjtHQUN6QjtFQUNEO0lBQ0UsWUFBWTtJQUNaLG9CQUFvQjtHQUNyQjtFQUNEOztJQUVFLGNBQWM7R0FDZjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlzdWFscy92aXN1YWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udmlzdWFsLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuXG4vKiAgKi9cbi8qIFNWRyAqL1xuLyogICovXG4ubGluZXMge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMS4yZW07XG59XG4uYmx1ZS1ncm91cD5wYXRoLFxuLnllbGxvdy1ncm91cD5wYXRoIHtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMTExMDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDExMTA7XG4gIHdpbGwtY2hhbmdlOiBzdHJva2UtZGFzaG9mZnNldCwgdHJhbnNmb3JtO1xuICBhbmltYXRpb246IGRhc2hvZmZzZXQgMS42cyBjdWJpYy1iZXppZXIoMC44NSwgMCwgMC4xNSwgMSkgZm9yd2FyZHM7XG4gIHRyYW5zaXRpb246IHN0cm9rZS1kYXNoYXJyYXkgMS42cyBjdWJpYy1iZXppZXIoMC44NSwgMCwgMC4xNSwgMSk7XG59XG4uZ3JlZW4tZ3JvdXA+cGF0aCB7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDExMTA7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTExMDtcbiAgd2lsbC1jaGFuZ2U6IHN0cm9rZS1kYXNob2Zmc2V0O1xuICBhbmltYXRpb246IGRhc2hvZmZzZXQtcmV2ZXJzZSAxLjZzIGN1YmljLWJlemllcigwLjg1LCAwLCAwLjE1LCAxKSBmb3J3YXJkcztcbiAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hhcnJheSAxLjZzIGN1YmljLWJlemllcigwLjg1LCAwLCAwLjE1LCAxKTtcbn1cbi52aXN1YWwtd3JhcC5yZWNvdmVyIC5ibHVlLWdyb3VwPnBhdGgge1xuICBzdHJva2UtZGFzaGFycmF5OiAxMTA7XG59XG4udmlzdWFsLXdyYXAucmVjb3ZlciAuZ3JlZW4tZ3JvdXA+cGF0aCB7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDExMDtcbn1cbi52aXN1YWwtd3JhcC5yZWNvdmVyIC55ZWxsb3ctZ3JvdXA+cGF0aCB7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDExMDtcbn1cbkBrZXlmcmFtZXMgZGFzaG9mZnNldCB7XG4gIGZyb20ge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMTEwO1xuICB9XG4gIHRvIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBkYXNob2Zmc2V0LXJldmVyc2Uge1xuICBmcm9tIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTExMTA7XG4gIH1cbiAgdG8ge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICB9XG59XG5cblxuLyogICovXG4vKiBIRUFERVIgKi9cbi8qICAqL1xuLmhlYWRlci13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMS4yZW0gMC44ZW0gMC44ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQwJSk7XG59XG4ubWFzay1zcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndvcmQge1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMS44ZW0sIDApO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIGFuaW1hdGlvbjogZmxvYXQtdXAgMS42cyBjYWxjKHZhcigtLW9yZGVyKSo4MG1zKSBjdWJpYy1iZXppZXIoMC44NSwgMCwgMC4xNSwgMSkgZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIGZsb2F0LXVwIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxLjhlbSwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuXG4vKiAgKi9cbi8qIFNIQVBFUyAqL1xuLyogICovXG4uc2hhcGVzLW91dGVyLXdyYXAge1xuICBmbGV4LXNocmluazogMDtcbn1cbi5zaGFwZXMtd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiA0MCU7XG59XG4uY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cbi5yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xufVxuLnllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XG59XG4uZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XG59XG4uc2hhcGVzLXdyYXA+KiB7XG4gIHdpZHRoOiAyMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS42cyBjdWJpYy1iZXppZXIoMC44NSwgMCwgMC4xNSwgMSk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbn1cbi5zaGFwZXMtd3JhcD4qOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbn1cbi5zaGFwZXMtd3JhcD4qLmRvdWJsZSB7XG4gIHdpZHRoOiA0MCU7XG59XG4ucXVhZHJhbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnF1YWRyYW50LW1hc2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICBhbmltYXRpb246IHF1YWRyYW50LW1hc2sgMS42cyBjdWJpYy1iZXppZXIoMC44NSwgMCwgMC4xNSwgMSkgZm9yd2FyZHM7XG59XG4ucXVhZHJhbnQtY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjAwJTtcbiAgaGVpZ2h0OiAyMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5Aa2V5ZnJhbWVzIHF1YWRyYW50LW1hc2sge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuXG4vKiAwLiBSRUQgU1FVQVJFICovXG4udmlzdWFsLXdyYXAuaG9tZSAucnMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSBzY2FsZSgwKTtcbn1cbi5zaGFwZXMtd3JhcC5ob21lPi5ycyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHNjYWxlKDEpO1xufVxuLnZpc3VhbC13cmFwLm5ldyAucnMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAwLCAwKSBzY2FsZSgwKTtcbn1cbi5zaGFwZXMtd3JhcC5uZXc+LnJzIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgMCwgMCkgc2NhbGUoMSk7XG59XG4udmlzdWFsLXdyYXAucmVjb3ZlciAucnMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSBzY2FsZSgwKTtcbn1cbi5zaGFwZXMtd3JhcC5yZWNvdmVyPi5ycyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHNjYWxlKDEpO1xufVxuXG4vKiAxLiBCTFVFIENJUkNMRSAqL1xuLnZpc3VhbC13cmFwLmhvbWUgLmJjIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKSBzY2FsZSgwKTtcbn1cbi5zaGFwZXMtd3JhcC5ob21lPi5iYyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCkgc2NhbGUoMSk7XG59XG4udmlzdWFsLXdyYXAubmV3IC5iYyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1JSwgLTI1JSwgMCkgc2NhbGUoMCk7XG59XG4uc2hhcGVzLXdyYXAubmV3Pi5iYyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1JSwgLTI1JSwgMCkgc2NhbGUoMC41KTtcbn1cbi52aXN1YWwtd3JhcC5yZWNvdmVyIC5iYyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNTAlLCAwKSBzY2FsZSgwKTtcbn1cbi5zaGFwZXMtd3JhcC5yZWNvdmVyPi5iYyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNTAlLCAwKSBzY2FsZSgxKTtcbn1cblxuLyogMi4gUkVEIENJUkNMRSAqL1xuLnZpc3VhbC13cmFwLmhvbWUgLnJjIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAtMTAwJSwgMCkgc2NhbGUoMCk7XG59XG4uc2hhcGVzLXdyYXAuaG9tZT4ucmMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIC0xMDAlLCAwKSBzY2FsZSgxKTtcbn1cbi52aXN1YWwtd3JhcC5uZXcgLnJjIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAlLCAtMTAwJSwgMCkgc2NhbGUoMCk7XG59XG4uc2hhcGVzLXdyYXAubmV3Pi5yYyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwJSwgLTEwMCUsIDApIHNjYWxlKDEpO1xufVxuLnZpc3VhbC13cmFwLnJlY292ZXIgLnJjIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCkgc2NhbGUoMCk7XG59XG4uc2hhcGVzLXdyYXAucmVjb3Zlcj4ucmMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKSBzY2FsZSgxKTtcbn1cblxuLyogMy4gR1JFRU4gU1FVQVJFICovXG4uZ3Mge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xufVxuLnZpc3VhbC13cmFwLmhvbWUgLmdzIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAlLCAtMTAwJSwgMCkgc2NhbGVYKDApO1xufVxuLnNoYXBlcy13cmFwLmhvbWU+LmdzIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAlLCAtMTAwJSwgMCkgc2NhbGVYKDEpO1xufVxuLnZpc3VhbC13cmFwLm5ldyAuZ3Mge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMCUsIDAsIDApIHNjYWxlWCgwKTtcbn1cbi5zaGFwZXMtd3JhcC5uZXc+LmdzIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAlLCAwLCAwKSBzY2FsZVgoMSk7XG59XG4udmlzdWFsLXdyYXAucmVjb3ZlciAuZ3Mge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMCUsIDAsIDApIHNjYWxlWCgwKTtcbn1cbi5zaGFwZXMtd3JhcC5yZWNvdmVyPi5ncyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwJSwgMCwgMCkgc2NhbGVYKDEpO1xufVxuXG4vKiA0LiBZRUxMT1cgUVVBRFJBTlQgKi9cbi55cSB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcbn1cbi52aXN1YWwtd3JhcC5ob21lIC55cSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlM2QoMTAwJSwgMTAwJSwgMCk7XG59XG4uc2hhcGVzLXdyYXAuaG9tZT4ueXEge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsIDEwMCUsIDApO1xufVxuLnZpc3VhbC13cmFwLm5ldyAueXEge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLCAtMTAwJSwgMCk7XG59XG4uc2hhcGVzLXdyYXAubmV3Pi55cSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsIC0xMDAlLCAwKTtcbn1cbi52aXN1YWwtd3JhcC5yZWNvdmVyIC55cSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgLTEwMCUsIDApIHJvdGF0ZSgwZGVnKTtcbn1cbi5zaGFwZXMtd3JhcC5yZWNvdmVyPi55cSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgLTEwMCUsIDApIHJvdGF0ZSgwZGVnKTtcbn1cblxuLyogNS4gUkVEIFFVQURSQU5UICovXG4ucnEge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XG59XG4udmlzdWFsLXdyYXAuaG9tZSAucnEge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKGNhbGMoMTAwJSAtIDFweCksIDAsIDApIHJvdGF0ZSg5MGRlZyk7XG59XG4uc2hhcGVzLXdyYXAuaG9tZT4ucnEge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKGNhbGMoMTAwJSAtIDFweCksIDAsIDApIHJvdGF0ZSg5MGRlZyk7XG59XG4udmlzdWFsLXdyYXAubmV3IC5ycSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlKDBkZWcpO1xufVxuLnNoYXBlcy13cmFwLm5ldz4ucnEge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHJvdGF0ZSgwZGVnKTtcbn1cbi52aXN1YWwtd3JhcC5yZWNvdmVyIC5ycSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgLTEwMCUsIDApIHJvdGF0ZSg5MGRlZyk7XG59XG4uc2hhcGVzLXdyYXAucmVjb3Zlcj4ucnEge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIC0xMDAlLCAwKSByb3RhdGUoOTBkZWcpO1xufVxuXG4vKiA2LiBCTFVFIFFVQURSQU5UICovXG4uYnEge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XG59XG4udmlzdWFsLXdyYXAuaG9tZSAuYnEge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKGNhbGMoMjAwJSAtIDFweCksIC0xMDAlLCAwKSByb3RhdGUoOTBkZWcpO1xufVxuLnNoYXBlcy13cmFwLmhvbWU+LmJxIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChjYWxjKDIwMCUgLSAxcHgpLCAtMTAwJSwgMCkgcm90YXRlKDkwZGVnKTtcbn1cbi52aXN1YWwtd3JhcC5uZXcgLmJxIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChjYWxjKDIwMCUgLSAxcHgpLCAtMTAwJSwgMCkgcm90YXRlKDE4MGRlZyk7XG59XG4uc2hhcGVzLXdyYXAubmV3Pi5icSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoY2FsYygyMDAlIC0gMXB4KSwgLTEwMCUsIDApIHJvdGF0ZSgxODBkZWcpO1xufVxuLnZpc3VhbC13cmFwLnJlY292ZXIgLmJxIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAlLCAtMTAwJSwgMCkgcm90YXRlKDE4MGRlZyk7XG59XG4uc2hhcGVzLXdyYXAucmVjb3Zlcj4uYnEge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMCUsIC0xMDAlLCAwKSByb3RhdGUoMTgwZGVnKTtcbn1cblxuLyogNy4gWUVMTE9XIENJUkNMRSAqL1xuLnZpc3VhbC13cmFwLmhvbWUgLnljIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMDAlLCAwLCAwKSBzY2FsZSgwKTtcbn1cbi5zaGFwZXMtd3JhcC5ob21lPi55YyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAwJSwgMCwgMCkgc2NhbGUoMSk7XG59XG4udmlzdWFsLXdyYXAubmV3IC55YyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAwJSwgMTAwJSwgMCkgc2NhbGUoMCk7XG59XG4uc2hhcGVzLXdyYXAubmV3Pi55YyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAwJSwgMTAwJSwgMCkgc2NhbGUoMSk7XG59XG4udmlzdWFsLXdyYXAucmVjb3ZlciAueWMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwMCUsIDAsIDApIHNjYWxlKDApO1xufVxuLnNoYXBlcy13cmFwLnJlY292ZXI+LnljIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMDAlLCAwLCAwKSBzY2FsZSgwKTtcbn1cblxuLyogNy4gR1JFRU4gQ0lSQ0xFICovXG4udmlzdWFsLXdyYXAuaG9tZSAuZ2Mge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMCUsIDAsIDApIHNjYWxlKDApO1xufVxuLnNoYXBlcy13cmFwLmhvbWU+LmdjIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAlLCAwLCAwKSBzY2FsZSgxKTtcbn1cbi52aXN1YWwtd3JhcC5uZXcgLmdjIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMjUlLCAtMjUlLCAwKSBzY2FsZSgwKTtcbn1cbi5zaGFwZXMtd3JhcC5uZXc+LmdjIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMjUlLCAtMjUlLCAwKSBzY2FsZSgwLjUpO1xufVxuLnZpc3VhbC13cmFwLnJlY292ZXIgLmdjIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMjUlLCAtMjUlLCAwKSBzY2FsZSgwKTtcbn1cbi5zaGFwZXMtd3JhcC5yZWNvdmVyPi5nYyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTI1JSwgLTI1JSwgMCkgc2NhbGUoMC41KTtcbn1cblxuLyogOC4gWUVMTE9XIFNRVUFSRSAqL1xuLnZpc3VhbC13cmFwLmhvbWUgLnlzIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNTAlLCAwLCAwKSBzY2FsZSgwKTtcbn1cbi5zaGFwZXMtd3JhcC5ob21lPi55cyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjUwJSwgMCwgMCkgc2NhbGUoMSk7XG59XG4udmlzdWFsLXdyYXAubmV3IC55cyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwJSwgMCwgMCkgc2NhbGUoMCk7XG59XG4uc2hhcGVzLXdyYXAubmV3Pi55cyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwJSwgMCwgMCkgc2NhbGUoMSk7XG59XG4udmlzdWFsLXdyYXAucmVjb3ZlciAueXMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMCUsIDAsIDApIHNjYWxlKDApO1xufVxuLnNoYXBlcy13cmFwLnJlY292ZXI+LnlzIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAlLCAwLCAwKSBzY2FsZSgxKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgLnNoYXBlcy13cmFwIHtcbiAgICB3aWR0aDogMTI1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAudmlzdWFsLXdyYXAge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5zaGFwZXMtd3JhcCB7XG4gICAgd2lkdGg6IDE2NyU7XG4gICAgcGFkZGluZy1ib3R0b206IDY3JTtcbiAgfVxuICAuaGVhZGVyLXdyYXAsXG4gIC5wYWRkaW5nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/visuals/visuals.component.html":
/*!************************************************!*\
  !*** ./src/app/visuals/visuals.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"visual-wrap\" [ngClass]=\"currentRoute\">\n  <div class=\"padding\"></div>\n  <div class=\"header-wrap\">\n    <h1 [@fade] *ngIf=\"currentRoute === 'home'\" class=\"header center\">\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 0\">Why, </span>\n      </span>\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 1\">hello </span>\n      </span>\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 2\">there</span>\n      </span>\n    </h1>\n    <h1 [@fade] *ngIf=\"currentRoute === 'new'\" class=\"header center\">\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 0\">Nice </span>\n      </span>\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 1\">meeting </span>\n      </span>\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 2\">you</span>\n      </span>\n    </h1>\n    <h1 [@fade] *ngIf=\"currentRoute === 'recover'\" class=\"header center\">\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 0\">We've </span>\n      </span>\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 1\">got </span>\n      </span>\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 2\">you</span>\n      </span>\n    </h1>\n  </div>\n  <div class=\"shapes-outer-wrap\">\n    <div class=\"shapes-wrap\" [ngClass]=\"loaded && currentRoute\">\n      <div class=\"rs red square\"></div>\n      <div class=\"bc blue circle double\"></div>\n      <div class=\"rc red circle\"></div>\n      <div class=\"gs green square\"></div>\n      <div class=\"yq quadrant\">\n        <div class=\"quadrant-mask\">\n          <div class=\"quadrant-circle yellow\"></div>\n        </div>\n      </div>\n      <div class=\"rq quadrant\">\n        <div class=\"quadrant-mask\">\n          <div class=\"quadrant-circle red\"></div>\n        </div>\n      </div>\n      <div class=\"yc yellow circle\"></div>\n      <div class=\"bq quadrant\">\n        <div class=\"quadrant-mask\">\n          <div class=\"quadrant-circle blue\"></div>\n        </div>\n      </div>\n      <div class=\"gc green circle double\"></div>\n      <div class=\"ys yellow square double\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/visuals/visuals.component.ts":
/*!**********************************************!*\
  !*** ./src/app/visuals/visuals.component.ts ***!
  \**********************************************/
/*! exports provided: VisualsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualsComponent", function() { return VisualsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisualsComponent = /** @class */ (function () {
    function VisualsComponent() {
        this.loaded = false;
    }
    VisualsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loaded = true;
        }, 0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VisualsComponent.prototype, "currentRoute", void 0);
    VisualsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visuals',
            template: __webpack_require__(/*! ./visuals.component.html */ "./src/app/visuals/visuals.component.html"),
            styles: [__webpack_require__(/*! ./visuals.component.css */ "./src/app/visuals/visuals.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            position: 'absolute',
                            opacity: 1
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('540ms cubic-bezier(0.55, 0, 1, 0.45)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                    ])
                ])
            ]
        })
    ], VisualsComponent);
    return VisualsComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! /Users/vu/Documents/Work/Repositories.nosync/sign/front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
