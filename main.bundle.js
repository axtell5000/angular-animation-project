webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_3__users_users_component__["a" /* UsersComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  margin-top: 2rem;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <ul class=\"nav nav-pills\">\n        <li role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"><a routerLink=\"/\">Projects</a></li>\n        <li role=\"presentation\" routerLinkActive=\"active\"><a routerLink=\"/users\">Users</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row\" style=\"overflow: hidden\">\n    <div class=\"col-xs-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__projects_projects_service__ = __webpack_require__("../../../../../src/app/projects/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__new_project_new_project_component__ = __webpack_require__("../../../../../src/app/new-project/new-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__project_project_component__["a" /* ProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_8__new_project_new_project_component__["a" /* NewProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_9__users_users_component__["a" /* UsersComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__projects_projects_service__["a" /* ProjectsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/new-project/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buttonStateTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formStateTrigger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

var buttonStateTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('buttonState', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('valid', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
        backgroundColor: 'lightgreen',
        borderColor: 'green',
        color: 'green'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('invalid', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
        backgroundColor: 'red',
        borderColor: 'darkred',
        color: 'white'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('invalid => valid', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
                transform: 'scale(1.10)'
            })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(200, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
                backgroundColor: 'lightgreen',
                color: 'green'
            }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(200, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            transform: 'scale(1)'
        }))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('valid => invalid', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
                transform: 'scale(1.10)'
            })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(200, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
                backgroundColor: 'red',
                color: 'green'
            }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(200, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            transform: 'scale(1)'
        }))
    ])
]);
var formStateTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('formState', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('* => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])('input.ng-invalid:focus', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(200, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
                backgroundColor: 'red'
            })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(200)
        ], { optional: true })
    ])
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ "../../../../../src/app/new-project/new-project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: block;\r\n  padding-bottom: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-project/new-project.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form (ngSubmit)=\"onCreateProject()\" #f=\"ngForm\" [@formState]=\"f.value\">\n  <div class=\"form-group\">\n    <label for=\"name\" class=\"control-label\">Name</label>\n    <input\n      type=\"text\"\n      id=\"name\"\n      ngModel\n      name=\"name\"\n      class=\"form-control\"\n      required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"description\">Description</label>\n    <input\n      type=\"text\"\n      id=\"description\"\n      ngModel\n      name=\"description\"\n      class=\"form-control\"\n      required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"status\">Status</label>\n    <select\n      name=\"status\"\n      [ngModel]=\"'active'\"\n      id=\"status\"\n      class=\"form-control\">\n      <option\n        *ngFor=\"let status of availableStatus\"\n        style=\"text-transform: capitalize\"\n        [value]=\"status\">{{ status }}</option>\n    </select>\n  </div>\n  <button\n    type=\"submit\"\n    [disabled]=\"!f.valid\"\n    [@buttonState]=\"f.valid ? 'valid' : 'invalid'\"\n    class=\"btn btn-success\">Create Project</button>\n  <button\n    type=\"button\"\n    class=\"btn btn-danger\"\n    (click)=\"onCancel()\">Cancel</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/new-project/new-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__("../../../../../src/app/new-project/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewProjectComponent = (function () {
    function NewProjectComponent() {
        this.creationCancelled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.projectCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.availableStatus = [
            'active',
            'inactive',
            'critical'
        ];
    }
    NewProjectComponent.prototype.ngOnInit = function () {
    };
    NewProjectComponent.prototype.onCreateProject = function () {
        this.projectCreated.emit({ name: this.form.value.name, description: this.form.value.description, status: this.form.value.status });
    };
    NewProjectComponent.prototype.onCancel = function () {
        this.form.reset();
        this.creationCancelled.emit();
    };
    return NewProjectComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], NewProjectComponent.prototype, "creationCancelled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], NewProjectComponent.prototype, "projectCreated", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], NewProjectComponent.prototype, "form", void 0);
NewProjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-new-project',
        template: __webpack_require__("../../../../../src/app/new-project/new-project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-project/new-project.component.css")],
        animations: [
            __WEBPACK_IMPORTED_MODULE_2__animations__["a" /* buttonStateTrigger */],
            __WEBPACK_IMPORTED_MODULE_2__animations__["b" /* formStateTrigger */]
        ]
    }),
    __metadata("design:paramtypes", [])
], NewProjectComponent);

var _a;
//# sourceMappingURL=new-project.component.js.map

/***/ }),

/***/ "../../../../../src/app/project/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*When using :host like this, its good practice to set the display to block, by default its inline*/\r\n:host {\r\n  border-radius: 3px;\r\n  box-shadow: 3px 3px 2px #ccc;\r\n  display: block;\r\n  margin: 20px 0;\r\n  /*padding: 20px;*/\r\n  /*transition: border-color 0.5s ease-out;*/\r\n}\r\n\r\n/*:host(.marked) {*/\r\n  /*padding: 19px;*/\r\n/*}*/\r\n\r\n:host(.inactive) {\r\n  color: #ccc;\r\n}\r\n\r\n.form-control {\r\n  display: inline-block;\r\n  width: 50%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\n  {{ project.name }}\n  <!-- Show different usages of ngClass and ngStyle\"-->\n  <span\n    class=\"label\"\n    [ngClass]=\"getPrjStatusClass()\">{{ project.status }}</span>\n</h3>\n<hr>\n<p>{{ project.description }}</p>\n<select #prjStatus class=\"form-control\">\n  <option value=\"active\" [selected]=\"project.status === 'active'\">Active</option>\n  <option value=\"inactive\" [selected]=\"project.status === 'inactive'\">Inactive</option>\n  <option value=\"critical\" [selected]=\"project.status === 'critical'\">Critical</option>\n</select>\n<button class=\"btn btn-primary\" (click)=\"onUpdateStatus(prjStatus.value)\">Update Status</button>\n<button class=\"btn btn-danger\" (click)=\"onDelete()\">Delete Project</button>\n"

/***/ }),

/***/ "../../../../../src/app/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projects_project_model__ = __webpack_require__("../../../../../src/app/projects/project.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projects_project_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__projects_project_model__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectComponent = (function () {
    function ProjectComponent() {
        this.statusUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.projectDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent.prototype.onUpdateStatus = function (newStatus) {
        this.statusUpdated.emit(newStatus);
    };
    ProjectComponent.prototype.onDelete = function () {
        this.projectDeleted.emit();
    };
    ProjectComponent.prototype.getPrjStatusClass = function () {
        return {
            'label-success': this.project.status === 'active',
            'label-default': this.project.status === 'inactive',
            'label-danger': this.project.status === 'critical'
        };
    };
    return ProjectComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__projects_project_model__["Project"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__projects_project_model__["Project"]) === "function" && _a || Object)
], ProjectComponent.prototype, "project", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ProjectComponent.prototype, "statusUpdated", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ProjectComponent.prototype, "projectDeleted", void 0);
ProjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-project',
        template: __webpack_require__("../../../../../src/app/project/project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project/project.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjectComponent);

var _a;
//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return markedTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return itemStateTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return slideStateTrigger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

var markedTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('markedState', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('default', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
        border: '1px solid black',
        backgroundColor: 'transparent',
        padding: '20px'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('marked', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
        border: '2px solid blue',
        backgroundColor: '#caeff9',
        padding: '19px'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('default => marked', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            border: '2px solid black',
            padding: '19px',
            transform: 'scale(1.0)'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            transform: 'scale(1.05)'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(300)
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('marked => default', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            border: '1px solid blue',
            padding: '20px'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out')
    ])
]);
var itemStateTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('itemState', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
                opacity: 0,
                transform: 'translateX(-100%)',
                offset: 0
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
                opacity: 1,
                transform: 'translateX(15%)',
                offset: 0.4
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
                opacity: 1,
                transform: 'translateX(0)',
                offset: 1
            })
        ]))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':leave', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
                opacity: 1,
                transform: 'translateX(0)',
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
                transform: 'translateX(-15%)',
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
                opacity: 0,
                transform: 'translateX(100%)',
            })
        ]))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('slidUp => slidDown', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            transform: 'translateY(-100%)'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            transform: 'translateY(0)'
        }))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('slidDown => slidUp', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            transform: 'translateY(0)'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            transform: 'translateY(-100%)'
        }))
    ])
]);
var slideStateTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('slideState', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            transform: 'translateY(-100%)'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            transform: 'translateY(0)'
        }))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':leave', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            transform: 'translateY(0)'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            transform: 'translateY(-100%)'
        }))
    ])
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ "../../../../../src/app/projects/project.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=project.model.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: block;;\r\n}\r\n\r\n.marked {\r\n  border: 2px solid blue;\r\n  -webkit-animation: marked 0.5s ease-out forwards;\r\n          animation: marked 0.5s ease-out forwards;\r\n}\r\n\r\n@-webkit-keyframes marked {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n}\r\n\r\n@keyframes marked {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n}\r\n\r\n.inactive {\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.loading-bar {\r\n  border: 1px solid black;\r\n  box-sizing: content-box;\r\n  height: 20px;\r\n  width: 200px;\r\n  margin: auto;\r\n}\r\n\r\n.loading-bar-element {\r\n  background-color: deepskyblue;\r\n  height: 20px;\r\n  width: 0;\r\n  -webkit-animation: loading 1s ease-out infinite;\r\n          animation: loading 1s ease-out infinite;\r\n}\r\n\r\n@-webkit-keyframes loading {\r\n  0% {\r\n    width: 0;\r\n  }\r\n\r\n  100% {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@keyframes loading {\r\n  0% {\r\n    width: 0;\r\n  }\r\n\r\n  100% {\r\n    width: 100%;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h3>My Projects</h3>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <button\n      class=\"btn btn-default\"\n      *ngIf=\"!createNew\"\n      (click)=\"createNew = true\">Create new Project</button>\n    <button\n      class=\"btn btn-danger\"\n      *ngIf=\"createNew\"\n      (click)=\"createNew = false\">Cancel</button>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\" style=\"overflow: hidden\">\n    <app-new-project\n      *ngIf=\"createNew\"\n      (projectCreated)=\"onProjectCreated($event)\"\n      @slideState\n      (creationCancelled)=\"createNew = false\"></app-new-project>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div\n      class=\"loading-bar\"\n      *ngIf=\"!projects\">\n      <div\n        class=\"loading-bar-element\"\n        *ngIf=\"progress != 'finished'\"></div>\n    </div>\n    <app-project\n      *ngFor=\"let prj of displayedProjects; let i = index\"\n      [project]=\"prj\"\n      [@markedState]=\"markedPrjIndex === i ? 'marked' : 'default'\"\n      [@itemState]=\"createNew ? 'slidDown': 'slidUp'\"\n      (@itemState.done)=\"onItemAnimated($event, i)\"\n      [ngClass]=\"{inactive: prj.status === 'inactive'}\"\n      (statusUpdated)=\"onStatusUpdated($event, i)\"\n      (projectDeleted)=\"onProjectDeleted(i)\"\n      (click)=\"markedPrjIndex = i\"></app-project>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projects_service__ = __webpack_require__("../../../../../src/app/projects/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__("../../../../../src/app/projects/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_route_animations__ = __webpack_require__("../../../../../src/app/shared/route-animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsComponent = (function () {
    function ProjectsComponent(prjService) {
        this.prjService = prjService;
        // @HostBinding('@routeFadeState') routeAnimation = true;
        this.routeAnimation = true;
        this.displayedProjects = [];
        this.markedPrjIndex = 0;
        this.progress = 'progressing';
        this.createNew = false;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prjService.loadProjects()
            .subscribe(function (prj) {
            _this.progress = 'finished';
            _this.projects = prj;
            if (_this.projects.length >= 1) {
                _this.displayedProjects.push(_this.projects[0]);
            }
        });
    };
    ProjectsComponent.prototype.onStatusUpdated = function (newStatus, id) {
        this.projects[id].status = newStatus;
    };
    ProjectsComponent.prototype.onProjectDeleted = function (index) {
        this.projects.splice(index, 1);
    };
    ProjectsComponent.prototype.onProjectCreated = function (project) {
        var _this = this;
        this.createNew = false;
        setTimeout(function () {
            _this.projects.unshift(project);
        }, 300);
    };
    ProjectsComponent.prototype.onItemAnimated = function (animationEvent, lastPrjId) {
        if (animationEvent.fromState != 'void') {
            return;
        }
        if (this.projects.length > lastPrjId + 1) {
            this.displayedProjects.push(this.projects[lastPrjId + 1]);
        }
        else {
            this.projects = this.displayedProjects;
        }
    };
    return ProjectsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('@routeSlideState'),
    __metadata("design:type", Object)
], ProjectsComponent.prototype, "routeAnimation", void 0);
ProjectsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")],
        animations: [
            __WEBPACK_IMPORTED_MODULE_2__animations__["b" /* markedTrigger */],
            __WEBPACK_IMPORTED_MODULE_2__animations__["a" /* itemStateTrigger */],
            __WEBPACK_IMPORTED_MODULE_2__animations__["c" /* slideStateTrigger */],
            __WEBPACK_IMPORTED_MODULE_3__shared_route_animations__["a" /* routeFadeStateTrigger */],
            __WEBPACK_IMPORTED_MODULE_3__shared_route_animations__["b" /* routeSlideStateTrigger */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__projects_service__["a" /* ProjectsService */]) === "function" && _a || Object])
], ProjectsComponent);

var _a;
//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");

var ProjectsService = (function () {
    function ProjectsService() {
        this.projects = [
            { name: 'Learn Angular Styles', description: 'Practice hard to understand how you may style components and update styles dynamically', status: 'active' },
            { name: 'Learn Angular Animations', description: 'Learn how Angular helps with animating elements on your page', status: 'active' },
            { name: 'Understanding Angular Basics', description: 'Understand what Angular is, how it works and how and when you might use it', status: 'inactive' },
            { name: 'Learn JavaScript, HTML and CSS', description: 'Absolutely required to dive deep into Angular and all its features', status: 'critical' },
        ];
    }
    ProjectsService.prototype.loadProjects = function () {
        var _this = this;
        var prjLoader = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            setTimeout(function () {
                observer.next(_this.projects);
            }, 2000);
        });
        return prjLoader;
    };
    return ProjectsService;
}());

//# sourceMappingURL=projects.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/route-animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routeFadeStateTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routeSlideStateTrigger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

var routeFadeStateTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('routeFadeState', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            opacity: 0
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(300),
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(300, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
        opacity: 0
    })))
]);
var routeSlideStateTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('routeSlideState', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            transform: 'translateY(-100%)',
            opacity: 0
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(300)
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(300, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
        transform: 'translateY(100%)',
        opacity: 0
    })))
]);
//# sourceMappingURL=route-animations.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Manage your Users</h3>\n<ul\n  class=\"list-group\">\n  <li class=\"list-group-item\">Max</li>\n  <li class=\"list-group-item\">Anna</li>\n  <li class=\"list-group-item\">Chris</li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_route_animations__ = __webpack_require__("../../../../../src/app/shared/route-animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = (function () {
    function UsersComponent() {
        // @HostBinding('@routeFadeState') routeAnimation = true;
        this.routeAnimation = true;
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    return UsersComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('@routeSlideState'),
    __metadata("design:type", Object)
], UsersComponent.prototype, "routeAnimation", void 0);
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/users.component.css")],
        animations: [
            __WEBPACK_IMPORTED_MODULE_1__shared_route_animations__["a" /* routeFadeStateTrigger */],
            __WEBPACK_IMPORTED_MODULE_1__shared_route_animations__["b" /* routeSlideStateTrigger */]
        ]
    }),
    __metadata("design:paramtypes", [])
], UsersComponent);

//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map