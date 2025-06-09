import { Usuario } from '../entities/Usuario';

export interface UsuarioRepository {
  crear(usuario: Usuario): Promise<Usuario>;
  buscarPorId(id: string): Promise<Usuario | null>;
  listar(): Promise<Usuario[]>;
}
