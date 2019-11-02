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

/***/ "./src/app/addproject/addproject-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/addproject/addproject-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AddProjectRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectRoutingModule", function() { return AddProjectRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addproject_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addproject.component */ "./src/app/addproject/addproject.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddProjectRoutingModule = /** @class */ (function () {
    function AddProjectRoutingModule() {
    }
    AddProjectRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'addproject', component: _addproject_component__WEBPACK_IMPORTED_MODULE_2__["AddprojectComponent"] }
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AddProjectRoutingModule);
    return AddProjectRoutingModule;
}());



/***/ }),

/***/ "./src/app/addproject/addproject.component.css":
/*!*****************************************************!*\
  !*** ./src/app/addproject/addproject.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/addproject/addproject.component.html":
/*!******************************************************!*\
  !*** ./src/app/addproject/addproject.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-3 p-3 bg-white rounded box-shadow\">\n    <div class=\"col-xs-12 col-sm-2 col-md-2\"></div>\n    <div class=\"col-xs-12 col-sm-8 col-md-8\">\n      <form #addprojectForm=\"ngForm\" method=\"post\" (ngSubmit)=\"addproject()\" novalidate >\n        <div class=\"form-group row\">\n          <label for=\"projectName\" class=\"col-sm-2 col-form-label\">Project</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"projectName\" maxlength=\"50\" required name=\"projectName\" placeholder=\"Enter the Project Name\">\n            </div>\n        </div>\n        <div class=\"form-group row\">\n          <input type=\"checkbox\" class=\"col-sm-5 col-form-label\"/>\n          <label for=\"setdate\" class=\"pl-0\"> Set Start and End Date </label>                \n          <div class=\"form-group col-xs-12 col-sm-3 col-md-3\">\n              <label for=\"startDate\">Start Date</label>\n              <div class=\"input-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"dd/mm/yyyy\" id=\"startDate\" [readonly]=\"true\"\n                          name=\"startDate\" [(ngModel)]=\"task.startDate\" ngbDatepicker #startDate=\"ngbDatepicker\" (dateSelect)=\"onDateSelectPicker($event,'start')\"/>\n                  <div class=\"input-group-append\">\n                      <button class=\"btn btn-outline-secondary fa fa-calendar\" (click)=\"startDate.toggle()\" type=\"button\"></button>\n                  </div>\n              </div>\n          </div>\n          <div class=\"form-group col-xs-12 col-sm-3 col-md-3\">\n              <label for=\"endDate\">End Date</label>\n              <div class=\"input-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"dd/mm/yyyy\" id=\"endDate\" [readonly]=\"true\"\n                          name=\"endDate\" [(ngModel)]=\"task.endDate\" ngbDatepicker #endDate=\"ngbDatepicker\" (dateSelect)=\"onDateSelectPicker($event,'end')\"/>\n                  <div class=\"input-group-append\">\n                      <button class=\"btn btn-outline-secondary fa fa-calendar\" (click)=\"endDate.toggle()\" type=\"button\"></button>\n                  </div>\n              </div>\n          </div>\n        </div>\n  \n        <div class=\"form-group row\">\n            <label for=\"priority\" class=\"col-sm-2 col-form-label\">Priority</label>\n            <div class=\"col-sm-9\">\n                <div class=\"pt-2\">\n                        <input type=\"range\" min=\"1\" max=\"30\" name=\"priority\" #priority=\"ngModel\" [(ngModel)]=\"task.priority\" class=\"slider\" id=\"priority\">\n                </div>\n            </div>\n            <div class=\"col-sm-1\">\n                <div class=\"pt-2\">\n                    {{task.priority}}\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"projectmanager\" class=\"col-sm-2 col-form-label\">Manager</label>\n            <div class=\"col-sm-10\">\n                <input id=\"projectmanager\" type=\"text\" class=\"w-75 form-control\" name=\"projectmanagerId\" [ngModel]=\"task.parentTaskName\"\n                placeholder=\"Select a Manager\"/>\n                <button type=\"submit\" class=\"btn btn-success mx-3 mt-2\" data-toggle=\"modal\" \n                (click)=\"openmodal()\" data-target=\"#searchmodal\">Search</button>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <button type=\"submit\" class=\"btn btn-success mx-3\">Add Project</button>\n            <button type=\"submit\" class=\"btn btn-success mx-3\">Reset</button>\n        </div>\n  \n        <div class=\"border-bottom border-dark\"></div>\n  \n        <div class=\"modal fade\" role=\"dialog\" id=\"searchmodal\" tabindex=\"-1\">\n            <div class=\"modal-dialog\">\n              <div class=\"modal-content\">\n                <!-- Modal Header -->\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\">{{modalHeading}}</h4>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <!-- Modal body -->\n                <div class=\"modal-body\">\n                  <h4>{{modalBody}}</h4>\n                  <ul>\n                    <li *ngFor=\"let user of users\">\n                        <span class=\"badge\">{{user.name}}</span>\n                    </li>\n                  </ul>                \n                </div>\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"flow === 'addtask'\" data-dismiss=\"modal\" (click)=resetButton()>Back To Add Task</button>\n                  <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=viewTaskScreen()>Navigate to View Task</button>\n                </div>\n              </div>\n            </div>\n          </div>\n      </form>\n    </div>\n</div>\n\n<div class=\"row my-3 p-3 bg-white rounded box-shadow\">\n    <div class=\"col-xs-12 col-sm-2 col-md-2\"></div>\n    <div class=\"col-md-12\">\n        <form #viewprojectForm=\"ngForm\" method=\"get\" novalidate >\n            <div class=\"form-group row\">\n                <input type=\"text\" class=\"form-control\" id=\"projectName\" maxlength=\"50\" name=\"projectName\" \n                    #projectName=\"ngModel\" [(ngModel)]=\"task.taskName\" placeholder=\"Search...\">\n            </div>\n\n            <div class=\"form-group row\">\n                <label for=\"sortby\" class=\"col-sm-2 col-form-label\">Sort by:</label>\n                <button type=\"submit\" class=\"btn mx-3\" >Start date</button>\n                <button type=\"submit\" class=\"btn mx-3\" >End date</button>\n                <button type=\"submit\" class=\"btn mx-3\" >Priority</button>\n                <button type=\"submit\" class=\"btn mx-3\" >Completed</button>\n            </div>\n\n            <div>\n                <div class=\"row my-3 p-3 bg-black rounded box-shadow\">\n                    <label for=\"Project\" class=\"col-sm-2 col-form-label\">Project:</label>\n                    <label for=\"No of tasks\" class=\"col-sm-2 col-form-label\">No of tasks:</label>\n                    <label for=\"Completed\" class=\"col-sm-2 col-form-label\">Completed:</label>\n                    <br/>\n                    <br/>\n                    <label for=\"Start date\" class=\"col-sm-2 col-form-label\">Start date:</label>\n                    <label for=\"End date\" class=\"col-sm-2 col-form-label\">End date:</label>\n                    <label for=\"Priority\" class=\"col-sm-2 col-form-label\">Priority:</label>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/addproject/addproject.component.ts":
/*!****************************************************!*\
  !*** ./src/app/addproject/addproject.component.ts ***!
  \****************************************************/
/*! exports provided: AddprojectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddprojectComponent", function() { return AddprojectComponent; });
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

var AddprojectComponent = /** @class */ (function () {
    function AddprojectComponent() {
        this.modalHeading = '';
        this.modalBody = '';
        this.task = {};
        this.users = [];
        //this.modalHeading = "Users/managers";
        //this.modalBody = "list will be update soon";  
    }
    AddprojectComponent.prototype.ngOnInit = function () {
    };
    AddprojectComponent.prototype.openmodal = function () {
        this.modalHeading = "Users/managers";
        this.modalBody = "Users/managers list";
        this.users = [{
                id: 1,
                name: "john"
            },
            {
                id: 2,
                name: "matt"
            },
            {
                id: 3,
                name: "jessy"
            }];
    };
    ;
    // jquery("#searchmodal").on("hidden.bs.modal", function(e){
    //   var value = this.jquery("#myPopupInput").val();
    //   this.jquery("#myMainPageInput").val(value);
    // });
    AddprojectComponent.prototype.onDateSelectPicker = function (date, field) {
        if (field === 'start') {
            //this.task.startDate = this.convertDateJsonToString(this.task.startDate);
            setTimeout(function () {
                //jQuery("#startDate").val(this.task.startDate);
            }, 50);
        }
        else if (field === 'end') {
            //this.task.endDate = this.convertDateJsonToString(this.task.endDate);
            setTimeout(function () {
                //jQuery("#endDate").val(this.task.endDate);
            }, 50);
        }
    };
    AddprojectComponent.prototype.convertDateJsonToString = function (json) {
        if (json !== undefined && json !== null) {
            return json.day + '/' + json.month + '/' + json.year;
        }
    };
    AddprojectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addproject',
            template: __webpack_require__(/*! ./addproject.component.html */ "./src/app/addproject/addproject.component.html"),
            styles: [__webpack_require__(/*! ./addproject.component.css */ "./src/app/addproject/addproject.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddprojectComponent);
    return AddprojectComponent;
}());



/***/ }),

/***/ "./src/app/addproject/addproject.module.ts":
/*!*************************************************!*\
  !*** ./src/app/addproject/addproject.module.ts ***!
  \*************************************************/
/*! exports provided: AddProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectModule", function() { return AddProjectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service */ "./src/app/service/index.ts");
/* harmony import */ var _addproject_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addproject.component */ "./src/app/addproject/addproject.component.ts");
/* harmony import */ var _addproject_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addproject-routing.module */ "./src/app/addproject/addproject-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
var AddProjectModule = /** @class */ (function () {
    function AddProjectModule() {
    }
    AddProjectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_addproject_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddProjectRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeaheadModule"].forRoot()],
            declarations: [_addproject_component__WEBPACK_IMPORTED_MODULE_3__["AddprojectComponent"]],
            exports: [_addproject_component__WEBPACK_IMPORTED_MODULE_3__["AddprojectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
            providers: [_service__WEBPACK_IMPORTED_MODULE_2__["appService"]]
        })
    ], AddProjectModule);
    return AddProjectModule;
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([])
            ],
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

module.exports = ".d-flex .active-nav{\r\n  color: #17a2b8!important;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow flex-nowrap justify-content-between align-items-center\">\r\n  <div class=\"col-4 pt-1\"></div>\r\n  <div class=\"col-4 text-center\">\r\n    <h3 class=\"my-0 mr-md-auto text-secondary\">Task Manager</h3>\r\n  </div>\r\n  <div class=\"col-4 pt-1\"></div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n\r\n  <div class=\"nav-scroller py-1 mb-2\">\r\n    <nav class=\"nav d-flex ml-auto text-center\"> \r\n\t\t\t\t<div class=\"col-2 pt-1\"></div>\r\n\t\t\t\t<div class=\"col-8 text-center\">\r\n            <a class=\"h5 p-2 text-center text-muted navig active-nav\" id=\"add-project\" href=\"javascript:void(0);\" (click)=addProject()>Add Project</a>\r\n\t\t\t\t\t\t<a class=\"h5 p-2 text-center text-muted navig active-nav\" id=\"add-task\" href=\"javascript:void(0);\" (click)=\"addTask()\">Add Task</a>\r\n\t\t\t\t\t\t<a class=\"h5 p-2 text-center text-muted navig active-nav\" id=\"add-user\" href=\"javascript:void(0);\" (click)=\"addUser()\">Add User</a>\r\n\t\t\t\t\t\t<a class=\"h5 p-2 text-center text-muted navig\" id=\"view-task\" href=\"javascript:void(0);\" (click)=viewTask()>View Task</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-2 pt-1\"></div>\r\n    </nav>\r\n  </div>\r\n\r\n</div>\r\n\r\n<main role=\"main\" class=\"container\">\r\n    <router-outlet (activate)=\"onActivate($event, outlet)\" #outlet></router-outlet>\r\n</main>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "./src/app/service/index.ts");
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
    function AppComponent(router, activatedRoute, appService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.appService = appService;
    }
    AppComponent.prototype.onActivate = function (e, outlet) {
        window.scrollTo(0, 0);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.appService.updatetask = null;
    };
    AppComponent.prototype.addTask = function () {
        this.appService.updatetask = null;
        jQuery(".navig").removeClass('active-nav');
        jQuery("#add-task").addClass('active-nav');
        this.router.navigate(['/addtask']);
    };
    AppComponent.prototype.addUser = function () {
        this.router.navigate(['/adduser']);
    };
    AppComponent.prototype.viewTask = function () {
        this.appService.updatetask = null;
        jQuery(".navig").removeClass('active-nav');
        jQuery("#view-task").addClass('active-nav');
        this.router.navigate(['/viewtask']);
    };
    AppComponent.prototype.addProject = function () {
        this.appService.updatetask = null;
        jQuery(".navig").removeClass('active-nav');
        jQuery("#add-project").addClass('active-nav');
        this.router.navigate(['/addproject']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service__WEBPACK_IMPORTED_MODULE_2__["appService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MyOptions, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOptions", function() { return MyOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _updatetask_updatetask_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updatetask/updatetask.module */ "./src/app/updatetask/updatetask.module.ts");
/* harmony import */ var _viewtasklist_viewtask_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewtasklist/viewtask.module */ "./src/app/viewtasklist/viewtask.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _service_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/index */ "./src/app/service/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _commonutils_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./commonutils.module */ "./src/app/commonutils.module.ts");
/* harmony import */ var _userlist_user_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./userlist/user.module */ "./src/app/userlist/user.module.ts");
/* harmony import */ var _addproject_addproject_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./addproject/addproject.module */ "./src/app/addproject/addproject.module.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var MyOptions = /** @class */ (function (_super) {
    __extends(MyOptions, _super);
    function MyOptions() {
        return _super.call(this, {
            method: _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestMethod"].Get,
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({
                'Content-Type': 'application/json'
            })
        }) || this;
    }
    return MyOptions;
}(_angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]));

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _updatetask_updatetask_module__WEBPACK_IMPORTED_MODULE_3__["UpdateTaskModule"], _userlist_user_module__WEBPACK_IMPORTED_MODULE_11__["UserModule"], _viewtasklist_viewtask_module__WEBPACK_IMPORTED_MODULE_4__["ViewTaskModule"], _addproject_addproject_module__WEBPACK_IMPORTED_MODULE_12__["AddProjectModule"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"].forRoot(), _commonutils_module__WEBPACK_IMPORTED_MODULE_10__["CommonutilsModule"].forRoot()
            ],
            exports: [],
            providers: [
                {
                    provide: _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"],
                    useClass: MyOptions
                },
                _service_index__WEBPACK_IMPORTED_MODULE_8__["appService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/commonutils.module.ts":
/*!***************************************!*\
  !*** ./src/app/commonutils.module.ts ***!
  \***************************************/
/*! exports provided: CommonutilsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonutilsModule", function() { return CommonutilsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pipes_searchtask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/searchtask */ "./src/app/pipes/searchtask.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CommonutilsModule = /** @class */ (function () {
    function CommonutilsModule() {
    }
    CommonutilsModule_1 = CommonutilsModule;
    CommonutilsModule.forRoot = function () {
        return {
            ngModule: CommonutilsModule_1,
        };
    };
    CommonutilsModule = CommonutilsModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            declarations: [_pipes_searchtask__WEBPACK_IMPORTED_MODULE_4__["TaskSearchPipe"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _pipes_searchtask__WEBPACK_IMPORTED_MODULE_4__["TaskSearchPipe"]],
            providers: [_pipes_searchtask__WEBPACK_IMPORTED_MODULE_4__["TaskSearchPipe"]]
        })
    ], CommonutilsModule);
    return CommonutilsModule;
    var CommonutilsModule_1;
}());



/***/ }),

/***/ "./src/app/env/env.config.ts":
/*!***********************************!*\
  !*** ./src/app/env/env.config.ts ***!
  \***********************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

var Config = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"];


/***/ }),

/***/ "./src/app/env/index.ts":
/*!******************************!*\
  !*** ./src/app/env/index.ts ***!
  \******************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env.config */ "./src/app/env/env.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return _env_config__WEBPACK_IMPORTED_MODULE_0__["Config"]; });




/***/ }),

/***/ "./src/app/pipes/searchtask.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/searchtask.ts ***!
  \*************************************/
/*! exports provided: TaskSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskSearchPipe", function() { return TaskSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TaskSearchPipe = /** @class */ (function () {
    function TaskSearchPipe() {
    }
    TaskSearchPipe.prototype.transform = function (items, filtertask) {
        if (items && items.length) {
            return items.filter(function (item) {
                if (filtertask.taskName && item.taskName.toLowerCase().indexOf(filtertask.taskName.toLowerCase()) === -1) {
                    return false;
                }
                if (filtertask.parentTaskName && item.parentTask && item.parentTask.parentTaskName &&
                    item.parentTask.parentTaskName.toLowerCase().indexOf(filtertask.parentTaskName.toLowerCase()) === -1) {
                    return false;
                }
                if (filtertask.parentTaskName !== undefined && filtertask.parentTaskName !== null && filtertask.parentTaskName !== '' &&
                    (item.parentTask === null || item.parentTask === undefined || item.parentTask.parentTaskName === '')) {
                    return false;
                }
                if (filtertask.startDate && item.startDate.toLowerCase().indexOf(filtertask.startDate.toLowerCase()) === -1) {
                    return false;
                }
                if (filtertask.endDate && item.endDate.toLowerCase().indexOf(filtertask.endDate.toLowerCase()) === -1) {
                    return false;
                }
                if (filtertask.priorityFrom && item.priority && parseInt(item.priority) < parseInt(filtertask.priorityFrom)) {
                    return false;
                }
                if (filtertask.priorityTo && item.priority && parseInt(item.priority) > parseInt(filtertask.priorityTo)) {
                    return false;
                }
                return true;
            });
        }
        else {
            return items;
        }
    };
    TaskSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'taskSearchPipe', pure: false })
    ], TaskSearchPipe);
    return TaskSearchPipe;
}());



/***/ }),

/***/ "./src/app/service/app.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/app.service.ts ***!
  \****************************************/
/*! exports provided: appService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appService", function() { return appService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _env_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../env/index */ "./src/app/env/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var appService = /** @class */ (function () {
    function appService(http, router) {
        this.http = http;
        this.router = router;
        this.updatetask = {};
    }
    appService.prototype.getTasks = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Accept': '*/*', 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(_env_index__WEBPACK_IMPORTED_MODULE_6__["Config"].API + "/api/tasks", options)
            .map(function (res) { return res.json(); })
            .catch(this.handleErrorNoChange.bind(this));
    };
    appService.prototype.addTask = function (inputParam) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Accept': '*/*', 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(_env_index__WEBPACK_IMPORTED_MODULE_6__["Config"].API + "api/tasks", inputParam, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleErrorNoChange.bind(this));
    };
    appService.prototype.editTask = function (inputParam, taskId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Accept': '*/*', 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.put(_env_index__WEBPACK_IMPORTED_MODULE_6__["Config"].API + "api/tasks/" + taskId, inputParam, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleErrorNoChange.bind(this));
    };
    appService.prototype.deleteTask = function (taskId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Accept': '*/*', 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.delete(_env_index__WEBPACK_IMPORTED_MODULE_6__["Config"].API + "api/tasks/" + taskId, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleErrorNoChange.bind(this));
    };
    appService.prototype.handleErrorNoChange = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log('Error handleErrorNoChange kytpp-service: ' + error);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(errMsg);
    };
    appService.prototype.getUSers = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Accept': '*/*', 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(_env_index__WEBPACK_IMPORTED_MODULE_6__["Config"].API + "/api/users", options)
            .map(function (res) { return res.json(); })
            .catch(this.handleErrorNoChange.bind(this));
    };
    appService.prototype.addUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Accept': '*/*', 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        this.http.put;
        return this.http.put(_env_index__WEBPACK_IMPORTED_MODULE_6__["Config"].API + "/api/user" + user.id, user)
            .map(function (res) { return res.json(); })
            .catch(this.handleErrorNoChange.bind(this));
    };
    appService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], appService);
    return appService;
}());



/***/ }),

/***/ "./src/app/service/index.ts":
/*!**********************************!*\
  !*** ./src/app/service/index.ts ***!
  \**********************************/
/*! exports provided: appService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.service */ "./src/app/service/app.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appService", function() { return _app_service__WEBPACK_IMPORTED_MODULE_0__["appService"]; });




/***/ }),

/***/ "./src/app/updatetask/updatetask-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/updatetask/updatetask-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UpdateTaskRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTaskRoutingModule", function() { return UpdateTaskRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _updatetask_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updatetask.component */ "./src/app/updatetask/updatetask.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdateTaskRoutingModule = /** @class */ (function () {
    function UpdateTaskRoutingModule() {
    }
    UpdateTaskRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _updatetask_component__WEBPACK_IMPORTED_MODULE_2__["UpdateTaskComponent"] },
                    { path: 'addtask', component: _updatetask_component__WEBPACK_IMPORTED_MODULE_2__["UpdateTaskComponent"] },
                    { path: 'edittask', component: _updatetask_component__WEBPACK_IMPORTED_MODULE_2__["UpdateTaskComponent"] }
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UpdateTaskRoutingModule);
    return UpdateTaskRoutingModule;
}());



/***/ }),

/***/ "./src/app/updatetask/updatetask.component.css":
/*!*****************************************************!*\
  !*** ./src/app/updatetask/updatetask.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/updatetask/updatetask.component.html":
/*!******************************************************!*\
  !*** ./src/app/updatetask/updatetask.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-3 p-3 bg-white rounded box-shadow\">\r\n    <div class=\"col-xs-12 col-sm-2 col-md-2\"></div>\r\n    <div class=\"col-xs-12 col-sm-8 col-md-8\">\r\n            <form #updateTaskForm=\"ngForm\" method=\"post\" (ngSubmit)=\"updateTask(task)\" novalidate >\r\n                <div class=\"form-group row\">\r\n                    <label for=\"taskName\" class=\"col-sm-2 col-form-label\">Project</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"project\" maxlength=\"50\" required name=\"taskName\" #projectName=\"ngModel\" [(ngModel)]=\"task.projectName\" placeholder=\"Enter the project name\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"taskName\" class=\"col-sm-2 col-form-label\">Task Name</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"taskName\" maxlength=\"50\" required name=\"taskName\" #taskName=\"ngModel\" [(ngModel)]=\"task.taskName\" placeholder=\"Enter the Task Name\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"priority\" class=\"col-sm-2 col-form-label\">Priority</label>\r\n                    <div class=\"col-sm-9\">\r\n                        <div class=\"pt-2\">\r\n                                <input type=\"range\" min=\"1\" max=\"30\" name=\"priority\" #priority=\"ngModel\" [(ngModel)]=\"task.priority\" class=\"slider\" id=\"priority\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-1\">\r\n                        <div class=\"pt-2\">\r\n                            {{task.priority}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"parentTask\" class=\"col-sm-2 col-form-label\">Parent Task</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input id=\"parentTask\" type=\"text\" class=\"form-control\" name=\"parentTaskId\" [ngbTypeahead]=\"parentTaskSearch\" [ngModel]=\"task.parentTaskName\"\r\n                        (focus)=\"focus$.next($event.target.value)\" (click)=\"click$.next($event.target.value)\" [resultFormatter]=\"formatter\" \r\n                         (selectItem)=\"selectedParentTaskItem($event)\" (keydown)=clearParentId($event) #instance=\"ngbTypeahead\" placeholder=\"Select a Parent Task\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"startDate\" class=\"col-sm-2 col-form-label\">Start & End Date</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <ngb-datepicker #dp (select)=\"onDateSelection($event)\" [displayMonths]=\"2\" [dayTemplate]=\"t\" outsideDays=\"hidden\">\r\n                        </ngb-datepicker>\r\n                        <ng-template #t let-date let-focused=\"focused\">\r\n                          <span class=\"custom-day\"\r\n                                [class.focused]=\"focused\"\r\n                                [class.range]=\"isRange(date)\"\r\n                                [class.faded]=\"isHovered(date) || isInside(date)\"\r\n                                (mouseenter)=\"hoveredDate = date\"\r\n                                (mouseleave)=\"hoveredDate = null\">\r\n                            {{ date.day }}\r\n                          </span>\r\n                        </ng-template>\r\n                        <hr/>\r\n                        Start Date: <span class=\"text-primary\">{{convertDateJsonToString(fromDate)}}</span><br/>\r\n                        End Date: <span class=\"text-primary\">{{convertDateJsonToString(toDate)}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                        <label for=\"taskName\" class=\"col-sm-2 col-form-label\">User</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"project\" maxlength=\"50\" required name=\"user\" #projectName=\"ngModel\" [(ngModel)]=\"task.user\" placeholder=\"User\">\r\n                        </div>\r\n                    </div>\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-2 col-form-label\"></div>\r\n                    <div class=\"col-sm-10 row\">\r\n                            <div aria-live=\"assertive\" class=\"mx-3\">\r\n                                <div class=\"alert alert-danger\" [hidden]=\"!errorShow\" role=\"alert\">\r\n                                    {{errorMessage}}\r\n                                </div>\r\n                            </div>\r\n                        <div class=\"input-group\">\r\n                            <div *ngIf=\"flow === 'addtask'\">\r\n                                    <button type=\"submit\" class=\"btn btn-success mx-3\" [disabled]=\"(task.taskName === '' || fromDate === null || toDate === null)\">Add Task</button>\r\n                                    <button type=\"button\" class=\"btn btn-info mx-5\" (click)=resetButton()>Reset</button>\r\n                            </div>\r\n                            <div *ngIf=\"flow === 'updatetask'\">\r\n                                    <button type=\"submit\" class=\"btn btn-success mx-3\" [disabled]=\"(task.taskName === '' || fromDate === null || toDate === null)\">Update</button>\r\n                                    <button type=\"button\" class=\"btn btn-info mx-5\" (click)=viewTaskScreen()>Cancel</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form> \r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-2 col-md-2\"></div>\r\n</div>\r\n<button type=\"button\" id=\"submitModalOpener\" class=\"btn btn-primary\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#submitModal\">\r\n</button>\r\n\r\n<!-- The Modal -->\r\n<div class=\"modal fade\" role=\"dialog\" id=\"submitModal\" tabindex=\"-1\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <!-- Modal Header -->\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">{{modalHeading}}</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <!-- Modal body -->\r\n        <div class=\"modal-body\">\r\n          {{modalBody}}\r\n        </div>\r\n        <!-- Modal footer -->\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"flow === 'addtask'\" data-dismiss=\"modal\" (click)=resetButton()>Back To Add Task</button>\r\n          <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=viewTaskScreen()>Navigate to View Task</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n<div [hidden]=\"!screenLoader\" class=\"text-align-center\"> \r\n\t<div class=\"modal-backdropP\"></div>\r\n\t<div class=\"modalP\">\r\n\t\t<div id=\"fountainG\">\r\n\t\t\t<div id=\"fountainG_1\" class=\"fountainG\"></div>\r\n\t\t\t<div id=\"fountainG_2\" class=\"fountainG\"></div>\r\n\t\t\t<div id=\"fountainG_3\" class=\"fountainG\"></div>\r\n\t\t\t<div id=\"fountainG_4\" class=\"fountainG\"></div>\r\n\t\t\t<div id=\"fountainG_5\" class=\"fountainG\"></div>\r\n\t\t\t<div id=\"fountainG_6\" class=\"fountainG\"></div>\r\n\t\t\t<div id=\"fountainG_7\" class=\"fountainG\"></div>\r\n\t\t\t<div id=\"fountainG_8\" class=\"fountainG\"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/updatetask/updatetask.component.ts":
/*!****************************************************!*\
  !*** ./src/app/updatetask/updatetask.component.ts ***!
  \****************************************************/
/*! exports provided: UpdateTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTaskComponent", function() { return UpdateTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service */ "./src/app/service/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdateTaskComponent = /** @class */ (function () {
    function UpdateTaskComponent(calendar, config, router, appService) {
        var _this = this;
        this.router = router;
        this.appService = appService;
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.task = {};
        this.alltaskList = [];
        this.errorShow = false;
        this.screenLoader = false;
        this.errorMessage = '';
        this.modalHeading = '';
        this.modalBody = '';
        this.flow = 'addtask';
        this.selectedParentTaskObj = {};
        this.formatter = function (value) { return value.parentTask.parentTaskName || ''; };
        this.parentTaskSearch = function (text$) {
            var parentTasks = [];
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
            var clicksWithClosedPopup$ = _this.click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () { return !_this.instance.isPopupOpen(); }));
            var inputFocus$ = _this.focus$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) { return (term === '' ? _this.alltaskList :
                _this.alltaskList.filter(function (v) { return v.parentTask.parentTaskName.toLowerCase().indexOf(term.toLowerCase()) > -1; }))
                .slice(0, 10); }));
        };
        this.calendarToday = calendar;
        if (this.appService.updatetask !== null) {
            this.flow = 'updatetask';
        }
        if (this.flow === 'addtask') {
            this.task = {
                taskName: '',
                priority: '15',
                parentTaskId: '',
                parentTaskName: '',
                startDate: new Date(),
                endDate: new Date()
            };
            this.fromDate = calendar.getToday();
            this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
        }
        if (this.flow === 'updatetask') {
            var edittask = this.appService.updatetask;
            this.selectedParentTaskObj = edittask.parentTask !== null ? edittask.parentTask : null;
            this.task = {
                "taskName": edittask.taskName,
                "priority": edittask.priority,
                "parentTaskId": edittask.parentTask !== null ? edittask.parentTask.parentId : '',
                "parentTaskName": edittask.parentTask !== null ? edittask.parentTask.parentTaskName : '',
                "startDate": new Date(),
                "endDate": new Date()
            };
            this.fromDate = _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDate"].from(this.constructDateFromService(edittask.startDate));
            this.toDate = _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDate"].from(this.constructDateFromService(edittask.endDate));
        }
        var currentDate = new Date();
        config.minDate = { year: currentDate.getFullYear(), month: currentDate.getMonth() + 1, day: currentDate.getDate() };
        config.maxDate = { year: 2099, month: 12, day: 31 };
        config.outsideDays = 'hidden';
        this.screenLoader = false;
        appService.getTasks().subscribe(function (data) {
            _this.alltaskList = data;
            console.log(_this.alltaskList);
            _this.screenLoader = false;
        });
    }
    UpdateTaskComponent.prototype.ngOnInit = function () {
    };
    UpdateTaskComponent.prototype.ngOnDestroy = function () {
        this.task = {};
    };
    UpdateTaskComponent.prototype.updateTask = function (task) {
        var _this = this;
        var parentTaskNameVal = jQuery("#parentTask").val();
        this.errorShow = false;
        this.errorMessage = '';
        if (parentTaskNameVal !== '' && this.task.parentTaskId === '') {
            this.errorShow = true;
            this.errorMessage = 'Select Parent Task from the list available. Either the task name is edited or you have typed a custom task name.';
        }
        else {
            if (this.flow === 'addtask') {
                var submitAddTask = {};
                if (this.task.parentTaskId === '' || this.task.parentTaskId === null || this.task.parentTaskId === undefined) {
                    submitAddTask = {
                        "taskName": this.task.taskName,
                        "startDate": this.convertDateJsonToString(this.fromDate),
                        "endDate": this.convertDateJsonToString(this.toDate),
                        "priority": this.task.priority,
                        "status": "A"
                    };
                }
                else {
                    submitAddTask = {
                        "taskName": this.task.taskName,
                        "startDate": this.convertDateJsonToString(this.fromDate),
                        "endDate": this.convertDateJsonToString(this.toDate),
                        "priority": this.task.priority,
                        "parentId": this.task.parentTaskId === '' ? null : this.task.parentTaskId
                    };
                }
                this.screenLoader = true;
                this.appService.addTask(submitAddTask).subscribe(function (data) {
                    _this.screenLoader = false;
                    _this.modalHeading = 'Yeah :-)';
                    _this.modalBody = 'Task Added Successfully';
                    document.getElementById("submitModalOpener").click();
                }, function (err) {
                    _this.screenLoader = false;
                    _this.modalHeading = 'Oh No !!!';
                    _this.modalBody = 'Unexpected error occured during Add Task. Please try after some time.';
                    document.getElementById("submitModalOpener").click();
                });
            }
            if (this.flow === 'updatetask') {
                var submitUpdateTask = {
                    "id": this.appService.updatetask.id,
                    "taskName": this.task.taskName,
                    "startDate": this.convertDateJsonToString(this.fromDate),
                    "endDate": this.convertDateJsonToString(this.toDate),
                    "priority": this.task.priority,
                    "parentId": this.selectedParentTaskObj.parentId
                };
                this.screenLoader = true;
                this.appService.editTask(submitUpdateTask, this.appService.updatetask.id).subscribe(function (data) {
                    _this.screenLoader = false;
                    _this.modalHeading = 'Yeah :-)';
                    _this.modalBody = 'Task Updated Successfully';
                    document.getElementById("submitModalOpener").click();
                }, function (err) {
                    _this.screenLoader = false;
                    _this.modalHeading = 'Oh No !!!';
                    _this.modalBody = 'Unexpected error occured during Update Task. Please try after some time.';
                    document.getElementById("submitModalOpener").click();
                });
            }
        }
    };
    UpdateTaskComponent.prototype.selectedParentTaskItem = function (event) {
        event.preventDefault();
        this.selectedParentTaskObj = event.item.parentTask;
        jQuery("#parentTask").val(event.item.parentTask.parentTaskName);
        this.task.parentTaskId = event.item.parentTask.parentId;
    };
    UpdateTaskComponent.prototype.clearParentId = function (event) {
        if (event.key !== "Enter") {
            this.task.parentTaskId = "";
            this.selectedParentTaskObj = null;
        }
    };
    UpdateTaskComponent.prototype.constructDateFromService = function (datestring) {
        var res = datestring.split("/");
        var date = { day: parseInt(res[0]), month: parseInt(res[1]), year: parseInt(res[2]) };
        return date;
    };
    UpdateTaskComponent.prototype.resetButton = function () {
        this.task = {
            "taskName": "",
            "priority": "15",
            "parentTaskId": "",
            "parentTaskName": "",
            "startDate": new Date(),
            "endDate": new Date()
        };
        this.fromDate = this.calendarToday.getToday();
        this.toDate = this.calendarToday.getNext(this.calendarToday.getToday(), 'd', 10);
        jQuery("#parentTask").val("");
    };
    UpdateTaskComponent.prototype.viewTaskScreen = function () {
        document.getElementById("view-task").click();
    };
    /* Datepicker functions*/
    UpdateTaskComponent.prototype.onDateSelection = function (date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    };
    UpdateTaskComponent.prototype.isHovered = function (date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    };
    UpdateTaskComponent.prototype.isInside = function (date) {
        return date.after(this.fromDate) && date.before(this.toDate);
    };
    UpdateTaskComponent.prototype.isRange = function (date) {
        return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
    };
    UpdateTaskComponent.prototype.convertDateJsonToString = function (json) {
        if (json !== undefined && json !== null) {
            return json.day + '/' + json.month + '/' + json.year;
        }
    };
    UpdateTaskComponent.prototype.getParentTasks = function (tasks) {
        for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
            var item = tasks_1[_i];
            return item.parenttask.parenttaskname;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instance'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeahead"])
    ], UpdateTaskComponent.prototype, "instance", void 0);
    UpdateTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-updatetask',
            template: __webpack_require__(/*! ./updatetask.component.html */ "./src/app/updatetask/updatetask.component.html"),
            styles: [__webpack_require__(/*! ./updatetask.component.css */ "./src/app/updatetask/updatetask.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerConfig"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service__WEBPACK_IMPORTED_MODULE_5__["appService"]])
    ], UpdateTaskComponent);
    return UpdateTaskComponent;
}());



/***/ }),

/***/ "./src/app/updatetask/updatetask.module.ts":
/*!*************************************************!*\
  !*** ./src/app/updatetask/updatetask.module.ts ***!
  \*************************************************/
/*! exports provided: UpdateTaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTaskModule", function() { return UpdateTaskModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service */ "./src/app/service/index.ts");
/* harmony import */ var _updatetask_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updatetask.component */ "./src/app/updatetask/updatetask.component.ts");
/* harmony import */ var _updatetask_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updatetask-routing.module */ "./src/app/updatetask/updatetask-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UpdateTaskModule = /** @class */ (function () {
    function UpdateTaskModule() {
    }
    UpdateTaskModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_updatetask_routing_module__WEBPACK_IMPORTED_MODULE_4__["UpdateTaskRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeaheadModule"].forRoot()],
            declarations: [_updatetask_component__WEBPACK_IMPORTED_MODULE_3__["UpdateTaskComponent"]],
            exports: [_updatetask_component__WEBPACK_IMPORTED_MODULE_3__["UpdateTaskComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
            providers: [_service__WEBPACK_IMPORTED_MODULE_2__["appService"]]
        })
    ], UpdateTaskModule);
    return UpdateTaskModule;
}());



/***/ }),

/***/ "./src/app/userlist/add-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/userlist/add-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-3 p-3 bg-white rounded box-shadow\">\n    <div class=\"col-xs-12 col-sm-2 col-md-2\"></div>\n    <div class=\"col-md-12\">\n        <h3>\n            Add User\n        </h3>\n        <form [formGroup]=\"userForm\">\n            <div class=\"form-group row\">\n                <label for=\"firstName\" class=\"col-sm-2 col-form-label\">First Name</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" maxlength=\"50\" formControlName=\"firstName\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"lastName\" class=\"col-sm-2 col-form-label\">Last Name</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\"  maxlength=\"50\" formControlName=\"lastName\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"id\" class=\"col-sm-2 col-form-label\">ID</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" maxlength=\"50\" formControlName=\"id\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                    <div class=\"col-sm-2 col-form-label\"></div>\n                    <div class=\"col-sm-10 row\">\n                        <div class=\"input-group\">\n                            <div>\n                                    <button type=\"submit\" class=\"btn btn-success mx-3\">Update</button>\n                                    <button type=\"button\" class=\"btn btn-info mx-5\">Cancel</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n        </form>\n    </div>\n</div>\n<div class=\"row my-3 p-3 bg-white rounded box-shadow\">\n    <div class=\"col-xs-12 col-sm-2 col-md-2\"></div>\n    <div class=\"col-md-12\">\n        <h3>Users List</h3>\n        <user-list></user-list>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/userlist/add-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/userlist/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(fb) {
        this.fb = fb;
    }
    AddUserComponent.prototype.ngOnInit = function () {
        this.userForm = this.fb.group({
            'firstName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'lastName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'id': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.userForm.valueChanges.subscribe(console.log);
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "add-user-component",
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/userlist/add-user.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/userlist/user-list.component.html":
/*!***************************************************!*\
  !*** ./src/app/userlist/user-list.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n    <li *ngFor=\"let user of users\">\n        <span>\n            First Name: {{user.firstName}}\n        </span>\n        <span>\n            Last Name: {{user.lastName}}\n        </span>\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/userlist/user-list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/userlist/user-list.component.ts ***!
  \*************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service */ "./src/app/service/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserListComponent = /** @class */ (function () {
    function UserListComponent(appservice) {
        this.appservice = appservice;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    UserListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.appservice.getUSers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "user-list",
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/userlist/user-list.component.html")
        }),
        __metadata("design:paramtypes", [_service__WEBPACK_IMPORTED_MODULE_1__["appService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/userlist/user-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/userlist/user-routing.module.ts ***!
  \*************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-user.component */ "./src/app/userlist/add-user.component.ts");
/* harmony import */ var _user_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-list.component */ "./src/app/userlist/user-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _add_user_component__WEBPACK_IMPORTED_MODULE_2__["AddUserComponent"] },
                    { path: 'adduser', component: _add_user_component__WEBPACK_IMPORTED_MODULE_2__["AddUserComponent"] },
                    { path: 'users', component: _user_list_component__WEBPACK_IMPORTED_MODULE_3__["UserListComponent"] }
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/userlist/user.module.ts":
/*!*****************************************!*\
  !*** ./src/app/userlist/user.module.ts ***!
  \*****************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service */ "./src/app/service/index.ts");
/* harmony import */ var _add_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-user.component */ "./src/app/userlist/add-user.component.ts");
/* harmony import */ var _user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list.component */ "./src/app/userlist/user-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/userlist/user-routing.module.ts");
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
            imports: [_user_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
            declarations: [_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"], _add_user_component__WEBPACK_IMPORTED_MODULE_3__["AddUserComponent"]],
            exports: [_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"], _add_user_component__WEBPACK_IMPORTED_MODULE_3__["AddUserComponent"]],
            providers: [_service__WEBPACK_IMPORTED_MODULE_2__["appService"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/viewtasklist/viewtask-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/viewtasklist/viewtask-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ViewTaskRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTaskRoutingModule", function() { return ViewTaskRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _viewtask_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewtask.component */ "./src/app/viewtasklist/viewtask.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewTaskRoutingModule = /** @class */ (function () {
    function ViewTaskRoutingModule() {
    }
    ViewTaskRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'viewtask', component: _viewtask_component__WEBPACK_IMPORTED_MODULE_2__["ViewTaskComponent"] }
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ViewTaskRoutingModule);
    return ViewTaskRoutingModule;
}());



/***/ }),

/***/ "./src/app/viewtasklist/viewtask.component.css":
/*!*****************************************************!*\
  !*** ./src/app/viewtasklist/viewtask.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th, label, .h6{\n    font-weight: 500 !important;\n    color: #495057 !important;\n}\n\n"

/***/ }),

/***/ "./src/app/viewtasklist/viewtask.component.html":
/*!******************************************************!*\
  !*** ./src/app/viewtasklist/viewtask.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #viewTaskForm=\"ngForm\" novalidate >\n<div class=\"row my-3 p-3 bg-white rounded box-shadow\">\n        <br/><br/>    \n        <div class=\"row col-xs-12 col-sm-12 col-md-12\">\n            <div class=\"h6 mx-3\">Enter the field to Search for your task.</div>\n        </div>\n        <hr/>\n        <br/><br/>\n        <div class=\"row col-xs-12 col-sm-12 col-md-12\">\n            <div class=\"form-group col-xs-12 col-sm-6 col-md-6\">\n                <label for=\"taskName\">Task Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"taskName\" maxlength=\"50\" name=\"taskName\" #taskName=\"ngModel\" [(ngModel)]=\"task.taskName\">\n            </div>\n            <div class=\"form-group col-xs-12 col-sm-6 col-md-6\">\n                <label for=\"parentTaskName\">Parent Task Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"parentTaskName\" maxlength=\"50\" name=\"parentTaskName\" #parentTaskName=\"ngModel\" [(ngModel)]=\"task.parentTaskName\">\n            </div>\n        </div>\n        <div class=\"row col-xs-12 col-sm-12 col-md-12\">\n            <div class=\"form-group col-xs-12 col-sm-3 col-md-3\">\n                <label for=\"priorityFrom\">Priority From</label>\n                <input type=\"text\" class=\"form-control\" id=\"priorityFrom\" maxlength=\"2\" name=\"priorityFrom\" #priorityFrom=\"ngModel\" [(ngModel)]=\"task.priorityFrom\">\n            </div>\n            <div class=\"form-group col-xs-12 col-sm-3 col-md-3\">\n                <label for=\"priorityTo\">Priority To</label>\n                <input type=\"text\" class=\"form-control\" id=\"priorityTo\" maxlength=\"2\" name=\"priorityTo\" #priorityTo=\"ngModel\" [(ngModel)]=\"task.priorityTo\">\n            </div>\n            <div class=\"form-group col-xs-12 col-sm-3 col-md-3\">\n                <label for=\"startDate\">Start Date</label>\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"dd/mm/yyyy\" id=\"startDate\" [readonly]=\"true\"\n                            name=\"startDate\" [(ngModel)]=\"task.startDate\" ngbDatepicker #startDate=\"ngbDatepicker\" (dateSelect)=\"onDateSelectPicker($event,'start')\"/>\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-outline-secondary fa fa-calendar\" (click)=\"startDate.toggle()\" type=\"button\"></button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group col-xs-12 col-sm-3 col-md-3\">\n                <label for=\"endDate\">End Date</label>\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"dd/mm/yyyy\" id=\"endDate\" [readonly]=\"true\"\n                            name=\"endDate\" [(ngModel)]=\"task.endDate\" ngbDatepicker #endDate=\"ngbDatepicker\" (dateSelect)=\"onDateSelectPicker($event,'end')\"/>\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-outline-secondary fa fa-calendar\" (click)=\"endDate.toggle()\" type=\"button\"></button>\n                    </div>\n                </div>\n            </div>\n        </div> \n        <div class=\"row col-xs-12 col-sm-12 col-md-12\">\n                <div class=\"input-group\">\n                    <button type=\"button\" class=\"btn btn-info mx-3\" (click)=resetButton()>Reset Search Form</button>\n                </div>\n        </div> \n        <div class=\"row col-xs-12 col-sm-12 col-md-12\">\n                <table class=\"table table-bordered mx-3 my-4\">\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th scope=\"col\">Task Name</th>\n                            <th scope=\"col\">Parent Task Name</th>\n                            <th scope=\"col\">Priority</th>\n                            <th scope=\"col\">Start Date</th>\n                            <th scope=\"col\">End Date</th>\n                            <th class=\"actionWidth\" scope=\"col\">Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of alltaskList | taskSearchPipe : task\">\n                            <td>{{item.taskName}}</td>\n                            <td>{{getParentTaskName(item)}}</td>\n                            <td>{{item.priority}}</td>\n                            <td>{{item.startDate}}</td>\n                            <td>{{item.endDate}}</td>\n                            <td class=\"actionWidth\">\n                                <!-- <div *ngIf=\"item.status === 'A'\"> -->\n                                <div>\n                                    <button type=\"button\" class=\"btn btn-info\" (click)=editTask(item)>Edit Task</button>\n                                    <button type=\"button\" class=\"btn btn-secondary mx-2\" (click)=endTask(item.id)>End Task</button>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n        </div> \n</div>\n\n\n<button type=\"button\" id=\"endTaskModalOpener\" class=\"btn btn-primary\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#endTaskModal\">\n</button>\n\n<!-- The Modal -->\n<div class=\"modal fade\" role=\"dialog\" id=\"endTaskModal\" tabindex=\"-1\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">{{modalHeading}}</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          {{modalBody}}\n        </div>\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=backToViewTask()>Back To View Task</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/viewtasklist/viewtask.component.ts":
/*!****************************************************!*\
  !*** ./src/app/viewtasklist/viewtask.component.ts ***!
  \****************************************************/
/*! exports provided: ViewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTaskComponent", function() { return ViewTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _service_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/index */ "./src/app/service/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewTaskComponent = /** @class */ (function () {
    function ViewTaskComponent(calendar, config, router, appService) {
        var _this = this;
        this.router = router;
        this.appService = appService;
        this.alltaskList = [];
        this.task = {};
        this.screenLoader = false;
        this.modalHeading = '';
        this.modalBody = '';
        this.screenLoader = true;
        this.appService.updatetask = null;
        appService.getTasks().subscribe(function (data) {
            _this.alltaskList = data;
            _this.screenLoader = false;
        });
    }
    ViewTaskComponent.prototype.ngOnInit = function () {
    };
    ViewTaskComponent.prototype.ngOnDestroy = function () {
    };
    ViewTaskComponent.prototype.onDateSelectPicker = function (date, field) {
        var _this = this;
        if (field === 'start') {
            this.task.startDate = this.convertDateJsonToString(this.task.startDate);
            setTimeout(function () {
                jQuery("#startDate").val(_this.task.startDate);
            }, 50);
        }
        else if (field === 'end') {
            this.task.endDate = this.convertDateJsonToString(this.task.endDate);
            setTimeout(function () {
                jQuery("#endDate").val(_this.task.endDate);
            }, 50);
        }
    };
    ViewTaskComponent.prototype.convertDateJsonToString = function (json) {
        if (json !== undefined && json !== null) {
            return json.day + '/' + json.month + '/' + json.year;
        }
    };
    ViewTaskComponent.prototype.getParentTaskName = function (item) {
        var parentTaskName = '';
        if (item !== null && item !== undefined) {
            if (item.parentTask !== null && item.parentTask !== undefined) {
                parentTaskName = item.parentTask.parentTaskName;
            }
        }
        return parentTaskName;
    };
    ViewTaskComponent.prototype.resetButton = function () {
        this.task = {
            "taskName": "",
            "parentTaskName": "",
            "priorityFrom": "",
            "priorityTo": "",
            "startDate": "",
            "endDate": ""
        };
        jQuery("#startDate").val("");
        jQuery("#endDate").val("");
    };
    ViewTaskComponent.prototype.endTask = function (taskId) {
        var _this = this;
        this.screenLoader = true;
        this.appService.deleteTask(taskId).subscribe(function (data) {
            _this.screenLoader = false;
            _this.modalHeading = 'Yeah :-)';
            _this.modalBody = 'Task Ended Successfully';
            document.getElementById("endTaskModalOpener").click();
        }, function (err) {
            _this.screenLoader = false;
            _this.modalHeading = 'Oh No !!!';
            _this.modalBody = 'Unexpected error occured during End Task. Please try after some time.';
            document.getElementById("endTaskModalOpener").click();
        });
    };
    ViewTaskComponent.prototype.backToViewTask = function () {
        var _this = this;
        this.screenLoader = true;
        this.appService.getTasks().subscribe(function (data) {
            _this.alltaskList = data;
            _this.screenLoader = false;
        }, function (err) {
            _this.screenLoader = false;
        });
    };
    ViewTaskComponent.prototype.editTask = function (task) {
        this.appService.updatetask = task;
        this.router.navigate(['/edittask']);
    };
    ViewTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewtask',
            template: __webpack_require__(/*! ./viewtask.component.html */ "./src/app/viewtasklist/viewtask.component.html"),
            styles: [__webpack_require__(/*! ./viewtask.component.css */ "./src/app/viewtasklist/viewtask.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerConfig"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_index__WEBPACK_IMPORTED_MODULE_3__["appService"]])
    ], ViewTaskComponent);
    return ViewTaskComponent;
}());



/***/ }),

/***/ "./src/app/viewtasklist/viewtask.module.ts":
/*!*************************************************!*\
  !*** ./src/app/viewtasklist/viewtask.module.ts ***!
  \*************************************************/
/*! exports provided: ViewTaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTaskModule", function() { return ViewTaskModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/index */ "./src/app/service/index.ts");
/* harmony import */ var _viewtask_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewtask.component */ "./src/app/viewtasklist/viewtask.component.ts");
/* harmony import */ var _viewtask_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewtask-routing.module */ "./src/app/viewtasklist/viewtask-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _commonutils_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../commonutils.module */ "./src/app/commonutils.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ViewTaskModule = /** @class */ (function () {
    function ViewTaskModule() {
    }
    ViewTaskModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_viewtask_routing_module__WEBPACK_IMPORTED_MODULE_4__["ViewTaskRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeaheadModule"].forRoot(), _commonutils_module__WEBPACK_IMPORTED_MODULE_7__["CommonutilsModule"].forRoot()],
            declarations: [_viewtask_component__WEBPACK_IMPORTED_MODULE_3__["ViewTaskComponent"]],
            exports: [_viewtask_component__WEBPACK_IMPORTED_MODULE_3__["ViewTaskComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
            providers: [_service_index__WEBPACK_IMPORTED_MODULE_2__["appService"]]
        })
    ], ViewTaskModule);
    return ViewTaskModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    API: 'http://localhost:9000'
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\sba-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map