import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import {LoginComponent} from './components/login/login.component';
import {MasterService} from './components/service/master.service';
import {AuthGuard} from './components/auth/auth.gurad'
import { UserRoleComponent, UserListComponent, UserRoleUpdateComponent } from './components/UserComponent/UserRole/userrole.component';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { AppRoutingModule } from "./app.routing.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
@NgModule({
    declarations: [
        LoginComponent,
        AppComponent,
        DashboardComponent,
        HomeComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        UserRoleComponent,
        UserRoleUpdateComponent,
        UserListComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        
    ],
    providers: [AuthGuard, MasterService, NavMenuComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModuleShared {
}
