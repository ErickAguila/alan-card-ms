import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartaDto } from './dto/carta.dto';
import { Carta } from './entities/carta.entity';
import { CartaMapper } from './mappers/cartaMapper';

@Injectable()
export class CartasService {
  constructor(
    @InjectRepository(Carta)
    private cartaRerpository: Repository<Carta>,
    private mapper: CartaMapper,
  ) {}

  async create(createCartaDto: CartaDto) {
    const cartaEntity = this.mapper.dtoToEntity(createCartaDto);
    const carta = await this.cartaRerpository.save(cartaEntity);
    createCartaDto.idCarta = carta.idCarta;
    return createCartaDto;
  }

  async findAll() {
    const cartas = await this.cartaRerpository.find();
    return cartas.map((item) => this.mapper.entityToDto(item));
  }

  async findOne(id: number) {
    const carta = await this.cartaRerpository.findOneBy({
      idCarta: id,
    });
    if (!carta) throw new NotFoundException('Carta no existe');
    return this.mapper.entityToDto(carta);
  }

  async update(id: number, updateCartaDto: CartaDto) {
    const carta = await this.cartaRerpository.findOneBy({
      idCarta: id,
    });
    if (!carta) throw new NotFoundException('Carta no existe');
    const actualizar = Object.assign(carta, updateCartaDto);
    return await this.cartaRerpository.save(actualizar);
  }

  async remove(id: number) {
    const carta = await this.cartaRerpository.findOneBy({
      idCarta: id,
    });
    if (!carta) throw new NotFoundException('Carta no existe');
    return await this.cartaRerpository.delete(id);
  }
}
