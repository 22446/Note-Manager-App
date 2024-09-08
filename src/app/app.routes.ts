import { LoginComponent } from './component/login/login.component';
import { NotehomeComponent } from './component/notehome/notehome.component';
import { SignupComponent } from './component/signup/signup.component';

import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { blanktGuard } from './core/guards/blankt.guard';

export const routes: Routes = [
    {path:'',redirectTo:"register", pathMatch:"full"},
    {path:"login",component:LoginComponent,title:"login",canActivate:[blanktGuard]},
    {path:"register",component:SignupComponent,title:"register",canActivate:[blanktGuard]},
    {path:"notehome",component:NotehomeComponent,title:"note",canActivate:[authGuard]}
];
