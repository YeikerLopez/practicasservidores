<<<<<<< HEAD
import {consult, CrearVista, insertarUser, update, userdelete, viewdelete} from './crud';
import {initDatabase} from './database';
import { ConsulAll } from './crud';
import { view } from './models/view';

async function main() {
    await initDatabase()
    const newUser = await insertarUser("walter"," walterG@gmail.com")
    console.log("Usuario creado",newUser.id)
    const vista = await CrearVista("Vista Reporte De Productos",newUser.id)
    console.log(vista);

    const vistadelete = await viewdelete(vista!.id)
    console.log(vistadelete)

        const users  = await ConsulAll();
    console.log("Consulta general",users);
    const userOne = await consult(newUser.id)
    console.log("Consulta individual",userOne)
    const userUpdated= await update(newUser.id,"Jusan","Trump");
    console.log("Usuario actualizado",userUpdated)
    const userDeleted = await userdelete(newUser.id);
    console.log("usuario eliminado",userDeleted)


}

main()
=======
import { initDatabase } from "./database";
import { insertarSubasta, insertarPago, consultarPagos, eliminarPago } from "./crud";

async function main() {
    await initDatabase();

    const sub = await insertarSubasta("Subasta de Laptop", "Laptop gamer nueva");
    console.log("Subasta creada:", sub);

    const pagoNuevo = await insertarPago(750, "Transferencia", "2025-05-16", sub.id);
    console.log("Pago registrado:", pagoNuevo);

    const pagos = await consultarPagos();
    console.log("Pagos existentes:", pagos);

    if (pagoNuevo) {
        const eliminado = await eliminarPago(pagoNuevo.id);
        console.log("Pago eliminado:", eliminado);
    }
}

main();
>>>>>>> aefb01e (practica semana 4 modulo de pagos)
