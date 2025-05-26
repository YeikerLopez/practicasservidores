import "reflect-metadata";
import { DataSource } from "typeorm";
import { pago } from "./models/pago";
import { subasta } from "./models/subasta";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234567890", 
    database: "practicasemana4", 
    synchronize: true,
    logging: true,
    entities: [subasta, pago],
    migrations: [],
    subscribers: [],
});

