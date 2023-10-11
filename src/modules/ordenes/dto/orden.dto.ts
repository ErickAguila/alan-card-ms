import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class OrdenDto {
  @ApiProperty()
  idOrden: number;

  @IsNumber()
  @Min(1)
  @ApiProperty()
  idCarta: number;

  @IsNumber()
  @Min(1)
  @ApiProperty()
  idUsuario: number;

  @IsNumber()
  @Min(1)
  @ApiProperty()
  total: number;
}
