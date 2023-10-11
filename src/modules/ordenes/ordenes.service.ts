import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdenDto } from './dto/orden.dto';
import { Orden } from './entities/orden.entity';
import { OrdenMapper } from './mappers/ordenMapper';

@Injectable()
export class OrdenesService {
  constructor(
    @InjectRepository(Orden)
    private ordenRepository: Repository<Orden>,
    private mapper: OrdenMapper,
  ) {}

  async create(createOrdeneDto: OrdenDto) {
    const ordenEntity = this.mapper.dtoToEntity(createOrdeneDto);
    const orden = await this.ordenRepository.save(ordenEntity);
    createOrdeneDto.idOrden = orden.idOrden;
    return createOrdeneDto;
  }

  async findAll() {
    const ordenes = await this.ordenRepository.find();
    return ordenes.map((item) => this.mapper.entityToDto(item));
  }

  async findOne(id: number) {
    const orden = await this.ordenRepository.findOneBy({
      idOrden: id,
    });
    if (!orden) throw new NotFoundException('Orden no existe');
    return this.mapper.entityToDto(orden);
  }

  async update(id: number, updateOrdeneDto: OrdenDto) {
    const orden = await this.ordenRepository.findOneBy({
      idOrden: id,
    });
    if (!orden) throw new NotFoundException('Orden no existe');
    const actualizar = Object.assign(orden, updateOrdeneDto);
    return await this.ordenRepository.save(actualizar);
  }

  async remove(id: number) {
    const orden = await this.ordenRepository.findOneBy({
      idOrden: id,
    });
    if (!orden) throw new NotFoundException('Orden no existe');
    return await this.ordenRepository.delete(id);
  }
}
