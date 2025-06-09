import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Pago } from "./Pago";

@Entity()
export class Factura {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Pago)
    @JoinColumn()
    pago: Pago;

    @Column()
    fechaEmision: Date;

    @Column()
    descripcion: string;

    @Column("decimal")
    montoTotal: number;

    @Column()
    historial: string;
}
