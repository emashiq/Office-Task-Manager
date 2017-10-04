import { Component,OnInit } from '@angular/core';

import {AuthComponent} from '../auth/auth.service';
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public authService:boolean;
    constructor(){
        
    }
    ngOnInit() {
        this.authService=new AuthComponent().getAuthService();
      }
    public getStyle():string{
        if(this.authService)
        {
            return 'col-md-12';
        }
        return 'col-md-9';
    }
}
