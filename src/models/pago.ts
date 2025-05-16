import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { subasta } from "./subasta";

@Entity()
export class pago {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("decimal")
    monto!: number;

    @Column()
    metodoPago!: string;

    @Column("date")
    fechaPago!: Date;

    @ManyToOne(() => subasta, (subasta) => subasta.pagos)
    subasta!: subasta;
}
