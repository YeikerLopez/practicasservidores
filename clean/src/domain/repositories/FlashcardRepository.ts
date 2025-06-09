import { Flashcard } from '../entities/Flashcard';

export interface FlashcardRepository {
  crear(flashcard: Flashcard): Promise<Flashcard>;
  actualizar(flashcard: Flashcard): Promise<Flashcard>;
  eliminar(id: string): Promise<void>;
  buscarPorId(id: string): Promise<Flashcard | null>;
  listar(): Promise<Flashcard[]>;
}

