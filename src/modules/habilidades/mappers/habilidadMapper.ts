import { Injectable } from '@nestjs/common';
import { HabilidadDto } from '../dto/habilidad.dto';
import { Habilidad } from '../entities/habilidade.entity';

@Injectable()
export class HabilidadMapper {
  dtoToEntity(habilidadDto: HabilidadDto): Habilidad {
    const habilidadEntity: Habilidad = {
      idHabilidad: habilidadDto.idHabilidad,
      nombre: habilidadDto.nombre,
      descripcion: habilidadDto.descripcion,
    };
    return habilidadEntity;
  }

  entityToDto(habilidadEntity: Habilidad): HabilidadDto {
    const habilidadDto: HabilidadDto = {
      idHabilidad: habilidadEntity.idHabilidad,
      nombre: habilidadEntity.nombre,
      descripcion: habilidadEntity.descripcion,
    };
    return habilidadDto;
  }
}
