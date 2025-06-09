import { Usuario } from '../models/Usuario';
import { Pago } from '../models/Pago';
import { MetodoPago } from '../models/MetodoPago';

export class PagoService {
  private usuarios: Usuario[] = [];
  private pagos: Pago[] = [];
  private metodosPago: MetodoPago[] = [];


  crearPago(pago: Pago): void {
    this.pagos.push(pago);
  }

  obtenerPagosDeUsuario(idUsuario: number): Pago[] {
    return this.pagos.filter(pago => pago.idUsuario === idUsuario);
  }

  agregarMetodoPago(metodoPago: MetodoPago): void {
    this.metodosPago.push(metodoPago);
  }

  obtenerMetodosPago(): MetodoPago[] {
    return this.metodosPago;
  }
}
