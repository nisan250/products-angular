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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: '**', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] },
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-expand-lg fixed-top navbar-dark bg-primary\">\n  <a class=\"navbar-brand\"  [routerLink]=\"['/']\" [routerLinkActive]=\"['link-active']\">{{title}}</a>\n\n\n\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse xnavbar-nav xnav\" [ngClass]=\"{ 'show': navbarOpen }\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class='nav-item'><a class='nav-link' routerLinkActive='active'\n        [routerLink]=\"['/home']\" (click)=\"toggleNavbar()\">Home</a>\n      </li>\n      <li class='nav-item'><a class='nav-link' routerLinkActive='active' [routerLinkActiveOptions]=\"{exact: true}\"\n        [routerLink]=\"['/products']\" (click)=\"toggleNavbar()\">Product List</a>\n      </li>\n      <li class='nav-item'><a class='nav-link' routerLinkActive='active' [routerLinkActiveOptions]=\"{exact: true}\"\n        [routerLink]=\"['/products/0/edit']\" (click)=\"toggleNavbar()\">Add Product</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n        <li class='nav-item' *ngIf=\"authService.isLoggedIn()\"><!-- class='nav-item'-->\n          <a class='nav-link'>Welcome {{ authService.currentUser.userName }}</a><!--class='nav-link'-->\n        </li>\n        <li class='nav-item' *ngIf=\"!authService.isLoggedIn()\">\n          <a class='nav-link' [routerLink]=\"['/login']\" (click)=\"toggleNavbar()\">Log In</a>\n        </li>\n        <li class='nav-item log-out-link' *ngIf=\"authService.isLoggedIn()\">\n          <a class='nav-link' (click)=\"logOut()\">Log Out</a>\n        </li>\n      </ul>\n  </div>\n</div>\n\n<div class='container content-with-fixed-top'>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\n  font-size: 14px; }\n\n.navbar-brand {\n  font-size: 21px; }\n\n.content-with-fixed-top {\n  padding-top: 90px; }\n\n.log-out-link {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGFwcHNcXG15LWFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxnQkFBZSxFQUNoQjs7QUFDRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLm5hdmJhci1icmFuZHtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuLmNvbnRlbnQtd2l0aC1maXhlZC10b3Age1xyXG4gIHBhZGRpbmctdG9wOiA5MHB4O1xyXG59XHJcbi5sb2ctb3V0LWxpbmsge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuIl19 */"

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
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/auth.service */ "./src/app/user/auth.service.ts");
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



var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'Products-NG';
        this.navbarOpen = false;
    }
    AppComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    AppComponent.prototype.logOut = function () {
        this.authService.logout();
        this.router.navigateByUrl('/home');
        this.toggleNavbar();
        // console.log('Log out');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wn-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _products_product_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/product-data */ "./src/app/products/product-data.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _products_product_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/product.module */ "./src/app/products/product.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _messages_message_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./messages/message.module */ "./src/app/messages/message.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Imports for loading & configuring the in-memory web api





// Third Party

// Feature Modules




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_8__["NgxLoadingModule"].forRoot({}),
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["InMemoryWebApiModule"].forRoot(_products_product_data__WEBPACK_IMPORTED_MODULE_4__["ProductData"], { delay: 1000 }),
                _user_user_module__WEBPACK_IMPORTED_MODULE_11__["UserModule"],
                _products_product_module__WEBPACK_IMPORTED_MODULE_10__["ProductModule"],
                _messages_message_module__WEBPACK_IMPORTED_MODULE_12__["MessageModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <ngx-loading [show]=\"loading\" [config]=\"{ backDropBorderRadius: '14px'}\"></ngx-loading>\n    <div class=\"card\">\n        <div class=\"card-header\">\n          {{pageTitle}}\n        </div>\n        <div class=\"card-body\">\n          <div class=\"container-fluid\">\n            <div class=\"text-center\">\n              <img src=\"./assets/images/logo-cut.png\"\n                   class=\"img-responsive center-block\"\n                   style=\"padding-bottom:50px\" />\n            </div>\n\n            <div class=\"text-center\">Developed by:</div>\n            <div class=\"text-center\">\n              <h3>Nisan Sabag</h3>\n            </div>\n\n            <div class=\"text-center\">\n              <a href=\"https://github.com/nisan250/\">www.github.com/nisan250/</a>\n            </div>\n          </div>\n        </div>\n      </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcYXBwc1xcbXktYXBwL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWdCLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.pageTitle = 'Welcome';
        this.loading = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.loading = true;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wn-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/messages/message.component.ts":
/*!***********************************************!*\
  !*** ./src/app/messages/message.component.ts ***!
  \***********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../messages/message.service */ "./src/app/messages/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageComponent = /** @class */ (function () {
    function MessageComponent(messageService, router) {
        this.messageService = messageService;
        this.router = router;
    }
    MessageComponent.prototype.close = function () {
        // Close the popup.
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n        <div class=\"row\">\n            <h4 class=\"col-md-10\">Message Log</h4>\n            <span class=\"col-md-2\">\n                <a class=\"btn btn-default\"\n                    (click)=\"close()\">\n                    x\n                </a>\n            </span>\n        </div>\n        <div *ngFor=\"let message of messageService.messages; let i=index\">\n            <div *ngIf=\"i<10\" class=\"message-row\">\n                {{ message }}\n            </div>\n        </div>\n    ",
            styles: [
                '.message-row { margin-bottom: 10px }'
            ]
        }),
        __metadata("design:paramtypes", [_messages_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/messages/message.module.ts":
/*!********************************************!*\
  !*** ./src/app/messages/message.module.ts ***!
  \********************************************/
/*! exports provided: MessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModule", function() { return MessageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.component */ "./src/app/messages/message.component.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./src/app/messages/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
            ],
            declarations: [
                _message_component__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"]
            ],
            providers: [
                _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
            ]
        })
    ], MessageModule);
    return MessageModule;
}());



/***/ }),

/***/ "./src/app/messages/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/messages/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.addMessage = function (message) {
        var currentDate = new Date();
        this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/page-not-found.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page-not-found.component.ts ***!
  \*********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <h1>sorry, that page doesn't exist!</h1>\n    "
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/products/index.ts":
/*!***********************************!*\
  !*** ./src/app/products/index.ts ***!
  \***********************************/
/*! exports provided: ProductListComponent, ProductDetailComponent, ProductEditComponent, ProductEditGuard, ProductResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-list.component */ "./src/app/products/product-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return _product_list_component__WEBPACK_IMPORTED_MODULE_0__["ProductListComponent"]; });

/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.component */ "./src/app/products/product-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return _product_detail_component__WEBPACK_IMPORTED_MODULE_1__["ProductDetailComponent"]; });

/* harmony import */ var _product_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-edit.component */ "./src/app/products/product-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return _product_edit_component__WEBPACK_IMPORTED_MODULE_2__["ProductEditComponent"]; });

/* harmony import */ var _product_edit_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-edit.guard */ "./src/app/products/product-edit.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductEditGuard", function() { return _product_edit_guard__WEBPACK_IMPORTED_MODULE_3__["ProductEditGuard"]; });

/* harmony import */ var _product_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-resolver.service */ "./src/app/products/product-resolver.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductResolverService", function() { return _product_resolver_service__WEBPACK_IMPORTED_MODULE_4__["ProductResolverService"]; });








/***/ }),

/***/ "./src/app/products/product-data.ts":
/*!******************************************!*\
  !*** ./src/app/products/product-data.ts ***!
  \******************************************/
/*! exports provided: ProductData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductData", function() { return ProductData; });
var ProductData = /** @class */ (function () {
    function ProductData() {
    }
    ProductData.prototype.createDb = function () {
        var products = [
            {
                'id': 1,
                'productName': 'Xmas Hat',
                'productCode': 'PIP-0001',
                'releaseDate': '03/10/2018',
                'description': 'Remix where white elements are white and not transparent so it can be used on transparent backgrounds',
                'price': 10.22,
                'starRating': 5.0,
                'imageUrl': 'https://openclipart.org/download/311105/1543645324.svg',
                'tags': ['hat', 'chrismas', 'red']
            },
            {
                'id': 2,
                'productName': 'LAMPADA AD OLIO',
                'productCode': 'PIP-0002',
                'releaseDate': '15/01/2018',
                'description': 'Lampada ad olio',
                'price': 11.22,
                'starRating': 3.2,
                'imageUrl': 'https://openclipart.org/download/311298/1544033187.svg'
            },
            {
                'id': 5,
                'productName': 'headphone',
                'productCode': 'PIP-0003',
                'releaseDate': '22/10/2018',
                'description': 'A simple headphone.',
                'price': 8.3,
                'starRating': 4.3,
                'imageUrl': 'https://openclipart.org/download/221493/Headphones-Icon.svg',
                'tags': ['audio', 'music', 'hardware']
            },
            {
                'id': 8,
                'productName': 'Strawberry Plant',
                'productCode': 'PIP-0004',
                'releaseDate': '05/12/2018',
                'description': 'A strawberry plant with flowers and fruits.',
                'price': 8.30,
                'starRating': 2.5,
                'imageUrl': 'https://openclipart.org/download/217678/Strawberry-Plant.svg'
            },
            {
                'id': 10,
                'productName': 'Owl Clock',
                'productCode': 'PIP-0005',
                'releaseDate': '09/11/2018',
                'description': 'cool owl clock ',
                'price': 20.45,
                'starRating': 3.7,
                'imageUrl': 'https://openclipart.org/download/247152/OwlClock.svg'
            }
        ];
        return { products: products };
    };
    return ProductData;
}());



/***/ }),

/***/ "./src/app/products/product-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/products/product-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/products/product-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/products/product-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\"\n       *ngIf=\"product\">\n    {{pageTitle + \": \" + product.productName}}\n  </div>\n\n  <div class=\"card-body\"\n       *ngIf=\"product\">\n\n    <div class=\"row\">\n\n      <div class=\"col-md-8\">\n        <div class=\"row\">\n          <div class=\"col-md-3\">Name:</div>\n          <div class=\"col-md-6\">{{product.productName}}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">Code:</div>\n          <div class=\"col-md-6\">{{product.productCode}}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">Description:</div>\n          <div class=\"col-md-6\">{{product.description}}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">Availability:</div>\n          <div class=\"col-md-6\">{{product.releaseDate}}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">Price:</div>\n          <div class=\"col-md-6\">{{product.price|currency:\"USD\":\"symbol\"}}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">5 Star Rating:</div>\n          <div class=\"col-md-6\">\n            <wn-star [rating]=\"product.starRating\">\n            </wn-star>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">Tags:</div>\n          <div class=\"col-md-6\">{{product.tags}}</div>\n        </div>\n      </div>\n\n      <div class=\"col-md-4\"\n           *ngIf=\"product.imageUrl\">\n        <img class=\"center-block img-responsive\"\n             [style.height.px]=\"150\"\n             [style.margin.px]=\"2\"\n             [src]=\"product.imageUrl\"\n             [title]=\"product.productName\">\n      </div>\n    </div>\n\n    <div class=\"row mt-4\">\n      <div class=\"col-md-4\">\n        <button class=\"btn btn-outline-secondary mr-3\"\n                style=\"width:80px\"\n                [routerLink]=\"['/products']\"\n                [preserveQueryParams]=\"true\"><!--(click)=\"onBack()-->\n          <i class=\"fa fa-chevron-left\"></i> Back\n        </button>\n        <button class=\"btn btn-outline-primary\"\n                style=\"width:80px\"\n                [routerLink]=\"['/products', product.id, 'edit']\"\n                [preserveQueryParams]=\"true\">\n          Edit\n        </button>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"alert alert-danger\"\n       *ngIf=\"errorMessage\">{{errorMessage}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/product-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/products/product-detail.component.ts ***!
  \******************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
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


// import { ProductService } from './product.service';
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, router) {
        this.route = route;
        this.router = router;
        this.pageTitle = 'Product Detail';
        this.errorMessage = '';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        // get data  from a resolve on the route
        this.product = this.route.snapshot.data['product'];
        /* without the resolver
        const param = this.route.snapshot.paramMap.get('id');
        if (param) {
          const id = +param;
          this.getProduct(id);
        }
        */
    };
    /* without the resolver
      getProduct(id: number) {
      this.productService.getProduct(id).subscribe(
        product => this.product = product,
        error => this.errorMessage = <any>error);
    }
    */
    ProductDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/products']);
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/products/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/products/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/products/product-edit.component.css":
/*!*****************************************************!*\
  !*** ./src/app/products/product-edit.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\r\n  .delete-button {\r\n    margin-top: 6px;\r\n  }\r\n  .add-tag-button{\r\n    margin-top: 26px;\r\n  }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0UsaUJBQWlCO0dBQ2xCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0LWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5kZWxldGUtYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICB9XHJcbiAgLmFkZC10YWctYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMjZweDtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/products/product-edit.component.html":
/*!******************************************************!*\
  !*** ./src/app/products/product-edit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\"></ngx-loading>\n<div class=\"card\">\n  <div class=\"card-header\">\n    {{pageTitle}}\n  </div>\n\n  <div class=\"card-body\">\n    <form novalidate\n          (ngSubmit)=\"saveProduct()\"\n          [formGroup]=\"productForm\">\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\"\n               for=\"productNameId\">Product Name</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\"\n                 id=\"productNameId\"\n                 type=\"text\"\n                 placeholder=\"Name (required)\"\n                 formControlName=\"productName\"\n                 [ngClass]=\"{'is-invalid': displayMessage.productName }\" />\n          <span class=\"invalid-feedback\">\n            {{displayMessage.productName}}\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\"\n               for=\"productCodeId\">Product Code</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\"\n                 id=\"productCodeId\"\n                 type=\"text\"\n                 placeholder=\"Code (required)\"\n                 formControlName=\"productCode\"\n                 [ngClass]=\"{'is-invalid': displayMessage.productCode}\" />\n          <span class=\"invalid-feedback\">\n            {{displayMessage.productCode}}\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\"\n               for=\"starRatingId\">Star Rating (1-5)</label>\n\n        <div class=\"col-md-8\">\n          <input class=\"form-control\"\n                 id=\"starRatingId\"\n                 type=\"text\"\n                 placeholder=\"Rating (1-5)\"\n                 formControlName=\"starRating\"\n                 [ngClass]=\"{'is-invalid': displayMessage.starRating}\" />\n          <span class=\"invalid-feedback\">\n            {{displayMessage.starRating}}\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\"\n                for=\"priceId\">Price</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\"\n                  id=\"priceId\"\n                  type=\"number\"\n                  placeholder=\"Price (required) (10.50)\"\n                  formControlName=\"price\"\n                  [ngClass]=\"{'is-invalid': displayMessage.price}\" />\n          <span class=\"invalid-feedback\">\n            {{displayMessage.price}}\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\"\n                for=\"availableId\">Available</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\"\n                  id=\"availableId\"\n                  type=\"text\"\n                  required\n                  placeholder=\"Release Date (required) (22/12/2018)\"\n                  formControlName=\"releaseDate\"\n                  [ngClass]=\"{'is-invalid': displayMessage.releaseDate}\" />\n          <span class=\"invalid-feedback\">\n            {{displayMessage.releaseDate}}\n          </span>\n        </div>\n      </div>\n\n      <div formArrayName=\"tags\">\n        <div class=\"form-group row mb-2\"\n             *ngFor=\"let tag of tags.controls; let i=index\">\n          <label class=\"col-md-2 col-form-label\"\n                 [attr.for]=\"i\">Tag</label>\n\n          <div class=\"col-md-8\">\n            <input class=\"form-control\"\n                   [id]=\"i\"\n                   type=\"text\"\n                   placeholder=\"Tag\"\n                   [formControlName]=\"i\" />\n          </div>\n          <div class=\"col-md-1 delete-button\">\n            <button class=\"btn btn-outline-warning btn-sm\"\n              type=\"button\"\n              title=\"Delete this search tag\"\n              (click)=\"deleteTag(i)\">Delete Tag\n            </button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-1 mb-2 add-tag-button\">\n          <button class=\"btn btn-outline-secondary btn-sm\"\n                  type=\"button\"\n                  title=\"Add a search tag\"\n                  (click)=\"addTag()\">Add Tag\n          </button>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\"\n               for=\"descriptionId\">Description</label>\n\n        <div class=\"col-md-8\">\n          <textarea class=\"form-control\"\n                    id=\"descriptionId\"\n                    placeholder=\"Description\"\n                    rows=3\n                    formControlName=\"description\"\n                    [ngClass]=\"{'is-invalid': displayMessage.description}\"></textarea>\n          <span class=\"invalid-feedback\">\n            {{ displayMessage.description}}\n          </span>\n        </div>\n      </div>\n\n\n      <div class=\"form-group row mb-2\">\n          <label class=\"col-md-2 col-form-label\"\n          for=\"urlImageId\">Online Url</label>\n\n        <div class=\"col-md-8\">\n          <input class=\"form-control\"\n                  id=\"urlImageId\"\n                  type=\"text\"\n                  placeholder=\"Online Image Url (required)\"\n                  formControlName=\"imageUrl\"\n                  [ngClass]=\"{'is-invalid': displayMessage.imageUrl}\"s\n                  />\n          <span class=\"invalid-feedback\">\n             {{displayMessage.imageUrl}}\n          </span>\n        </div>\n      </div>\n      <div class=\"form-group row mb-2\">\n        <span class=\"col-md-2 col-form-label\"></span>\n        <div class=\"col-md-8\">\n          <img *ngIf=\"!displayMessage.imageUrl\" [src]=\"imgSrc\" width=\"100\"/>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <div class=\"offset-md-2 col-md-4\">\n          <button class=\"btn btn-primary mr-3\"\n                  style=\"width:80px;\"\n                  type=\"submit\"\n                  [title]=\"productForm.valid ? 'Save your entered data' : 'Disabled until the form data is valid'\"\n                  [disabled]=\"!productForm.valid\">\n            Save\n          </button>\n          <button class=\"btn btn-outline-secondary mr-3\"\n                  style=\"width:80px;\"\n                  type=\"button\"\n                  title=\"Cancel your edits\"\n                  [routerLink]=\"['/products']\"\n                  [preserveQueryParams]=\"true\">\n            Cancel\n          </button>\n          <button class=\"btn btn-outline-warning\"\n                  style=\"width:80px\"\n                  type=\"button\"\n                  title=\"Delete this product\"\n                  (click)=\"deleteProduct()\">\n            Delete\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"alert alert-danger\"\n       *ngIf=\"errorMessage\">{{errorMessage}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/product-edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/products/product-edit.component.ts ***!
  \****************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/index */ "./src/app/shared/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(fb, route, router, productService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.loading = false;
        this.imgSrc = '';
        this.pageTitle = 'Product Edit';
        // Use with the generic validation message class
        this.displayMessage = {};
        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            productName: {
                required: 'Product name is required.',
                minlength: 'Product name must be at least three characters.',
                maxlength: 'Product name cannot exceed 50 characters.'
            },
            productCode: {
                required: 'Product code is required.'
            },
            starRating: {
                range: 'Rate the product between 1 (lowest) and 5 (highest).'
            },
            imageUrl: {
                required: 'Url Image code is required.',
                minlength: 'Product name must be at least three characters.',
                pattern: 'Must be a png, jpg or svg url '
            },
            price: {
                required: 'price is required.',
                pattern: 'accepts numbers with a maximum of 2 decimal places and with a dot separator.',
            },
            releaseDate: {
                required: 'Release Date is required.',
                pattern: 'accepts valid date dd/mm/yyyy.',
            }
        };
        // Define an instance of the validator for use with this form,
        // passing in this form's set of validation messages.
        this.genericValidator = new _shared_index__WEBPACK_IMPORTED_MODULE_6__["GenericValidator"](this.validationMessages);
    }
    Object.defineProperty(ProductEditComponent.prototype, "tags", {
        get: function () {
            return this.productForm.get('tags');
        },
        enumerable: true,
        configurable: true
    });
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productForm = this.fb.group({
            productName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            productCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            starRating: ['', _shared_index__WEBPACK_IMPORTED_MODULE_6__["NumberValidators"].range(1, 5)],
            tags: this.fb.array([]),
            description: '',
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
            releaseDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$")]],
            imageUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('.*\/.*.(png|jpg|svg)')]],
        });
        // Read the product Id from the route parameter - without resolve
        // this.sub = this.route.paramMap.subscribe(
        //   params => {
        //     const id = +params.get('id');
        //     this.getProduct(id);
        //   }
        // );
        // with resolve - but not get updated when form change to new from edit (same page different segment url - ngOnInit)
        // this.product = this.route.snapshot.data['product'];
        // this.displayProduct(this.product);
        // with resolve - using observable
        this.route.data.subscribe(function (data) {
            _this.product = data['product'];
            _this.displayProduct(_this.product);
        });
        this.productForm.get('imageUrl').valueChanges.subscribe(function (value) {
            _this.imgSrc = value;
            // console.log(value);
        });
    };
    ProductEditComponent.prototype.ngOnDestroy = function () {
        // this.sub.unsubscribe();
    };
    ProductEditComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Watch for the blur event from any input element on the form.
        var controlBlurs = this.formInputElements
            .map(function (formControl) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(formControl.nativeElement, 'blur'); });
        // Merge the blur event observable with the valueChanges observable
        rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, [this.productForm.valueChanges].concat(controlBlurs)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(800)).subscribe(function (value) {
            _this.displayMessage = _this.genericValidator.processMessages(_this.productForm);
        });
    };
    ProductEditComponent.prototype.addTag = function () {
        this.tags.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]());
    };
    ProductEditComponent.prototype.deleteTag = function (index) {
        this.tags.removeAt(index);
        this.tags.markAsDirty();
    };
    // getProduct(id: number): void {
    //   this.loading = true;
    //   this.productService.getProduct(id)
    //     .subscribe(
    //       (product: Product) => {
    //         this.loading = false;
    //         console.log('nisan', product);
    //         return this.displayProduct(product);
    //       },
    //       (error: any) => this.errorMessage = <any>error
    //     );
    // }
    ProductEditComponent.prototype.displayProduct = function (product) {
        if (this.productForm) {
            this.productForm.reset();
        }
        this.product = product;
        if (this.product.id === 0) {
            this.pageTitle = 'Add Product';
        }
        else {
            this.pageTitle = "Edit Product: " + this.product.productName;
        }
        console.log(this.product);
        // Update the data on the form
        this.productForm.patchValue({
            productName: this.product.productName,
            productCode: this.product.productCode,
            starRating: this.product.starRating,
            description: this.product.description,
            imageUrl: this.product.imageUrl,
            price: this.product.price,
            releaseDate: this.product.releaseDate
        });
        this.productForm.setControl('tags', this.fb.array(this.product.tags || []));
    };
    ProductEditComponent.prototype.deleteProduct = function () {
        var _this = this;
        if (this.product.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
        }
        else {
            if (confirm("Really delete the product: " + this.product.productName + "?")) {
                this.loading = true;
                this.productService.deleteProduct(this.product.id)
                    .subscribe(function () {
                    _this.loading = false;
                    return _this.onSaveComplete();
                }, function (error) { return _this.errorMessage = error; });
            }
        }
    };
    ProductEditComponent.prototype.saveProduct = function () {
        var _this = this;
        if (this.productForm.valid) {
            if (this.productForm.dirty) {
                var p = __assign({}, this.product, this.productForm.value);
                if (p.id === 0) {
                    this.productService.createProduct(p)
                        .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
                }
                else {
                    this.productService.updateProduct(p)
                        .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
                }
            }
            else {
                this.onSaveComplete();
            }
        }
        else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    };
    ProductEditComponent.prototype.onSaveComplete = function () {
        // Reset the form to clear the flags
        this.productForm.reset();
        this.router.navigate(['/products'], { queryParamsHandling: 'preserve' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", Array)
    ], ProductEditComponent.prototype, "formInputElements", void 0);
    ProductEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/products/product-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-edit.component.css */ "./src/app/products/product-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/products/product-edit.guard.ts":
/*!************************************************!*\
  !*** ./src/app/products/product-edit.guard.ts ***!
  \************************************************/
/*! exports provided: ProductEditGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditGuard", function() { return ProductEditGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductEditGuard = /** @class */ (function () {
    function ProductEditGuard() {
    }
    ProductEditGuard.prototype.canDeactivate = function (component) {
        if (component.productForm.dirty) {
            var productName = component.productForm.get('productName').value || 'New Product';
            return confirm("Navigate away and lose all changes to " + productName + "?");
        }
        return true;
    };
    ProductEditGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ProductEditGuard);
    return ProductEditGuard;
}());



/***/ }),

/***/ "./src/app/products/product-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/products/product-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "thead {\n  color: #337AB7;\n}\n.row {\n  padding-bottom: 1.25rem;\n\n}\n@media (max-width: 767px) {\n  thead {\n    display: none;\n  }\n  tr {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid #DFD7CA;\n    margin-top: 26px;\n  }\n  .imageBlock {\n    margin: auto;\n    border-top: none;\n  }\n\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSx3QkFBd0I7O0NBRXpCO0FBRUQ7RUFDRTtJQUNFLGNBQWM7R0FDZjtFQUNEO0lBQ0UsY0FBYztJQUNkLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsaUJBQWlCO0dBQ2xCO0VBQ0Q7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0dBQ2xCOztDQUVGIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aGVhZCB7XG4gIGNvbG9yOiAjMzM3QUI3O1xufVxuLnJvdyB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICB0aGVhZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICB0ciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERkQ3Q0E7XG4gICAgbWFyZ2luLXRvcDogMjZweDtcbiAgfVxuICAuaW1hZ2VCbG9jayB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cblxufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/products/product-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/products/product-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\"></ngx-loading>\n<div class=\"card\">\n  <div class=\"card-header\">\n    {{pageTitle}}\n  </div>\n\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">Filter by:</div>\n      <div class=\"col-md-4\">\n        <input type=\"text\"\n               [(ngModel)]=\"listFilter\" />\n      </div>\n    </div>\n    <div class=\"row\"\n         *ngIf=\"listFilter\">\n      <div class=\"col-md-6\">\n        <h4>Filtered by: {{listFilter}}</h4>\n      </div>\n    </div>\n\n    <div class=\"table-responsive\">\n      <table class=\"table mb-0\"\n             *ngIf=\"products && products.length\">\n        <thead>\n          <tr>\n            <th></th>\n            <th>Product</th>\n            <th>Code</th>\n            <th>Available</th>\n            <th>Price</th>\n            <th>5 Star Rating</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let product of filteredProducts\">\n            <td class=\"imageBlock\">\n              <img *ngIf=\"product.imageUrl\"\n                   [src]=\"product.imageUrl\"\n                   [title]=\"product.productName\"\n                   [style.width.px]=\"imageWidth\"\n                   [style.margin.px]=\"imageMargin\">\n            </td>\n            <td>\n              <a [routerLink]=\"['/products', product.id]\"\n                  [queryParams]=\"{filterBy: listFilter}\">\n                {{ product.productName }}\n              </a>\n            </td>\n            <td>{{ product.productCode }}</td>\n            <td>{{ product.releaseDate }}</td>\n            <td>{{ product.price | currency:\"USD\":\"symbol\":\"1.2-2\" }}</td>\n            <td>\n              <wn-star [rating]=\"product.starRating\">\n              </wn-star>\n            </td>\n            <td>\n              <button class=\"btn btn-outline-primary btn-sm\"\n                      [routerLink]=\"['/products', product.id, 'edit']\"\n                      [queryParams]=\"{filterBy: listFilter}\">\n                Edit\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n</div>\n\n<div *ngIf=\"errorMessage\"\n     class=\"alert alert-danger\">\n  Error: {{ errorMessage }}\n</div>\n"

/***/ }),

/***/ "./src/app/products/product-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/products/product-list.component.ts ***!
  \****************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");
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



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, route) {
        this.productService = productService;
        this.route = route;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.errorMessage = '';
        this.loading = false;
        this._listFilter = '';
        this.filteredProducts = [];
        this.products = [];
    }
    Object.defineProperty(ProductListComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this.loading = true;
            this._listFilter = value;
            this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
            this.loading = false;
        },
        enumerable: true,
        configurable: true
    });
    ProductListComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(function (product) {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.productService.getProducts().subscribe(function (products) {
            _this.products = products;
            _this.listFilter = _this.route.snapshot.queryParams['filterBy'] || '';
            if (_this.listFilter === '') {
                _this.filteredProducts = _this.products;
            }
            _this.loading = false;
        }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/products/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/products/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/products/product-resolver.service.ts":
/*!******************************************************!*\
  !*** ./src/app/products/product-resolver.service.ts ***!
  \******************************************************/
/*! exports provided: ProductResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductResolverService", function() { return ProductResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { map, catchError } from 'rxjs/operators';

var ProductResolverService = /** @class */ (function () {
    function ProductResolverService(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    ProductResolverService.prototype.resolve = function (route, state) {
        var id = +route.params['id'];
        return this.productService.getProduct(id);
        // const id = route.params['id'];
        // if (isNaN(id)) {
        //   console.log(`product id is not a number: ${id}`);
        //   this.router.navigate(['/products']);
        //   return of(null);
        // }
        // return this.productService.getProduct(+id)
        //   .pipe(map(product => {
        //     if (product) {
        //       return product;
        //     }
        //     console.log(`product not found: ${id}`);
        //     this.router.navigate(['/products']);
        //     return null;
        //   }))
        //   .pipe(catchError(error => {
        //     console.log(`rerieval error: ${error}`);
        //     this.router.navigate(['/products']);
        //     return Observable.of(null);
        //   }));
    };
    ProductResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductResolverService);
    return ProductResolverService;
}());



/***/ }),

/***/ "./src/app/products/product-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/products/product-routing.module.ts ***!
  \****************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list.component */ "./src/app/products/product-list.component.ts");
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail.component */ "./src/app/products/product-detail.component.ts");
/* harmony import */ var _product_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-edit.component */ "./src/app/products/product-edit.component.ts");
/* harmony import */ var _product_edit_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-edit.guard */ "./src/app/products/product-edit.guard.ts");
/* harmony import */ var _product_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-resolver.service */ "./src/app/products/product-resolver.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'products', component: _product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"] },
    {
        path: 'products/:id',
        component: _product_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailComponent"],
        resolve: { product: _product_resolver_service__WEBPACK_IMPORTED_MODULE_6__["ProductResolverService"] }
    },
    {
        path: 'products/:id/edit',
        canDeactivate: [_product_edit_guard__WEBPACK_IMPORTED_MODULE_5__["ProductEditGuard"]],
        component: _product_edit_component__WEBPACK_IMPORTED_MODULE_4__["ProductEditComponent"],
        resolve: { product: _product_resolver_service__WEBPACK_IMPORTED_MODULE_6__["ProductResolverService"] }
    }
];
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());



/***/ }),

/***/ "./src/app/products/product.module.ts":
/*!********************************************!*\
  !*** ./src/app/products/product.module.ts ***!
  \********************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/products/product-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./src/app/products/index.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { ProductResolverService } from './product-resolver.service';


var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_5__["NgxLoadingModule"].forRoot({}),
                _product_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductRoutingModule"]
            ],
            declarations: [
                _index__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"],
                _index__WEBPACK_IMPORTED_MODULE_4__["ProductDetailComponent"],
                _index__WEBPACK_IMPORTED_MODULE_4__["ProductEditComponent"]
            ],
            providers: [_index__WEBPACK_IMPORTED_MODULE_4__["ProductResolverService"]]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/products/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/products/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.productsUrl = 'api/products';
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.productsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.getProduct = function (id) {
        if (id === 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.initializeProduct());
        }
        var url = this.productsUrl + "/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('getProduct: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.createProduct = function (product) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        product.id = null;
        return this.http.post(this.productsUrl, product, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('createProduct: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.deleteProduct = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        var url = this.productsUrl + "/" + id;
        return this.http.delete(url, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('deleteProduct: ' + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.updateProduct = function (product) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        var url = this.productsUrl + "/" + product.id;
        return this.http.put(url, product, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return console.log('updateProduct: ' + product.id); }), 
        // Return the product on an update
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return product; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Backend returned code " + err.status + ": " + err.body.error;
        }
        console.error(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    ProductService.prototype.initializeProduct = function () {
        // Return an initialized object
        return {
            id: 0,
            productName: null,
            productCode: null,
            tags: [''],
            releaseDate: null,
            price: null,
            description: null,
            starRating: null,
            imageUrl: null
        };
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared/generic-validator.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/generic-validator.ts ***!
  \*********************************************/
/*! exports provided: GenericValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericValidator", function() { return GenericValidator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

// Generic validator for Reactive forms
// Implemented as a class, not a service, so it can retain state for multiple forms.
var GenericValidator = /** @class */ (function () {
    // Provide the set of valid validation messages
    // Stucture:
    // controlName1: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // },
    // controlName2: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // }
    function GenericValidator(validationMessages) {
        this.validationMessages = validationMessages;
    }
    // Processes each control within a FormGroup
    // And returns a set of validation messages to display
    // Structure
    // controlName1: 'Validation Message.',
    // controlName2: 'Validation Message.'
    GenericValidator.prototype.processMessages = function (container) {
        var _this = this;
        var messages = {};
        var _loop_1 = function (controlKey) {
            if (container.controls.hasOwnProperty(controlKey)) {
                var c = container.controls[controlKey];
                // If it is a FormGroup, process its child controls.
                if (c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
                    var childMessages = this_1.processMessages(c);
                    Object.assign(messages, childMessages);
                }
                else {
                    // Only validate if there are validation messages for the control
                    if (this_1.validationMessages[controlKey]) {
                        messages[controlKey] = '';
                        if ((c.dirty || c.touched) && c.errors) {
                            Object.keys(c.errors).map(function (messageKey) {
                                if (_this.validationMessages[controlKey][messageKey]) {
                                    messages[controlKey] += _this.validationMessages[controlKey][messageKey] + ' ';
                                }
                            });
                        }
                    }
                }
            }
        };
        var this_1 = this;
        for (var controlKey in container.controls) {
            _loop_1(controlKey);
        }
        return messages;
    };
    GenericValidator.prototype.getErrorCount = function (container) {
        var errorCount = 0;
        for (var controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey)) {
                if (container.controls[controlKey].errors) {
                    errorCount += Object.keys(container.controls[controlKey].errors).length;
                    console.log(errorCount);
                }
            }
        }
        return errorCount;
    };
    return GenericValidator;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: GenericValidator, NumberValidators, StarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generic_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic-validator */ "./src/app/shared/generic-validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenericValidator", function() { return _generic_validator__WEBPACK_IMPORTED_MODULE_0__["GenericValidator"]; });

/* harmony import */ var _number_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number.validator */ "./src/app/shared/number.validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberValidators", function() { return _number_validator__WEBPACK_IMPORTED_MODULE_1__["NumberValidators"]; });

/* harmony import */ var _star_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./star.component */ "./src/app/shared/star.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StarComponent", function() { return _star_component__WEBPACK_IMPORTED_MODULE_2__["StarComponent"]; });






/***/ }),

/***/ "./src/app/shared/number.validator.ts":
/*!********************************************!*\
  !*** ./src/app/shared/number.validator.ts ***!
  \********************************************/
/*! exports provided: NumberValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValidators", function() { return NumberValidators; });
var NumberValidators = /** @class */ (function () {
    function NumberValidators() {
    }
    NumberValidators.range = function (min, max) {
        return function (c) {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { 'range': true };
            }
            return null;
        };
    };
    return NumberValidators;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _index__WEBPACK_IMPORTED_MODULE_3__["StarComponent"]
            ],
            exports: [
                _index__WEBPACK_IMPORTED_MODULE_3__["StarComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/star.component.css":
/*!*******************************************!*\
  !*** ./src/app/shared/star.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\n  overflow: hidden;\n}\ndiv {\n  cursor: pointer;\n}\n.fa-star {\n  color: gold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0YXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3Rhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyb3Age1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuZGl2IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmEtc3RhciB7XG4gIGNvbG9yOiBnb2xkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/star.component.html":
/*!********************************************!*\
  !*** ./src/app/shared/star.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\"\n     [style.width.px]=\"starWidth\"\n     [title]=\"rating\"\n     (click)=\"onClick()\">\n  <div style=\"width: 75px\">\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/star.component.ts":
/*!******************************************!*\
  !*** ./src/app/shared/star.component.ts ***!
  \******************************************/
/*! exports provided: StarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarComponent", function() { return StarComponent; });
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

var StarComponent = /** @class */ (function () {
    function StarComponent() {
        this.rating = 0;
        this.starWidth = 0;
        this.ratingClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StarComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 75 / 5;
    };
    StarComponent.prototype.onClick = function () {
        this.ratingClicked.emit("The rating " + this.rating + " was clicked!");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StarComponent.prototype, "rating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StarComponent.prototype, "ratingClicked", void 0);
    StarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wn-star',
            template: __webpack_require__(/*! ./star.component.html */ "./src/app/shared/star.component.html"),
            styles: [__webpack_require__(/*! ./star.component.css */ "./src/app/shared/star.component.css")]
        })
    ], StarComponent);
    return StarComponent;
}());



/***/ }),

/***/ "./src/app/user/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../messages/message.service */ "./src/app/messages/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(messageService) {
        this.messageService = messageService;
    }
    AuthService.prototype.isLoggedIn = function () {
        return !!this.currentUser;
    };
    AuthService.prototype.login = function (userName, password) {
        if (!userName || !password) {
            this.messageService.addMessage('Please enter your userName and password');
            return;
        }
        if (userName === 'admin') {
            this.currentUser = {
                id: 1,
                userName: userName,
                isAdmin: true
            };
            this.messageService.addMessage('Admin login');
            return;
        }
        this.currentUser = {
            id: 2,
            userName: userName,
            isAdmin: false
        };
        this.messageService.addMessage("User: " + this.currentUser.userName + " logged in");
    };
    AuthService.prototype.logout = function () {
        this.currentUser = null;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_messages_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/user/login.component.html":
/*!*******************************************!*\
  !*** ./src/app/user/login.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n      {{pageTitle}}\n  </div>\n\n  <div class=\"card-body\">\n      <form\n            novalidate\n            (ngSubmit)=\"login(loginForm)\"\n            #loginForm=\"ngForm\"\n            autocomplete=\"off\" >\n          <fieldset>\n              <div class=\"form-group\"\n                   [ngClass]=\"{'has-error': (userNameVar.touched ||\n                                             userNameVar.dirty) &&\n                                             !userNameVar.valid }\">\n                  <label class=\"col-md-2\"\n                         for=\"userNameId\">User Name</label>\n\n                  <div class=\"col-md-8\">\n                      <input class=\"form-control\"\n                              id=\"userNameId\"\n                              type=\"text\"\n                              placeholder=\"User Name (required)\"\n                              required\n                              (ngModel) = \"userName\"\n                              name=\"userName\"\n                              #userNameVar=\"ngModel\" />\n                      <span class=\"text-danger\" *ngIf=\"(userNameVar.touched ||\n                                                       userNameVar.dirty) &&\n                                                       userNameVar.errors\">\n                          <span *ngIf=\"userNameVar.errors.required\">\n                              User name is required.\n                          </span>\n                      </span>\n                  </div>\n              </div>\n\n              <div class=\"form-group\"\n                   [ngClass]=\"{'has-error': (passwordVar.touched ||\n                                             passwordVar.dirty) &&\n                                             !passwordVar.valid }\">\n                  <label class=\"col-md-2\" for=\"passwordId\">Password</label>\n\n                  <div class=\"col-md-8\">\n                      <input class=\"form-control\"\n                              id=\"passwordId\"\n                              type=\"password\"\n                              placeholder=\"Password (required)\"\n                              required\n                              (ngModel) = \"password\"\n                              name=\"password\"\n                              #passwordVar=\"ngModel\" />\n                      <span class=\"text-danger\" *ngIf=\"(passwordVar.touched ||\n                                                       passwordVar.dirty) &&\n                                                       passwordVar.errors\">\n                          <span *ngIf=\"passwordVar.errors.required\">\n                              Password is required.\n                          </span>\n                      </span>\n                  </div>\n              </div>\n\n              <div class=\"form-group\">\n                  <div class=\"col-md-4 col-md-offset-2\">\n                      <span>\n                          <button class=\"btn btn-primary\"\n                                  type=\"submit\"\n                                  style=\"width:80px;margin-right:10px\"\n                                  [disabled]=\"!loginForm.valid\">\n                              Log In\n                          </button>\n                      </span>\n                      <span>\n                          <a [routerLink]=\"['/home']\" class=\"btn btn-default\">\n                              Cancel\n                          </a>\n                      </span>\n                   </div>\n              </div>\n          </fieldset>\n      </form>\n      <div class=\"has-error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/user/login.component.scss":
/*!*******************************************!*\
  !*** ./src/app/user/login.component.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-default {\n  color: #000; }\n\n.has-error .form-control {\n  border: 1px solid red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9EOlxcYXBwc1xcbXktYXBwL3NyY1xcYXBwXFx1c2VyXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVcsRUFDWjs7QUFDRDtFQUVJLHNCQUFxQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWRlZmF1bHQge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5oYXMtZXJyb3Ige1xyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/login.component.ts":
/*!*****************************************!*\
  !*** ./src/app/user/login.component.ts ***!
  \*****************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/user/auth.service.ts");
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
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.pageTitle = 'Log In';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (loginForm) {
        if (loginForm && loginForm.valid) {
            var userName = loginForm.form.value.userName;
            var password = loginForm.form.value.password;
            this.authService.login(userName, password);
            this.router.navigate(['/products']);
        }
        else {
            this.errorMessage = 'Please enter a user name and password.';
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/user/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/user/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/user/login.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"]
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
            ]
        })
    ], UserModule);
    return UserModule;
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

module.exports = __webpack_require__(/*! D:\apps\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map