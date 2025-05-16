import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { pago } from "./pago";

@Entity()
export class subasta {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    titulo!: string;

    @Column()
    descripcion!: string;

    @OneToMany(() => pago, (pago) => pago.subasta)
    pagos!: pago[];
}
