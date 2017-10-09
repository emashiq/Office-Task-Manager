
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import {MasterService} from '../service/master.service';
@Component({
    providers:[MasterService],
    selector:'login-app',
    styleUrls:['login.component.css'],
    templateUrl:'login.component.html'
})
export class LoginComponent{
    loginObject:LoginViewModel;
    _service:MasterService<LoginViewModel>;
    token:string;
    constructor(masterService:MasterService<LoginViewModel>,private router:Router)
    {
        this.loginObject=new LoginViewModel;
        this._service=masterService;
        this._service.extra="Login";
    }
    onSubmit(){
        this._service.Login(this.loginObject).subscribe(x=> this.storeToken(x));
    }
    storeToken(x:string):void{
        this.token=x;
        window.localStorage.setItem('token',x);
        this.router.navigate(['/home']);
    }
   
}
class LoginViewModel{
    UserName:string;
    Password:string;
}