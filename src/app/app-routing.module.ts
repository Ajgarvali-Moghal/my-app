import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { EmployeeComponent } from './employee/employee.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentComponent } from './student/student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  // {path:'login',component:LoginComponent},
  // {path:'dashboard',component:DashboardComponent},
  // {path:'**',component:Error404Component}
  {path:'home',component:HomeComponent,canActivate:[AuthenticationGuard]},
  {path:'',component:LoginComponent},
  {path:'',component:HomeComponent,canActivate:[AuthenticationGuard],children:[
    {path:'welcome',component:WelcomeComponent,canActivate:[AuthenticationGuard]},
    {path:'data-binding',component:DataBindingComponent,canActivate:[AuthenticationGuard]},
    {path:'calculator',component:CalculatorComponent,canActivate:[AuthenticationGuard]},
    {path:'rectangle',component:RectangleComponent,canActivate:[AuthenticationGuard]},
    {path:'circle',component:CircleComponent,canActivate:[AuthenticationGuard]},
    {path:'bmi',component:BmiComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'directive',component:DirectivesComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'pinterest',component:PinterestComponent},
    {path:'createVehicle',component:CreateVehicleComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'student',component:StudentComponent},
    {path:'student-details',component:StudentDetailsComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent},
  ]},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
