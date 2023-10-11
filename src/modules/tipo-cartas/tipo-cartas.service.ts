import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoCartaDto } from './dto/tipo-carta.dto';
import { TipoCarta } from './entities/tipo-carta.entity';
import { TipoCartaMapper } from './mappers/tipoCartaMapper';

@Injectable()
export class TipoCartasService {
  constructor(
    @InjectRepository(TipoCarta)
    private tipoCartaRepository: Repository<TipoCarta>,
    private mapper: TipoCartaMapper,
  ) {}

  async create(tipoCartaDto: TipoCartaDto) {
    const tipoCartaEntity = this.mapper.dtoToEntity(tipoCartaDto);
    const tipoCarta = await this.tipoCartaRepository.save(tipoCartaEntity);
    tipoCartaDto.idTipoCarta = tipoCarta.idTipoCarta;
    return tipoCartaDto;
  }

  async findAll() {
    const tipoCartas = await this.tipoCartaRepository.find();
    return tipoCartas.map((item) => this.mapper.entityToDto(item));
  }

  async findOne(id: number) {
    const tipoCarta = await this.tipoCartaRepository.findOneBy({
      idTipoCarta: id,
    });
    if (!tipoCarta) throw new NotFoundException('Tipo carta no existe');
    return this.mapper.entityToDto(tipoCarta);
  }

  async update(id: number, tipoCartaDto: TipoCartaDto) {
    const tipoCarta = await this.tipoCartaRepository.findOneBy({
      idTipoCarta: id,
    });
    if (!tipoCarta) throw new NotFoundException('Tipo carta no existe');
    const actualizarTipoCarta = Object.assign(tipoCarta, tipoCartaDto);
    return await this.tipoCartaRepository.save(actualizarTipoCarta);
  }

  async remove(id: number) {
    const tipoCarta = await this.tipoCartaRepository.findOneBy({
      idTipoCarta: id,
    });
    if (!tipoCarta) throw new NotFoundException('Tipo carta no existe');
    return await this.tipoCartaRepository.delete(id);
  }
}
