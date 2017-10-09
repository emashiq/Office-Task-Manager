import { Component ,Injectable} from '@angular/core';
import {Router,CanActivate} from '@angular/router';
import {AppComponent} from '../app/app.component'
@Injectable()
export class AuthGuard implements CanActivate {
    public permitted:boolean;
    canActivate(): boolean {
        if(typeof(window)!='undefined')
        {
            if(localStorage.getItem('token'))
            {
                return true;
            }
            this.permitted=true;
            
        }
        this.permitted=false;
        
        this.router.navigate(['/']);
        return false;
    }

    private authService: boolean;
    constructor(private router: Router,private _appComponent:AppComponent) {
    }

   
}
