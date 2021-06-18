import { LoginComponent } from './components/login/login.component';
import { TarjetasReparacionesComponent } from './components/tarjetas-reparaciones/tarjetas-reparaciones.component';
import { FormEditarReparacionesComponent } from './components/form-editar-reparaciones/form-editar-reparaciones.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormReparacionesComponent } from './components/form-reparaciones/form-reparaciones.component';
import { TablaReparacionesFinalizadasComponent } from './components/tabla-reparaciones-finalizadas/tabla-reparaciones-finalizadas.component';
import { TablaReparacionesComponent } from './components/tabla-reparaciones/tabla-reparaciones.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'tabla-reparaciones',
    component: TablaReparacionesComponent,
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'tarjetas-reparaciones',
    component: TarjetasReparacionesComponent,
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'tabla-reparaciones-finalizadas',
    component: TablaReparacionesFinalizadasComponent,
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'form-reparaciones',
    component: FormReparacionesComponent,
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'form-editar-reparacion/:id',
    component: FormEditarReparacionesComponent,
    canActivate: [AngularFireAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
