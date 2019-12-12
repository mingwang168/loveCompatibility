(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loveCompatibility.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loveCompatibility.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n\r\n</head>\r\n<style>\r\nh3{\r\n    text-align: center;\r\n    color: rgb(37, 3, 53);\r\n    text-shadow: 1px 1px 2px pink;\r\n}\r\nimg{\r\n    width: 69%;\r\n    height: auto;\r\n    display: block;\r\n    margin: auto;\r\n}\r\n</style>\r\n<body>\r\n    <h3>Zodiac Compatibility Matrix</h3>\r\n    <img src=\"https://astrologyanswers.com/ee-assets/compatibility/images/love-chart.jpg\">\r\n</body>\r\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/match.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/match.html ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>match</title>\r\n</head>\r\n<body>\r\n<main>\r\n    <section >\r\n    <form  #myForm1=\"ngForm\">\r\n    <h4>Input your birthday : (YYYY-MM-DD)</h4><br/>\r\n        <input type=\"text\" value=\"YYYYMMDD\" pattern=\"^((((1[6-9]|[2-9]\\d)\\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\\d|3[01]))|(((1[6-9]|[2-9]\\d)\\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\\d|30))|(((1[6-9]|[2-9]\\d)\\d{2})-0?2-(0?[1-9]|1\\d|2[0-8]))|(((1[6-9]|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$\" required\r\n        [(ngModel)]=\"birth1\" name=\"myBirth1\" #myBirth1=\"ngModel\" (focus)=\"clear1()\">\r\n        <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!myForm1.form.valid\" \r\n        (click)=\"toAge1(birth1)\">submit</button>\r\n        <p *ngIf=\"myBirth1?.errors?.pattern\">\r\n                Enter only the specified date format（YYYY-MM-DD）.</p>\r\n        <p>Your birthday is : {{forAge1 | date: 'fullDate' }}\r\n        <p>Your age is : {{ forAge1| birthToAgePipe}}</p>\r\n        <p>Your zodiac is : {{zodiac1 | birthToZodiacPipe}}</p>\r\n    </form>\r\n    </section>\r\n    <section>\r\n        <form  #myForm2=\"ngForm\">\r\n        <h4>Input your girl/boy friend's birthday : (YYYY-MM-DD)</h4><br/>\r\n            <input type=\"text\" value=\"YYYYMMDD\" pattern=\"^((((1[6-9]|[2-9]\\d)\\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\\d|3[01]))|(((1[6-9]|[2-9]\\d)\\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\\d|30))|(((1[6-9]|[2-9]\\d)\\d{2})-0?2-(0?[1-9]|1\\d|2[0-8]))|(((1[6-9]|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$\" required\r\n            [(ngModel)]=\"birth2\" name=\"myBirth2\" #myBirth2=\"ngModel\" (focus)=\"clear2()\">\r\n            <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!myForm2.form.valid\" \r\n            (click)=\"toAge2(birth2)\">submit</button>\r\n            <p *ngIf=\"myBirth2?.errors?.pattern\">\r\n                    Enter only the specified date format（YYYY-MM-DD）.</p>\r\n            <p>Your girl/boy friend's birthday is : {{forAge2 | date: 'fullDate' }}\r\n            <p>Your girl/boy friend's age is : {{ forAge2| birthToAgePipe}}</p>\r\n            <p>Your girl/boy friend's zodiac is : {{zodiac2 | birthToZodiacPipe}}</p>\r\n            </form>\r\n        </section>\r\n    </main>\r\n    <button type=\"submit\" class=\"btn btn-default match-btn\" (click)=\"toMatch(zodiac1,zodiac2)\">Match</button>\r\n<div class=\"showresult\"><p>Your ZODIAC LOVE COMPATIBILITY is : <span clas=\"result\">{{matchDegree}}</span> </p></div>\r\n</body>\r\n</html>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.birthToAgePipe.ts":
/*!***************************************!*\
  !*** ./src/app/app.birthToAgePipe.ts ***!
  \***************************************/
/*! exports provided: BirthToAgePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirthToAgePipe", function() { return BirthToAgePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BirthToAgePipe = class BirthToAgePipe {
    transform(birhday) {
        var strBirthdayArr = birhday.split("-");
        var birthYear = parseInt(strBirthdayArr[0]);
        var birthMonth = parseInt(strBirthdayArr[1]);
        var birthDay = parseInt(strBirthdayArr[2]);
        /*             var birthYear = parseInt(birhday.substr(0,4));
                    var birthMonth = parseInt(birhday.substr(4,2));
                    var birthDay = parseInt(birhday.substr(6,2)); */
        var d = new Date();
        var nowYear = d.getFullYear();
        var nowMonth = d.getMonth() + 1;
        var nowDay = d.getDate();
        if (nowYear == birthYear) {
            var returnAge = 0; //同年 则为0岁
        }
        else {
            var ageDiff = nowYear - birthYear; //年之差
            if (ageDiff > 0) {
                if (nowMonth == birthMonth) {
                    var dayDiff = nowDay - birthDay; //日之差
                    if (dayDiff < 0) {
                        returnAge = ageDiff - 1;
                    }
                    else {
                        returnAge = ageDiff;
                    }
                }
                else {
                    var monthDiff = nowMonth - birthMonth; //月之差
                    if (monthDiff < 0) {
                        returnAge = ageDiff - 1;
                    }
                    else {
                        returnAge = ageDiff;
                    }
                }
            }
            else {
                returnAge = -1; //返回-1 表示出生日期输入错误 晚于今天
            }
        }
        if (returnAge == -1) {
            return " is not yet born.";
        }
        else {
            return returnAge + ""; //返回周岁年龄
        }
    }
};
BirthToAgePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'birthToAgePipe' })
], BirthToAgePipe);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.builder = "Ming Wang";
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `<h1 style="text-align:center;font-family:'Comic Sans MS', cursive, sans-serif;color:rgb(37, 3, 53);text-shadow: 1px 1px 2px grey;">ZODIAC LOVE COMPATIBILITY</h1>
    <nav style="text-align:center;">
    <a style="font-size:1.3em;" routerLink="/page1" routerLinkActive="active">Matching</a> |
    <a style="font-size:1.3em;" routerLink="/page2" routerLinkActive="active">Zodiac signs</a> |
    <a style="font-size:1.3em;" routerLink="/page3" routerLinkActive="active">Love Compatibility</a>    
    </nav>
    <router-outlet></router-outlet>
    <buildby [name]="builder"></buildby>
  `,
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _buildby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buildby */ "./src/app/buildby.ts");
/* harmony import */ var _page1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page1 */ "./src/app/page1.ts");
/* harmony import */ var _page2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page2 */ "./src/app/page2.ts");
/* harmony import */ var _page3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page3 */ "./src/app/page3.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_birthToAgePipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.birthToAgePipe */ "./src/app/app.birthToAgePipe.ts");
/* harmony import */ var _zodiacPipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zodiacPipe */ "./src/app/zodiacPipe.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _page1__WEBPACK_IMPORTED_MODULE_6__["Page1Component"], _page2__WEBPACK_IMPORTED_MODULE_7__["Page2Component"], _page3__WEBPACK_IMPORTED_MODULE_8__["Page3Component"], _buildby__WEBPACK_IMPORTED_MODULE_5__["BuildBy"], _app_birthToAgePipe__WEBPACK_IMPORTED_MODULE_10__["BirthToAgePipe"], _zodiacPipe__WEBPACK_IMPORTED_MODULE_11__["BirthToZodiacPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_9__["routing"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page1 */ "./src/app/page1.ts");
/* harmony import */ var _page2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page2 */ "./src/app/page2.ts");
/* harmony import */ var _page3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page3 */ "./src/app/page3.ts");





const appRoutes = [
    { path: 'page1', component: _page1__WEBPACK_IMPORTED_MODULE_2__["Page1Component"] },
    { path: 'page2', component: _page2__WEBPACK_IMPORTED_MODULE_3__["Page2Component"] },
    { path: 'page3', component: _page3__WEBPACK_IMPORTED_MODULE_4__["Page3Component"] },
    { path: '', redirectTo: '/page1', pathMatch: 'full' },
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/buildby.ts":
/*!****************************!*\
  !*** ./src/app/buildby.ts ***!
  \****************************/
/*! exports provided: BuildBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildBy", function() { return BuildBy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// Define second directive.
let BuildBy = class BuildBy {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BuildBy.prototype, "name", void 0);
BuildBy = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // Selector uses lower case with hyphens.
        selector: 'buildby',
        template: `<hr/>
    <h3 style="text-align:center;">This app is built by {{name}} . </h3>`,
    })
], BuildBy);



/***/ }),

/***/ "./src/app/dataService.ts":
/*!********************************!*\
  !*** ./src/app/dataService.ts ***!
  \********************************/
/*! exports provided: MyDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDataService", function() { return MyDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// This is the service.
class MyDataService {
    constructor() {
        this.zodiacs = ['♈  Aries', '♉  Taurus', '♊  Gemini', '♋  Cancer', '♌  Leo', '♍  Virgo', '♎  Libra', '♏  Scorpio', '♐  Sagittarius', '♑  Capricorn', '♒  Aquarius', '♓  Pisces'];
    }
    getZodiacs() {
        return this.zodiacs;
    }
}


/***/ }),

/***/ "./src/app/match.css":
/*!***************************!*\
  !*** ./src/app/match.css ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\nmain{\r\nmargin: 10px auto;\r\n    display:flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n    align-content: center;\r\nbackground-color: rgb(245, 205, 211);\r\n}\r\nsection{\r\n    display: block;\r\n    width: 48%;\r\n    border: 2px solid rebeccapurple;\r\n    padding-left: 13px;\r\n    box-shadow: 1px 1px 3px grey;\r\n}\r\nh4{\r\n    margin: 6px;\r\n}\r\nbutton{\r\n    margin:10px;\r\n}\r\n.match-btn{\r\n    font-size: 1.5rem;\r\n    display: block;\r\n    margin: 0 auto;\r\n    color: rgb(48, 8, 49);\r\n    font-weight: bold;\r\n    background-color: rgb(130, 161, 187);\r\n}\r\n.showresult{\r\n    font-size: 1.6rem;\r\n    color: rgb(84, 12, 87);\r\n    text-shadow: 1px 1px 2px black;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0Y2guY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7QUFDQSxpQkFBaUI7SUFDYixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixxQkFBcUI7QUFDekIsb0NBQW9DO0FBQ3BDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCIiwiZmlsZSI6InNyYy9hcHAvbWF0Y2guY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5tYWlue1xyXG5tYXJnaW46IDEwcHggYXV0bztcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMDUsIDIxMSk7XHJcbn1cclxuc2VjdGlvbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlYmVjY2FwdXJwbGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCBncmV5O1xyXG59XHJcbmg0e1xyXG4gICAgbWFyZ2luOiA2cHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbn1cclxuLm1hdGNoLWJ0bntcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGNvbG9yOiByZ2IoNDgsIDgsIDQ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTYxLCAxODcpO1xyXG59XHJcbi5zaG93cmVzdWx0e1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICBjb2xvcjogcmdiKDg0LCAxMiwgODcpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xyXG4gICAgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/page1.ts":
/*!**************************!*\
  !*** ./src/app/page1.ts ***!
  \**************************/
/*! exports provided: Page1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1Component", function() { return Page1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Page1Component = class Page1Component {
    constructor() {
        //    this.forAge1 = this.forAge1;
        this.birth1 = '';
        this.num1 = 0;
        this.num2 = 0;
        this.matchDegree = '';
        this.forAge1 = '';
        this.zodiac1 = '';
        this.birth2 = '';
        this.forAge2 = '';
        this.zodiac2 = '';
        this.zodiacArry = new Array();
        //  this.zodiac1=this.zodiac1;
    }
    toAge1(birth1) {
        this.forAge1 = birth1;
        this.birth1 = birth1;
        this.zodiac1 = birth1;
    }
    toAge2(birth2) {
        this.forAge2 = birth2;
        this.birth2 = birth2;
        this.zodiac2 = birth2;
    }
    clear1() {
        this.birth1 = '';
        this.forAge1 = '';
        this.zodiac1 = '';
    }
    clear2() {
        this.birth2 = '';
        this.forAge2 = '';
        this.zodiac2 = '';
    }
    tozodiac(birth1) {
        var strBirthdayArr = birth1.split("-");
        var birthMonth = strBirthdayArr[1];
        var birthDay = strBirthdayArr[2];
        var birthMonthAndYear = parseInt(birthMonth + birthDay);
        var theZodiac = '';
        if (birthMonthAndYear >= 321 && birthMonthAndYear <= 419) {
            theZodiac = 'Aries';
        }
        else if (birthMonthAndYear >= 420 && birthMonthAndYear <= 520) {
            theZodiac = 'Taurus';
        }
        else if (birthMonthAndYear >= 521 && birthMonthAndYear <= 621) {
            theZodiac = 'Gemini';
        }
        else if (birthMonthAndYear >= 622 && birthMonthAndYear <= 722) {
            theZodiac = 'Cancer';
        }
        else if (birthMonthAndYear >= 723 && birthMonthAndYear <= 822) {
            theZodiac = 'Leo';
        }
        else if (birthMonthAndYear >= 823 && birthMonthAndYear <= 922) {
            theZodiac = 'Virgo';
        }
        else if (birthMonthAndYear >= 923 && birthMonthAndYear <= 1023) {
            theZodiac = 'Libra';
        }
        else if (birthMonthAndYear >= 1024 && birthMonthAndYear <= 1122) {
            theZodiac = 'Scorpio';
        }
        else if (birthMonthAndYear >= 1123 && birthMonthAndYear <= 1221) {
            theZodiac = 'Sagittarius';
        }
        else if (birthMonthAndYear >= 1222 && birthMonthAndYear <= 1231) {
            theZodiac = 'Capricorn';
        }
        else if (birthMonthAndYear >= 101 && birthMonthAndYear <= 119) {
            theZodiac = 'Capricorn';
        }
        else if (birthMonthAndYear >= 120 && birthMonthAndYear <= 218) {
            theZodiac = 'Aquarius';
        }
        else if (birthMonthAndYear >= 219 && birthMonthAndYear <= 320) {
            theZodiac = 'Pisces';
        }
        return theZodiac;
    }
    toMatch(a, b) {
        a = this.tozodiac(a);
        b = this.tozodiac(b);
        this.zodiacArry = [[1, 1, 1, 3, 2, 3, 1, 1, 1, 3, 3, 2],
            [1, 1, 1, 2, 3, 3, 1, 1, 2, 2, 2, 2],
            [1, 1, 1, 3, 3, 3, 1, 1, 1, 2, 2, 2],
            [3, 2, 3, 1, 1, 1, 3, 2, 3, 1, 1, 1],
            [3, 2, 3, 1, 1, 1, 3, 3, 2, 1, 1, 3],
            [3, 2, 3, 1, 1, 1, 3, 2, 3, 1, 1, 1],
            [1, 1, 2, 3, 2, 2, 1, 1, 1, 3, 3, 3],
            [2, 1, 1, 2, 3, 3, 1, 1, 1, 3, 3, 2],
            [1, 1, 1, 3, 3, 3, 1, 1, 1, 3, 2, 2],
            [3, 2, 2, 1, 1, 1, 3, 3, 3, 1, 1, 1],
            [2, 2, 3, 1, 1, 1, 3, 3, 3, 1, 1, 1],
            [2, 2, 2, 1, 2, 1, 3, 3, 3, 1, 1, 1]];
        switch (a) {
            case "Aries":
                this.num1 = 0;
                break;
            case "Taurus":
                this.num1 = 1;
                break;
            case "Gemini":
                this.num1 = 2;
                break;
            case "Cancer":
                this.num1 = 3;
                break;
            case "Leo":
                this.num1 = 4;
                break;
            case "Virgo":
                this.num1 = 5;
                break;
            case "Libra":
                this.num1 = 6;
                break;
            case "Scorpio":
                this.num1 = 7;
                break;
            case "Sagittarius":
                this.num1 = 8;
                break;
            case "Capricorn":
                this.num1 = 9;
                break;
            case "Aquarius":
                this.num1 = 10;
                break;
            case "Pisces":
                this.num1 = 11;
                break;
        }
        switch (b) {
            case "Aries":
                this.num2 = 0;
                break;
            case "Taurus":
                this.num2 = 1;
                break;
            case "Gemini":
                this.num2 = 2;
                break;
            case "Cancer":
                this.num2 = 3;
                break;
            case "Leo":
                this.num1 = 4;
                break;
            case "Virgo":
                this.num2 = 5;
                break;
            case "Libra":
                this.num2 = 6;
                break;
            case "Scorpio":
                this.num2 = 7;
                break;
            case "Sagittarius":
                this.num2 = 8;
                break;
            case "Capricorn":
                this.num2 = 9;
                break;
            case "Aquarius":
                this.num2 = 10;
                break;
            case "Pisces":
                this.num2 = 11;
                break;
        }
        if (this.zodiacArry[this.num1][this.num2] == 1) {
            this.matchDegree = "Great Match!";
        }
        else if (this.zodiacArry[this.num1][this.num2] == 2) {
            this.matchDegree = "Favorable Match";
        }
        else if (this.zodiacArry[this.num1][this.num2] == 3) {
            this.matchDegree = "Not Favorable";
        }
        ;
        console.log(a);
        console.log(b);
        console.log(this.num1);
        console.log(this.num2);
        console.log(this.zodiacArry[this.num1][this.num2]);
        console.log(this.matchDegree);
    }
};
Page1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./match.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/match.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./match.css */ "./src/app/match.css")).default]
    })
], Page1Component);



/***/ }),

/***/ "./src/app/page2.ts":
/*!**************************!*\
  !*** ./src/app/page2.ts ***!
  \**************************/
/*! exports provided: Page2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Component", function() { return Page2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataService */ "./src/app/dataService.ts");



let Page2Component = class Page2Component {
    constructor(myDataService) {
        // Use service to call getNames() method.
        this.zodiacs = myDataService.getZodiacs();
    }
};
Page2Component.ctorParameters = () => [
    { type: _dataService__WEBPACK_IMPORTED_MODULE_2__["MyDataService"] }
];
Page2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
    <ul style="padding:0 0 0 45%;" *ngFor="let item of zodiacs; let i = index">
  <li style="list-style:none; line-height:0.6em; color: rgb(37, 3, 53);text-shadow: 1px 1px 2px pink;">{{i+1}}.  {{item}}</li>
</ul>
`,
        providers: [_dataService__WEBPACK_IMPORTED_MODULE_2__["MyDataService"]]
    })
], Page2Component);



/***/ }),

/***/ "./src/app/page3.ts":
/*!**************************!*\
  !*** ./src/app/page3.ts ***!
  \**************************/
/*! exports provided: Page3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page3Component", function() { return Page3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Page3Component = class Page3Component {
};
Page3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loveCompatibility.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loveCompatibility.html")).default,
    })
], Page3Component);



/***/ }),

/***/ "./src/app/zodiacPipe.ts":
/*!*******************************!*\
  !*** ./src/app/zodiacPipe.ts ***!
  \*******************************/
/*! exports provided: BirthToZodiacPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirthToZodiacPipe", function() { return BirthToZodiacPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BirthToZodiacPipe = class BirthToZodiacPipe {
    transform(birth1) {
        var strBirthdayArr = birth1.split("-");
        var birthMonth = strBirthdayArr[1];
        var birthDay = strBirthdayArr[2];
        var birthMonthAndYear = parseInt(birthMonth + birthDay);
        var theZodiac = '';
        if (birthMonthAndYear >= 321 && birthMonthAndYear <= 419) {
            theZodiac = 'Aries';
        }
        else if (birthMonthAndYear >= 420 && birthMonthAndYear <= 520) {
            theZodiac = 'Taurus';
        }
        else if (birthMonthAndYear >= 521 && birthMonthAndYear <= 621) {
            theZodiac = 'Gemini';
        }
        else if (birthMonthAndYear >= 622 && birthMonthAndYear <= 722) {
            theZodiac = 'Cancer';
        }
        else if (birthMonthAndYear >= 723 && birthMonthAndYear <= 822) {
            theZodiac = 'Leo';
        }
        else if (birthMonthAndYear >= 823 && birthMonthAndYear <= 922) {
            theZodiac = 'Virgo';
        }
        else if (birthMonthAndYear >= 923 && birthMonthAndYear <= 1023) {
            theZodiac = 'Libra';
        }
        else if (birthMonthAndYear >= 1024 && birthMonthAndYear <= 1122) {
            theZodiac = 'Scorpio';
        }
        else if (birthMonthAndYear >= 1123 && birthMonthAndYear <= 1221) {
            theZodiac = 'Sagittarius';
        }
        else if (birthMonthAndYear >= 1222 && birthMonthAndYear <= 1231) {
            theZodiac = 'Capricorn';
        }
        else if (birthMonthAndYear >= 101 && birthMonthAndYear <= 119) {
            theZodiac = 'Capricorn';
        }
        else if (birthMonthAndYear >= 120 && birthMonthAndYear <= 218) {
            theZodiac = 'Aquarius';
        }
        else if (birthMonthAndYear >= 219 && birthMonthAndYear <= 320) {
            theZodiac = 'Pisces';
        }
        return theZodiac;
    }
};
BirthToZodiacPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'birthToZodiacPipe' })
], BirthToZodiacPipe);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Minghui Wang\Desktop\ssd\Angular\students-Day2 2\assignment2\ass2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map