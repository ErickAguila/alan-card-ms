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
import { TipoCartasService } from './tipo-cartas.service';
import { TipoCartaDto } from './dto/tipo-carta.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('tipo-cartas')
@UseGuards(JwtAuthGuard) // se protege todos los endpoint de este controller
@Controller('tipo-cartas')
export class TipoCartasController {
  constructor(private readonly tipoCartasService: TipoCartasService) {}

  @Post()
  create(@Body() tipoCartaDto: TipoCartaDto) {
    return this.tipoCartasService.create(tipoCartaDto);
  }

  @Get()
  findAll() {
    return this.tipoCartasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoCartasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() tipoCartaDto: TipoCartaDto) {
    return this.tipoCartasService.update(+id, tipoCartaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoCartasService.remove(+id);
  }
}
