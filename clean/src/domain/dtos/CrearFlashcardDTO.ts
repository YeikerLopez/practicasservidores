import { Usuario } from '../../domain/entities/Usuario';
import { Categoria } from '../../domain/entities/Categoria';

export interface CrearFlashcardDTO {
  pregunta: string;
  respuesta: string;
  imagen?: string;
  usuario: Usuario;
  categorias: Categoria[];
}
