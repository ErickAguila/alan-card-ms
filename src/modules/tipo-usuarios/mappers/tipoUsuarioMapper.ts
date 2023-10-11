import { Injectable } from '@nestjs/common';
import { TipoUsuarioDto } from '../dto/tipo-usuario.dto';
import { TipoUsuario } from '../entities/tipo-usuario.entity';

@Injectable()
export class TipoUsuarioMapper {
  dtoToEntity(tipoUsuarioDto: TipoUsuarioDto): TipoUsuario {
    const tipoUsuarioEntity: TipoUsuario = {
      idTipoUsuario: tipoUsuarioDto.idTipoUsuario,
      nombre: tipoUsuarioDto.nombre,
      descripcion: tipoUsuarioDto.descripcion,
    };
    return tipoUsuarioEntity;
  }

  entityToDto(tipoUsuarioEntity: TipoUsuario): TipoUsuarioDto {
    const tipoUsuarioDto: TipoUsuarioDto = {
      idTipoUsuario: tipoUsuarioEntity.idTipoUsuario,
      nombre: tipoUsuarioEntity.nombre,
      descripcion: tipoUsuarioEntity.descripcion,
    };
    return tipoUsuarioDto;
  }
}
