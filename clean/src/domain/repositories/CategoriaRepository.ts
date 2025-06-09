import { Categoria } from '../entities/Categoria';

export interface CategoriaRepository {
  crear(categoria: Categoria): Promise<Categoria>;
  listar(): Promise<Categoria[]>;
}
