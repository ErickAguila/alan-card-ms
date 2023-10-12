import { IsEmail, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginAuthDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @MinLength(4)
  @MaxLength(12)
  @ApiProperty()
  password: string;
}
