import { Reparacion } from './../models/Reparacion';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReparacionesService {

  //URI del API REST
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  //Entender los observables
  getReparaciones(): Observable<Reparacion[]>{
    return this.http.get<Reparacion[]>(`${this.API_URI}/reparaciones/`);
  }

  getReparacion(id_reparacion: string|number): Observable<Reparacion>{
    return this.http.get<Reparacion>(`${this.API_URI}/reparaciones/${id_reparacion}`);
  }

  deleteReparacion(id_reparacion: string|number): Observable<Reparacion>{
    return this.http.delete<Reparacion>(`${this.API_URI}/reparaciones/${id_reparacion}`)
  }

  createReparacion(reparacion: Reparacion): Observable<Reparacion>{
    return this.http.post<Reparacion>(`${this.API_URI}/reparaciones/`, reparacion);
  }

  updateReparacion(id_reparacion: string|number, newReparacion: Reparacion): Observable<Reparacion> {
    return this.http.put<Reparacion>(`${this.API_URI}/reparaciones/${id_reparacion}`, newReparacion);
  }
}
