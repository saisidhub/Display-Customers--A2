/// <reference path="../services/customer.services.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var customer_services_1 = require("../services/customer.services");
var CustomersComponent = (function () {
    function CustomersComponent(_customerService) {
        this._customerService = _customerService;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.getallcustomers();
    };
    CustomersComponent.prototype.getallcustomers = function () {
        var _this = this;
        this._customerService.getallcustomers().subscribe(function (response) { return _this.customers = response; }, function (error) { return console.error(error); }, function () { return console.info(_this.customers); });
    };
    return CustomersComponent;
}());
CustomersComponent = __decorate([
    core_1.Component({
        selector: 'of-student',
        templateUrl: './app/customers.component/customers.component.html',
        styleUrls: ['./app/customers.component/customers.component.css'],
        providers: [customer_services_1.CustomerService]
    }),
    __metadata("design:paramtypes", [customer_services_1.CustomerService])
], CustomersComponent);
exports.CustomersComponent = CustomersComponent;
//# sourceMappingURL=customers.component.js.map