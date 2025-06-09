import { Flashcard } from '../../entities/Flashcard';
import { FlashcardRepository } from '../../repositories/flashcard.repository';

export class GetAllFlashcards {
    constructor(private readonly repository: FlashcardRepository) {}

    async execute(): Promise<Flashcard[]> {
        return this.repository.findAll();
    }
}
