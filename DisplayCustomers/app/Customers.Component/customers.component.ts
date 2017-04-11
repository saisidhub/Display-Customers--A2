/// <reference path="../services/customer.services.ts" />

import { Component } from "@angular/core";
import { CustomerService } from '../services/customer.services';

@Component({
    selector: 'of-student',
    templateUrl: './app/customers.component/customers.component.html',
    styleUrls: ['./app/customers.component/customers.component.css'],
    providers: [CustomerService]

})
export class CustomersComponent {
    private customers: any[];

    constructor(private _customerService: CustomerService) {

    }

    ngOnInit() {
        this.getallcustomers();

    }
    getallcustomers() {
        this._customerService.getallcustomers().subscribe(
            response => this.customers = response,
            error => console.error(error),
            () => console.info(this.customers)
        );

    }

}
