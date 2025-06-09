import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  Column
} from 'typeorm';
import { Usuario } from './Usuario';
import { Categoria } from './Categoria';
import { InteraccionFlashcard } from './InteraccionFlashcard';

@Entity('sesiones_estudio')
export class SesionEstudio {
  @PrimaryGeneratedColumn('uuid')
  sesion_id: string;

  @ManyToOne(() => Usuario, usuario => usuario.sesiones)
  usuario: Usuario;

  @ManyToOne(() => Categoria, categoria => categoria.sesiones)
  categoria_estudiada: Categoria;

  @OneToMany(() => InteraccionFlashcard, interaccion => interaccion.sesion)
  interacciones: InteraccionFlashcard[];
}
