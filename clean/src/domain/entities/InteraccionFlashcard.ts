import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from 'typeorm';
import { SesionEstudio } from './SesionEstudio';
import { Flashcard } from './Flashcard';

@Entity('interacciones_flashcard')
export class InteraccionFlashcard {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('boolean', { default: false })
  voltear: boolean;

  @Column('boolean', { default: false })
  siguiente: boolean;

  @Column('boolean', { default: false })
  finalizar: boolean;

  @ManyToOne(() => SesionEstudio, sesion => sesion.interacciones)
  sesion: SesionEstudio;

  @ManyToOne(() => Flashcard, flashcard => flashcard.interacciones)
  flashcard: Flashcard;
}
