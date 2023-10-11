import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartasService } from './cartas.service';
import { CartasController } from './cartas.controller';
import { Carta } from './entities/carta.entity';
import { CartaMapper } from './mappers/cartaMapper';

@Module({
  imports: [TypeOrmModule.forFeature([Carta])],
  controllers: [CartasController],
  providers: [CartasService, CartaMapper],
})
export class CartasModule {}
