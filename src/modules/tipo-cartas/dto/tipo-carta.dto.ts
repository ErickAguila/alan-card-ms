import { ApiProperty } from '@nestjs/swagger';

export class TipoCartaDto {
  @ApiProperty()
  idTipoCarta?: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  descripcion: string;
}
