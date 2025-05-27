import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Usuario } from "./Usuario";
import { MetodoPago } from "./MetodoPago";
import { Subasta } from "./Subasta";

@Entity()
export class Pago {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("decimal")
    monto: number;

    @Column()
    fecha: Date;

    @Column()
    estado: string;

    @ManyToOne(() => Usuario, usuario => usuario.pagos)
    usuario: Usuario;

    @ManyToOne(() => MetodoPago, metodo => metodo.pagos)
    metodoPago: MetodoPago;

    @ManyToOne(() => Subasta, subasta => subasta.pagos)
    subasta: Subasta;
}
