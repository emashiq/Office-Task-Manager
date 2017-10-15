import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import {AuthGuard} from './components/auth/auth.gurad'
import { UserRoleComponent } from './components/UserComponent/UserRole/userrole.component';

const routes: Routes = [
    { path: '', component:LoginComponent},
    //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    //{ path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent ,canActivate:[AuthGuard]},
    { path: 'counter', component: CounterComponent ,canActivate:[AuthGuard]},
    { path: 'fetch-data', component: FetchDataComponent ,canActivate:[AuthGuard]},
    { path: 'user-role', component: UserRoleComponent ,canActivate:[AuthGuard]}
  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}