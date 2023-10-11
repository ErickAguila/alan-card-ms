import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class TipoUsuarioDto {
  @ApiProperty()
  idTipoUsuario: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @ApiProperty()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @ApiProperty()
  descripcion: string;
}
