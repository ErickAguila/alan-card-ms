import { ApiProperty } from '@nestjs/swagger';

export class OrdenDto {
  @ApiProperty()
  idOrden: number;

  @ApiProperty()
  idCarta: number;

  @ApiProperty()
  idUsuario: number;

  @ApiProperty()
  total: number;
}
