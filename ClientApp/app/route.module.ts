import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import {AuthGuard} from './components/auth/auth.gurad'
import { UserRoleComponent, UserListComponent, UserRoleUpdateComponent } from './components/UserComponent/UserRole/userrole.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes: Routes = [
    {
        path: '', component: DashboardComponent, children: [
            { path: 'home', component: HomeComponent, }
        ]
    },
    //{ path: 'counter', component: CounterComponent ,canActivate:[AuthGuard]},
    //{ path: 'fetch-data', component: FetchDataComponent ,canActivate:[AuthGuard]},
    //{ path: 'user-role', component: UserRoleComponent, canActivate: [AuthGuard] }, 
    //{ path: 'user-role/edit/:id', component: UserRoleUpdateComponent, canActivate: [AuthGuard] },
    //{ path: 'user-role-list', data: { reuse: false }, component: UserListComponent, canActivate: [AuthGuard] }
  ];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [ RouterModule ]
  })
  export class DashboardRoutingModule {}