import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { Usuario } from "../Practica semana 3/entities/Usuario";

AppDataSource.initialize().then(async () => {
    console.log("Conexión establecida con PostgreSQL");

    const usuarioRepo = AppDataSource.getRepository(Usuario);
    const nuevoUsuario = usuarioRepo.create({
        nombre: "Juan Pérez",
        correo: "juan@perez.com",
        metodoPagoPreferido: "Tarjeta"
    });
    await usuarioRepo.save(nuevoUsuario);

    console.log("Usuario guardado:", nuevoUsuario);
}).catch(error => console.log("Error al conectar:", error));
