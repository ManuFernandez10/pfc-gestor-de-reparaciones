import { ReparacionesService } from './../../services/reparaciones.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Reparacion } from './../../models/Reparacion';

@Component({
  selector: 'app-form-editar-reparaciones',
  templateUrl: './form-editar-reparaciones.component.html',
  styleUrls: ['./form-editar-reparaciones.component.css']
})
export class FormEditarReparacionesComponent implements OnInit {

  reparacion: Reparacion = {
    tipo: '',
    modelo: '',
    numero_serie: null,
    descripcion: '',
    nombre_cliente: '',
    apellidos_cliente: '',
    telefono_cliente: null
  };

  constructor(private reparacionesService: ReparacionesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;

    if (params.id) {
      this.reparacionesService.getReparacion(params.id).subscribe(
        res => {
          this.reparacion.id_reparacion = res[0].id_reparacion;
          this.reparacion.tipo = res[0].tipo;
          this.reparacion.modelo = res[0].modelo;
          this.reparacion.numero_serie = res[0].numero_serie;
          this.reparacion.fecha_entrada = res[0].fecha_entrada;
          this.reparacion.descripcion = res[0].descripcion;
          this.reparacion.reparacion_finalizada = res[0].reparacion_finalizada;
          this.reparacion.reparacion_exitosa = res[0].reparacion_exitosa;
          this.reparacion.nombre_cliente = res[0].nombre_cliente;
          this.reparacion.apellidos_cliente = res[0].apellidos_cliente;
          this.reparacion.telefono_cliente = res[0].telefono_cliente;
        },
        err => console.error(err)
      );
    }
  }

  updateReparacion() {
    this.reparacionesService.updateReparacion(this.reparacion.id_reparacion, this.reparacion).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['tarjetas-reparaciones']);
      },
      err => console.log(err)
    );
  }

}
