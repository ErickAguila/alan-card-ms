import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CartaDto {
  @ApiProperty()
  idCarta?: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @ApiProperty()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @ApiProperty()
  edicion: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @ApiProperty()
  codigoSerie: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @ApiProperty()
  numeroCarta: string;

  @Min(1)
  @IsNumber()
  @ApiProperty()
  precio: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(1000)
  @ApiProperty()
  imagen: string;

  @Min(1)
  @IsNumber()
  @ApiProperty()
  cantidadEstrellas: number;

  @Min(1)
  @IsNumber()
  @ApiProperty()
  idTipoCarta: number;

  @Min(1)
  @IsNumber()
  @ApiProperty()
  idHabilidad: number;
}
