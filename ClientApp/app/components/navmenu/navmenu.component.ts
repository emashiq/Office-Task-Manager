import { Component,OnInit } from '@angular/core';
import {AuthGuard} from '../auth/auth.service';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    private Permitted:boolean;
    constructor(private _authGuard:AuthGuard){}
    ngOnInit() {
        this.Permitted=this._authGuard.canActivate();
        console.log('working');
    }
}
