import { IPago } from "../interfaces/IPago";

export const pagos: IPago[] = [
  {
    idPago: 1,
    idUsuario: 101,
    idSubasta: 201,
    monto: 100.50,
    metodo: "Tarjeta de Crédito",
    estado: "Completado",
  },
  {
    idPago: 2,
    idUsuario: 102,
    idSubasta: 202,
    monto: 75.00,
    metodo: "PayPal",
    estado: "Pendiente",
  },
];
