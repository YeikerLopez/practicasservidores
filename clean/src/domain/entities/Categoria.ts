import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany
} from 'typeorm';
import { Flashcard } from './Flashcard';
import { SesionEstudio } from './SesionEstudio';

@Entity('categorias')
export class Categoria {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  nombre: string;

  @Column('text')
  descripcion: string;

  @ManyToMany(() => Flashcard, flashcard => flashcard.categorias)
  flashcards: Flashcard[];

  @OneToMany(() => SesionEstudio, sesion => sesion.categoria_estudiada)
  sesiones: SesionEstudio[];
}
