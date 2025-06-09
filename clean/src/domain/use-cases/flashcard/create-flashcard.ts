import { Flashcard } from '../../entities/Flashcard';
import { FlashcardRepository } from '../../repositories/flashcard.repository';

export class CreateFlashcard {
    constructor(private readonly repository: FlashcardRepository) {}

    async execute(flashcardData: Omit<Flashcard, 'id' | 'createdAt' | 'updatedAt'>): Promise<Flashcard> {

        if (!flashcardData.pregunta || flashcardData.pregunta.trim() === '') {
            throw new Error('La pregunta de la flashcard no puede estar vacía.');
        }

        if (!flashcardData.respuesta || flashcardData.respuesta.trim() === '') {
            throw new Error('La respuesta de la flashcard no puede estar vacía.');
        }

        if (flashcardData.usuario_id === undefined || flashcardData.usuario_id === null) {
            throw new Error('La flashcard debe tener un usuario asociado (usuario_id es requerido).');
        }

        return this.repository.save(flashcardData);
    }
}
