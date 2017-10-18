import { Component ,Injectable} from '@angular/core';
import {Router,CanActivate} from '@angular/router';
import {AppComponent} from '../app/app.component'
import {NavMenuComponent} from '../navmenu/navmenu.component'
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class AuthGuard implements CanActivate {
    private loggedIn = new BehaviorSubject<boolean>(false); // {1}
    get isLoggedIn() {
      return this.loggedIn.asObservable(); // {2}
    }
    canActivate(): boolean {
        if(typeof(window)!='undefined')
        {
            
            if(localStorage.getItem('token'))
            {
                this.loggedIn.next(true);
                return true;
            }
        }
        this.loggedIn.next(false);

        this.router.navigate(['/']);

        
        return false;
    }

    private authService: boolean;
    constructor(private router: Router) {
    }

   
}
