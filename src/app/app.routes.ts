import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { StudentsignupComponent } from './studentsignup/studentsignup.component';

export const routes: Routes = [
    {path:'Dashboard', component:DashboardComponent},
    {path:'', redirectTo:'Dashboard', pathMatch:'full'},
    {path:'AdminSignUp', component:AdminsignupComponent},
    {path:'AdminSignIn', component:AdminsigninComponent},
    {path:'studentsignup',component:StudentsignupComponent},
];

