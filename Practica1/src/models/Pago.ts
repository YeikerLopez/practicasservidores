export interface Pago {
  idPago: number;
  monto: number;
  fecha: Date;
  estado: string;
  idUsuario: number;
  metodoPago: string;
  idSubasta: number;
}
