import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { Categoria } from './Categoria';
import { Usuario } from './Usuario';
import { InteraccionFlashcard } from './InteraccionFlashcard';

@Entity('flashcards')
export class Flashcard {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  pregunta: string;

  @Column('text')
  respuesta: string;

  @Column('text', { nullable: true })
  imagen: string;

  @ManyToOne(() => Usuario, usuario => usuario.flashcards)
  usuario: Usuario;

  @ManyToMany(() => Categoria, categoria => categoria.flashcards)
  @JoinTable({
    name: 'flashcard_categorias',
    joinColumn: { name: 'flashcard_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'categoria_id', referencedColumnName: 'id' },
  })
  categorias: Categoria[];

  @OneToMany(() => InteraccionFlashcard, interaccion => interaccion.flashcard)
  interacciones: InteraccionFlashcard[];
}
