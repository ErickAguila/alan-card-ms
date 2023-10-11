import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrdenesService } from './ordenes.service';
import { OrdenDto } from './dto/orden.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ordenes')
@Controller('ordenes')
export class OrdenesController {
  constructor(private readonly ordenesService: OrdenesService) {}

  @Post()
  create(@Body() createOrdeneDto: OrdenDto) {
    return this.ordenesService.create(createOrdeneDto);
  }

  @Get()
  findAll() {
    return this.ordenesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordenesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdeneDto: OrdenDto) {
    return this.ordenesService.update(+id, updateOrdeneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordenesService.remove(+id);
  }
}
