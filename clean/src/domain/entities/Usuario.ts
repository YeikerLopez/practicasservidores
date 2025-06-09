import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany
} from 'typeorm';
import { Flashcard } from './Flashcard';
import { SesionEstudio } from './SesionEstudio';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  nombre: string;

  @OneToMany(() => Flashcard, flashcard => flashcard.usuario)
  flashcards: Flashcard[];

  @OneToMany(() => SesionEstudio, sesion => sesion.usuario)
  sesiones: SesionEstudio[];
}
