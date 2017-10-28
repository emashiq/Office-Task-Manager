import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthGuard } from '../auth/auth.gurad';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

    constructor() { }

    ngOnInit() {
    }

}
