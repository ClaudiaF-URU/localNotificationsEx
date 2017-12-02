webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { FileChooser } from '@ionic-native/file-chooser';

var HomePage = (function () {
    // sound:any;
    function HomePage(navCtrl, localNotifications /*,
        private fileChooser: FileChooser*/) {
        this.navCtrl = navCtrl;
        this.localNotifications = localNotifications; /*,
        private fileChooser: FileChooser*/
    }
    HomePage.prototype.setAlarm = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_3_moment__().utc().format(this.time));
        var date = new Date(__WEBPACK_IMPORTED_MODULE_3_moment__().utc().format(this.time));
        // var userTimezoneOffset = date.getTimezoneOffset() * 60000;
        var alarmTime = new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
        this.localNotifications.schedule({
            id: 1,
            text: 'Notificacion',
            at: alarmTime,
            led: 'FF0000',
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\ImClaudiaF\Desktop\ionic\notifyApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Date</ion-label>\n    <ion-datetime displayFormat="DD/MMM/YYYY HH:mm" [(ngModel)]="time"></ion-datetime>\n  </ion-item>\n\n  <button ion-button (click)="setAlarm()">Guardar alarma</button>\n  <!-- <button ion-button (click)="foundSound()">Sonido</button> -->\n</ion-content>\n'/*ion-inline-end:"C:\Users\ImClaudiaF\Desktop\ionic\notifyApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */] /*,
            private fileChooser: FileChooser*/ !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */] /*,
            private fileChooser: FileChooser*/) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(339);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__["a" /* FileChooser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ImClaudiaF\Desktop\ionic\notifyApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\ImClaudiaF\Desktop\ionic\notifyApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 197,
	"./af.js": 197,
	"./ar": 198,
	"./ar-dz": 199,
	"./ar-dz.js": 199,
	"./ar-kw": 200,
	"./ar-kw.js": 200,
	"./ar-ly": 201,
	"./ar-ly.js": 201,
	"./ar-ma": 202,
	"./ar-ma.js": 202,
	"./ar-sa": 203,
	"./ar-sa.js": 203,
	"./ar-tn": 204,
	"./ar-tn.js": 204,
	"./ar.js": 198,
	"./az": 205,
	"./az.js": 205,
	"./be": 206,
	"./be.js": 206,
	"./bg": 207,
	"./bg.js": 207,
	"./bm": 208,
	"./bm.js": 208,
	"./bn": 209,
	"./bn.js": 209,
	"./bo": 210,
	"./bo.js": 210,
	"./br": 211,
	"./br.js": 211,
	"./bs": 212,
	"./bs.js": 212,
	"./ca": 213,
	"./ca.js": 213,
	"./cs": 214,
	"./cs.js": 214,
	"./cv": 215,
	"./cv.js": 215,
	"./cy": 216,
	"./cy.js": 216,
	"./da": 217,
	"./da.js": 217,
	"./de": 218,
	"./de-at": 219,
	"./de-at.js": 219,
	"./de-ch": 220,
	"./de-ch.js": 220,
	"./de.js": 218,
	"./dv": 221,
	"./dv.js": 221,
	"./el": 222,
	"./el.js": 222,
	"./en-au": 223,
	"./en-au.js": 223,
	"./en-ca": 224,
	"./en-ca.js": 224,
	"./en-gb": 225,
	"./en-gb.js": 225,
	"./en-ie": 226,
	"./en-ie.js": 226,
	"./en-nz": 227,
	"./en-nz.js": 227,
	"./eo": 228,
	"./eo.js": 228,
	"./es": 229,
	"./es-do": 230,
	"./es-do.js": 230,
	"./es-us": 231,
	"./es-us.js": 231,
	"./es.js": 229,
	"./et": 232,
	"./et.js": 232,
	"./eu": 233,
	"./eu.js": 233,
	"./fa": 234,
	"./fa.js": 234,
	"./fi": 235,
	"./fi.js": 235,
	"./fo": 236,
	"./fo.js": 236,
	"./fr": 237,
	"./fr-ca": 238,
	"./fr-ca.js": 238,
	"./fr-ch": 239,
	"./fr-ch.js": 239,
	"./fr.js": 237,
	"./fy": 240,
	"./fy.js": 240,
	"./gd": 241,
	"./gd.js": 241,
	"./gl": 242,
	"./gl.js": 242,
	"./gom-latn": 243,
	"./gom-latn.js": 243,
	"./gu": 244,
	"./gu.js": 244,
	"./he": 245,
	"./he.js": 245,
	"./hi": 246,
	"./hi.js": 246,
	"./hr": 247,
	"./hr.js": 247,
	"./hu": 248,
	"./hu.js": 248,
	"./hy-am": 249,
	"./hy-am.js": 249,
	"./id": 250,
	"./id.js": 250,
	"./is": 251,
	"./is.js": 251,
	"./it": 252,
	"./it.js": 252,
	"./ja": 253,
	"./ja.js": 253,
	"./jv": 254,
	"./jv.js": 254,
	"./ka": 255,
	"./ka.js": 255,
	"./kk": 256,
	"./kk.js": 256,
	"./km": 257,
	"./km.js": 257,
	"./kn": 258,
	"./kn.js": 258,
	"./ko": 259,
	"./ko.js": 259,
	"./ky": 260,
	"./ky.js": 260,
	"./lb": 261,
	"./lb.js": 261,
	"./lo": 262,
	"./lo.js": 262,
	"./lt": 263,
	"./lt.js": 263,
	"./lv": 264,
	"./lv.js": 264,
	"./me": 265,
	"./me.js": 265,
	"./mi": 266,
	"./mi.js": 266,
	"./mk": 267,
	"./mk.js": 267,
	"./ml": 268,
	"./ml.js": 268,
	"./mr": 269,
	"./mr.js": 269,
	"./ms": 270,
	"./ms-my": 271,
	"./ms-my.js": 271,
	"./ms.js": 270,
	"./my": 272,
	"./my.js": 272,
	"./nb": 273,
	"./nb.js": 273,
	"./ne": 274,
	"./ne.js": 274,
	"./nl": 275,
	"./nl-be": 276,
	"./nl-be.js": 276,
	"./nl.js": 275,
	"./nn": 277,
	"./nn.js": 277,
	"./pa-in": 278,
	"./pa-in.js": 278,
	"./pl": 279,
	"./pl.js": 279,
	"./pt": 280,
	"./pt-br": 281,
	"./pt-br.js": 281,
	"./pt.js": 280,
	"./ro": 282,
	"./ro.js": 282,
	"./ru": 283,
	"./ru.js": 283,
	"./sd": 284,
	"./sd.js": 284,
	"./se": 285,
	"./se.js": 285,
	"./si": 286,
	"./si.js": 286,
	"./sk": 287,
	"./sk.js": 287,
	"./sl": 288,
	"./sl.js": 288,
	"./sq": 289,
	"./sq.js": 289,
	"./sr": 290,
	"./sr-cyrl": 291,
	"./sr-cyrl.js": 291,
	"./sr.js": 290,
	"./ss": 292,
	"./ss.js": 292,
	"./sv": 293,
	"./sv.js": 293,
	"./sw": 294,
	"./sw.js": 294,
	"./ta": 295,
	"./ta.js": 295,
	"./te": 296,
	"./te.js": 296,
	"./tet": 297,
	"./tet.js": 297,
	"./th": 298,
	"./th.js": 298,
	"./tl-ph": 299,
	"./tl-ph.js": 299,
	"./tlh": 300,
	"./tlh.js": 300,
	"./tr": 301,
	"./tr.js": 301,
	"./tzl": 302,
	"./tzl.js": 302,
	"./tzm": 303,
	"./tzm-latn": 304,
	"./tzm-latn.js": 304,
	"./tzm.js": 303,
	"./uk": 305,
	"./uk.js": 305,
	"./ur": 306,
	"./ur.js": 306,
	"./uz": 307,
	"./uz-latn": 308,
	"./uz-latn.js": 308,
	"./uz.js": 307,
	"./vi": 309,
	"./vi.js": 309,
	"./x-pseudo": 310,
	"./x-pseudo.js": 310,
	"./yo": 311,
	"./yo.js": 311,
	"./zh-cn": 312,
	"./zh-cn.js": 312,
	"./zh-hk": 313,
	"./zh-hk.js": 313,
	"./zh-tw": 314,
	"./zh-tw.js": 314
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 393;

/***/ })

},[315]);
//# sourceMappingURL=main.js.map