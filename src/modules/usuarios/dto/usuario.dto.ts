import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class UsuarioDto {
  @ApiProperty()
  idUsuario: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @ApiProperty()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @ApiProperty()
  apellido: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @ApiProperty()
  clave: string;

  @IsNumber()
  @Min(1)
  @ApiProperty()
  idTipoUsuario: number;
}
