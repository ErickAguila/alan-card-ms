import { ApiProperty } from '@nestjs/swagger';

export class CartaDto {
  @ApiProperty()
  idCarta?: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  edicion: string;

  @ApiProperty()
  codigoSerie: string;

  @ApiProperty()
  numeroCarta: string;

  @ApiProperty()
  precio: number;

  @ApiProperty()
  imagen: string;

  @ApiProperty()
  cantidadEstrellas: number;

  @ApiProperty()
  idTipoCarta: number;

  @ApiProperty()
  idHabilidad: number;
}
