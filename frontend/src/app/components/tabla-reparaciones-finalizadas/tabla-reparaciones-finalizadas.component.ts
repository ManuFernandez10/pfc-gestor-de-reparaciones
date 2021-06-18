import { Component, OnInit } from '@angular/core';
import { Reparacion } from './../../models/Reparacion';
import { ReparacionesService } from '../../services/reparaciones.service';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-tabla-reparaciones-finalizadas',
  templateUrl: './tabla-reparaciones-finalizadas.component.html',
  styleUrls: ['./tabla-reparaciones-finalizadas.component.css']
})
export class TablaReparacionesFinalizadasComponent implements OnInit {
  numReparacionesFinalizadas: number = 0;
  listReparacionesFinalizadas: Reparacion[] = [];

  filtroReparaciones = '';

  page = 1;
  pageSize = 10;

  constructor(private reparacionesService: ReparacionesService) { }

  ngOnInit() {
    this.getReparacionesFinalizadas();
    this.getNumReparacionesFinalizadas();
  }

  getReparacionesFinalizadas() {
    this.reparacionesService.getReparaciones().subscribe(
      (res) => {
        for(let rep of res){
          if(rep.reparacion_finalizada){
            this.listReparacionesFinalizadas.push(rep)
          }
        }
      },
      (err) => console.error(err)
    );
  }

  getNumReparacionesFinalizadas(){
    this.reparacionesService.getReparaciones().subscribe(
      (res) => {
        for(let rep of res){
          if(rep.reparacion_finalizada){
            this.numReparacionesFinalizadas += 1;
          }
        }
      },
      (err) => console.error(err)
    );
  }

  imprimirTabla() {
    const options = {
      filename: 'tabla_reparaciones_finalizadas.pdf',
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
