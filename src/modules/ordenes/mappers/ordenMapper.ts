import { Injectable } from '@nestjs/common';
import { OrdenDto } from '../dto/orden.dto';
import { Orden } from '../entities/orden.entity';

@Injectable()
export class OrdenMapper {
  dtoToEntity(ordenDto: OrdenDto): Orden {
    const ordenEntity: Orden = {
      idOrden: ordenDto.idOrden,
      idCarta: ordenDto.idCarta,
      idUsuario: ordenDto.idUsuario,
      total: ordenDto.total,
    };
    return ordenEntity;
  }

  entityToDto(ordenEntity: Orden): OrdenDto {
    const ordenDto: OrdenDto = {
      idOrden: ordenEntity.idOrden,
      idCarta: ordenEntity.idCarta,
      idUsuario: ordenEntity.idUsuario,
      total: ordenEntity.total,
    };
    return ordenDto;
  }
}
