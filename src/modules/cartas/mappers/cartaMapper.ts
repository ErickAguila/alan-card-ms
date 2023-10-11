import { Injectable } from '@nestjs/common';
import { CartaDto } from '../dto/carta.dto';
import { Carta } from '../entities/carta.entity';

@Injectable()
export class CartaMapper {
  dtoToEntity(cartaDto: CartaDto): Carta {
    const carta: Carta = {
      idCarta: cartaDto.idCarta,
      nombre: cartaDto.nombre,
      edicion: cartaDto.edicion,
      codigoSerie: cartaDto.codigoSerie,
      numeroCarta: cartaDto.numeroCarta,
      precio: cartaDto.precio,
      imagen: cartaDto.imagen,
      cantidadEstrellas: cartaDto.cantidadEstrellas,
      idTipoCarta: cartaDto.idTipoCarta,
      idHabilidad: cartaDto.idHabilidad,
    };
    return carta;
  }

  entityToDto(carta: Carta): CartaDto {
    const cartaDto: CartaDto = {
      idCarta: carta.idCarta,
      nombre: carta.nombre,
      edicion: carta.edicion,
      codigoSerie: carta.codigoSerie,
      numeroCarta: carta.numeroCarta,
      precio: carta.precio,
      imagen: carta.imagen,
      cantidadEstrellas: carta.cantidadEstrellas,
      idTipoCarta: carta.idTipoCarta,
      idHabilidad: carta.idHabilidad,
    };
    return cartaDto;
  }
}
