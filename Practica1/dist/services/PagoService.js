"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagoService = void 0;
class PagoService {
    constructor() {
        this.usuarios = [];
        this.pagos = [];
        this.metodosPago = [];
    }
    crearPago(pago) {
        this.pagos.push(pago);
    }
    obtenerPagosDeUsuario(idUsuario) {
        return this.pagos.filter(pago => pago.idUsuario === idUsuario);
    }
    agregarMetodoPago(metodoPago) {
        this.metodosPago.push(metodoPago);
    }
    obtenerMetodosPago() {
        return this.metodosPago;
    }
}
exports.PagoService = PagoService;
