import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pago } from "./Pago";

@Entity()
export class Subasta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;

    @Column()
    fechaInicio: Date;

    @Column()
    fechaFin: Date;

    @Column()
    idUsuario: number;

    @OneToMany(() => Pago, pago => pago.subasta)
    pagos: Pago[];
}
