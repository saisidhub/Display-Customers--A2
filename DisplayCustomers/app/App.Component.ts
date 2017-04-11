import { Component } from "@angular/core";
import { CustomersComponent } from './customers.component/customers.component';

@Component({
    selector: 'my-app',
    template: `<div id="digital-layout">          
                <section id="page-content">
                    <div id="data-container">
                        <of-student></of-student>
                        
                    </div>
                </section>
            </div>
            `,
})
export class AppComponent {
    private show: boolean = false;
    private message: string;    
}


