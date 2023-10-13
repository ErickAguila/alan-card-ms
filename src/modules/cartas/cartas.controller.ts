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
import { CartasService } from './cartas.service';
import { CartaDto } from './dto/carta.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('cartas')
@UseGuards(JwtAuthGuard) // se protege todos los endpoint de este controller
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
