import { Injectable } from '@nestjs/common';
import { UsuarioDto } from '../dto/usuario.dto';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuarioMapper {
  dtoToEntity(usuarioDto: UsuarioDto): Usuario {
    const usuarioEntity: Usuario = {
      idUsuario: usuarioDto.idUsuario,
      nombre: usuarioDto.nombre,
      apellido: usuarioDto.apellido,
      email: usuarioDto.email,
      clave: usuarioDto.clave,
      idTipoUsuario: usuarioDto.idTipoUsuario,
      fechaCreacion: usuarioDto.fechaCreacion,
    };
    return usuarioEntity;
  }

  entityToDto(usuarioEntity: Usuario): UsuarioDto {
    const usuarioDto: UsuarioDto = {
      idUsuario: usuarioEntity.idUsuario,
      nombre: usuarioEntity.nombre,
      apellido: usuarioEntity.apellido,
      email: usuarioEntity.email,
      clave: usuarioEntity.clave,
      idTipoUsuario: usuarioEntity.idTipoUsuario,
      fechaCreacion: usuarioEntity.fechaCreacion,
    };
    return usuarioDto;
  }
}
