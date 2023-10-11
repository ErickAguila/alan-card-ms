import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoUsuariosService } from './tipo-usuarios.service';
import { TipoUsuariosController } from './tipo-usuarios.controller';
import { TipoUsuario } from './entities/tipo-usuario.entity';
import { TipoUsuarioMapper } from './mappers/tipoUsuarioMapper';

@Module({
  imports: [TypeOrmModule.forFeature([TipoUsuario])],
  controllers: [TipoUsuariosController],
  providers: [TipoUsuariosService, TipoUsuarioMapper],
})
export class TipoUsuariosModule {}
