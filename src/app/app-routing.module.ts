import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/Login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { MobiliarioComponent } from './components/pages/mobiliario/mobiliario.component';
import { HardwareComponent } from './components/pages/hardware/hardware.component';



const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Mobiliario', component: MobiliarioComponent},
  {path: 'Hardware', component: HardwareComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
