export interface IPago {
  idPago: number;
  idUsuario: number;
  idSubasta: number;
  monto: number;
  metodo: string;
  estado: "Pendiente" | "Completado" | "Fallido";
}
