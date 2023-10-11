import { ApiProperty } from '@nestjs/swagger';

export class HabilidadDto {
  @ApiProperty()
  idHabilidad?: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  descripcion: string;
}
