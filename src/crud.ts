import { pago } from "./models/pago";
import { subasta } from "./models/subasta";
import { AppDataSource } from "./data-source";

export const insertarSubasta = async (titulo: string, descripcion: string) => {
    const sub = new subasta();
    sub.titulo = titulo;
    sub.descripcion = descripcion;
    return await AppDataSource.manager.save(sub);
};

export const insertarPago = async (monto: number, metodo: string, fecha: string, subastaId: number) => {
    const sub = await AppDataSource.manager.findOne(subasta, { where: { id: subastaId } });
    if (sub) {
        const pago1 = new pago();
        pago1.monto = monto;
        pago1.metodoPago = metodo;
        pago1.fechaPago = new Date(fecha);
        pago1.subasta = sub;
        return await AppDataSource.manager.save(pago1);
    }
    return null;
};

export const consultarPagos = async () => {
    return await AppDataSource.manager.find(pago, { relations: ["subasta"] });
};

export const eliminarPago = async (id: number) => {
    const pago1 = await AppDataSource.manager.findOne(pago, { where: { id } });
    if (pago1) {
        return await AppDataSource.manager.remove(pago1);
    }
    return null;
};
