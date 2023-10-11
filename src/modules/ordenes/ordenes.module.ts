import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenesService } from './ordenes.service';
import { OrdenesController } from './ordenes.controller';
import { Orden } from './entities/orden.entity';
import { OrdenMapper } from './mappers/ordenMapper';

@Module({
  imports: [TypeOrmModule.forFeature([Orden])],
  controllers: [OrdenesController],
  providers: [OrdenesService, OrdenMapper],
})
export class OrdenesModule {}
