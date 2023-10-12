import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioDto } from './dto/usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { UsuarioMapper } from './mappers/usuarioMapper';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private mapper: UsuarioMapper,
  ) {}

  async create(createUsuarioDto: UsuarioDto) {
    createUsuarioDto.clave = await bcrypt.hash(createUsuarioDto.clave, 10);
    const usuarioEntity = this.mapper.dtoToEntity(createUsuarioDto);
    const usuario = await this.usuarioRepository.save(usuarioEntity);
    createUsuarioDto.idUsuario = usuario.idUsuario;
    return createUsuarioDto;
  }

  async findAll() {
    const usuarios = await this.usuarioRepository.find();
    return usuarios.map((item) => this.mapper.entityToDto(item));
  }

  async findOne(id: number) {
    const usuario = await this.usuarioRepository.findOneBy({
      idUsuario: id,
    });
    if (!usuario) throw new NotFoundException('Usuario no existe');
    return this.mapper.entityToDto(usuario);
  }

  async update(id: number, updateUsuarioDto: UsuarioDto) {
    const usuario = await this.usuarioRepository.findOneBy({
      idUsuario: id,
    });
    if (!usuario) throw new NotFoundException('Usuario no existe');
    const actualizar = Object.assign(usuario, updateUsuarioDto);
    return await this.usuarioRepository.save(actualizar);
  }

  async remove(id: number) {
    const usuario = await this.usuarioRepository.findOneBy({
      idUsuario: id,
    });
    if (!usuario) throw new NotFoundException('Usuario no existe');
    return await this.usuarioRepository.delete(id);
  }

  async findByEmail(email: string) {
    return await this.usuarioRepository.findOneBy({
      email: email,
    });
  }
}
