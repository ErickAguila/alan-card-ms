import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoCartasService } from './tipo-cartas.service';
import { TipoCartasController } from './tipo-cartas.controller';
import { TipoCartaMapper } from './mappers/tipoCartaMapper';
import { TipoCarta } from './entities/tipo-carta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoCarta])],
  controllers: [TipoCartasController],
  providers: [TipoCartasService, TipoCartaMapper],
})
export class TipoCartasModule {}
