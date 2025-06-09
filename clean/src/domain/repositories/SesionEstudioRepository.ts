import { SesionEstudio } from '../entities/SesionEstudio';

export interface SesionEstudioRepository {
  crear(sesion: SesionEstudio): Promise<SesionEstudio>;
  buscarPorUsuario(usuarioId: string): Promise<SesionEstudio[]>;
}
