import { Component, OnInit } from '@angular/core';

import { Reparacion } from './../../models/Reparacion';

import { ReparacionesService } from '../../services/reparaciones.service';

import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-tabla-reparaciones',
  templateUrl: './tabla-reparaciones.component.html',
  styleUrls: ['./tabla-reparaciones.component.css'],
})
export class TablaReparacionesComponent implements OnInit {

  listReparaciones: Reparacion[] = [];
  numReparacionesActivas: number = 0;

  filtroReparaciones = '';

  page = 1;
  pageSize = 10;

  constructor(private reparacionesService: ReparacionesService) {}

  ngOnInit() {
    this.getReparacionesActivas();
    this.getNumReparaciones();
  }

  getReparacionesActivas() {
    this.reparacionesService.getReparaciones().subscribe(
      (res) => {
        for(let rep of res){
          if(!rep.reparacion_finalizada){
            this.listReparaciones.push(rep)
          }
        }
      },
      (err) => console.error(err)
    );
  }

  getNumReparaciones(){
    this.reparacionesService.getReparaciones().subscribe(
      (res) => {
        for(let rep of res){
          if(!rep.reparacion_finalizada){
            this.numReparacionesActivas += 1;
          }
        }
      },
      (err) => console.error(err)
    );
  }

  imprimirTabla() {
    const options = {
      filename: 'tabla_reparaciones.pdf',
      image: { type: 'jpeg' },
      html2canvas: {},
      jsPDF: { orientation: 'landscape' },
    };

    const content = document.getElementById('tabla-reparaciones');

    html2pdf()
    .from(content)
    .set(options)
    .save();
  }
}
