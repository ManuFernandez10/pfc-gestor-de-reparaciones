import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//NgbModule para usar ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Modulo de formularios para usar databinding
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Cliente HTTP para que funcione el servicio API REST
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard'
/**
 * Servicio que se encargar de recoger la info de las reparaciones de la base de datos
 * a través de peticios HTTP
 */
import { ReparacionesService } from './services/reparaciones.service';
//Importación de componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { TarjetasReparacionesComponent } from './components/tarjetas-reparaciones/tarjetas-reparaciones.component';
import { TablaReparacionesComponent } from './components/tabla-reparaciones/tabla-reparaciones.component';
import { TablaReparacionesFinalizadasComponent } from './components/tabla-reparaciones-finalizadas/tabla-reparaciones-finalizadas.component';
import { FormReparacionesComponent } from './components/form-reparaciones/form-reparaciones.component';
import { FormEditarReparacionesComponent } from './components/form-editar-reparaciones/form-editar-reparaciones.component';


//Pipe del filtro de búsqueda
import { FiltroPipe } from './pipes/filtro/filtro.pipe';
//Módulo para imprimir
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    TarjetasReparacionesComponent,
    TablaReparacionesComponent,
    TablaReparacionesFinalizadasComponent,
    FormReparacionesComponent,
    FormEditarReparacionesComponent,
    FiltroPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireAuthGuardModule
  ],
  //Se importa el servicio el providers
  providers: [ReparacionesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
