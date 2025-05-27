import { PagoService } from './services/PagoService';
import { Usuario } from './models/Usuario';
import { MetodoPago } from './models/MetodoPago';
import { Pago } from './models/Pago';

const pagoService = new PagoService();

// Se craen metodos de pagosh
const metodo1: MetodoPago = {
  idMetodoPago: 1,
  metodoPago: 'Tarjeta de Crédito',
  estado: 'Activo',
  detalles: 'Visa',
  descripcion: 'Pago con tarjeta de crédito Visa'
};

const metodo2: MetodoPago = {
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
const usuario: Usuario = {
  idUsuario: 1,
  nombre: 'Juan Pérez',
  correoElectronico: 'juanperez@example.com',
  historialSubasta: [101, 102]
};

// Se crea un pago
const pago1: Pago = {
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
