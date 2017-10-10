import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AuthGuard} from '../auth/auth.gurad'
@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
      isLoggedIn$: Observable<boolean>;                  // {1}
    
      constructor(private authService: AuthGuard) { }
    
      ngOnInit() {
        this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
      }
}
