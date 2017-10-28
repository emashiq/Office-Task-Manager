import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AuthGuard} from '../auth/auth.gurad'
@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    
      constructor() { }
    
      ngOnInit() {
      }
}
