"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PagoService_1 = require("./services/PagoService");
const pagoService = new PagoService_1.PagoService();
// Se craen metodos de pagosh
const metodo1 = {
    idMetodoPago: 1,
    metodoPago: 'Tarjeta de Crédito',
    estado: 'Activo',
    detalles: 'Visa',
    descripcion: 'Pago con tarjeta de crédito Visa'
};
const metodo2 = {
    idMetodoPago: 2,
    metodoPago: 'PayPal',
    estado: 'Activo',
    detalles: 'Cuenta personal',
    descripcion: 'Pago con PayPal'
};
// Se agregan los metodos
pagoService.agregarMetodoPago(metodo1);
pagoService.agregarMetodoPago(metodo2);
// El usuario
const usuario = {
    idUsuario: 1,
    nombre: 'Juan Pérez',
    correoElectronico: 'juanperez@example.com',
    historialSubasta: [101, 102]
};
// Se crea un pago
const pago1 = {
    idPago: 1,
    monto: 150.75,
    fecha: new Date(),
    estado: 'Pendiente',
    idUsuario: usuario.idUsuario,
    metodoPago: 'Tarjeta de Crédito',
    idSubasta: 101
};
pagoService.crearPago(pago1);
// Obtener pagos de un usuario
const pagosDeJuan = pagoService.obtenerPagosDeUsuario(usuario.idUsuario);
console.log('Pagos de Juan Pérez:', pagosDeJuan);
// se ven los métodos de pago disponibles
console.log('Métodos de pago disponibles:', pagoService.obtenerMetodosPago());
