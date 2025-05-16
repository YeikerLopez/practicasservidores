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
