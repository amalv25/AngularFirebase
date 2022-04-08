import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { ListItemsComponent } from '../components/list-items/list-items.component';
import { AuthGuard } from '../helpers/auth.guard';
import { HomeComponent } from '../components/home/home.component';
import { AddNewEmployeeComponent } from '../components/add-new-employee/add-new-employee.component';
import { EmployeeDetailsComponent } from '../components/list-items/employee-details/employee-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'list',component:ListItemsComponent,canActivate:[AuthGuard],children:[  
    {path:':id',component:EmployeeDetailsComponent},
  ]},
  {path:'addNewEmployee',component:AddNewEmployeeComponent,canActivate:[AuthGuard]},
  {path:'**', redirectTo:''}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
