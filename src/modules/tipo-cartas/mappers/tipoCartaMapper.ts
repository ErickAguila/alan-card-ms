import { Injectable } from '@nestjs/common';
import { TipoCartaDto } from '../dto/tipo-carta.dto';
import { TipoCarta } from '../entities/tipo-carta.entity';

@Injectable()
export class TipoCartaMapper {
  dtoToEntity(tipoCartaDto: TipoCartaDto): TipoCarta {
    const tipoCartaEntity: TipoCarta = {
      idTipoCarta: tipoCartaDto.idTipoCarta,
      nombre: tipoCartaDto.nombre,
      descripcion: tipoCartaDto.descripcion,
    };
    return tipoCartaEntity;
  }

  entityToDto(tipoCartaEntity: TipoCarta): TipoCartaDto {
    const tipoCartaDto: TipoCartaDto = {
      idTipoCarta: tipoCartaEntity.idTipoCarta,
      nombre: tipoCartaEntity.nombre,
      descripcion: tipoCartaEntity.descripcion,
    };
    return tipoCartaDto;
  }
}
