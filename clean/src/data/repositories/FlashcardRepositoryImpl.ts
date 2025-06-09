import { FlashcardRepository } from '../../domain/repositories/FlashcardRepository';
import { Flashcard } from '../../domain/entities/Flashcard';
import { AppDataSource } from '../config/data-source';
import { Repository } from 'typeorm';

export class FlashcardRepositoryImpl implements FlashcardRepository {
  private readonly repo: Repository<Flashcard>;

  constructor() {
    this.repo = AppDataSource.getRepository(Flashcard);
  }

  async crear(flashcard: Flashcard): Promise<Flashcard> {
    return await this.repo.save(flashcard);
  }

  async actualizar(flashcard: Flashcard): Promise<Flashcard> {
    return await this.repo.save(flashcard);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }

  async buscarPorId(id: string): Promise<Flashcard | null> {
    return await this.repo.findOne({
      where: { id },
      relations: ['categorias', 'usuario']
    });
  }

  async listar(): Promise<Flashcard[]> {
    return await this.repo.find({ relations: ['categorias', 'usuario'] });
  }
}
