import { Component, OnInit, PipeTransform } from '@angular/core';

import { Router } from '@angular/router'

import { Reparacion } from './../../models/Reparacion';
//Importación del servicio para usarlo en el componente
import { ReparacionesService } from '../../services/reparaciones.service';

@Component({
  selector: 'app-tarjetas-reparaciones',
  templateUrl: './tarjetas-reparaciones.component.html',
  styleUrls: ['./tarjetas-reparaciones.component.css'],
})
export class TarjetasReparacionesComponent implements OnInit {

  //listReparaciones: Reparacion[] = []
  listReparacionesActivas: Reparacion[] = []
  numReparacionesActivas: number = 0;
  filtroReparaciones: string = '';

  page = 1;
  pageSize = 4;

  constructor(private reparacionesService: ReparacionesService, private router: Router) {}

  ngOnInit() {
    this.getReparacionesActivas();
  }

  getReparacionesActivas() {
    this.reparacionesService.getReparaciones().subscribe(
      (res) => {
        for(let rep of res){
          if(!rep.reparacion_finalizada){
            this.listReparacionesActivas.unshift(rep)
            this.numReparacionesActivas += 1;
          }
        }
        //this.listReparaciones = res;
      },
      (err) => console.error(err)
    );
  }

  deleteReparacion(id: number) {
    this.reparacionesService.deleteReparacion(id).subscribe(
      (res) => {
        console.log(res);
        this.reloadComponent();
      },
      (err) => console.log(err)
    );
  }

  finalizarReparacionExitosa(id: number) {
    for(let rep of this.listReparacionesActivas){
      if(id == rep.id_reparacion){
        rep.reparacion_finalizada = 1;
        rep.reparacion_exitosa = 1;
        this.reparacionesService.updateReparacion(id, rep).subscribe(
          res => {
            console.log(res);
            this.reloadComponent();
          },
          err => console.log(err)
        );
      }
    }
  }

  finalizarReparacionNoExitosa(id: number) {
    for(let rep of this.listReparacionesActivas){
      if(id == rep.id_reparacion){
        rep.reparacion_finalizada = 1;
        rep.reparacion_exitosa = 0;
        this.reparacionesService.updateReparacion(id, rep).subscribe(
          res => {
            console.log(res);
            this.reloadComponent();
          },
          err => console.log(err)
        );
      }
    }
  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
  }

}


