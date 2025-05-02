import { crearPago, mostrarPagos, procesarPago, ejecutarConfirmacion } from "./functions/pagoFunctions";
import { IPago } from "./interfaces/IPago";

const nuevoPago: IPago = {
  idPago: 3,
  idUsuario: 103,
  idSubasta: 203,
  monto: 120.00,
  metodo: "Transferencia",
  estado: "Pendiente",
};

crearPago(nuevoPago);
mostrarPagos();

procesarPago(nuevoPago, (p) => {
  console.log("Procesando pago con callback:", p.metodo);
});

ejecutarConfirmacion(nuevoPago);
