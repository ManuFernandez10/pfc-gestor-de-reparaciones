
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Reparacion } from './../../models/Reparacion';
import { ReparacionesService } from '../../services/reparaciones.service';

@Component({
  selector: 'app-form-reparaciones',
  templateUrl: './form-reparaciones.component.html',
  styleUrls: ['./form-reparaciones.component.css']
})
export class FormReparacionesComponent implements OnInit {

  reparacion: Reparacion = {
    tipo: '',
    modelo: '',
    numero_serie: null,
    descripcion: '',
    nombre_cliente: '',
    apellidos_cliente: '',
    telefono_cliente: null
  };

  constructor(private reparacionesService: ReparacionesService, private router: Router) { }

  ngOnInit() {
  }

  addReparacion(){
    this.reparacionesService.createReparacion(this.reparacion).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['tarjetas-reparaciones']);
      },
      err => console.error(err)
    );
  }

}
