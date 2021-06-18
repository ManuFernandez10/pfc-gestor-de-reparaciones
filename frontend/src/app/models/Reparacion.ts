
export interface Reparacion {
  id_reparacion?: number;
  tipo: string;
  modelo: string;
  numero_serie: string;
  fecha_entrada?: Date;
  descripcion: string;
  reparacion_finalizada?: number;
  reparacion_exitosa?: number;
  nombre_cliente: string;
  apellidos_cliente: string;
  telefono_cliente: number;
}
