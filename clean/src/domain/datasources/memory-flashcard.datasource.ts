import { Flashcard } from '../entities/Flashcard';

let nextFlashcardId = 1;


const flashcards: Flashcard[] = [];


export const memoryFlashcardDatasource = {
    findAll: async (): Promise<Flashcard[]> => {
        return Promise.resolve([...flashcards]); 
    },
    save: async (flashcardData: Omit<Flashcard, 'id' | 'createdAt' | 'updatedAt'>): Promise<Flashcard> => {
 
        const newFlashcard: Flashcard = {
            id: nextFlashcardId++,         
            ...flashcardData,              
            createdAt: new Date(),          
            updatedAt: new Date(),          
        };
     
        flashcards.push(newFlashcard);
 
        return Promise.resolve(newFlashcard);
    },

};
