import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TipoUsuariosService } from './tipo-usuarios.service';
import { TipoUsuarioDto } from './dto/tipo-usuario.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('tipo-usuarios')
@UseGuards(JwtAuthGuard) // se protege todos los endpoint de este controller
@Controller('tipo-usuarios')
export class TipoUsuariosController {
  constructor(private readonly tipoUsuariosService: TipoUsuariosService) {}

  @Post()
  create(@Body() createTipoUsuarioDto: TipoUsuarioDto) {
    return this.tipoUsuariosService.create(createTipoUsuarioDto);
  }

  @Get()
  findAll() {
    return this.tipoUsuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoUsuariosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTipoUsuarioDto: TipoUsuarioDto,
  ) {
    return this.tipoUsuariosService.update(+id, updateTipoUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoUsuariosService.remove(+id);
  }
}
