(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"src/app/products/product.module": [
		"./src/app/products/product.module.ts",
		"src-app-products-product-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _user_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/auth-guard.service */ "./src/app/user/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    // { path: 'products', canActivate: [ AuthGuardService ], loadChildren: 'src/app/products/product.module#ProductModule'},
    // require the log-in before loading the product module.
    // { path: 'products', canLoad: [ AuthGuardService ], loadChildren: 'src/app/products/product.module#ProductModule'},
    // again using canActivate coz canLoad blocks preload the module with PreloadAllModules (makes sense)
    { path: 'products', canActivate: [_user_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]], loadChildren: 'src/app/products/product.module#ProductModule' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    // enableTracing: true,
                    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
                })],
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

module.exports = "<div class=\"spinner-bg\" *ngIf=\"loading\">\n    <span class=\"fa fa-spinner\"></span>\n</div>\n<div class=\"navbar navbar-expand-lg fixed-top navbar-dark bg-primary animatedroute2\">\n  <div class=\"navbar-brand\">{{title}}</div><!--[routerLink]=\"['/']\" [routerLinkActive]=\"['link-active']\"-->\n\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse xnavbar-nav xnav\" [ngClass]=\"{ 'show': navbarOpen }\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class='nav-item welcome-user' *ngIf=\"authService.isLoggedIn()\" class=\"d-lg-none\">\n        <a class='nav-link welcome-mobile'>Welcome {{ authService.currentUser.userName }}</a>\n      </li>\n      <li class='nav-item'><a class='nav-link' routerLinkActive='active'\n        [routerLink]=\"['/home']\" (click)=\"toggleNavbar()\">Home</a>\n      </li>\n      <li class='nav-item'><a class='nav-link' routerLinkActive='active' [routerLinkActiveOptions]=\"{exact: true}\"\n        [routerLink]=\"['/products']\" (click)=\"toggleNavbar()\">Product List</a>\n      </li>\n      <li class='nav-item'><a class='nav-link' routerLinkActive='active'\n        [routerLink]=\"['/products/0/edit']\" (click)=\"toggleNavbar()\">Add Product</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n        <li class='nav-item welcome-user d-none d-lg-block' *ngIf=\"authService.isLoggedIn()\">\n          <a class='nav-link'>Welcome {{ authService.currentUser.userName }}</a>\n        </li>\n        <li class='nav-item'>\n            <a class='nav-link' *ngIf=\"!messageService.isDisplayed\" (click)=\"displayMessages()\">Show Messages</a><!--[routerLink]=\"[{ outlets: { popup: ['messages'] }}]\"-->\n        </li>\n        <li class='nav-item'>\n            <a class='nav-link' *ngIf=\"messageService.isDisplayed\" (click)=\"hideMessages()\">Hide Messages</a>\n        </li>\n        <li class='nav-item' *ngIf=\"!authService.isLoggedIn()\">\n          <a class='nav-link' routerLinkActive='active' [routerLink]=\"['/login']\" (click)=\"toggleNavbar()\">Log In</a>\n        </li>\n        <li class='nav-item log-out-link' *ngIf=\"authService.isLoggedIn()\">\n          <a class='nav-link' (click)=\"logOut()\">Log Out</a>\n        </li>\n      </ul>\n  </div>\n</div>\n\n<div class='container content-with-fixed-top'>\n  <div class=\"row routes-wrapper\">\n      <div class=\"primary-route flex-fill\">\n          <router-outlet></router-outlet>\n        </div>\n        <div class=\"secondary-route\">\n            <router-outlet name=\"popup\"></router-outlet>\n        </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\n  font-size: 14px; }\n\n.navbar-brand {\n  font-size: 21px; }\n\n.content-with-fixed-top {\n  padding-top: 90px; }\n\n.log-out-link {\n  cursor: pointer; }\n\n.welcome-user .nav-link {\n  cursor: default;\n  color: #63ad5a; }\n\n.welcome-user .nav-link:hover {\n    color: #63ad5a; }\n\n.nav-link.welcome-mobile {\n  text-align: center;\n  color: #63ad5a; }\n\n.nav-link.welcome-mobile:hover {\n    color: #63ad5a;\n    cursor: default; }\n\n.primary-route {\n  padding: 0 10px; }\n\n.secondary-route {\n  margin-bottom: 10px;\n  padding: 0 10px; }\n\n@media (max-width: 991px) {\n  .routes-wrapper {\n    flex-direction: column-reverse !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGFwcHNcXG15LWFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxnQkFBZSxFQUNoQjs7QUFDRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVEO0VBRUksZ0JBQWU7RUFDZixlQUFjLEVBSWY7O0FBUEg7SUFLTSxlQUFjLEVBQ2Y7O0FBSUw7RUFDRSxtQkFBa0I7RUFDbEIsZUFBYyxFQU1mOztBQVJEO0lBS0ksZUFBYztJQUNkLGdCQUFlLEVBQ2hCOztBQUdIO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxvQkFBbUI7RUFDbkIsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRTtJQUNFLDBDQUF5QyxFQUMxQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLm5hdmJhci1icmFuZHtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuLmNvbnRlbnQtd2l0aC1maXhlZC10b3Age1xyXG4gIHBhZGRpbmctdG9wOiA5MHB4O1xyXG59XHJcbi5sb2ctb3V0LWxpbmsge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLndlbGNvbWUtdXNlciB7XHJcbiAgLm5hdi1saW5rIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGNvbG9yOiAjNjNhZDVhO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjNjNhZDVhO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm5hdi1saW5rLndlbGNvbWUtbW9iaWxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM2M2FkNWE7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICM2M2FkNWE7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJpbWFyeS1yb3V0ZXtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuLnNlY29uZGFyeS1yb3V0ZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC5yb3V0ZXMtd3JhcHBlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLy8gLy8gLmZsZXgtcm91dGVzLWxheW91dCB7XHJcbi8vIC8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4vLyAvLyB9XHJcbi8vIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4vLyAgIC8vIC5mbGV4LXJvdyB7XHJcbi8vICAgLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbi8vICAgLy8gfVxyXG4vLyAgIC8vIC5mbGV4LXJvdy1jaGlsZCB7XHJcbi8vICAgLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICAvLyB9XHJcbi8vIC8vIC5mbGV4LXJvdXRlcy1sYXlvdXQge1xyXG4vLyAvLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHJcbi8vIC8vICAgLmZsZXgtcm91dGVzLWxheW91dC1jaGlsZCB7XHJcbi8vIC8vICAgICBmbGV4OiAxO1xyXG4vLyAvLyAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuLy8gLy8gICAgICAgJjpsYXN0LWNoaWxkIHtcclxuLy8gLy8gICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuLy8gLy8gICAgICAgfVxyXG4vLyAvLyAgICAgfVxyXG4vLyAvLyAgIH1cclxuXHJcbi8vIC8vICAgLmZsZXgtcm91dGVzLWxheW91dC1jaGlsZDpsYXN0LWNoaWxkIHtcclxuLy8gLy8gICAgIG1hcmdpbjogMCAwIDE2cHggMDtcclxuLy8gLy8gICB9XHJcbi8vIH1cclxuIl19 */"

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
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages/message.service */ "./src/app/messages/message.service.ts");
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
    function AppComponent(authService, router, messageService) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.messageService = messageService;
        this.title = 'Products-NG';
        this.navbarOpen = false;
        this.loading = true;
        router.events.subscribe(function (routerEvent) {
            _this.handleRouterEvent(routerEvent);
        });
    }
    AppComponent.prototype.handleRouterEvent = function (routerEvent) {
        if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            this.loading = true;
        }
        if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] ||
            routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] ||
            routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
            this.loading = false;
        }
    };
    AppComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    AppComponent.prototype.displayMessages = function () {
        console.log('display');
        this.router.navigate([{ outlets: { popup: ['messages'] } }]);
        this.messageService.isDisplayed = true;
        this.toggleNavbar();
    };
    AppComponent.prototype.hideMessages = function () {
        console.log('hide');
        this.router.navigate([{ outlets: { popup: null } }]);
        this.messageService.isDisplayed = false;
        this.toggleNavbar();
    };
    AppComponent.prototype.logOut = function () {
        this.authService.logout();
        this.router.navigate([{ outlets: { popup: null } }]);
        this.messageService.isDisplayed = false;
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
        __metadata("design:paramtypes", [_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _messages_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _messages_message_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./messages/message.module */ "./src/app/messages/message.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Imports for loading & configuring the in-memory web api





// Third Party
// import { NgxLoadingModule } from 'ngx-loading';
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
                // NgxLoadingModule.forRoot({}),
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["InMemoryWebApiModule"].forRoot(_products_product_data__WEBPACK_IMPORTED_MODULE_4__["ProductData"], { delay: 1000 }),
                // ProductModule,
                _user_user_module__WEBPACK_IMPORTED_MODULE_9__["UserModule"],
                _messages_message_module__WEBPACK_IMPORTED_MODULE_10__["MessageModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
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

module.exports = "<div class=\"animatedroute\">\n    <!-- <ngx-loading [show]=\"loading\" [config]=\"{ backDropBorderRadius: '14px'}\"></ngx-loading> -->\n    <div class=\"card\">\n        <div class=\"card-header\">\n          {{pageTitle}}\n        </div>\n        <div class=\"card-body\">\n          <div class=\"container-fluid\">\n            <div class=\"text-center\">\n              <img src=\"./assets/images/logo-cut.png\"\n                   class=\"img-responsive center-block\"\n                   style=\"padding-bottom:50px\" />\n            </div>\n\n            <div class=\"text-center\">Developed by:</div>\n            <div class=\"text-center\">\n              <h3>Nisan Sabag</h3>\n            </div>\n\n            <div class=\"text-center\">\n              <a href=\"https://github.com/nisan250/\">www.github.com/nisan250/</a>\n            </div>\n          </div>\n        </div>\n      </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.router.navigate([{ outlets: { popup: null } }]);
        this.messageService.isDisplayed = false;
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <div class=\"card animatedroute\">\n      <div class=\"d-flex card-header\">\n        <h5 class=\"flex-fill\">Message Log</h5>\n        <span class=\"\">\n            <a class=\"btn btn-default btn-sm\"\n                (click)=\"close()\">\n                x\n            </a>\n        </span>\n      </div>\n      <div class=\"card-body\" >\n        <div class=\"message-elm\" *ngFor=\"let message of messageService.messages; let i=index\">\n          <div *ngIf=\"i<10\" class=\"message-row\">\n            {{ message }}\n          </div>\n        </div>\n        <div *ngIf=\"messageService.messages.length < 1\" class=\"message-row\">\n          <div>No messages yet.</div>\n          <div>Log-In to see new message.</div>\n      </div>\n      </div>\n    </div>\n\n    ",
            styles: [
                '.message-row { margin-bottom: 10px }',
                '.btn-default { border: 1px solid #ccc; }',
                '.message-row { border-bottom: 1px solid rgba(223,215,202,0.75) }',
                '.message-row:last-child { border-bottom: none }'
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
/* harmony import */ var _messages_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages-routing.module */ "./src/app/messages/messages-routing.module.ts");
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
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _messages_routing_module__WEBPACK_IMPORTED_MODULE_4__["MessagesRoutingModule"]
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
        this.isDisplayed = false;
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

/***/ "./src/app/messages/messages-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/messages/messages-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MessagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesRoutingModule", function() { return MessagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.component */ "./src/app/messages/message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'messages', component: _message_component__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"], outlet: 'popup' }
];
var MessagesRoutingModule = /** @class */ (function () {
    function MessagesRoutingModule() {
    }
    MessagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], MessagesRoutingModule);
    return MessagesRoutingModule;
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

/***/ "./src/app/user/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/user/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
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



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        return this.checkLoggedIn(state.url);
    };
    AuthGuardService.prototype.canLoad = function (route) {
        return this.checkLoggedIn(route.path);
    };
    AuthGuardService.prototype.checkLoggedIn = function (url) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
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

module.exports = "<div class=\"card animatedroute\">\n  <div class=\"card-header\">\n      {{pageTitle}}\n  </div>\n\n  <div class=\"card-body\">\n      <form\n            novalidate\n            (ngSubmit)=\"login(loginForm)\"\n            #loginForm=\"ngForm\"\n            autocomplete=\"off\" >\n          <fieldset>\n              <div class=\"form-group\"\n                   [ngClass]=\"{'has-error': (userNameVar.touched ||\n                                             userNameVar.dirty) &&\n                                             !userNameVar.valid }\">\n                  <label class=\"col-md-2\"\n                         for=\"userNameId\">User Name</label>\n\n                  <div class=\"col-md-8\">\n                      <input class=\"form-control\"\n                              id=\"userNameId\"\n                              type=\"text\"\n                              placeholder=\"User Name (required)\"\n                              required\n                              (ngModel) = \"userName\"\n                              name=\"userName\"\n                              #userNameVar=\"ngModel\" />\n                      <span class=\"text-danger\" *ngIf=\"(userNameVar.touched ||\n                                                       userNameVar.dirty) &&\n                                                       userNameVar.errors\">\n                          <span *ngIf=\"userNameVar.errors.required\">\n                              User name is required.\n                          </span>\n                      </span>\n                  </div>\n              </div>\n\n              <div class=\"form-group\"\n                   [ngClass]=\"{'has-error': (passwordVar.touched ||\n                                             passwordVar.dirty) &&\n                                             !passwordVar.valid }\">\n                  <label class=\"col-md-2\" for=\"passwordId\">Password</label>\n\n                  <div class=\"col-md-8\">\n                      <input class=\"form-control\"\n                              id=\"passwordId\"\n                              type=\"password\"\n                              placeholder=\"Password (required)\"\n                              required\n                              (ngModel) = \"password\"\n                              name=\"password\"\n                              #passwordVar=\"ngModel\" />\n                      <span class=\"text-danger\" *ngIf=\"(passwordVar.touched ||\n                                                       passwordVar.dirty) &&\n                                                       passwordVar.errors\">\n                          <span *ngIf=\"passwordVar.errors.required\">\n                              Password is required.\n                          </span>\n                      </span>\n                  </div>\n              </div>\n\n              <div class=\"form-group\">\n                  <div class=\"col-md-4 col-md-offset-2\">\n                      <span>\n                          <button class=\"btn btn-primary\"\n                                  type=\"submit\"\n                                  style=\"width:80px;margin-right:10px\"\n                                  [disabled]=\"!loginForm.valid\">\n                              Log In\n                          </button>\n                      </span>\n                      <span>\n                          <a [routerLink]=\"['/home']\" class=\"btn btn-default\">\n                              Cancel\n                          </a>\n                      </span>\n                   </div>\n              </div>\n          </fieldset>\n      </form>\n      <div class=\"has-error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n  </div>\n\n</div>\n"

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
            // this.router.navigate(['/products']);
            if (this.authService.redirectUrl) {
                this.router.navigateByUrl(this.authService.redirectUrl);
            }
            else {
                this.router.navigate(['/products']);
            }
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
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/user/auth-guard.service.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
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
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRoutingModule"]
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]
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