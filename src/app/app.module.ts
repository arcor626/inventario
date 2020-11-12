import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// componentes
import {LoginComponent} from './components/Login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/pages/navbar/navbar.component';
import { MobiliarioComponent } from './components/pages/mobiliario/mobiliario.component';
import { HardwareComponent } from './components/pages/hardware/hardware.component';
import { ComunicacionComponent } from './components/pages/comunicacion/comunicacion.component';
import { AccesoriosComponent } from './components/pages/acccesorios/accesorios.component';
import { LimpiezaComponent } from './components/pages/limpieza/limpieza.component';
import { PapeleriaComponent } from './components/pages/papeleria/papeleria.component';
import { InsumosComponent } from './components/pages/insumos/insumos.component';


import { ChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    MobiliarioComponent,
    HardwareComponent,
    ComunicacionComponent,
    AccesoriosComponent,
    LimpiezaComponent,
    PapeleriaComponent,
    InsumosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
