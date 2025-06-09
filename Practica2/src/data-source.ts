import { DataSource } from "typeorm";
import { Usuario } from "../Practica semana 3/entities/Usuario";
import { MetodoPago } from "../Practica semana 3/entities/MetodoPago";
import { Pago } from "../Practica semana 3/entities/Pago";
import { Transaccion } from "../Practica semana 3/entities/Transaccion";
import { Factura } from "../Practica semana 3/entities/Factura";
import { Subasta } from "../Practica semana 3/entities/Subasta";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgrest",
    password: "1234567890",
    database: "subastas",
    synchronize: true,
    logging: true,
    entities: [Usuario, MetodoPago, Pago, Transaccion, Factura, Subasta],
    migrations: [],
    subscribers: [],
});
