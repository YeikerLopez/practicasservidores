import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Pago } from "./Pago";
import { Subasta } from "./Subasta";

@Entity()
export class Transaccion {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Pago)
    pago: Pago;

    @ManyToOne(() => Subasta)
    subasta: Subasta;

    @Column("decimal")
    monto: number;

    @Column()
    estado: string;

    @Column()
    fecha: Date;

    @Column({ nullable: true })
    alertas: string;
}
