import { NgModule } from '@angular/core';
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
import { DashboardRoutingModule } from "./route.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        UserRoleComponent,
        UserListComponent,
        UserRoleUpdateComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        DashboardRoutingModule,
        ReactiveFormsModule,
        
    ],
    providers:[AuthGuard,MasterService,NavMenuComponent]
})
export class DashboardModuleShared {
}
