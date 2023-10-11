import { ApiProperty } from '@nestjs/swagger';

export class TipoUsuarioDto {
  @ApiProperty()
  idTipoUsuario: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  descripcion: string;
}
