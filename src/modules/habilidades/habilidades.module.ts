import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabilidadesService } from './habilidades.service';
import { HabilidadesController } from './habilidades.controller';
import { Habilidad } from './entities/habilidade.entity';
import { HabilidadMapper } from './mappers/habilidadMapper';

@Module({
  imports: [TypeOrmModule.forFeature([Habilidad])],
  controllers: [HabilidadesController],
  providers: [HabilidadesService, HabilidadMapper],
})
export class HabilidadesModule {}
