import { IPago } from "../interfaces/IPago";
import { pagos } from "../data/pagos.Data";

// Función para crear un nuevo pago
export function crearPago(pago: IPago): void {
  pagos.push(pago);
  console.log("Pago registrado:", pago);
}

// Función para mostrar todos los pagos
export function mostrarPagos(): void {
  pagos.forEach(p => {
    console.log(`Pago #${p.idPago} de $${p.monto} usando ${p.metodo} - Estado: ${p.estado}`);
  });
}

// Función con spread
export function combinarPagos(...nuevosPagos: IPago[]): IPago[] {
  return [...pagos, ...nuevosPagos];
}

// Callback
export function procesarPago(pago: IPago, callback: (p: IPago) => void): void {
  callback(pago);
}

// Promise simulada
export function confirmarPago(pago: IPago): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Pago #${pago.idPago} confirmado exitosamente.`);
    }, 1500);
  });
}

// Async/Await
export async function ejecutarConfirmacion(pago: IPago): Promise<void> {
  const resultado = await confirmarPago(pago);
  console.log(resultado);
}
