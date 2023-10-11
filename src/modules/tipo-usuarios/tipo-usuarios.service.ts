import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoUsuarioDto } from './dto/tipo-usuario.dto';
import { TipoUsuario } from './entities/tipo-usuario.entity';
import { TipoUsuarioMapper } from './mappers/tipoUsuarioMapper';

@Injectable()
export class TipoUsuariosService {
  constructor(
    @InjectRepository(TipoUsuario)
    private tipoUsuarioRepository: Repository<TipoUsuario>,
    private mapper: TipoUsuarioMapper,
  ) {}

  async create(createTipoUsuarioDto: TipoUsuarioDto) {
    const tipoUsurioEntity = this.mapper.dtoToEntity(createTipoUsuarioDto);
    const tipoUsuario = await this.tipoUsuarioRepository.save(tipoUsurioEntity);
    createTipoUsuarioDto.idTipoUsuario = tipoUsuario.idTipoUsuario;
    return createTipoUsuarioDto;
  }

  async findAll() {
    const tipoUsuarios = await this.tipoUsuarioRepository.find();
    return tipoUsuarios.map((item) => this.mapper.entityToDto(item));
  }

  async findOne(id: number) {
    const tipoUsuario = await this.tipoUsuarioRepository.findOneBy({
      idTipoUsuario: id,
    });
    if (!tipoUsuario) throw new NotFoundException('Tipo usuario no existe');
    return this.mapper.entityToDto(tipoUsuario);
  }

  async update(id: number, updateTipoUsuarioDto: TipoUsuarioDto) {
    const tipoUsuario = await this.tipoUsuarioRepository.findOneBy({
      idTipoUsuario: id,
    });
    if (!tipoUsuario) throw new NotFoundException('Tipo usuario no existe');
    const actualizarTipoUsuario = Object.assign(
      tipoUsuario,
      updateTipoUsuarioDto,
    );
    return await this.tipoUsuarioRepository.save(actualizarTipoUsuario);
  }

  async remove(id: number) {
    const tipoUsuario = await this.tipoUsuarioRepository.findOneBy({
      idTipoUsuario: id,
    });
    if (!tipoUsuario) throw new NotFoundException('Tipo usuario no existe');
    return await this.tipoUsuarioRepository.delete(id);
  }
}
