<<<<<<< HEAD
import {user} from "./models/user";
import {AppDataSource} from './data-source';
import { view } from "./models/view";

export const insertarUser = async (nombre: string, correo: string) => {
    const user1 = new user();
    user1.correo = correo;
    user1.nombre = nombre;
    return await AppDataSource.manager.save((user1))
}
export const ConsulAll = async () => {

    return await AppDataSource.manager.find(user)
}

export const consult = async (id: number) => {

    return await AppDataSource.manager.findOne(user, {where: {id}})
}

export const update = async (id: number, nombre: string, correo: string) => {
    const user2 = await consult(id);
    if (user2){
        user2.correo = correo;
        user2.nombre = nombre;
        return await AppDataSource.manager.save(user2)
    }
    return null
}  

export const userdelete = async (id: number) => {
    const user2 = await consult (id)
    if (user2){
        return await AppDataSource.manager.remove(user2)
    }
    return null
}

export const CrearVista = async (vista: string, userid:number) => {
    const usuario = await consult(userid)
    if (usuario){
        const newview = new view()
        newview.vista = vista
        newview.user = usuario
        return await AppDataSource.manager.save((newview))
    }
    return null
}

export const viewdelete = async (id: number) => {
    const view1 = await AppDataSource.manager.findOne(view,{where:{id}})
    if (view1){
        return await AppDataSource.manager.remove(view1)
    }
    return null
}

=======
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
>>>>>>> aefb01e (practica semana 4 modulo de pagos)
