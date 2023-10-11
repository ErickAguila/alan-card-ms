import { ApiProperty } from '@nestjs/swagger';

export class UsuarioDto {
  @ApiProperty()
  idUsuario: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  apellido: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  clave: string;

  @ApiProperty()
  idTipoUsuario: number;

  @ApiProperty()
  fechaCreacion: string;
}
