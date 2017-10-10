import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthGuard } from '../auth/auth.gurad';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    isLoggedIn$: Observable<boolean>;                  // {1}
    
      constructor(private authService: AuthGuard) { }
    
      ngOnInit() {
        this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
      }
    
}
