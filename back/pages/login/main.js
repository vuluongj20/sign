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
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/verify/verify.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset/reset.component */ "./src/app/reset/reset.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'verify/:rand', component: _verify_verify_component__WEBPACK_IMPORTED_MODULE_4__["VerifyComponent"], data: { animation: 'verify' } },
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

module.exports = ".app-wrap {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n}\n.app-visuals {\n  position: relative;\n  width: calc(100% - 24em);\n  height: 100%;\n  border-right: solid 1px var(--line);\n  overflow: hidden;\n  background: #F9F9F9;\n  --dark: #272727;\n}\n.app-content {\n  position: relative;\n  width: 24em;\n  height: 100%;\n  flex-shrink: 0;\n}\n@media only screen and (min-width: 1401px) {\n  .app-content {\n    width: 28em;\n  }\n}\n@media only screen and (max-width: 1024px) {\n  .app-visuals {\n    position: absolute;\n    width: 100%;\n    border-right: none;\n  }\n  .app-content {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    width: 26em;\n    height: 32em;\n    box-sizing: border-box;\n    background: var(--background);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-radius: 1.2em;\n    border: solid 1px var(--line);\n  }\n  @supports ((-webkit-backdrop-filter: blur(0px)) or (backdrop-filter: blur(0px))) {\n    .app-content {\n      background: var(--background-opaque);\n      border: solid 1px var(--line-opaque);\n      -webkit-backdrop-filter: saturate(0.5) blur(40px);\n              backdrop-filter: saturate(0.5) blur(40px);\n    }\n  }\n}\n@media only screen and (max-width: 480px) {\n  .app-visuals {\n    display: none;\n  }\n  .app-content {\n    width: 100%;\n    height: 100%;\n    border-radius: 0;\n    border: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRTtJQUNFLFlBQVk7R0FDYjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0dBQ3BCO0VBQ0Q7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFNBQVM7SUFDVCx5Q0FBaUM7WUFBakMsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDhCQUE4QjtHQUMvQjtFQUNEO0lBQ0U7TUFDRSxxQ0FBcUM7TUFDckMscUNBQXFDO01BQ3JDLGtEQUEwQztjQUExQywwQ0FBMEM7S0FDM0M7R0FDRjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLGNBQWM7R0FDZjtFQUNEO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsYUFBYTtHQUNkO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtd3JhcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFwcC12aXN1YWxzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjRlbSk7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggdmFyKC0tbGluZSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNGOUY5Rjk7XG4gIC0tZGFyazogIzI3MjcyNztcbn1cbi5hcHAtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI0ZW07XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDFweCkge1xuICAuYXBwLWNvbnRlbnQge1xuICAgIHdpZHRoOiAyOGVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuYXBwLXZpc3VhbHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbiAgLmFwcC1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHdpZHRoOiAyNmVtO1xuICAgIGhlaWdodDogMzJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuMmVtO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWxpbmUpO1xuICB9XG4gIEBzdXBwb3J0cyAoYmFja2Ryb3AtZmlsdGVyOiBibHVyKDBweCkpIHtcbiAgICAuYXBwLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1vcGFxdWUpO1xuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tbGluZS1vcGFxdWUpO1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgwLjUpIGJsdXIoNDBweCk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5hcHAtdmlzdWFscyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYXBwLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufVxuIl19 */"

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
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/verify/verify.component.ts");
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
                _verify_verify_component__WEBPACK_IMPORTED_MODULE_11__["VerifyComponent"],
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
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
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/users/' + link, data);
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

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 0 2.4em;\n}\n.check {\n  width: 6em;\n  height: 6em;\n  margin-bottom: 1.6em;\n  opacity: 0;\n  -webkit-animation: fade-in 1.2s 280ms cubic-bezier(0, 0.55, 0.45, 1) forwards;\n          animation: fade-in 1.2s 280ms cubic-bezier(0, 0.55, 0.45, 1) forwards;\n}\n.circle {\n  margin: 0 auto 2em auto;\n  stroke: var(--dark);\n  stroke-width: 4;\n  -webkit-transform: translate(50px, 50px) rotate(-90deg);\n          transform: translate(50px, 50px) rotate(-90deg);\n  stroke-dasharray: 302;\n  stroke-dashoffset: 302;\n  -webkit-animation: circle-stroke 1.2s 280ms cubic-bezier(0.85, 0, 0.15, 1) forwards;\n          animation: circle-stroke 1.2s 280ms cubic-bezier(0.85, 0, 0.15, 1) forwards;\n}\n.line {\n  stroke: var(--dark);\n  stroke-width: 6;\n  stroke-dasharray: 95;\n  stroke-dashoffset: 95;\n  -webkit-animation: line-stroke 1.2s 280ms cubic-bezier(0.85, 0, 0.15, 1) forwards;\n          animation: line-stroke 1.2s 280ms cubic-bezier(0.85, 0, 0.15, 1) forwards;\n}\n.link {\n  display: inline-block;\n}\n@-webkit-keyframes circle-stroke {\n  from {\n    stroke-dashoffset: 302;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes circle-stroke {\n  from {\n    stroke-dashoffset: 302;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@-webkit-keyframes line-stroke {\n  from {\n    stroke-dashoffset: 95;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes line-stroke {\n  from {\n    stroke-dashoffset: 95;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uZS9kb25lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsOEVBQXNFO1VBQXRFLHNFQUFzRTtDQUN2RTtBQUNEO0VBQ0Usd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsd0RBQWdEO1VBQWhELGdEQUFnRDtFQUNoRCxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG9GQUE0RTtVQUE1RSw0RUFBNEU7Q0FDN0U7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrRkFBMEU7VUFBMUUsMEVBQTBFO0NBQzNFO0FBQ0Q7RUFDRSxzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFO0lBQ0UsdUJBQXVCO0dBQ3hCO0VBQ0Q7SUFDRSxxQkFBcUI7R0FDdEI7Q0FDRjtBQVBEO0VBQ0U7SUFDRSx1QkFBdUI7R0FDeEI7RUFDRDtJQUNFLHFCQUFxQjtHQUN0QjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLHNCQUFzQjtHQUN2QjtFQUNEO0lBQ0UscUJBQXFCO0dBQ3RCO0NBQ0Y7QUFQRDtFQUNFO0lBQ0Usc0JBQXNCO0dBQ3ZCO0VBQ0Q7SUFDRSxxQkFBcUI7R0FDdEI7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2RvbmUvZG9uZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIuNGVtO1xufVxuLmNoZWNrIHtcbiAgd2lkdGg6IDZlbTtcbiAgaGVpZ2h0OiA2ZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNmVtO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGUtaW4gMS4ycyAyODBtcyBjdWJpYy1iZXppZXIoMCwgMC41NSwgMC40NSwgMSkgZm9yd2FyZHM7XG59XG4uY2lyY2xlIHtcbiAgbWFyZ2luOiAwIGF1dG8gMmVtIGF1dG87XG4gIHN0cm9rZTogdmFyKC0tZGFyayk7XG4gIHN0cm9rZS13aWR0aDogNDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTBweCwgNTBweCkgcm90YXRlKC05MGRlZyk7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDMwMjtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMwMjtcbiAgYW5pbWF0aW9uOiBjaXJjbGUtc3Ryb2tlIDEuMnMgMjgwbXMgY3ViaWMtYmV6aWVyKDAuODUsIDAsIDAuMTUsIDEpIGZvcndhcmRzO1xufVxuLmxpbmUge1xuICBzdHJva2U6IHZhcigtLWRhcmspO1xuICBzdHJva2Utd2lkdGg6IDY7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDk1O1xuICBzdHJva2UtZGFzaG9mZnNldDogOTU7XG4gIGFuaW1hdGlvbjogbGluZS1zdHJva2UgMS4ycyAyODBtcyBjdWJpYy1iZXppZXIoMC44NSwgMCwgMC4xNSwgMSkgZm9yd2FyZHM7XG59XG4ubGluayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbkBrZXlmcmFtZXMgY2lyY2xlLXN0cm9rZSB7XG4gIGZyb20ge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAzMDI7XG4gIH1cbiAgdG8ge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxpbmUtc3Ryb2tlIHtcbiAgZnJvbSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDk1O1xuICB9XG4gIHRvIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/done/done.component.html":
/*!******************************************!*\
  !*** ./src/app/done/done.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <svg class=\"check\" viewBox=\"0 0 100 100\">\n    <g fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n      <circle r=\"48\" class=\"circle\"/>\n      <path class=\"line\" d=\"M20 60 45 80 78 30\" />\n    </g>\n  </svg>\n  <div>\n    <p class=\"text float-up\" style=\"--order: 4\">{{mes[0]}}</p>\n    <a\n      *ngIf=\"mes[1]\"\n      routerLink=\"/\"\n      class=\"link float-up\"\n      style=\"--order: 5\">{{mes[1]}}</a>\n  </div>\n</div>\n"

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

module.exports = "<div class=\"box\">\n  <h2 class=\"header\">\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 0\">Snap!</span>\n    </span>\n  </h2>\n  <div *ngIf=\"status == 500\">\n    <p class=\"text float-up\" style=\"--order: 3\">There was a server error. You could try again later.</p>\n  </div>\n  <div *ngIf=\"status == 404\">\n    <p class=\"text float-up\" style=\"--order: 3\">What you're looking for doesn't exist. Make sure the link you put is was correct, or check back later.</p>\n  </div>\n  <div *ngIf=\"status != 500 && status != 404\">\n    <p class=\"text float-up\" style=\"--order: 3\">Something went wrong.</p>\n  </div>\n</div>\n"

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

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 0 2.4em;\n}\n.forgot-link {\n  display: inline-block;\n  font-size: 0.9em;\n}\n.outer-link-wrap.bottom {\n  top: auto;\n  bottom: 1.2em;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsVUFBVTtFQUNWLG9DQUE0QjtVQUE1Qiw0QkFBNEI7Q0FDN0IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIuNGVtO1xufVxuLmZvcmdvdC1saW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuLm91dGVyLWxpbmstd3JhcC5ib3R0b20ge1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogMS4yZW07XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loginPage\" class=\"box link-bottom\">\n  <h2 class=\"header\">\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 0\">Sign </span>\n    </span>\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 1\">in</span>\n    </span>\n  </h2>\n  <p class=\"message float-up\" [class.red]=\"emailErr || emailErr2 || passErr\" style=\"--order: 2\">{{mes}}</p>\n  <form [formGroup]=\"userGroup\">\n    <input\n      class=\"email-input float-up\"\n      style=\"--order: 3\"\n      [class.red]=\"emailErr || emailErr2\"\n      type=\"email\"\n      placeholder=\"Email\"\n      formControlName=\"email\">\n    <input\n      class=\"password-input float-up\"\n      style=\"--order: 4\"\n      [class.red]=\"passErr\"\n      type=\"password\"\n      placeholder=\"Password\"\n      formControlName=\"pass\">\n    <a\n      class=\"forgot-link float-up\"\n      style=\"--order: 5\"\n      routerLink=\"/recover\">Forgot your password?</a>\n    <button\n      class=\"confirm-button float-up\"\n      style=\"--order: 6\"\n      (click)=\"login($event)\">\n      Sign in\n      <svg *ngIf=\"loading\" class=\"center\" width=\"1.2em\" height=\"1.2em\">\n        <circle r=\"0.5em\" class=\"loader-circle\"/>\n      </svg>\n    </button>\n  </form>\n</div>\n<div class=\"outer-link-wrap bottom\" style=\"--order: 5\">\n  <p class=\"float-up\">Don't have an account? </p>\n  <a\n    class=\"float-up\"\n    routerLink=\"/new\">Sign up now.</a>\n</div>\n<app-error *ngIf=\"resErr\" [status]=\"resErr\"></app-error>\n"

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
            var user = this.userGroup.value, button_1 = $event.currentTarget;
            button_1.classList.add('loading');
            this.loading = true;
            this.dataService.post('login', user).subscribe(function (data) {
                _this.res = data;
                if (!_this.res.userFound) {
                    button_1.classList.remove('loading');
                    _this.loading = false;
                    _this.mes = 'Email address not found.';
                    _this.passErr = false;
                    _this.emailErr = true;
                }
                else {
                    if (!_this.res.authorized) {
                        button_1.classList.remove('loading');
                        _this.loading = false;
                        _this.mes = 'Wrong password :(';
                        _this.emailErr = false;
                        _this.passErr = true;
                    }
                    else {
                        if (_this.res.verified) {
                            document.location.assign('/home/');
                        }
                        else {
                            _this.mes = 'Email address not yet verified. Check your mailbox and verify it now.';
                            button_1.classList.remove('loading');
                            _this.loading = false;
                            _this.emailErr = true;
                            _this.passErr = false;
                        }
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

module.exports = "<div *ngIf=\"newPage\" class=\"box\">\n  <h2 class=\"header\">\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 0\">Sign </span>\n    </span>\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 1\">up</span>\n    </span>\n  </h2>\n  <p class=\"message float-up\" [class.red]=\"newemailErr || newPassErr || newPass2Err\" style=\"--order: 2\">{{newMes}}</p>\n  <form [formGroup]=\"newGroup\" autocomplete=\"off\">\n    <input\n      class=\"email-input float-up\"\n      style=\"--order: 3\"\n      autocomplete=\"none\"\n      [class.red]=\"newemailErr\"\n      type=\"email\"\n      placeholder=\"Email\"\n      formControlName=\"email\">\n    <input\n      class=\"password-input float-up\"\n      style=\"--order: 4\"\n      autocomplete=\"new-password\"\n      [class.red]=\"newPassErr\"\n      type=\"password\"\n      placeholder=\"Password\"\n      formControlName=\"pass\">\n    <input\n      class=\"confirm-password-input float-up\"\n      style=\"--order: 5\"\n      autocomplete=\"new-password\"\n      [class.red]=\"newPass2Err\"\n      type=\"password\"\n      placeholder=\"Comfirm password\"\n      formControlName=\"pass2\">\n    <button\n      class=\"confirm-button float-up\"\n      style=\"--order: 6\"\n      type=\"submit\"\n      (click)=\"new($event)\">\n      Create account\n      <svg *ngIf=\"loading\" class=\"center\" width=\"1.2em\" height=\"1.2em\">\n        <circle r=\"0.5em\" class=\"loader-circle\"/>\n      </svg>\n    </button>\n  </form>\n</div>\n<div class=\"outer-link-wrap\" style=\"--order: 3\">\n  <a\n    class=\"float-up\"\n    routerLink=\"/\">\n    <svg class=\"back-arrow\" viewBox=\"0 0 5 10\">\n        <path stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-linecap=\"round\" d=\"M4 1 1 5 4 9\"></path>\n    </svg>\n    Back to Sign in</a>\n</div>\n<app-done *ngIf=\"doneMes\" [mes]=\"doneMes\"></app-done>\n<app-error *ngIf=\"resErr\" [status]=\"resErr\"></app-error>\n"

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
        this.newMes = 'Become a member now!';
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
                var button_1 = $event.currentTarget, newMem = this.newGroup.value;
                button_1.classList.add('loading');
                this.loading = true;
                this.newPassErr = false;
                this.newPass2Err = false;
                this.dataService.post('new', newMem).subscribe(function (data) {
                    _this.newRes = data;
                    button_1.classList.remove('loading');
                    _this.loading = false;
                    if (_this.newRes.userExists) {
                        _this.newMes = 'Account already exists.';
                    }
                    else {
                        _this.newPage = false;
                        _this.doneMes = ['You\'re all set. Check your inbox to verify your email.'];
                    }
                }, function (err) {
                    _this.newPage = false;
                    _this.resErr = err.status;
                });
            }
            else {
                this.newPassErr = true;
                this.newPass2Err = true;
                this.newMes = 'The passwords are not matching.';
            }
        }
        else {
            if (this.newGroup.get('email').errors) {
                if (this.newGroup.get('email').errors.required) {
                    this.newMes = 'Forgetting something?';
                    this.newemailErr = true;
                }
                if (this.newGroup.get('email').errors.email) {
                    this.newMes = 'Oops… Invalid email address.';
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

module.exports = "<div *ngIf=\"inputPage\" class=\"box\">\n  <h2 class=\"header\">\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 0\">Password </span>\n    </span>\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 1\">reset</span>\n    </span>\n  </h2>\n  <p class=\"message float-up\" [class.red]=\"err\" style=\"--order: 2\">{{mes}}</p>\n  <input class=\"email-input float-up\" style=\"--order: 3\" [class.red]=\"err\" type=\"email\" [formControl]=\"forgotEmail\" placeholder=\"Email\">\n  <button class=\"confirm-button float-up\" style=\"--order: 4\" type=\"button\" (click)=\"sendEmail($event)\">\n    Done\n    <svg *ngIf=\"loading\" class=\"center\" width=\"1.2em\" height=\"1.2em\">\n      <circle r=\"0.5em\" class=\"loader-circle\"/>\n    </svg>\n  </button>\n</div>\n<div class=\"outer-link-wrap\" style=\"--order: 3\">\n  <a\n    class=\"float-up\"\n    routerLink=\"/\">\n    <svg class=\"back-arrow\" viewBox=\"0 0 5 10\">\n        <path stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-linecap=\"round\" d=\"M4 1 1 5 4 9\"></path>\n    </svg>\n    Back to Sign in</a>\n</div>\n<app-done *ngIf=\"doneMes\" [mes]=\"doneMes\"></app-done>\n<app-error *ngIf=\"resErr\" [status]=\"resErr\"></app-error>\n"

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
        this.mes = 'We\'ll send you an email with a link to reset your password.';
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
            var email = this.forgotEmail.value, button_1 = $event.currentTarget;
            button_1.classList.add('loading');
            this.loading = true;
            this.dataService.post('recover', { mail: email }).subscribe(function (data) {
                _this.res = data;
                button_1.classList.remove('loading');
                _this.loading = false;
                if (_this.res.userExists) {
                    _this.inputPage = false;
                    _this.doneMes = ['Done! We sent you an email with a link to reset your password.'];
                }
                else {
                    _this.err = true;
                    _this.mes = 'Oops! We couldn\'t find an account associated with this email.';
                }
            }, function (err) {
                _this.inputPage = false;
                _this.resErr = err.status;
            });
        }
        else {
            this.err = true;
            if (this.forgotEmail.errors.email) {
                this.mes = 'Invalid email. Make sure you typed in your full email address.';
            }
            if (this.forgotEmail.errors.required) {
                this.mes = 'We need your email address to send you a password reset link.';
            }
        }
    };
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

module.exports = "<div *ngIf=\"resetPage\" class=\"box\">\n  <h2 class=\"header\">\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 0\">Password </span>\n    </span>\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 1\">reset</span>\n    </span>\n  </h2>\n  <p class=\"message float-up\" [class.red]=\"newPassErr || newPass2Err\" style=\"--order: 3\">{{resetMes}}</p>\n  <form [formGroup]=\"resetGroup\">\n    <input\n      class=\"float-up\"\n      style=\"--order: 4\"\n      [class.red]=\"newPassErr\"\n      formControlName=\"newPass\"\n      placeholder=\"New password\"\n      type=\"password\"\n      autocomplete=\"new-password\">\n    <input\n      class=\"float-up\"\n      style=\"--order: 5\"\n      [class.red]=\"newPass2Err\"\n      formControlName=\"newPass2\"\n      placeholder=\"Confirm new password\"\n      type=\"password\"\n      autocomplete=\"new-password\">\n    <button\n      (click)=\"reset($event)\"\n      class=\"float-up\"\n      style=\"--order: 6\">\n      Reset\n      <svg *ngIf=\"loading\" class=\"center\" width=\"1.2em\" height=\"1.2em\">\n        <circle r=\"0.5em\" class=\"loader-circle\"/>\n      </svg>\n    </button>\n  </form>\n</div>\n<div class=\"outer-link-wrap\" style=\"--order: 3\">\n  <a\n    class=\"float-up\"\n    routerLink=\"/\">\n    <svg class=\"back-arrow\" viewBox=\"0 0 5 10\">\n        <path stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-linecap=\"round\" d=\"M4 1 1 5 4 9\"></path>\n    </svg>\n    Sign in</a>\n</div>\n<div *ngIf=\"invalidPage\" class=\"fin box center\">\n  <h2 class=\"header\">\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 0\">Oh </span>\n    </span>\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 1\">no!</span>\n    </span>\n  </h2>\n  <p class=\"message float-up\" style=\"--order: 3\">This link is not valid.</p>\n</div>\n<div *ngIf=\"expiredPage\" class=\"fin box center\">\n  <h2 class=\"header\">\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 0\">Too </span>\n    </span>\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 1\">late!</span>\n    </span>\n  </h2>\n  <p class=\"message float-up\" style=\"--order: 3\">This link has expired.</p>\n  <a (click)=\"resendLink()\">Send a new link</a>\n</div>\n<app-done *ngIf=\"doneMes\" [mes]=\"doneMes\"></app-done>\n<app-error *ngIf=\"resErr\" [status]=\"resErr\"></app-error>\n"

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
        this.resetMes = 'Enter the new password here.';
        // Input field errors, true makes the input field go red.
        this.newPassErr = false;
        this.newPass2Err = false;
        // Views, true means that view is shown
        this.resetPage = false;
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
                _this.doneMes = ['Sent! Check your mailbox.'];
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
                    var rand = params.rand, newPass = _this.resetGroup.get('newPass').value, button = $event.currentTarget;
                    button.classList.add('loading');
                    _this.loading = true;
                    _this.dataService.post('reset', { rand: rand, newPass: newPass }).subscribe(function (data) {
                        _this.resetRes = data;
                        button.classList.remove('loading');
                        _this.loading = false;
                        if (_this.resetRes.userFound) {
                            if (_this.resetRes.randValid) {
                                _this.resetPage = false;
                                _this.doneMes = ['Awesome! Your password has been successfully reset.', 'Sign in now.'];
                            }
                            else {
                                _this.resetPage = false;
                                _this.expiredPage = true;
                            }
                        }
                        else {
                            _this.resetMes = 'We couldn\'t verify this reset link!';
                        }
                    }, function (err) {
                        _this.resetPage = false;
                        _this.resErr = err.status;
                    });
                });
            }
            else {
                this.resetMes = 'The passwords are not matching.';
                this.newPassErr = true;
                this.newPass2Err = true;
            }
        }
        else {
            if (this.resetGroup.get('newPass').errors) {
                this.resetMes = 'Forgetting something?';
                this.newPassErr = true;
            }
            else {
                this.newPassErr = false;
            }
            if (this.resetGroup.get('newPass2').errors) {
                this.resetMes = 'Forgetting something?';
                this.newPass2Err = true;
            }
            else {
                this.newPass2Err = false;
            }
        }
    };
    ResetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var rand = params.rand;
            _this.dataService.post('verify', { type: 'reset', rand: rand }).subscribe(function (data) {
                _this.initRes = data;
                if (_this.initRes.userFound) {
                    if (_this.initRes.randValid) {
                        _this.resetPage = true;
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

/***/ "./src/app/verify/verify.component.css":
/*!*********************************************!*\
  !*** ./src/app/verify/verify.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 0 2.4em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZ5L3ZlcmlmeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS92ZXJpZnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyLjRlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/verify/verify.component.html":
/*!**********************************************!*\
  !*** ./src/app/verify/verify.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"invalidPage\" class=\"box\">\n  <h2 class=\"header\">\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 0\">Oh </span>\n    </span>\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 1\">no!</span>\n    </span>\n  </h2>\n  <p class=\"text float-up\" style=\"--order: 3\">This link is not valid. Make sure you used the right one.</p>\n</div>\n<div *ngIf=\"expiredPage\" class=\"fin box center\">\n  <h2 class=\"header\">\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 0\">Too </span>\n    </span>\n    <span class=\"mask-span\">\n      <span class=\"word\" style=\"--order: 1\">late!</span>\n    </span>\n  </h2>\n  <p class=\"text float-up\" style=\"--order: 3\">This link has expired.</p>\n  <a class=\"button link float-up\" style=\"--order: 4\" (click)=\"resendLink()\">Send a new link</a>\n</div>\n<div class=\"outer-link-wrap\" style=\"--order: 3\">\n  <a\n    class=\"float-up\"\n    routerLink=\"/\">\n    <svg class=\"back-arrow\" viewBox=\"0 0 5 10\">\n        <path stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-linecap=\"round\" d=\"M4 1 1 5 4 9\"></path>\n    </svg>\n    Sign in</a>\n</div>\n<app-done *ngIf=\"doneMes\" [mes]=\"doneMes\"></app-done>\n<app-error *ngIf=\"resErr\" [status]=\"resErr\"></app-error>\n"

/***/ }),

/***/ "./src/app/verify/verify.component.ts":
/*!********************************************!*\
  !*** ./src/app/verify/verify.component.ts ***!
  \********************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
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



var VerifyComponent = /** @class */ (function () {
    function VerifyComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        // Views, true means that view is shown
        this.expiredPage = false;
        this.invalidPage = false;
    }
    // Resend link function
    VerifyComponent.prototype.resendLink = function () {
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
    VerifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var rand = params.rand;
            _this.dataService.post('verify', { type: 'verify', rand: rand }).subscribe(function (data) {
                _this.res = data;
                if (_this.res.userFound) {
                    if (_this.res.randValid) {
                        _this.doneMes = ['Your email address is now verified!', 'Sign in now.'];
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
    VerifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verify',
            template: __webpack_require__(/*! ./verify.component.html */ "./src/app/verify/verify.component.html"),
            styles: [__webpack_require__(/*! ./verify.component.css */ "./src/app/verify/verify.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], VerifyComponent);
    return VerifyComponent;
}());



/***/ }),

/***/ "./src/app/visuals/visuals.component.css":
/*!***********************************************!*\
  !*** ./src/app/visuals/visuals.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n}\n.visual-wrap {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n/*  */\n/* SVG */\n/*  */\n.lines {\n  width: 100%;\n  margin-top: 1.2em;\n}\n.blue-group>path,\n.yellow-group>path {\n  stroke-dasharray: 1110;\n  stroke-dashoffset: 1110;\n  will-change: stroke-dashoffset, transform;\n  -webkit-animation: dashoffset 1.6s cubic-bezier(0.85, 0, 0.15, 1) forwards;\n          animation: dashoffset 1.6s cubic-bezier(0.85, 0, 0.15, 1) forwards;\n  transition: stroke-dasharray 1.6s cubic-bezier(0.85, 0, 0.15, 1);\n}\n.green-group>path {\n  stroke-dasharray: 1110;\n  stroke-dashoffset: -1110;\n  will-change: stroke-dashoffset;\n  -webkit-animation: dashoffset-reverse 1.6s cubic-bezier(0.85, 0, 0.15, 1) forwards;\n          animation: dashoffset-reverse 1.6s cubic-bezier(0.85, 0, 0.15, 1) forwards;\n  transition: stroke-dasharray 1.6s cubic-bezier(0.85, 0, 0.15, 1);\n}\n.visual-wrap.recover .blue-group>path {\n  stroke-dasharray: 110;\n}\n.visual-wrap.recover .green-group>path {\n  stroke-dasharray: 110;\n}\n.visual-wrap.recover .yellow-group>path {\n  stroke-dasharray: 110;\n}\n@-webkit-keyframes dashoffset {\n  from {\n    stroke-dashoffset: 1110;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes dashoffset {\n  from {\n    stroke-dashoffset: 1110;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@-webkit-keyframes dashoffset-reverse {\n  from {\n    stroke-dashoffset: -1110;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes dashoffset-reverse {\n  from {\n    stroke-dashoffset: -1110;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n/*  */\n/* HEADER */\n/*  */\n.header-wrap {\n  position: relative;\n  width: 100%;\n}\n.header {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 1.2em 0.8em 0.8em;\n  text-align: center;\n  -webkit-transform: translate(-50%, -40%);\n          transform: translate(-50%, -40%);\n}\n.mask-span {\n  display: inline-block;\n  overflow: hidden;\n}\n.word {\n  white-space: pre;\n  display: inline-block;\n  -webkit-transform: translate3d(0, 1.8em, 0);\n          transform: translate3d(0, 1.8em, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  will-change: transform;\n  -webkit-animation: float-up 1.6s calc(var(--order)*80ms) cubic-bezier(0.85, 0, 0.15, 1) forwards;\n          animation: float-up 1.6s calc(var(--order)*80ms) cubic-bezier(0.85, 0, 0.15, 1) forwards;\n}\n@-webkit-keyframes float-up {\n  from {\n    -webkit-transform: translate3d(0, 1.8em, 0);\n            transform: translate3d(0, 1.8em, 0);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes float-up {\n  from {\n    -webkit-transform: translate3d(0, 1.8em, 0);\n            transform: translate3d(0, 1.8em, 0);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n/*  */\n/* SHAPES */\n/*  */\n.shapes-outer-wrap {\n  flex-shrink: 0;\n}\n.shapes-wrap {\n  position: relative;\n  width: 100%;\n  padding-bottom: 40%;\n}\n.circle {\n  border-radius: 50%;\n}\n.blue {\n  background-color: var(--blue);\n}\n.red {\n  background-color: var(--red);\n}\n.yellow {\n  background-color: var(--yellow);\n}\n.green {\n  background-color: var(--green);\n}\n.shapes-wrap>* {\n  width: 20%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transition: -webkit-transform 1.6s cubic-bezier(0.85, 0, 0.15, 1);\n  transition: transform 1.6s cubic-bezier(0.85, 0, 0.15, 1);\n  transition: transform 1.6s cubic-bezier(0.85, 0, 0.15, 1), -webkit-transform 1.6s cubic-bezier(0.85, 0, 0.15, 1);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  will-change: transform;\n}\n.shapes-wrap>*:after {\n  content: '';\n  display: block;\n  padding-bottom: 100%;\n}\n.shapes-wrap>*.double {\n  width: 40%;\n}\n.quadrant {\n  overflow: hidden;\n}\n.quadrant-mask {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  will-change: transform;\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  -webkit-animation: quadrant-mask 1.6s cubic-bezier(0.85, 0, 0.15, 1) forwards;\n          animation: quadrant-mask 1.6s cubic-bezier(0.85, 0, 0.15, 1) forwards;\n}\n.quadrant-circle {\n  position: absolute;\n  width: 200%;\n  height: 200%;\n  border-radius: 50%;\n}\n@-webkit-keyframes quadrant-mask {\n  from {\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n  }\n  to {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes quadrant-mask {\n  from {\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n  }\n  to {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n/* 0. RED SQUARE */\n.visual-wrap.home .rs {\n  -webkit-transform: translate3d(-100%, 0, 0) scale(0);\n          transform: translate3d(-100%, 0, 0) scale(0);\n}\n.shapes-wrap.home>.rs {\n  -webkit-transform: translate3d(-100%, 0, 0) scale(1);\n          transform: translate3d(-100%, 0, 0) scale(1);\n}\n.visual-wrap.new .rs,\n.visual-wrap.verify .rs {\n  -webkit-transform: translate3d(0%, 0, 0) scale(0);\n          transform: translate3d(0%, 0, 0) scale(0);\n}\n.shapes-wrap.new>.rs,\n.shapes-wrap.verify>.rs {\n  -webkit-transform: translate3d(0%, 0, 0) scale(1);\n          transform: translate3d(0%, 0, 0) scale(1);\n}\n.visual-wrap.recover .rs,\n.visual-wrap.reset .rs {\n  -webkit-transform: translate3d(-100%, 0, 0) scale(0);\n          transform: translate3d(-100%, 0, 0) scale(0);\n}\n.shapes-wrap.recover>.rs,\n.shapes-wrap.reset>.rs {\n  -webkit-transform: translate3d(-100%, 0, 0) scale(1);\n          transform: translate3d(-100%, 0, 0) scale(1);\n}\n/* 1. BLUE CIRCLE */\n.visual-wrap.home .bc {\n  -webkit-transform: translate3d(-50%, 0, 0) scale(0);\n          transform: translate3d(-50%, 0, 0) scale(0);\n}\n.shapes-wrap.home>.bc {\n  -webkit-transform: translate3d(-50%, 0, 0) scale(1);\n          transform: translate3d(-50%, 0, 0) scale(1);\n}\n.visual-wrap.new .bc,\n.visual-wrap.verify .bc {\n  -webkit-transform: translate3d(-25%, -25%, 0) scale(0);\n          transform: translate3d(-25%, -25%, 0) scale(0);\n}\n.shapes-wrap.new>.bc,\n.shapes-wrap.verify>.bc {\n  -webkit-transform: translate3d(-25%, -25%, 0) scale(0.5);\n          transform: translate3d(-25%, -25%, 0) scale(0.5);\n}\n.visual-wrap.recover .bc,\n.visual-wrap.reset .bc {\n  -webkit-transform: translate3d(0, 50%, 0) scale(0);\n          transform: translate3d(0, 50%, 0) scale(0);\n}\n.shapes-wrap.recover>.bc,\n.shapes-wrap.reset>.bc {\n  -webkit-transform: translate3d(0, 50%, 0) scale(1);\n          transform: translate3d(0, 50%, 0) scale(1);\n}\n/* 2. RED CIRCLE */\n.visual-wrap.home .rc {\n  -webkit-transform: translate3d(100%, -100%, 0) scale(0);\n          transform: translate3d(100%, -100%, 0) scale(0);\n}\n.shapes-wrap.home>.rc {\n  -webkit-transform: translate3d(100%, -100%, 0) scale(1);\n          transform: translate3d(100%, -100%, 0) scale(1);\n}\n.visual-wrap.new .rc,\n.visual-wrap.verify .rc {\n  -webkit-transform: translate3d(200%, -100%, 0) scale(0);\n          transform: translate3d(200%, -100%, 0) scale(0);\n}\n.shapes-wrap.new>.rc,\n.shapes-wrap.verify>.rc {\n  -webkit-transform: translate3d(200%, -100%, 0) scale(1);\n          transform: translate3d(200%, -100%, 0) scale(1);\n}\n.visual-wrap.recover .rc,\n.visual-wrap.reset .rc {\n  -webkit-transform: translate3d(0, -100%, 0) scale(0);\n          transform: translate3d(0, -100%, 0) scale(0);\n}\n.shapes-wrap.recover>.rc,\n.shapes-wrap.reset>.rc {\n  -webkit-transform: translate3d(0, -100%, 0) scale(1);\n          transform: translate3d(0, -100%, 0) scale(1);\n}\n/* 3. GREEN SQUARE */\n.gs {\n  -webkit-transform-origin: left;\n          transform-origin: left;\n}\n.visual-wrap.home .gs {\n  -webkit-transform: translate3d(200%, -100%, 0) scaleX(0);\n          transform: translate3d(200%, -100%, 0) scaleX(0);\n}\n.shapes-wrap.home>.gs {\n  -webkit-transform: translate3d(200%, -100%, 0) scaleX(1);\n          transform: translate3d(200%, -100%, 0) scaleX(1);\n}\n.visual-wrap.new .gs,\n.visual-wrap.verify .gs {\n  -webkit-transform: translate3d(200%, 0, 0) scaleX(0);\n          transform: translate3d(200%, 0, 0) scaleX(0);\n}\n.shapes-wrap.new>.gs,\n.shapes-wrap.verify>.gs {\n  -webkit-transform: translate3d(200%, 0, 0) scaleX(1);\n          transform: translate3d(200%, 0, 0) scaleX(1);\n}\n.visual-wrap.recover .gs,\n.visual-wrap.reset .gs {\n  -webkit-transform: translate3d(200%, 0, 0) scaleX(0);\n          transform: translate3d(200%, 0, 0) scaleX(0);\n}\n.shapes-wrap.recover>.gs,\n.shapes-wrap.reset>.gs {\n  -webkit-transform: translate3d(200%, 0, 0) scaleX(1);\n          transform: translate3d(200%, 0, 0) scaleX(1);\n}\n/* 4. YELLOW QUADRANT */\n.yq {\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n.visual-wrap.home .yq {\n  -webkit-transform: rotate(-90deg) translate3d(100%, 100%, 0);\n          transform: rotate(-90deg) translate3d(100%, 100%, 0);\n}\n.shapes-wrap.home>.yq {\n  -webkit-transform: rotate(-90deg) translate3d(100%, 100%, 0);\n          transform: rotate(-90deg) translate3d(100%, 100%, 0);\n}\n.visual-wrap.new .yq,\n.visual-wrap.verify .yq {\n  -webkit-transform: rotate(0deg) translate3d(100%, -100%, 0);\n          transform: rotate(0deg) translate3d(100%, -100%, 0);\n}\n.shapes-wrap.new>.yq,\n.shapes-wrap.verify>.yq {\n  -webkit-transform: rotate(0deg) translate3d(100%, -100%, 0);\n          transform: rotate(0deg) translate3d(100%, -100%, 0);\n}\n.visual-wrap.recover .yq,\n.visual-wrap.reset .yq {\n  -webkit-transform: translate3d(100%, -100%, 0) rotate(0deg);\n          transform: translate3d(100%, -100%, 0) rotate(0deg);\n}\n.shapes-wrap.recover>.yq,\n.shapes-wrap.reset>.yq {\n  -webkit-transform: translate3d(100%, -100%, 0) rotate(0deg);\n          transform: translate3d(100%, -100%, 0) rotate(0deg);\n}\n/* 5. RED QUADRANT */\n.rq {\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n.visual-wrap.home .rq {\n  -webkit-transform: translate3d(calc(100% - 1px), 0, 0) rotate(90deg);\n          transform: translate3d(calc(100% - 1px), 0, 0) rotate(90deg);\n}\n.shapes-wrap.home>.rq {\n  -webkit-transform: translate3d(calc(100% - 1px), 0, 0) rotate(90deg);\n          transform: translate3d(calc(100% - 1px), 0, 0) rotate(90deg);\n}\n.visual-wrap.new .rq,\n.visual-wrap.verify .rq {\n  -webkit-transform: translate3d(100%, 0, 0) rotate(0deg);\n          transform: translate3d(100%, 0, 0) rotate(0deg);\n}\n.shapes-wrap.new>.rq,\n.shapes-wrap.verify>.rq {\n  -webkit-transform: translate3d(100%, 0, 0) rotate(0deg);\n          transform: translate3d(100%, 0, 0) rotate(0deg);\n}\n.visual-wrap.recover .rq,\n.visual-wrap.reset .rq {\n  -webkit-transform: translate3d(100%, -100%, 0) rotate(90deg);\n          transform: translate3d(100%, -100%, 0) rotate(90deg);\n}\n.shapes-wrap.recover>.rq,\n.shapes-wrap.reset>.rq {\n  -webkit-transform: translate3d(100%, -100%, 0) rotate(90deg);\n          transform: translate3d(100%, -100%, 0) rotate(90deg);\n}\n/* 6. BLUE QUADRANT */\n.bq {\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n.visual-wrap.home .bq {\n  -webkit-transform: translate3d(calc(200% - 1px), -100%, 0) rotate(90deg);\n          transform: translate3d(calc(200% - 1px), -100%, 0) rotate(90deg);\n}\n.shapes-wrap.home>.bq {\n  -webkit-transform: translate3d(calc(200% - 1px), -100%, 0) rotate(90deg);\n          transform: translate3d(calc(200% - 1px), -100%, 0) rotate(90deg);\n}\n.visual-wrap.new .bq,\n.visual-wrap.verify .bq {\n  -webkit-transform: translate3d(calc(200% - 1px), -100%, 0) rotate(180deg);\n          transform: translate3d(calc(200% - 1px), -100%, 0) rotate(180deg);\n}\n.shapes-wrap.new>.bq,\n.shapes-wrap.verify>.bq {\n  -webkit-transform: translate3d(calc(200% - 1px), -100%, 0) rotate(180deg);\n          transform: translate3d(calc(200% - 1px), -100%, 0) rotate(180deg);\n}\n.visual-wrap.recover .bq,\n.visual-wrap.reset .bq {\n  -webkit-transform: translate3d(200%, -100%, 0) rotate(180deg);\n          transform: translate3d(200%, -100%, 0) rotate(180deg);\n}\n.shapes-wrap.recover>.bq,\n.shapes-wrap.reset>.bq {\n  -webkit-transform: translate3d(200%, -100%, 0) rotate(180deg);\n          transform: translate3d(200%, -100%, 0) rotate(180deg);\n}\n/* 7. YELLOW CIRCLE */\n.visual-wrap.home .yc {\n  -webkit-transform: translate3d(300%, 0, 0) scale(0);\n          transform: translate3d(300%, 0, 0) scale(0);\n}\n.shapes-wrap.home>.yc {\n  -webkit-transform: translate3d(300%, 0, 0) scale(1);\n          transform: translate3d(300%, 0, 0) scale(1);\n}\n.visual-wrap.new .yc,\n.visual-wrap.verify .yc {\n  -webkit-transform: translate3d(300%, 100%, 0) scale(0);\n          transform: translate3d(300%, 100%, 0) scale(0);\n}\n.shapes-wrap.new>.yc,\n.shapes-wrap.verify>.yc {\n  -webkit-transform: translate3d(300%, 100%, 0) scale(1);\n          transform: translate3d(300%, 100%, 0) scale(1);\n}\n.visual-wrap.recover .yc,\n.visual-wrap.reset .yc {\n  -webkit-transform: translate3d(300%, 0, 0) scale(0);\n          transform: translate3d(300%, 0, 0) scale(0);\n}\n.shapes-wrap.recover>.yc,\n.shapes-wrap.reset>.yc {\n  -webkit-transform: translate3d(300%, 0, 0) scale(0);\n          transform: translate3d(300%, 0, 0) scale(0);\n}\n/* 7. GREEN CIRCLE */\n.visual-wrap.home .gc {\n  -webkit-transform: translate3d(200%, 0, 0) scale(0);\n          transform: translate3d(200%, 0, 0) scale(0);\n}\n.shapes-wrap.home>.gc {\n  -webkit-transform: translate3d(200%, 0, 0) scale(1);\n          transform: translate3d(200%, 0, 0) scale(1);\n}\n.visual-wrap.new .gc,\n.visual-wrap.verify .gc {\n  -webkit-transform: translate3d(125%, -25%, 0) scale(0);\n          transform: translate3d(125%, -25%, 0) scale(0);\n}\n.shapes-wrap.new>.gc,\n.shapes-wrap.verify>.gc {\n  -webkit-transform: translate3d(125%, -25%, 0) scale(0.5);\n          transform: translate3d(125%, -25%, 0) scale(0.5);\n}\n.visual-wrap.recover .gc,\n.visual-wrap.reset .gc {\n  -webkit-transform: translate3d(125%, -25%, 0) scale(0);\n          transform: translate3d(125%, -25%, 0) scale(0);\n}\n.shapes-wrap.recover>.gc,\n.shapes-wrap.reset>.gc {\n  -webkit-transform: translate3d(125%, -25%, 0) scale(0.5);\n          transform: translate3d(125%, -25%, 0) scale(0.5);\n}\n/* 8. YELLOW SQUARE */\n.visual-wrap.home .ys {\n  -webkit-transform: translate3d(250%, 0, 0) scale(0);\n          transform: translate3d(250%, 0, 0) scale(0);\n}\n.shapes-wrap.home>.ys {\n  -webkit-transform: translate3d(250%, 0, 0) scale(1);\n          transform: translate3d(250%, 0, 0) scale(1);\n}\n.visual-wrap.new .ys,\n.visual-wrap.verify .ys {\n  -webkit-transform: translate3d(200%, 0, 0) scale(0);\n          transform: translate3d(200%, 0, 0) scale(0);\n}\n.shapes-wrap.new>.ys,\n.shapes-wrap.verify>.ys {\n  -webkit-transform: translate3d(200%, 0, 0) scale(1);\n          transform: translate3d(200%, 0, 0) scale(1);\n}\n.visual-wrap.recover .ys,\n.visual-wrap.reset .ys {\n  -webkit-transform: translate3d(200%, 0, 0) scale(0);\n          transform: translate3d(200%, 0, 0) scale(0);\n}\n.shapes-wrap.recover>.ys,\n.shapes-wrap.reset>.ys {\n  -webkit-transform: translate3d(200%, 0, 0) scale(1);\n          transform: translate3d(200%, 0, 0) scale(1);\n}\n@media only screen and (max-width: 1400px) {\n  .shapes-wrap {\n    width: 125%;\n    padding-bottom: 50%;\n  }\n}\n@media only screen and (max-width: 1024px) {\n  .visual-wrap {\n    justify-content: center;\n  }\n  .shapes-wrap {\n    width: 167%;\n    padding-bottom: 67%;\n  }\n  .header-wrap,\n  .padding {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdWFscy92aXN1YWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtDQUNkO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLCtCQUErQjtDQUNoQztBQUdELE1BQU07QUFDTixTQUFTO0FBQ1QsTUFBTTtBQUNOO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtDQUNuQjtBQUNEOztFQUVFLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsMENBQTBDO0VBQzFDLDJFQUFtRTtVQUFuRSxtRUFBbUU7RUFDbkUsaUVBQWlFO0NBQ2xFO0FBQ0Q7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixtRkFBMkU7VUFBM0UsMkVBQTJFO0VBQzNFLGlFQUFpRTtDQUNsRTtBQUNEO0VBQ0Usc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSxzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLHNCQUFzQjtDQUN2QjtBQUNEO0VBQ0U7SUFDRSx3QkFBd0I7R0FDekI7RUFDRDtJQUNFLHFCQUFxQjtHQUN0QjtDQUNGO0FBUEQ7RUFDRTtJQUNFLHdCQUF3QjtHQUN6QjtFQUNEO0lBQ0UscUJBQXFCO0dBQ3RCO0NBQ0Y7QUFDRDtFQUNFO0lBQ0UseUJBQXlCO0dBQzFCO0VBQ0Q7SUFDRSxxQkFBcUI7R0FDdEI7Q0FDRjtBQVBEO0VBQ0U7SUFDRSx5QkFBeUI7R0FDMUI7RUFDRDtJQUNFLHFCQUFxQjtHQUN0QjtDQUNGO0FBR0QsTUFBTTtBQUNOLFlBQVk7QUFDWixNQUFNO0FBQ047RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIseUNBQWlDO1VBQWpDLGlDQUFpQztDQUNsQztBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qiw0Q0FBb0M7VUFBcEMsb0NBQW9DO0VBQ3BDLG9DQUE0QjtVQUE1Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLGlHQUF5RjtVQUF6Rix5RkFBeUY7Q0FDMUY7QUFDRDtFQUNFO0lBQ0UsNENBQW9DO1lBQXBDLG9DQUFvQztHQUNyQztFQUNEO0lBQ0Usd0NBQWdDO1lBQWhDLGdDQUFnQztHQUNqQztDQUNGO0FBUEQ7RUFDRTtJQUNFLDRDQUFvQztZQUFwQyxvQ0FBb0M7R0FDckM7RUFDRDtJQUNFLHdDQUFnQztZQUFoQyxnQ0FBZ0M7R0FDakM7Q0FDRjtBQUdELE1BQU07QUFDTixZQUFZO0FBQ1osTUFBTTtBQUNOO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRSw2QkFBNkI7Q0FDOUI7QUFDRDtFQUNFLGdDQUFnQztDQUNqQztBQUNEO0VBQ0UsK0JBQStCO0NBQ2hDO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixRQUFRO0VBQ1Isa0VBQTBEO0VBQTFELDBEQUEwRDtFQUExRCxpSEFBMEQ7RUFDMUQsb0NBQTRCO1VBQTVCLDRCQUE0QjtFQUM1Qix1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG9DQUE0QjtVQUE1Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLHVDQUErQjtVQUEvQiwrQkFBK0I7RUFDL0Isa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQiw4RUFBc0U7VUFBdEUsc0VBQXNFO0NBQ3ZFO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtHQUMzQjtFQUNEO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtHQUN6QjtDQUNGO0FBUEQ7RUFDRTtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7R0FDM0I7RUFDRDtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7R0FDekI7Q0FDRjtBQUVELG1CQUFtQjtBQUNuQjtFQUNFLHFEQUE2QztVQUE3Qyw2Q0FBNkM7Q0FDOUM7QUFDRDtFQUNFLHFEQUE2QztVQUE3Qyw2Q0FBNkM7Q0FDOUM7QUFDRDs7RUFFRSxrREFBMEM7VUFBMUMsMENBQTBDO0NBQzNDO0FBQ0Q7O0VBRUUsa0RBQTBDO1VBQTFDLDBDQUEwQztDQUMzQztBQUNEOztFQUVFLHFEQUE2QztVQUE3Qyw2Q0FBNkM7Q0FDOUM7QUFDRDs7RUFFRSxxREFBNkM7VUFBN0MsNkNBQTZDO0NBQzlDO0FBRUQsb0JBQW9CO0FBQ3BCO0VBQ0Usb0RBQTRDO1VBQTVDLDRDQUE0QztDQUM3QztBQUNEO0VBQ0Usb0RBQTRDO1VBQTVDLDRDQUE0QztDQUM3QztBQUNEOztFQUVFLHVEQUErQztVQUEvQywrQ0FBK0M7Q0FDaEQ7QUFDRDs7RUFFRSx5REFBaUQ7VUFBakQsaURBQWlEO0NBQ2xEO0FBQ0Q7O0VBRUUsbURBQTJDO1VBQTNDLDJDQUEyQztDQUM1QztBQUNEOztFQUVFLG1EQUEyQztVQUEzQywyQ0FBMkM7Q0FDNUM7QUFFRCxtQkFBbUI7QUFDbkI7RUFDRSx3REFBZ0Q7VUFBaEQsZ0RBQWdEO0NBQ2pEO0FBQ0Q7RUFDRSx3REFBZ0Q7VUFBaEQsZ0RBQWdEO0NBQ2pEO0FBQ0Q7O0VBRUUsd0RBQWdEO1VBQWhELGdEQUFnRDtDQUNqRDtBQUNEOztFQUVFLHdEQUFnRDtVQUFoRCxnREFBZ0Q7Q0FDakQ7QUFDRDs7RUFFRSxxREFBNkM7VUFBN0MsNkNBQTZDO0NBQzlDO0FBQ0Q7O0VBRUUscURBQTZDO1VBQTdDLDZDQUE2QztDQUM5QztBQUVELHFCQUFxQjtBQUNyQjtFQUNFLCtCQUF1QjtVQUF2Qix1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLHlEQUFpRDtVQUFqRCxpREFBaUQ7Q0FDbEQ7QUFDRDtFQUNFLHlEQUFpRDtVQUFqRCxpREFBaUQ7Q0FDbEQ7QUFDRDs7RUFFRSxxREFBNkM7VUFBN0MsNkNBQTZDO0NBQzlDO0FBQ0Q7O0VBRUUscURBQTZDO1VBQTdDLDZDQUE2QztDQUM5QztBQUNEOztFQUVFLHFEQUE2QztVQUE3Qyw2Q0FBNkM7Q0FDOUM7QUFDRDs7RUFFRSxxREFBNkM7VUFBN0MsNkNBQTZDO0NBQzlDO0FBRUQsd0JBQXdCO0FBQ3hCO0VBQ0UsdUNBQStCO1VBQS9CLCtCQUErQjtDQUNoQztBQUNEO0VBQ0UsNkRBQXFEO1VBQXJELHFEQUFxRDtDQUN0RDtBQUNEO0VBQ0UsNkRBQXFEO1VBQXJELHFEQUFxRDtDQUN0RDtBQUNEOztFQUVFLDREQUFvRDtVQUFwRCxvREFBb0Q7Q0FDckQ7QUFDRDs7RUFFRSw0REFBb0Q7VUFBcEQsb0RBQW9EO0NBQ3JEO0FBQ0Q7O0VBRUUsNERBQW9EO1VBQXBELG9EQUFvRDtDQUNyRDtBQUNEOztFQUVFLDREQUFvRDtVQUFwRCxvREFBb0Q7Q0FDckQ7QUFFRCxxQkFBcUI7QUFDckI7RUFDRSx1Q0FBK0I7VUFBL0IsK0JBQStCO0NBQ2hDO0FBQ0Q7RUFDRSxxRUFBNkQ7VUFBN0QsNkRBQTZEO0NBQzlEO0FBQ0Q7RUFDRSxxRUFBNkQ7VUFBN0QsNkRBQTZEO0NBQzlEO0FBQ0Q7O0VBRUUsd0RBQWdEO1VBQWhELGdEQUFnRDtDQUNqRDtBQUNEOztFQUVFLHdEQUFnRDtVQUFoRCxnREFBZ0Q7Q0FDakQ7QUFDRDs7RUFFRSw2REFBcUQ7VUFBckQscURBQXFEO0NBQ3REO0FBQ0Q7O0VBRUUsNkRBQXFEO1VBQXJELHFEQUFxRDtDQUN0RDtBQUVELHNCQUFzQjtBQUN0QjtFQUNFLHVDQUErQjtVQUEvQiwrQkFBK0I7Q0FDaEM7QUFDRDtFQUNFLHlFQUFpRTtVQUFqRSxpRUFBaUU7Q0FDbEU7QUFDRDtFQUNFLHlFQUFpRTtVQUFqRSxpRUFBaUU7Q0FDbEU7QUFDRDs7RUFFRSwwRUFBa0U7VUFBbEUsa0VBQWtFO0NBQ25FO0FBQ0Q7O0VBRUUsMEVBQWtFO1VBQWxFLGtFQUFrRTtDQUNuRTtBQUNEOztFQUVFLDhEQUFzRDtVQUF0RCxzREFBc0Q7Q0FDdkQ7QUFDRDs7RUFFRSw4REFBc0Q7VUFBdEQsc0RBQXNEO0NBQ3ZEO0FBRUQsc0JBQXNCO0FBQ3RCO0VBQ0Usb0RBQTRDO1VBQTVDLDRDQUE0QztDQUM3QztBQUNEO0VBQ0Usb0RBQTRDO1VBQTVDLDRDQUE0QztDQUM3QztBQUNEOztFQUVFLHVEQUErQztVQUEvQywrQ0FBK0M7Q0FDaEQ7QUFDRDs7RUFFRSx1REFBK0M7VUFBL0MsK0NBQStDO0NBQ2hEO0FBQ0Q7O0VBRUUsb0RBQTRDO1VBQTVDLDRDQUE0QztDQUM3QztBQUNEOztFQUVFLG9EQUE0QztVQUE1Qyw0Q0FBNEM7Q0FDN0M7QUFFRCxxQkFBcUI7QUFDckI7RUFDRSxvREFBNEM7VUFBNUMsNENBQTRDO0NBQzdDO0FBQ0Q7RUFDRSxvREFBNEM7VUFBNUMsNENBQTRDO0NBQzdDO0FBQ0Q7O0VBRUUsdURBQStDO1VBQS9DLCtDQUErQztDQUNoRDtBQUNEOztFQUVFLHlEQUFpRDtVQUFqRCxpREFBaUQ7Q0FDbEQ7QUFDRDs7RUFFRSx1REFBK0M7VUFBL0MsK0NBQStDO0NBQ2hEO0FBQ0Q7O0VBRUUseURBQWlEO1VBQWpELGlEQUFpRDtDQUNsRDtBQUVELHNCQUFzQjtBQUN0QjtFQUNFLG9EQUE0QztVQUE1Qyw0Q0FBNEM7Q0FDN0M7QUFDRDtFQUNFLG9EQUE0QztVQUE1Qyw0Q0FBNEM7Q0FDN0M7QUFDRDs7RUFFRSxvREFBNEM7VUFBNUMsNENBQTRDO0NBQzdDO0FBQ0Q7O0VBRUUsb0RBQTRDO1VBQTVDLDRDQUE0QztDQUM3QztBQUNEOztFQUVFLG9EQUE0QztVQUE1Qyw0Q0FBNEM7Q0FDN0M7QUFDRDs7RUFFRSxvREFBNEM7VUFBNUMsNENBQTRDO0NBQzdDO0FBRUQ7RUFDRTtJQUNFLFlBQVk7SUFDWixvQkFBb0I7R0FDckI7Q0FDRjtBQUNEO0VBQ0U7SUFDRSx3QkFBd0I7R0FDekI7RUFDRDtJQUNFLFlBQVk7SUFDWixvQkFBb0I7R0FDckI7RUFDRDs7SUFFRSxjQUFjO0dBQ2Y7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL3Zpc3VhbHMvdmlzdWFscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnZpc3VhbC13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cblxuLyogICovXG4vKiBTVkcgKi9cbi8qICAqL1xuLmxpbmVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEuMmVtO1xufVxuLmJsdWUtZ3JvdXA+cGF0aCxcbi55ZWxsb3ctZ3JvdXA+cGF0aCB7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDExMTA7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAxMTEwO1xuICB3aWxsLWNoYW5nZTogc3Ryb2tlLWRhc2hvZmZzZXQsIHRyYW5zZm9ybTtcbiAgYW5pbWF0aW9uOiBkYXNob2Zmc2V0IDEuNnMgY3ViaWMtYmV6aWVyKDAuODUsIDAsIDAuMTUsIDEpIGZvcndhcmRzO1xuICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaGFycmF5IDEuNnMgY3ViaWMtYmV6aWVyKDAuODUsIDAsIDAuMTUsIDEpO1xufVxuLmdyZWVuLWdyb3VwPnBhdGgge1xuICBzdHJva2UtZGFzaGFycmF5OiAxMTEwO1xuICBzdHJva2UtZGFzaG9mZnNldDogLTExMTA7XG4gIHdpbGwtY2hhbmdlOiBzdHJva2UtZGFzaG9mZnNldDtcbiAgYW5pbWF0aW9uOiBkYXNob2Zmc2V0LXJldmVyc2UgMS42cyBjdWJpYy1iZXppZXIoMC44NSwgMCwgMC4xNSwgMSkgZm9yd2FyZHM7XG4gIHRyYW5zaXRpb246IHN0cm9rZS1kYXNoYXJyYXkgMS42cyBjdWJpYy1iZXppZXIoMC44NSwgMCwgMC4xNSwgMSk7XG59XG4udmlzdWFsLXdyYXAucmVjb3ZlciAuYmx1ZS1ncm91cD5wYXRoIHtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMTEwO1xufVxuLnZpc3VhbC13cmFwLnJlY292ZXIgLmdyZWVuLWdyb3VwPnBhdGgge1xuICBzdHJva2UtZGFzaGFycmF5OiAxMTA7XG59XG4udmlzdWFsLXdyYXAucmVjb3ZlciAueWVsbG93LWdyb3VwPnBhdGgge1xuICBzdHJva2UtZGFzaGFycmF5OiAxMTA7XG59XG5Aa2V5ZnJhbWVzIGRhc2hvZmZzZXQge1xuICBmcm9tIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTExMDtcbiAgfVxuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZGFzaG9mZnNldC1yZXZlcnNlIHtcbiAgZnJvbSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMTEwO1xuICB9XG4gIHRvIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxufVxuXG5cbi8qICAqL1xuLyogSEVBREVSICovXG4vKiAgKi9cbi5oZWFkZXItd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDEuMmVtIDAuOGVtIDAuOGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00MCUpO1xufVxuLm1hc2stc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53b3JkIHtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEuOGVtLCAwKTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICBhbmltYXRpb246IGZsb2F0LXVwIDEuNnMgY2FsYyh2YXIoLS1vcmRlcikqODBtcykgY3ViaWMtYmV6aWVyKDAuODUsIDAsIDAuMTUsIDEpIGZvcndhcmRzO1xufVxuQGtleWZyYW1lcyBmbG9hdC11cCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMS44ZW0sIDApO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5cblxuLyogICovXG4vKiBTSEFQRVMgKi9cbi8qICAqL1xuLnNoYXBlcy1vdXRlci13cmFwIHtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uc2hhcGVzLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogNDAlO1xufVxuLmNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG59XG4ucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcbn1cbi55ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xufVxuLmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xufVxuLnNoYXBlcy13cmFwPioge1xuICB3aWR0aDogMjAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuNnMgY3ViaWMtYmV6aWVyKDAuODUsIDAsIDAuMTUsIDEpO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG59XG4uc2hhcGVzLXdyYXA+KjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XG59XG4uc2hhcGVzLXdyYXA+Ki5kb3VibGUge1xuICB3aWR0aDogNDAlO1xufVxuLnF1YWRyYW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5xdWFkcmFudC1tYXNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgYW5pbWF0aW9uOiBxdWFkcmFudC1tYXNrIDEuNnMgY3ViaWMtYmV6aWVyKDAuODUsIDAsIDAuMTUsIDEpIGZvcndhcmRzO1xufVxuLnF1YWRyYW50LWNpcmNsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwMCU7XG4gIGhlaWdodDogMjAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuQGtleWZyYW1lcyBxdWFkcmFudC1tYXNrIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbn1cblxuLyogMC4gUkVEIFNRVUFSRSAqL1xuLnZpc3VhbC13cmFwLmhvbWUgLnJzIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgc2NhbGUoMCk7XG59XG4uc2hhcGVzLXdyYXAuaG9tZT4ucnMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSBzY2FsZSgxKTtcbn1cbi52aXN1YWwtd3JhcC5uZXcgLnJzLFxuLnZpc3VhbC13cmFwLnZlcmlmeSAucnMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAwLCAwKSBzY2FsZSgwKTtcbn1cbi5zaGFwZXMtd3JhcC5uZXc+LnJzLFxuLnNoYXBlcy13cmFwLnZlcmlmeT4ucnMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAwLCAwKSBzY2FsZSgxKTtcbn1cbi52aXN1YWwtd3JhcC5yZWNvdmVyIC5ycyxcbi52aXN1YWwtd3JhcC5yZXNldCAucnMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSBzY2FsZSgwKTtcbn1cbi5zaGFwZXMtd3JhcC5yZWNvdmVyPi5ycyxcbi5zaGFwZXMtd3JhcC5yZXNldD4ucnMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSBzY2FsZSgxKTtcbn1cblxuLyogMS4gQkxVRSBDSVJDTEUgKi9cbi52aXN1YWwtd3JhcC5ob21lIC5iYyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCkgc2NhbGUoMCk7XG59XG4uc2hhcGVzLXdyYXAuaG9tZT4uYmMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApIHNjYWxlKDEpO1xufVxuLnZpc3VhbC13cmFwLm5ldyAuYmMsXG4udmlzdWFsLXdyYXAudmVyaWZ5IC5iYyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1JSwgLTI1JSwgMCkgc2NhbGUoMCk7XG59XG4uc2hhcGVzLXdyYXAubmV3Pi5iYyxcbi5zaGFwZXMtd3JhcC52ZXJpZnk+LmJjIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUlLCAtMjUlLCAwKSBzY2FsZSgwLjUpO1xufVxuLnZpc3VhbC13cmFwLnJlY292ZXIgLmJjLFxuLnZpc3VhbC13cmFwLnJlc2V0IC5iYyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNTAlLCAwKSBzY2FsZSgwKTtcbn1cbi5zaGFwZXMtd3JhcC5yZWNvdmVyPi5iYyxcbi5zaGFwZXMtd3JhcC5yZXNldD4uYmMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDUwJSwgMCkgc2NhbGUoMSk7XG59XG5cbi8qIDIuIFJFRCBDSVJDTEUgKi9cbi52aXN1YWwtd3JhcC5ob21lIC5yYyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgLTEwMCUsIDApIHNjYWxlKDApO1xufVxuLnNoYXBlcy13cmFwLmhvbWU+LnJjIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAtMTAwJSwgMCkgc2NhbGUoMSk7XG59XG4udmlzdWFsLXdyYXAubmV3IC5yYyxcbi52aXN1YWwtd3JhcC52ZXJpZnkgLnJjIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAlLCAtMTAwJSwgMCkgc2NhbGUoMCk7XG59XG4uc2hhcGVzLXdyYXAubmV3Pi5yYyxcbi5zaGFwZXMtd3JhcC52ZXJpZnk+LnJjIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAlLCAtMTAwJSwgMCkgc2NhbGUoMSk7XG59XG4udmlzdWFsLXdyYXAucmVjb3ZlciAucmMsXG4udmlzdWFsLXdyYXAucmVzZXQgLnJjIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCkgc2NhbGUoMCk7XG59XG4uc2hhcGVzLXdyYXAucmVjb3Zlcj4ucmMsXG4uc2hhcGVzLXdyYXAucmVzZXQ+LnJjIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCkgc2NhbGUoMSk7XG59XG5cbi8qIDMuIEdSRUVOIFNRVUFSRSAqL1xuLmdzIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbn1cbi52aXN1YWwtd3JhcC5ob21lIC5ncyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwJSwgLTEwMCUsIDApIHNjYWxlWCgwKTtcbn1cbi5zaGFwZXMtd3JhcC5ob21lPi5ncyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwJSwgLTEwMCUsIDApIHNjYWxlWCgxKTtcbn1cbi52aXN1YWwtd3JhcC5uZXcgLmdzLFxuLnZpc3VhbC13cmFwLnZlcmlmeSAuZ3Mge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMCUsIDAsIDApIHNjYWxlWCgwKTtcbn1cbi5zaGFwZXMtd3JhcC5uZXc+LmdzLFxuLnNoYXBlcy13cmFwLnZlcmlmeT4uZ3Mge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMCUsIDAsIDApIHNjYWxlWCgxKTtcbn1cbi52aXN1YWwtd3JhcC5yZWNvdmVyIC5ncyxcbi52aXN1YWwtd3JhcC5yZXNldCAuZ3Mge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMCUsIDAsIDApIHNjYWxlWCgwKTtcbn1cbi5zaGFwZXMtd3JhcC5yZWNvdmVyPi5ncyxcbi5zaGFwZXMtd3JhcC5yZXNldD4uZ3Mge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMCUsIDAsIDApIHNjYWxlWCgxKTtcbn1cblxuLyogNC4gWUVMTE9XIFFVQURSQU5UICovXG4ueXEge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XG59XG4udmlzdWFsLXdyYXAuaG9tZSAueXEge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsIDEwMCUsIDApO1xufVxuLnNoYXBlcy13cmFwLmhvbWU+LnlxIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLCAxMDAlLCAwKTtcbn1cbi52aXN1YWwtd3JhcC5uZXcgLnlxLFxuLnZpc3VhbC13cmFwLnZlcmlmeSAueXEge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLCAtMTAwJSwgMCk7XG59XG4uc2hhcGVzLXdyYXAubmV3Pi55cSxcbi5zaGFwZXMtd3JhcC52ZXJpZnk+LnlxIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgdHJhbnNsYXRlM2QoMTAwJSwgLTEwMCUsIDApO1xufVxuLnZpc3VhbC13cmFwLnJlY292ZXIgLnlxLFxuLnZpc3VhbC13cmFwLnJlc2V0IC55cSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgLTEwMCUsIDApIHJvdGF0ZSgwZGVnKTtcbn1cbi5zaGFwZXMtd3JhcC5yZWNvdmVyPi55cSxcbi5zaGFwZXMtd3JhcC5yZXNldD4ueXEge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIC0xMDAlLCAwKSByb3RhdGUoMGRlZyk7XG59XG5cbi8qIDUuIFJFRCBRVUFEUkFOVCAqL1xuLnJxIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xufVxuLnZpc3VhbC13cmFwLmhvbWUgLnJxIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChjYWxjKDEwMCUgLSAxcHgpLCAwLCAwKSByb3RhdGUoOTBkZWcpO1xufVxuLnNoYXBlcy13cmFwLmhvbWU+LnJxIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChjYWxjKDEwMCUgLSAxcHgpLCAwLCAwKSByb3RhdGUoOTBkZWcpO1xufVxuLnZpc3VhbC13cmFwLm5ldyAucnEsXG4udmlzdWFsLXdyYXAudmVyaWZ5IC5ycSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlKDBkZWcpO1xufVxuLnNoYXBlcy13cmFwLm5ldz4ucnEsXG4uc2hhcGVzLXdyYXAudmVyaWZ5Pi5ycSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlKDBkZWcpO1xufVxuLnZpc3VhbC13cmFwLnJlY292ZXIgLnJxLFxuLnZpc3VhbC13cmFwLnJlc2V0IC5ycSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgLTEwMCUsIDApIHJvdGF0ZSg5MGRlZyk7XG59XG4uc2hhcGVzLXdyYXAucmVjb3Zlcj4ucnEsXG4uc2hhcGVzLXdyYXAucmVzZXQ+LnJxIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAtMTAwJSwgMCkgcm90YXRlKDkwZGVnKTtcbn1cblxuLyogNi4gQkxVRSBRVUFEUkFOVCAqL1xuLmJxIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xufVxuLnZpc3VhbC13cmFwLmhvbWUgLmJxIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChjYWxjKDIwMCUgLSAxcHgpLCAtMTAwJSwgMCkgcm90YXRlKDkwZGVnKTtcbn1cbi5zaGFwZXMtd3JhcC5ob21lPi5icSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoY2FsYygyMDAlIC0gMXB4KSwgLTEwMCUsIDApIHJvdGF0ZSg5MGRlZyk7XG59XG4udmlzdWFsLXdyYXAubmV3IC5icSxcbi52aXN1YWwtd3JhcC52ZXJpZnkgLmJxIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChjYWxjKDIwMCUgLSAxcHgpLCAtMTAwJSwgMCkgcm90YXRlKDE4MGRlZyk7XG59XG4uc2hhcGVzLXdyYXAubmV3Pi5icSxcbi5zaGFwZXMtd3JhcC52ZXJpZnk+LmJxIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChjYWxjKDIwMCUgLSAxcHgpLCAtMTAwJSwgMCkgcm90YXRlKDE4MGRlZyk7XG59XG4udmlzdWFsLXdyYXAucmVjb3ZlciAuYnEsXG4udmlzdWFsLXdyYXAucmVzZXQgLmJxIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAlLCAtMTAwJSwgMCkgcm90YXRlKDE4MGRlZyk7XG59XG4uc2hhcGVzLXdyYXAucmVjb3Zlcj4uYnEsXG4uc2hhcGVzLXdyYXAucmVzZXQ+LmJxIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAlLCAtMTAwJSwgMCkgcm90YXRlKDE4MGRlZyk7XG59XG5cbi8qIDcuIFlFTExPVyBDSVJDTEUgKi9cbi52aXN1YWwtd3JhcC5ob21lIC55YyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAwJSwgMCwgMCkgc2NhbGUoMCk7XG59XG4uc2hhcGVzLXdyYXAuaG9tZT4ueWMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwMCUsIDAsIDApIHNjYWxlKDEpO1xufVxuLnZpc3VhbC13cmFwLm5ldyAueWMsXG4udmlzdWFsLXdyYXAudmVyaWZ5IC55YyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAwJSwgMTAwJSwgMCkgc2NhbGUoMCk7XG59XG4uc2hhcGVzLXdyYXAubmV3Pi55Yyxcbi5zaGFwZXMtd3JhcC52ZXJpZnk+LnljIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMDAlLCAxMDAlLCAwKSBzY2FsZSgxKTtcbn1cbi52aXN1YWwtd3JhcC5yZWNvdmVyIC55Yyxcbi52aXN1YWwtd3JhcC5yZXNldCAueWMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwMCUsIDAsIDApIHNjYWxlKDApO1xufVxuLnNoYXBlcy13cmFwLnJlY292ZXI+LnljLFxuLnNoYXBlcy13cmFwLnJlc2V0Pi55YyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAwJSwgMCwgMCkgc2NhbGUoMCk7XG59XG5cbi8qIDcuIEdSRUVOIENJUkNMRSAqL1xuLnZpc3VhbC13cmFwLmhvbWUgLmdjIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAlLCAwLCAwKSBzY2FsZSgwKTtcbn1cbi5zaGFwZXMtd3JhcC5ob21lPi5nYyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwJSwgMCwgMCkgc2NhbGUoMSk7XG59XG4udmlzdWFsLXdyYXAubmV3IC5nYyxcbi52aXN1YWwtd3JhcC52ZXJpZnkgLmdjIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMjUlLCAtMjUlLCAwKSBzY2FsZSgwKTtcbn1cbi5zaGFwZXMtd3JhcC5uZXc+LmdjLFxuLnNoYXBlcy13cmFwLnZlcmlmeT4uZ2Mge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEyNSUsIC0yNSUsIDApIHNjYWxlKDAuNSk7XG59XG4udmlzdWFsLXdyYXAucmVjb3ZlciAuZ2MsXG4udmlzdWFsLXdyYXAucmVzZXQgLmdjIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMjUlLCAtMjUlLCAwKSBzY2FsZSgwKTtcbn1cbi5zaGFwZXMtd3JhcC5yZWNvdmVyPi5nYyxcbi5zaGFwZXMtd3JhcC5yZXNldD4uZ2Mge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEyNSUsIC0yNSUsIDApIHNjYWxlKDAuNSk7XG59XG5cbi8qIDguIFlFTExPVyBTUVVBUkUgKi9cbi52aXN1YWwtd3JhcC5ob21lIC55cyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjUwJSwgMCwgMCkgc2NhbGUoMCk7XG59XG4uc2hhcGVzLXdyYXAuaG9tZT4ueXMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDI1MCUsIDAsIDApIHNjYWxlKDEpO1xufVxuLnZpc3VhbC13cmFwLm5ldyAueXMsXG4udmlzdWFsLXdyYXAudmVyaWZ5IC55cyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwJSwgMCwgMCkgc2NhbGUoMCk7XG59XG4uc2hhcGVzLXdyYXAubmV3Pi55cyxcbi5zaGFwZXMtd3JhcC52ZXJpZnk+LnlzIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAlLCAwLCAwKSBzY2FsZSgxKTtcbn1cbi52aXN1YWwtd3JhcC5yZWNvdmVyIC55cyxcbi52aXN1YWwtd3JhcC5yZXNldCAueXMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMCUsIDAsIDApIHNjYWxlKDApO1xufVxuLnNoYXBlcy13cmFwLnJlY292ZXI+LnlzLFxuLnNoYXBlcy13cmFwLnJlc2V0Pi55cyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwJSwgMCwgMCkgc2NhbGUoMSk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XG4gIC5zaGFwZXMtd3JhcCB7XG4gICAgd2lkdGg6IDEyNSU7XG4gICAgcGFkZGluZy1ib3R0b206IDUwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnZpc3VhbC13cmFwIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuc2hhcGVzLXdyYXAge1xuICAgIHdpZHRoOiAxNjclO1xuICAgIHBhZGRpbmctYm90dG9tOiA2NyU7XG4gIH1cbiAgLmhlYWRlci13cmFwLFxuICAucGFkZGluZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/visuals/visuals.component.html":
/*!************************************************!*\
  !*** ./src/app/visuals/visuals.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"visual-wrap\" [ngClass]=\"currentRoute\">\n  <div class=\"padding\"></div>\n  <div class=\"header-wrap\">\n    <h1 [@fade] *ngIf=\"currentRoute === 'home'\" class=\"header center\">\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 0\">Why, </span>\n      </span>\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 1\">hello </span>\n      </span>\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 2\">there</span>\n      </span>\n    </h1>\n    <h1 [@fade] *ngIf=\"currentRoute === 'new'\" class=\"header center\">\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 0\">Nice </span>\n      </span>\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 1\">meeting </span>\n      </span>\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 2\">you</span>\n      </span>\n    </h1>\n    <h1 [@fade] *ngIf=\"currentRoute === 'recover'\" class=\"header center\">\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 0\">We've </span>\n      </span>\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 1\">got </span>\n      </span>\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 2\">you</span>\n      </span>\n    </h1>\n    <h1 [@fade] *ngIf=\"currentRoute === 'reset'\" class=\"header center\">\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 0\">You're </span>\n      </span>\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 1\">almost </span>\n      </span>\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 2\">there</span>\n      </span>\n    </h1>\n    <h1 [@fade] *ngIf=\"currentRoute === 'verify'\" class=\"header center\">\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 0\">Almost </span>\n      </span>\n      <span class=\"mask-span\">\n        <span class=\"word\" style=\"--order: 1\">done…</span>\n      </span>\n    </h1>\n  </div>\n  <div class=\"shapes-outer-wrap\">\n    <div class=\"shapes-wrap\" [ngClass]=\"loaded && currentRoute\">\n      <div class=\"rs red square\"></div>\n      <div class=\"bc blue circle double\"></div>\n      <div class=\"rc red circle\"></div>\n      <div class=\"gs green square\"></div>\n      <div class=\"yq quadrant\">\n        <div class=\"quadrant-mask\">\n          <div class=\"quadrant-circle yellow\"></div>\n        </div>\n      </div>\n      <div class=\"rq quadrant\">\n        <div class=\"quadrant-mask\">\n          <div class=\"quadrant-circle red\"></div>\n        </div>\n      </div>\n      <div class=\"yc yellow circle\"></div>\n      <div class=\"bq quadrant\">\n        <div class=\"quadrant-mask\">\n          <div class=\"quadrant-circle blue\"></div>\n        </div>\n      </div>\n      <div class=\"gc green circle double\"></div>\n      <div class=\"ys yellow square double\"></div>\n    </div>\n  </div>\n</div>\n"

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
    production: false,
    apiUrl: 'http://localhost:8080'
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