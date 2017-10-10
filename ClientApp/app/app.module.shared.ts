import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {AppRoutingModule} from './route.module';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import {LoginComponent} from './components/login/login.component';
import {MasterService} from './components/service/master.service';
import {AuthGuard} from './components/auth/auth.gurad'

@NgModule({
    declarations: [
        LoginComponent,
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent
        
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        AppRoutingModule
    ],
    providers:[AuthGuard,MasterService,NavMenuComponent]
})
export class AppModuleShared {
}
