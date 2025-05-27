import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pago } from "./Pago";

@Entity()
export class MetodoPago {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipo: string;

    @Column()
    descripcion: string;

    @Column()
    estado: string;

    @Column({ nullable: true })
    detalles: string;

    @OneToMany(() => Pago, pago => pago.metodoPago)
    pagos: Pago[];
}
