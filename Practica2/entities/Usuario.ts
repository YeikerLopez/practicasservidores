import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pago } from "./Pago";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    correo: string;

    @Column()
    metodoPagoPreferido: string;

    @OneToMany(() => Pago, pago => pago.usuario)
    pagos: Pago[];
}
