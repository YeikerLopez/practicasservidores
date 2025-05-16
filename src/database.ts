<<<<<<< HEAD
import {AppDataSource} from "./data-source"
=======
import { AppDataSource } from "./data-source";
>>>>>>> aefb01e (practica semana 4 modulo de pagos)
import 'reflect-metadata';

export const initDatabase = async () => {
    try {
<<<<<<< HEAD
        // await AppDataSource.initialize();
=======
>>>>>>> aefb01e (practica semana 4 modulo de pagos)
        await AppDataSource.initialize();
        console.log("Database initialized successfully.");
        return AppDataSource;
    } catch (ex) {
        console.error("Error initializing database:", ex);
<<<<<<< HEAD
        throw ex; // Rethrow the error to be handled by the caller
=======
        throw ex;
>>>>>>> aefb01e (practica semana 4 modulo de pagos)
    }
}
