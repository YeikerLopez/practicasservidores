<<<<<<< HEAD
import {user} from "./models/user";
import "reflect-metadata";
import {DataSource} from "typeorm";
import {view} from "./models/view";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    logging: true,
    entities: [user, view],
    migrations: [],
    subscribers: [],  
    }
)
=======
import "reflect-metadata";
import { DataSource } from "typeorm";
import { pago } from "./models/pago";
import { subasta } from "./models/subasta";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234567890", // <-- reemplaza si es necesario
    database: "practicasemana4", // <-- asegúrate que exista esta base de datos
    synchronize: true,
    logging: true,
    entities: [subasta, pago],
    migrations: [],
    subscribers: [],
});

>>>>>>> aefb01e (practica semana 4 modulo de pagos)
