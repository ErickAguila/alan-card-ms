import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HabilidadesService } from './habilidades.service';
import { HabilidadDto } from './dto/habilidad.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('habilidades')
@Controller('habilidades')
export class HabilidadesController {
  constructor(private readonly habilidadesService: HabilidadesService) {}

  @Post()
  create(@Body() createHabilidadeDto: HabilidadDto) {
    return this.habilidadesService.create(createHabilidadeDto);
  }

  @Get()
  findAll() {
    return this.habilidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habilidadesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHabilidadeDto: HabilidadDto) {
    return this.habilidadesService.update(+id, updateHabilidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habilidadesService.remove(+id);
  }
}
