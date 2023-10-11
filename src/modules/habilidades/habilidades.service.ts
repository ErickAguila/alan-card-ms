import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HabilidadDto } from './dto/habilidad.dto';
import { Habilidad } from './entities/habilidade.entity';
import { HabilidadMapper } from './mappers/habilidadMapper';

@Injectable()
export class HabilidadesService {
  constructor(
    @InjectRepository(Habilidad)
    private habilidadRepository: Repository<Habilidad>,
    private mapper: HabilidadMapper,
  ) {}

  async create(createHabilidadeDto: HabilidadDto) {
    const habilidadEntity = this.mapper.dtoToEntity(createHabilidadeDto);
    const habilidad = await this.habilidadRepository.save(habilidadEntity);
    createHabilidadeDto.idHabilidad = habilidad.idHabilidad;
    return createHabilidadeDto;
  }

  async findAll() {
    const habilidades = await this.habilidadRepository.find();
    return habilidades.map((item) => this.mapper.entityToDto(item));
  }

  async findOne(id: number) {
    const habilidad = await this.habilidadRepository.findOneBy({
      idHabilidad: id,
    });
    if (!habilidad) throw new NotFoundException('Habilidad no existe');
    return this.mapper.entityToDto(habilidad);
  }

  async update(id: number, updateHabilidadeDto: HabilidadDto) {
    const habilidad = await this.habilidadRepository.findOneBy({
      idHabilidad: id,
    });
    if (!habilidad) throw new NotFoundException('Habilidad no existe');
    const actualizar = Object.assign(habilidad, updateHabilidadeDto);
    return await this.habilidadRepository.save(actualizar);
  }

  async remove(id: number) {
    const habilidad = await this.habilidadRepository.findOneBy({
      idHabilidad: id,
    });
    if (!habilidad) throw new NotFoundException('Habilidad no existe');
    return await this.habilidadRepository.delete(id);
  }
}
