import { HttpException, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UsuariosService } from '../usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usuarioService: UsuariosService) {}

  async login(loginAuthDto: LoginAuthDto) {
    const findUser = await this.usuarioService.findByEmail(loginAuthDto.email);
    if (!findUser) throw new HttpException('USER_NOT_FOUND', 404);

    const checkPassword = bcrypt.compare(loginAuthDto.password, findUser.clave);
    if (!checkPassword) throw new HttpException('PASSWORD_INCORRECT', 403);

    const data = findUser;
    return data;
  }
}
