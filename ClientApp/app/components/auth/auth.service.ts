import { Component } from '@angular/core';

export class AuthComponent {
    private authService:boolean;
    constructor(){
        this.authService=false;
    }
    public getAuthService():boolean{
        return this.authService;
    }
}
