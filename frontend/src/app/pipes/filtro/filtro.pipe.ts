import { Pipe, PipeTransform } from '@angular/core';
import { Reparacion } from './../../models/Reparacion';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(listReparaciones: Reparacion[], filtroReparaciones: string): Reparacion[] {
    if(!listReparaciones || !filtroReparaciones){
      return listReparaciones;
    }

    return listReparaciones.filter(rep =>
      rep.tipo.toLowerCase().indexOf(filtroReparaciones.toLowerCase()) !== -1 ||
      rep.modelo.toLowerCase().indexOf(filtroReparaciones.toLowerCase()) !== -1 ||
      rep.numero_serie.toLowerCase().indexOf(filtroReparaciones.toLowerCase()) !== -1 ||
      rep.descripcion.toLowerCase().indexOf(filtroReparaciones.toLowerCase()) !== -1);

  }

}
