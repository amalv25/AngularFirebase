import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { ListItemsComponent } from '../components/list-items/list-items.component';
import { AuthGuard } from '../helpers/auth.guard';
import { HomeComponent } from '../components/home/home.component';
import { AddNewEmployeeComponent } from '../components/add-new-employee/add-new-employee.component';
import { EmployeeDetailsComponent } from '../components/list-items/employee-details/employee-details.component';
import { EmployeeEditComponent } from '../components/list-items/employee-edit/employee-edit.component';
import { EmployeeEditDialogComponent } from '../components/list-items/employee-edit-dialog/employee-edit-dialog.component';
import { AddNewDialogComponent } from '../components/list-items/add-new-dialog/add-new-dialog.component';
import { EmployeeNamesComponent } from '../components/employee-names/employee-names.component';
import { AnalyticsComponent } from '../components/analytics/analytics.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'list',component:ListItemsComponent,canActivate:[AuthGuard],children:[ 
    // {path:'addNewEmployee',component:AddNewDialogComponent}, 
    {path:':id',component:EmployeeDetailsComponent},
    // {path:':id/edit',component:EmployeeEditComponent}
    {path:':id/edit',component:EmployeeEditDialogComponent}

  ]},
  {path:'employeeNames',component:EmployeeNamesComponent,canActivate:[AuthGuard]},
  {path:'analytics',component:AnalyticsComponent,canActivate:[AuthGuard]},

  {path:'**', redirectTo:''}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
