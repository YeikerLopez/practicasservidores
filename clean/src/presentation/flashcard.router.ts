import { Router, Request, Response } from 'express';
import { FlashcardRepositoryImpl } from '../data/repositories/FlashcardRepositoryImpl.ts';
import { GetAllFlashcards } from '../domain/use-cases/flashcard/get-all-flashcards';
import { CreateFlashcard } from '../domain/use-cases/flashcard/create-flashcard';


const flashcardRepository = new FlashcardRepositoryImpl();

const getAllFlashcardsUseCase = new GetAllFlashcards(flashcardRepository);
const createFlashcardUseCase = new CreateFlashcard(flashcardRepository);

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const flashcards = await getAllFlashcardsUseCase.execute();
        return res.status(200).json(flashcards);
    } catch (error: any) {
        console.error('Error al obtener flashcards:', error);
        return res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
});


router.post('/', async (req: Request, res: Response) => {
    try {

        const { pregunta, respuesta, imagen, usuario_id } = req.body;

        const newFlashcard = await createFlashcardUseCase.execute({
            pregunta,
            respuesta,
            imagen,
            usuario_id: parseInt(usuario_id, 10)
        });

        return res.status(201).json(newFlashcard);
    } catch (error: any) {

        console.error('Error al crear flashcard:', error);

        if (error.message.includes('vacía') || error.message.includes('asociado')) {
            return res.status(400).json({ message: error.message });
        }

        return res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
});

export const flashcardRouter = router;
