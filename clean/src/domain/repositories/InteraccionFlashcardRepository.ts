import { InteraccionFlashcard } from '../entities/InteraccionFlashcard';

export interface InteraccionFlashcardRepository {
  crear(interaccion: InteraccionFlashcard): Promise<InteraccionFlashcard>;
  listarPorSesion(sesionId: string): Promise<InteraccionFlashcard[]>;
}
