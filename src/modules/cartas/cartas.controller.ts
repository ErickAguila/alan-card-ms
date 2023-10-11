import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartasService } from './cartas.service';
import { CartaDto } from './dto/carta.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cartas')
@Controller('cartas')
export class CartasController {
  constructor(private readonly cartasService: CartasService) {}

  @Post()
  create(@Body() cartaDto: CartaDto) {
    return this.cartasService.create(cartaDto);
  }

  @Get()
  findAll() {
    return this.cartasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() cartaDto: CartaDto) {
    return this.cartasService.update(+id, cartaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartasService.remove(+id);
  }
}
